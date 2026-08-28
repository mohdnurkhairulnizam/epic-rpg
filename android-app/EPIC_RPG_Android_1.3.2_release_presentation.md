# EPIC RPG Android 1.3.2 Release Presentation

## Cover

**EPIC RPG Android 1.3.2**

**Lock-Screen Treasure Timer Notifications**

Release summary | Android `versionCode 6`

## Slide 1

### Release 1.3.2 closes a screen-off notification gap

| Release signal | Status |
|---|---|
| App version | **1.3.2** |
| Android versionCode | **6** |
| Core correction | Lock-screen notification visibility updated |
| User value | Treasure timers can remain visibly actionable when the display is off |

This release preserves EPIC RPG’s child-focused quest, treasure, QML, sound, NFC, and local-only data model while correcting the native visibility flag used by treasure-timer alerts. [1]

## Slide 2

### The reported experience was sound without a visible alert

When a treasure timer ended with the phone screen off, the alarm could be heard but the expected notification was not visibly available until the display woke. That reduced the usefulness of timed rewards because the family could miss the immediate prompt to return to the app.

> **Goal:** Make the timer alert eligible to appear on the Android lock screen, while retaining the existing sound and in-app flow.

## Slide 3

### One native visibility setting changed the delivery presentation

The Capacitor local-notifications Android source was patched from `NotificationCompat.VISIBILITY_PRIVATE` to `NotificationCompat.VISIBILITY_PUBLIC`. Android exposes notification visibility as a builder-level setting, so the correction is applied where the local timer notification is constructed. [2]

| Before | After |
|---|---|
| `VISIBILITY_PRIVATE` | `VISIBILITY_PUBLIC` |
| Lock-screen presentation could be restricted | Alert is eligible for public lock-screen presentation |
| Sound could occur without a visible prompt | Sound and visible notification are designed to work together |

## Slide 4

### The alert flow combines scheduling, sound, and return-to-app behavior

1. A child claims a treasure, and EPIC RPG stores the timer end time locally.
2. The native bridge schedules a local notification with the EPIC alarm sound, status-bar icon, and timer payload.
3. Notification and exact-alarm access are requested when needed; an inexact fallback remains available if precise scheduling is not granted.
4. Tapping the delivered notification opens the relevant child profile, where the family can continue the reward flow. [1]

## Slide 5

### The release keeps the broader family experience intact

| Capability | Status in 1.3.2 |
|---|---|
| Minecraft-inspired quest, reward, and QML interface | Retained |
| Local-only profiles, history, preferences, and reward state | Retained |
| NFC-linked child cards and child-focus action window | Retained |
| Quest completion, treasure claims, achievement feedback, and timer sound | Retained |
| Phone-size responsive layout and native Android shell | Retained |

The update is deliberately narrow: it improves timer-alert visibility without changing the app’s local-first behavior or family workflow. [1]

## Slide 6

### The release artifacts and source configuration were verified

| Check | Evidence |
|---|---|
| Source validation | TypeScript validation completed successfully |
| Android package build | Debug APK and release AAB built successfully |
| Reproducible dependency patch | `pnpm-workspace.yaml` registers the local-notifications patch for pnpm 10 |
| Collaboration record | GitHub `main` updated in commit `4ee1558` |

The deliverables are a debug APK for private device testing and a release AAB for the Google Play release workflow after signing readiness is confirmed. [1]

## Slide 7

### Physical-device testing remains the final release gate

| Test condition | Expected result |
|---|---|
| Short treasure timer; phone locked | Visible lock-screen notification plus alarm sound |
| Same timer; phone unlocked | Notification and in-app sound behavior remain correct |
| Notification and exact-alarm permission granted | Timer scheduling operates as intended |
| NFC and reward flows after restart | Linked-card and child-flow behavior continue normally |
| Battery optimization disabled for test | OEM restrictions are less likely to delay alerts |

Android device makers can apply different battery and privacy policies. Validation must therefore use a physical target device before Play Console submission. [1]

## Slide 8

### Ready for owner-side device validation and release preparation

**Recommended next action:** Install the debug APK, run the locked-screen timer scenario, and confirm the visible notification and sound together on the intended Android devices.

The release AAB, checksums, release notes, and reproducible patch configuration are prepared for the next signing and Google Play submission steps.

### References

[1] [EPIC RPG Android 1.3.2 Release Notes](https://github.com/mohdnurkhairulnizam/epic-rpg/blob/main/android-app/RELEASE_1.3.2_NOTES.md)

[2] [Android Developers — NotificationCompat.Builder visibility API](https://developer.android.com/reference/androidx/core/app/NotificationCompat.Builder#setVisibility(int))
