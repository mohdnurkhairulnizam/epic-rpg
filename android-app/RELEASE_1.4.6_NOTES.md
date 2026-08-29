# EPIC RPG Android 1.4.6

## Release summary

EPIC RPG Android 1.4.6 improves the weekly Leaderboard for families with long child names and adds a small sound confirmation to every bottom-navigation tab press. The Android package metadata is now `versionName 1.4.6` with `versionCode 21`.

## What changed

| Area | Update | User benefit |
|---|---|---|
| Leaderboard names | Each weekly race name is measured after rendering. Names wider than their available row receive a paced horizontal marquee. | A long child name can be read in full without moving the rank label or breaking the card. |
| Short names | Names that fit stay still and do not animate. | The board remains calm and easy to scan. |
| Accessibility | The name button keeps the full child name in its accessible label and title. | The full name remains available even when the visual text is between marquee positions. |
| Bottom navigation | Dashboard, Leaderboard, Quest, Shop, and Settings now emit one shared tab-press feedback event. | Every bottom-tab press receives a quick, Minecraft-inspired navigation chime. |
| Sound preferences | The new chime uses the existing Android-only feedback registration and the existing enabled/volume settings. | Muting or lowering sound continues to work consistently. |
| Motion preference | The marquee is disabled when the device requests reduced motion. | The app respects the user’s motion preference. |

## Validation

The preview test replaced a rendered child name with `Muhammad Abdul Rahman Al-Farouq Ibn Khalid Al-Madani`. The name overflow measured `56px`, the marquee class activated, and the calculated duration was `13.0s`. The name stayed inside the weekly race card and did not displace the rank label.

The same test pressed all five bottom tabs and captured exactly one `epic-bottom-tab-pressed` event for each destination: Dashboard, Leaderboard, Quest, Shop, and Settings. The event is consumed by the Android native feedback module, where sound remains controlled by the app’s existing sound settings.

| Check | Result |
|---|---|
| TypeScript check (`pnpm check`) | Passed |
| Web production build (`pnpm build`) | Passed |
| Android version metadata | Updated to 1.4.6 / versionCode 21 |
| Long-name marquee behavior | Passed in preview |
| Five bottom-tab event coverage | Passed in preview |

The production build reports the existing non-blocking large JavaScript chunk advisory. It does not prevent Android packaging.

## Packaging

Build the debug APK and release AAB with:

```bash
cd /home/ubuntu/epic-rpg-android
pnpm android:debug
pnpm android:release
```

The release AAB must be rebuilt with the owner’s private signing key before it is uploaded to Google Play. Keep the upload keystore and `android/signing.properties` out of GitHub.
