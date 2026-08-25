# Android Notification and Alarm Research

The official Android notification-permission guidance states that Android 13/API 33 and higher requires the `POST_NOTIFICATIONS` runtime permission for non-exempt notifications. The permission should be declared in the manifest and requested in an appropriate user-facing context. Source: [Android notification runtime permission](https://developer.android.com/develop/ui/compose/notifications/notification-permission).

The official Android alarm guidance says exact alarms should be used only for user-facing functions that require precise timing. `SCHEDULE_EXACT_ALARM` is user-granted and is not pre-granted to fresh installs targeting Android 13/API 33 and higher; applications should check `canScheduleExactAlarms()` and reschedule alarms when permission or device state changes. Source: [Android schedule alarms](https://developer.android.com/develop/background-work/services/alarms).

Implementation implication: use local notifications for treasure timers, request notification permission on Android 13+, avoid requiring exact-alarm access unless the product’s alarm precision justifies the additional special access flow, and reconcile active timers on app startup/foreground and after reboot where supported. The first release remains local-only; no server push service is needed.
