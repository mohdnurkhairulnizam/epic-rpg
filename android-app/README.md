# EPIC RPG Family Quest — Android App

This directory is a separate Capacitor Android workspace derived from the stable EPIC RPG website. The stable website project and its published checkpoint remain independent and are not modified by Android work.

## Current scope

The Android shell preserves the stable Minecraft/pixel UI, four pre-loaded children, quests, treasures, multi-child assignment, QML progress, age multipliers, achievement badges, child profiles, settings, local reward logic, and the corrected Claim Treasure modal. Avatar and badge images are bundled locally for the Android package.

The first Android release is intentionally **local-only**. Data is stored inside the Android app on each device. It is not synchronized between devices. Cloud synchronization requires a separately approved backend, authentication, database, backup, deletion, and privacy design.

## App identity

- App name: `EPIC RPG Family Quest`
- Android package: `com.epicrpg.familyquest`
- Version: `1.0.0`
- Version code: `1`
- Compile/target SDK: `36`
- Minimum SDK: `24`

The Android package name is a permanent Play identity and should be reviewed before the first upload.

## Local development

Install dependencies and build the web bundle:

```bash
pnpm install
pnpm check
pnpm build
```

Sync the web bundle into Android:

```bash
pnpm cap:sync
```

Build a debug APK:

```bash
pnpm android:debug
```

Build a release AAB:

```bash
pnpm android:release
```

The generated artifacts are under `android/app/build/outputs/`. A release bundle must be signed with the owner’s release credentials or Google Play App Signing workflow before Play submission. Do not commit keystores, passwords, `local.properties`, or service-account JSON files.

## Google Play owner actions

The owner must create or use a Google Play Console developer account, register the app using the final package identity, complete identity and contact verification, create the store listing, provide a privacy policy URL, complete Data safety and content-rating declarations, upload store assets, configure signing, and run the required testing tracks. Personal accounts created after November 13, 2023 may need a closed test with at least 12 testers continuously opted in for at least 14 days before production access can be requested.

The build is prepared for API 36 because Google’s published target API requirement changes on August 31, 2026. Requirements and policy conditions should be checked again in Play Console immediately before submission.

## Architecture notes

The Android application is a native Capacitor shell around the built web experience. It does not point at the live website at runtime. This keeps the packaged UI versioned with the Android build and prevents website cache changes from silently changing the app. The app still needs network access if any future external resources are added, but current avatar and badge assets are bundled locally.
