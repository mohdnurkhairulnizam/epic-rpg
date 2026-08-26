// Stable v1.0 design: Minecraft-inspired pixel utility UI with forest green panels, yellow rules, squared controls, and direct family-task interactions.
import { useEffect } from "react";
import "../styles/epic-rpg-style.css";

// Quest Arena visual reminder: preserve the pixel-material hierarchy in global floating actions with a compact checkpoint marker and clear two-line label.

const invoke = (name: string, ...args: unknown[]) => {
  const fn = (window as any)[name];
  if (typeof fn === "function") fn(...args);
};

export default function Home() {
  useEffect(() => {
    const stableVersionKey = "epic_rpg_stable_checkpoint";
    if (localStorage.getItem(stableVersionKey) !== "b4b32e8") {
      localStorage.removeItem("epic_rpg_data");
      localStorage.setItem(stableVersionKey, "b4b32e8");
    }
    const init = (window as any).init;
    if (typeof init === "function") init();
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-block-rivets" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="header-brand-row">
            <span className="header-game-icon" aria-hidden="true">🎮</span>
            <div>
              <span className="header-kicker">FAMILY QUEST BOARD</span>
              <h1>EPIC RPG</h1>
              <p>Family Quest &amp; Treasure System</p>
            </div>
            <span className="header-ore-badge" aria-hidden="true">◆</span>
          </div>
        </div>

        <div id="dashboard" className="tab-content active">
          <h2>👨‍👩‍👧‍👦 Dashboard</h2>
          <div className="arena-screen-banner arena-dashboard-banner">
            <span>FAMILY BASE</span>
            <strong>Hero HQ</strong>
            <p>Choose a hero to review progress, quests, and rewards.</p>
          </div>
          <div id="children-list" className="children-container" />
          <button className="btn btn-add" onClick={() => invoke("openModal", "addChildModal")}>
            + Add Child
          </button>
        </div>

        <div id="leaderboard" className="tab-content">
          <h2>🏆 Leaderboard</h2>
          <div className="arena-screen-banner arena-leaderboard-banner">
            <span>WEEKLY RACE</span>
            <strong>Quest Arena</strong>
            <p>Recent activity decides this week’s champion.</p>
          </div>
          <div id="weekly-stats" className="weekly-stats-container" />
        </div>

        <div id="play" className="tab-content">
          <h2>⚔️ Quest</h2>
          <div className="arena-screen-banner arena-quest-banner">
            <span>MISSION BOARD</span>
            <strong>Choose the next quest</strong>
            <p>Assign a mission to one hero or build a family team.</p>
          </div>
          <div id="quests-list" className="quests-container" />
          <button className="btn btn-add" onClick={() => invoke("openModal", "addQuestModal")}>
            + Add Quest
          </button>
        </div>

        <div id="shop" className="tab-content">
          <h2>🎁 Shop</h2>
          <div className="arena-screen-banner arena-shop-banner">
            <span>TREASURE VAULT</span>
            <strong>Trade tokens for rewards</strong>
            <p>Every reward starts a timer and becomes part of the adventure.</p>
          </div>
          <div id="treasures-list" className="treasures-container" />
          <button className="btn btn-add" onClick={() => invoke("openModal", "addTreasureModal")}>
            + Add Treasure
          </button>
        </div>

        <div id="settings" className="tab-content">
          <h2>⚙️ Settings</h2>
          <div className="arena-screen-banner arena-settings-banner">
            <span>GAME MASTER</span>
            <strong>Shape the family rules</strong>
            <p>Configure rewards, alerts, sound feedback, and learning tiers.</p>
          </div>
          <div id="settings-content" />
        </div>

        <div id="profile-screen" className="tab-content">
          <button className="back-button" onClick={() => invoke("backToDashboard")}>
            ← Back to Dashboard
          </button>
          <div id="profile-content" />
        </div>
      </div>

      <button className="nfc-button" onClick={() => { invoke("openModal", "nfcScanModal"); invoke("startNfcScan", "open"); }} title="Scan NFC Card">
        <span className="nfc-button-sigil" aria-hidden="true">⌁</span>
        <span className="nfc-button-copy"><small>NFC CHECKPOINT</small><strong>Scan Card</strong></span>
      </button>

      <div className="bottom-tabs">
        <button className="tab-btn active" data-tab="dashboard" onClick={() => invoke("switchTab", "dashboard")}>
          <span className="tab-icon">🏠</span>
          <span>Dashboard</span>
        </button>
        <button className="tab-btn" data-tab="leaderboard" onClick={() => invoke("switchTab", "leaderboard")}>
          <span className="tab-icon">🏆</span>
          <span>Leaderboard</span>
        </button>
        <button className="tab-btn" data-tab="play" onClick={() => invoke("switchTab", "play")} aria-label="Quest">
          <span className="tab-icon">⚔️</span>
          <span className="tab-label">Quest</span>
        </button>
        <button className="tab-btn" data-tab="shop" onClick={() => invoke("switchTab", "shop")} aria-label="Shop">
          <span className="tab-icon">🎁</span>
          <span className="tab-label">Shop</span>
        </button>
        <button className="tab-btn" data-tab="settings" onClick={() => invoke("switchTab", "settings")}>
          <span className="tab-icon">⚙️</span>
          <span>Settings</span>
        </button>
      </div>

      <div id="addChildModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">Add New Child</div>
          <div className="form-group">
            <label>Child Name</label>
            <input type="text" id="childName" placeholder="Enter child's name" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" id="childDOB" />
          </div>
          <div className="form-group">
            <label>NFC Card ID (Optional)</label>
            <div className="nfc-input-group">
              <input type="text" id="childNFC" placeholder="Tap card or enter ID" />
              <button className="btn btn-small" onClick={() => invoke("detectNFCForAdd")}>Detect</button>
            </div>
          </div>
          <div className="form-group">
            <label>Select Avatar</label>
            <div id="avatarGrid" className="avatar-grid" />
          </div>
          <div className="form-group" style={{ marginTop: "30px" }}>
            <label style={{ marginTop: "20px", display: "block" }}>QML Type</label>
            <select id="childQMLType" defaultValue="Juz Amma">
              <option value="Juz Amma">Juz Amma</option>
              <option value="Al-Quran">Al-Quran</option>
            </select>
          </div>
          <div className="modal-buttons">
            <button className="btn" onClick={() => invoke("createChild")}>Create</button>
            <button className="btn" onClick={() => invoke("closeModal", "addChildModal")}>Cancel</button>
          </div>
        </div>
      </div>

      <div id="addQuestModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">Add New Quest</div>
          <div className="form-group">
            <label>Quest Name</label>
            <input type="text" id="questName" placeholder="Enter quest name" />
          </div>
          <div className="form-group">
            <label>Quest Type</label>
            <select id="questType" defaultValue="Quick Quest">
              <option value="Quick Quest">Quick Quest</option>
              <option value="Standard Mission">Standard Mission</option>
              <option value="Boss Fight">Boss Fight</option>
              <option value="Team Raid">Team Raid</option>
            </select>
          </div>
          <div className="form-group">
            <label>Base Tokens</label>
            <input type="number" id="questTokens" min="1" placeholder="Enter token reward" />
          </div>
          <div className="modal-buttons">
            <button className="btn" onClick={() => invoke("createQuest")}>Create</button>
            <button className="btn" onClick={() => invoke("closeModal", "addQuestModal")}>Cancel</button>
          </div>
        </div>
      </div>

      <div id="addTreasureModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">Add New Treasure</div>
          <div className="form-group">
            <label>Treasure Name</label>
            <input type="text" id="treasureName" placeholder="Enter treasure name" />
          </div>
          <div className="form-group">
            <label>Cost (Tokens)</label>
            <input type="number" id="treasureCost" min="1" placeholder="Enter token cost" />
          </div>
          <div className="form-group">
            <label>Timer (Minutes)</label>
            <input type="number" id="treasureTimer" min="1" placeholder="Enter timer in minutes" />
          </div>
          <div className="modal-buttons">
            <button className="btn" onClick={() => invoke("createTreasure")}>Create</button>
            <button className="btn" onClick={() => invoke("closeModal", "addTreasureModal")}>Cancel</button>
          </div>
        </div>
      </div>

      <div id="nfcScanModal" className="modal">
        <div className="modal-content nfc-scan-station">
          <div className="modal-header nfc-scan-station-header">
            <span><small>NFC CHECKPOINT</small>📱 Scan NFC Card</span>
            <button className="claim-treasure-close" onClick={() => invoke("closeModal", "nfcScanModal")} aria-label="Close NFC scan window">×</button>
          </div>
          <div id="nfc-status" className="nfc-status">Ready to scan...</div>
          <div className="nfc-input-group">
            <input type="text" id="nfcCardInput" placeholder="Tap NFC card or enter ID" autoFocus />
            <button className="btn" onClick={() => invoke("processNFCCard")}>Use ID</button>
          </div>
          <div id="nfc-result" className="nfc-result" />
          <div className="modal-buttons"><button className="btn" onClick={() => invoke("closeModal", "nfcScanModal")}>Close Scan Station</button></div>
        </div>
      </div>
    </>
  );
}
