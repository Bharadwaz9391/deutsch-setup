"""Free, offline text-to-speech for the course audio (engine "local").

Called by scripts/make-course-audio.mjs with a JSON job list:
    [{"lang": "te" | "de", "rate": "te" | "de" | "deSlow", "text": "...", "out": "file.wav"}, ...]

Voices (downloaded once, no account needed):
  - Telugu: Meta MMS-TTS "facebook/mms-tts-tel" (CC-BY-NC 4.0 — fine for personal, non-commercial use)
  - German: Piper "de_DE-thorsten-high" (voice file in .venv-tts/voices)

Setup (once, from german-app/):
    python -m venv .venv-tts
    .venv-tts/Scripts/python -m pip install torch --index-url https://download.pytorch.org/whl/cpu
    .venv-tts/Scripts/python -m pip install transformers piper-tts
    .venv-tts/Scripts/python -m piper.download_voices de_DE-thorsten-high --data-dir .venv-tts/voices
"""

import json
import sys
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GERMAN_VOICE = ROOT / ".venv-tts" / "voices" / "de_DE-thorsten-high.onnx"
GERMAN_SPEED = {"deSlow": 1.3, "de": 1.08}  # Piper length_scale: bigger = slower

_te = None
_de = None


def telugu():
    global _te
    if _te is None:
        import torch
        from transformers import AutoTokenizer, VitsModel

        torch.manual_seed(7)  # MMS is slightly random; fixed seed = same audio every run
        tok = AutoTokenizer.from_pretrained("facebook/mms-tts-tel")
        model = VitsModel.from_pretrained("facebook/mms-tts-tel")
        model.eval()
        _te = (tok, model, torch)
    return _te


def german():
    global _de
    if _de is None:
        from piper import PiperVoice, SynthesisConfig

        _de = (PiperVoice.load(str(GERMAN_VOICE)), SynthesisConfig)
    return _de


def write_wav(path, samples_int16, rate):
    with wave.open(str(path), "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(rate)
        wf.writeframes(samples_int16.tobytes())


def say_telugu(text, out):
    tok, model, torch = telugu()
    inputs = tok(text, return_tensors="pt")
    with torch.no_grad():
        wav = model(**inputs).waveform.squeeze().numpy()
    peak = max(1e-6, float(abs(wav).max()))
    write_wav(out, (wav / peak * 0.9 * 32767).astype("int16"), model.config.sampling_rate)


def say_german(text, rate, out):
    voice, SynthesisConfig = german()
    with wave.open(str(out), "wb") as wf:
        voice.synthesize_wav(text, wf, syn_config=SynthesisConfig(length_scale=GERMAN_SPEED.get(rate, 1.08)))


def main():
    jobs = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    for i, job in enumerate(jobs, 1):
        if job["lang"] == "de":
            say_german(job["text"], job["rate"], job["out"])
        else:
            say_telugu(job["text"], job["out"])
        print(f"\r  made {i}/{len(jobs)}", end="", flush=True)
    print()


if __name__ == "__main__":
    main()
