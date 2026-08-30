# Settings and developer-support validation

## Browser preview

The refreshed preview opened the Settings tab and rendered the new `Developer Campfire` panel with the `Buy me a coffee` button and the policy-safe text stating that support is optional and provides no tokens, treasures, features, or gameplay advantages.

The browser preview does not expose the Android native biometric plugin, so it intentionally falls back to the existing companion-site behavior and does not show a fingerprint prompt. Android builds register the native biometric bridge at startup; physical-device verification is required for the actual lock behavior.

## Intended Android behavior

When the user enters Settings from another tab, `switchTab('settings')` waits for `open-settings` parent biometric verification before changing the active tab. When the user presses `Buy me a coffee`, the app asks for `open-support-link` parent biometric verification again before opening `https://ko-fi.com/maneekinstudio` through Capacitor Browser. A cancelled or failed prompt leaves the current screen and payment flow unchanged.

The external page is hosted by Ko-fi. The app stores no payment credentials and gives no in-app reward for support.

## Simulated guard validation

The browser preview used a controlled verifier stub because a browser cannot display the Android system prompt. Denied `open-settings` verification kept Settings inactive. Approved `open-settings` verification activated Settings. The support button then requested `open-support-link` verification before the controlled opener ran. The recorded call sequence was `verify:open-settings`, `verify:open-settings`, `verify:open-support-link`, and `open-support`, confirming that payment-page opening occurs only after approval.

## Quest roster and revised biometric/NFC validation

The phone-sized preview rendered the Quest tab with a `Heroes On Quest` section above Questmaster's Boon. With the restored family data containing no ongoing quests, it correctly showed `0 active heroes` and the empty-state instruction; the roster is designed to render only children whose `ongoingQuests` array is non-empty. The source audit confirms biometric calls remain only for opening child details, opening Settings, and granting Questmaster's Boon. Quest approval and opening the Ko-fi support link no longer call the biometric helper. NFC request and mark-complete actions refresh the child window without closing it; only a successful NFC treasure claim or the explicit X/Close controls close it.

A controlled preview test added one ongoing quest to Muhammad Darwish Ar-Rayyan. After reload, the Dashboard correctly showed `On Quest: 1 active` for that child while the other children had no ongoing-quest indicator. The Quest roster is ready for a follow-up tab inspection after navigation.

## Final requested scope validation

The controlled browser test began on the Quest tab and used a denied verifier. Settings remained closed, child-profile access remained blocked, and Questmaster's Boon did not grant tokens. The recorded sequence was `verify:open-settings`, `verify:open-child-profile`, `verify:grant-questmaster-boon`, followed by `open-support`; no `approve-quest` or `open-support-link` biometric request occurred. The Quest roster test showed exactly one active hero and displayed Muhammad Darwish Ar-Rayyan with `Pick up toys` and `In progress`.

The controlled NFC test opened the child-action window, requested a quest, and marked the new quest complete. The window remained present and active after both actions. A successful treasure claim removed the modal's `active` class; the first assertion checked DOM removal and therefore reported false even though the modal was visually closed by the app's existing close routine. The explicit X and Close buttons use the same close routine.

A second asynchronous NFC harness did not expose its completion result, so the next validation pass will use an explicit try/catch and direct `active`-class assertions. The earlier synchronous flow already confirmed that request and mark-complete preserve the active window; this follow-up is only to verify the successful-claim close state precisely.

The explicit NFC harness passed: `openedActive: true`, `activeAfterRequest: true`, `activeAfterComplete: true`, and `activeAfterClaim: false`. This confirms the window stays active for request and mark-complete actions and deactivates after a successful treasure claim. The harness restored the preview data after testing.
