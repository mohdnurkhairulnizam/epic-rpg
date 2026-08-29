import {
  AndroidBiometryStrength,
  BiometricAuth,
  BiometryError,
  BiometryErrorType,
} from "@aparajita/capacitor-biometric-auth";
import { Capacitor } from "@capacitor/core";

type ParentBiometricReason = "open-child-profile" | "approve-quest" | "grant-questmaster-boon";

type ParentBiometricResult = {
  ok: boolean;
  code?: string;
};

type ParentBiometricWindow = Window & {
  requestParentBiometric?: (reason: ParentBiometricReason) => Promise<ParentBiometricResult>;
};

let verificationInFlight: Promise<ParentBiometricResult> | null = null;

function messageForFailure(code: string | undefined, reason: ParentBiometricReason) {
  if (code === BiometryErrorType.userCancel || code === BiometryErrorType.systemCancel || code === BiometryErrorType.appCancel) {
    return "Parent verification was cancelled. Nothing was changed.";
  }
  if (code === BiometryErrorType.authenticationFailed) {
    return "Fingerprint not recognized. Nothing was changed.";
  }
  if (code === BiometryErrorType.biometryLockout) {
    return "Fingerprint verification is temporarily locked. Try again later.";
  }
  if (code === BiometryErrorType.biometryNotEnrolled || code === BiometryErrorType.biometryNotAvailable || code === BiometryErrorType.userFallback) {
    return "Set up a fingerprint in Android Settings before using this parent action.";
  }
  if (reason === "grant-questmaster-boon") {
    return "Parent fingerprint verification is required before granting tokens.";
  }
  if (reason === "approve-quest") {
    return "Parent fingerprint verification is required before approving a quest.";
  }
  return "Parent fingerprint verification is required before opening child details.";
}

async function requestParentBiometric(reason: ParentBiometricReason): Promise<ParentBiometricResult> {
  if (verificationInFlight) return verificationInFlight;

  verificationInFlight = (async () => {
    try {
      const availability = await BiometricAuth.checkBiometry();
      if (!availability.strongBiometryIsAvailable) {
        const code = availability.strongCode || BiometryErrorType.biometryNotEnrolled;
        window.dispatchEvent(new CustomEvent("epic-biometric-status", {
          detail: { type: "error", code, message: messageForFailure(code, reason), reason },
        }));
        return { ok: false, code };
      }

      await BiometricAuth.authenticate({
        reason: reason === "grant-questmaster-boon"
          ? "Verify your fingerprint to grant Questmaster's Boon tokens"
          : reason === "approve-quest"
            ? "Verify your fingerprint to approve this quest"
            : "Verify your fingerprint to open child details",
        cancelTitle: "Cancel",
        allowDeviceCredential: false,
        androidTitle: "Parent verification",
        androidSubtitle: "Use your enrolled fingerprint to continue",
        androidConfirmationRequired: true,
        androidBiometryStrength: AndroidBiometryStrength.strong,
      });

      window.dispatchEvent(new CustomEvent("epic-biometric-status", {
        detail: { type: "success", code: BiometryErrorType.none, reason },
      }));
      return { ok: true };
    } catch (error) {
      const code = error instanceof BiometryError ? error.code : undefined;
      window.dispatchEvent(new CustomEvent("epic-biometric-status", {
        detail: { type: "error", code, message: messageForFailure(code, reason), reason },
      }));
      return { ok: false, code };
    } finally {
      verificationInFlight = null;
    }
  })();

  return verificationInFlight;
}

export function registerNativeBiometric() {
  if (Capacitor.getPlatform() !== "android") return;
  (window as ParentBiometricWindow).requestParentBiometric = requestParentBiometric;
}
