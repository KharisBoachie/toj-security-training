---
name: hyperframes-video
description: Use for any video or motion work: reels, Shorts, talking-head edits, promo and recruitment films, animated graphics, captions and intros. Plans, edits, animates with HyperFrames and checks the render.
---

# HyperFrames video

Make and edit video the way a sharp human editor would: story first, every shot earning its place, sound planned on purpose, and the render checked frame by frame before anyone calls it done.

Adapted from HyperFrames by HeyGen (Apache-2.0) and Herk Edit Kit by Nate Herk (MIT). See Sources at the end.

## Pick the tools

- HyperFrames renders HTML compositions to video by seeking a paused GSAP timeline frame by frame, so every render comes out identical. Use it unless the person asks for another tool or a plain screen recording.
- Use the HyperFrames by HeyGen connector when it is connected. Otherwise use the CLI if it installs (`npx hyperframes`: `init`, `lint`, `check --json`, `snapshot`, `preview`, `render`, `transcribe`). Failing both, build the same HTML and GSAP composition, capture its frames with a headless browser and assemble them with FFmpeg. Say which path you used.
- For a project someone else sent, run the published CLI, never the project's own npm scripts.
- The person's footage stays untouched. Work on copies, keep each project in its own folder, and keep the editable source beside every render.
- Every frame follows impeccable-design, and every word on screen follows stop-slop-marketing.

## Plan before building

1. Read the brief, brand files and footage. Probe each input with ffprobe for duration, resolution, frame rate and audio.
2. A new landscape video is 1920x1080 at 30fps; a reel, Short or TikTok is 1080x1920. Recompose landscape material for vertical instead of squeezing it.
3. For any film over about 15 seconds that tells something, write three storylines that are three different films, in words only. The person picks, unless they asked for no stops.
4. Write a short spec: turn every adjective into a number (durations, sizes, colours, eases), list the shots by time, and name the defaults it bans.
5. Short-form has one first gate: in the first three seconds, is someone convinced they need to watch to the end? Plan the hook, one main open loop, the evidence, the payoff and the CTA, and close the promised payoff before the CTA.
6. Make a rough moving draft (an animatic) with speech and rough sound before polishing anything. Fix a predictable or confusing sequence at that stage.

## Edit talking-head footage

1. Transcribe with word timestamps (HyperFrames `transcribe`, Whisper, or a provider the person chooses). Explain any upload or cost before using a paid service. Read every line: Whisper invents "Thank you." over silence and repeats lines over a silent tail.
2. Cut silence between phrases, never inside one. Leave pauses under about 0.55 s alone. Trim longer pauses to a natural breath of about 0.14 to 0.24 s. Keep about 0.2 s before the first word and 0.3 s after the last. Never speed the voice up.
3. Find mistakes: stutters, repeated words, false starts and retakes. Keep the last clean take of each line. Review every candidate in context, because emphasis ("never, never") looks like a stutter to a script. Join two takes only where both sides are silent. Zero cuts is a valid result.
4. Lock the cut, then build captions, graphics and sound from its final timing map. Any later timing change rebuilds everything that depends on it.
5. Check lip sync across every cut and confirm no word is clipped at a join.

## Short-form house style (starting points; the brief wins)

- Speech starts within about 0.1 s and the file ends right after the last word. No intro bumper or outro card on a reel.
- Shots average about 1.1 to 1.4 s, none over about 2.8 s. The first cut lands at 0.6 to 1.0 s on the first charged word. Each spoken list item gets its own shot.
- Layouts on 1080x1920: split (B-roll on top, speaker below), full B-roll, and punch-ins on the speaker for pivots, emphasis and the CTA, with hard cuts between them. The speaker is never off screen for more than about 3.5 s.
- Frame 0 is the thumbnail and the hook: a face, the result or one bold line already on screen. Never black, never a logo.
- Keep words and the product inside the area TikTok, Reels and Shorts all leave clear: roughly 288 to 1248 px down and 120 to 888 px across on 1080x1920. Nothing meant to be read goes under 28 px.

## B-roll and assets

- Every shot moves. In order of preference: real footage of the thing named, a real screen recording zoomed into the part being discussed, an animated interface mock labelled as an example, AI video of a concrete metaphor, and crops of a real page under a second long on names and prices.
- Use each B-roll scene once per reel. A new crop or speed is the same scene.
- Never invent numbers, results, testimonials or a successful test, and never present a generated person as a real, named person.
- Take logos from the owner's files or official media kit and use them unaltered. With no verified asset, set the name in plain text.
- Show real people (staff, clients, service users) only when the person confirms consent. Keep credentials and private data out of every screen capture.

## Captions

- One to three words per chunk for high energy, three to five for conversation. Break at a sentence end, a pause of 150 ms or more, or the word limit. Show one group at a time.
- Open each group at or a couple of frames before its first word, and end it with a hard cut after its last word.
- One look for the whole video: the same box or treatment everywhere, readable on light and dark. Never white on a light background; measure the pixels behind each caption.
- Keep captions off the mouth and chin, especially in the first second, and inside the vertical safe zone.
- Colour a chunk only when the colour means something: a loss, the key idea, the action.

## Motion

- One idea per beat. An extended graphic beat needs an action with an outcome (a card opens to show the result, criteria turn into ticks), never a title card that settles and freezes.
- Ease by role. Arrivals land on a long ease-out (`expo.out`, `power4.out`), camera moves and colour floods ease both ways (`power2.inOut`), and exits accelerate (`power3.in`). The same 0.5 s `power2.out` on everything looks generated.
- Exits run 40 to 50% shorter than entrances. Start the next element when the previous one is 30 to 50% done. Stagger words 60 to 120 ms apart and list items 40 to 80 ms.
- A landed title holds dead still. A line to read holds about 0.5 s plus 0.3 s per word, and the last line holds at least 2 s.
- Use three to five transition kinds per film, each caused by something on screen: a zoom through a button, an object growing into the next scene, a whip, a colour flood. Skip breathing or floating loops on titles, bounce on UI, and one fade-and-slide-up for everything.
- Cut at the fastest frame of a move with matching direction on both sides. Cut on the beat and change layout on the bar.

## Sound

- A film over about 15 s that tells something gets a music bed and sounds on visible actions, unless the person asked for silence or it plays muted.
- When narrated, the voice is the clock. Without narration, the music is.
- Sit the bed about 11 dB under the voice (working range 9 to 14 dB), duck it under speech and fade it on a bar line. Never fade the last spoken word.
- Add effects only where something happens on screen: a soft whoosh on a real move, a damped tap when a logo lands, a dry click for UI, paper for documents, one warm tone for a tick. Skip laser zaps, pitch-drop plops and a whoosh on every cut. Rotate two or three takes of a repeated sound, and land its audible peak about a frame after its picture.
- Master around -14 to -16 LUFS with true peak at or below -1 dBTP. Measure the final encoded file, and say it was measured rather than heard.
- Music and effects need a licence that covers the use. Record where each came from.

## HyperFrames contract

- `index.html` is the root composition and mounts one scene per sub-composition from `compositions/`. Media and fonts live in `assets/`, referenced without a leading slash.
- Every timed element has `class="clip"`, `data-start` and `data-duration` in seconds. The root's `data-duration` sets the video's length.
- Each composition builds one paused GSAP timeline and registers it after its tweens: `window.__timelines["<composition id>"] = tl`. Pad each timeline to fill its slot (`tl.to({}, { duration: SLOT }, 0)`), or the scene flashes black.
- Keep it deterministic: no `Date.now()`, no unseeded `Math.random()`, no network fetches, no timers, no infinite repeats. Everything visible is a function of timeline time.
- Never tween `display`, `visibility` or `autoAlpha` on a `.clip`; animate a child. Animate transforms, never `left`, `top`, `width` or `height`. Never call `play()`, `pause()` or seek media. A `<video>` is `muted` unless it carries `data-has-audio="true"`; music and voice are separate `<audio>` elements, each with an `id`.
- Fonts beyond the bundled ones need an `@font-face` pointing at a file in `assets/fonts/`.
- Keep it editable: one scene per sub-composition, stable ids written in the HTML, and copy, brand colours and swappable media as variables.

## Check before delivery

- Lint and check the composition, then look at real frames: every shot at full size and at phone size, plus frame strips across every cut and transition.
- Step through the first three seconds frame by frame: the first frame, the hook, and the first spoken word staying clear.
- Check face framing, caption legibility, black frames, A/V sync, the voice-to-music balance and the last syllable.
- Write down what you checked, how, and what you could not check (for example, levels measured but not listened to). Never label a draft final or promise views.
- Deliver the final MP4, the editable project and a short list of edit decisions.

## Sources

Adapted, condensed and rewritten for claude.ai from:
- HyperFrames by HeyGen, https://github.com/heygen-com/hyperframes, Apache License 2.0: the hyperframes skill and its motion, captions, sound and vertical references.
- Herk Edit Kit by Nate Herk, https://github.com/nateherkai/herk-edit-kit, MIT licence: edit-video, cut-silences, cut-mistakes, short-form-edit, video-storytelling, the motion philosophy and the editing playbook.

Changes: merged into one skill and condensed; the HyperFrames usage beacon and telemetry, the plugin launcher, plan-usage checks, provider-specific scripts and validators are removed. Licence texts are in the source repositories.
