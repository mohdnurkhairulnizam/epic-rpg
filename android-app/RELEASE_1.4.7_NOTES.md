# EPIC RPG Android 1.4.7

## Release summary

EPIC RPG Android 1.4.7 adds parent verification for sensitive family-management actions. The Android package metadata is `versionName 1.4.7` with `versionCode 22`.

## What changed

| Protected action | New behavior | Safety result |
|---|---|---|
| Questmaster’s Boon | The app asks for strong enrolled Android biometrics before granting direct tokens. | A direct token grant cannot proceed when verification is cancelled, rejected, unavailable, or locked out. |
| Open child details | Opening a child profile from the Dashboard asks for parent verification first. | Child details and the approval controls are not exposed through the normal profile route without verification. |
| Approve quest | Quest approval asks for parent verification again at the approval boundary. | A pending quest remains pending and no tokens are awarded when verification fails. |
| Fingerprint data | The app uses the operating system’s biometric prompt and stores no fingerprint images or templates. | The Android system performs the biometric match. |
| Device credential fallback | PIN, pattern, and password fallback are disabled for these parent actions. | These actions require an enrolled strong biometric on the Android device. |
| Feedback | Cancellation, failed recognition, temporary lockout, and missing enrollment produce clear in-app messages. | Parents know that nothing changed and what to do next. |

The companion website keeps its existing behavior because it does not have the native Android biometric bridge. The protection is active in Android builds, where the native system prompt is available.

## Validation

Preview tests used a temporary verification function to exercise both outcomes without storing test data. A denied child-profile request kept the profile screen closed. An approved request opened the profile. A denied Questmaster’s Boon request left the token balance unchanged. An approved request granted the configured tokens, after which the test restored the original balance and blessing history.

A temporary pending quest was used to test approval. When verification was denied, the quest remained pending and the token balance did not change. When verification was approved, the quest was approved and tokens increased; the temporary quest, history, badges, and token balance were then restored.

| Check | Result |
|---|---|
| TypeScript check (`pnpm check`) | Passed before final Android package build |
| Production web build (`pnpm build`) | Passed before final Android package build |
| Android biometric plugin | `@aparajita/capacitor-biometric-auth` 10.0.0 |
| Android biometric permission | `android.permission.USE_BIOMETRIC` added |
| Profile and Boon denied/approved guards | Passed in preview simulation |
| Quest approval denied/approved guard | Passed in preview simulation |

A real Android phone with an enrolled fingerprint is still required to test the system prompt itself, including cancellation, failed recognition, no enrollment, and lockout behavior.

## Packaging

Build the debug APK and release AAB with:

```bash
cd /home/ubuntu/epic-rpg-android
pnpm android:debug
pnpm android:release
```

The release AAB must be rebuilt with the owner’s private Google Play signing key before upload. Keep the upload keystore and `android/signing.properties` out of GitHub.
