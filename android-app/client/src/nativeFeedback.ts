// EPIC RPG Android feedback contract: short, non-intrusive pixel-arcade tones reinforce completion without adding external audio dependencies.
import { Capacitor } from "@capacitor/core";

let audioContext: AudioContext | null = null;
let audioUnlocked = false;

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

function playTone(frequency: number, duration: number, delay: number, volume: number, wave: OscillatorType = "square") {
  const context = getAudioContext();
  if (!context) return;
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = wave;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playPattern(pattern: Array<[number, number, number]>, wave: OscillatorType = "square") {
  const preferences = soundPreferences();
  if (!preferences.enabled) return;
  const context = getAudioContext();
  if (!context) return;
  void context.resume();
  pattern.forEach(([frequency, duration, delay]) => playTone(frequency, duration, delay, preferences.volume * 0.22, wave));
}

function playTaskCompleted() {
  playPattern([[523, 0.12, 0], [659, 0.12, 0.13], [784, 0.18, 0.26]]);
}

function playAchievement() {
  playPattern([[659, 0.1, 0], [784, 0.1, 0.11], [988, 0.1, 0.22], [1319, 0.28, 0.34]], "triangle");
}

function playTimerEnded() {
  playPattern([[880, 0.24, 0], [660, 0.24, 0.3], [880, 0.24, 0.6], [660, 0.24, 0.9]], "sawtooth");
}

function playNfcSuccess() {
  playPattern([[784, 0.1, 0], [988, 0.1, 0.11], [1319, 0.22, 0.22]], "triangle");
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
  window.addEventListener("epic-treasure-ended", playTimerEnded);
  window.addEventListener("epic-nfc-success", playNfcSuccess);
  window.addEventListener("epic-test-sound", playAchievement);
}
