# EPIC RPG Android 1.4.5

## Release summary

EPIC RPG Android 1.4.5 refines the family quest experience around three related improvements: a more focused NFC checkpoint flow, an in-app Family Quest Playbook, and clearer Qur'an learning terminology. The Android package metadata is now `versionName 1.4.5` with `versionCode 20`.

## What changed

| Area | Update | User benefit |
|---|---|---|
| NFC header control | The NFC action is a compact control in the top-right app header. | It remains visible without stacking over the title or dashboard content. |
| NFC scan station | The scan window uses a pixel-styled checkpoint panel, scanning beam treatment, hold-near-phone instruction, explicit close controls, and success/error states. | A parent can understand what to do immediately and receive clearer feedback during a scan. |
| NFC feedback | Button-press feedback is routed through the shared native feedback path, while successful reads trigger the scan-success sound and celebration state. | The interaction feels responsive without duplicating the press sound. |
| NFC success flow | A linked card produces a confirmation state and opens the linked child checkpoint/profile flow after the success celebration. | The card-to-child action is easier to follow. |
| Family Quest Playbook | Settings now includes a Playbook entry and modal explaining the Quest Loop, Qur'an Mastery Level, Treasure Vault, Special Rewards, NFC Checkpoint, and local family data behavior. | New families can learn the app mechanics without leaving the app. |
| Terminology | Visible `QML` labels were replaced with `Qur'an Mastery Level` or `Qur'an Mastery Levels`, with `Qur'an Mastery Path` used where the UI describes the broader progression. | The learning feature is clearer and uses the natural term consistently. |
| Quest tab | Questmaster's Boon remains available as a configurable direct token grant and is visually preserved with the Quest Arena styling. | Parents can continue awarding a direct blessing without affecting weekly Quest Points. |

## Compatibility and data behavior

The app continues to use local device storage for the existing family data model. Internal `qml*` field and handler identifiers remain unchanged where required for compatibility with stored data; only user-facing terminology was changed. No customer reviews, ratings, or testimonials were added.

## Validation completed

The preview was checked for the Dashboard, Quest, Settings, Playbook, NFC scan station, and success state. The scanner opened from the top-right header, the scan-success state applied its success classes and rendered the confirmation text, the Playbook opened from Settings, and the Questmaster's Boon panel remained available. The Quest and Settings renderings showed the updated Qur'an terminology without visible `QML` labels.

The following checks passed after the final NFC feedback correction:

| Check | Result |
|---|---|
| TypeScript check (`pnpm check`) | Passed |
| Web production build (`pnpm build`) | Passed |
| Android version metadata | Updated to 1.4.5 / versionCode 20 |
| NFC interaction validation | Passed in preview simulation |
| Playbook access validation | Passed in preview |

The Vite production build reports a non-blocking large-chunk advisory for the main JavaScript bundle. This does not prevent packaging, but code-splitting can be considered in a future optimization pass.

## Android packaging

The debug APK is produced with `pnpm android:debug`. The release Android App Bundle is produced with `pnpm android:release`. A release bundle is suitable for Google Play only when a valid release signing configuration is present in `android/signing.properties`; otherwise Gradle can still compile the app but the output must be signed through the configured release process before upload.

## Google Play checklist

Before publishing, confirm the final application icon, screenshots, store listing text, privacy policy URL, Data Safety answers, target audience and content declarations, app access instructions if any features require login, and the signed release AAB. Upload the AAB to an internal testing track first, install it on the target phone, and verify NFC permissions, scan success feedback, timer behavior, and notification behavior on the supported Android versions.
