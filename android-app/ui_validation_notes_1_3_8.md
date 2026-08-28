# Android 1.3.8 Validation Notes

The Settings preview confirms the Emerald Loot Drop section now renders Drop chance as a dedicated control row with a separate 25% readout and Bonus tokens as a distinct full-width numeric field. The inline layout responsible for the slider, percentage, and input collision has been removed.

Source validation confirms no `avatar_bonus` entries remain in the picker script and no generated bonus-avatar files remain in Android assets. The original avatar roster is therefore restored without unmatched additions.

The constrained mobile preview keeps the Drop chance label, slider, percentage readout, and full-width Bonus tokens field on their own vertical layout sequence. There is no longer a shared horizontal row in which the percentage and token field can collide.
