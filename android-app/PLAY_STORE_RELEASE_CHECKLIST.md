# EPIC RPG Family Quest — Google Play Release Checklist

## Release status

The Android project is packaged as a Capacitor application with package identity `com.epicrpg.familyquest`, version name `1.1`, version code `2`, minimum SDK 24, and target/compile SDK 36. The generated debug APK is suitable for private sideload testing. The generated release AAB is **unsigned** because no owner keystore or Play credentials were available in the workspace; it is not ready for direct Play Console upload until the owner completes signing.

The app is intentionally local-only for its first Android release. Family data, quest history, treasure history, QML progress, badges, settings, and reward state remain on the individual Android device under the app’s local storage. There is no cloud synchronization in this release, so two devices do not share state.

## Owner actions before upload

| Area | Required action | Completion evidence |
|---|---|---|
| Developer account | Create or use the Google Play Console developer account, complete identity/contact verification, and accept the current developer agreements. | Play Console account is verified and able to create an app. |
| App identity | Create the app using the final name and package `com.epicrpg.familyquest`. Do not change the package after the first Play registration. | Play Console app entry matches the Android manifest. |
| Signing | Use Google Play App Signing. Create a private upload keystore, keep a secure backup, and place local values in `android/signing.properties` using `android/signing.properties.example` as the template. | A locally signed AAB verifies with the owner’s upload certificate. |
| Store listing | Supply the app description, short description, category, contact email, app icon, feature graphic, phone screenshots, and any required tablet/large-screen graphics. | All required listing fields pass Play Console validation. |
| Privacy | Publish a privacy policy URL describing local-only storage, no cloud sync, no advertising, and the app’s data deletion behavior. Confirm the wording still matches the implementation before submission. | Public privacy policy URL opens without login and is entered in Play Console. |
| Data safety | Complete the Data safety form based on the final build and the owner’s policy choices. The app uses local storage, requests notification permission on Android 13+, schedules local treasure-timer notifications, and plays local audio; it has no cloud sync, advertising, analytics, or server push in this release. Represent the final behavior accurately. | Data safety form is accepted by Play Console. |
| Content rating | Complete the Play content-rating questionnaire and target-audience declarations. Because this app is for families and children, answer the child-directed questions carefully and consistently with the store listing. | Content rating is generated and no policy warnings remain. |
| Testing | Upload the signed AAB to an internal test first. For eligible personal developer accounts created after November 13, 2023, create a closed test with at least 12 opted-in testers who remain enrolled for at least 14 continuous days before requesting production access. | Test track has the required testers, test period, and production-access request status. |
| Production | After test feedback and Play review, request production access where required and promote the tested release to production. | Production rollout is available and the public listing is published. |

## Local signing workflow

From the Android workspace, copy the template and fill it with the owner’s private keystore values. Keep both `signing.properties` and the keystore out of GitHub.

```bash
cd /home/ubuntu/epic-rpg-android
cp android/signing.properties.example android/signing.properties
# Edit android/signing.properties with the owner’s values.
pnpm android:release
```

When `android/signing.properties` exists, the Gradle release build uses its `storeFile`, `storePassword`, `keyAlias`, and `keyPassword` values. When it does not exist, the project remains buildable for validation but produces an unsigned release bundle. The owner should verify the certificate fingerprints and retain a secure backup of the upload key before the first upload.

## Recommended physical-device test pass

Before creating the closed test, install the signed build on Android devices running Android 7.0 or later. Confirm first-run preset data, child creation, quest assignment to multiple children, quest completion and reward calculations, QML progress, age multiplier settings, badge progress, treasure claiming, repeated Claim Treasure open/Cancel cycles, timer behavior, notification permission and Android notification-channel sound, end-of-timer alarm delivery while the app is backgrounded, achievement/task-completion tones, sound settings, portrait and landscape layout, small-phone layout, keyboard input, app restart persistence, Android hardware Back behavior, and uninstall/clear-data behavior. Test at least one small phone and one current Android device because the app is a responsive web UI inside a native shell.

No emulator or attached Android device was available in the build sandbox. The native Back listener and equivalent web escape routes were validated in source and preview, but the owner’s device test remains required for final release confidence.

## Official resources to re-check before submission

| Topic | Official resource |
|---|---|
| Play Console developer account | [Create a Play Console developer account](https://support.google.com/googleplay/android-developer/answer/6112435) |
| Closed testing and production access | [Test requirements for personal developer accounts](https://support.google.com/googleplay/android-developer/answer/14151465) |
| Play App Signing | [Use Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756) |
| Android App Bundle | [Android App Bundle documentation](https://developer.android.com/guide/app-bundle) |
| Launch preparation | [Android launch checklist](https://developer.android.com/distribute/best-practices/launch/launch-checklist) |
| Notification permission | [Android notification runtime permission](https://developer.android.com/develop/ui/compose/notifications/notification-permission) |
| Local notifications | [Capacitor Local Notifications API](https://capacitorjs.com/docs/apis/local-notifications) |

Google Play policy, target-API, child-safety, privacy, and testing requirements can change. The owner should use the current Play Console guidance at the moment of submission rather than relying on this document as a substitute for the live policy pages.
