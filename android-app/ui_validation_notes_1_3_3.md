# Android Interface Refinement Validation Notes

The browser preview confirmed that the bottom navigation now labels the primary task areas as **Quest** and **Shop**. The icons and labels render with larger visual weight while retaining all five primary tabs.

The Leaderboard now renders a seven-day **Weekly Quest Arena** with Quest Points, four activity signals per child, a relative pace bar, and a recent-activity explanation. When every child has zero weekly points, the board uses a fair tied state rather than declaring an arbitrary champion.

The Settings screen now displays a dedicated status panel below the phone-notification controls. In the browser preview, clicking **Enable / Check Phone Notifications** produced the clear message that the native check requires the installed Android app, replacing the previous silent action. The physical Android bridge remains responsible for the operating-system permission prompt and exact-alarm setting.

The **Edit All Settings** modal now uses compact labeled grids for age multiplier groups and QML tiers. The preview showed aligned fields for name, min, max, and reward or bonus values within a vertically scrollable mobile dialog.
