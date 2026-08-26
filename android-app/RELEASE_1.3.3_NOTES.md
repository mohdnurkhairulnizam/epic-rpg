# EPIC RPG Android 1.3.3

## Release summary

Version **1.3.3** (Android `versionCode 7`) improves the daily family experience around the existing Android 1.3.2 notification fix. The release introduces a seven-day **Weekly Quest Arena** that ranks children by recent Quest Points, clarifies the Quest and Shop navigation, increases the bottom-tab icon and label emphasis, adds visible feedback to the phone-notification controls, and reorganizes the reward-rule editor into compact, labeled rows.

## What changed

The weekly performance area now combines approved quests, tokens earned, treasure rewards, badges, and active days into a transparent seven-day Quest Points score. A leading child receives the Champion state only when recent activity exists. If every child has zero weekly points, the arena shows a fair tied start instead of assigning an arbitrary winner.

The Play/Quests and Shop/Treasures headings are now simply **Quest** and **Shop**. The matching bottom navigation labels are more prominent, with larger icons and stronger label treatment while still respecting small-phone layouts and Android safe areas.

The **Enable / Check Phone Notifications** control now always reports a result. In the installed Android app it requests or checks the system notification permission and then confirms whether notifications—and, where available, precise screen-off alarms—are ready. In a browser preview it clearly explains that the native check must occur in the installed Android app instead of failing silently. The precise-alarm action now returns the Android result to the interface so it can show a clear next step.

The **Edit All Settings** window now groups Age Multiplier and QML Tier values into compact columns for name, minimum, maximum, and reward/bonus values. This makes the long editor easier to scan and adjust on a phone without changing the underlying local-only data model.

## Validation completed

The updated source passed TypeScript validation and Vite production build. Capacitor synchronization, debug APK generation, and release AAB generation all completed successfully. Browser preview checks confirmed the Quest and Shop labels, larger bottom navigation, the tied-week Quest Arena state, browser-visible notification feedback, and the reorganized settings editor.

## Physical-device validation still required

Install the debug APK on an Android phone and press **Enable / Check Phone Notifications**. Confirm that Android presents the permission prompt when needed, that the status panel updates after the choice, and that **Allow Precise Screen-Off Alarms** opens or reflects Android’s corresponding special-access state. Then use a short treasure timer with the phone locked to confirm the audible alert and visible lock-screen notification together.
