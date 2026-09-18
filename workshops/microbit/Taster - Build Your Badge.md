# Taster: Build Your Badge

A free 50-minute live online micro:bit workshop for ages 8-11. Every child leaves with a
working, personalised program they wrote themselves, and every parent leaves knowing what
[Maker Realm](../../curriculum/001-maker-kilo/README.md)
is and how to book it.

|                     |                                                                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ages**            | 8-11                                                                                                                                                                                              |
| **Length**          | 50 minutes, door to door. The child-facing portion is the first 45.                                                                                                                               |
| **Format**          | Live online, video call. Cameras optional, chat essential.                                                                                                                                        |
| **Group size**      | 12-25 children. Above 25, add a second chat moderator.                                                                                                                                            |
| **Staffing**        | Host + chat moderator. Two people. Never run this solo.                                                                                                                                           |
| **Platform**        | [makecode.microbit.org](https://makecode.microbit.org) — free, browser-based, no login, no download.                                                                                              |
| **Hardware**        | None for families. The host holds a physical micro:bit v2 on camera.                                                                                                                              |
| **Outcome**         | A personalised badge program running in the MakeCode simulator.                                                                                                                                   |
| **Conversion goal** | Maker Realm Quest `00` (Signals) bookings taken by the stated deadline.                                                                                                                                                |
| **Slides**          | [Build Your Badge — presenter deck](https://docs.google.com/presentation/d/1ef7cu59UF1lYFKm8gXgaEEuVgMS6zQOOngpAWlY_pJ4/edit) · 24 slides. Source: `Build Your Badge - deck.pptx` in this folder. |

## Why this shape works

The child never waits for hardware and never hits a login wall, so the gap between "joined
the call" and "made something light up" is under twelve minutes. The simulator is the whole
platform, exactly as it is at
[Explorer realm](../../curriculum/000-explorer-byte/README.md),
which means a family can try the program before buying anything. The blocks used here are the
same blocks used on real micro:bit hardware at Maker Realm, so nothing learned in this session
is thrown away.

## Learning outcomes

By the end, each child can:

- Name at least three things a micro:bit can sense.
- Explain that a program does nothing until an **event** fires it.
- Place a block inside the correct event container and predict what will happen before running it.
- Describe one bug they hit and what they changed to fix it.

Aligned to CSTA 1B-AP-10 (control structures including event handlers) and 1B-AP-15
(testing and debugging).

## The reference program

Build exactly this, in this order. Every block is in the standard toolbox — no extensions.

| Order | Event block (category) | Inside it | What the child sees |
| --- | --- | --- | --- |
| 1 | `on start` (Basic) | `show icon 🙂` | The face appears the moment the program runs. |
| 2 | `on button A pressed` (Input) | `show string "D"` | Their initial scrolls across the LEDs. |
| 3 | `on button B pressed` (Input) | `play sound giggle until done` (Music) | A sound plays on press. |
| 4 | `on logo pressed` (Input) | `show icon ♥` | Touching the gold logo shows a heart. |

Notes for the host:

- `on logo pressed` and `play sound` are **micro:bit v2** features. The simulator defaults to
  v2, so they work out of the box. Do not switch the simulator to v1.
- `show string` scrolls; `show icon` holds. That difference is worth naming out loud — it is
  the first time most children notice that two blocks that both "put something on the screen"
  behave differently.
- Keep the whole program to four event blocks. Resist adding a fifth. The empty space is what
  the children fill in the next segment.

## The deck

[**Build Your Badge — presenter deck**](https://docs.google.com/presentation/d/1ef7cu59UF1lYFKm8gXgaEEuVgMS6zQOOngpAWlY_pJ4/edit) — 24 slides, one per beat of the agenda below.

**The source file is `Build Your Badge - deck.pptx`, in this folder**, and the link above is
that file uploaded to Google Slides. Keep the `.pptx` as the master copy: edit it and
re-upload rather than editing in both places, or the two will drift.

### Slide map

| Slides | Beat | Time block |
| --- | --- | --- |
| 1 | Title — leave up while children arrive | before 0:00 |
| 2 | Names and ages in chat | 0:00-0:03 |
| 3 | "What do you think this can sense?" | 0:03-0:09 |
| 4-8 | The five senses, revealed one per slide | 0:03-0:09 |
| 9 | "It does nothing until you tell it what to do" | 0:03-0:09 |
| 10 | Open the editor | 0:09-0:21 |
| 11-14 | The four badge blocks, one per build step | 0:09-0:21 |
| 15-16 | The deliberate bug, then the fix | 0:09-0:21 |
| 17 | Core / Stretch / Boss | 0:21-0:31 |
| 18-19 | Show & tell, then shoutouts | 0:31-0:38 |
| 20-21 | Mission `110` clip, then Demo Day | 0:38-0:44 |
| 22-23 | Maker Realm, then the price | 0:44-0:49 |
| 24 | Say cheese | 0:49-0:50 |

Anything that needs to land in stages is built as consecutive slides rather than as an
animation, so it survives the trip through Google Slides intact and works the same from a
clicker, a keyboard or a trackpad. The senses appear one per slide as children guess them; the
four blocks land one per build step; the bug slide holds the fix back until you have sat in
the failure; and the price stays off screen until slide 23, so you cannot say it early.

**Speaker notes are on every slide** — the exact say-this lines and watch-fors from this plan,
so the deck is self-sufficient if someone else has to run it. Open Presenter View (Google
Slides: the arrow beside **Slideshow** → **Presenter view**) on your own screen and share the
presentation window only.

### Three things to do after uploading

1. **Fill the placeholders on slide 23** — `[PRICE]`, `[CODE]`, `[DEADLINE]`.
2. **Drop the mission `110` clip into slide 20**, over the dashed placeholder box (Insert → Video).
   If you would rather play it from a separate tab, share that tab **with audio**.
3. **Sort out a countdown for slide 17.** Neither PowerPoint nor Google Slides has one built
   in: run a timer app on your second screen, or insert a 10-minute countdown video onto the
   slide. The plan calls the clock at 0:26, 0:29 and 0:30 either way.

The deck uses **Poppins** and **Nunito**, matching the ByteBear site. Both are Google Fonts, so
Google Slides renders them correctly on upload; desktop PowerPoint will substitute unless the
fonts are installed locally.

## At a glance

| Time | Beat | Child is... |
| --- | --- | --- |
| 0:00-0:03 | Welcome & hook | Typing name and age in chat |
| 0:03-0:09 | Meet your micro-computer | Guessing what the board can sense |
| 0:09-0:21 | Live code-along: build your badge | Building alongside the host |
| 0:21-0:31 | Your turn: make it yours | Working independently on Core / Stretch / Boss |
| 0:31-0:38 | Show & tell + shoutouts | Presenting, or watching peers present |
| 0:38-0:44 | Sneak peek: where Quest `00` ends | Watching the aspirational demo |
| 0:44-0:49 | The offer | Parent-facing; children idle or still tinkering |
| 0:49-0:50 | Send-off | Holding up their badge for the group photo |

---

## 0:00-0:03 — Welcome & hook

**Goal:** Every child has typed something in chat within 90 seconds. A child who has typed
once will type again; a child who stays silent for ten minutes usually stays silent.

**On screen:** ByteBear mascot slide. Nothing else. No agenda slide, no housekeeping wall.

**Host:** High energy, standing if possible.

> "In the next 45 minutes you're going to build something that actually lights up and does
> what YOU tell it to. Not a video. Not a worksheet. A real program. Ready?"
>
> "First thing — type your first name and your age in the chat. Go."

**Chat moderator:** Greets every single name by name as it lands. "Hey Maya! Hi Jonah!" This
is the highest-leverage thirty seconds of the moderator's whole session.

**Watch for:** A silent chat at 0:02. If it happens, drop to a yes/no prompt — "Type 1 if you
can hear me, type 2 if it's fuzzy" — which is easier to answer than a name.

## 0:03-0:09 — Meet your micro-computer

**Goal:** Establish that this is a real object with real senses, before any code appears.

**Host:** Hold the physical micro:bit v2 up to camera. Get close enough that the LED grid and
the two buttons are clearly visible.

> "This is a micro:bit. It's smaller than a credit card, it costs less than a pizza, and it
> can see, hear and feel things. It's basically a robot brain."

Run the reveal as a guessing game rather than a list:

> "Type in the chat — what do you think this thing can sense? Guess anything."

Reveal one at a time, with a reaction each time a child guesses it. Keep a small sound effect
or a slide flip per reveal.

| Sense | Reveal line | Live proof on camera |
| --- | --- | --- |
| Light | "It can see how bright the room is." | Cup your hand over the board and let the LEDs respond. |
| Sound | "It has a microphone — it can hear you clap." | Clap once. |
| Motion | "It knows when it's tilted, shaken or dropped." | Shake it. |
| Touch | "The gold logo at the top is a touch sensor." | Touch the logo. |
| Temperature | "And it knows how warm the room is." | Hold it in a closed fist. |

**Landing line, say it exactly:**

> "Here's the thing though — it does absolutely nothing until somebody tells it what to do.
> That somebody is about to be you."

**Watch for:** Do not let this run past 0:09. It is the segment that overruns most often
because the guessing game is genuinely fun. Set a visible timer for yourself.

## 0:09-0:21 — Live code-along: build your badge

**Goal:** Every child has a running program with four events by 0:21. This is the segment the
whole workshop is built around; protect its twelve minutes.

**Chat moderator posts the link now** (snippet C1 below) and keeps re-posting it every ~2
minutes for late joiners.

**Host:** Share screen showing MakeCode at a readable zoom. Increase the browser zoom to
125-150% before you start — the default block size is too small to follow on a phone or a
split screen.

Build in this rhythm, one block at a time:

1. **"Everyone open makecode.microbit.org and click New Project."** Wait. Do not talk over
   this. Ask for a "1" in chat from everyone who can see the yellow `on start` block.
2. **`on start` → `show icon`.** Press the simulator's run. "That's a program. You've written
   a program. It's been ninety seconds."
3. **`on button A pressed` → `show string`,** change the text to their own initial. "Click
   the A button on the simulator, not on your keyboard."
4. **`on button B pressed` → `play sound`.** Remind everyone to unmute their own device
   volume — a silent result here reads as a bug to an eight-year-old.
5. **`on logo pressed` → `show icon heart`.** "Remember the gold logo we touched? Same thing,
   but on screen."

### The deliberate mistake

Around 0:15, when the `play sound` block comes out, drop it into `on start` instead of
`on button B pressed`. Run it. The sound fires once at launch and button B does nothing.

Then think out loud:

> "Hang on. I pressed B and nothing happened. But the sound definitely played... it played
> when the program started. So the block isn't broken — I put it in the wrong container.
> The computer did exactly what I told it, not what I meant."
>
> "See, even I mess this up. That's called debugging, and it's honestly half of what we do
> together in the real class. Anyone who's ever fixed something that was broken — you're
> already good at this."

Drag it into `on button B pressed`. Re-run. Celebrate.

**Why this specific bug:** it teaches the single idea the rest of the session depends on — a
block does nothing on its own; it only runs when the event around it fires. Children who see
this once make the mistake far less often in the independent segment.

**Watch for:** Children who lost their project by refreshing. Tell everyone up front that
MakeCode auto-saves in the browser, so a refresh is recoverable — click the project name on
the home screen.

## 0:21-0:31 — Your turn: make it yours

**Goal:** Ten minutes of real independent work with visible progress for every ability level.
Nobody finishes with nothing; nobody finishes bored.

**On screen:** A single slide with all three tiers and a countdown timer. Soft background
music. Host stops presenting and works the chat.

| Tier | Challenge | Blocks needed |
| --- | --- | --- |
| 🟢 **Core** | Your full name scrolls when you press A. | `show string` with your name typed in |
| 🟡 **Stretch** | Your own 5x5 drawing when you press B. | `show leds` — click squares to draw |
| 🔴 **Boss** | A 3-frame animation with a sound. | Three `show leds` + `pause (200)` between each + `play sound` |

**Say this when you set them off:**

> "Green is the goal. Yellow is if you finish green. Red is if you want me to be impressed.
> You do not have to reach red — red is what Session 2 of the real class looks like."

**Host and moderator both work the chat for the full ten minutes.** Rules of engagement:

- Answer with a **question first**: "What did you expect it to do, and what did it do?" That
  is the same prompt used throughout the ByteBear curriculum, and it is a better teacher than
  the answer is.
- Never type a solution longer than one block. If it takes more, offer a 30-second breakout
  or ask them to share their screen.
- Give a public shout for a fix, not just a finish: "Sam found their own bug — that's the
  hardest skill in the room."

**Call the clock at 0:26, 0:29 and 0:30** ("five minutes", "two minutes", "sixty seconds —
get it running, don't start something new").

**Watch for:**

- **The child stuck at zero.** By 0:24, if the moderator has not seen anything from a named
  child, DM them directly. Nine times out of ten it is the simulator scrolled off screen or a
  blank project.
- **`show leds` overwhelm.** Twenty-five clickable squares freezes some children. Tell them
  to draw a letter, not a picture.
- **Animation without pauses.** The classic Boss-tier bug: three `show leds` in a row with no
  `pause`, so only the last one appears. Let them hit it, then ask what's missing — do not
  pre-empt it.

## 0:31-0:38 — Show & tell + shoutouts

**Goal:** Social proof, in the children's own voices, in front of the parents who are
listening off camera. This segment sells the program more than the offer slide does.

**Format:** 3-4 children, roughly 90 seconds each. The moderator picks them **during** the
previous segment, not now — pick a Core finisher, a Stretch finisher, and one child who
visibly fixed a bug. Warn each one by DM: *"Would you like to show yours at 0:31? Say yes or
no, both are totally fine."* Never put a child on the spot live.

**Host asks each presenter two questions only:**

1. "What does it do?"
2. "What was the tricky bit?"

Then give a **specific** callout — never a generic "great job":

> "I love that you made it flash before the name scrolls — that's a timing decision, and you
> made it on purpose."

**Award 2-3 non-competitive shoutouts** at the end of the segment. Announce them as
descriptions, not rankings, and give every one to a different child:

- **Most Creative** — the most surprising idea.
- **Best Bug Fix** — the child who found and fixed their own problem.
- **Most Colourful** — the busiest, brightest LED design.

**Screen-share fallback:** if a child cannot share their screen, have them hold their device
up to their camera, or have the host rebuild their idea live in ten seconds and credit them.
Do **not** ask children to generate a MakeCode public share link — it publishes their project
to a public URL, and that is not a decision to ask an eight-year-old to make on a live call.

## 0:38-0:44 — Sneak peek: where Quest `00` ends

**Goal:** Show the ceiling *of the thing being sold*. Everything in this segment is Quest `00`
material — the micro:bit on its own, no add-on kit — so a parent who books gets exactly what
they were shown. This is the aspirational hook, not the sales pitch. No prices, no dates, no
urgency in this segment.

**Run order:**

1. **Play the 60-90 second mission `110` clip** — the overnight investigation, where a child
   leaves the micro:bit running in their bedroom all night logging light, temperature and
   sound, then opens the chart the next morning. Show the chart on screen with the child
   narrating what they found. Use real footage of real children if you have it; the fallback
   is the host opening a saved log and reading it live.
2. **Then describe mission `111` — Demo Day — over a photo of a showcase call:**

> "That badge you just made? That's the first session. By session seven your micro:bit is
> sitting in your bedroom all night on its own, writing down what the light and the
> temperature and the noise are doing, and in the morning you open the chart and find out
> what actually happens in your room while you're asleep. And in the very last session you
> build your own invention — a reaction timer, a step counter, a dice, whatever you pick —
> and you show it to everybody on Demo Day and tell them about the one bug that nearly beat
> you."

3. **Bring it back to what they just did:**

> "Everything in that clip is built on exactly what you did in the last half hour — an event,
> a block inside it, and a bug you fixed."

**Watch for:** the temptation to start pitching here. Do not. The gap between the demo and the
offer is what makes the offer land. Also resist reaching for the rover or the four-houses
build to get a bigger reaction — those are later quests with their own kits, and promising
them here sells something the family is not about to buy.

## 0:44-0:49 — The offer

**Goal:** Parents know what it is, what it costs, when it closes, and where to click. Once.

**Audience shift:** say so explicitly — *"This next bit is for the grown-ups; kids, you can
keep tinkering."* Leave MakeCode open on screen so children have something to do.

**The one-breath explanation:**

> "What we just did is the taster. The full thing is **Signals**, the first quest of Maker
> Realm: eight live missions,
> small pods of four children, and one simple kit shipped to your door — a micro:bit, a
> battery pack and a cable, nothing to buy separately. Ages 8 to 11. Every session ends with
> something that works, and the last one is Demo Day."

**Then the offer, stated once, clearly, and not repeated:**

> "For families on this workshop only, it's [PRICE] with the code [CODE], and that closes
> [DEADLINE]. The link is in the chat."

**Chat moderator posts snippet C4 the moment the host says "the link is in the chat"** — not
before, not thirty seconds after.

**Then stop selling and take questions.** Parent Q&A for the remaining minute or two. The
three questions that always come:

| Question | Answer |
| --- | --- |
| "Does my child need the hardware to start?" | No. Everything runs in the browser simulator; the kit arrives before the session that needs it. |
| "What if they miss a session?" | Sessions are recorded, and pod leaders catch children up at the start of the next one. |
| "Is it too advanced / too easy for my child?" | Every session has the same Core / Stretch / Boss structure you just watched. |

**Do not:** re-explain the offer, extend the deadline live, or answer a pricing question with
a discount. If a family needs something bespoke, take it to email.

## 0:49-0:50 — Send-off

> "Last thing — everyone hold up your screen with your badge on it. Ready? Say cheese!"

**Screenshot the gallery view.** Consent for this must already be on file from the booking
form; the on-call ask is a courtesy reminder, not the consent itself. Any family who declined
gets their tile cropped out before the image is used anywhere.

Thank the families by name where you can. **End on time.** A workshop that runs to 0:57
teaches parents that your sessions overrun.

---

## Chat snippet bank

Pre-written, pasted by the moderator. Keep these in a text file, not in memory.

- **C1 (0:09, then every 2 min):** `Here's the editor — no login needed: https://makecode.microbit.org  → click "New Project" → name it "My Badge"`
- **C2 (0:10):** `Stuck? Type STUCK in the chat and one of us will come to you. Nobody gets left behind.`
- **C3 (0:21):** `🟢 Core: your name scrolls on A. 🟡 Stretch: your own drawing on B. 🔴 Boss: 3-frame animation + a sound. Green is the goal!`
- **C4 (0:46, on cue):** `Maker Realm · Quest 00 "Signals" — 8 live missions, pods of 4, kit shipped to your door, ages 8-11. Book here: [LINK] · Workshop code: [CODE] · Closes [DEADLINE]`
- **C5 (0:49):** `Thanks for building with us! Questions any time: [EMAIL]. The recording and a step-by-step of today's badge go out tonight.`
- **C6 (as needed):** `Lost your project? It auto-saves — go back to makecode.microbit.org and it'll be on the home screen.`
- **C7 (as needed):** `No sound? Check your own device volume, and make sure the sound block is inside "on button B pressed" and not "on start".`

## Before the workshop

| When     | Who  | What                                                                                                                          |
| -------- | ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| T-7 days | Ops  | Confirmation email: date, link, and **"a laptop, desktop or tablet — please not a phone, the blocks are too small to drag."** |
| T-1 day  | Ops  | Reminder email with the same device line and a one-click test link to makecode.microbit.org.                                  |
| T-1 day  | Host | Build the reference program end to end in a fresh browser profile. Confirm sound plays.                                       |
| T-1 day  | Host | Click through all 24 slides. Confirm the offer-slide placeholders are filled and the clip plays.                                 |
| T-30 min | Host | Physical micro:bit charged/powered and framed on camera. Slides loaded. Timer app ready.                                      |
| T-15 min | Both | Open the room. Music on. Moderator greets early arrivals and walks them to the editor.                                        |
| T-5 min  | Both | Agree the show & tell picks will be DM'd during 0:21-0:31, and who calls the clock.                                           |

**Host kit:** physical micro:bit v2, [the deck](https://docs.google.com/presentation/d/1ef7cu59UF1lYFKm8gXgaEEuVgMS6zQOOngpAWlY_pJ4/edit) open in Presenter View in its own
window, a second screen or printed run sheet, a countdown timer, and the mission `110` clip
queued and volume-checked (share that tab *with audio* when you play it).

## Contingencies

| If | Then |
| --- | --- |
| A child cannot load MakeCode | Moderator DMs snippet C1; if it still fails, pair them to watch the host's screen and promise them the step-by-step email. Do not stall the room. |
| The host's screen share dies | Moderator takes over narration from their own MakeCode window. Agree this handoff before the session. |
| The mission `110` clip won't play | Host opens a saved overnight log and reads the chart live, or narrates the Demo Day photo. Never burn 90 seconds troubleshooting a video. |
| Nobody volunteers for show & tell | Host presents two children's work themselves, with credit, from screenshots the moderator grabbed during 0:21-0:31. Grab those screenshots every time as insurance. |
| The room runs 3+ minutes late by 0:31 | Cut show & tell to two children. Never cut the sneak peek or the offer. |
| Chat goes silent for 60+ seconds | Switch to a one-key poll ("type 1 if it's working, 2 if you're stuck"). |
| A disruptive participant | Moderator mutes and DMs privately, then removes if it repeats. The host never breaks teaching flow to manage behaviour. |

## After the workshop

Same day, while the badge is still fresh:

1. **Follow-up email to every family** — the recording, a step-by-step of today's badge so
   children can rebuild it, and the offer restated once with the deadline.
2. **Screenshot triage** — crop out any non-consenting tile before the image goes anywhere.
3. **Debrief, 10 minutes, host + moderator:** where did the clock slip, which children needed
   help and why, which tier got the most attempts.
4. **Log the numbers** below.

## Success metrics

| Metric | Target |
| --- | --- |
| Children with a running program by 0:21 | 90%+ |
| Children who attempted Stretch or Boss | 50%+ |
| Show & tell volunteers offered vs. accepted | 4 offered, 3 accepted |
| Finished within 50 minutes | Every time |
| Bookings from the workshop cohort | Track per run; this is the number that decides whether the format changes |

## Notes on this plan

- **"45 minutes" is accurate as written.** The child-facing content runs 0:00-0:44; the offer
  and send-off are the remaining six. Advertise the workshop to families as 50 minutes so
  parents plan for the full block, and keep the "next 45 minutes" line in the hook — it
  describes the part the child is being promised.
- **Session numbering.** The eight sessions this taster sells are Maker Realm **Quest `00`
  (Signals)**, missions `000` to `111` — the micro:bit on its own, which is exactly the kit
  described in the offer. Session one is mission `000`, session seven is mission `110` (the
  overnight investigation used in the sneak peek) and session eight is mission `111`, Demo
  Day. Keep the peek inside this quest. The gesture-trained classifier belongs to Quest `01`
  mission `111` and needs the rover add-on; the four-houses-one-system build is Quest `10` and
  needs the radio pack. Neither may be shown as part of what is being booked here.
- **Placeholders to fill before the first run:** `[PRICE]`, `[CODE]`, `[DEADLINE]`, `[LINK]`,
  `[EMAIL]`.
