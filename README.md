# EPIC RPG — Family Quest & Treasure System

EPIC RPG is a Minecraft-inspired family quest and treasure system for children. It combines multi-child quest assignment, age-based token rewards, Quranic learning (QML) progress, QML tier bonuses, treasure redemption, child profiles, achievement badges, and family settings in a pixel-art interface.

## Stable Website

The current published website is available at [epicrpg-etrcq6mh.manus.space](https://epicrpg-etrcq6mh.manus.space). The current stable Manus site checkpoint is `b11d8ed2`.

## Run Locally

Install Node.js and pnpm, then run:

```bash
pnpm install
pnpm dev
```

For a production build:

```bash
pnpm run check
pnpm run build
pnpm start
```

The development server runs on port `3000` by default. The application is a Vite-based React project with the core family-game logic in `client/public/epic-rpg-app.js` and the pixel-art styling in `client/src/styles/epic-rpg-style.css`.

## Data Storage

This stable version is client-side and stores family data in the browser’s `localStorage`. Each device and browser therefore has its own children, quests, tokens, QML progress, treasures, and settings. Cloud synchronization and authentication are not included in this version.

## Collaboration

To contribute, create a feature branch from `main`, make focused changes, run the type check and production build, and open a pull request. Please describe the user-facing behavior that changed and include verification steps. Preserve the four preset family profiles and the existing reward, multiplier, QML, and treasure logic unless a change is explicitly agreed upon.

```bash
git checkout -b feature/your-change
pnpm install
pnpm run check
pnpm run build
git add .
git commit -m "Describe the change"
git push -u origin feature/your-change
```

## Android App

The first Android release is maintained separately under [`android-app/`](android-app/). It is a Capacitor shell around the stable EPIC RPG interface and bundles the avatar and badge assets locally, so it does not load the published website at runtime. The Android package is `com.epicrpg.familyquest`, with min/target SDK 24/36 and local-only storage on each device.

Run the Android checks and builds from the repository root with:

```bash
cd android-app
pnpm install
pnpm check
pnpm android:debug
pnpm android:release
```

The generated release AAB must be signed before uploading to Google Play. Copy `android/signing.properties.example` to `android/signing.properties`, add the owner’s private upload-keystore values, and keep both the properties file and keystore out of version control. See [`android-app/PLAY_STORE_RELEASE_CHECKLIST.md`](android-app/PLAY_STORE_RELEASE_CHECKLIST.md) for Play Console, privacy, store listing, and closed-testing requirements.

The Android migration intentionally leaves the stable website checkpoint unchanged. Physical-device verification is still required for Android hardware Back behavior, device-specific layout, and the owner’s final signing configuration.

## Stable UI Expectations

The project uses a Minecraft/pixel visual language. Keep dialogs, controls, badges, settings panels, and navigation consistent with that style. The Claim Treasure popup must retain both its visible `×` close control and its Cancel action, including after repeated opens.

## Repository Structure

- `client/` — frontend application, HTML entry point, UI shell, stable application logic, and styles.
- `server/` — production static-file server used by the WebDev build.
- `shared/` — shared constants and compatibility types.
- `APPLICATION_SPECIFICATION.md` — product and behavior specification.
- `DATA_SCHEMA.json` — documented application data shape.
- `FUNCTIONAL_VALIDATION_WALKTHROUGH.md` — validation reference for core flows.
