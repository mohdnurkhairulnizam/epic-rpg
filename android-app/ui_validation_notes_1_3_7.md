# Android 1.3.7 Validation Notes

The Dashboard preview confirmed the EPIC RPG header now uses the Quest Arena block-built visual language, including the Family Quest Board kicker, rivets, controller icon, ore accent, and pixel hierarchy. The revised header remained compact above the Dashboard content.

The Game Master Settings preview confirmed the Emerald Loot Drop section is visible and organized below Birthday Reward. It presents the enabled toggle, 25% default drop chance, editable 3-token default bonus, and explanatory text. The existing notification and sound controls remain available below it.

The temporary preview briefly switched to Shop during one stale-element interaction, but returning through the live Settings tab rendered the Emerald Loot Drop controls correctly again. The rendered state remained enabled with its default 25% chance and editable three-token reward.

The bonus-token update handler was invoked from the preview and persisted its custom value to the local EPIC RPG application state. This confirms the reward is configurable rather than fixed to three tokens.

The finalized Add Child picker rendered the 30 existing avatars plus the five completed new pixel avatars only: `avatar_bonus_01` and `avatar_bonus_17` through `avatar_bonus_20`. No entries for the 15 pending image assets were exposed, so the interim release contains no broken avatar choices.
