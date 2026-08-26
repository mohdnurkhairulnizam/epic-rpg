# EPIC RPG Android 1.4.4

## NFC main-header control redesign

The NFC Scan Card was redesigned as a compact `NFC CARD / SCAN` control in a dedicated right-side column of the main EPIC RPG header. It is no longer an overlay above a tab page or bottom navigation.

## Protected header layout

The header now uses an explicit two-column layout: the existing EPIC RPG brand occupies the flexible left column, while the NFC control occupies a reserved `108px` right column. No brand element, ore badge, Dashboard content, or navigation element is stacked beneath the NFC control.

## Responsive behavior and validation

The compact-phone layout reserves the same control column so the NFC action remains inside the header at narrow phone widths. TypeScript and production web builds passed; preview validation confirmed the main header and a simulated `360px` header remain clear, with a `108px × 45px` NFC touch target.
