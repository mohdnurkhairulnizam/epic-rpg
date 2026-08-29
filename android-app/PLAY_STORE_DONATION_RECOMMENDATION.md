# EPIC RPG Developer Support Donations

**Prepared:** 29 August 2026
**Purpose:** Decide whether a free EPIC RPG app may invite voluntary support payments and choose a suitable payment provider.

## Short answer

Yes, a voluntary developer-support contribution can generally be offered without Google Play Billing when it is a genuine tip and both conditions are true:

1. **100% of the contribution goes to the creator.**
2. **The supporter receives no goods, services, or in-app benefit** in return. This means no tokens, special avatars, premium features, ad removal, gameplay advantage, badges, stickers, or subscription.

Google’s official Payments policy gives this direct-tip exception in its creator-contribution FAQ.[1] This is not the same as selling digital items. Google lists virtual currencies, extra lives, add-on items, characters, avatars, subscriptions, and new app functionality as digital purchases that normally require Google Play Billing.[1]

This document is practical guidance, not legal or tax advice. Google can change policy text, and local payment, tax, charity, and consumer laws can also apply.

## What EPIC RPG should do

Put a small **“Support the developer — optional”** button in the parent-only Settings area. Keep it away from the child’s Quest, Shop, token, and reward controls. Require the existing parent biometric verification before opening the external payment page. The button should open a secure HTTPS hosted page in the user’s browser, not collect card details inside the app.

Use wording such as:

> Support the developer voluntarily. This payment is optional and gives no tokens, items, features, or gameplay advantage.

Do not use wording such as “buy tokens,” “unlock rewards,” “get a special avatar,” “donate and receive a bonus,” or “support us to get premium access.” Those descriptions could make the payment a digital purchase rather than a tip.

If you are not a registered charity, do not promise that the payment is tax-deductible or describe it as a charitable donation. **“Voluntary developer support”** or **“tip the developer”** is clearer for an individual creator.

## Payment-provider comparison

| Provider | What its official documentation says | Strengths | Weaknesses | Recommendation for EPIC RPG |
|---|---|---|---|---|
| **Stripe Payment Links** | Stripe supports one-time or recurring donations through a Stripe-hosted Payment Link. The creator can use a fixed amount or let the supporter choose the amount.[3] | Professional hosted checkout, cards and additional payment methods, custom branding, one-time or recurring options, no custom checkout code required. | Requires Stripe account review and country availability; transaction fees and disputes still apply; the final fee depends on account country and payment method. | **Best primary choice** when Stripe is available in your country and you want a clean developer-controlled support page. Start with one-time, supporter-chosen amount. |
| **PayPal Donate** | PayPal provides hosted donation pages, links, QR codes, and customizable buttons. PayPal says a personal account can create a donation page, while a Business account gives more features.[4] | Familiar to many users, very quick to set up, hosted page, recurring support possible, useful as a second payment option. | Availability, payment methods, account holds, and fees vary by country; some users may not have PayPal. | **Good optional second choice**, especially if your audience asks for PayPal. |
| **Payoneer Payment Request** | Payoneer’s official page says Payment Request is for business clients and explicitly says it does not support consumer payments and is not intended to be an ecommerce checkout gateway.[5] | Useful for business-to-business international payments and receiving funds in multiple currencies. | Poor fit for ordinary app users and public developer tips; not designed as a consumer donation checkout. | **Do not use as the main donation button** for a consumer family app. |
| **Google Play Billing** | Play Billing is required for digital items and app functionality unless a policy exception applies.[1] | Familiar Android checkout and Google-managed purchase records. | It is not the natural path for a no-benefit developer tip; virtual-currency or feature benefits would turn the payment into a digital purchase. | Use it only if you later sell tokens, premium features, subscriptions, or other digital benefits. |

## Recommended setup

My practical recommendation is **Stripe Payment Links as the primary method**, with **PayPal as an optional fallback** if your audience prefers it. Payoneer should not be the default because Payoneer’s own documentation says its payment requests are not for consumer payments.[5]

Start with a one-time, supporter-chosen amount. Add recurring support only after confirming that recurring payments are available for your account and country and that your wording remains a voluntary contribution with no in-app benefit. Publish one clear support page that explains who receives the money, that the payment is optional, that there is no reward, and how a supporter can request help or a refund from the payment provider.

## Important child-and-family safeguards

EPIC RPG is designed for families and includes child profiles. Keep the support button in the parent/settings area, behind biometric parent verification, and do not show donation requests in child-facing quest or reward screens. Google’s Families policy requires child and family apps to protect children’s privacy and comply with applicable laws.[2] Your privacy policy and Play Console declarations must accurately describe any external payment page and the data handled by that provider.

Do not store card numbers, PayPal passwords, or payment credentials in EPIC RPG. Let Stripe or PayPal host the payment page. The app only needs to open the page; it should not grant tokens or change local game state when a payment is completed.

## Safe decision table

| Planned payment behavior | Safer policy route |
|---|---|
| User pays voluntarily and receives nothing in the app | External hosted Stripe or PayPal support page may fit the direct-tip exception; confirm the live policy and account country before release.[1] |
| User pays and receives tokens, treasure, an avatar, premium features, ad removal, or any gameplay benefit | Treat it as a digital in-app purchase and use Google Play Billing unless a clearly applicable Google program says otherwise.[1] |
| User pays for a physical product or physical service | This is outside the normal Play Billing digital-goods category, but other payment, consumer, tax, and fulfillment rules apply.[1] |
| Child sees a donation prompt or is encouraged to ask an adult for money | Avoid this design. Keep the action parent-only and neutral under the Families requirements.[2] |

## Before release

Check the live Google Play Payments policy and the payment provider’s terms on the day you submit the app. Confirm that your account is allowed to accept tips, that the provider supports your country and currency, and that you understand transaction fees, refunds, chargebacks, identity checks, and tax reporting. Ask a local accountant or lawyer if you plan to describe contributions as charitable donations, issue receipts, or collect recurring payments.

## References

[1]: https://support.google.com/googleplay/android-developer/answer/10281818?hl=en "Understanding Google Play’s Payments policy"

[2]: https://support.google.com/googleplay/android-developer/answer/9893335?hl=en "Google Play Families Policies"

[3]: https://support.stripe.com/questions/how-to-accept-donations-through-stripe "How to accept donations through Stripe"

[4]: https://www.paypal.com/donate/buttons "PayPal Donate Button"

[5]: https://www.payoneer.com/get-paid-by-clients/payment-request/ "Payoneer Request payments and get paid globally"
