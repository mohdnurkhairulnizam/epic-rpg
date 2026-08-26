# EPIC RPG Android 1.4.3

## NFC Scan Card position adjustment

This revision moves only the NFC Scan Card downward from the header into the marked open right-hand area immediately below it. The existing NFC button design, header design, Dashboard, tab pages, and bottom navigation are unchanged.

## Header and layout preservation

The header remains on the Android 1.4.1 baseline: its original height, padding, brand row, title, icon, ore badge, and pixel-material treatment are preserved. The Scan Card remains above the bottom navigation and does not affect the prior responsive tab-content correction.

## Validation

TypeScript and production web builds passed. The fresh local preview confirmed the Scan Card sits in the requested right-side dashboard-title area while the header, Dashboard cards, and navigation retain their existing composition.
