# EPIC RPG Android 1.4.9

## Quest roster

The Quest tab now includes a compact **Heroes On Quest** roster above Questmaster's Boon. It renders only children who have at least one current ongoing quest and lists each quest with its current state, such as **In progress** or **Awaiting approval**. When no child has an ongoing quest, the roster shows a clear empty state instead of unused rows.

## Biometric scope correction

Parent fingerprint or strong-biometric authentication now applies only to the three requested actions:

- Opening the Settings tab.
- Opening child profile details, including the NFC child-action detail window.
- Granting Questmaster's Boon direct token blessings.

Quest approval and the optional Ko-fi support link no longer request biometric authentication. A denied, cancelled, unavailable, or failed biometric check leaves protected data unchanged. The Android bridge does not store fingerprint data.

## NFC window behavior

The NFC child-action window remains open after requesting a new quest or marking an ongoing quest complete. It closes only after a successful treasure claim or when the user presses the visible **X** or **Close** control. A failed treasure claim keeps the window open so the user can try again or close it explicitly.

## Validation

The phone-sized preview confirmed the empty and active Quest roster states. Controlled browser tests confirmed biometric requests for `open-settings`, `open-child-profile`, and `grant-questmaster-boon` only, with no `approve-quest` or support-link verification request. NFC active-state assertions confirmed the window stayed active after quest request and completion, then deactivated after a successful treasure claim.

The Android version is **1.4.9** with `versionCode 24`. Before Google Play submission, install the signed build on a real Android phone and test fingerprint success, cancellation, failed recognition, unavailable enrollment, NFC profile access, quest request, quest completion, and treasure claiming.
