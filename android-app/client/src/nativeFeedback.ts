// EPIC RPG audio contract: local Web Audio cue sets create a light Minecraft-inspired pixel adventure feel without adding media files or cloud dependencies.
import { Capacitor } from "@capacitor/core";

let audioContext: AudioContext | null = null;
let audioUnlocked = false;

type ToneStep = [frequency: number, duration: number, delay: number, wave?: OscillatorType, volumeScale?: number];

function soundPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem("epic_rpg_data") || "{}");
    return {
      enabled: saved.soundEnabled !== false,
      volume: Math.min(1, Math.max(0, Number.isFinite(saved.soundVolume) ? saved.soundVolume : 0.65)),
    };
  } catch {
    return { enabled: true, volume: 0.65 };
  }
}

function getAudioContext() {
  if (!audioContext) {
    const AudioContextConstructor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return null;
    audioContext = new AudioContextConstructor();
  }
  return audioContext;
}

function playTone(frequency: number, duration: number, delay: number, volume: number, wave: OscillatorType = "square", glideTo?: number) {
  const context = getAudioContext();
  if (!context) return;
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = wave;
  oscillator.frequency.setValueAtTime(frequency, start);
  if (glideTo) oscillator.frequency.exponentialRampToValueAtTime(glideTo, start + Math.max(0.04, duration * 0.85));
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.025);
}

function playNoiseBurst(delay: number, duration: number, volume: number) {
  const context = getAudioContext();
  if (!context) return;
  const start = context.currentTime + delay;
  const buffer = context.createBuffer(1, Math.max(1, Math.ceil(context.sampleRate * duration)), context.sampleRate);
  const channel = buffer.getChannelData(0);
  for (let index = 0; index < channel.length; index += 1) channel[index] = (Math.random() * 2 - 1) * (1 - index / channel.length);
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = buffer;
  filter.type = "highpass";
  filter.frequency.setValueAtTime(850, start);
  gain.gain.setValueAtTime(Math.max(0.0001, volume), start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  source.start(start);
  source.stop(start + duration + 0.02);
}

function playPattern(pattern: ToneStep[]) {
  const preferences = soundPreferences();
  if (!preferences.enabled) return;
  const context = getAudioContext();
  if (!context) return;
  void context.resume();
  pattern.forEach(([frequency, duration, delay, wave = "square", volumeScale = 1]) => {
    playTone(frequency, duration, delay, preferences.volume * 0.2 * volumeScale, wave);
  });
}

function playTaskCompleted() {
  // Quest complete: firm step, then a three-note victory climb.
  playPattern([[196, 0.075, 0, "square", 0.65], [523, 0.09, 0.055], [659, 0.11, 0.155], [784, 0.2, 0.275, "triangle", 1]]);
  playNoiseBurst(0, 0.04, soundPreferences().volume * 0.045);
}

function playAchievement() {
  // Level-up: sparkling major arpeggio with a bright enchanted finish.
  playPattern([[523, 0.07, 0, "triangle", 0.7], [659, 0.07, 0.075, "triangle", 0.75], [784, 0.08, 0.15, "triangle", 0.85], [1047, 0.1, 0.23, "triangle", 0.95], [1319, 0.26, 0.33, "sine", 1]]);
}

function playTreasureClaimed() {
  // Coin pickup: two quick metallic pings, then a glittering high note.
  playPattern([[988, 0.06, 0, "square", 0.7], [1319, 0.065, 0.075, "square", 0.8], [1760, 0.16, 0.16, "triangle", 1]]);
}

function playTimerEnded() {
  // Redstone-style alarm: urgent alternating call, retained for timer completion.
  playPattern([[880, 0.16, 0, "sawtooth", 0.8], [220, 0.1, 0, "square", 0.3], [660, 0.16, 0.23, "sawtooth", 0.8], [196, 0.1, 0.23, "square", 0.3], [880, 0.16, 0.46, "sawtooth", 0.9], [660, 0.22, 0.69, "sawtooth", 1]]);
}

function playNfcSuccess() {
  // Enchantment chime for a successful NFC card read.
  playPattern([[740, 0.06, 0, "sine", 0.65], [988, 0.07, 0.07, "triangle", 0.8], [1480, 0.18, 0.15, "triangle", 1]]);
}

function playQuestAssigned() {
  // Mission accepted: a compact wooden click and ascending command tone.
  playNoiseBurst(0, 0.05, soundPreferences().volume * 0.05);
  playPattern([[330, 0.06, 0.015, "square", 0.55], [494, 0.1, 0.09, "square", 0.8], [659, 0.14, 0.19, "triangle", 0.9]]);
}

function playQuestReady() {
  // The child has marked a quest complete and it is ready for approval.
  playPattern([[392, 0.08, 0, "square", 0.7], [523, 0.08, 0.09, "square", 0.8], [659, 0.14, 0.18, "triangle", 0.95]]);
}

function playItemCreated() {
  // Crafting table confirmation for a new quest or treasure preset.
  playPattern([[262, 0.055, 0, "square", 0.55], [330, 0.055, 0.06, "square", 0.6], [392, 0.12, 0.12, "triangle", 0.75]]);
}

function playActionReversed() {
  // Soft low selection sound for cancelling or returning a quest to ongoing.
  playPattern([[330, 0.09, 0, "triangle", 0.55], [247, 0.14, 0.1, "triangle", 0.65]]);
}

export function registerNativeFeedback() {
  if (Capacitor.getPlatform() !== "android") return;

  const unlock = () => {
    const context = getAudioContext();
    if (context && !audioUnlocked) {
      audioUnlocked = true;
      void context.resume();
    }
  };
  document.addEventListener("pointerdown", unlock, { passive: true });
  document.addEventListener("touchstart", unlock, { passive: true });

  window.addEventListener("epic-task-completed", playTaskCompleted);
  window.addEventListener("epic-achievement-earned", playAchievement);
  window.addEventListener("epic-treasure-claimed", playTreasureClaimed);
  window.addEventListener("epic-treasure-ended", playTimerEnded);
  window.addEventListener("epic-nfc-success", playNfcSuccess);
  window.addEventListener("epic-quest-assigned", playQuestAssigned);
  window.addEventListener("epic-quest-ready", playQuestReady);
  window.addEventListener("epic-item-created", playItemCreated);
  window.addEventListener("epic-action-reversed", playActionReversed);
  window.addEventListener("epic-test-sound", playAchievement);
}
