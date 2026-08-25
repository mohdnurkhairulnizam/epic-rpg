from math import sin, pi
from pathlib import Path
import struct
import wave

sample_rate = 44100
seconds = 2.4
output = Path(__file__).resolve().parents[1] / "android" / "app" / "src" / "main" / "res" / "raw" / "epic_alarm.wav"
output.parent.mkdir(parents=True, exist_ok=True)

samples = []
for index in range(int(sample_rate * seconds)):
    time = index / sample_rate
    cycle = int(time / 0.6)
    phase = time % 0.6
    active = phase < 0.38
    if not active:
        samples.append(0)
        continue
    frequency = 880 if cycle % 2 == 0 else 660
    envelope = min(1.0, phase / 0.015) * min(1.0, (0.38 - phase) / 0.04)
    value = 0.24 * envelope * sin(2 * pi * frequency * time)
    samples.append(max(-32767, min(32767, int(value * 32767))))

with wave.open(str(output), "wb") as handle:
    handle.setnchannels(1)
    handle.setsampwidth(2)
    handle.setframerate(sample_rate)
    handle.writeframes(b"".join(struct.pack("<h", sample) for sample in samples))

print(output)
