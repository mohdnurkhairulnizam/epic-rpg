# EPIC RPG - Functional Validation Walkthrough

## Purpose
This document provides step-by-step instructions to validate that the reconstructed EPIC RPG application functions identically to the original. Follow each scenario exactly and verify the expected outcomes.

---

## SECTION 1: APP STARTUP & INITIALIZATION

### Scenario 1.1: First Launch with Preset Data

**Steps:**
1. Clear browser localStorage: Open DevTools → Application → localStorage → Delete "epicRpgData"
2. Refresh page: F5 or Ctrl+R
3. Wait for page to load (should be instant)

**Expected Outcomes:**
- ✅ Page loads with green Minecraft-themed interface
- ✅ Header displays "🎮 EPIC RPG - Family Quest & Treasure System"
- ✅ Dashboard tab is active by default
- ✅ Bottom navigation shows 5 tabs: Dashboard, Leaderboard, Play, Shop, Settings
- ✅ Scan Card button visible at bottom-right corner
- ✅ 4 preset children displayed on dashboard:
  - Muhammad Darwish Ar-Rayyan (Age: 12 | Beginner)
  - Muhammad Daniyal Al-Fateh (Age: 10 | Beginner)
  - Muhammad Dawood Ariq (Age: 6 | Beginner)
  - Muhammad Danish Adeeb (Age: 3 | Beginner)
- ✅ Each child shows: Avatar, name, age/tier, token count (0), progress bar
- ✅ "+ Add Child" button visible at top

### Scenario 1.2: Data Persistence After Refresh

**Steps:**
1. On Dashboard, click first child (Muhammad Darwish Ar-Rayyan)
2. Click "+" button next to progress bar 3 times (progress should go 0→1→2→3)
3. Refresh page (F5)

**Expected Outcomes:**
- ✅ Child profile still shows progress as 3/37
- ✅ Tier changed from "Beginner" to "Learner"
- ✅ Data persisted correctly to localStorage
- ✅ No data loss on refresh

---

## SECTION 2: DASHBOARD FUNCTIONALITY

### Scenario 2.1: Display All Children with Correct Tiers

**Steps:**
1. Navigate to Dashboard tab
2. Observe all 4 child cards

**Expected Outcomes:**
- ✅ Child 1: "Age: 12 | Beginner" (Juz Amma, 0 progress)
- ✅ Child 2: "Age: 10 | Beginner" (Al-Quran, 0 progress)
- ✅ Child 3: "Age: 6 | Beginner" (Juz Amma, 0 progress)
- ✅ Child 4: "Age: 3 | Beginner" (Al-Quran, 0 progress)
- ✅ Progress bars extend full card width with 20px padding
- ✅ All avatars display correctly (no broken images)
- ✅ Token count shows "💰 0 Tokens" for all

### Scenario 2.2: Progress Bar Display

**Steps:**
1. Observe progress bars on each child card
2. Check progress bar styling

**Expected Outcomes:**
- ✅ Progress bars are horizontal
- ✅ Progress bars show numerical value (e.g., "0/37" for Juz Amma, "0/30" for Al-Quran)
- ✅ Progress bars fill card width with 20px padding on sides
- ✅ Green gradient fill color (#4CAF50)
- ✅ Gray background for unfilled portion

---

## SECTION 3: CHILD PROFILE MANAGEMENT

### Scenario 3.1: Open Child Profile

**Steps:**
1. Click on first child card (Muhammad Darwish Ar-Rayyan)

**Expected Outcomes:**
- ✅ Child profile screen opens
- ✅ "← Back to Dashboard" button visible at top
- ✅ Avatar displayed (60x60px, rounded)
- ✅ Child name: "Muhammad Darwish Ar-Rayyan"
- ✅ Age: 12, DOB: 2013-08-09
- ✅ Status section shows:
  - Tokens: 0
  - QML Type: Juz Amma (dropdown)
  - Current Tier: Beginner
  - Progress: Horizontal bar with +/- buttons and "0/37" display
- ✅ Ongoing Quests section (empty initially)
- ✅ Badges Earned section (empty initially)
- ✅ Edit Profile and Delete Child buttons at bottom

### Scenario 3.2: QML Progress +/- Button Functionality

**Steps:**
1. On child profile, click "+" button next to progress bar
2. Observe progress value change
3. Click "+" button 2 more times (total 3 clicks)
4. Observe tier change notification

**Expected Outcomes:**
- ✅ First click: Progress changes to 1/37
- ✅ Second click: Progress changes to 2/37
- ✅ Third click: Progress changes to 3/37
- ✅ Tier changes from "Beginner" to "Learner"
- ✅ Tier milestone popup appears with:
  - "🎉 Tier Unlocked! 🎉" title
  - Ore celebration image with floating animation
  - Child name
  - New tier name "Learner"
  - Green gradient background with gold accents
- ✅ Popup auto-closes after 5 seconds
- ✅ Progress bar updates in real-time

### Scenario 3.3: QML Type Change

**Steps:**
1. On child profile with progress 3/37 (Learner tier)
2. Click QML Type dropdown
3. Select "Al-Quran"
4. Observe changes

**Expected Outcomes:**
- ✅ QML Type changes to "Al-Quran"
- ✅ Progress max changes from 37 to 30
- ✅ Progress display shows "3/30"
- ✅ Tier recalculated based on Al-Quran tiers
- ✅ Current tier remains "Learner" (3 is still in Learner range for Al-Quran: 3-6)

### Scenario 3.4: Progress Bar Minus Button

**Steps:**
1. On child profile with progress 3/30
2. Click "−" button

**Expected Outcomes:**
- ✅ Progress decreases to 2/30
- ✅ Progress bar updates
- ✅ No tier change (still in Learner range: 3-6, but now at 2)
- ✅ Tier changes to "Beginner" (2 is in Beginner range: 0-2)

### Scenario 3.5: Tier Progression Milestones

**Steps:**
1. Reset child to Al-Quran with 0 progress
2. Click "+" button 3 times (progress: 0→1→2→3)
3. Observe tier changes and popups

**Expected Outcomes:**
- ✅ At 0 progress: Tier = "Beginner"
- ✅ At 1 progress: Tier = "Beginner" (no popup)
- ✅ At 2 progress: Tier = "Beginner" (no popup)
- ✅ At 3 progress: Tier = "Learner" (popup appears)
- ✅ Popup displays "Learner" as new tier
- ✅ Popup auto-closes after 5 seconds

### Scenario 3.6: Badge Display on Child Profile

**Steps:**
1. Scroll down on child profile to "Badges Earned" section
2. Observe badge display

**Expected Outcomes:**
- ✅ Badges section shows ore icons (not emoji)
- ✅ Ore icons are 64x64px pixel art
- ✅ Icons display correctly: coal, copper, iron, gold, redstone, diamond, emerald, ancient debris
- ✅ Badge names displayed below icons
- ✅ Initially empty (no badges earned yet)

---

## SECTION 4: QUEST MANAGEMENT

### Scenario 4.1: View Preset Quests

**Steps:**
1. Navigate to Play tab

**Expected Outcomes:**
- ✅ Play tab shows 4 preset quests:
  - "Pick up toys" (Quick Quest, 1 token)
  - "Sweep the floor" (Standard Mission, 3 tokens)
  - "Clean the bathroom" (Boss Fight, 6 tokens)
  - "Wash the Car" (Team Raid, 8 tokens)
- ✅ Each quest shows: name, type, base reward
- ✅ Edit, Delete, and Assign buttons visible

### Scenario 4.2: Assign Quest to Child

**Steps:**
1. On Play tab, click "Assign" button on "Pick up toys" quest
2. Dialog appears with child checkboxes
3. Check first child (Muhammad Darwish Ar-Rayyan)
4. Click "Assign"

**Expected Outcomes:**
- ✅ Dialog closes
- ✅ Success message appears: "Quest assigned to 1 child(ren)!"
- ✅ Quest added to child's ongoingQuests

### Scenario 4.3: Approve Quest and Award Tokens

**Steps:**
1. Go to Dashboard, click first child
2. Scroll to "Ongoing Quests" section
3. "Pick up toys" quest should be listed
4. Click "Approve" button on quest

**Expected Outcomes:**
- ✅ Quest removed from Ongoing Quests
- ✅ Tokens awarded to child
- ✅ Token calculation: 1 (base) × 1.2 (age 12 multiplier) × 1.15 (Learner bonus) = 1.38 ≈ 1 token
- ✅ Child's token count increases
- ✅ Quest added to questHistory
- ✅ Badge progress updated (quests_completed incremented)

---

## SECTION 5: TREASURE MANAGEMENT

### Scenario 5.1: View Preset Treasures

**Steps:**
1. Navigate to Shop tab

**Expected Outcomes:**
- ✅ Shop tab shows 4 preset treasures:
  - "TV (15min)" (5 tokens, 900 seconds)
  - "TV (30min)" (9 tokens, 1800 seconds)
  - "PS5 (15min)" (6 tokens, 900 seconds)
  - "PS5 (30min)" (11 tokens, 1800 seconds)
- ✅ Each treasure shows: name, cost, duration
- ✅ Edit, Delete, and Claim buttons visible

### Scenario 5.2: Claim Treasure

**Steps:**
1. Go to Dashboard, first child should have at least 5 tokens
2. Navigate to Shop tab
3. Click "Claim" on "TV (15min)" treasure
4. Select first child from dialog
5. Click "Claim"

**Expected Outcomes:**
- ✅ If child has enough tokens:
  - Dialog closes
  - Tokens deducted from child
  - Treasure added to activeTreasures
  - Timer starts (15 minutes = 900 seconds)
- ✅ If child lacks tokens:
  - Alert: "Not enough tokens!"
  - No tokens deducted
  - No treasure claimed

### Scenario 5.3: Treasure Timer Display

**Steps:**
1. Go to Dashboard after claiming treasure
2. Observe child card

**Expected Outcomes:**
- ✅ Child card shows treasure timer bar
- ✅ Timer displays remaining time (e.g., "14:59", "14:58", etc.)
- ✅ Timer counts down in real-time
- ✅ Timer bar extends full card width with 20px padding
- ✅ Green gradient fill

---

## SECTION 6: LEADERBOARD & WEEKLY STATS

### Scenario 6.1: View Leaderboard Rankings

**Steps:**
1. Navigate to Leaderboard tab

**Expected Outcomes:**
- ✅ Leaderboard displays all 4 children sorted by tokens (descending)
- ✅ Ranking format: "1  Child Name  💰 Token Count"
- ✅ Rank numbers: 1, 2, 3, 4
- ✅ Medal emojis next to names:
  - Rank 1: 🥇 (Gold medal)
  - Rank 2: 🥈 (Silver medal)
  - Rank 3: 🥉 (Bronze medal)
  - Rank 4: ⭐ (Star)

### Scenario 6.2: Weekly Performance Card

**Steps:**
1. On Leaderboard tab, scroll down to "Weekly Performance" section
2. Observe first child's stats

**Expected Outcomes:**
- ✅ Weekly Performance header with 📊 emoji
- ✅ First child card shows:
  - Medal emoji (🥇 for rank 1)
  - Child name
  - Activity progress bar (█ and ░ characters, max 10)
  - ⚔️ Quests: (number from last 7 days)
  - 💰 Tokens: (number from last 7 days)
  - 🎁 Treasures: (number from last 7 days)
  - ⏱️ Time: (total minutes from last 7 days)
  - 🏅 Badges: (number earned in last 7 days)
- ✅ Activity bar shows progress (█ for activity, ░ for empty)
- ✅ Activity bar has animated glow effect

### Scenario 6.3: Activity Bar Calculation

**Steps:**
1. Note current weekly stats for first child
2. Assign and approve a quest
3. Refresh Leaderboard tab
4. Observe activity bar update

**Expected Outcomes:**
- ✅ Activity bar updates to reflect new quest
- ✅ Quests count increments
- ✅ Activity bar fills proportionally (█ characters increase)
- ✅ Calculation: totalActivity = quests + tokens + treasures + badges

---

## SECTION 7: SETTINGS & CONFIGURATION

### Scenario 7.1: Age Multiplier Groups

**Steps:**
1. Navigate to Settings tab
2. Scroll to "Age Multiplier Groups" section

**Expected Outcomes:**
- ✅ 3 age groups displayed:
  - "Age 5 and Below (0-5)" - Current: 1.5
  - "Age 6-10" - Current: 1.2
  - "Age 11-12" - Current: 1.0
- ✅ Each group shows current multiplier
- ✅ Edit button available for each group

### Scenario 7.2: QML Tier Settings

**Steps:**
1. On Settings tab, find "QML Tier Settings" section
2. Click on "Juz Amma" tab

**Expected Outcomes:**
- ✅ Tabs for "Juz Amma" and "Al-Quran"
- ✅ Juz Amma tiers displayed:
  - Beginner: 0-2 surah (0% bonus)
  - Learner: 3-6 surah (15% bonus)
  - Strong Reader: 7-12 surah (35% bonus)
  - Young Hafiz: 13-20 surah (50% bonus)
  - Advance Hafiz: 21-30 surah (65% bonus)
  - Master Hafiz: 31-36 surah (85% bonus)
  - Ultimate Hafiz: 37 surah (100% bonus)
- ✅ All tiers show min/max requirements and bonus percentages

### Scenario 7.3: Badge Glossary

**Steps:**
1. On Settings tab, scroll to "Badge Glossary" section

**Expected Outcomes:**
- ✅ 24 badges displayed in 8 categories (ore types):
  - Coal: Quest Starter, Token Collector, First Treasure
  - Copper: Quest Runner, Token Saver, Treasure Hunter
  - Iron: Quest Warrior, Token Master, Treasure Seeker
  - Gold: Quest Legend, Token Millionaire, Treasure Collector
  - Redstone: Quest Master, Token Billionaire, Treasure Hoarder
  - Diamond: Quest Champion, Token Trillionaire, Treasure Emperor
  - Emerald: Quest Deity, Token Infinite, Treasure Immortal
  - Ancient Debris: Quest Eternal, Token Eternal, Treasure Eternal
- ✅ Each badge shows ore icon (pixel art 64x64px)
- ✅ Badge name and description displayed
- ✅ Icons are NOT emoji (actual ore PNG images)

### Scenario 7.4: Birthday Reward Setting

**Steps:**
1. On Settings tab, find "Birthday Reward" setting

**Expected Outcomes:**
- ✅ Birthday reward amount shown (default: 100 tokens)
- ✅ Dropdown or input to change amount
- ✅ Setting persists after refresh

---

## SECTION 8: POPUP & NOTIFICATION STYLING

### Scenario 8.1: Tier Milestone Popup Styling

**Steps:**
1. Go to child profile with progress near tier threshold
2. Click "+" to trigger tier change
3. Observe popup appearance

**Expected Outcomes:**
- ✅ Popup appears centered on screen
- ✅ Green gradient background (#4CAF50 to darker green)
- ✅ Black border around popup
- ✅ Gold (#FFD700) accents on title and button
- ✅ Ore celebration image (64x64px) with floating animation
- ✅ Text: "🎉 Tier Unlocked! 🎉"
- ✅ Child name displayed
- ✅ New tier name displayed
- ✅ "Celebrate!" button with gold styling
- ✅ Popup scales from 0.5 to 1.0 (appear animation)
- ✅ Ore image floats up/down continuously
- ✅ Popup auto-closes after 5 seconds

### Scenario 8.2: Alert Messages

**Steps:**
1. Try various actions that trigger alerts:
   - Assign quest without selecting children
   - Claim treasure without enough tokens
   - Delete quest/treasure without confirmation

**Expected Outcomes:**
- ✅ All alerts use browser alert() function
- ✅ Messages are clear and descriptive
- ✅ Alerts appear immediately
- ✅ User can dismiss by clicking OK

---

## SECTION 9: DATA PERSISTENCE & BACKUP

### Scenario 9.1: localStorage Persistence

**Steps:**
1. Make several changes:
   - Increase child progress
   - Assign and approve quests
   - Claim treasures
2. Open DevTools → Application → localStorage
3. Find "epicRpgData" key
4. Refresh page

**Expected Outcomes:**
- ✅ "epicRpgData" key exists in localStorage
- ✅ Value is valid JSON
- ✅ JSON contains all children, quests, treasures, history
- ✅ After refresh, all changes persist
- ✅ No data loss

### Scenario 9.2: Master Reset

**Steps:**
1. On Settings tab, find "Master Reset" button
2. Click button
3. Confirm in dialog

**Expected Outcomes:**
- ✅ Confirmation dialog appears: "Master Reset: This will reset tokens, history, and ALL badge progress for all children. Continue?"
- ✅ If confirmed:
  - All children reset to initial state (0 tokens, 0 progress, no history)
  - All quest/treasure history cleared
  - All badges cleared
  - Page refreshes
  - Success message: "Master reset complete!"
- ✅ If cancelled:
  - No changes made
  - Dialog closes

---

## SECTION 10: SCAN CARD BUTTON POSITIONING

### Scenario 10.1: Button Position & Visibility

**Steps:**
1. On any tab, observe Scan Card button
2. Scroll content up and down
3. Check for overlaps

**Expected Outcomes:**
- ✅ Button visible at bottom-right corner
- ✅ Button positioned above tab bar (not overlapping)
- ✅ Button stays in fixed position while content scrolls
- ✅ No overlap with:
  - Child profile cards
  - Quest/treasure delete buttons
  - Badge sections
  - Tab bar
- ✅ Button shows "📱 Scan Card" text
- ✅ Button has green styling matching theme

---

## SECTION 11: RESPONSIVE & VISUAL ELEMENTS

### Scenario 11.1: Color Scheme & Theming

**Steps:**
1. Observe overall color scheme

**Expected Outcomes:**
- ✅ Primary color: Green (#4CAF50) - Minecraft-inspired
- ✅ Secondary color: Gold (#FFD700) - Accents and highlights
- ✅ Background: Brown/tan (#8B7355) - Dirt block color
- ✅ Text: Dark (#333333) - Good contrast
- ✅ Borders: Black - Pixel-perfect edges

### Scenario 11.2: Avatar Display

**Steps:**
1. View all child cards and profiles

**Expected Outcomes:**
- ✅ All avatars load without errors
- ✅ Avatar dimensions: 64x64px
- ✅ Avatars are rounded/square pixel art
- ✅ No broken image icons
- ✅ Avatars match child gender (m_ for male, f_ for female)

### Scenario 11.3: Ore Icon Display

**Steps:**
1. Navigate to Settings → Badge Glossary
2. Observe all ore icons

**Expected Outcomes:**
- ✅ All 8 ore icons display correctly
- ✅ Icons are 64x64px pixel art
- ✅ Icons are NOT emoji
- ✅ Colors match ore types:
  - Coal: Dark gray
  - Copper: Orange
  - Iron: Light gray
  - Gold: Golden
  - Redstone: Red
  - Diamond: Cyan
  - Emerald: Green
  - Ancient Debris: Brown/gold

---

## SECTION 12: EDGE CASES & ERROR HANDLING

### Scenario 12.1: Maximum Progress Values

**Steps:**
1. Set child progress to max (37 for Juz Amma, 30 for Al-Quran)
2. Try to click "+" button

**Expected Outcomes:**
- ✅ Progress does not exceed max
- ✅ Tier remains at "Ultimate Hafiz"
- ✅ No error message (silently prevents overflow)

### Scenario 12.2: Minimum Progress Values

**Steps:**
1. Set child progress to 0
2. Try to click "−" button

**Expected Outcomes:**
- ✅ Progress does not go below 0
- ✅ Tier remains at "Beginner"
- ✅ No error message (silently prevents underflow)

### Scenario 12.3: Insufficient Tokens for Treasure

**Steps:**
1. Ensure child has 0 tokens
2. Try to claim treasure (cost: 5 tokens)

**Expected Outcomes:**
- ✅ Alert: "Not enough tokens!"
- ✅ Treasure not claimed
- ✅ No tokens deducted
- ✅ No error in console

### Scenario 12.4: Delete Operations

**Steps:**
1. Click "Delete" on quest or treasure
2. Confirm in dialog

**Expected Outcomes:**
- ✅ Confirmation dialog appears
- ✅ If confirmed: Item deleted, list refreshes
- ✅ If cancelled: Item remains
- ✅ No orphaned references

---

## SECTION 13: PERFORMANCE VALIDATION

### Scenario 13.1: Page Load Speed

**Steps:**
1. Clear cache: Ctrl+Shift+Delete
2. Reload page: F5
3. Measure load time

**Expected Outcomes:**
- ✅ Initial load: < 2 seconds
- ✅ No blank screens or loading indicators
- ✅ All content visible immediately

### Scenario 13.2: Tab Switching Speed

**Steps:**
1. Click between tabs rapidly
2. Observe response time

**Expected Outcomes:**
- ✅ Tab switching: Instant (< 100ms)
- ✅ No lag or delay
- ✅ Content renders immediately

### Scenario 13.3: Data Operations Speed

**Steps:**
1. Assign quest to all 4 children
2. Approve all quests
3. Claim all treasures
4. Observe performance

**Expected Outcomes:**
- ✅ All operations instant
- ✅ No UI freezing
- ✅ No performance degradation
- ✅ Data saved to localStorage instantly

---

## SECTION 14: CROSS-BROWSER COMPATIBILITY

### Scenario 14.1: Chrome/Chromium

**Steps:**
1. Open in Chrome/Chromium
2. Test all features

**Expected Outcomes:**
- ✅ All features work
- ✅ No console errors
- ✅ Styling correct
- ✅ localStorage works

### Scenario 14.2: Firefox

**Steps:**
1. Open in Firefox
2. Test all features

**Expected Outcomes:**
- ✅ All features work
- ✅ No console errors
- ✅ Styling correct
- ✅ localStorage works

### Scenario 14.3: Safari

**Steps:**
1. Open in Safari
2. Test all features

**Expected Outcomes:**
- ✅ All features work
- ✅ No console errors
- ✅ Styling correct
- ✅ localStorage works

---

## VALIDATION SUMMARY CHECKLIST

### Core Functionality
- [ ] App loads with preset data
- [ ] 4 children display correctly
- [ ] All tabs accessible
- [ ] Dashboard shows correct tiers

### Child Management
- [ ] Child profile opens
- [ ] Progress +/- buttons work
- [ ] QML type change works
- [ ] Tier changes trigger popups
- [ ] Tier milestone popup displays correctly

### Quest Management
- [ ] 4 preset quests visible
- [ ] Quest assignment works
- [ ] Quest approval awards tokens
- [ ] Token calculation correct
- [ ] Quest history tracked

### Treasure Management
- [ ] 4 preset treasures visible
- [ ] Treasure claiming works
- [ ] Token deduction works
- [ ] Timer displays and counts down
- [ ] Treasure history tracked

### Leaderboard
- [ ] Rankings display correctly
- [ ] Medal emojis correct
- [ ] Weekly stats calculated
- [ ] Activity bar displays
- [ ] Activity bar updates

### Settings
- [ ] Age groups display
- [ ] QML tiers display
- [ ] Badge glossary shows ore icons
- [ ] Master reset works

### UI/UX
- [ ] Progress bars extend full width
- [ ] Ore icons display (not emoji)
- [ ] Scan Card button positioned correctly
- [ ] No overlaps
- [ ] Color scheme correct
- [ ] Animations smooth

### Data Persistence
- [ ] Data saves to localStorage
- [ ] Data persists after refresh
- [ ] Master reset clears data
- [ ] No data loss

### Performance
- [ ] Page loads < 2 seconds
- [ ] Tab switching instant
- [ ] Operations responsive
- [ ] No lag or freezing

---

## FINAL VALIDATION

**All scenarios completed successfully?** ✅ YES / ❌ NO

**If NO, list failed scenarios:**
- (List any failed tests here)

**If YES, application is ready for deployment.**

