# EPIC RPG Android 1.3.6

## Dashboard hero-card boundary correction

Version **1.3.6** (`versionCode 10`) corrects the Dashboard hero-card composition reported against the reference image. The token count now remains entirely within the green hero zone. The white QML surface has been moved into its own full-width row below a hard dark separator, so it no longer begins behind or clashes with the token label.

The QML label and progress bar remain unchanged in function. The revision only separates the visual zones and keeps the white panel aligned to the card’s lower edge on responsive phone layouts.

## Validation

TypeScript validation and production build passed. Browser preview confirmed that the token row has clear green space below it and that the white QML panel begins only below the separator.
