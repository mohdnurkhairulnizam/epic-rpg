# EPIC RPG Android 1.4.8

## Parent Settings and developer support

EPIC RPG 1.4.8 adds a parent-protected Settings tab and an optional developer-support entry point.

### Changes

- Settings requires Android strong biometric verification when opened from another tab.
- The Settings panel includes a pixel-themed **Buy me a coffee** button under Developer Campfire.
- The button opens `https://ko-fi.com/maneekinstudio` through Capacitor Browser on Android and through a new browser tab in the web companion.
- The support message clearly states that the payment is optional and provides no tokens, treasures, features, badges, ad removal, or gameplay advantage.
- The support page is protected by a second parent biometric check before it opens.
- Payment credentials are not collected or stored by EPIC RPG.
- Existing biometric protection for child profiles, quest approvals, and Questmaster’s Boon remains in place.

### Policy boundary

This is intended to be a genuine voluntary developer-support contribution. The app must not grant an in-app benefit for the payment. If the product later gives supporters tokens, premium features, avatars, ad removal, subscriptions, or another digital benefit, the payment must be reconsidered as a digital in-app purchase and routed through the applicable Google Play Billing path.

### Validation

- TypeScript and production web build checks passed after adding the Capacitor Browser dependency and Settings integration.
- Browser preview confirmed the Developer Campfire panel and exact Ko-fi URL configuration.
- Controlled preview verification confirmed that denied Settings verification keeps Settings closed and approved verification opens it.
- Controlled preview verification confirmed that the support page opener runs only after `open-support-link` verification succeeds.
- A real Android phone should still be used before Play submission to test enrolled fingerprint, cancellation, failed recognition, no enrollment, and temporary lockout.

### Release metadata

- Version name: `1.4.8`
- Version code: `23`
- External support provider: Ko-fi
- Support URL: `https://ko-fi.com/maneekinstudio`
