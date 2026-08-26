# EPIC RPG Android 1.4.2

## NFC Checkpoint header placement

The NFC Scan Card action now sits in the open top-right area of the EPIC RPG header, matching the marked position in the requested layout reference. It remains a clear pixel-style action with the NFC sigil and `NFC CHECKPOINT / Scan Card` label.

The action is no longer positioned above the bottom navigation. The header reserves a dedicated top-right action zone so the card remains inside the green header and does not overlap the EPIC RPG title.

## Responsive behavior

The top-right placement includes compact-phone rules and header safe-area spacing. The tab content continues using its bottom-navigation clearance only, so the previous bottom navigation layout correction remains intact.

## Validation

TypeScript and production web builds passed. The local preview confirmed the NFC action remained within the header, did not overlap the title, stayed out of the bottom navigation area, and retained alignment during a compact-header simulation.
