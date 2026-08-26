# Android 1.4.1 Layout Validation Notes

The tab shell was converted from a document-height calculation into a full-height flex layout. In the live preview, the active tab panel now extends to the bottom of the container (`1096px`) while the fixed bottom navigation overlays the lower `72px`; there is no container-to-navigation gap. The previous body-level `102px` bottom reservation was removed.

The tab panel now owns its scrolling and includes `82px` of internal end clearance for the floating NFC checkpoint. This preserves access to final controls while the outer Quest Arena window reaches the navigation edge instead of exposing the brown page background.

The navigation height is derived from the tab core height plus Android’s bottom safe-area inset. A simulated `34px` inset expanded the navigation from `72px` to `106px` while the content panel continued behind it, confirming the layout model remains gap-free when a device has gesture-navigation padding.

The Settings panel was checked with its long content. It retained a `980px` independent scroll viewport against the full-height container, with a `2489px` scroll height and the intentional `82px` NFC clearance inside the panel. The container reaches the viewport bottom and extends behind the navigation rather than ending above it.

Visual inspection of the Settings preview confirmed that the outer Quest Arena window now continues to the bottom navigation. The former exposed brown strip is absent; the NFC checkpoint is held immediately above the navigation while the Settings content remains independently scrollable.
