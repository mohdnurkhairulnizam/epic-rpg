// Web counterpart to the Android pixel-adventure feedback: all tones are local, short, and controlled by the saved sound preference.
let context: AudioContext | null = null;

type Note = [frequency: number, duration: number, delay: number, wave?: OscillatorType, scale?: number];

function getPreferences() {
  try {
    const data = JSON.parse(localStorage.getItem("epic_rpg_data") || "{}");
    return { enabled: data.soundEnabled !== false, volume: Math.min(1, Math.max(0, Number.isFinite(data.soundVolume) ? data.soundVolume : 0.65)) };
  } catch {
    return { enabled: true, volume: 0.65 };
  }
}

function audio() {
  if (!context) context = new AudioContext();
  void context.resume();
  return context;
}

function play(notes: Note[]) {
  const settings = getPreferences();
  if (!settings.enabled) return;
  const ctx = audio();
  notes.forEach(([frequency, duration, delay, wave = "square", scale = 1]) => {
    const start = ctx.currentTime + delay;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(settings.volume * 0.16 * scale, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  });
}

export function registerWebFeedback() {
  window.addEventListener("epic-task-completed", () => play([[196, .07, 0], [523, .09, .06], [659, .1, .16], [784, .18, .27, "triangle", 1]]));
  window.addEventListener("epic-achievement-earned", () => play([[523, .07, 0, "triangle"], [659, .07, .08, "triangle"], [784, .08, .16, "triangle"], [1047, .22, .25, "sine", 1]]));
  window.addEventListener("epic-treasure-claimed", () => play([[988, .06, 0], [1319, .07, .08], [1760, .16, .17, "triangle", 1]]));
  window.addEventListener("epic-treasure-ended", () => play([[880, .15, 0, "sawtooth"], [660, .15, .22, "sawtooth"], [880, .15, .44, "sawtooth"], [660, .2, .66, "sawtooth", 1]]));
  window.addEventListener("epic-nfc-success", () => play([[740, .06, 0, "sine"], [988, .07, .07, "triangle"], [1480, .18, .15, "triangle", 1]]));
  window.addEventListener("epic-quest-assigned", () => play([[330, .06, 0], [494, .09, .08], [659, .14, .18, "triangle", 1]]));
  window.addEventListener("epic-quest-ready", () => play([[392, .08, 0], [523, .08, .09], [659, .14, .18, "triangle", 1]]));
  window.addEventListener("epic-item-created", () => play([[262, .06, 0], [330, .06, .07], [392, .12, .14, "triangle", 1]]));
  window.addEventListener("epic-action-reversed", () => play([[330, .09, 0, "triangle"], [247, .14, .11, "triangle", 1]]));
  window.addEventListener("epic-test-sound", () => play([[523, .07, 0, "triangle"], [659, .07, .08, "triangle"], [784, .08, .16, "triangle"], [1047, .22, .25, "sine", 1]]));
}
