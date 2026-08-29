# Biometric verification research notes

## Selected plugin

Selected `@aparajita/capacitor-biometric-auth` because its current repository documents Capacitor 8 support and native biometric/device-credential APIs for Android and iOS.

Official repository: https://github.com/aparajita/capacitor-biometric-auth

## Verified API behavior

The documented flow is to call `BiometricAuth.checkBiometry()` when the app needs to know whether authentication is usable, then call `BiometricAuth.authenticate(options)` for a protected action. A successful call resolves; a failed or cancelled call rejects with a `BiometryError` containing a code. The documented options include a reason, cancel title, Android title/subtitle, whether device credentials are allowed, confirmation behavior, and an Android biometry strength.

The plugin documentation warns that Android `biometryType` and `biometryTypes` are not reliable indicators of what an app can actually use. The app should use the availability booleans, especially `isAvailable` and `strongBiometryIsAvailable`, and give the user a clear unavailable/cancelled message.

## Security/product decision

The requested “fingerprint verification” should be implemented as Android system biometric verification rather than collecting or storing fingerprint data. Android’s system prompt performs the match; the app only receives success or failure. Android device credential fallback should be disabled for these two parent-protected actions if the product requirement is strictly fingerprint/biometric confirmation. If the user wants a recovery path on devices without enrolled biometrics, the app can show an explicit setup/unavailable message rather than silently granting tokens or approval access.

## Official Android reference

Android biometric prompt guide: https://developer.android.com/identity/sign-in/biometric-auth

The official Android guidance describes using the system biometric prompt for sensitive actions. The final implementation should rely on the OS prompt and must not store fingerprint images, templates, or raw biometric data.
