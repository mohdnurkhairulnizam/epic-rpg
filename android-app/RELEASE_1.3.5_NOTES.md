# EPIC RPG Android 1.3.5

## Release summary

Version **1.3.5** (`versionCode 9`) completes the Quest Arena visual expansion by applying it to the child profile, NFC scan station, and NFC-linked child action window. It also corrects the Dashboard hero-card alignment for token counts and the white QML progress surface.

## What changed

The child profile now begins with a Quest Arena **Hero Profile** card and uses dark green pixel headers with framed inset boards across Status, Ongoing Quests, Active Treasures, Available Treasures, and Badges. Existing profile interactions remain unchanged.

The NFC scan popup is now an **NFC Checkpoint** scan station with a consistent Arena header, status board, manual-ID field, and explicit close action. The NFC-linked child action popup now uses an **NFC Hero Checkpoint** header, token and quest summary board, and framed action sections for ongoing quests, active reward timers, requesting quests, and claiming eligible treasures.

Dashboard hero cards now hold token counts on a consistent row and use a dedicated full-width white QML panel inside the card rather than an offset horizontal strip. The card boundary and progress bar alignment are now consistent across profiles and screen widths.

## Validation completed

TypeScript validation and the Vite production build passed. Browser preview validated the Dashboard alignment, Hero Profile page, NFC Checkpoint scan station, and NFC child action window without client-side errors. Physical-device NFC scanning should still be checked after installing the debug APK.
