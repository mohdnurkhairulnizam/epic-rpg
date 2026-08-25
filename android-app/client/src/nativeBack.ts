// EPIC RPG Android interaction contract: preserve the stable Minecraft/pixel UI and make hardware Back follow the same in-app escape routes before exiting at the root.
import { App } from "@capacitor/app";

function callVanillaHandler(name: string, ...args: string[]) {
  const handler = (window as unknown as Record<string, unknown>)[name];
  if (typeof handler === "function") {
    (handler as (...handlerArgs: string[]) => void)(...args);
    return true;
  }
  return false;
}

export function registerNativeBackButton() {
  void App.addListener("backButton", ({ canGoBack }) => {
    const activeModal = document.querySelector<HTMLElement>(".modal.active");
    if (activeModal?.id) {
      callVanillaHandler("closeModal", activeModal.id);
      return;
    }

    const activeProfile = document.getElementById("profile-screen");
    if (activeProfile?.classList.contains("active")) {
      callVanillaHandler("backToDashboard");
      return;
    }

    const activeTab = document.querySelector<HTMLElement>(".tab-content.active")?.id;
    if (activeTab && activeTab !== "dashboard") {
      callVanillaHandler("switchTab", "dashboard");
      return;
    }

    if (canGoBack) {
      window.history.back();
      return;
    }

    void App.exitApp();
  });
}
