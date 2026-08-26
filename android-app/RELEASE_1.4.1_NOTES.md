# EPIC RPG Android 1.4.1

## Responsive bottom navigation correction

This layout correction removes the exposed background gap between tab pages and the bottom navigation. The application shell now fills the dynamic Android viewport, while each active tab owns its own scroll area and continues cleanly behind the fixed navigation.

## Safe-area and NFC alignment

The bottom navigation height is calculated from its pixel-tab height plus Android’s device-specific gesture-navigation inset. The floating NFC checkpoint anchors just above that exact navigation height. Long pages, including Settings, preserve internal scroll clearance so final controls remain reachable without reintroducing an outer brown strip.

## Validation

TypeScript and production web builds passed. The local preview verified the long Settings page, full-height tab panel, bottom navigation geometry, NFC placement, and simulated Android gesture-navigation safe-area behavior.
