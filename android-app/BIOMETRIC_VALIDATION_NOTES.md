# Android biometric parent-verification validation

## Preview guard checks

The preview used a temporary verification bridge that returned both denial and approval outcomes without changing the production Android bridge.

| Protected action | Denied result | Approved result |
|---|---|---|
| Open child profile | The profile screen stayed closed. | The profile screen opened. |
| Grant Questmaster’s Boon | The child token balance stayed unchanged. | The child received the configured token amount. |

The test recorded one request for `open-child-profile` for each profile attempt and one request for `grant-questmaster-boon` for each blessing attempt. After the successful grant test, the child balance and blessing history were restored and saved so preview test data was not retained.

The Android implementation uses `@aparajita/capacitor-biometric-auth` and requires strong enrolled biometrics. It does not store fingerprints or biometric templates. It disables device-PIN fallback for these parent actions, so a user must enroll a supported strong biometric before the protected action can proceed.

The quest-approval test inserted a temporary pending quest. With verification denied, the pending quest remained pending and the child token balance stayed unchanged. With verification approved, the quest was approved and tokens increased; the temporary quest, history, badges, and token balance were then restored and saved.

Quest approval uses the same parent verification helper at the approval boundary. A real Android-device test is still required to confirm the system fingerprint prompt, cancellation, failed fingerprint, temporary lockout, and no-enrollment messages on the target phone.
