# Google Play donation and payment policy research

Research date: 2026-08-29

## Official Google Play Payments policy

Source: https://support.google.com/googleplay/android-developer/answer/10281818?hl=en

Google states that Play Billing is required for in-app purchases of digital goods and services distributed on Google Play. The examples include virtual currencies, extra lives, add-on items, characters, avatars, subscriptions, ad-free versions, and new app functionality.

The policy page’s FAQ includes a specific question titled “Do direct tips or contributions from user to creator require Play’s billing system?” This is the relevant category for a voluntary developer-support donation, but the exact FAQ answer should be checked in the final policy page before implementation because regional programs and policy text can change.

## Preliminary product distinction

A genuine voluntary contribution that gives the donor no digital item, no premium feature, no token, no gameplay advantage, no ad removal, and no subscription is materially different from selling digital goods. EPIC RPG must not call a token purchase or premium unlock a donation. If a donor receives an in-app benefit, treat it as a digital in-app purchase and use Google Play Billing unless an applicable regional program clearly permits another billing path.

A donation button should not be placed next to token purchases in a way that makes the transaction look like a reward purchase. The UI should state that the contribution is optional and provides no in-app reward or advantage.

## Other policy area to verify

Because EPIC RPG is designed for families and children, the final implementation must also be checked against Google Play Families and Monetization requirements. The safest design is to make any donation action parent-directed, clearly separated from child gameplay, and protected by the existing parent biometric verification.

## Verified creator-tip exception

The official Payments policy FAQ states that direct tips or contributions do not require Play Billing when 100% of the tip or contribution goes to the creator and the payment does not grant access to any goods or services, including stickers, badges, special emojis, or similar digital benefits. If either condition is not true, Google says Play Billing must be used according to the policy.

This means a compliant EPIC RPG donation must be a real voluntary support payment: all money goes to the developer, and the donor receives no tokens, special avatar, premium feature, ad removal, gameplay advantage, or other in-app benefit. The app must not describe the payment as buying tokens or unlocking content.

## Families policy

Source: https://support.google.com/googleplay/android-developer/answer/9893335?hl=en

Google’s Families policy requires apps that target children or families to protect children’s privacy and comply with applicable laws. EPIC RPG should keep any donation action in the parent/settings area, not in the child gameplay flow, and retain the biometric parent verification before opening the donation page. The app’s Data Safety form and privacy policy must accurately describe any payment-page link or related data handling.
