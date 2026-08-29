# How to Put EPIC RPG on Google Play

## The very short version

Think of Google Play like a school library. Your app is the book. Google is the librarian. Before the librarian puts the book on the shelf, you must prove who you are, give the book a safe cover and description, let people test it, and answer questions about safety.

The app you are preparing is **EPIC RPG Android 1.4.5**. Its Android package name is `com.epicrpg.familyquest`. The release number is `1.4.5` and the version code is `20`.

You will upload the **AAB** file to Google Play. The APK file is mainly for installing the app directly on a phone for testing.

## What you need before you start

| Thing | Why you need it |
|---|---|
| A Google account | This is your key to Play Console. |
| A Play Console developer account | This is your special account for publishing apps. Google currently lists a one-time US$25 registration fee. |
| A real Android phone | A new personal developer account may need device verification using the Play Console mobile app. It is also needed for real NFC testing. |
| Your identity and contact details | Google verifies the developer so users know the app has a real owner. |
| A private release key | This is like the only key that proves future updates come from you. Never lose it and never put it on GitHub. |
| A privacy policy web page | Google needs a public page explaining what information the app stores or uses. |
| App pictures and words | These become the app’s Play Store page. |
| Testers | A new personal account may need at least 12 closed-test users who stay opted in for at least 14 continuous days before production access. |

## Step 1: Make your Google Play account

1. Open [Google Play Console](https://play.google.com/console).
2. Sign in with the Google account that should own EPIC RPG.
3. Choose **Create developer account** or follow the sign-up instructions.
4. Choose **Personal** if you are publishing as yourself. Choose **Organization** only if you really have a registered organization and its documents.
5. Accept Google’s developer agreement.
6. Pay the one-time registration fee shown by Google.
7. Give Google your real legal name, address, email address, and phone number.
8. Complete the email, phone, and identity checks.
9. If Play Console shows a device-verification task, install the Play Console mobile app on a real Android phone, scan the QR code shown by Play Console, sign in as the account owner, and tap **Verify**.

Do not worry if Google asks for an identity document. This is like showing the librarian your school card. Use your real details and make sure they match your Google Payments profile.

## Step 2: Protect the app’s special key

An Android release needs a private signing key. Imagine it is the one key that tells Google, “This update really came from the same app owner.” If you lose the key, future updates can become very difficult or impossible to publish.

Do this on a computer that you control. Do not paste the password into chat and do not commit the key to GitHub.

1. Install a Java Development Kit if your computer does not already have one.
2. Open a terminal or Command Prompt.
3. Run a command like this, replacing the example values with your own secret values:

```bash
keytool -genkeypair -v \
  -keystore upload-key.jks \
  -alias epic-rpg-upload \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

4. Write down the keystore password and key password in a password manager.
5. Make two safe backups of `upload-key.jks`, such as an encrypted drive and a secure cloud backup.
6. In the Android project, copy the template:

```bash
cd /home/ubuntu/epic-rpg-android
cp android/signing.properties.example android/signing.properties
```

7. Edit `android/signing.properties` so it contains your own values:

```properties
storeFile=upload-key.jks
storePassword=YOUR_PRIVATE_KEYSTORE_PASSWORD
keyAlias=epic-rpg-upload
keyPassword=YOUR_PRIVATE_KEY_PASSWORD
```

8. Put `upload-key.jks` in the location named by `storeFile`, or use a safe absolute path.
9. Keep both `android/signing.properties` and `upload-key.jks` out of GitHub. They are private secrets.

The AAB built in the shared workspace was compiled successfully, but the workspace did not contain your private signing key. Therefore, before uploading to Play Console, rebuild the release AAB after you configure your own signing key.

## Step 3: Create the app in Play Console

1. In Play Console, click **Create app**.
2. Enter the name: **EPIC RPG – Family Quest & Treasure System**.
3. Choose the main language.
4. Choose **Game** or **Application** according to how you want to present it. Because it is a family quest and reward app, read the current Play Console choices carefully.
5. Choose whether the app is free or paid. If you are unsure, choose the model you really intend to use; do not pretend that payments exist if they do not.
6. Confirm that the app is not primarily made for gambling or real-money prizes.
7. Accept the declarations and click **Create app**.

Important: the package name is the app’s permanent name tag. Upload this app with:

```text
com.epicrpg.familyquest
```

Do not change that package name after registering the app.

## Step 4: Prepare your app’s store page

The store page is the sign outside the shop. People read it before they install the app.

Fill in these areas in **Grow users > Store presence > Main store listing**:

1. App name.
2. Short description.
3. Full description.
4. App icon.
5. Feature graphic if Play Console requests it.
6. Phone screenshots showing the Dashboard, Quest tab, Shop, Settings, NFC checkpoint, and Family Quest Playbook.
7. Category and tags.
8. Developer contact email.
9. Privacy-policy URL.

Use honest words. Do not say “the app synchronizes every family member’s data in the cloud,” because this release stores family data locally on each device. Do not say NFC works on every phone; say that it requires a compatible Android phone with NFC enabled.

## Step 5: Add the privacy policy

Create a simple public web page called something like **EPIC RPG Privacy Policy**. It must open without a password.

The page should explain, in plain language, that this release:

- stores family quests, treasures, tokens, badges, settings, and Qur’an learning progress locally on the device;
- does not provide cloud synchronization between phones;
- uses NFC only when the user activates NFC scanning and the phone supports NFC;
- may request notification permission to show local treasure-timer reminders;
- plays local sound effects and alarm sounds;
- does not use advertising or server push in this release; and
- explains how a user can delete local app data, such as by using the app’s reset/delete controls or Android’s app-data controls.

Only publish statements that are true for the final build. If you later add analytics, accounts, cloud sync, advertising, or other services, update the privacy policy and Data Safety answers.

## Step 6: Complete the App content questions

Open **Policy and programs > App content**. Think of this area as Google’s safety questionnaire.

Complete each item that Play Console shows:

| Play Console item | What to do |
|---|---|
| Privacy policy | Paste the public privacy-policy link and make sure it opens. |
| Data safety | Declare local storage, notifications, NFC behavior, and any data collected by libraries. If the final app collects no server data, answer accordingly. Do not guess. |
| Ads | Say that the app contains no ads if that is still true. |
| App access | Explain that the app can be used locally. If Google needs a special password or setup, give clear review instructions. |
| Target audience | Answer carefully because EPIC RPG is intended for families and may be used by children. |
| Content rating | Answer the questionnaire honestly so Google can calculate the rating. |
| News or other declarations | Complete anything else Play Console marks as required. |

Google says the Data Safety form must be complete and accurate, including information from third-party SDKs. When you are unsure, inspect the final build and the SDK documentation rather than guessing.

## Step 7: Build the signed release AAB

After your signing key is configured, run the release command in the Android project:

```bash
cd /home/ubuntu/epic-rpg-android
pnpm android:release
```

The file you want is:

```text
android/app/build/outputs/bundle/release/app-release.aab
```

The debug APK is not the file for public Play Store publishing. It is useful for a private phone test:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Before uploading, confirm that the release AAB has version code `20`. Google Play requires every later update to use a larger version code, such as `21`, `22`, and so on.

## Step 8: Make a small private test first

In Play Console:

1. Open **Test and release > Internal testing**.
2. Create an internal test release.
3. Upload the signed `app-release.aab`.
4. Save the release and add your own Google account as a tester.
5. Open the tester link on your Android phone.
6. Join the test and install the app from Google Play.

This is like letting one family member read the book before the whole school sees it.

Test these important things on a real phone:

- opening Dashboard, Quest, Shop, and Settings;
- creating and editing a child;
- assigning a quest to one child and several children;
- completing a quest and receiving the expected reward;
- claiming and cancelling treasure dialogs more than once;
- opening the Family Quest Playbook;
- seeing Qur'an Mastery Level wording correctly;
- pressing the NFC header control;
- scanning a linked NFC card on a compatible phone;
- seeing the NFC success animation and sound;
- requesting a quest or claiming a treasure from the NFC child checkpoint;
- receiving timer notifications and sound;
- changing sound settings;
- rotating the phone or testing a small phone screen; and
- closing and reopening the app to confirm local data remains.

## Step 9: Do the required closed test if Play Console asks for it

For many new personal developer accounts, Google requires a closed test before production access.

1. Open **Test and release > Testing > Closed testing**.
2. Create a closed-testing track.
3. Add at least **12 testers**.
4. Send each tester the opt-in link.
5. Ask each tester to opt in and install the app from Google Play.
6. Keep the testers opted in continuously for at least **14 days**.
7. Ask testers to use the app and report problems.
8. Keep notes about what they tested and what you fixed.
9. After the required time, go to the Play Console Dashboard and choose **Apply for production access** if that button appears.
10. Answer Google’s questions about the test, the app, and why it is ready.

Do not remove testers during the required period. If someone leaves, the continuous count may be affected. Play Console is the final authority because requirements can change.

## Step 10: Upload the production release

When the test is finished and Play Console allows production:

1. Open **Test and release > Production**.
2. Click **Create new release**.
3. Upload the signed `app-release.aab`.
4. Write release notes such as: “Improved NFC checkpoint scanning, added the Family Quest Playbook, and clarified Qur'an Mastery Level terminology.”
5. Save the release.
6. Review the warnings and errors.
7. Fix every red error. Warnings should be understood before continuing.
8. Click **Next** or **Review release**.
9. Click **Start rollout to production** or the equivalent button shown by Play Console.
10. Confirm the release.

Google may review the app before it becomes public. Review time can be several days, and Google says some accounts may take longer in exceptional cases.

## Step 11: Watch the app after launch

After Google approves the app, open its Play Store page and install it like a normal user. Check that the correct app name, pictures, description, and version are shown.

Then watch Play Console for crashes, problems, and tester feedback. If something is wrong, pause the rollout or prepare a new update. For the next update, increase the version code above `20`, rebuild a signed AAB, test it again, and upload it as an update to the same app.

## The three most important rules

> **Rule 1: Never lose your signing key.** It is the app’s special identity key.

> **Rule 2: Never upload `signing.properties`, passwords, or the `.jks` key file to GitHub.**

> **Rule 3: Tell Google the truth.** Data Safety, children’s content, privacy, NFC, notifications, and store descriptions must match what the final app really does.

## Your next three actions

1. Create or finish your Play Console developer account and complete identity and device verification.
2. Create and safely back up your private upload key, configure signing, and rebuild the signed AAB.
3. Start an internal test, install EPIC RPG on your phone, and test the NFC and timer features before inviting closed testers.

## Official links

1. [Get started with Play Console](https://support.google.com/googleplay/android-developer/answer/6112435)
2. [Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751)
3. [Upload your app to Play Console](https://developer.android.com/studio/publish/upload-bundle)
4. [Testing requirements for new personal developer accounts](https://support.google.com/googleplay/android-developer/answer/14151465)
5. [Device verification requirements](https://support.google.com/googleplay/android-developer/answer/14316361)
6. [Developer identity verification](https://support.google.com/googleplay/android-developer/answer/10841920)
7. [Google Play Data Safety](https://support.google.com/googleplay/android-developer/answer/10787469)
