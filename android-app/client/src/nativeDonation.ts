import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";

const DEVELOPER_SUPPORT_URL = "https://ko-fi.com/maneekinstudio";

type DeveloperSupportResult = { ok: boolean; url?: string };

type DonationWindow = Window & {
  openDeveloperSupport?: () => Promise<DeveloperSupportResult>;
};

async function openDeveloperSupport(): Promise<DeveloperSupportResult> {
  try {
    await Browser.open({
      url: DEVELOPER_SUPPORT_URL,
      presentationStyle: "popover",
      toolbarColor: "#243f26",
    });
    return { ok: true, url: DEVELOPER_SUPPORT_URL };
  } catch (error) {
    console.error("Unable to open developer support page", error);
    return { ok: false, url: DEVELOPER_SUPPORT_URL };
  }
}

export function registerNativeDonation() {
  const globalWindow = window as DonationWindow;

  if (Capacitor.getPlatform() === "android") {
    globalWindow.openDeveloperSupport = openDeveloperSupport;
    return;
  }

  // Keep the browser companion usable without the Capacitor Browser plugin.
  globalWindow.openDeveloperSupport = async () => {
    const opened = window.open(DEVELOPER_SUPPORT_URL, "_blank", "noopener,noreferrer");
    return { ok: Boolean(opened), url: DEVELOPER_SUPPORT_URL };
  };
}

export { DEVELOPER_SUPPORT_URL };
