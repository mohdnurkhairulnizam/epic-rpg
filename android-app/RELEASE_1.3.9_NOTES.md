# EPIC RPG Android 1.3.9

## Quest Arena profile Status

The Status section beneath each child’s hero profile now uses the current Quest Arena visual system. It separates the Reward Chest and Current Tier into readable pixel tiles, presents QML Path as its own control row, and frames QML progress in a dedicated board with aligned minus, progress, and plus controls.

## Dashboard achievements

Every Dashboard child card now displays that child’s highest earned badge in a Top Achievement ribbon. The app ranks badge tiers from Coal through Ancient Debris and falls back to `Badge Hunt Begins` when a child has not yet earned a badge.

## Weekly Quest Arena points

Quest Points are not capped. Each Weekly Quest Arena progress bar now represents the child’s percentage of the combined active Quest Points for all child profiles in the current seven-day race. The exact percentage and active-point total appear below every bar, including the zero-activity state.

## Validation

TypeScript and production builds passed. Preview validation covered the Status layout, earned and unearned Dashboard badge states, zero-point handling, and a non-zero point-share example totaling 78 Quest Points.
