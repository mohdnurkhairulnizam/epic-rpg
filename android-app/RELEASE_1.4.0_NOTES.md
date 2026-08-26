# EPIC RPG Android 1.4.0

## Weekly Quest Arena layout

The Weekly Quest Arena now keeps its title, recent-activity note, and Quest Point explanation inside a dedicated dark header zone. The leaderboard cards begin in a separate padded race board beneath a solid divider, so the description no longer crowds the first child card.

## NFC Scan Card action

The floating Scan Card action now follows the current Quest Arena material system. It uses a dark green pixel panel, a gold NFC sigil, and an explicit `NFC CHECKPOINT` label while retaining the existing NFC scan behavior.

## Questmaster’s Boon

The Quest tab now contains **Questmaster’s Boon**, a direct parent-awarded special reward. Select a child and grant the configured token amount immediately. The amount defaults to **5 tokens** and can be changed under **Settings → Questmaster’s Boon**.

Direct grants are saved to device-local history, update token-earned badge progress, and trigger a visual celebration plus the configured Android reward sound. They deliberately do not create a completed quest or add Weekly Quest Points.

## Validation

TypeScript and production builds passed. Local preview checks covered the separated Weekly Quest Arena header, the restyled NFC action, special-reward target actions, local token/history persistence, the celebration popup, the no-Quest-Points rule, and Settings-driven reward amounts.
