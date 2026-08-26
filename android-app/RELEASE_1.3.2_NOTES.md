# EPIC RPG Android 1.3.2

## Release summary

Version **1.3.2** (Android `versionCode 6`) updates the treasure-timer notification behavior. The Capacitor local-notifications Android plugin is patched to use `NotificationCompat.VISIBILITY_PUBLIC`, allowing the timer notification content to remain eligible for lock-screen display when the phone screen is off. The existing audible alarm, local-only storage, NFC child linking, child-focus action window, QML tracking, and Minecraft pixel UI are preserved.

## Build outputs

The release build was verified locally with:

```bash
pnpm android:debug
pnpm android:release
```

Generated files:

- `android/app/build/outputs/apk/debug/app-debug.apk`
- `android/app/build/outputs/bundle/release/app-release.aab`

The APK and AAB are build artifacts and are intentionally not committed to the source repository. They are delivered separately with the release checkpoint.

## Physical-device validation required

Before Google Play submission, install the APK on a real Android device and test the following sequence:

1. Grant notification permission and enable sound/notification preferences in Settings.
2. Claim or schedule a treasure with a short timer.
3. Lock the phone screen and wait for the timer to expire.
4. Confirm that a visible notification appears on the lock screen and that the alarm sound plays.
5. Repeat with the phone unlocked and confirm the in-app notification and sound behavior.
6. Verify NFC child linking, child-focus quest requests, quest completion, treasure claims, and notification behavior after a device restart.

Android manufacturers may apply battery optimization or lock-screen privacy policies differently. If a device suppresses alarms or notifications, allow notifications, permit exact alarms when requested, and exclude EPIC RPG from battery optimization for testing.

## Reproducible patch configuration

`pnpm-workspace.yaml` is the authoritative pnpm 10 configuration. It registers the local notification patch and the existing Wouter patch so a clean dependency installation applies both patches consistently.
