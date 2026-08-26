# EPIC RPG Android 1.4.2 — Corrected NFC Header Placement

## NFC Scan Card placement

The NFC Scan Card is moved only to the open top-right location marked in the layout reference. It remains the same pixel-style action and is no longer displayed above the bottom navigation.

## Restored 1.4.1 header design

The EPIC RPG header has been restored exactly to its 1.4.1 visual baseline. Its original `20px` padding, title position, brand-row layout, icon placement, ore badge, dimensions, and material styling are unchanged. The NFC Scan Card is the only element newly placed in the open top-right header space.

## Validation

TypeScript and production web builds passed. A fresh local preview confirmed the restored header has its original `104px` height and `20px` padding, while the NFC action remains fully inside the header and does not overlap the rendered EPIC RPG title.
