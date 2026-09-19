# Recon: What's On This Board?

A free 55-minute live online ESP32 workshop for ages 11+. Every student leaves having written
real Python that made a board react to the world, and every parent leaves knowing what
[Innovator Realm](../../curriculum/010-innovator-mega/README.md)
is and how to book it.

It runs for two audiences at once. Families who have not enrolled need nothing but a browser.
Students who **have** enrolled arrive with their kit unopened and open it live at 0:37 — which
is the moment the visiting families are really being sold to, because it is not a pitch, it is
the child next to them building a circuit.

|                     |                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ages**            | 11+                                                                                                                                        |
| **Length**          | 55 minutes, door to door. The student-facing portion is the first 50.                                                                      |
| **Format**          | Live online, video call. Cameras optional for visitors, **on** for enrolled students during the unboxing.                                  |
| **Group size**      | 12-25 students, of whom 3-8 are typically enrolled. Above 25, add a second chat moderator.                                                  |
| **Staffing**        | Host + chat moderator. Two people. Never run this solo.                                                                                    |
| **Platform**        | [wokwi.com](https://wokwi.com/projects/new/micropython-esp32) — free, browser-based, no download. MicroPython on a simulated ESP32.        |
| **Hardware**        | None for visiting families. Enrolled students bring their sealed Quest `00` kit. The host has a wired board on camera throughout.          |
| **Outcome**         | A program the student wrote in text Python that reads a sensor and drives an LED on a threshold they chose themselves.                     |
| **Conversion goal** | Innovator Realm Quest `00` (Circuits) bookings taken by the stated deadline.                                                               |
| **Slides**          | Not built yet. Run from this plan and a shared browser until the deck exists.                                                              |

## Why this shape works

The session is built on a real asymmetry: a simulator is free and instant, and a simulator is
also wrong. Visitors spend forty minutes proving they can write Python that works — and then
watch an enrolled student run the same program on a real board in a real room and get a
different answer. Nobody has to claim the hardware matters. They see it fail to match, live.

That is also the honest shape of [Quest `00`](../../curriculum/010-innovator-mega/quest-00-circuits/README.md).
Everything in this workshop is Quest `00` material — the starter kit, no add-on — so a family
who books gets exactly what they were shown.

**This is also the realm's first unlock.** Every quest in Innovator ends by handing over the
hardware the next quest runs on. Recon is where that chain starts: the Quest `00` kit is
posted ahead, stays sealed, and is opened together on camera before mission `000`.

## Learning outcomes

By the end, each student can:

- Read a stream of unlabelled numbers off a running system and work out what each one measures,
  by changing one thing at a time.
- Explain what an analogue reading is: a number standing in for a voltage, with a range that
  has to be found rather than assumed.
- Write and run a `while True` loop with a conditional inside it, in text Python.
- Say what indentation does, having broken their program with it.
- Name one reason a program that is correct can still not work on real hardware.

Aligned to CSTA 2-CS-02 (hardware and software components collecting data), 2-DA-07
(representing data), and 2-AP-13 (decomposition and logical conditions).

## The recon target

The students are given this program already running, with **no comments and no variable names
that help**. Working out what it is telling them is the challenge.

```python
from machine import Pin, ADC
import time

a = ADC(Pin(34)); a.atten(ADC.ATTN_11DB)
b = ADC(Pin(35)); b.atten(ADC.ATTN_11DB)
c = Pin(4, Pin.IN, Pin.PULL_UP)

while True:
    print(a.read(), b.read(), c.value())
    time.sleep(0.2)
```

Three components are wired on the simulated breadboard: a light sensor, a potentiometer and a
pushbutton. The console prints three numbers twenty times a minute and says nothing about
which is which. The only way through is to interfere with one thing and watch which column
moves — which is the method the whole realm runs on.

| Signal | What moves it | What they should notice |
| --- | --- | --- |
| `a` | Dragging the light slider on the simulated sensor | Big range, moves smoothly, roughly 0-4095 |
| `b` | Turning the potentiometer knob | Same range, but *they* control it exactly |
| `c` | Pressing the button | Only ever 1 or 0 — and it reads **1** when **not** pressed |

That last row is the one worth stopping on. A pulled-up button reading 1 when nobody is
touching it is the first thing in the session that is counter-intuitive, and explaining it
takes thirty seconds: the pin is held high, and pressing the button pulls it to ground.

## The build

Once the three signals are identified, they make the board react. Added to the same loop:

```python
led = Pin(2, Pin.OUT)

while True:
    light = a.read()
    print(light)
    if light < 1000:          # <- their own number, not this one
        led.value(1)
    else:
        led.value(0)
    time.sleep(0.2)
```

**The threshold must be theirs.** Do not give a number. Have them cover the sensor, read the
console, uncover it, read it again, and pick something in between. That single decision is the
difference between typing along and engineering, and it is the moment to name out loud.

### The deliberate mistake

At roughly 0:25, un-indent the `if` block so it sits outside the `while` loop. Run it. The LED
sets once and then never changes again, no matter what the sensor does.

> "So my code is right. The logic is right. The sensor is fine — look, the numbers are still
> moving. But the light never changes. Why?"
>
> "Because in Python, the spaces at the front of the line are not decoration. They're how you
> say what's *inside* the loop. I put the `if` outside it, so it ran once, before the loop
> even started, and never again."
>
> "This is the thing text code asks of you that drag-and-drop blocks never did. It catches
> everybody, including me, ten seconds ago, on purpose."

Re-indent. Run. Celebrate.

**Why this bug specifically:** it is the exact idea Quest `00` mission `001` is built on, and
for any family coming up from Maker it is the same lesson they already met as "the block was
in the wrong container" — the continuity is worth naming if you know the room.

## At a glance

| Time | Beat | Student is... |
| --- | --- | --- |
| 0:00-0:03 | Welcome & the brief | Typing name and age in chat |
| 0:03-0:08 | What you're being sent into | Looking at a real board on camera, guessing nothing |
| 0:08-0:20 | Recon: identify the three signals | Interfering with one thing at a time in the simulator |
| 0:20-0:28 | Make it react + the deliberate bug | Writing a conditional, picking their own threshold |
| 0:28-0:37 | Your turn: Core / Stretch / Boss | Working independently |
| 0:37-0:45 | **The unboxing** | Enrolled: opening the kit and wiring it. Visitors: watching it happen |
| 0:45-0:50 | Show & tell + where Quest `00` ends | Presenting, or watching peers present |
| 0:50-0:54 | The offer | Parent-facing; students idle or still tinkering |
| 0:54-0:55 | Send-off | Holding up a working board or a working simulator |

---

## 0:00-0:03 — Welcome & the brief

**Goal:** Everyone has typed in chat inside 90 seconds, and the framing is set before any
code appears.

> "In the next fifty minutes you're going to be handed a machine that nobody has explained to
> you, and you're going to work out what it can feel. Then you're going to make it react.
> Real Python — the same language that runs on half the internet — not drag-and-drop."
>
> "Type your first name and your age in the chat."

**Chat moderator** greets every name individually. Same rule as every ByteBear taster: a
student who types once types again.

## 0:03-0:08 — What you're being sent into

**Goal:** Establish that the thing on screen is real, cheap and blind — and that nobody is
going to tell them what is attached to it.

**Host:** hold the real ESP32 up to camera, close enough to see the pins.

> "This costs about the same as a takeaway. It has no screen, no keyboard and no idea what's
> plugged into it until somebody writes code to find out. Right now there are three things
> wired to a board just like this one, and I'm not going to tell you what they are."

Resist listing the senses. This is the 11+ version of the micro:bit taster's guessing game,
and the difference is deliberate: younger children are told what a board can do, older ones
are asked to find out.

**Landing line:**

> "Your job for the next twelve minutes is reconnaissance. Go in, find out what's there,
> report back."

## 0:08-0:20 — Recon: identify the three signals

**Goal:** Every student can say what `a`, `b` and `c` are by 0:20, and can say how they know.

**Moderator posts snippet C1 now** and re-posts every two minutes.

1. **Everyone opens the link and presses the green play button.** Wait for it. Ask for a `1`
   in chat from everyone who can see three numbers scrolling.
2. **Do not explain the code yet.** Ask instead: "Which of those three numbers do you think
   you can change with your mouse? Try things. Tell me what moves."
3. Let the room find the potentiometer first — it always goes first, because turning a knob is
   the most obvious thing on screen.
4. **Then name the method out loud when someone gets it:** "Notice what you just did. You
   changed *one* thing and watched what moved. If you'd changed two, you'd know nothing."
5. Land the button last, and explain the pull-up when somebody complains it reads 1 when they
   are not pressing it. Somebody always complains. That complaint is the mission working.
6. **Then** read the code together, top to bottom, now that they know what it does. Six lines,
   ninety seconds. `ADC` is "analogue to digital" — a number standing in for a voltage.

**Watch for:** students who try to read the code first and stall. Tell the room explicitly at
the start that reading the code is the *last* step, not the first.

## 0:20-0:28 — Make it react

**Goal:** Every student has an LED responding to a threshold they chose themselves.

Code along, slowly, one line at a time. Do the threshold discovery properly — cover, read,
uncover, read, choose. Then run **the deliberate mistake** above at around 0:25.

**Watch for:** the temptation to hand out a threshold to speed things up. Don't. A student who
was given `1000` learned typing; a student who chose `740` because that was halfway between
what they measured learned the realm.

## 0:28-0:37 — Your turn: Core / Stretch / Boss

**On screen:** one slide, three tiers, a countdown. Host stops presenting and works the chat.

| Tier | Challenge | What it needs |
| --- | --- | --- |
| 🟢 **Core** | The LED comes on when you cover the sensor, off when you uncover it. | The threshold you chose, in an `if`/`else` inside the loop |
| 🟡 **Stretch** | Use the knob to set the threshold live, so you can tune it without editing code. | Read `b` each time round and compare `a` against it |
| 🔴 **Boss** | A burglar alarm: when it goes dark the LED blinks and *keeps* blinking until the button is pressed. | A variable that remembers the alarm is going — the first state machine most of them will write |

> "Green is the goal. Yellow is if you finish green. Red is what session four of the real
> course looks like — if you get there, say so, because I want to see it."

**Call the clock at 0:33, 0:35 and 0:36.**

**Watch for:**

- **Console flooding.** A student who deletes `time.sleep` gets a wall of numbers and thinks
  they broke it. Snippet C6.
- **Indentation errors**, constantly, which is correct and expected. Answer with "what line is
  Python pointing at?" rather than with the fix.
- **The Stretch trap:** reading the knob *before* the loop, so it never updates. Same bug as
  the deliberate one, found independently. Let them find it.

## 0:37-0:45 — The unboxing

**Goal:** The enrolled students get their hardware; the visiting families watch a child build
a circuit. This is the segment the whole workshop exists for. Protect its eight minutes.

**Audience split, said out loud:**

> "Right — some of you have a box next to you that you've been told not to open. It's time.
> Everyone else, cameras on the people opening them, because you're about to see what the
> first session actually looks like."

**Run order:**

1. **Countdown and open, together.** Ten seconds of noise. Let it be noisy.
2. **Inventory on camera**, host holding each part up as they find it: board, USB cable,
   breadboard, jumper wires, LEDs, resistors, light sensor, potentiometer, button. Name what
   each one is for in five words. Do not teach yet.
3. **Build one circuit, host-led, big close-up, slow:** LED and its resistor, then the light
   sensor and its resistor. Four components, six pushes. The wiring card in the box has the
   same picture.
4. **Plug in the USB.** The board ships pre-flashed with the Core program already on it, so it
   starts running the moment it has power. No laptop software, no install, no login.
5. **Everyone covers their sensor.** Some LEDs come on. **Some do not** — and that is the
   whole point of the next four minutes.

**The gap, which is the actual pitch — do not rush it:**

> "Put your hand over it. Who's got a light? ... And who hasn't?"
>
> "Nothing is broken and nobody made a mistake. In the simulator the sensor swung across the
> entire range, because a simulator is a piece of maths and maths is tidy. Your bedroom is not
> tidy. Your sensor is sitting under a lamp, or next to a window, or in a dark corner, and the
> number it produces never gets near the one you picked forty minutes ago."
>
> "Your code is right and your device doesn't work. That sentence is embedded engineering, and
> the first eight sessions of Innovator are about what you do next."

Then fix one, live, with a volunteer: read their actual numbers, pick a new threshold, and
watch it work. Ninety seconds, and every parent on the call has just watched a child debug
physical hardware.

**Watch for:**

- **A student whose circuit does not work at all.** Do not troubleshoot live past thirty
  seconds. Pair them onto the host's camera, and promise the step-by-step email. Moderator
  DMs them after the session.
- **Visitors feeling left out.** Name it and turn it around: *"You can't build this bit today
  because you haven't got the box — and honestly, that's the most useful thing I can show
  you about the difference between the free version and the real one."*
- **Time.** If the room is running late, cut show & tell, never this.

## 0:45-0:50 — Show & tell + where Quest `00` ends

**Show & tell, 3 students, about a minute each**, picked by the moderator *during* the
previous two segments and warned by DM. Pick one visitor on Core, one on Stretch or Boss, and
one enrolled student holding up real hardware. Two questions each, as always: what does it do,
and what was the tricky bit.

**Then the ceiling, from inside Quest `00` only:**

> "What you did today is most of session one and a bit of session five. By session seven
> you're being handed four boards that are broken on purpose — a loose ground, a floating
> input, the wrong pin — and asked to find out why, which is a skill people get paid for. And
> in session eight you build your own instrument, something that senses one thing and reports
> it, running off a battery with no laptop attached, and you show it to everybody and explain
> the bug that nearly beat you."

**Do not** show the camera, the sensors or the Stick here. Those are later quests with their
own kits, and promising them sells something the family is not about to buy.

## 0:50-0:54 — The offer

**Say the audience shift out loud.** Leave the simulator up so students keep tinkering.

> "What we just did is the taster. The full thing is **Circuits**, the first quest of Innovator
> Realm: eight live missions, pods of four, and one kit shipped to your door — the board, a
> breadboard, wires and sensors, nothing else to buy. Ages 11 and up. Every session ends with
> something that works, and the last one is a showcase where they demonstrate their own build."

> "For families on this workshop only, it's [PRICE] with the code [CODE], closing [DEADLINE].
> Link's in the chat."

**Moderator posts C4 on that cue.** Then stop selling and take questions.

| Question | Answer |
| --- | --- |
| "Does my child need the hardware to start?" | The kit ships before session one, and it's included. Everything you saw before 0:37 runs in a free browser simulator, which is how we start every quest. |
| "Do they need to know Python already?" | No. Today was most of them writing their first six lines of it. |
| "Is it just the same board all year?" | No — each quest adds one piece of kit, and each one costs about what the starter kit costs. The next one is a handheld computer with a screen. |
| "What if they miss a session?" | Recorded, and pod leaders catch them up at the start of the next one. |

## 0:54-0:55 — Send-off

> "Hold up whatever you've got — a board or a browser, both count. Say cheese."

Consent must already be on file from the booking form. Crop out any tile from a family who
declined before the image is used anywhere. **End on time.**

---

## Chat snippet bank

- **C1 (0:08, then every 2 min):** `Open this, then press the green ▶ button: [WOKWI LINK] — no account needed. You should see three numbers scrolling.`
- **C2 (0:09):** `Stuck? Type STUCK and one of us will come to you. Nobody gets left behind.`
- **C3 (0:28):** `🟢 Core: LED reacts when you cover the sensor. 🟡 Stretch: the knob sets the threshold. 🔴 Boss: it keeps blinking until you press the button. Green is the goal!`
- **C4 (0:52, on cue):** `Innovator Realm · Quest 00 "Circuits" — 8 live missions, pods of 4, kit shipped to your door, ages 11+. Book: [LINK] · Code: [CODE] · Closes [DEADLINE]`
- **C5 (0:54):** `Thanks for building with us! The recording, today's code and the wiring card go out tonight: [EMAIL]`
- **C6 (as needed):** `Wall of numbers? Make sure `time.sleep(0.2)` is the last line INSIDE the loop, indented the same as the print.`
- **C7 (as needed):** `IndentationError just means Python can't tell what's inside the loop. Every line inside `while True:` needs the same number of spaces in front of it.`
- **C8 (unboxing, as needed):** `LED not lighting? Long leg to the pin, short leg to the resistor and then to GND. If it's in backwards it just does nothing — no harm done.`

## Before the workshop

| When | Who | What |
| --- | --- | --- |
| T-14 days | Ops | Enrolled kits posted, **sealed, with a "Do not open until [date]" sticker** and the wiring card inside. Boards flashed with MicroPython and the Core program as `main.py`. |
| T-7 days | Ops | Confirmation email to everyone: date, link, **"a laptop or desktop, please not a phone"**. Separate line to enrolled families: *keep the box sealed, bring it to the call.* |
| T-2 days | Ops | Check with enrolled families that the box actually arrived. A student whose kit is in a depot needs to know before the session, not during it. |
| T-1 day | Host | Run the Wokwi project end to end in a fresh browser profile with no account logged in. **Confirm it runs without a login** — if a shared link now prompts for one, fall back to the "new project" link and paste the code from snippet C1. |
| T-1 day | Host | Build the real circuit from the wiring card, on the actual shipped kit, and confirm the pre-flashed program runs on power-up. Write down the real sensor readings in your own room — you will quote them at 0:41. |
| T-30 min | Host | Board wired and framed on camera. Second board ready as a swap. Timer running. |
| T-15 min | Both | Open the room. Moderator greets arrivals and walks them to the simulator. |
| T-5 min | Both | Agree show & tell picks will be DM'd during 0:28-0:37, and who calls the clock. |

## Contingencies

| If | Then |
| --- | --- |
| Wokwi will not load for a student | C1 again, then pair them onto the host's screen. Promise the step-by-step email. Never stall the room. |
| Wokwi requires a login on the day | Host pastes the code and everyone uses the blank "new project" link. This is why it gets tested the day before. |
| An enrolled student's kit has not arrived | Tell them privately before 0:37. Give them a job during the unboxing — reading the wiring card aloud for everybody else — so they are not the one person with nothing to open. |
| An enrolled student's circuit will not work | Thirty seconds, then move on and DM them after. The session cannot become one child's debugging session. |
| No enrolled students on the call | Host does the unboxing themselves, from a sealed box, narrating what a student would be doing. Weaker, but it still shows the gap. |
| The room runs 3+ minutes late by 0:37 | Cut show & tell to one student. Never cut the unboxing or the offer. |
| Chat goes silent 60+ seconds | One-key poll: "Type 1 if your numbers are scrolling, 2 if you're stuck." |

## After the workshop

1. **Follow-up email, same day** — the recording, today's code as a file, the wiring card as a
   PDF, and the offer restated once with the deadline.
2. **DM the students whose circuits did not work**, with a photo of the correct wiring. These
   are the enrolled families most likely to feel buyer's remorse tonight, and a five-minute
   message prevents it.
3. **Debrief, 10 minutes:** where the clock slipped, how many got Core before 0:37, how the
   unboxing ran.

## Success metrics

| Metric | Target |
| --- | --- |
| Students with three signals identified by 0:20 | 90%+ |
| Students with Core running by 0:37 | 85%+ |
| Enrolled students with a working circuit by 0:45 | 70%+ on the night, 100% by the follow-up |
| Students who attempted Stretch or Boss | 40%+ |
| Finished within 55 minutes | Every time |
| Bookings from the visiting cohort | Track per run |

## Notes on this plan

- **Everything shown is Quest `00`.** The recon program is mission `000` and `010` material,
  the threshold build is mission `100`, the broken boards in the sneak peek are mission `110`,
  and the showcase is mission `111`. The Stick, the sensors and the camera belong to later
  quests with their own add-ons and must not be shown as part of what is being booked.
- **The unboxing is the pitch, so it is scheduled before the offer, not during it.** By the
  time the price is said, the visiting family has already watched the thing they would be
  buying, being used by a child their child's age.
- **Pre-flashing is not optional.** Flashing firmware and installing Thonny is mission `000`'s
  job and takes longer than this whole segment. Boards ship ready to run.
- **Placeholders to fill before the first run:** `[PRICE]`, `[CODE]`, `[DEADLINE]`, `[LINK]`,
  `[EMAIL]`, `[WOKWI LINK]`, and the "do not open until" date on the sticker.
