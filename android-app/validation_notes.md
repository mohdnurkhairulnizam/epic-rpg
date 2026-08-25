# Android Validation Notes

## Preview checks completed

- The packaged web bundle was served locally through the Android migration preview.
- The preview rendered the four pre-loaded child profiles and the four pre-loaded treasure presets.
- The Shop/Treasures screen remained responsive after opening and dismissing Claim Treasure.
- The actual generated modal is `#claimTreasureModal` with class `modal active`; its visible controls are `×` and `Cancel`.
- Repeated open -> Cancel -> reopen -> Cancel cycles were verified in the preview. Each close removed the generated dialog from the DOM; no stale modal remained.
- The stable Claim Treasure close routine is present in the Android source and removes all `#claimTreasureModal` instances.

## Storage and navigation implementation findings

- App data is initialized from the stable presets when `localStorage.epic_rpg_data` is absent.
- App data is persisted under `localStorage.epic_rpg_data`.
- In-app navigation uses `switchTab`, `openChildProfile`, and `backToDashboard`.
- The Android shell now registers a Capacitor App hardware Back listener. Its intended order is: close active modal, leave child profile to Dashboard, return non-Dashboard tabs to Dashboard, honor browser history if available, otherwise exit the app.

## Package validation

- TypeScript validation passed after adding the native Back bridge.
- Debug APK rebuild passed.
- Release AAB rebuild passed before the Back bridge and will be rebuilt after the final bridge change.
- Package identity: `com.epicrpg.familyquest`.
- Target and compile SDK: 36.
- Local asset references and files: 38 references, 38 files.
- No `/manus-storage/` references, analytics placeholders, or known WebDev secrets were found in the Android source.

## Environment limitation

- No Android emulator or attached device was available through `adb devices` in this sandbox, so hardware Back cannot be physically exercised here. The native listener and its escape-route logic are covered by source inspection and the web-preview equivalents; owner-side closed testing should include physical Back behavior on Android devices.

## Final non-destructive browser round-trip

The same vanilla application logic used by the Android bundle passed a local-storage round-trip: a temporary marker written to `epic_rpg_data` was read back successfully and the original value was restored afterward. The data contained all four pre-loaded children. The navigation route checks returned `shop`, `play`, `profile-screen`, and `dashboard` in the expected sequence.

## Release signing status

The generated `app-release.aab` is intentionally unsigned because no owner keystore or Google Play signing credentials were available in the sandbox. `jarsigner` reported that the bundle is unsigned. The Android project therefore needs the owner’s release signing configuration before the AAB can be uploaded to Play Console.

## Touch-target check

The visible bottom navigation controls measured 256×78 CSS pixels each in the preview. All five navigation controls exceeded the 44×44 minimum touch-size check; no undersized navigation target was reported.

## Timer notification and sound feature validation

- Installed `@capacitor/local-notifications@8.3.1` and synchronized the Android project.
- Added `POST_NOTIFICATIONS` and `SCHEDULE_EXACT_ALARM` declarations to the Android manifest.
- Added the dedicated `ic_stat_epic_rpg` status-bar icon and bundled `epic_alarm.wav` (16-bit mono PCM, 44.1 kHz, 2.4 seconds).
- Active treasure timers now persist `endAt` and `notificationKey`, reconcile scheduled notifications on startup, schedule on claim/resume, cancel on pause/end/reset/delete, and navigate to the child profile when a notification is tapped.
- Notification permission is requested through the in-app Settings action. Exact scheduling is used when available; otherwise the Local Notifications plugin is allowed to use its inexact fallback.
- Task approval, badge achievement, and QML tier unlock events now emit distinct short Web Audio feedback patterns. The Settings screen includes a sound toggle, volume slider, test button, and treasure-notification preference.
- Runtime viewport classification and CSS rules cover `small-phone`, `phone`, `large-phone`, and `tablet` widths, portrait/landscape changes, safe-area insets, dynamic viewport height, keyboard-visible forms, modals, and bottom navigation.
- `pnpm check`, Vite production build, Capacitor sync, `assembleDebug`, and `bundleRelease` passed after the feature changes.
- No emulator or physical Android device is attached, so notification permission dialogs, background delivery, exact-alarm settings, audible output, and hardware-specific rendering still require owner-side device testing.

## Final Android 1.1.0 artifacts

The final build uses package `com.epicrpg.familyquest`, versionName `1.1`, versionCode `2`, compile/target SDK 36, and minimum SDK 24. The debug APK SHA-256 is `d270208d6d5a7bdfee97a495a4d2b2ad254d6f606023a1d8b0214d434ca26122`; the unsigned release AAB SHA-256 is `ac577a4e9ddc91dad54062ef2410dead319d2bd3609ab66eb3402cf8963ed295`.

## Android regression fixes

The screen-off delivery issue was traced to the bridge explicitly setting `isExactNotification` to `false` whenever exact-alarm access was not already granted. That forced an inexact alarm and could delay delivery until the device woke. New claims and resumes now request exact scheduling through the plugin; Android opens the Alarms & reminders settings flow when needed, and a non-mandatory inexact fallback remains available if the user declines. The Settings screen also has an explicit “Allow Precise Screen-Off Alarms” action.

Play and Shop card actions now use a labeled pixel-styled trash control with `Delete`, `aria-label`, and `title` instead of an ambiguous X. Ongoing quest actions now have working `cancelQuest` and `rejectQuest` functions. Cancel removes the active quest after confirmation; Reject changes a pending-approval quest back to ongoing, removes its completion date, saves the state, and refreshes the profile/dashboard.

The corrected source passed `pnpm check`, Vite production build, Capacitor sync, `assembleDebug`, and `bundleRelease`. Physical screen-off notification delivery, exact-alarm settings, audio output, and Android OEM battery behavior still require testing on a real device.

## NFC preview validation

The Android Vite preview rendered the four preloaded children and the fixed bottom navigation. The Dashboard exposes the `📱 Scan Card` entry point, and the Android shell loads the bundled `mobile-assets` avatar paths. Native NFC hardware is not available in the browser preview, so manual NFC-ID fallback and physical tag detection remain device tests.

A temporary browser-only NFC ID `04A1B2C3` was assigned to the first preset child for UI validation. This test change is confined to the temporary preview browser localStorage and is not part of the Android source or the stable website checkpoint.

The Android preview opened the Scan NFC Card modal with clear `Start NFC Scan`, `Use ID`, and `Close` controls. Browser preview correctly exposes the manual ID fallback because native NFC is unavailable outside an Android device.

The manual-ID fallback opened the NFC child action window successfully for `Muhammad Darwish Ar-Rayyan`. The modal showed the child name, token count, ongoing quest count, all available quest request buttons, and the token-based treasure section. With zero tokens, it correctly displayed that no treasure was affordable.

The NFC child action window quest-request path worked in preview: selecting a quest closed the modal, saved the quest to the first child, and rendered the Dashboard with `On Quest: 1 active`. A temporary browser-only token balance was then set to 100 to exercise the eligible-treasure path.

The NFC scan modal reopened successfully after the first quest request, while the temporary first-child balance remained at 100 tokens. This confirms repeated scan entry remains available after an NFC child action.

With a temporary browser-only balance of 100 tokens, the NFC child action window displayed all four eligible preset treasures and their token costs. This confirms the eligibility filter is based on the scanned child’s current token count.
