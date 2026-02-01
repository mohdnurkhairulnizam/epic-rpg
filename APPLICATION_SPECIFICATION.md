# EPIC RPG - Complete Application Specification

## 1. APPLICATION OVERVIEW

**Name:** EPIC RPG - Family Quest & Treasure System  
**Type:** Vanilla JavaScript Web Application  
**Purpose:** Gamified quest and treasure system for families to manage children's tasks and rewards  
**Target Users:** Parents managing multiple children's activities and rewards  
**Platform:** Web (HTML5 + CSS3 + JavaScript ES6+)

---

## 2. USER INTERFACE LAYOUT

### 2.1 Main Container Structure
```
┌─────────────────────────────────────────────┐
│  EPIC RPG - Family Quest & Treasure System  │  (Header)
├─────────────────────────────────────────────┤
│                                             │
│          [TAB CONTENT AREA]                 │  (Main content area - scrollable)
│                                             │
│  📱 Scan Card Button (bottom-right)        │  (Fixed position above tab bar)
├─────────────────────────────────────────────┤
│ 🏠 Dashboard | 🏆 Leaderboard | ⚔️ Play  │  (Bottom tab navigation)
│ 🎁 Shop | ⚙️ Settings                      │
└─────────────────────────────────────────────┘
```

### 2.2 Dashboard Tab

**Purpose:** Display all children with their current status and quick stats

**Layout:**
```
┌─────────────────────────────────────────┐
│  Dashboard                              │
├─────────────────────────────────────────┤
│  + Add Child Button                     │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐│
│  │ [Avatar] Muhammad Darwish Ar-Rayyan ││
│  │ Age: 12 | Beginner                  ││
│  │ 💰 0 Tokens                         ││
│  │ ┌───────────────────────────────────┤│
│  │ │ Beginner                          ││
│  │ │ [████████░░░░░░░░░░░░░░░░░░░░░░] ││
│  │ └───────────────────────────────────┤│
│  └─────────────────────────────────────┘│
│  (Repeat for each child)                │
└─────────────────────────────────────────┘
```

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

### 2.3 Child Profile Screen

**Purpose:** Detailed view of individual child with full management options

**Layout:**
```
┌─────────────────────────────────────────┐
│ ← Back to Dashboard                     │
├─────────────────────────────────────────┤
│ [Avatar] Muhammad Darwish Ar-Rayyan    │
│ Age: 12 | DOB: 2013-08-09              │
├─────────────────────────────────────────┤
│ Status                                  │
│ Tokens: 0                               │
│ QML Type: [Juz Amma ▼]                 │
│ Current Tier: Beginner                  │
│ Progress: [−] ████░░░░░░░░░░░░░░ [+]   │
│           0/37                          │
├─────────────────────────────────────────┤
│ Ongoing Quests                          │
│ (List of active quests)                 │
├─────────────────────────────────────────┤
│ Badges Earned                           │
│ [🟫] [🟧] [⬜] ...                      │
│ Quest Starter, Token Collector, ...     │
├─────────────────────────────────────────┤
│ [Edit Profile] [Delete Child]           │
└─────────────────────────────────────────┘
```

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

### 2.4 Leaderboard Tab

**Purpose:** Display rankings and weekly performance statistics

**Layout:**
```
┌─────────────────────────────────────────┐
│ Leaderboard                             │
├─────────────────────────────────────────┤
│ 1  Muhammad Darwish Ar-Rayyan  💰 0    │
│ 2  Muhammad Daniyal Al-Fateh   💰 0    │
│ 3  Muhammad Dawood Ariq        💰 0    │
│ 4  Muhammad Danish Adeeb       💰 0    │
├─────────────────────────────────────────┤
│ 📊 Weekly Performance                   │
├─────────────────────────────────────────┤
│ 🥇 Muhammad Darwish Ar-Rayyan          │
│ ███░░░░░░░ (Activity bar)              │
│ ⚔️ Quests: 0                           │
│ 💰 Tokens: 0                           │
│ 🎁 Treasures: 0                        │
│ ⏱️ Time: 0 mins                        │
│ 🏅 Badges: 0                           │
│                                         │
│ 🥈 Muhammad Daniyal Al-Fateh           │
│ (Similar stats)                         │
└─────────────────────────────────────────┘
```

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

**Interactions:**
- Click child name → Open child profile
- Stats calculated from last 7 days of history

### 2.5 Play Tab (Quests)

**Purpose:** Manage quests for children

**Layout:**
```
┌─────────────────────────────────────────┐
│ Play - Quests                           │
├─────────────────────────────────────────┤
│ [+ Add Quest]                           │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐│
│ │ Pick up toys (Quick Quest)          ││
│ │ Base Reward: 1 token                ││
│ │ [Edit] [Delete] [Assign]            ││
│ └─────────────────────────────────────┘│
│ (Repeat for each quest)                │
└─────────────────────────────────────────┘
```

**Quest Card Components:**
- Quest name
- Quest type (Quick Quest, Standard Mission, Boss Fight, Team Raid)
- Base token reward
- Edit button
- Delete button
- Assign button

**Interactions:**
- Click "+ Add Quest" → Open quest creation dialog
- Click "Edit" → Edit quest details
- Click "Delete" → Confirm and delete quest
- Click "Assign" → Multi-select children and assign quest

### 2.6 Shop Tab (Treasures)

**Purpose:** Manage treasures/rewards for children

**Layout:**
```
┌─────────────────────────────────────────┐
│ Shop - Treasures                        │
├─────────────────────────────────────────┤
│ [+ Add Treasure]                        │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐│
│ │ TV (15min)                          ││
│ │ Cost: 5 tokens | Duration: 15 mins  ││
│ │ [Edit] [Delete] [Claim]             ││
│ └─────────────────────────────────────┘│
│ (Repeat for each treasure)              │
└─────────────────────────────────────────┘
```

**Treasure Card Components:**
- Treasure name
- Token cost
- Duration in minutes
- Edit button
- Delete button
- Claim button

**Interactions:**
- Click "+ Add Treasure" → Open treasure creation dialog
- Click "Edit" → Edit treasure details
- Click "Delete" → Confirm and delete treasure
- Click "Claim" → Select child and claim treasure (deducts tokens, starts timer)

### 2.7 Settings Tab

**Purpose:** Configure game mechanics and view badge glossary

**Layout:**
```
┌─────────────────────────────────────────┐
│ Settings                                │
├─────────────────────────────────────────┤
│ Age Multiplier Groups                   │
│ ┌─────────────────────────────────────┐│
│ │ Age 5 and Below (0-5)               ││
│ │ Current: [1.5 ▼]                    ││
│ │ [Edit]                              ││
│ └─────────────────────────────────────┘│
│ (Repeat for each age group)             │
├─────────────────────────────────────────┤
│ QML Tier Settings                       │
│ [Juz Amma] [Al-Quran]                  │
│ (Display tier details with edit option) │
├─────────────────────────────────────────┤
│ Birthday Reward: [100 ▼] tokens        │
│ [Master Reset]                          │
├─────────────────────────────────────────┤
│ Badge Glossary                          │
│ [🟫] Coal Badge - Quest Starter        │
│ [🟧] Copper Badge - Quest Runner       │
│ (All 8 badge categories with ore icons)│
└─────────────────────────────────────────┘
```

**Components:**
- Age multiplier groups with current multiplier selector
- QML tier configuration (Juz Amma and Al-Quran)
- Birthday reward token amount
- Master reset button
- Badge glossary with ore icons and descriptions

**Interactions:**
- Change age multiplier → Updates token calculations
- Click "Edit" on age group → Edit name and multiplier
- Click "Edit" on tier → Edit tier name and requirements
- Click "Master Reset" → Confirm and reset all data
- Badge glossary is read-only

---

## 3. INTERACTION FLOWS

### 3.1 Add Child Flow
1. User clicks "+ Add Child" on Dashboard
2. Dialog appears with form fields:
   - Child name (text input)
   - Date of birth (date picker)
   - Avatar selection (grid of 60 avatars)
   - QML type (Juz Amma / Al-Quran dropdown)
3. User fills form and clicks "Create"
4. New child added to appState.children
5. Data saved to localStorage
6. Dashboard refreshes showing new child

### 3.2 Assign Quest Flow
1. User clicks "Assign" on quest card
2. Dialog appears with checkboxes for all children
3. User selects one or more children
4. User clicks "Assign"
5. Quest added to each selected child's ongoingQuests array
6. Data saved to localStorage
7. Play tab refreshes

### 3.3 Approve Quest Flow
1. User clicks "Approve" on ongoing quest in child profile
2. Tokens calculated: baseReward × ageMultiplier × qmlBonus
3. Tokens added to child.tokens
4. Quest added to child.questHistory with approvedDate
5. Badge progress updated (quests_completed, tokens_earned)
6. Badges checked for completion
7. Data saved to localStorage
8. Child profile refreshes

### 3.4 Claim Treasure Flow
1. User clicks "Claim" on treasure card
2. Dialog appears to select child
3. User selects child and clicks "Claim"
4. Check if child has enough tokens
5. If yes: tokens deducted, treasure added to activeTreasures, timer starts
6. If no: error message "Not enough tokens!"
7. Treasure added to treasureHistory with claimDate
8. Badge progress updated (treasures_claimed)
9. Data saved to localStorage
10. Shop tab refreshes

### 3.5 Update QML Progress Flow
1. User clicks +/- button on child profile
2. Progress value updated: child.currentQMLProgress += 1 or -= 1
3. New tier calculated based on QML tiers
4. If tier changed: showTierMilestonePopup() triggered
5. Popup displays with ore animation for 5 seconds
6. Data saved to localStorage
7. Child profile refreshes

### 3.6 Change QML Type Flow
1. User selects different QML type from dropdown
2. changeQMLType() function called
3. QML type updated: child.qmlType = newType
4. QML progress recalculated for new type
5. New tier assigned based on new type's tiers
6. Data saved to localStorage
7. Child profile refreshes

---

## 4. CONSOLE & LOG TEXT

### 4.1 Browser Console Output
No console logging is implemented in the application. All errors are handled silently or displayed as user-facing alerts/messages.

### 4.2 Alert Messages
- "Please fill in all fields" - When form validation fails
- "Please select at least one child" - When no children selected for quest assignment
- "Quest assigned to X child(ren)!" - Confirmation after quest assignment
- "This child already has this quest" - When attempting to assign duplicate quest
- "Quest approved! X tokens awarded" - After quest approval
- "Delete this quest?" - Confirmation dialog
- "Not enough tokens!" - When child lacks tokens for treasure
- "Delete this treasure?" - Confirmation dialog
- "Master Reset: This will reset tokens, history, and ALL badge progress for all children. Continue?" - Master reset confirmation
- "Master reset complete!" - After master reset

---

## 5. GAME MECHANICS & LOGIC RULES

### 5.1 Token Calculation Formula
```
tokensEarned = baseTokenReward × ageMultiplier × (1 + qmlBonus)
```
Where:
- baseTokenReward: Quest's base reward (1-8 tokens)
- ageMultiplier: Age group multiplier (0.7-1.5)
- qmlBonus: QML tier bonus percentage (0-100%) converted to decimal

**Example:** Quest with 3 base tokens, age 10 (multiplier 1.2), Strong Reader tier (35% bonus)
```
tokensEarned = 3 × 1.2 × (1 + 0.35) = 3 × 1.2 × 1.35 = 4.86 ≈ 5 tokens
```

### 5.2 QML Tier System

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

### 5.3 Badge System

**8 Badge Categories (Ore Types):**

**Coal Badges (3):**
- Quest Starter: Complete 1 quest
- Token Collector: Earn 10 tokens
- First Treasure: Claim 1 treasure

**Copper Badges (3):**
- Quest Runner: Complete 5 quests
- Token Saver: Earn 50 tokens
- Treasure Hunter: Claim 3 treasures

**Iron Badges (3):**
- Quest Warrior: Complete 15 quests
- Token Master: Earn 150 tokens
- Treasure Seeker: Claim 5 treasures

**Gold Badges (3):**
- Quest Legend: Complete 30 quests
- Token Millionaire: Earn 500 tokens
- Treasure Collector: Claim 10 treasures

**Redstone Badges (3):**
- Quest Master: Complete 50 quests
- Token Billionaire: Earn 1000 tokens
- Treasure Hoarder: Claim 20 treasures

**Diamond Badges (3):**
- Quest Champion: Complete 100 quests
- Token Trillionaire: Earn 2000 tokens
- Treasure Emperor: Claim 30 treasures

**Emerald Badges (3):**
- Quest Deity: Complete 200 quests
- Token Infinite: Earn 5000 tokens
- Treasure Immortal: Claim 50 treasures

**Ancient Debris Badges (3):**
- Quest Eternal: Complete 500 quests
- Token Eternal: Earn 10000 tokens
- Treasure Eternal: Claim 100 treasures

### 5.4 Age Multiplier Groups

**Preset Groups:**
1. Age 5 and Below (0-5): Default multiplier 1.5
2. Age 6-10: Default multiplier 1.2
3. Age 11-12: Default multiplier 1.0

**Multiplier Range:** 0.7 to 1.5 (selectable)

### 5.5 Treasure Timer System

**Timer Mechanics:**
- When treasure claimed, timer starts with baseTimerSeconds
- Timer counts down in real-time
- Timer display updates every second
- When timer reaches 0, treasure becomes "completed"
- Completed treasures can be removed from activeTreasures

**Cooldown:** Currently 0 for all treasures (can be claimed immediately after completion)

### 5.6 Birthday Reward System

**Mechanism:**
- Birthday reward amount configurable in Settings (default 100 tokens)
- Triggered on child's birthday (DOB matches current date)
- Automatically awards tokens on birthday
- Implementation status: Structure present but auto-trigger not fully implemented

### 5.7 Data Persistence

**Storage Method:** localStorage (browser local storage)
**Storage Key:** 'epicRpgData'
**Data Structure:** Single JSON object containing:
- children array
- quests array
- treasures array
- ageGroups array
- qmlTiers object
- badges array
- birthdayTokenReward number

**Save Trigger:** After any data modification (called saveData())
**Load Trigger:** On app initialization (called loadData())

---

## 6. RANDOMIZATION & PROBABILITY

**No randomization is used in the application.** All calculations are deterministic:
- Token rewards are calculated using fixed formulas
- Badge progress is tracked deterministically
- No random quest generation or loot tables
- No probability-based events

---

## 7. ANIMATION & VISUAL EFFECTS

### 7.1 Tier Milestone Celebration
- **Trigger:** When child's QML tier changes
- **Duration:** 5 seconds (auto-closes)
- **Animation:** Floating ore image (±10px vertical translation)
- **Frequency:** 0.6 seconds per cycle (infinite loop)
- **Popup Animation:** Scale from 0.5 to 1.0 over 0.3 seconds

### 7.2 Activity Bar Pulse
- **Element:** Weekly performance activity bar
- **Duration:** 1.5 seconds per cycle (infinite loop)
- **Effect:** Text shadow glow effect (0 to 10px blur)
- **Color:** Gold (#FFD700)

### 7.3 Button Hover/Active States
- **Hover:** Transform translate(-2px, -2px), shadow increase
- **Active:** Transform translate(1px, 1px), shadow decrease
- **Duration:** 0.1 seconds

---

## 8. RESPONSIVE DESIGN

**Breakpoints:** Not explicitly defined (application uses fixed layout)
**Mobile Compatibility:** Limited (designed for desktop/tablet)
**Scaling:** No media queries implemented
**Container Width:** Fixed to viewport width

---

## 9. ACCESSIBILITY

**Keyboard Navigation:** Not fully implemented
**Screen Reader Support:** Limited (no ARIA labels)
**Color Contrast:** Green (#4CAF50) on white background meets WCAG AA
**Focus Indicators:** Default browser focus rings used

---

## 10. KNOWN LIMITATIONS

1. **NFC Functionality:** Structure present but not fully implemented in web version
2. **Birthday Auto-Trigger:** Not automatically triggered on birthday
3. **Treasure Timer:** Requires manual page refresh to update display
4. **Data Export:** No export functionality for backup
5. **Multi-Device Sync:** No cloud sync (localStorage only)
6. **Responsive Design:** Not optimized for mobile devices

