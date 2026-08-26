# Android 1.4.0 UI Validation Notes

The updated Weekly Quest Arena uses a distinct dark introduction zone for the title, reset note, and description. A solid divider and padded light race board now separate the descriptive copy from the leaderboard cards, removing the cramped boundary shown in the supplied screenshot.

The floating Scan Card action was checked in the Dashboard and Leaderboard previews. It now uses a dark green pixel-material button, a gold NFC sigil, and a two-line `NFC CHECKPOINT / Scan Card` hierarchy consistent with the Quest Arena interface.

The Quest tab displayed the Questmaster’s Boon panel above the normal quest cards. Its child-target actions were available for all four local profiles and correctly reflected the default saved amount of `+5` tokens.

Temporary interaction testing granted `+5` tokens to one selected child. The matching balance changed from `0` to `5`, one local `questmaster_boon` history record was stored, the celebration popup appeared, and the child’s quest-history count remained `0`. This confirms the direct grant does not add Weekly Quest Points.

The local preview state was restored after the temporary grant test. The original zero-token Dashboard baseline reappeared, confirming the validation mutation was not retained as app source or deliverable data.

Settings preview confirmed the Questmaster’s Boon section is shown independently from Emerald Loot Drop and presents a dedicated `Tokens per blessing` numeric control with the default value of `5`.

A temporary Settings change from `5` to `7` immediately refreshed the Quest tab. The panel header and every child-target action showed `+7`, confirming the direct-reward amount is configurable from Settings.

The local preview was restored after the configuration test. The Dashboard returned to the original zero-token state and the saved Questmaster’s Boon default returned to `5` tokens.
