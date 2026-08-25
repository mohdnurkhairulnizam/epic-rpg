import type { CapacitorConfig } from "@capacitor/cli";

/**
 * EPIC RPG Android shell
 * Design intent: preserve the stable Minecraft/pixel UI and behavior while
 * packaging the web bundle locally for Android. Keep the website project and
 * its published checkpoint independent from this mobile workspace.
 */
const config: CapacitorConfig = {
  appId: "com.epicrpg.familyquest",
  appName: "EPIC RPG Family Quest",
  webDir: "dist/public",
  android: {
    allowMixedContent: false,
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_epic_rpg",
      sound: "epic_alarm.wav",
    },
  },
  loggingBehavior: "none",
};

export default config;
