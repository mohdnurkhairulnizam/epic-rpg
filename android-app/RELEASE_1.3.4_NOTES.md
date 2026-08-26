# EPIC RPG Android 1.3.4

## Release summary

Version **1.3.4** (`versionCode 8`) consolidates the family competition experience around the Weekly Quest Arena and extends its visual language across the main app. It also expands the local pixel-adventure sound system so gameplay actions feel more distinct while retaining the existing volume and mute controls.

## Competition and visual updates

The obsolete all-time token list was removed from the Leaderboard screen. The page now focuses entirely on the **Weekly Quest Arena**, which already explains recent activity, transparent Quest Point scoring, relative pace, and the current weekly position. The tied-start behavior remains intact so the app does not select an arbitrary leader when no child has recorded activity.

Dashboard, Quest, Shop, and Settings now share the Arena’s visual vocabulary: dark pixel-panel headers, gold kicker labels, strong framed borders, inset content surfaces, and paired action rows. Dashboard introduces the Family Base / Hero HQ. Quest becomes a Mission Board with explicit reward strips. Shop becomes a Treasure Vault with clear cost and timer information. Settings becomes a Game Master control board while retaining the compact editor and notification tools.

## Sound-feedback updates

The existing local Web Audio feedback now uses distinct short pixel-game cues for quest assignment, quest readiness, approval, reward claims, achievements, NFC reads, timer completion, item creation, and quest cancellation or rejection. These cues are synthesized locally; no audio files, network requests, cloud storage, or new data permissions are required. Users can still mute all feedback or adjust its volume from Settings.

## Validation completed

TypeScript validation and Vite production build both passed. Browser preview confirmed that the leaderboard renders only the Weekly Quest Arena, all four primary screens use the updated visual language, the current actions remain present, and the renamed adventure-sound test control dispatches without client-side errors. Audibility of the Android-only sound layer still requires a physical device test.

## Physical-device check

Install the debug APK, keep sounds enabled, and verify the sounds for: adding a quest or treasure, assigning a quest, marking it ready, approving it, claiming a treasure, scanning a linked NFC card, receiving a timer completion, and unlocking an achievement. Confirm that muted mode produces no feedback and that the volume slider changes the intensity of subsequent sound cues.
