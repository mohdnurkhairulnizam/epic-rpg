// EPIC RPG Android interaction contract: treasure timers remain local-only, but a user-facing timer may notify and sound after the app is backgrounded.
import { Capacitor } from "@capacitor/core";
import { LocalNotifications, type LocalNotificationSchema } from "@capacitor/local-notifications";

const TREASURE_CHANNEL_ID = "treasure-timers";
const TREASURE_NOTIFICATION_ID_BASE = 120000;

type TreasureTimerPayload = {
  childId: string;
  childName: string;
  treasureId: string;
  treasureName: string;
  endAt: number;
  notificationId?: number;
  notificationKey?: string;
};

const isAndroid = () => Capacitor.getPlatform() === "android";

function notificationId(payload: TreasureTimerPayload) {
  if (payload.notificationId) return payload.notificationId;
  const source = `${payload.childId}:${payload.treasureId}:${payload.notificationKey || payload.endAt}`;
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = (hash * 31 + source.charCodeAt(index)) | 0;
  }
  return TREASURE_NOTIFICATION_ID_BASE + Math.abs(hash % 700000000);
}

async function prepareNotifications() {
  if (!isAndroid()) return { enabled: false, exact: false };

  let permissions = await LocalNotifications.checkPermissions();
  if (permissions.display !== "granted") {
    permissions = await LocalNotifications.requestPermissions();
  }

  const enabled = permissions.display === "granted";
  if (enabled) {
    await LocalNotifications.createChannel({
      id: TREASURE_CHANNEL_ID,
      name: "Treasure timers",
      description: "Alerts when a child’s treasure reward timer ends.",
      importance: 5,
      sound: "epic_alarm.wav",
      lights: true,
    });
  }

  let exact = false;
  try {
    const exactPermission = await LocalNotifications.checkExactNotificationSetting();
    exact = exactPermission.exact_alarm === "granted";
  } catch {
    exact = false;
  }

  window.dispatchEvent(new CustomEvent("epic-notification-permission-changed", { detail: { enabled, exact } }));
  return { enabled, exact };
}

export async function scheduleTreasureNotification(payload: TreasureTimerPayload) {
  if (!isAndroid() || payload.endAt <= Date.now()) return;
  const { enabled, exact } = await prepareNotifications();
  if (!enabled) return;

  const id = notificationId(payload);
  await LocalNotifications.cancel({ notifications: [{ id }] });
  await LocalNotifications.schedule({
    notifications: [
      {
        id,
        title: "Treasure time complete!",
        body: `${payload.childName} can finish ${payload.treasureName}.`,
        schedule: {
          at: new Date(payload.endAt),
          allowWhileIdle: true,
        },
        channelId: TREASURE_CHANNEL_ID,
        sound: "epic_alarm.wav",
        smallIcon: "ic_stat_epic_rpg",
        autoCancel: true,
        foreground: true,
        extra: {
          type: "treasure-timer-ended",
          childId: payload.childId,
          treasureId: payload.treasureId,
        },
        isExactNotification: exact,
      },
    ],
  });
}

export async function cancelTreasureNotification(payload: Pick<TreasureTimerPayload, "childId" | "treasureId" | "notificationId" | "notificationKey">) {
  if (!isAndroid()) return;
  const id = notificationId({ ...payload, childName: "", treasureName: "", endAt: 0 });
  await LocalNotifications.cancel({ notifications: [{ id }] });
}

export async function cancelAllTreasureNotifications() {
  if (!isAndroid()) return;
  const pending = await LocalNotifications.getAll({ state: "SCHEDULED" });
  const ids = pending.notifications
    .filter((notification) => (notification.extra as { type?: string } | undefined)?.type === "treasure-timer-ended")
    .map((notification) => notification.id);
  if (ids.length > 0) await LocalNotifications.cancel({ notifications: ids.map((id) => ({ id })) });
}

export async function syncTreasureNotifications(payloads: TreasureTimerPayload[]) {
  if (!isAndroid()) return;
  const { enabled } = await prepareNotifications();
  if (!enabled) return;

  const expectedIds = new Set(payloads.map((payload) => notificationId(payload)));
  const pending = await LocalNotifications.getAll({ state: "SCHEDULED" });
  const staleIds = pending.notifications
    .filter((notification) => {
      const extra = notification.extra as { type?: string } | undefined;
      return extra?.type === "treasure-timer-ended" && !expectedIds.has(notification.id);
    })
    .map((notification) => notification.id);
  if (staleIds.length > 0) await LocalNotifications.cancel({ notifications: staleIds.map((id) => ({ id })) });
  await Promise.all(payloads.map((payload) => scheduleTreasureNotification(payload)));
}

export function registerNativeNotifications() {
  if (!isAndroid()) return;

  let pendingOpenedChildId: string | null = null;
  const openPendingProfile = () => {
    if (!pendingOpenedChildId) return;
    const openChildProfile = (window as unknown as Record<string, unknown>).openChildProfile;
    if (typeof openChildProfile === "function") {
      const childId = pendingOpenedChildId;
      pendingOpenedChildId = null;
      (openChildProfile as (id: string) => void)(childId);
    }
  };

  const globalWindow = window as unknown as Record<string, unknown>;
  globalWindow.scheduleTreasureNotification = (payload: TreasureTimerPayload) => scheduleTreasureNotification(payload);
  globalWindow.cancelTreasureNotification = (payload: Pick<TreasureTimerPayload, "childId" | "treasureId" | "notificationId" | "notificationKey">) => cancelTreasureNotification(payload);
  globalWindow.syncTreasureNotifications = (payloads: TreasureTimerPayload[]) => syncTreasureNotifications(payloads);
  globalWindow.prepareTreasureNotifications = () => prepareNotifications();
  globalWindow.cancelAllTreasureNotifications = () => cancelAllTreasureNotifications();

  window.addEventListener("epic-app-ready", (event) => {
    openPendingProfile();
    const detail = (event as CustomEvent<{ activeTreasurePayloads?: TreasureTimerPayload[]; notificationsEnabled?: boolean }>).detail;
    if (detail?.notificationsEnabled === false) void cancelAllTreasureNotifications();
    else void syncTreasureNotifications(detail?.activeTreasurePayloads || []);
  });
  window.addEventListener("epic-notification-preference-changed", (event) => {
    const detail = (event as CustomEvent<{ enabled?: boolean }>).detail;
    if (detail?.enabled === false) void cancelAllTreasureNotifications();
  });
  window.addEventListener("epic-treasure-claimed", (event) => {
    void scheduleTreasureNotification((event as CustomEvent<TreasureTimerPayload>).detail);
  });
  window.addEventListener("epic-treasure-paused", (event) => {
    void cancelTreasureNotification((event as CustomEvent<TreasureTimerPayload>).detail);
  });
  window.addEventListener("epic-treasure-resumed", (event) => {
    void scheduleTreasureNotification((event as CustomEvent<TreasureTimerPayload>).detail);
  });
  window.addEventListener("epic-treasure-ended", (event) => {
    void cancelTreasureNotification((event as CustomEvent<TreasureTimerPayload>).detail);
  });
  window.addEventListener("epic-treasure-notification-opened", (event) => {
    const detail = (event as CustomEvent<{ childId?: string }>).detail;
    if (detail?.childId) {
      pendingOpenedChildId = detail.childId;
      openPendingProfile();
    }
  });

  void LocalNotifications.addListener("localNotificationReceived", (notification: LocalNotificationSchema) => {
    const extra = notification.extra as { type?: string; childId?: string; treasureId?: string } | undefined;
    if (extra?.type === "treasure-timer-ended") {
      window.dispatchEvent(new CustomEvent("epic-treasure-notification-received", { detail: extra }));
    }
  });

  void LocalNotifications.addListener("localNotificationActionPerformed", ({ notification }) => {
    const extra = notification.extra as { type?: string; childId?: string; treasureId?: string } | undefined;
    if (extra?.type === "treasure-timer-ended") {
      window.dispatchEvent(new CustomEvent("epic-treasure-notification-opened", { detail: extra }));
    }
  });
}
