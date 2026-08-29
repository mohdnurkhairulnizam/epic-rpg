# Android 1.4.5 Feature Validation Notes

## Preview baseline

- Local Android preview loaded at `http://localhost:3001/` after restarting Vite on port 3001.
- Existing Dashboard, child cards, top-right NFC header control, and bottom navigation remained present.
- No visible QML label remains in the user-facing source scan; internal `qml` identifiers are intentionally preserved for local-data compatibility.

## NFC scanner

- Header NFC control opened the scan station successfully.
- Scan station uses a pixel-styled modal with a dark green checkpoint panel, gold NFC core, scanning beam, and `HOLD CARD NEAR PHONE` instruction.
- Main header `open` purpose now displays the correct linked-card checkpoint instruction rather than the child-registration instruction.
- Success handling is wired to the existing `epic-nfc-success` event and opens a linked child checkpoint after the success celebration delay.
- NFC scan-start feedback is dispatched once through the shared native scan entry point; the header click does not duplicate the sound.

## Settings Playbook

- Settings displays `Age Multiplier & Qur'an Mastery Levels` and `Qur'an Mastery Levels`.
- `Family Quest Playbook` panel is visible with an `Open the Playbook` action.
- Playbook modal opens, is readable in the compact preview, and includes Quest Loop, Qur'an Mastery Level, Treasure Vault, Special Rewards, NFC Checkpoint, and local family data explanations.

## Quest terminology and behavior

- Quest tab retains the Questmaster's Boon panel and direct `+5` actions for each child.
- The Settings and Quest UI now use `Qur'an Mastery Level` / `Qur'an Mastery Levels` terminology. The existing local state fields and handler names remain `qml*` only to avoid migrating stored device data.

## Follow-up

- TypeScript and production builds passed before the final shared-scan-entry correction. Re-run both after this final correction before packaging.
- Native Android release build and source synchronization remain pending for the feature revision.
## Interaction checks

The NFC Scan control opened the redesigned scan station from the Quest tab. The station entered the scanning state with the gold NFC core, animated beam styling, and hold-near-phone instruction. A browser simulation of a successful read set both `nfc-scan-success` and `is-scan-success` and rendered `Card scanned` with `Hero checkpoint found · opening profile`; the success event was dispatched for native sound feedback.

The Family Quest Playbook opened from Settings and displayed all six mechanism sections in the pixel-styled modal. The Quest tab retained the Questmaster's Boon child actions and the configured `+5` amount. No visible QML terminology appeared in the rendered Settings or Quest content.

The latest TypeScript and production checks passed after the final shared NFC scan-entry correction. Native Android packaging and source synchronization remain pending.

## Leaderboard and bottom-navigation update

The Leaderboard name treatment now measures the rendered child name after the weekly race board is created. Names that overflow their available row width receive a horizontal marquee with a duration based on the overflow distance; shorter names remain still. The name button also retains the full name in its accessibility label and title.

A preview test replaced one rendered name with `Muhammad Abdul Rahman Al-Farouq Ibn Khalid Al-Madani`. The measured overflow was `56px`, the marquee class was active, and the calculated duration was `13.0s`. The same test pressed Dashboard, Leaderboard, Quest, Shop, and Settings and captured exactly one `epic-bottom-tab-pressed` event for each destination. Native audio remains gated by the existing Android-only feedback registration and sound preferences.

The visual preview kept the intentionally long child name inside the first weekly race card while the rank label remained aligned at the right edge. The name was visibly clipped at the captured frame because the marquee was mid-cycle, with the full text still available through the button accessibility label and title; the CSS animation continues to reveal the hidden portion over time.
