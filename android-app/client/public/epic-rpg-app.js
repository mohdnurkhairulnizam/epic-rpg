// Vanilla HTML5, CSS3, JavaScript (ES6+)

// ============================================
// CUSTOM NOTIFICATIONS
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `custom-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-message">${message}</div>
        </div>
    `;
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// PRESET DATA
// ============================================

const PRESET_CHILDREN = [
    {
        id: 'child_1',
        name: 'Muhammad Darwish Ar-Rayyan',
        dateOfBirth: '2013-08-09',
        nfcCardId: null,
        avatarId: 'avatar_m_1',
        tokens: 0,
        qmlType: 'Juz Amma',
        currentQMLTier: 'Beginner',
        currentQMLProgress: 0,
        ongoingQuests: [],
        activeTreasures: [],
        badges: [],
        questHistory: [],
        treasureHistory: []
    },
    {
        id: 'child_2',
        name: 'Muhammad Daniyal Al-Fateh',
        dateOfBirth: '2015-07-05',
        nfcCardId: null,
        avatarId: 'avatar_m_2',
        tokens: 0,
        qmlType: 'Al-Quran',
        currentQMLTier: 'Beginner',
        currentQMLProgress: 0,
        ongoingQuests: [],
        activeTreasures: [],
        badges: [],
        questHistory: [],
        treasureHistory: []
    },
    {
        id: 'child_3',
        name: 'Muhammad Dawood Ariq',
        dateOfBirth: '2018-06-14',
        nfcCardId: null,
        avatarId: 'avatar_f_1',
        tokens: 0,
        qmlType: 'Juz Amma',
        currentQMLTier: 'Beginner',
        currentQMLProgress: 0,
        ongoingQuests: [],
        activeTreasures: [],
        badges: [],
        questHistory: [],
        treasureHistory: []
    },
    {
        id: 'child_4',
        name: 'Muhammad Danish Adeeb',
        dateOfBirth: '2021-04-17',
        nfcCardId: null,
        avatarId: 'avatar_m_3',
        tokens: 0,
        qmlType: 'Al-Quran',
        currentQMLTier: 'Beginner',
        currentQMLProgress: 0,
        ongoingQuests: [],
        activeTreasures: [],
        badges: [],
        questHistory: [],
        treasureHistory: []
    }
];

const PRESET_QUESTS = [
    { id: 'quest_1', name: 'Pick up toys', type: 'Quick Quest', baseTokenReward: 1 },
    { id: 'quest_2', name: 'Sweep the floor', type: 'Standard Mission', baseTokenReward: 3 },
    { id: 'quest_3', name: 'Clean the bathroom', type: 'Boss Fight', baseTokenReward: 6 },
    { id: 'quest_4', name: 'Wash the Car', type: 'Team Raid', baseTokenReward: 8 }
];

const PRESET_TREASURES = [
    { id: 'treasure_1', name: 'TV (15min)', costTokens: 5, baseTimerSeconds: 900, cooldownSeconds: 0 },
    { id: 'treasure_2', name: 'TV (30min)', costTokens: 9, baseTimerSeconds: 1800, cooldownSeconds: 0 },
    { id: 'treasure_3', name: 'PS5 (15min)', costTokens: 6, baseTimerSeconds: 900, cooldownSeconds: 0 },
    { id: 'treasure_4', name: 'PS5 (30min)', costTokens: 11, baseTimerSeconds: 1800, cooldownSeconds: 0 }
];

const PRESET_AGE_GROUPS = [
    {
        id: 'age_1',
        name: 'Age 5 and Below',
        ageRangeMin: 0,
        ageRangeMax: 5,
        ageRangeDescription: '5 and below',
        multiplierOptions: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
        currentMultiplier: 1.5
    },
    {
        id: 'age_2',
        name: 'Age 6-10',
        ageRangeMin: 6,
        ageRangeMax: 10,
        ageRangeDescription: '6-10',
        multiplierOptions: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
        currentMultiplier: 1.2
    },
    {
        id: 'age_3',
        name: 'Age 11-12',
        ageRangeMin: 11,
        ageRangeMax: 12,
        ageRangeDescription: '11-12',
        multiplierOptions: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5],
        currentMultiplier: 1.0
    }
];

const PRESET_QML_TIERS = {
    'Juz Amma': [
        { id: 'ja_1', tierName: 'Beginner', minRequirement: 0, maxRequirement: 2, tierRangeDescription: '0-2 surah', bonusPercentage: 0 },
        { id: 'ja_2', tierName: 'Learner', minRequirement: 3, maxRequirement: 6, tierRangeDescription: '3-6 surah', bonusPercentage: 15 },
        { id: 'ja_3', tierName: 'Strong Reader', minRequirement: 7, maxRequirement: 12, tierRangeDescription: '7-12 surah', bonusPercentage: 35 },
        { id: 'ja_4', tierName: 'Young Hafiz', minRequirement: 13, maxRequirement: 20, tierRangeDescription: '13-20 surah', bonusPercentage: 50 },
        { id: 'ja_5', tierName: 'Advance Hafiz', minRequirement: 21, maxRequirement: 30, tierRangeDescription: '21-30 surah', bonusPercentage: 65 },
        { id: 'ja_6', tierName: 'Master Hafiz', minRequirement: 31, maxRequirement: 36, tierRangeDescription: '31-36 surah', bonusPercentage: 85 },
        { id: 'ja_7', tierName: 'Ultimate Hafiz', minRequirement: 37, maxRequirement: 37, tierRangeDescription: '37 surah', bonusPercentage: 100 }
    ],
    'Al-Quran': [
        { id: 'aq_1', tierName: 'Beginner', minRequirement: 0, maxRequirement: 2, tierRangeDescription: '0-2 Juz', bonusPercentage: 0 },
        { id: 'aq_2', tierName: 'Learner', minRequirement: 3, maxRequirement: 6, tierRangeDescription: '3-6 Juz', bonusPercentage: 15 },
        { id: 'aq_3', tierName: 'Strong Reader', minRequirement: 7, maxRequirement: 12, tierRangeDescription: '7-12 Juz', bonusPercentage: 35 },
        { id: 'aq_4', tierName: 'Young Hafiz', minRequirement: 13, maxRequirement: 18, tierRangeDescription: '13-18 Juz', bonusPercentage: 50 },
        { id: 'aq_5', tierName: 'Advance Hafiz', minRequirement: 19, maxRequirement: 24, tierRangeDescription: '19-24 Juz', bonusPercentage: 65 },
        { id: 'aq_6', tierName: 'Master Hafiz', minRequirement: 25, maxRequirement: 29, tierRangeDescription: '25-29 Juz', bonusPercentage: 85 },
        { id: 'aq_7', tierName: 'Ultimate Hafiz', minRequirement: 30, maxRequirement: 30, tierRangeDescription: '30 Juz', bonusPercentage: 100 }
    ]
};

const PRESET_BADGES = [
    // Coal
    { id: 'badge_1', category: 'Coal', name: 'Quest Starter', description: 'Complete 1 quest', type: 'quests_completed', targetValue: 1 },
    { id: 'badge_2', category: 'Coal', name: 'Token Collector', description: 'Earn 10 tokens', type: 'tokens_earned', targetValue: 10 },
    { id: 'badge_3', category: 'Coal', name: 'First Treasure', description: 'Claim 1 treasure', type: 'treasures_claimed', targetValue: 1 },
    // Copper
    { id: 'badge_4', category: 'Copper', name: 'Quest Runner', description: 'Complete 5 quests', type: 'quests_completed', targetValue: 5 },
    { id: 'badge_5', category: 'Copper', name: 'Token Saver', description: 'Earn 50 tokens', type: 'tokens_earned', targetValue: 50 },
    { id: 'badge_6', category: 'Copper', name: 'Treasure Hunter', description: 'Claim 3 treasures', type: 'treasures_claimed', targetValue: 3 },
    // Iron
    { id: 'badge_7', category: 'Iron', name: 'Quest Warrior', description: 'Complete 15 quests', type: 'quests_completed', targetValue: 15 },
    { id: 'badge_8', category: 'Iron', name: 'Token Master', description: 'Earn 150 tokens', type: 'tokens_earned', targetValue: 150 },
    { id: 'badge_9', category: 'Iron', name: 'Treasure Seeker', description: 'Claim 8 treasures', type: 'treasures_claimed', targetValue: 8 },
    // Gold
    { id: 'badge_10', category: 'Gold', name: 'Quest Hero', description: 'Complete 30 quests', type: 'quests_completed', targetValue: 30 },
    { id: 'badge_11', category: 'Gold', name: 'Token Wealthy', description: 'Earn 300 tokens', type: 'tokens_earned', targetValue: 300 },
    { id: 'badge_12', category: 'Gold', name: 'Treasure Expert', description: 'Claim 15 treasures', type: 'treasures_claimed', targetValue: 15 },
    // Redstone
    { id: 'badge_13', category: 'Redstone', name: 'Quest Engineer', description: 'Complete 50 quests', type: 'quests_completed', targetValue: 50 },
    { id: 'badge_14', category: 'Redstone', name: 'Token Tycoon', description: 'Earn 500 tokens', type: 'tokens_earned', targetValue: 500 },
    { id: 'badge_15', category: 'Redstone', name: 'Treasure Legend', description: 'Claim 25 treasures', type: 'treasures_claimed', targetValue: 25 },
    // Diamond
    { id: 'badge_16', category: 'Diamond', name: 'Quest Champion', description: 'Complete 100 quests', type: 'quests_completed', targetValue: 100 },
    { id: 'badge_17', category: 'Diamond', name: 'Token Billionaire', description: 'Earn 1000 tokens', type: 'tokens_earned', targetValue: 1000 },
    { id: 'badge_18', category: 'Diamond', name: 'Treasure God', description: 'Claim 50 treasures', type: 'treasures_claimed', targetValue: 50 },
    // Emerald
    { id: 'badge_19', category: 'Emerald', name: 'Quest Immortal', description: 'Complete 200 quests', type: 'quests_completed', targetValue: 200 },
    { id: 'badge_20', category: 'Emerald', name: 'Token Sovereign', description: 'Earn 2000 tokens', type: 'tokens_earned', targetValue: 2000 },
    { id: 'badge_21', category: 'Emerald', name: 'Treasure King', description: 'Claim 100 treasures', type: 'treasures_claimed', targetValue: 100 },
    // Ancient Debris
    { id: 'badge_22', category: 'Ancient Debris', name: 'Quest Ancient', description: 'Complete 500 quests', type: 'quests_completed', targetValue: 500 },
    { id: 'badge_23', category: 'Ancient Debris', name: 'Token Eternal', description: 'Earn 5000 tokens', type: 'tokens_earned', targetValue: 5000 },
    { id: 'badge_24', category: 'Ancient Debris', name: 'Treasure Mythical', description: 'Claim 200 treasures', type: 'treasures_claimed', targetValue: 200 }
];

const AVATAR_LIST = [
    { id: 'avatar_f_1', path: '/mobile-assets/avatar_f_1_e6efd358.png' },
    { id: 'avatar_f_2', path: '/mobile-assets/avatar_f_2_ea400925.png' },
    { id: 'avatar_f_3', path: '/mobile-assets/avatar_f_3_e5232687.png' },
    { id: 'avatar_f_4', path: '/mobile-assets/avatar_f_4_b768629e.png' },
    { id: 'avatar_f_5', path: '/mobile-assets/avatar_f_5_9812cac8.png' },
    { id: 'avatar_f_6', path: '/mobile-assets/avatar_f_6_0ca0efec.png' },
    { id: 'avatar_f_7', path: '/mobile-assets/avatar_f_7_cbbdc6ac.png' },
    { id: 'avatar_f_8', path: '/mobile-assets/avatar_f_8_235ad6f7.png' },
    { id: 'avatar_f_9', path: '/mobile-assets/avatar_f_9_2209f8ae.png' },
    { id: 'avatar_f_10', path: '/mobile-assets/avatar_f_10_b3842813.png' },
    { id: 'avatar_m_1', path: '/mobile-assets/avatar_m_1_8138b2d3.png' },
    { id: 'avatar_m_2', path: '/mobile-assets/avatar_m_2_f2ae20bb.png' },
    { id: 'avatar_m_3', path: '/mobile-assets/avatar_m_3_1bdedea9.png' },
    { id: 'avatar_m_4', path: '/mobile-assets/avatar_m_4_c6f1cc70.png' },
    { id: 'avatar_m_5', path: '/mobile-assets/avatar_m_5_c7a8d093.png' },
    { id: 'avatar_m_6', path: '/mobile-assets/avatar_m_6_6ec061d1.png' },
    { id: 'avatar_m_7', path: '/mobile-assets/avatar_m_7_00a337a3.png' },
    { id: 'avatar_m_8', path: '/mobile-assets/avatar_m_8_1a8655a5.png' },
    { id: 'avatar_m_9', path: '/mobile-assets/avatar_m_9_af268e71.png' },
    { id: 'avatar_m_10', path: '/mobile-assets/avatar_m_10_64acce00.png' },
    { id: 'avatar_m_11', path: '/mobile-assets/avatar_m_11_14d7febe.png' },
    { id: 'avatar_m_12', path: '/mobile-assets/avatar_m_12_8837fc9f.png' },
    { id: 'avatar_m_13', path: '/mobile-assets/avatar_m_13_1e6aeaea.png' },
    { id: 'avatar_m_14', path: '/mobile-assets/avatar_m_14_19862b20.png' },
    { id: 'avatar_m_15', path: '/mobile-assets/avatar_m_15_123c379d.png' },
    { id: 'avatar_m_16', path: '/mobile-assets/avatar_m_16_a4a0f349.png' },
    { id: 'avatar_m_17', path: '/mobile-assets/avatar_m_17_6f4b4c2b.png' },
    { id: 'avatar_m_18', path: '/mobile-assets/avatar_m_18_343e83e1.png' },
    { id: 'avatar_m_19', path: '/mobile-assets/avatar_m_19_deb66bf7.png' },
    { id: 'avatar_m_20', path: '/mobile-assets/avatar_m_20_7ad306b2.png' }
];

const BADGE_ASSETS = {
    "ancient-debris": "/mobile-assets/ancient-debris_fb9a7d47.png",
    "coal-ore": "/mobile-assets/coal-ore_607de9f7.png",
    "copper-ore": "/mobile-assets/copper-ore_81813b29.png",
    "diamond-ore": "/mobile-assets/diamond-ore_35412afc.png",
    "emerald-ore": "/mobile-assets/emerald-ore_d78e8696.png",
    "gold-ore": "/mobile-assets/gold-ore_6f249878.png",
    "iron-ore": "/mobile-assets/iron-ore_b1d611ca.png",
    "redstone-ore": "/mobile-assets/redstone-ore_053844d6.png"
};
function avatarPath(avatarId) {
    const avatar = AVATAR_LIST.find(item => item.id === avatarId);
    return avatar ? avatar.path : '';
}
function badgePath(badgeId) {
    return BADGE_ASSETS[badgeId] || '';
}

// ============================================
// STATE MANAGEMENT
// ============================================

let appState = {
    children: [],
    quests: [],
    treasures: [],
    ageGroups: [],
    qmlTiers: {},
    badges: [],
    birthdayTokenReward: 25,
    currentTab: 'dashboard',
    currentProfileChildId: null,
    soundEnabled: true,
    soundVolume: 0.65,
    notificationsEnabled: true
};

let selectedAvatarId = 'avatar_m_1';

function loadData() {
    const saved = localStorage.getItem('epic_rpg_data');
    if (saved) {
        appState = { ...appState, ...JSON.parse(saved) };
        appState.soundEnabled = appState.soundEnabled !== false;
        appState.soundVolume = Number.isFinite(appState.soundVolume) ? Math.min(1, Math.max(0, appState.soundVolume)) : 0.65;
        appState.notificationsEnabled = appState.notificationsEnabled !== false;
        appState.children = Array.isArray(appState.children) ? appState.children : [];
        appState.treasures = Array.isArray(appState.treasures) ? appState.treasures : [];
        appState.children.forEach(child => {
            child.activeTreasures = Array.isArray(child.activeTreasures) ? child.activeTreasures : [];
            child.activeTreasures.forEach(treasure => {
                if (!treasure.endAt) treasure.endAt = Date.now() + Math.max(0, treasure.timeRemaining || 0) * 1000;
                if (!treasure.notificationKey) treasure.notificationKey = generateId();
                if (!treasure.isPaused) treasure.timeRemaining = Math.max(0, Math.ceil((treasure.endAt - Date.now()) / 1000));
            });
        });
        // Ensure cooldowns are 0 for existing data
        appState.treasures.forEach(t => t.cooldownSeconds = 0);
    } else {
        appState.children = [...PRESET_CHILDREN];
        appState.quests = [...PRESET_QUESTS];
        appState.treasures = [...PRESET_TREASURES];
        appState.ageGroups = [...PRESET_AGE_GROUPS];
        appState.qmlTiers = { ...PRESET_QML_TIERS };
        appState.badges = [...PRESET_BADGES];
        
        // Initialize child badges
        appState.children.forEach(child => {
            child.badges = appState.badges.map(b => ({
                badgeId: b.id,
                progress: 0,
                earned: false
            }));
        });
        saveData();
    }
}

function saveData() {
    localStorage.setItem('epic_rpg_data', JSON.stringify(appState));
}

// ============================================
// UTILITIES
// ============================================

function generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

function calculateAge(dob) {
    const birthday = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

function getAgeMultiplier(age) {
    const group = appState.ageGroups.find(g => age >= g.ageRangeMin && age <= g.ageRangeMax);
    return group ? group.currentMultiplier : 1.0;
}

function getQMLBonus(tierName) {
    for (const cat in appState.qmlTiers) {
        const tier = appState.qmlTiers[cat].find(t => t.tierName === tierName);
        if (tier) return tier.bonusPercentage / 100;
    }
    return 0;
}

function getQMLMaxValue(qmlType) {
    const tiers = appState.qmlTiers[qmlType];
    if (tiers && tiers.length > 0) {
        return tiers[tiers.length - 1].maxRequirement;
    }
    return qmlType === 'Juz Amma' ? 37 : 30;
}

function calculateTokens(base, age, qmlTier, qmlType) {
    // Age multiplier ONLY affects quest completion tokens, NOT treasure rewards
    const ageMult = getAgeMultiplier(age);
    // QML bonus does NOT affect token calculation - only affects treasure timer
    return Math.round(base * ageMult);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================
// NAVIGATION
// ============================================

function switchTab(tabId) {
    appState.currentTab = tabId;
    appState.currentProfileChildId = null;
    
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    const activeTabButton = document.querySelector(`[data-tab="${tabId}"]`) || document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    if (activeTabButton) activeTabButton.classList.add('active');
    
    if (tabId === 'dashboard') renderDashboard();
    if (tabId === 'leaderboard') renderLeaderboard();
    if (tabId === 'play') renderPlay();
    if (tabId === 'shop') renderShop();
    if (tabId === 'settings') renderSettings();
}

function openChildProfile(childId) {
    appState.currentProfileChildId = childId;
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById('profile-screen').classList.add('active');
    renderChildProfile();
}

function backToDashboard() {
    appState.currentProfileChildId = null;
    switchTab('dashboard');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    if (modalId === 'nfcScanModal') {
        modal.classList.add('nfc-registration-modal');
        modal.style.zIndex = '2200';
        modal.classList.remove('nfc-scan-success');
    }
    modal.classList.add('active');
    if (modalId === 'addChildModal' || modalId === 'editChildModal') {
        renderAvatarGrid(modalId === 'addChildModal' ? 'avatarGrid' : 'editAvatarGrid');
    }
}

function closeClaimTreasureDialog(modalElement) {
    const dialogs = modalElement ? [modalElement] : Array.from(document.querySelectorAll('#claimTreasureModal'));
    dialogs.forEach(dialog => {
        dialog.classList.remove('active');
        dialog.remove();
    });
}

function closeModal(modalId) {
    if (modalId === 'nfcScanModal' && typeof window.stopNfcScan === 'function') {
        window.stopNfcScan();
    }
    if (modalId === 'claimTreasureModal') {
        closeClaimTreasureDialog();
        return;
    }
    document.querySelectorAll(`#${modalId}`).forEach(modal => {
        modal.classList.remove('active');
    });
}

// ============================================
// CHILD MANAGEMENT
// ============================================

function normalizeNfcCardId(value) {
    return String(value || '').trim().toUpperCase().replace(/[^0-9A-Z]/g, '');
}

function isNfcCardAlreadyAssigned(nfcCardId, exceptChildId = null) {
    const normalized = normalizeNfcCardId(nfcCardId);
    return normalized && appState.children.some(child => child.id !== exceptChildId && normalizeNfcCardId(child.nfcCardId) === normalized);
}

function createChild() {
    const name = document.getElementById('childName').value.trim();
    const dob = document.getElementById('childDOB').value;
    const nfc = normalizeNfcCardId(document.getElementById('childNFC').value);
    
    if (!name || !dob) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    if (isNfcCardAlreadyAssigned(nfc)) {
        showNotification('That NFC card is already linked to another child.', 'error');
        return;
    }
    
    const newChild = {
        id: generateId(),
        name,
        dateOfBirth: dob,
        nfcCardId: nfc || null,
        avatarId: selectedAvatarId,
        tokens: 0,
        qmlType: 'Juz Amma',
        currentQMLTier: 'Beginner',
        currentQMLProgress: 0,
        ongoingQuests: [],
        activeTreasures: [],
        badges: appState.badges.map(b => ({ badgeId: b.id, progress: 0, earned: false })),
        questHistory: [],
        treasureHistory: []
    };
    
    appState.children.push(newChild);
    saveData();
    clearChildForm();
    closeModal('addChildModal');
    renderDashboard();
}

function clearChildForm() {
    document.getElementById('childName').value = '';
    document.getElementById('childDOB').value = '';
    document.getElementById('childNFC').value = '';
    selectedAvatarId = null;
    document.getElementById('childQMLType').value = 'Juz Amma';
}

function editChild(childId) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    
    // Create edit modal if it doesn't exist
    let editModal = document.getElementById('editChildModal');
    if (!editModal) {
        editModal = document.createElement('div');
        editModal.id = 'editChildModal';
        editModal.className = 'modal';
        editModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">Edit Child Profile</div>
                <div class="form-group">
                    <label>Child Name</label>
                    <input type="text" id="editChildName">
                </div>
                <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="date" id="editChildDOB">
                </div>
                <div class="form-group">
                    <label>NFC Card ID (Optional)</label>
                    <div style="display: flex; gap: 5px;">
                        <input type="text" id="editChildNFC" style="flex: 1;">
                        <button class="btn btn-small" onclick="detectNFCForEdit()">Detect</button>
                    </div>
                </div>
                <div class="form-group">
                    <label>Select Avatar</label>
                    <div id="editAvatarGrid" class="avatar-grid" style="margin-bottom: 20px;"></div>
                </div>
                <div class="modal-buttons">
                    <button class="btn" onclick="saveChildEdit()">Save Changes</button>
                    <button class="btn" onclick="closeModal('editChildModal')">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(editModal);
    }
    
    document.getElementById('editChildName').value = child.name;
    document.getElementById('editChildDOB').value = child.dateOfBirth;
    document.getElementById('editChildNFC').value = child.nfcCardId || '';
    selectedAvatarId = child.avatarId;
    
    appState.editingChildId = childId;
    openModal('editChildModal');
}

function saveChildEdit() {
    const child = appState.children.find(c => c.id === appState.editingChildId);
    if (!child) return;
    
    const nfc = normalizeNfcCardId(document.getElementById('editChildNFC').value);
    if (isNfcCardAlreadyAssigned(nfc, child.id)) {
        showNotification('That NFC card is already linked to another child.', 'error');
        return;
    }
    child.name = document.getElementById('editChildName').value.trim();
    child.dateOfBirth = document.getElementById('editChildDOB').value;
    child.nfcCardId = nfc || null;
    child.avatarId = selectedAvatarId;
    
    saveData();
    closeModal('editChildModal');
    renderChildProfile();
    renderDashboard();
}

function deleteChild(childId) {
    if (confirm('Are you sure you want to delete this profile? All progress will be lost.')) {
        appState.children = appState.children.filter(c => c.id !== childId);
        saveData();
        const cancelAll = window.cancelAllTreasureNotifications;
        if (typeof cancelAll === 'function') cancelAll();
        backToDashboard();
    }
}

function updateQMLProgress(childId, value) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    
    const oldTier = child.currentQMLTier;
    child.currentQMLProgress = value;
    
    // Auto-update tier
    const tiers = appState.qmlTiers[child.qmlType];
    const newTier = tiers.find(t => value >= t.minRequirement && value <= t.maxRequirement);
    if (newTier) child.currentQMLTier = newTier.tierName;
    
    // Show tier milestone celebration if tier changed
    if (newTier && oldTier !== newTier.tierName) {
        showTierMilestonePopup(child.name, newTier.tierName, child.qmlType);
        window.dispatchEvent(new CustomEvent('epic-achievement-earned', { detail: { kind: 'qml-tier', childId, childName: child.name, label: newTier.tierName } }));
    }
    
    saveData();
    renderChildProfile();
    renderDashboard();
}

function changeQMLType(childId, type) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    child.qmlType = type;
    updateQMLProgress(childId, child.currentQMLProgress);
}

// ============================================
// NFC MANAGEMENT
// ============================================

function detectNFCForAdd() {
    const startScan = window.startNfcScan;
    if (typeof startScan === 'function') {
        openModal('nfcScanModal');
        showNfcScanReadyState('add');
        startScan('add');
        return;
    }
    const nfcId = prompt("Enter NFC card ID:");
    if (nfcId) document.getElementById('childNFC').value = normalizeNfcCardId(nfcId);
}

function detectNFCForEdit() {
    const startScan = window.startNfcScan;
    if (typeof startScan === 'function') {
        openModal('nfcScanModal');
        showNfcScanReadyState('edit');
        startScan('edit');
        return;
    }
    const nfcId = prompt("Enter NFC card ID:");
    if (nfcId) document.getElementById('editChildNFC').value = normalizeNfcCardId(nfcId);
}

function showNfcScanReadyState(purpose) {
    const status = document.getElementById('nfc-status');
    const result = document.getElementById('nfc-result');
    if (status) {
        status.className = 'nfc-status scanning';
        status.textContent = purpose === 'edit'
            ? 'Hold the NFC card near the back of the phone to update this child.'
            : 'Hold the NFC card near the back of the phone to register this child.';
    }
    if (result) result.innerHTML = '';
}

function showNfcScanSuccess(nfcId, purpose) {
    const modal = document.getElementById('nfcScanModal');
    const status = document.getElementById('nfc-status');
    const result = document.getElementById('nfc-result');
    if (modal) modal.classList.add('nfc-scan-success');
    if (status) {
        status.className = 'nfc-status success';
        status.textContent = 'NFC card scanned successfully!';
    }
    if (result) {
        result.className = 'nfc-result success nfc-success-card';
        result.innerHTML = `<strong>✓ Card linked</strong><br><small>${purpose === 'edit' ? 'Child profile updated' : 'Ready to create child'} · ${nfcId}</small>`;
    }
    window.dispatchEvent(new CustomEvent('epic-nfc-success', { detail: { nfcId, purpose } }));
}

function handleNativeNfcDetected(event) {
    const detail = event.detail || {};
    const nfcId = normalizeNfcCardId(detail.nfcId);
    if (!nfcId) return;
    if (detail.purpose === 'add') {
        const input = document.getElementById('childNFC');
        if (input) input.value = nfcId;
        showNfcScanSuccess(nfcId, 'add');
        setTimeout(() => {
            closeModal('nfcScanModal');
            showNotification('NFC card captured for this new child.', 'success');
        }, 850);
        return;
    }
    if (detail.purpose === 'edit') {
        const input = document.getElementById('editChildNFC');
        if (input) input.value = nfcId;
        showNfcScanSuccess(nfcId, 'edit');
        setTimeout(() => {
            closeModal('nfcScanModal');
            showNotification('NFC card captured for this child profile.', 'success');
        }, 850);
        return;
    }
    const input = document.getElementById('nfcCardInput');
    if (input) input.value = nfcId;
    processNFCCard(nfcId);
}

function processNFCCard(value) {
    const input = document.getElementById('nfcCardInput');
    const nfcId = normalizeNfcCardId(value || (input && input.value));
    if (!nfcId) return;
    const child = appState.children.find(c => normalizeNfcCardId(c.nfcCardId) === nfcId);
    if (child) {
        closeModal('nfcScanModal');
        if (input) input.value = '';
        openNfcChildActionWindow(child.id);
    } else {
        const result = document.getElementById('nfc-result');
        if (result) result.innerHTML = `<div style="color: #FF6B6B; margin-top: 10px;">Card not recognized: ${nfcId}</div>`;
    }
}

function renderNfcOngoingQuests(child) {
    if (!child.ongoingQuests.length) return '<div class="empty-state">No ongoing quests.</div>';
    return child.ongoingQuests.map(ongoingQuest => {
        const quest = appState.quests.find(item => item.id === ongoingQuest.questId);
        const questName = quest ? quest.name : 'Quest';
        const isPending = ongoingQuest.status === 'pending_approval';
        return `
            <div class="nfc-quest-row ${isPending ? 'nfc-quest-pending' : ''}">
                <div><strong>⚔️ ${questName}</strong><small>${isPending ? 'Waiting for parent approval' : 'In progress'}</small></div>
                ${isPending ? '<span class="nfc-status-pill">Pending</span>' : `<button class="btn btn-small nfc-complete-button" onclick="markQuestCompleteFromNfc('${child.id}', '${ongoingQuest.instanceId}')">✓ Mark Complete</button>`}
            </div>
        `;
    }).join('');
}

function renderNfcActiveRewards(child) {
    if (!child.activeTreasures.length) return '<div class="empty-state">No active reward timers.</div>';
    return child.activeTreasures.map(activeTreasure => {
        const treasure = appState.treasures.find(item => item.id === activeTreasure.treasureId);
        const remaining = activeTreasure.isPaused ? activeTreasure.timeRemaining : Math.max(0, Math.ceil(((activeTreasure.endAt || Date.now()) - Date.now()) / 1000));
        const percent = activeTreasure.timerDuration ? Math.max(0, Math.min(100, (remaining / activeTreasure.timerDuration) * 100)) : 0;
        return `
            <div class="nfc-reward-timer-row">
                <div class="nfc-reward-timer-heading"><strong>🎁 ${treasure ? treasure.name : 'Reward'}</strong><strong>⏱️ ${formatTime(remaining)}</strong></div>
                <div class="nfc-reward-timer-bar"><div style="width: ${percent}%"></div></div>
                <small>${activeTreasure.isPaused ? 'Paused' : 'Active reward timer'}</small>
            </div>
        `;
    }).join('');
}

function renderNfcQuestRequests(child) {
    return appState.quests.length === 0 ? '<div class="empty-state">No quests available.</div>' : appState.quests.map(quest => `
        <button class="btn btn-small nfc-action-button" onclick="requestQuestFromNfc('${child.id}', '${quest.id}')">
            <span>⚔️ ${quest.name}</span><strong>+${quest.baseTokenReward} tokens</strong>
        </button>
    `).join('');
}

function renderNfcEligibleTreasures(child) {
    const availableTreasures = appState.treasures.filter(treasure => child.tokens >= treasure.costTokens);
    return availableTreasures.length === 0 ? '<div class="empty-state">No treasure is affordable with the current token count.</div>' : availableTreasures.map(treasure => `
        <button class="btn btn-small nfc-action-button treasure-action-button" onclick="claimTreasureFromNfc('${child.id}', '${treasure.id}')">
            <span>🎁 ${treasure.name}</span><strong>${treasure.costTokens} tokens</strong>
        </button>
    `).join('');
}

function refreshNfcChildActionWindow() {
    const modal = document.getElementById('nfcChildActionModal');
    if (!modal) return;
    const child = appState.children.find(c => c.id === modal.dataset.childId);
    if (!child) return closeModal('nfcChildActionModal');
    const summary = modal.querySelector('[data-nfc-summary]');
    if (summary) summary.innerHTML = `<strong>💰 ${child.tokens} Tokens</strong><span>⚔️ ${child.ongoingQuests.length} Ongoing Quest${child.ongoingQuests.length === 1 ? '' : 's'}</span>`;
    const questRows = modal.querySelector('[data-nfc-ongoing-quests]');
    if (questRows) questRows.innerHTML = renderNfcOngoingQuests(child);
    const rewardRows = modal.querySelector('[data-nfc-rewards]');
    if (rewardRows) rewardRows.innerHTML = renderNfcActiveRewards(child);
    const requestRows = modal.querySelector('[data-nfc-quest-requests]');
    if (requestRows) requestRows.innerHTML = renderNfcQuestRequests(child);
    const treasureRows = modal.querySelector('[data-nfc-eligible-treasures]');
    if (treasureRows) treasureRows.innerHTML = renderNfcEligibleTreasures(child);
}

function openNfcChildActionWindow(childId) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    document.querySelectorAll('#nfcChildActionModal').forEach(modal => modal.remove());
    const modal = document.createElement('div');
    modal.id = 'nfcChildActionModal';
    modal.dataset.childId = child.id;
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content nfc-child-action-content arena-nfc-child-window">
            <div class="modal-header claim-treasure-header arena-nfc-child-header">
                <span><small>NFC HERO CHECKPOINT</small>📱 ${child.name}</span>
                <button type="button" class="claim-treasure-close" aria-label="Close child action window" onclick="closeModal('nfcChildActionModal')">×</button>
            </div>
            <div class="nfc-child-summary arena-nfc-summary" data-nfc-summary>
                <strong>💰 ${child.tokens} Tokens</strong>
                <span>⚔️ ${child.ongoingQuests.length} Ongoing Quest${child.ongoingQuests.length === 1 ? '' : 's'}</span>
            </div>
            <div class="nfc-action-section arena-nfc-section">
                <div class="profile-section-title">Ongoing Quests</div>
                <div class="nfc-ongoing-quest-list" data-nfc-ongoing-quests>${renderNfcOngoingQuests(child)}</div>
            </div>
            <div class="nfc-action-section arena-nfc-section">
                <div class="profile-section-title">Active Reward Timers</div>
                <div class="nfc-reward-timer-list" data-nfc-rewards>${renderNfcActiveRewards(child)}</div>
            </div>
            <div class="nfc-action-section arena-nfc-section">
                <div class="profile-section-title">Request a New Quest</div>
                <div class="nfc-action-list" data-nfc-quest-requests>${renderNfcQuestRequests(child)}</div>
            </div>
            <div class="nfc-action-section arena-nfc-section">
                <div class="profile-section-title">Claim an Eligible Treasure</div>
                <div class="nfc-action-list" data-nfc-eligible-treasures>${renderNfcEligibleTreasures(child)}</div>
            </div>
            <div class="modal-buttons"><button class="btn" onclick="closeModal('nfcChildActionModal')">Close</button></div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('active');
}

function markQuestCompleteFromNfc(childId, questInstanceId) {
    markQuestComplete(childId, questInstanceId);
    showNotification('Quest marked complete and sent for parent approval.', 'success');
    refreshNfcChildActionWindow();
}

function requestQuestFromNfc(childId, questId) {
    requestQuest(childId, questId);
    closeModal('nfcChildActionModal');
    showNotification('Quest requested for this child.', 'success');
    renderDashboard();
}

function claimTreasureFromNfc(childId, treasureId) {
    claimTreasure(childId, treasureId);
    closeModal('nfcChildActionModal');
    renderDashboard();
} 

window.addEventListener('epic-nfc-status', event => {
    const detail = event.detail || {};
    const status = document.getElementById('nfc-status');
    if (status && detail.message) {
        status.textContent = detail.message;
        status.className = `nfc-status ${detail.tone === 'error' ? 'nfc-status-error' : 'nfc-status-active'}`;
    }
});
window.addEventListener('epic-native-nfc-detected', handleNativeNfcDetected);

// ============================================
// QUEST MANAGEMENT
// ============================================

function createQuest() {
    const name = document.getElementById('questName').value;
    const type = document.getElementById('questType').value;
    const tokens = parseInt(document.getElementById('questTokens').value);
    
    if (!name || !type || !tokens) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    const newQuest = {
        id: generateId(),
        name,
        type,
        baseTokenReward: tokens
    };
    
    appState.quests.push(newQuest);
    saveData();
    closeModal('addQuestModal');
    document.getElementById('questName').value = '';
    document.getElementById('questTokens').value = '';
    renderPlay();
    window.dispatchEvent(new CustomEvent('epic-item-created', { detail: { type: 'quest', label: name } }));
}

function requestQuestFromPlay(questId) {
    if (appState.children.length === 0) {
        showNotification('Please add a child first', 'error');
        return;
    }
    
    // Remove existing modal if it exists
    const existingModal = document.getElementById('assignQuestModal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'assignQuestModal';
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">Assign Quest to Children</div>
            <div class="form-group">
                <label>Select Children</label>
                <div id="multiChildSelect" style="max-height: 200px; overflow-y: auto; margin-top: 10px; padding: 5px; border: 2px solid #1a1a1a; background: #f0f0f0;">
                    ${appState.children.map(c => `
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; padding: 5px; border-bottom: 1px solid #ddd;">
                            <input type="checkbox" class="child-assign-checkbox" value="${c.id}" id="chk-${c.id}" style="width: 20px; height: 20px; cursor: pointer;">
                            <label for="chk-${c.id}" style="cursor: pointer; font-size: 14px;">${c.name}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-buttons">
                <button class="btn" onclick="confirmMultiQuestAssignmentAndClose('${questId}')">Assign</button>
                <button class="btn" onclick="closeModal('assignQuestModal')">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function confirmMultiQuestAssignmentAndClose(questId) {
    confirmMultiQuestAssignment(questId);
    closeModal('assignQuestModal');
}

function confirmMultiQuestAssignment(questId) {
    const checkboxes = document.querySelectorAll('.child-assign-checkbox:checked');
    if (checkboxes.length === 0) {
        showNotification('Please select at least one child', 'error');
        return;
    }
    
    checkboxes.forEach(cb => {
        requestQuest(cb.value, questId);
    });
    
    renderPlay();
    window.dispatchEvent(new CustomEvent('epic-quest-assigned', { detail: { questId, count: checkboxes.length } }));
}

function requestQuest(childId, questId) {
    const child = appState.children.find(c => c.id === childId);
    const quest = appState.quests.find(q => q.id === questId);
    
    if (!child || !quest) return;
    
    child.ongoingQuests.push({
        instanceId: generateId(),
        questId,
        status: 'ongoing',
        startDate: new Date().toISOString().split('T')[0]
    });
    
    saveData();
}

function cancelQuest(childId, questInstanceId) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    const ongoingQuest = child.ongoingQuests.find(q => q.instanceId === questInstanceId);
    if (!ongoingQuest) return;
    const quest = appState.quests.find(q => q.id === ongoingQuest.questId);
    if (confirm(`Cancel ${quest ? quest.name : 'this quest'}?`)) {
        child.ongoingQuests = child.ongoingQuests.filter(q => q.instanceId !== questInstanceId);
        saveData();
        showNotification('Quest cancelled.', 'success');
        window.dispatchEvent(new CustomEvent('epic-action-reversed', { detail: { type: 'quest-cancelled' } }));
        renderChildProfile();
        renderDashboard();
    }
}

function rejectQuest(childId, questInstanceId) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    const ongoingQuest = child.ongoingQuests.find(q => q.instanceId === questInstanceId);
    if (!ongoingQuest) return;
    const quest = appState.quests.find(q => q.id === ongoingQuest.questId);
    if (confirm(`Reject completion and return ${quest ? quest.name : 'this quest'} to ongoing?`)) {
        ongoingQuest.status = 'ongoing';
        delete ongoingQuest.completedDate;
        saveData();
        showNotification('Quest returned to ongoing.', 'success');
        window.dispatchEvent(new CustomEvent('epic-action-reversed', { detail: { type: 'quest-rejected' } }));
        renderChildProfile();
        renderDashboard();
    }
}

function markQuestComplete(childId, questInstanceId) {
    const child = appState.children.find(c => c.id === childId);
    const ongoingQuest = child.ongoingQuests.find(q => q.instanceId === questInstanceId);
    
    if (ongoingQuest) {
        ongoingQuest.status = 'pending_approval';
        ongoingQuest.completedDate = new Date().toISOString().split('T')[0];
        saveData();
        window.dispatchEvent(new CustomEvent('epic-quest-ready', { detail: { childId, questInstanceId } }));
        renderChildProfile();
    }
}

function approveQuest(childId, questInstanceId) {
    const ongoingQuest = appState.children.find(c => c.id === childId)?.ongoingQuests.find(q => q.instanceId === questInstanceId);
    if (!ongoingQuest) return;
    
    const child = appState.children.find(c => c.id === childId);
    const quest = appState.quests.find(q => q.id === ongoingQuest.questId);
    
    if (!child || !quest || !ongoingQuest) return;
    
    const age = calculateAge(child.dateOfBirth);
    const tokensEarned = calculateTokens(quest.baseTokenReward, age, child.currentQMLTier, child.qmlType);
    
    child.tokens += tokensEarned;
    child.questHistory.push({
        questId: ongoingQuest.questId,
        questName: quest.name,
        questType: quest.type,
        baseTokens: quest.baseTokenReward,
        ageMultiplier: getAgeMultiplier(age),
        qmlBonus: getQMLBonus(child.currentQMLTier) * 100,
        tokensEarned,
        completedDate: ongoingQuest.completedDate,
        approvedDate: new Date().toISOString().split('T')[0]
    });
    
    child.ongoingQuests = child.ongoingQuests.filter(q => q.instanceId !== questInstanceId);
    updateBadgeProgress(child, 'quests_completed', 1);
    updateBadgeProgress(child, 'tokens_earned', tokensEarned);
    
    saveData();
    showNotification(`Quest approved! ${tokensEarned} tokens`, 'success');
    window.dispatchEvent(new CustomEvent('epic-task-completed', { detail: { childId, childName: child.name, questId: quest.id, questName: quest.name, tokensEarned } }));
    renderChildProfile();
}

function deleteQuest(questId) {
    if (confirm('Delete this quest?')) {
        appState.quests = appState.quests.filter(q => q.id !== questId);
        saveData();
        renderPlay();
    }
}

function editQuest(questId) {
    const quest = appState.quests.find(q => q.id === questId);
    if (!quest) return;
    
    const newName = prompt('Enter quest name:', quest.name);
    if (!newName) return;
    
    const newType = prompt('Enter quest type:', quest.type);
    if (!newType) return;
    
    const newTokens = prompt('Enter base token reward:', quest.baseTokenReward);
    if (newTokens === null) return;
    
    quest.name = newName;
    quest.type = newType;
    quest.baseTokenReward = parseInt(newTokens);
    saveData();
    renderPlay();
}

// ============================================
// TREASURE MANAGEMENT
// ============================================

function createTreasure() {
    const name = document.getElementById('treasureName').value;
    const cost = parseInt(document.getElementById('treasureCost').value);
    const timer = parseInt(document.getElementById('treasureTimer').value);
    
    if (!name || !cost || !timer) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    const newTreasure = {
        id: generateId(),
        name,
        costTokens: cost,
        baseTimerSeconds: timer * 60,
        cooldownSeconds: 0
    };
    
    appState.treasures.push(newTreasure);
    saveData();
    closeModal('addTreasureModal');
    document.getElementById('treasureName').value = '';
    document.getElementById('treasureCost').value = '';
    document.getElementById('treasureTimer').value = '';
    renderShop();
    window.dispatchEvent(new CustomEvent('epic-item-created', { detail: { type: 'treasure', label: name } }));
}

function showClaimTreasureDialog(treasureId) {
    document.querySelectorAll('#claimTreasureModal').forEach(modal => modal.remove());
    const treasure = appState.treasures.find(t => t.id === treasureId);
    if (!treasure) return;
    
    // Find children with enough tokens
    const eligibleChildren = appState.children.filter(child => child.tokens >= treasure.costTokens);
    
    const modal = document.createElement('div');
    modal.id = 'claimTreasureModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <div class="modal-header claim-treasure-header">
                <span>Claim Treasure: ${treasure.name}</span>
                <button type="button" class="claim-treasure-close" data-close-claim aria-label="Close Claim Treasure dialog">×</button>
            </div>
            <div class="modal-body" style="padding: 20px;">
                ${eligibleChildren.length === 0 ? `
                    <div style="text-align: center; padding: 20px; color: #666;">
                        <p>No children have enough tokens to claim this treasure.</p>
                        <p>Required: 💰 ${treasure.costTokens} tokens</p>
                    </div>
                ` : `
                    <p style="margin-bottom: 15px; font-weight: bold;">Select a child to claim this treasure:</p>
                    <div style="max-height: 300px; overflow-y: auto;">
                        ${eligibleChildren.map(child => `
                            <button class="btn" style="width: 100%; text-align: left; margin-bottom: 8px; padding: 12px; background: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 4px;" onclick="claimTreasure('${child.id}', '${treasureId}'); closeModal('claimTreasureModal'); renderShop();">
                                <div style="font-weight: bold;">${child.name}</div>
                                <div style="font-size: 12px; opacity: 0.9;">💰 ${child.tokens} tokens (Cost: ${treasure.costTokens})</div>
                            </button>
                        `).join('')}
                    </div>
                `}
            </div>
            <div class="modal-buttons">
                <button type="button" class="btn" data-close-claim>Cancel</button>
            </div>
        </div>
    `;
    modal.querySelectorAll('[data-close-claim]').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            closeClaimTreasureDialog(modal);
        });
    });
    modal.classList.add('active');
    document.body.appendChild(modal);
}
function claimTreasure(childId, treasureId) {
    const child = appState.children.find(c => c.id === childId);
    const treasure = appState.treasures.find(t => t.id === treasureId);
    
    if (!child || !treasure) return;

    if (child.tokens < treasure.costTokens) {
        showNotification('Not enough tokens!', 'error');
        return;
    }
    
    child.tokens -= treasure.costTokens;
    
    // Calculate timer with QML Bonus %
    const tiers = appState.qmlTiers[child.qmlType];
    const currentTier = tiers.find(t => child.currentQMLProgress >= t.minRequirement && child.currentQMLProgress <= t.maxRequirement);
    const bonusPercentage = currentTier ? currentTier.bonusPercentage : 0;
    const finalTimerSeconds = Math.round(treasure.baseTimerSeconds * (1 + bonusPercentage / 100));
    
    const endAt = Date.now() + finalTimerSeconds * 1000;
    child.activeTreasures.push({
        treasureId,
        timeRemaining: finalTimerSeconds,
        timerDuration: finalTimerSeconds,
        endAt,
        notificationKey: generateId(),
        isPaused: false,
        endNotificationScheduled: false,
        endedNotified: false
    });
    
    child.treasureHistory.push({
        treasureId,
        treasureName: treasure.name,
        costTokens: treasure.costTokens,
        claimDate: new Date().toISOString().split('T')[0],
        claimFullDate: new Date().toISOString(),
        finalTimerSeconds: finalTimerSeconds
    });
    
    updateBadgeProgress(child, 'treasures_claimed', 1);
    saveData();
    renderChildProfile();
    renderDashboard();
    showNotification(`${treasure.name} claimed by ${child.name}!`, 'success');
    const activeTreasure = child.activeTreasures[child.activeTreasures.length - 1];
    window.dispatchEvent(new CustomEvent('epic-treasure-claimed', { detail: { childId, childName: child.name, treasureId, treasureName: treasure.name, endAt, notificationKey: activeTreasure.notificationKey } }));
}

function pauseTreasure(childId, index) {
    const child = appState.children.find(c => c.id === childId);
    const treasure = child?.activeTreasures[index];
    if (!child || !treasure) return;
    treasure.timeRemaining = Math.max(0, Math.ceil(((treasure.endAt || Date.now()) - Date.now()) / 1000));
    treasure.isPaused = !treasure.isPaused;
    if (treasure.isPaused) {
        window.dispatchEvent(new CustomEvent('epic-treasure-paused', { detail: { childId, treasureId: treasure.treasureId, notificationKey: treasure.notificationKey } }));
    } else {
        treasure.endAt = Date.now() + treasure.timeRemaining * 1000;
        treasure.endedNotified = false;
        const treasureData = appState.treasures.find(item => item.id === treasure.treasureId);
        window.dispatchEvent(new CustomEvent('epic-treasure-resumed', { detail: { childId, childName: child.name, treasureId: treasure.treasureId, treasureName: treasureData?.name || 'Treasure', endAt: treasure.endAt, notificationKey: treasure.notificationKey } }));
    }
    saveData();
    renderChildProfile();
}

function deleteTreasure(treasureId) {
    if (confirm('Delete this treasure?')) {
        appState.treasures = appState.treasures.filter(t => t.id !== treasureId);
        saveData();
        renderShop();
    }
}

function editTreasure(treasureId) {
    const treasure = appState.treasures.find(t => t.id === treasureId);
    if (!treasure) return;
    
    const newName = prompt('Enter treasure name:', treasure.name);
    if (!newName) return;
    
    const newCost = prompt('Enter token cost:', treasure.costTokens);
    if (newCost === null) return;
    
    const newTimer = prompt('Enter timer duration (minutes):', Math.floor(treasure.baseTimerSeconds / 60));
    if (newTimer === null) return;
    
    treasure.name = newName;
    treasure.costTokens = parseInt(newCost);
    treasure.baseTimerSeconds = parseInt(newTimer) * 60;
    saveData();
    renderShop();
}

// ============================================
// BADGE MANAGEMENT
// ============================================

function updateBadgeProgress(child, type, amount) {
    child.badges.forEach(badge => {
        const badgeData = appState.badges.find(b => b.id === badge.badgeId);
        if (badgeData && badgeData.type === type && !badge.earned) {
            badge.progress += amount;
            if (badge.progress >= badgeData.targetValue) {
                badge.earned = true;
                badge.earnedDate = new Date().toISOString().split('T')[0];
                window.dispatchEvent(new CustomEvent('epic-achievement-earned', { detail: { kind: 'badge', childId: child.id, childName: child.name, label: badgeData.name } }));
            }
        }
    });
}

// ============================================
// TIMER UPDATES
// ============================================

function startTimerUpdates() {
    setInterval(() => {
        let updated = false;
        appState.children.forEach(child => {
            child.activeTreasures = child.activeTreasures.filter(treasure => {
                if (!treasure.isPaused) {
                    const remaining = Math.max(0, Math.ceil(((treasure.endAt || Date.now()) - Date.now()) / 1000));
                    treasure.timeRemaining = remaining;
                    updated = true;
                    if (remaining <= 0) {
                        if (!treasure.endedNotified) {
                            treasure.endedNotified = true;
                            const treasureData = appState.treasures.find(item => item.id === treasure.treasureId);
                            window.dispatchEvent(new CustomEvent('epic-treasure-ended', { detail: { childId: child.id, childName: child.name, treasureId: treasure.treasureId, treasureName: treasureData?.name || 'Treasure' } }));
                        }
                        return false;
                    }
                    return true;
                }
                return true;
            });
        });
        
        if (updated) {
            saveData();
            if (appState.currentProfileChildId) {
                renderChildProfile();
            } else {
                const dashboard = document.getElementById('dashboard');
                if (dashboard && dashboard.classList.contains('active')) {
                    renderDashboard();
                }
            }
            refreshNfcChildActionWindow();
        }
    }, 1000);
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

function renderDashboard() {
    const container = document.getElementById('children-list');
    if (appState.children.length === 0) {
        container.innerHTML = '<div class="empty-state">No children profiles yet. Click "+ Add Child" to begin.</div>';
        return;
    }
    
    container.innerHTML = appState.children.map(child => {
        const age = calculateAge(child.dateOfBirth);
        const onQuest = child.ongoingQuests.length > 0;
        const enjoyingTreasure = child.activeTreasures.length > 0;
        
        let statusHtml = '<div class="child-status-area">';
        if (onQuest) {
            statusHtml += `<div class="status-notification status-on-quest">⚔️ On Quest: ${child.ongoingQuests.length} active</div>`;
        }
        if (enjoyingTreasure) {
            child.activeTreasures.forEach(treasure => {
                const treasureData = appState.treasures.find(t => t.id === treasure.treasureId);
                const percent = (treasure.timeRemaining / treasure.timerDuration) * 100;
                statusHtml += `
                    <div class="status-notification status-enjoying-treasure">
                        🎁 Enjoying: ${treasureData ? treasureData.name : 'Treasure'}
                        <div class="dashboard-timer-bar">
                            <div class="dashboard-timer-fill" style="width: ${percent}%"></div>
                        </div>
                        <div style="font-size: 8px; margin-top: 2px;">⏱️ ${formatTime(treasure.timeRemaining)}</div>
                    </div>
                `;
            });
        }
        statusHtml += '</div>';

        return `
            <div class="child-card arena-hero-card" onclick="openChildProfile('${child.id}')">
                <div class="child-info">
                    <div class="arena-card-kicker">ACTIVE HERO</div>
                    <div class="child-name">${child.name}</div>
                    <div class="child-details">Age: ${age} | ${child.currentQMLTier}</div>
                    <div class="tokens-display">💰 ${child.tokens} Tokens</div>
                    <div class="dashboard-qml-panel">
                        <div class="qml-progress-label">${child.currentQMLTier}</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(child.currentQMLProgress / 30) * 100}%"></div>
                        </div>
                    </div>
                </div>
                <img src="${avatarPath(child.avatarId)}" class="child-avatar" alt="Avatar">
                ${statusHtml}
            </div>
        `;
    }).join('');
}

function renderLeaderboard() {
    const statsContainer = document.getElementById('weekly-stats');
    
    if (appState.children.length === 0) {
        statsContainer.innerHTML = '<div class="arena-empty-state"><span>⚔️</span><strong>The Quest Arena is waiting.</strong><p>Add a child profile, then approve quests to begin the weekly race.</p></div>';
        return;
    }
    
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weeklyRanks = appState.children.map(child => {
        const weeklyQuestHistory = child.questHistory.filter(q => q.approvedDate && new Date(q.approvedDate) >= weekAgo);
        const weeklyTreasureHistory = child.treasureHistory.filter(t => t.claimDate && new Date(t.claimDate) >= weekAgo);
        const weeklyQuests = weeklyQuestHistory.length;
        const weeklyTokens = weeklyQuestHistory.reduce((sum, q) => sum + (q.tokensEarned || 0), 0);
        const weeklyTreasures = weeklyTreasureHistory.length;
        const weeklyBadges = child.badges.filter(b => b.earned && b.earnedDate && new Date(b.earnedDate) >= weekAgo).length;
        const activeDays = new Set([
            ...weeklyQuestHistory.map(q => new Date(q.approvedDate).toDateString()),
            ...weeklyTreasureHistory.map(t => new Date(t.claimDate).toDateString())
        ]).size;
        // Quest Points reward varied, recent participation instead of relying on token balance alone.
        const weeklyScore = (weeklyQuests * 10) + weeklyTokens + (weeklyTreasures * 6) + (weeklyBadges * 12) + (activeDays * 4);
        return { child, weeklyQuests, weeklyTokens, weeklyTreasures, weeklyBadges, activeDays, weeklyScore };
    }).sort((a, b) => b.weeklyScore - a.weeklyScore || b.weeklyTokens - a.weeklyTokens || a.child.name.localeCompare(b.child.name));

    const leader = weeklyRanks[0];
    const leaderScore = Math.max(leader?.weeklyScore || 0, 1);
    const hasWeeklyActivity = weeklyRanks.some(entry => entry.weeklyScore > 0);
    const rankLabel = index => !hasWeeklyActivity ? (index === 0 ? 'ARENA READY' : 'JOIN THE RACE') : (index === 0 ? 'CHAMPION' : index === 1 ? 'CHALLENGER' : index === 2 ? 'RISING HERO' : 'QUESTER');
    const rankIcon = index => !hasWeeklyActivity ? '⚔️' : (index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐');

    statsContainer.innerHTML = `
        <section class="weekly-arena" aria-label="Weekly Quest Arena">
            <div class="weekly-arena-heading">
                <div><span class="weekly-arena-kicker">LAST 7 DAYS</span><h3>⚔️ Weekly Quest Arena</h3></div>
                <span class="weekly-reset-note">Fresh race • recent activity wins</span>
            </div>
            <p class="weekly-arena-rule">Quest Points: quests ×10, tokens earned, treasures ×6, badges ×12, and active days ×4.</p>
            <div class="weekly-race-list">
                ${weeklyRanks.map((entry, index) => {
                    const pace = Math.round((entry.weeklyScore / leaderScore) * 100);
                    const gapText = !hasWeeklyActivity
                        ? 'Complete a quest to claim the first lead!'
                        : index === 0
                        ? (entry.weeklyScore > 0 ? 'Leading the arena this week!' : 'The arena is ready for the first quest!')
                        : `${leader.weeklyScore - entry.weeklyScore} Quest Points behind ${leader.child.name}`;
                    return `
                        <article class="weekly-racer weekly-racer-${index + 1}">
                            <div class="weekly-rank-badge"><span>${rankIcon(index)}</span><strong>${hasWeeklyActivity ? `#${index + 1}` : 'TIE'}</strong></div>
                            <div class="weekly-racer-main">
                                <div class="weekly-racer-topline"><button class="weekly-racer-name" onclick="openChildProfile('${entry.child.id}')">${entry.child.name}</button><span class="weekly-rank-label">${rankLabel(index)}</span></div>
                                <div class="weekly-score-line"><strong>${entry.weeklyScore}</strong><span>Quest Points</span><em>${gapText}</em></div>
                                <div class="weekly-pace-track" aria-label="${entry.child.name} weekly pace"><div class="weekly-pace-fill" style="width: ${pace}%"></div></div>
                                <div class="weekly-stat-grid">
                                    <span>⚔️ ${entry.weeklyQuests} quests</span><span>💰 ${entry.weeklyTokens} earned</span><span>🎁 ${entry.weeklyTreasures} rewards</span><span>🔥 ${entry.activeDays} active days</span>
                                </div>
                            </div>
                        </article>
                    `;
                }).join('')}
            </div>
        </section>
    `;
}

function renderPlay() {
    const container = document.getElementById('quests-list');
    if (appState.quests.length === 0) {
        container.innerHTML = '<div class="empty-state">No quests yet.</div>';
        return;
    }
    container.innerHTML = appState.quests.map(quest => `
        <article class="quest-card arena-item-card">
            <div class="quest-header arena-item-topline" style="position: relative;">
                <div class="quest-type">${quest.type}</div>
                <button class="btn card-delete-btn" onclick="deleteQuest('${quest.id}')" aria-label="Delete quest" title="Delete quest">🗑 <span>Delete</span></button>
            </div>
            <div class="quest-name">${quest.name}</div>
            <div class="arena-reward-strip"><span>QUEST REWARD</span><strong>💰 ${quest.baseTokenReward}</strong><em>tokens</em></div>
            <div class="arena-card-actions"><button class="btn btn-small" onclick="requestQuestFromPlay('${quest.id}')">Request Quest</button><button class="btn btn-small arena-secondary-action" onclick="editQuest('${quest.id}')">Edit</button></div>
        </article>
    `).join('');
}

function renderShop() {
    const container = document.getElementById('treasures-list');
    if (appState.treasures.length === 0) {
        container.innerHTML = '<div class="empty-state">No treasures yet.</div>';
        return;
    }
    container.innerHTML = appState.treasures.map(treasure => `
        <article class="treasure-card arena-item-card">
            <div class="treasure-header arena-item-topline" style="position: relative;">
                <div class="treasure-name">${treasure.name}</div>
                <button class="btn card-delete-btn" onclick="deleteTreasure('${treasure.id}')" aria-label="Delete treasure" title="Delete treasure">🗑 <span>Delete</span></button>
            </div>
            <div class="arena-reward-strip"><span>VAULT COST</span><strong>💰 ${treasure.costTokens}</strong><em>tokens</em><b>⏱️ ${Math.floor(treasure.baseTimerSeconds / 60)} min</b></div>
            <div class="arena-card-actions"><button class="btn btn-small" onclick="showClaimTreasureDialog('${treasure.id}')">Claim Treasure</button><button class="btn btn-small arena-secondary-action" onclick="editTreasure('${treasure.id}')">Edit</button></div>
        </article>
    `).join('');
}

function renderSettings() {
    const container = document.getElementById('settings-content');
    let html = '<div>';
    
    html += '<div class="profile-section arena-settings-panel"><div class="profile-section-title">Age Multiplier & QML Tiers</div>';
    html += '<button class="btn btn-primary arena-wide-action" onclick="openEditSettingsModal()">Edit All Settings</button>';
    html += '<div class="arena-settings-summary">';
    html += '<strong style="display: block; margin-bottom: 10px;">Age Multiplier Groups:</strong>';
    appState.ageGroups.forEach(group => {
        html += `<div style="margin: 5px 0; font-size: 12px;">${group.name}: <strong>${group.currentMultiplier}x</strong></div>`;
    });
    html += '<br><strong style="display: block; margin-bottom: 10px; margin-top: 10px;">QML Tiers:</strong>';
    for (const category in appState.qmlTiers) {
        html += `<div style="margin: 5px 0; font-size: 12px;"><strong>${category}:</strong> ${appState.qmlTiers[category].length} tiers configured</div>`;
    }
    html += '</div>';
    html += '</div>';
    
    html += `
        <div class="profile-section arena-settings-panel">
            <div class="profile-section-title">Birthday Reward</div>
            <div class="setting-item">
                <div class="setting-label">Tokens to Award on Birthday</div>
                <input type="number" class="setting-input" value="${appState.birthdayTokenReward}" onchange="updateBirthdayReward(this.value)">
            </div>
        </div>
    `;
    
    html += `
        <div class="profile-section feedback-settings arena-settings-panel">
            <div class="profile-section-title">Phone Alerts & Sound Feedback</div>
            <label class="setting-toggle"><input type="checkbox" id="notificationPreferenceToggle" ${appState.notificationsEnabled !== false ? 'checked' : ''} onchange="updateNotificationPreference(this.checked)"> Treasure timer phone notifications</label>
            <p class="setting-help">The phone can alert you when a treasure timer ends. Android may ask for notification permission.</p>
            <div class="notification-action-grid">
                <button class="btn btn-small" onclick="checkPhoneNotifications()">Enable / Check Phone Notifications</button>
                <button class="btn btn-small" onclick="requestPrecisePhoneAlarms()">Allow Precise Screen-Off Alarms</button>
            </div>
            <div id="phoneNotificationStatus" class="phone-notification-status" role="status" aria-live="polite">Tap “Enable / Check” to confirm Android notification access.</div>
            <p class="setting-help">For the most reliable screen-off timer, allow EPIC RPG under Android Settings → Alarms & reminders. The app will keep a safe fallback when precise alarms are not granted.</p>
            <label class="setting-toggle"><input type="checkbox" ${appState.soundEnabled !== false ? 'checked' : ''} onchange="updateSoundEnabled(this.checked)"> Pixel adventure sounds for quests, rewards, badges, NFC, and timers</label>
            <label class="setting-range">Sound volume <input type="range" min="0" max="1" step="0.05" value="${appState.soundVolume ?? 0.65}" oninput="updateSoundVolume(this.value)"></label>
            <button class="btn btn-small" onclick="testFeedbackSound()">Test Adventure Sound</button>
        </div>
    `;

    html += `
        <div class="profile-section arena-settings-panel">
            <div class="profile-section-title">Badge Glossary & Requirements</div>
            <div class="badge-glossary">
                ${['Coal', 'Copper', 'Iron', 'Gold', 'Redstone', 'Diamond', 'Emerald', 'Ancient Debris'].map(cat => {
                    const badges = appState.badges.filter(b => b.category === cat);
                    const iconMap = {'Coal': 'coal-ore', 'Copper': 'copper-ore', 'Iron': 'iron-ore', 'Gold': 'gold-ore', 'Redstone': 'redstone-ore', 'Diamond': 'diamond-ore', 'Emerald': 'emerald-ore', 'Ancient Debris': 'ancient-debris'};
                    return `
                        <div class="glossary-category" onclick="toggleGlossary('${cat}')">
                            <div class="glossary-header">
                                <img src="${badgePath(iconMap[cat])}" alt="${cat}" style="width: 24px; height: 24px; margin-right: 8px; vertical-align: middle;">
                                <span>${cat} Badges</span>
                                <span>▼</span>
                            </div>
                            <div id="glossary-${cat.replace(' ', '-')}" class="glossary-details" style="display: none;">
                                ${badges.map(b => `<div class="glossary-item"><strong>${b.name}</strong>: ${b.description}</div>`).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    html += `<div class="profile-section arena-settings-panel arena-danger-panel"><button class="btn btn-danger" onclick="masterReset()">Master Reset All Data</button></div>`;
    container.innerHTML = html;
}

function toggleGlossary(cat) {
    const el = document.getElementById(`glossary-${cat.replace(' ', '-')}`);
    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function renderChildProfile() {
    const child = appState.children.find(c => c.id === appState.currentProfileChildId);
    if (!child) return;
    const container = document.getElementById('profile-content');
    const age = calculateAge(child.dateOfBirth);
    
    let html = `
        <div class="profile-section child-profile-hero-panel">
            <div class="child-profile-hero-row">
                <img src="${avatarPath(child.avatarId)}" alt="${child.name}" style="width: 80px; height: 80px; border: 2px solid #1a1a1a; border-radius: 4px;">
                <div>
                    <div class="arena-card-kicker">HERO PROFILE</div>
                    <div class="profile-section-title child-profile-hero-name">${child.name}</div>
                    <div class="child-profile-meta">Age: ${age} | DOB: ${child.dateOfBirth}</div>
                    ${child.nfcCardId ? `<div class="child-profile-meta">NFC: ${child.nfcCardId}</div>` : ''}
                </div>
            </div>
        </div>
    `;
    
    html += `
        <div class="profile-section child-profile-status-panel">
            <div class="profile-section-title">Status</div>
            <div style="font-size: 12px; margin-bottom: 10px;">
                <div style="margin-bottom: 8px;"><strong>Tokens:</strong> 💰 ${child.tokens}</div>
                <div style="margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                    <strong>QML Type:</strong>
                    <select onchange="changeQMLType('${child.id}', this.value)" style="padding: 4px;">
                        <option value="Juz Amma" ${child.qmlType === 'Juz Amma' ? 'selected' : ''}>Juz Amma</option>
                        <option value="Al-Quran" ${child.qmlType === 'Al-Quran' ? 'selected' : ''}>Al-Quran</option>
                    </select>
                </div>
                <div style="margin-bottom: 8px;"><strong>Current Tier:</strong> ${child.currentQMLTier}</div>
                <div style="margin-bottom: 12px;">
                    <strong style="display: block; margin-bottom: 8px;">QML Progress:</strong>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <button class="btn btn-progress-control" onclick="updateQMLProgress('${child.id}', ${child.currentQMLProgress} - 1)">−</button>
                        <div style="flex: 1; display: flex; align-items: center; gap: 10px; padding: 0 10px;">
                            <div style="flex: 1; height: 16px; background: #1a1a1a; border: 2px solid #1a1a1a; position: relative; overflow: hidden;">
                                <div style="height: 100%; background: linear-gradient(90deg, #4CAF50, #8BC34A); width: ${(child.currentQMLProgress / getQMLMaxValue(child.qmlType)) * 100}%; transition: width 0.2s;"></div>
                            </div>
                            <span style="font-weight: bold; min-width: 40px; text-align: center;">${child.currentQMLProgress}/${getQMLMaxValue(child.qmlType)}</span>
                        </div>
                        <button class="btn btn-progress-control" onclick="updateQMLProgress('${child.id}', ${child.currentQMLProgress} + 1)">+</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    html += `<div class="profile-section child-profile-arena-panel"><div class="profile-section-title">Ongoing Quests</div>`;
    if (child.ongoingQuests.length === 0) {
        html += '<div class="empty-state">No ongoing quests</div>';
    } else {
        child.ongoingQuests.forEach(oq => {
            const quest = appState.quests.find(q => q.id === oq.questId);
            const questName = quest ? quest.name : 'Deleted quest';
            html += `
                    <div class="ongoing-quest">
                    <div class="ongoing-quest-name">${questName}</div>
                    <div class="status-badge ${oq.status === 'pending_approval' ? 'pending' : ''}">${oq.status === 'ongoing' ? 'Ongoing' : 'Pending Approval'}</div>
                    ${oq.status === 'ongoing' ? `<button class="btn btn-small" onclick="markQuestComplete('${child.id}', '${oq.instanceId}')">Mark Complete</button><button class="btn btn-small btn-danger" onclick="cancelQuest('${child.id}', '${oq.instanceId}')">Cancel</button>` : `<button class="btn btn-small" onclick="approveQuest('${child.id}', '${oq.instanceId}')">Approve</button><button class="btn btn-small btn-danger" onclick="rejectQuest('${child.id}', '${oq.instanceId}')">Reject</button>`}
                </div>
            `;
        });
    }
    html += '</div>';
    
    html += `<div class="profile-section child-profile-arena-panel"><div class="profile-section-title">Active Treasures</div>`;
    if (child.activeTreasures.length === 0) {
        html += '<div class="empty-state">No active treasures</div>';
    } else {
        child.activeTreasures.forEach((treasure, index) => {
            const treasureData = appState.treasures.find(t => t.id === treasure.treasureId);
            const percent = (treasure.timeRemaining / treasure.timerDuration) * 100;
            html += `
                <div style="background: #f0f0f0; border: 2px solid #1a1a1a; padding: 10px; margin-bottom: 10px; margin-left: -10px; margin-right: -10px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">🎁 Enjoying: ${treasureData ? treasureData.name : 'Treasure'}</div>
                    <div class="dashboard-timer-bar">
                        <div class="dashboard-timer-fill" style="width: ${percent}%"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                        <div style="font-size: 12px;">⏱️ ${formatTime(treasure.timeRemaining)}</div>
                        <button class="btn btn-small" onclick="pauseTreasure('${child.id}', ${index})">${treasure.isPaused ? 'Resume' : 'Pause'}</button>
                    </div>
                </div>
            `;
        });
    }
    html += '</div>';
    
    html += `<div class="profile-section child-profile-arena-panel"><div class="profile-section-title">Available Treasures</div>`;
    appState.treasures.forEach(treasure => {
        const canClaim = child.tokens >= treasure.costTokens;
        html += `
            <div style="padding: 10px; border: 2px solid #1a1a1a; margin-bottom: 8px; background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);">
                <div style="font-weight: bold; margin-bottom: 5px;">${treasure.name}</div>
                <div style="font-size: 12px; margin-bottom: 8px;">💰 ${treasure.costTokens} tokens | ⏱️ ${Math.floor(treasure.baseTimerSeconds / 60)} mins</div>
                <button class="btn btn-small ${!canClaim ? 'disabled' : ''}" onclick="claimTreasure('${child.id}', '${treasure.id}')" ${!canClaim ? 'disabled' : ''}>${canClaim ? 'Claim' : `Need ${treasure.costTokens - child.tokens} more`}</button>
            </div>
        `;
    });
    html += '</div>';
    
    html += `<div class="profile-section child-profile-arena-panel"><div class="profile-section-title">Badges</div><div class="badge-grid">`;
    child.badges.forEach(badge => {
        const badgeData = appState.badges.find(b => b.id === badge.badgeId);
        if (badgeData) {
            const iconMap = {'Coal': 'coal-ore', 'Copper': 'copper-ore', 'Iron': 'iron-ore', 'Gold': 'gold-ore', 'Redstone': 'redstone-ore', 'Diamond': 'diamond-ore', 'Emerald': 'emerald-ore', 'Ancient Debris': 'ancient-debris'};
            html += `<div class="badge-item" style="opacity: ${badge.earned ? '1' : '0.5'};"><div class="badge-icon"><img src="${badgePath(iconMap[badgeData.category])}" alt="${badgeData.category}" style="width: 32px; height: 32px;"></div><div class="badge-name">${badgeData.name}</div><div class="badge-progress">${badge.progress}/${badgeData.targetValue}</div></div>`;
        }
    });
    html += '</div></div>';
    
    html += `<div style="display: flex; gap: 10px; margin-top: 15px;"><button class="btn" onclick="editChild('${child.id}')" style="flex: 1; background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);">Edit Profile</button><button class="btn btn-danger" onclick="deleteChild('${child.id}')" style="flex: 1;">Delete Child</button></div>`;
    container.innerHTML = html;
}

function renderAvatarGrid(gridId = 'avatarGrid') {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = AVATAR_LIST.map(avatar => `<div class="avatar-option ${selectedAvatarId === avatar.id ? 'selected' : ''}" onclick="selectAvatar('${avatar.id}', '${gridId}')"><img src="${avatar.path}" alt="Avatar"></div>`).join('');
}

function selectAvatar(avatarId, gridId) { 
    selectedAvatarId = avatarId; 
    renderAvatarGrid(gridId); 
}

function updateAgeGroupMultiplier(groupId, value) {
    const group = appState.ageGroups.find(g => g.id === groupId);
    if (group) { group.currentMultiplier = parseFloat(value); saveData(); }
}

function updateAgeGroupName(groupId, newName) {
    const group = appState.ageGroups.find(g => g.id === groupId);
    if (group && newName.trim()) {
        group.name = newName.trim();
        saveData();
    }
}

function updateAgeGroupRange(groupId, value, type) {
    const group = appState.ageGroups.find(g => g.id === groupId);
    if (group) {
        if (type === 'min') group.ageRangeMin = parseInt(value);
        if (type === 'max') group.ageRangeMax = parseInt(value);
        saveData();
    }
}

function updateQMLTierName(category, tierId, newName) {
    const tier = appState.qmlTiers[category]?.find(t => t.id === tierId);
    if (tier && newName.trim()) {
        tier.tierName = newName.trim();
        saveData();
    }
}

function updateBirthdayReward(value) { appState.birthdayTokenReward = parseInt(value); saveData(); }

function updateSoundEnabled(value) {
    appState.soundEnabled = Boolean(value);
    saveData();
    window.dispatchEvent(new CustomEvent('epic-sound-settings-changed', { detail: { enabled: appState.soundEnabled, volume: appState.soundVolume } }));
}

function updateSoundVolume(value) {
    appState.soundVolume = Math.min(1, Math.max(0, parseFloat(value) || 0));
    saveData();
    window.dispatchEvent(new CustomEvent('epic-sound-settings-changed', { detail: { enabled: appState.soundEnabled, volume: appState.soundVolume } }));
}

function updateNotificationPreference(value) {
    appState.notificationsEnabled = Boolean(value);
    saveData();
    window.dispatchEvent(new CustomEvent('epic-notification-preference-changed', { detail: { enabled: appState.notificationsEnabled } }));
    if (appState.notificationsEnabled) {
        checkPhoneNotifications(false);
    } else {
        setPhoneNotificationStatus('Treasure timer phone notifications are turned off. Existing scheduled timer alerts were cleared.', 'muted');
    }
}

function setPhoneNotificationStatus(message, state = 'info') {
    const status = document.getElementById('phoneNotificationStatus');
    if (!status) return;
    status.className = `phone-notification-status is-${state}`;
    status.textContent = message;
}

async function checkPhoneNotifications(enablePreference = true) {
    const prepare = window.prepareTreasureNotifications;
    if (typeof prepare !== 'function') {
        setPhoneNotificationStatus('Phone notification checks are available after installing EPIC RPG on an Android device.', 'muted');
        showNotification('Open the Android app to check phone notifications.', 'error');
        return;
    }

    if (enablePreference && appState.notificationsEnabled === false) {
        appState.notificationsEnabled = true;
        saveData();
        const toggle = document.getElementById('notificationPreferenceToggle');
        if (toggle) toggle.checked = true;
        window.dispatchEvent(new CustomEvent('epic-notification-preference-changed', { detail: { enabled: true } }));
    }

    setPhoneNotificationStatus('Checking Android notification access…', 'checking');
    try {
        const result = await prepare();
        if (!result || result.enabled !== true) {
            setPhoneNotificationStatus('Notifications are not allowed yet. Choose Allow in the Android permission prompt, then check again.', 'warning');
            showNotification('Notification permission is still needed.', 'error');
            return;
        }
        const exactNote = result.exact ? ' Precise screen-off alarms are also allowed.' : ' Precise screen-off alarms can be enabled with the button above.';
        setPhoneNotificationStatus(`Phone notifications are enabled.${exactNote}`, result.exact ? 'ready' : 'warning');
        dispatchActiveTreasureNotificationSync();
        showNotification(result.exact ? 'Phone notifications and precise alarms are ready!' : 'Phone notifications are enabled!', 'success');
    } catch (error) {
        console.error('Unable to check phone notifications', error);
        setPhoneNotificationStatus('Android could not complete the notification check. Please try again from the installed app.', 'warning');
        showNotification('Unable to check phone notifications.', 'error');
    }
}

async function requestPrecisePhoneAlarms() {
    const requestExact = window.requestExactTreasureAlarms;
    if (typeof requestExact !== 'function') {
        setPhoneNotificationStatus('Precise alarm access can only be changed from the installed Android app.', 'muted');
        return;
    }
    setPhoneNotificationStatus('Opening Android’s precise alarm setting…', 'checking');
    try {
        const result = await requestExact();
        if (result?.exact_alarm === 'granted') {
            setPhoneNotificationStatus('Precise screen-off alarms are enabled.', 'ready');
            showNotification('Precise screen-off alarms are enabled!', 'success');
        } else {
            setPhoneNotificationStatus('Android’s precise alarm setting was opened. Return here and use Check Phone Notifications to confirm your choice.', 'warning');
        }
    } catch (error) {
        console.error('Unable to request precise alarms', error);
        setPhoneNotificationStatus('Android could not open the precise alarm setting. Please check Settings → Alarms & reminders.', 'warning');
    }
}

function testFeedbackSound() {
    window.dispatchEvent(new CustomEvent('epic-test-sound'));
}

function masterReset() {
    if (confirm('Master Reset: This will reset tokens, history, and ALL badge progress for all children. Continue?')) {
        appState.children.forEach(child => {
            child.tokens = 0; child.questHistory = []; child.treasureHistory = []; child.ongoingQuests = []; child.activeTreasures = [];
            child.badges = appState.badges.map(b => ({ badgeId: b.id, progress: 0, earned: false }));
        });
        saveData();
        const cancelAll = window.cancelAllTreasureNotifications;
        if (typeof cancelAll === 'function') cancelAll();
        renderDashboard(); if (appState.currentProfileChildId) renderChildProfile(); showNotification('Master reset complete!', 'success');
    }
}

function editAgeGroup(groupId) {
    const group = appState.ageGroups.find(g => g.id === groupId);
    if (!group) return;
    const newName = prompt('Enter age group name:', group.name);
    if (newName) group.name = newName;
    const newMin = prompt('Enter min age:', group.ageRangeMin);
    if (newMin !== null) group.ageRangeMin = parseInt(newMin);
    const newMax = prompt('Enter max age:', group.ageRangeMax);
    if (newMax !== null) group.ageRangeMax = parseInt(newMax);
    saveData(); renderSettings();
}

function editQMLTier(category, tierId) {
    const tier = appState.qmlTiers[category].find(t => t.id === tierId);
    if (!tier) return;
    const newName = prompt('Enter tier name:', tier.tierName);
    if (newName) tier.tierName = newName;
    const newMin = prompt('Enter min requirement (surah/juz):', tier.minRequirement);
    if (newMin !== null) tier.minRequirement = parseInt(newMin);
    const newMax = prompt('Enter max requirement (surah/juz):', tier.maxRequirement);
    if (newMax !== null) tier.maxRequirement = parseInt(newMax);
    const newBonus = prompt('Enter bonus percentage:', tier.bonusPercentage);
    if (newBonus !== null) tier.bonusPercentage = parseInt(newBonus);
    saveData(); renderSettings();
}

// ============================================
// TIER MILESTONE CELEBRATIONS
// ============================================

function showTierMilestonePopup(childName, tierName, category = 'Juz Amma') {
    // Map tier names to badge icon categories
    const tierToBadgeMap = {
        'Beginner': 'coal-ore',
        'Learner': 'copper-ore',
        'Strong Reader': 'iron-ore',
        'Young Hafiz': 'gold-ore',
        'Advance Hafiz': 'redstone-ore',
        'Master Hafiz': 'diamond-ore',
        'Ultimate Hafiz': 'emerald-ore'
    };
    
    const badgeIcon = tierToBadgeMap[tierName] || 'coal-ore';
    
    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'tier-milestone-popup';
    popup.innerHTML = `
        <div class="tier-milestone-content">
            <div class="tier-milestone-animation">
                <img src="${badgePath(badgeIcon)}" class="ore-animation" alt="${tierName}" style="width: 80px; height: 80px;">
            </div>
            <div class="tier-milestone-text">
                <div class="tier-milestone-title">🎉 Tier Unlocked! 🎉</div>
                <div class="tier-milestone-child">${childName}</div>
                <div class="tier-milestone-tier">Reached: ${tierName}</div>
                <button class="tier-milestone-btn" onclick="this.closest('.tier-milestone-popup').remove()">Celebrate!</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (popup.parentNode) popup.remove();
    }, 5000);
}


function openEditSettingsModal() {
    // Remove existing modal if present
    const existingModal = document.getElementById('editSettingsModal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'editSettingsModal';
    modal.innerHTML = `
        <div class="modal-content settings-editor-modal">
            <div class="modal-header">Edit Settings</div>
            <p class="settings-editor-intro">Update the reward rules in compact rows. Changes are saved immediately to this device.</p>
            <div class="settings-editor-section">
                <div class="settings-editor-section-title">Age Multiplier Groups</div>
                ${appState.ageGroups.map(group => `
                    <div class="age-group-editor">
                        <div class="compact-field compact-field-name"><label>Group name</label><input type="text" value="${group.name}" onchange="updateAgeGroupName('${group.id}', this.value)"></div>
                        <div class="compact-field"><label>Min age</label><input type="number" value="${group.ageRangeMin}" onchange="updateAgeGroupRange('${group.id}', this.value, 'min')"></div>
                        <div class="compact-field"><label>Max age</label><input type="number" value="${group.ageRangeMax}" onchange="updateAgeGroupRange('${group.id}', this.value, 'max')"></div>
                        <div class="compact-field compact-field-multiplier"><label>Reward</label><select onchange="updateAgeGroupMultiplier('${group.id}', this.value)">
                            ${group.multiplierOptions.map(opt => `<option value="${opt}" ${opt === group.currentMultiplier ? 'selected' : ''}>${opt}x</option>`).join('')}
                        </select></div>
                    </div>
                `).join('')}
            </div>
            <div class="settings-editor-section">
                <div class="settings-editor-section-title">QML Tiers</div>
                ${Object.entries(appState.qmlTiers).map(([category, tiers]) => `
                    <div class="qml-editor-category">
                        <strong class="qml-editor-category-title">${category}</strong>
                        ${tiers.map(tier => `
                            <div class="qml-tier-editor">
                                <div class="compact-field compact-field-name"><label>Tier name</label><input type="text" value="${tier.tierName}" onchange="updateQMLTierName('${category}', '${tier.id}', this.value)"></div>
                                <div class="compact-field"><label>Min</label><input type="number" value="${tier.minRequirement}" onchange="updateQMLTier('${category}', '${tier.id}', 'minRequirement', this.value)"></div>
                                <div class="compact-field"><label>Max</label><input type="number" value="${tier.maxRequirement}" onchange="updateQMLTier('${category}', '${tier.id}', 'maxRequirement', this.value)"></div>
                                <div class="compact-field compact-field-bonus"><label>Bonus %</label><input type="number" value="${tier.bonusPercentage}" onchange="updateQMLTier('${category}', '${tier.id}', 'bonusPercentage', this.value)"></div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
            
            <div class="modal-buttons">
                <button class="btn" onclick="closeModal('editSettingsModal'); renderSettings();">Done</button>
                <button class="btn" onclick="closeModal('editSettingsModal')">Cancel</button>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.appendChild(modal);
}

function updateQMLTier(category, tierId, field, value) {
    const tier = appState.qmlTiers[category].find(t => t.id === tierId);
    if (tier) {
        tier[field] = parseInt(value);
        saveData();
    }
}
function dispatchActiveTreasureNotificationSync() {
    const activeTreasurePayloads = [];
    appState.children.forEach(child => child.activeTreasures.forEach(treasure => {
        if (!treasure.isPaused && treasure.timeRemaining > 0) {
            const treasureData = appState.treasures.find(item => item.id === treasure.treasureId);
            activeTreasurePayloads.push({ childId: child.id, childName: child.name, treasureId: treasure.treasureId, treasureName: treasureData?.name || 'Treasure', endAt: treasure.endAt, notificationKey: treasure.notificationKey });
        }
    }));
    window.dispatchEvent(new CustomEvent('epic-app-ready', { detail: { activeTreasurePayloads, notificationsEnabled: appState.notificationsEnabled } }));
}

window.syncActiveTreasureNotifications = dispatchActiveTreasureNotificationSync;

function init() {
    loadData();
    renderDashboard();
    renderAvatarGrid();
    startTimerUpdates();
    dispatchActiveTreasureNotificationSync();
}
window.addEventListener('DOMContentLoaded', init);
