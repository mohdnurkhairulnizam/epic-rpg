# EPIC RPG - COMPLETE PROJECT EXTRACTION FOR MIGRATION

**Date:** 2026-02-03  
**Project:** EPIC RPG - Family Quest & Treasure System  
**Status:** Production Ready  
**Target:** Exact reconstruction in another Manus account

---

## 1. DEVELOPMENT LOG (AUTHORITATIVE)

### Phase 1: Initial Project Reconstruction (2026-01-31)

**User Request 1:** "You are continuing an EXISTING manus-generated project. Reconstruct the project EXACTLY as provided. Do NOT refactor, optimize, or redesign. Preserve all UI, logic, wording, and behavior. Validate behavior against the walkthrough."

**Deliverable:** EPIC_RPG_FULL_MIGRATION_V2.zip containing complete vanilla JavaScript application

**Actions Taken:**
1. Extracted migration package to temporary directory
2. Analyzed RECONSTRUCTION_REPORT.md and EPIC_RPG_FUNCTIONAL_WALKTHROUGH.md
3. Identified that the project is a vanilla JavaScript application (NOT React)
4. Copied epic-rpg-app.js (main application logic) to client/public/
5. Copied epic-rpg-style.css (all styling) to client/public/
6. Copied 80 avatar files (30 originals + 30 processed variants) to client/public/avatars/
7. Configured Vite to serve vanilla JavaScript application
8. Updated client/index.html to load vanilla app instead of React scaffold
9. Verified all 4 child profiles loading correctly with avatars
10. Tested all 5 main tabs: Dashboard, Leaderboard, Play, Shop, Settings
11. Confirmed NFC functionality structure intact

**Outcome:** ✅ Application fully reconstructed and running on http://localhost:3000/

---

### Phase 2: UI/UX Improvements - Round 1 (2026-01-31)

**User Request 2:** Four UI Improvements
1. "Change the display of 'QML: Juz Amma/Al-Quran' on child card to show current tier level"
2. "Change QML progress update method: Instead of fill box, use horizontal progress bar with +/- buttons in pixel minecraft theme"
3. "Create new pixel ore icons for badges - pixel like minecraft theme with different realistic ore shapes"
4. "Move Scan Card button to lower part of screen (not overlapping bottom tab bar)"

**Changes Made:**
- Changed tier display from QML type to tier name on dashboard cards
- Replaced QML progress input with horizontal progress bar featuring +/- buttons
- Created 8 pixel art ore icons for badge categories (Coal, Copper, Iron, Gold, Redstone, Diamond, Emerald, Ancient Debris)
- Repositioned Scan Card button above bottom tab navigation with proper z-index management

**Outcome:** ✅ All 4 improvements implemented and tested

---

### Phase 3: Bug Fixes - Round 1 (2026-01-31)

**User Request 3:** Three Bug Fixes
1. "Change badges icon at children profile screen to use new pixel ore icons"
2. "Fix Scan Card button overlapping with child profile card when scrolling, quest delete buttons, and badges"
3. "Fix QML progress numerical display - different for Juz Amma (*/37) and Al-Quran (*/30)"

**Changes Made:**
- Updated badge display on child profile to use pixel art ore icons
- Fixed Scan Card button positioning with improved z-index and spacing
- Implemented dynamic max value calculation for QML progress bar based on QML type

**Outcome:** ✅ All 3 bugs fixed and validated

---

### Phase 4: UI/UX Improvements - Round 2 (2026-01-31)

**User Request 4:** Four Visual Enhancements
1. "Make treasure timer bar and QML progress bar on child card fit the card width with 20px padding"
2. "Implement progress tier milestones - Show visual celebrations when children reach new tier levels"
3. "Make popup messages/notices more visually interesting to suit pixel minecraft theme"
4. "Make weekly performance card on leaderboard more visual appealing with pixel minecraft theme"

**Changes Made:**
- Extended progress bars to fill card width with 20px padding
- Implemented tier milestone celebration popup with ore animation
- Enhanced popup styling with Minecraft-themed green gradient and gold accents
- Added medal emojis and activity bar to weekly performance cards

**Outcome:** ✅ All 4 enhancements implemented and tested

---

### Phase 5: Bug Fixes - Round 2 (2026-02-02 to 2026-02-03)

**User Request 5:** Eight Bug Fixes

1. **Create Child dialog form clearing** - Form now clears after successful child creation
2. **QML progress bar left padding** - Progress bar now has consistent left/right padding (10px) matching treasure timer styling
3. **QML Type label overlap** - QML Type label and dropdown are now on the same flex row with proper spacing
4. **Duplicate quests independence** - Each duplicate quest now has a unique `instanceId`
5. **Age multiplier calculation** - Age 12 correctly uses 1x multiplier (Age 11-12 group)
6. **QML tier max value updates** - QML progress bar now dynamically uses `getQMLMaxValue()` function
7. **Settings dialog close bug** - Fixed by removing existing modal before creating new one
8. **Quest assignment dialog close** - Added modal ID and proper close handlers

**Outcome:** ✅ All 8 bugs fixed and verified

---

## 2. COMPLETE APPLICATION SPECIFICATION

### 2.1 Application Overview

**Name:** EPIC RPG - Family Quest & Treasure System  
**Type:** Vanilla JavaScript Web Application  
**Purpose:** Gamified quest and treasure system for families to manage children's tasks and rewards  
**Target Users:** Parents managing multiple children's activities and rewards  
**Platform:** Web (HTML5 + CSS3 + JavaScript ES6+)

### 2.2 Main UI Layout

```
┌─────────────────────────────────────────┐
│  EPIC RPG - Family Quest & Treasure System│  (Header)
├─────────────────────────────────────────┤
│                                         │
│          [TAB CONTENT AREA]             │  (Main content area - scrollable)
│                                         │
│  📱 Scan Card Button (bottom-right)    │  (Fixed position above tab bar)
├─────────────────────────────────────────┤
│ 🏠 Dashboard | 🏆 Leaderboard | ⚔️ Play│  (Bottom tab navigation)
│ 🎁 Shop | ⚙️ Settings                  │
└─────────────────────────────────────────┘
```

### 2.3 Dashboard Tab

**Purpose:** Display all children with their current status and quick stats

**Child Card Components:**
- Avatar image (60x60px, rounded)
- Child name (underlined, bold)
- Age and current tier level
- Token count with coin emoji
- QML progress bar (extends full width with 20px padding)
- Tier name display
- Status notifications (if on quest or treasure)
- Timer bar (if treasure active)

**Interactions:**
- Click child card → Open child profile
- Click "+ Add Child" → Open add child dialog
- Progress bars are read-only on dashboard

### 2.4 Child Profile Screen

**Components:**
- Back button
- Avatar display
- Child name, age, DOB
- Status section with:
  - Token count
  - QML type dropdown (Juz Amma / Al-Quran)
  - Current tier display
  - Horizontal progress bar with +/- buttons
  - Numerical progress display (current/max)
- Ongoing quests list
- Badges earned (with ore icons)
- Edit and delete buttons

**Interactions:**
- Click "−" button → Decrease QML progress by 1
- Click "+" button → Increase QML progress by 1
- Change QML type dropdown → Update tier based on new type
- Click "Edit Profile" → Edit child details
- Click "Delete Child" → Confirm and delete child
- Click quest → Manage quest (approve/reject/cancel)

### 2.5 Leaderboard Tab

**Components:**
- Leaderboard rankings (sorted by tokens, descending)
- Rank number with rank styling
- Child name (clickable)
- Token count with coin emoji
- Weekly performance section with:
  - Medal emoji (🥇🥈🥉⭐) based on rank
  - Child name
  - Activity progress bar (█ and ░ characters)
  - Emoji-prefixed stats (⚔️💰🎁⏱️🏅)
  - Weekly totals for quests, tokens, treasures, time, badges

### 2.6 Play Tab (Quests)

**Quest Card Components:**
- Quest name
- Quest type (Quick Quest, Standard Mission, Boss Fight, Team Raid)
- Base token reward
- Edit button
- Delete button
- Assign button

### 2.7 Shop Tab (Treasures)

**Treasure Card Components:**
- Treasure name
- Token cost
- Duration in minutes
- Edit button
- Delete button
- Claim button

### 2.8 Settings Tab

**Components:**
- Age multiplier groups with current multiplier selector
- QML tier configuration (Juz Amma and Al-Quran)
- Birthday reward token amount
- Master reset button
- Badge glossary with ore icons and descriptions

---

## 3. FULL SOURCE CODE EXPORT

### 3.1 Key Files

**HTML Entry Point:** client/index.html (186 lines)  
**Main Application:** client/public/epic-rpg-app.js (1310 lines)  
**CSS Styling:** client/public/epic-rpg-style.css (1100+ lines)  
**Assets:** 80 avatar files, 8 badge ore icons, 3 tier celebration frames

### 3.2 Key Functions

**Data Management:**
- `loadData()` - Load app state from localStorage
- `saveData()` - Save app state to localStorage
- `clearCreateChildForm()` - Clear form inputs after child creation

**Rendering:**
- `renderDashboard()` - Render dashboard tab
- `renderChildProfile()` - Render child profile screen
- `renderLeaderboard()` - Render leaderboard tab
- `renderPlay()` - Render play/quests tab
- `renderShop()` - Render shop/treasures tab
- `renderSettings()` - Render settings tab

**Child Management:**
- `createChild()` - Create new child
- `editChild()` - Edit child details
- `deleteChild()` - Delete child

**Quest Management:**
- `createQuest()` - Create new quest
- `requestQuestFromPlay()` - Open quest assignment dialog
- `confirmMultiQuestAssignment()` - Assign quest to multiple children
- `approveQuest()` - Approve quest and award tokens
- `deleteQuest()` - Delete quest

**Treasure Management:**
- `createTreasure()` - Create new treasure
- `claimTreasure()` - Claim treasure and start timer
- `deleteTreasure()` - Delete treasure

**QML & Progression:**
- `updateQMLProgress()` - Update QML progress with tier detection
- `changeQMLType()` - Change child's QML type
- `getQMLMaxValue()` - Get max value for QML type
- `showTierMilestonePopup()` - Show tier celebration popup

**Utility:**
- `switchTab()` - Switch between tabs
- `openModal()` / `closeModal()` - Modal management
- `calculateAge()` - Calculate child's age from DOB
- `getAgeMultiplier()` - Get age multiplier for child
- `calculateTokens()` - Calculate tokens with multipliers

---

## 4. DATA & STATE SCHEMA

### 4.1 AppState Structure

**Root Object:**
```javascript
{
  children: [],        // Array of child objects
  quests: [],         // Array of quest objects
  treasures: [],      // Array of treasure objects
  ageGroups: [],      // Array of age group objects
  qmlTiers: {},       // Object with Juz Amma and Al-Quran tier arrays
  badges: [],         // Array of badge definitions
  birthdayTokenReward: 100
}
```

**Child Object:**
```javascript
{
  id: "child_1",
  name: "Muhammad Darwish Ar-Rayyan",
  dateOfBirth: "2013-08-09",
  nfcCardId: null,
  avatarId: "avatar_m_1",
  tokens: 0,
  qmlType: "Juz Amma",
  currentQMLTier: "Beginner",
  currentQMLProgress: 0,
  ongoingQuests: [],
  activeTreasures: [],
  badges: [],
  questHistory: [],
  treasureHistory: []
}
```

**Quest Object:**
```javascript
{
  id: "quest_1",
  name: "Pick up toys",
  type: "Quick Quest",
  baseTokenReward: 1
}
```

**Treasure Object:**
```javascript
{
  id: "treasure_1",
  name: "TV (15min)",
  costTokens: 5,
  baseTimerSeconds: 900,
  cooldownSeconds: 0
}
```

**Age Group Object:**
```javascript
{
  id: "age_1",
  name: "Age 5 and Below",
  ageRangeMin: 0,
  ageRangeMax: 5,
  ageRangeDescription: "5 and below",
  multiplierOptions: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
  currentMultiplier: 1.5
}
```

**QML Tier Object:**
```javascript
{
  id: "ja_1",
  tierName: "Beginner",
  minRequirement: 0,
  maxRequirement: 2,
  tierRangeDescription: "0-2 surah",
  bonusPercentage: 0
}
```

**Badge Object:**
```javascript
{
  id: "badge_1",
  category: "Coal",
  name: "Quest Starter",
  description: "Complete 1 quest",
  type: "quests_completed",
  targetValue: 1
}
```

### 4.2 Data Persistence

**Storage Method:** localStorage (browser local storage)  
**Storage Key:** 'epicRpgData'  
**Save Trigger:** After any data modification (called saveData())  
**Load Trigger:** On app initialization (called loadData())

---

## 5. PLATFORM & BUILD CONFIGURATION

### 5.1 Target Platform

**Primary Platform:** Web Browser (HTML5/CSS3/JavaScript)  
**Target Browsers:** Chrome, Firefox, Safari, Edge (modern versions)  
**Mobile Support:** Limited (not optimized for mobile, designed for desktop/tablet)  
**Deployment:** Manus static web hosting

### 5.2 Technology Stack

- **Language:** Vanilla JavaScript (ES6+)
- **HTML:** HTML5
- **CSS:** CSS3 with custom properties (CSS variables)
- **No Framework:** Pure vanilla JavaScript (NOT React, Vue, or Angular)
- **Build Tool:** Vite 7.1.7
- **Package Manager:** pnpm 10.4.1
- **Node Version:** 22.13.0

### 5.3 Build Configuration

**File:** `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindPlugin from '@tailwindcss/vite'
import jxcLocPlugin from '@builder.io/vite-plugin-jsx-loc'
import manusPlugin from 'vite-plugin-manus-runtime'

export default defineConfig({
  plugins: [
    react(),
    tailwindPlugin(),
    jxcLocPlugin(),
    manusPlugin()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    middlewareMode: false
  }
})
```

### 5.4 Package Scripts

| Script | Purpose | Command |
|--------|---------|---------|
| `dev` | Start development server | `vite --host` |
| `build` | Build for production | `vite build && esbuild ...` |
| `start` | Run production build | `NODE_ENV=production node dist/index.js` |
| `preview` | Preview production build | `vite preview --host` |
| `check` | Type check | `tsc --noEmit` |
| `format` | Format code | `prettier --write .` |

---

## 6. DEPLOYMENT & PREVIEW DETAILS

### 6.1 Development Server

**Command:** `pnpm dev`  
**URL:** http://localhost:3000/  
**Port:** 3000  
**Host:** 0.0.0.0 (accessible from all interfaces)

### 6.2 Production Build

**Command:** `pnpm build`  
**Output:** `dist/` directory with optimized assets

### 6.3 Production Start

**Command:** `NODE_ENV=production pnpm start`  
**Process:** Starts Express server from dist/index.js

### 6.4 Manus Hosting

**Platform:** Manus Static Web Hosting  
**URL:** https://3000-iqj5nwbaqz4jtwzu8mz99-318c2387.sg1.manus.computer  
**Auto-Generated Domain:** {project-name}.manus.space  
**Custom Domain:** Configurable through Manus UI

### 6.5 Deployment Process

1. **Create Checkpoint:** Save project state via `webdev_save_checkpoint`
2. **Click Publish:** Use Publish button in Manus UI
3. **Automatic Build:** Manus builds and deploys automatically
4. **Live:** Application available at assigned URL

---

## 7. FUNCTIONAL VALIDATION WALKTHROUGH

### 7.1 App Startup & Initialization

**Scenario 1.1: First Launch with Preset Data**

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

### 7.2 Dashboard Functionality

**Scenario 2.1: Display All Children with Correct Tiers**

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

### 7.3 Child Profile Management

**Scenario 3.1: Open Child Profile**

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

**Scenario 3.2: QML Progress +/- Button Functionality**

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

### 7.4 Quest Management

**Scenario 4.1: Assign Quest to Child**

**Steps:**
1. Navigate to Play tab
2. Click "Assign" on first quest ("Pick up toys")
3. Select one or more children
4. Click "Assign" button

**Expected Outcomes:**
- ✅ Dialog appears with checkboxes for all children
- ✅ Quest assigned to selected children
- ✅ Dialog closes automatically
- ✅ Child profile shows quest in "Ongoing Quests" section
- ✅ Each duplicate quest has unique "Mark Complete" and "Cancel" buttons

### 7.5 Token Calculation

**Formula:** `tokensEarned = baseTokenReward × ageMultiplier × (1 + qmlBonus)`

**Example:** Quest with 3 base tokens, age 10 (multiplier 1.2), Strong Reader tier (35% bonus)
```
tokensEarned = 3 × 1.2 × (1 + 0.35) = 3 × 1.2 × 1.35 = 4.86 ≈ 5 tokens
```

### 7.6 Tier System

**Juz Amma Tiers:**
1. Beginner: 0-2 surah (0% bonus)
2. Learner: 3-6 surah (15% bonus)
3. Strong Reader: 7-12 surah (35% bonus)
4. Young Hafiz: 13-20 surah (50% bonus)
5. Advance Hafiz: 21-30 surah (65% bonus)
6. Master Hafiz: 31-36 surah (85% bonus)
7. Ultimate Hafiz: 37 surah (100% bonus)

**Al-Quran Tiers:**
1. Beginner: 0-2 Juz (0% bonus)
2. Learner: 3-6 Juz (15% bonus)
3. Strong Reader: 7-12 Juz (35% bonus)
4. Young Hafiz: 13-18 Juz (50% bonus)
5. Advance Hafiz: 19-24 Juz (65% bonus)
6. Master Hafiz: 25-29 Juz (85% bonus)
7. Ultimate Hafiz: 30 Juz (100% bonus)

---

## RECONSTRUCTION INSTRUCTIONS

To reconstruct this project in another Manus account:

1. **Initialize Project:** Create new web-static project in Manus
2. **Copy Files:** Copy all files from this extraction
3. **Install Dependencies:** `pnpm install --frozen-lockfile`
4. **Verify Build:** `pnpm build` (should succeed)
5. **Start Dev Server:** `pnpm dev` (should run on port 3000)
6. **Test Features:** Verify all functionality matches this walkthrough
7. **Deploy:** Create checkpoint and publish via Manus UI

---

## KNOWN CONSTRAINTS & LIMITATIONS

1. **Tier Milestone Popup:** Only triggers on progress update, not on QML type change
2. **Activity Bar:** Capped at 10 characters (█) for visual consistency
3. **Ore Icons:** Fixed 64x64px size, may need scaling for different screen sizes
4. **Animation Performance:** Floating animation runs continuously (may impact performance on low-end devices)
5. **NFC Functionality:** Structure present but not fully implemented in web version
6. **Birthday Auto-Trigger:** Not automatically triggered on birthday
7. **Treasure Timer:** Requires manual page refresh to update display
8. **Data Export:** No export functionality for backup
9. **Multi-Device Sync:** No cloud sync (localStorage only)
10. **Responsive Design:** Not optimized for mobile devices

---

**END OF EXTRACTION DOCUMENT**
