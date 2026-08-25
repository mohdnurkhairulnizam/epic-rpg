
# NFC Implementation Research

- Capawesome’s Capacitor NFC plugin supports Capacitor 8 and Android NFC scanning, exposes `isSupported()`, `isEnabled()`, `isAvailable()`, `openSettings()`, and emits `nfcTagScanned` events containing tag details. Android/iOS NFC permissions are handled by the platform; the Android manifest should declare NFC hardware support when the feature is required. Source: https://capawesome.io/docs/sdks/capacitor/nfc/
- Android’s official NFC guidance describes the tag-dispatch system and recommends declaring NFC access in the manifest and handling discovered tags through the appropriate NFC intent/activity flow. Android devices generally scan NFC tags when the screen is unlocked and NFC is enabled. Source: https://developer.android.com/develop/connectivity/nfc/nfc
- Product implication: NFC scanning should be presented as an optional feature, show a clear unsupported/disabled state, normalize tag identifiers consistently, and avoid assuming that a locked-screen phone will scan tags. The first Android release remains local-only; no server or cloud identity is needed.
