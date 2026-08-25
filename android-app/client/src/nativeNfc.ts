// EPIC RPG Android interaction contract: NFC is optional hardware access used only to resolve a local child profile.
import { Capacitor } from "@capacitor/core";
import { CapacitorNfc, type NfcEvent } from "@capgo/capacitor-nfc";

const isAndroid = () => Capacitor.getPlatform() === "android";

type ScanPurpose = "open" | "add" | "edit";

let scanListener: { remove: () => Promise<void> } | null = null;
let scanning = false;

function normalizeNfcId(bytes: number[] | undefined) {
  if (!bytes || bytes.length === 0) return "";
  return bytes.map((byte) => Number(byte).toString(16).padStart(2, "0").toUpperCase()).join(":");
}

function updateScanStatus(message: string, tone: "info" | "error" = "info") {
  window.dispatchEvent(new CustomEvent("epic-nfc-status", { detail: { message, tone } }));
}

async function stopNfcScan() {
  if (!isAndroid()) return;
  scanning = false;
  if (scanListener) {
    await scanListener.remove().catch(() => undefined);
    scanListener = null;
  }
  await CapacitorNfc.stopScanning().catch(() => undefined);
}

async function startNfcScan(purpose: ScanPurpose = "open") {
  if (!isAndroid()) {
    updateScanStatus("NFC scanning is available in the Android app. You can enter a card ID manually here.", "error");
    return;
  }

  const { supported } = await CapacitorNfc.isSupported().catch(() => ({ supported: false }));
  if (!supported) {
    updateScanStatus("This phone does not have NFC hardware. Enter the card ID manually instead.", "error");
    return;
  }

  const { status } = await CapacitorNfc.getStatus().catch(() => ({ status: "NFC_DISABLED" as const }));
  if (status === "NFC_DISABLED") {
    updateScanStatus("NFC is turned off. Turn it on in Android Settings, then tap Scan Card again.", "error");
    await CapacitorNfc.showSettings().catch(() => undefined);
    return;
  }

  await stopNfcScan();
  scanning = true;
  updateScanStatus("Hold the NFC card near the back of the phone…");

  scanListener = await CapacitorNfc.addListener("nfcEvent", async (event: NfcEvent) => {
    if (!scanning) return;
    const nfcId = normalizeNfcId(event.tag?.id);
    if (!nfcId) {
      updateScanStatus("The card was detected, but it did not provide a readable card ID.", "error");
      return;
    }
    await stopNfcScan();
    window.dispatchEvent(new CustomEvent("epic-native-nfc-detected", { detail: { nfcId, purpose, eventType: event.type } }));
  });

  try {
    await CapacitorNfc.startScanning({ invalidateAfterFirstRead: true });
  } catch (error) {
    await stopNfcScan();
    updateScanStatus("NFC scanning could not start. Check that NFC is enabled and try again.", "error");
    console.warn("EPIC RPG NFC scan failed", error);
  }
}

export function registerNativeNfc() {
  if (!isAndroid()) return;
  const globalWindow = window as unknown as Record<string, unknown>;
  globalWindow.startNfcScan = (purpose: ScanPurpose = "open") => startNfcScan(purpose);
  globalWindow.stopNfcScan = () => stopNfcScan();
}
