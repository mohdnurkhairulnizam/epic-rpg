// Vanilla HTML5, CSS3, JavaScript (ES6+)
// EPIC RPG - Family Quest & Treasure System
// Complete Source Code - 1311 lines

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
    { id: 'avatar_f_1', path: '/avatars/avatar_f_1.png' },
    { id: 'avatar_f_2', path: '/avatars/avatar_f_2.png' },
    { id: 'avatar_f_3', path: '/avatars/avatar_f_3.png' },
    { id: 'avatar_f_4', path: '/avatars/avatar_f_4.png' },
    { id: 'avatar_f_5', path: '/avatars/avatar_f_5.png' },
    { id: 'avatar_f_6', path: '/avatars/avatar_f_6.png' },
    { id: 'avatar_f_7', path: '/avatars/avatar_f_7.png' },
    { id: 'avatar_f_8', path: '/avatars/avatar_f_8.png' },
    { id: 'avatar_f_9', path: '/avatars/avatar_f_9.png' },
    { id: 'avatar_f_10', path: '/avatars/avatar_f_10.png' },
    { id: 'avatar_m_1', path: '/avatars/avatar_m_1.png' },
    { id: 'avatar_m_2', path: '/avatars/avatar_m_2.png' },
    { id: 'avatar_m_3', path: '/avatars/avatar_m_3.png' },
    { id: 'avatar_m_4', path: '/avatars/avatar_m_4.png' },
    { id: 'avatar_m_5', path: '/avatars/avatar_m_5.png' },
    { id: 'avatar_m_6', path: '/avatars/avatar_m_6.png' },
    { id: 'avatar_m_7', path: '/avatars/avatar_m_7.png' },
    { id: 'avatar_m_8', path: '/avatars/avatar_m_8.png' },
    { id: 'avatar_m_9', path: '/avatars/avatar_m_9.png' },
    { id: 'avatar_m_10', path: '/avatars/avatar_m_10.png' },
    { id: 'avatar_m_11', path: '/avatars/avatar_m_11.png' },
    { id: 'avatar_m_12', path: '/avatars/avatar_m_12.png' },
    { id: 'avatar_m_13', path: '/avatars/avatar_m_13.png' },
    { id: 'avatar_m_14', path: '/avatars/avatar_m_14.png' },
    { id: 'avatar_m_15', path: '/avatars/avatar_m_15.png' },
    { id: 'avatar_m_16', path: '/avatars/avatar_m_16.png' },
    { id: 'avatar_m_17', path: '/avatars/avatar_m_17.png' },
    { id: 'avatar_m_18', path: '/avatars/avatar_m_18.png' },
    { id: 'avatar_m_19', path: '/avatars/avatar_m_19.png' },
    { id: 'avatar_m_20', path: '/avatars/avatar_m_20.png' }
];

// ============================================
// APP STATE
// ============================================

let appState = {
    children: [],
    quests: [],
    treasures: [],
    ageGroups: [],
    qmlTiers: {},
    badges: [],
    birthdayTokenReward: 100
};

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    loadData();
    if (appState.children.length === 0) {
        initializePresetData();
    }
    renderDashboard();
});

function initializePresetData() {
    appState.children = JSON.parse(JSON.stringify(PRESET_CHILDREN));
    appState.quests = JSON.parse(JSON.stringify(PRESET_QUESTS));
    appState.treasures = JSON.parse(JSON.stringify(PRESET_TREASURES));
    appState.ageGroups = JSON.parse(JSON.stringify(PRESET_AGE_GROUPS));
    appState.qmlTiers = JSON.parse(JSON.stringify(PRESET_QML_TIERS));
    appState.badges = JSON.parse(JSON.stringify(PRESET_BADGES));
    saveData();
}

// ============================================
// DATA PERSISTENCE
// ============================================

function saveData() {
    localStorage.setItem('epicRpgData', JSON.stringify(appState));
}

function loadData() {
    const saved = localStorage.getItem('epicRpgData');
    if (saved) {
        appState = JSON.parse(saved);
    }
}

function clearCreateChildForm() {
    document.getElementById('childName').value = '';
    document.getElementById('childDOB').value = '';
    document.getElementById('childNFC').value = '';
    document.getElementById('childQMLType').value = 'Juz Amma';
    document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
    selectedAvatarId = null;
}

// ============================================
// MODAL MANAGEMENT
// ============================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// ============================================
// TAB NAVIGATION
// ============================================

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add('active');
    }
    
    const btn = event.target.closest('.tab-btn');
    if (btn) {
        btn.classList.add('active');
    }
    
    if (tabName === 'dashboard') renderDashboard();
    else if (tabName === 'leaderboard') renderLeaderboard();
    else if (tabName === 'play') renderPlay();
    else if (tabName === 'shop') renderShop();
    else if (tabName === 'settings') renderSettings();
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

function renderDashboard() {
    const container = document.getElementById('children-list');
    container.innerHTML = '';
    
    appState.children.forEach(child => {
        const age = calculateAge(child.dateOfBirth);
        const maxValue = getQMLMaxValue(child.qmlType);
        const progressPercent = (child.currentQMLProgress / maxValue) * 100;
        
        const card = document.createElement('div');
        card.className = 'child-card';
        card.onclick = () => openChildProfile(child.id);
        
        card.innerHTML = `
            <div class="child-info">
                <div class="child-name">${child.name}</div>
                <div class="child-details">Age: ${age} | ${child.currentQMLTier}</div>
                <div class="tokens-display">💰 ${child.tokens} Tokens</div>
            </div>
            <img src="${getAvatarPath(child.avatarId)}" alt="Avatar" class="child-avatar">
            <div class="qml-progress">
                <div class="qml-progress-label">${child.qmlType}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div style="text-align: center; font-size: 11px; color: #fff; margin-top: 4px;">${child.currentQMLProgress}/${maxValue}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function renderChildProfile(childId) {
    const child = appState.children.find(c => c.id === childId);
    if (!child) return;
    
    document.getElementById('profile-screen').classList.add('active');
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('leaderboard').classList.remove('active');
    document.getElementById('play').classList.remove('active');
    document.getElementById('shop').classList.remove('active');
    document.getElementById('settings').classList.remove('active');
    
    const age = calculateAge(child.dateOfBirth);
    const maxValue = getQMLMaxValue(child.qmlType);
    const progressPercent = (child.currentQMLProgress / maxValue) * 100;
    
    let html = `
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="${getAvatarPath(child.avatarId)}" alt="Avatar" style="width: 60px; height: 60px; border-radius: 4px; border: 2px solid #fff;">
            <h2 style="color: #fff; margin-top: 10px;">${child.name}</h2>
            <p style="color: #fff; font-size: 12px;">Age: ${age} | DOB: ${child.dateOfBirth}</p>
        </div>
        
        <div style="background: rgba(0,0,0,0.2); padding: 15px; border: 2px solid rgba(255,255,255,0.3); margin-bottom: 15px;">
            <div style="color: #fff; margin-bottom: 10px;">💰 Tokens: ${child.tokens}</div>
            <div style="color: #fff; margin-bottom: 10px;">
                QML Type: 
                <select id="qmlTypeSelect" onchange="changeQMLType('${child.id}', this.value)" style="padding: 5px; margin-left: 5px;">
                    <option value="Juz Amma" ${child.qmlType === 'Juz Amma' ? 'selected' : ''}>Juz Amma</option>
                    <option value="Al-Quran" ${child.qmlType === 'Al-Quran' ? 'selected' : ''}>Al-Quran</option>
                </select>
            </div>
            <div style="color: #fff; margin-bottom: 10px;">Current Tier: ${child.currentQMLTier}</div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <button class="btn btn-small" onclick="updateQMLProgress('${child.id}', -1)">−</button>
                <div style="flex: 1;">
                    <div class="progress-bar" style="margin: 0;">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div style="text-align: center; font-size: 12px; color: #fff; margin-top: 5px;">${child.currentQMLProgress}/${maxValue}</div>
                </div>
                <button class="btn btn-small" onclick="updateQMLProgress('${child.id}', 1)">+</button>
            </div>
        </div>
        
        <h3 style="color: #fff; margin-top: 20px; margin-bottom: 10px;">⚔️ Ongoing Quests</h3>
    `;
    
    if (child.ongoingQuests.length === 0) {
        html += '<p style="color: #fff; font-size: 12px;">No ongoing quests</p>';
    } else {
        child.ongoingQuests.forEach((quest, index) => {
            const questData = appState.quests.find(q => q.id === quest.id);
            html += `
                <div style="background: #f0f0f0; padding: 10px; margin-bottom: 8px; border: 2px solid #1a1a1a;">
                    <div style="font-weight: bold; margin-bottom: 5px;">${questData.name}</div>
                    <div style="font-size: 12px; margin-bottom: 8px;">Type: ${questData.type} | Reward: ${questData.baseTokenReward} tokens</div>
                    <button class="btn btn-small" onclick="approveQuest('${child.id}', ${index})">Mark Complete</button>
                    <button class="btn btn-small btn-danger" onclick="cancelQuest('${child.id}', ${index})">Cancel</button>
                </div>
            `;
        });
    }
    
    html += '<h3 style="color: #fff; margin-top: 20px; margin-bottom: 10px;">🏅 Badges Earned</h3>';
    
    if (child.badges.length === 0) {
        html += '<p style="color: #fff; font-size: 12px;">No badges earned yet</p>';
    } else {
        const badgesByCategory = {};
        child.badges.forEach(badge => {
            if (!badgesByCategory[badge.category]) {
                badgesByCategory[badge.category] = [];
            }
            badgesByCategory[badge.category].push(badge);
        });
        
        Object.entries(badgesByCategory).forEach(([category, badges]) => {
            html += `<div style="margin-bottom: 10px;">`;
            html += `<div style="color: #FFD700; font-weight: bold; margin-bottom: 5px;">${category} Badges</div>`;
            badges.forEach(badge => {
                const oreIcon = getOreIcon(category);
                html += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
                    <img src="${oreIcon}" alt="${category}" style="width: 24px; height: 24px;">
                    <div style="color: #fff; font-size: 12px;">${badge.name} - ${badge.description}</div>
                </div>`;
            });
            html += `</div>`;
        });
    }
    
    html += `
        <div style="margin-top: 20px; display: flex; gap: 10px;">
            <button class="btn" onclick="editChild('${child.id}')">Edit Profile</button>
            <button class="btn btn-danger" onclick="deleteChild('${child.id}')">Delete Child</button>
        </div>
    `;
    
    document.getElementById('profile-content').innerHTML = html;
}

function renderLeaderboard() {
    const container = document.getElementById('leaderboard-list');
    container.innerHTML = '';
    
    const sorted = [...appState.children].sort((a, b) => b.tokens - a.tokens);
    
    sorted.forEach((child, index) => {
        const rank = index + 1;
        let medal = '⭐';
        if (rank === 1) medal = '🥇';
        else if (rank === 2) medal = '🥈';
        else if (rank === 3) medal = '🥉';
        
        const row = document.createElement('div');
        row.className = 'leaderboard-row';
        row.innerHTML = `
            <div class="rank">${medal}</div>
            <div class="name" onclick="openChildProfile('${child.id}')">${child.name}</div>
            <div class="score">💰 ${child.tokens}</div>
        `;
        container.appendChild(row);
    });
    
    const weeklyContainer = document.getElementById('weekly-stats');
    weeklyContainer.innerHTML = '<h3 style="color: #fff; margin-bottom: 15px;">📊 Weekly Performance</h3>';
    
    sorted.forEach((child, index) => {
        const rank = index + 1;
        let medal = '⭐';
        if (rank === 1) medal = '🥇';
        else if (rank === 2) medal = '🥈';
        else if (rank === 3) medal = '🥉';
        
        const weeklyQuests = child.questHistory.filter(q => {
            const qDate = new Date(q.approvedDate);
            const now = new Date();
            return (now - qDate) < 7 * 24 * 60 * 60 * 1000;
        }).length;
        
        const weeklyTokens = child.questHistory.filter(q => {
            const qDate = new Date(q.approvedDate);
            const now = new Date();
            return (now - qDate) < 7 * 24 * 60 * 60 * 1000;
        }).reduce((sum, q) => sum + q.tokensAwarded, 0);
        
        const weeklyTreasures = child.treasureHistory.filter(t => {
            const tDate = new Date(t.completionDate);
            const now = new Date();
            return (now - tDate) < 7 * 24 * 60 * 60 * 1000;
        }).length;
        
        const weeklyTime = child.treasureHistory.filter(t => {
            const tDate = new Date(t.completionDate);
            const now = new Date();
            return (now - tDate) < 7 * 24 * 60 * 60 * 1000;
        }).reduce((sum, t) => sum + t.baseTimerSeconds, 0) / 60;
        
        const weeklyBadges = child.badges.filter(b => {
            const bDate = new Date(b.earnedDate);
            const now = new Date();
            return (now - bDate) < 7 * 24 * 60 * 60 * 1000;
        }).length;
        
        const totalActivity = weeklyQuests + weeklyTokens + weeklyTreasures + weeklyBadges;
        const activityBar = '█'.repeat(Math.min(totalActivity, 10)) + '░'.repeat(Math.max(0, 10 - totalActivity));
        
        const card = document.createElement('div');
        card.style.cssText = 'background: #f0f0f0; padding: 12px; margin-bottom: 12px; border: 2px solid #1a1a1a;';
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div style="font-size: 18px;">${medal}</div>
                <div style="flex: 1;">
                    <div style="font-weight: bold; color: #2D5016;">${child.name}</div>
                </div>
            </div>
            <div style="font-size: 12px; margin-bottom: 8px; font-family: monospace; color: #FFD700; animation: activityPulse 1.5s infinite;">${activityBar}</div>
            <div style="font-size: 11px; color: #2D5016;">
                ⚔️ Quests: ${weeklyQuests} | 💰 Tokens: ${weeklyTokens} | 🎁 Treasures: ${weeklyTreasures} | ⏱️ Time: ${Math.round(weeklyTime)}m | 🏅 Badges: ${weeklyBadges}
            </div>
        `;
        weeklyContainer.appendChild(card);
    });
}

function renderPlay() {
    const container = document.getElementById('quests-list');
    container.innerHTML = '';
    
    appState.quests.forEach(quest => {
        const card = document.createElement('div');
        card.className = 'quest-card';
        card.innerHTML = `
            <span class="quest-type">${quest.type}</span>
            <div class="quest-name">${quest.name}</div>
            <div class="quest-tokens">Reward: ${quest.baseTokenReward} tokens</div>
            <div style="margin-top: 8px;">
                <button class="btn btn-small" onclick="requestQuestFromPlay('${quest.id}')">Assign</button>
                <button class="btn btn-small" onclick="deleteQuest('${quest.id}')">Delete</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderShop() {
    const container = document.getElementById('treasures-list');
    container.innerHTML = '';
    
    appState.treasures.forEach(treasure => {
        const card = document.createElement('div');
        card.className = 'treasure-card';
        card.innerHTML = `
            <div class="treasure-name">${treasure.name}</div>
            <div class="treasure-cost">Cost: ${treasure.costTokens} tokens | Duration: ${treasure.baseTimerSeconds / 60} min</div>
            <div style="margin-top: 8px;">
                <button class="btn btn-small" onclick="claimTreasure('${treasure.id}')">Claim</button>
                <button class="btn btn-small" onclick="deleteTreasure('${treasure.id}')">Delete</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderSettings() {
    const container = document.getElementById('settings-content');
    
    let html = `
        <h3 style="color: #fff; margin-bottom: 15px;">Age Multiplier Groups</h3>
    `;
    
    appState.ageGroups.forEach(group => {
        html += `
            <div style="background: rgba(0,0,0,0.2); padding: 10px; margin-bottom: 10px; border: 2px solid rgba(255,255,255,0.3);">
                <div style="color: #fff; margin-bottom: 8px; font-weight: bold;">${group.name} (${group.ageRangeDescription})</div>
                <select onchange="updateAgeGroupMultiplier('${group.id}', this.value)" style="padding: 5px; width: 100%;">
                    ${group.multiplierOptions.map(opt => `<option value="${opt}" ${opt === group.currentMultiplier ? 'selected' : ''}>${opt}x</option>`).join('')}
                </select>
            </div>
        `;
    });
    
    html += `
        <h3 style="color: #fff; margin-top: 20px; margin-bottom: 15px;">QML Tier Configuration</h3>
        <button class="btn" onclick="openEditSettingsModal()" style="width: 100%; margin-bottom: 15px;">Edit All Settings</button>
        
        <h3 style="color: #fff; margin-top: 20px; margin-bottom: 15px;">Badge Glossary</h3>
    `;
    
    const categories = ['Coal', 'Copper', 'Iron', 'Gold', 'Redstone', 'Diamond', 'Emerald', 'Ancient Debris'];
    categories.forEach(category => {
        const badges = appState.badges.filter(b => b.category === category);
        const oreIcon = getOreIcon(category);
        html += `
            <div style="margin-bottom: 15px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <img src="${oreIcon}" alt="${category}" style="width: 32px; height: 32px;">
                    <div style="color: #FFD700; font-weight: bold;">${category} Badges</div>
                </div>
                ${badges.map(badge => `
                    <div style="color: #fff; font-size: 11px; margin-left: 40px; margin-bottom: 4px;">
                        • ${badge.name}: ${badge.description}
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    html += `
        <button class="btn btn-danger" onclick="masterReset()" style="width: 100%; margin-top: 20px;">Master Reset</button>
    `;
    
    container.innerHTML = html;
}

// ============================================
// CHILD MANAGEMENT
// ============================================

let selectedAvatarId = null;

function createChild() {
    const name = document.getElementById('childName').value;
    const dob = document.getElementById('childDOB').value;
    const nfc = document.getElementById('childNFC').value;
    const qmlType = document.getElementById('childQMLType').value;
    
    if (!name || !dob || !selectedAvatarId) {
        alert('Please fill in all fields');
        return;
    }
    
    const newChild = {
        id: 'child_' + (appState.children.length + 1),
        name,
        dateOfBirth: dob,
        nfcCardId: nfc || null,
        avatarId: selectedAvatarId,
        tokens: 0,
        qmlType,
        currentQMLTier: 'Beginner',
        currentQMLProgress: 0,
        ongoingQuests: [],
        activeTreasures: [],
        badges: [],
        questHistory: [],
        treasureHistory: []
    };
    
    appState.children.push(newChild);
    saveData();
    closeModal('addChildModal');
    clearCreateChildForm();
    renderDashboard();
}

function openChildProfile(childId) {
    renderChildProfile(childId);
}

function backToDashboard() {
    document.getElementById('profile-screen').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
    renderDashboard();
}

function editChild(childId) {
    alert('Edit functionality to be implemented');
}

function deleteChild(childId) {
    if (confirm('Delete this child?')) {
        appState.children = appState.children.filter(c => c.id !== childId);
        saveData();
        backToDashboard();
    }
}

// ============================================
// QUEST MANAGEMENT
// ============================================

function createQuest() {
    const name = document.getElementById('questName').value;
    const type = document.getElementById('questType').value;
    const tokens = parseInt(document.getElementById('questTokens').value);
    
    if (!name || !tokens) {
        alert('Please fill in all fields');
        return;
    }
    
    const newQuest = {
        id: 'quest_' + (appState.quests.length + 1),
        name,
        type,
        baseTokenReward: tokens
    };
    
    appState.quests.push(newQuest);
    saveData();
    closeModal('addQuestModal');
    renderPlay();
}

function requestQuestFromPlay(questId) {
    const quest = appState.quests.find(q => q.id === questId);
    
    let html = `
        <div class="modal-header">Assign Quest: ${quest.name}</div>
        <div style="margin-bottom: 15px;">
    `;
    
    appState.children.forEach(child => {
        html += `
            <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" id="child_${child.id}" style="cursor: pointer;">
                <span style="color: #2D5016;">${child.name}</span>
            </label>
        `;
    });
    
    html += `
        </div>
        <div class="modal-buttons">
            <button class="btn" onclick="confirmMultiQuestAssignment('${questId}')">Assign</button>
            <button class="btn" onclick="closeModal('assignQuestModal')">Cancel</button>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.id = 'assignQuestModal';
    modal.className = 'modal active';
    modal.innerHTML = `<div class="modal-content">${html}</div>`;
    document.body.appendChild(modal);
}

function confirmMultiQuestAssignment(questId) {
    const selectedChildren = [];
    appState.children.forEach(child => {
        const checkbox = document.getElementById(`child_${child.id}`);
        if (checkbox && checkbox.checked) {
            selectedChildren.push(child.id);
        }
    });
    
    if (selectedChildren.length === 0) {
        alert('Please select at least one child');
        return;
    }
    
    const quest = appState.quests.find(q => q.id === questId);
    
    selectedChildren.forEach(childId => {
        const child = appState.children.find(c => c.id === childId);
        const instanceId = `${questId}_instance_${Date.now()}_${Math.random()}`;
        child.ongoingQuests.push({
            id: questId,
            name: quest.name,
            type: quest.type,
            baseTokenReward: quest.baseTokenReward,
            assignedDate: new Date().toISOString(),
            status: 'pending',
            instanceId
        });
    });
    
    saveData();
    const modal = document.getElementById('assignQuestModal');
    if (modal) {
        modal.remove();
    }
    renderPlay();
}

function approveQuest(childId, questIndex) {
    const child = appState.children.find(c => c.id === childId);
    const quest = child.ongoingQuests[questIndex];
    
    const age = calculateAge(child.dateOfBirth);
    const ageMultiplier = getAgeMultiplier(age);
    const qmlBonus = getQMLBonus(child.currentQMLTier) / 100;
    const tokensEarned = Math.round(quest.baseTokenReward * ageMultiplier * (1 + qmlBonus));
    
    child.tokens += tokensEarned;
    
    child.questHistory.push({
        id: quest.id,
        name: quest.name,
        type: quest.type,
        baseTokenReward: quest.baseTokenReward,
        tokensAwarded: tokensEarned,
        approvedDate: new Date().toISOString(),
        ageMultiplier,
        qmlBonus,
        status: 'approved'
    });
    
    child.ongoingQuests.splice(questIndex, 1);
    
    updateBadgeProgress(childId, 'quests_completed', 1);
    updateBadgeProgress(childId, 'tokens_earned', tokensEarned);
    
    saveData();
    renderChildProfile(childId);
}

function cancelQuest(childId, questIndex) {
    const child = appState.children.find(c => c.id === childId);
    child.ongoingQuests.splice(questIndex, 1);
    saveData();
    renderChildProfile(childId);
}

function deleteQuest(questId) {
    if (confirm('Delete this quest?')) {
        appState.quests = appState.quests.filter(q => q.id !== questId);
        saveData();
        renderPlay();
    }
}

// ============================================
// TREASURE MANAGEMENT
// ============================================

function createTreasure() {
    const name = document.getElementById('treasureName').value;
    const cost = parseInt(document.getElementById('treasureCost').value);
    const timer = parseInt(document.getElementById('treasureTimer').value);
    
    if (!name || !cost || !timer) {
        alert('Please fill in all fields');
        return;
    }
    
    const newTreasure = {
        id: 'treasure_' + (appState.treasures.length + 1),
        name,
        costTokens: cost,
        baseTimerSeconds: timer * 60,
        cooldownSeconds: 0
    };
    
    appState.treasures.push(newTreasure);
    saveData();
    closeModal('addTreasureModal');
    renderShop();
}

function claimTreasure(treasureId) {
    const treasure = appState.treasures.find(t => t.id === treasureId);
    
    let html = `
        <div class="modal-header">Claim: ${treasure.name}</div>
        <div style="margin-bottom: 15px;">
            <p style="color: #2D5016; margin-bottom: 10px;">Cost: ${treasure.costTokens} tokens</p>
    `;
    
    appState.children.forEach(child => {
        html += `
            <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                <input type="radio" name="claimChild" value="${child.id}" style="cursor: pointer;">
                <span style="color: #2D5016;">${child.name} (${child.tokens} tokens)</span>
            </label>
        `;
    });
    
    html += `
        </div>
        <div class="modal-buttons">
            <button class="btn" onclick="confirmClaimTreasure('${treasureId}')">Claim</button>
            <button class="btn" onclick="closeModal('claimTreasureModal')">Cancel</button>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.id = 'claimTreasureModal';
    modal.className = 'modal active';
    modal.innerHTML = `<div class="modal-content">${html}</div>`;
    document.body.appendChild(modal);
}

function confirmClaimTreasure(treasureId) {
    const selectedChild = document.querySelector('input[name="claimChild"]:checked');
    if (!selectedChild) {
        alert('Please select a child');
        return;
    }
    
    const childId = selectedChild.value;
    const child = appState.children.find(c => c.id === childId);
    const treasure = appState.treasures.find(t => t.id === treasureId);
    
    if (child.tokens < treasure.costTokens) {
        alert('Not enough tokens!');
        return;
    }
    
    child.tokens -= treasure.costTokens;
    
    child.activeTreasures.push({
        id: treasureId,
        name: treasure.name,
        costTokens: treasure.costTokens,
        timerSecondsRemaining: treasure.baseTimerSeconds,
        claimDate: new Date().toISOString(),
        completionDate: null
    });
    
    child.treasureHistory.push({
        id: treasureId,
        name: treasure.name,
        costTokens: treasure.costTokens,
        baseTimerSeconds: treasure.baseTimerSeconds,
        claimDate: new Date().toISOString(),
        completionDate: new Date().toISOString()
    });
    
    updateBadgeProgress(childId, 'treasures_claimed', 1);
    
    saveData();
    const modal = document.getElementById('claimTreasureModal');
    if (modal) {
        modal.remove();
    }
    renderShop();
}

function deleteTreasure(treasureId) {
    if (confirm('Delete this treasure?')) {
        appState.treasures = appState.treasures.filter(t => t.id !== treasureId);
        saveData();
        renderShop();
    }
}

// ============================================
// QML & PROGRESSION
// ============================================

function updateQMLProgress(childId, change) {
    const child = appState.children.find(c => c.id === childId);
    const maxValue = getQMLMaxValue(child.qmlType);
    
    child.currentQMLProgress = Math.max(0, Math.min(maxValue, child.currentQMLProgress + change));
    
    const newTier = getQMLTier(child.qmlType, child.currentQMLProgress);
    if (newTier !== child.currentQMLTier) {
        child.currentQMLTier = newTier;
        showTierMilestonePopup(child.name, newTier);
    }
    
    saveData();
    renderChildProfile(childId);
}

function changeQMLType(childId, newType) {
    const child = appState.children.find(c => c.id === childId);
    child.qmlType = newType;
    
    const newTier = getQMLTier(newType, child.currentQMLProgress);
    child.currentQMLTier = newTier;
    
    saveData();
    renderChildProfile(childId);
}

function getQMLMaxValue(qmlType) {
    return qmlType === 'Juz Amma' ? 37 : 30;
}

function getQMLTier(qmlType, progress) {
    const tiers = appState.qmlTiers[qmlType];
    for (let tier of tiers) {
        if (progress >= tier.minRequirement && progress <= tier.maxRequirement) {
            return tier.tierName;
        }
    }
    return 'Beginner';
}

function getQMLBonus(tierName) {
    const allTiers = [...appState.qmlTiers['Juz Amma'], ...appState.qmlTiers['Al-Quran']];
    const tier = allTiers.find(t => t.tierName === tierName);
    return tier ? tier.bonusPercentage : 0;
}

function showTierMilestonePopup(childName, tierName) {
    const popup = document.createElement('div');
    popup.className = 'tier-milestone-popup';
    popup.innerHTML = `
        <div class="tier-milestone-content">
            <div class="tier-milestone-title">🎉 Tier Unlocked! 🎉</div>
            <div class="tier-milestone-animation">
                <img src="/animations/ore-celebration-1.png" alt="Ore" style="width: 64px; height: 64px;">
            </div>
            <div class="tier-milestone-child">${childName}</div>
            <div class="tier-milestone-tier">${tierName}</div>
            <button class="tier-milestone-btn" onclick="this.parentElement.parentElement.remove()">Celebrate!</button>
        </div>
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        if (popup.parentElement) {
            popup.remove();
        }
    }, 5000);
}

// ============================================
// SETTINGS
// ============================================

function updateAgeGroupMultiplier(groupId, newMultiplier) {
    const group = appState.ageGroups.find(g => g.id === groupId);
    if (group) {
        group.currentMultiplier = parseFloat(newMultiplier);
        saveData();
    }
}

function openEditSettingsModal() {
    let html = '<div class="modal-header">Edit Settings</div>';
    
    html += '<h4 style="color: #2D5016; margin-top: 15px; margin-bottom: 10px;">Age Multiplier Groups</h4>';
    appState.ageGroups.forEach(group => {
        html += `
            <div style="margin-bottom: 10px;">
                <label style="display: block; color: #2D5016; font-weight: bold; margin-bottom: 5px;">${group.name}</label>
                <select onchange="updateAgeGroupMultiplier('${group.id}', this.value)" style="width: 100%; padding: 5px;">
                    ${group.multiplierOptions.map(opt => `<option value="${opt}" ${opt === group.currentMultiplier ? 'selected' : ''}>${opt}x</option>`).join('')}
                </select>
            </div>
        `;
    });
    
    html += '<h4 style="color: #2D5016; margin-top: 15px; margin-bottom: 10px;">QML Tiers - Juz Amma</h4>';
    appState.qmlTiers['Juz Amma'].forEach(tier => {
        html += `
            <div style="margin-bottom: 10px; padding: 8px; background: rgba(0,0,0,0.1); border: 1px solid #2D5016;">
                <div style="color: #2D5016; font-weight: bold; margin-bottom: 5px;">${tier.tierName}</div>
                <div style="display: flex; gap: 10px; margin-bottom: 5px;">
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 11px; color: #2D5016;">Min</label>
                        <input type="number" value="${tier.minRequirement}" style="width: 100%; padding: 4px;" disabled>
                    </div>
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 11px; color: #2D5016;">Max</label>
                        <input type="number" value="${tier.maxRequirement}" onchange="updateQMLTierMax('Juz Amma', '${tier.id}', this.value)" style="width: 100%; padding: 4px;">
                    </div>
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 11px; color: #2D5016;">Bonus %</label>
                        <input type="number" value="${tier.bonusPercentage}" onchange="updateQMLTierBonus('Juz Amma', '${tier.id}', this.value)" style="width: 100%; padding: 4px;">
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '<h4 style="color: #2D5016; margin-top: 15px; margin-bottom: 10px;">QML Tiers - Al-Quran</h4>';
    appState.qmlTiers['Al-Quran'].forEach(tier => {
        html += `
            <div style="margin-bottom: 10px; padding: 8px; background: rgba(0,0,0,0.1); border: 1px solid #2D5016;">
                <div style="color: #2D5016; font-weight: bold; margin-bottom: 5px;">${tier.tierName}</div>
                <div style="display: flex; gap: 10px; margin-bottom: 5px;">
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 11px; color: #2D5016;">Min</label>
                        <input type="number" value="${tier.minRequirement}" style="width: 100%; padding: 4px;" disabled>
                    </div>
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 11px; color: #2D5016;">Max</label>
                        <input type="number" value="${tier.maxRequirement}" onchange="updateQMLTierMax('Al-Quran', '${tier.id}', this.value)" style="width: 100%; padding: 4px;">
                    </div>
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 11px; color: #2D5016;">Bonus %</label>
                        <input type="number" value="${tier.bonusPercentage}" onchange="updateQMLTierBonus('Al-Quran', '${tier.id}', this.value)" style="width: 100%; padding: 4px;">
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
        <div class="modal-buttons" style="margin-top: 15px;">
            <button class="btn" onclick="closeModal('editSettingsModal')">Done</button>
            <button class="btn" onclick="closeModal('editSettingsModal')">Cancel</button>
        </div>
    `;
    
    const existingModal = document.getElementById('editSettingsModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'editSettingsModal';
    modal.className = 'modal active';
    modal.innerHTML = `<div class="modal-content" style="max-height: 90vh; overflow-y: auto;">${html}</div>`;
    document.body.appendChild(modal);
}

function updateQMLTierMax(qmlType, tierId, newMax) {
    const tier = appState.qmlTiers[qmlType].find(t => t.id === tierId);
    if (tier) {
        tier.maxRequirement = parseInt(newMax);
        saveData();
    }
}

function updateQMLTierBonus(qmlType, tierId, newBonus) {
    const tier = appState.qmlTiers[qmlType].find(t => t.id === tierId);
    if (tier) {
        tier.bonusPercentage = parseInt(newBonus);
        saveData();
    }
}

function masterReset() {
    if (confirm('Master Reset: This will reset tokens, history, and ALL badge progress for all children. Continue?')) {
        appState.children.forEach(child => {
            child.tokens = 0;
            child.ongoingQuests = [];
            child.activeTreasures = [];
            child.badges = [];
            child.questHistory = [];
            child.treasureHistory = [];
        });
        saveData();
        alert('Master reset complete!');
        renderDashboard();
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function getAgeMultiplier(age) {
    const group = appState.ageGroups.find(g => age >= g.ageRangeMin && age <= g.ageRangeMax);
    return group ? group.currentMultiplier : 1.0;
}

function getAvatarPath(avatarId) {
    const avatar = AVATAR_LIST.find(a => a.id === avatarId);
    return avatar ? avatar.path : '/avatars/avatar_m_1.png';
}

function getOreIcon(category) {
    const oreMap = {
        'Coal': '/badges/coal-ore.png',
        'Copper': '/badges/copper-ore.png',
        'Iron': '/badges/iron-ore.png',
        'Gold': '/badges/gold-ore.png',
        'Redstone': '/badges/redstone-ore.png',
        'Diamond': '/badges/diamond-ore.png',
        'Emerald': '/badges/emerald-ore.png',
        'Ancient Debris': '/badges/ancient-debris.png'
    };
    return oreMap[category] || '/badges/coal-ore.png';
}

function updateBadgeProgress(childId, type, amount) {
    const child = appState.children.find(c => c.id === childId);
    
    appState.badges.forEach(badgeDef => {
        if (badgeDef.type === type) {
            let currentProgress = 0;
            if (type === 'quests_completed') {
                currentProgress = child.questHistory.length;
            } else if (type === 'tokens_earned') {
                currentProgress = child.questHistory.reduce((sum, q) => sum + q.tokensAwarded, 0);
            } else if (type === 'treasures_claimed') {
                currentProgress = child.treasureHistory.length;
            }
            
            if (currentProgress >= badgeDef.targetValue) {
                const alreadyHas = child.badges.find(b => b.id === badgeDef.id);
                if (!alreadyHas) {
                    child.badges.push({
                        id: badgeDef.id,
                        category: badgeDef.category,
                        name: badgeDef.name,
                        description: badgeDef.description,
                        type: badgeDef.type,
                        targetValue: badgeDef.targetValue,
                        earnedDate: new Date().toISOString()
                    });
                }
            }
        }
    });
}

// ============================================
// AVATAR SELECTION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    const avatarGrid = document.getElementById('avatarGrid');
    if (avatarGrid) {
        AVATAR_LIST.forEach(avatar => {
            const option = document.createElement('div');
            option.className = 'avatar-option';
            option.id = `avatar_${avatar.id}`;
            option.onclick = () => selectAvatar(avatar.id);
            option.innerHTML = `<img src="${avatar.path}" alt="Avatar">`;
            avatarGrid.appendChild(option);
        });
    }
});

function selectAvatar(avatarId) {
    document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
    const option = document.getElementById(`avatar_${avatarId}`);
    if (option) {
        option.classList.add('selected');
    }
    selectedAvatarId = avatarId;
}
