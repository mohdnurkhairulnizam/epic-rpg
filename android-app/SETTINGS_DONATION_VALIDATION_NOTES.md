# Settings and developer-support validation

## Browser preview

The refreshed preview opened the Settings tab and rendered the new `Developer Campfire` panel with the `Buy me a coffee` button and the policy-safe text stating that support is optional and provides no tokens, treasures, features, or gameplay advantages.

The browser preview does not expose the Android native biometric plugin, so it intentionally falls back to the existing companion-site behavior and does not show a fingerprint prompt. Android builds register the native biometric bridge at startup; physical-device verification is required for the actual lock behavior.

## Intended Android behavior

When the user enters Settings from another tab, `switchTab('settings')` waits for `open-settings` parent biometric verification before changing the active tab. When the user presses `Buy me a coffee`, the app asks for `open-support-link` parent biometric verification again before opening `https://ko-fi.com/maneekinstudio` through Capacitor Browser. A cancelled or failed prompt leaves the current screen and payment flow unchanged.

The external page is hosted by Ko-fi. The app stores no payment credentials and gives no in-app reward for support.

## Simulated guard validation

The browser preview used a controlled verifier stub because a browser cannot display the Android system prompt. Denied `open-settings` verification kept Settings inactive. Approved `open-settings` verification activated Settings. The support button then requested `open-support-link` verification before the controlled opener ran. The recorded call sequence was `verify:open-settings`, `verify:open-settings`, `verify:open-support-link`, and `open-support`, confirming that payment-page opening occurs only after approval.
