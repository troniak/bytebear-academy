# Recon Mission: Operation Blackbox

A free 60-minute live online ESP32 mission for ages 11+, run by **two presenters** for **two
audiences in two rooms at once**. Recruits are sent through a portal into a squad room to
identify an unknown board; their families stay at HQ for a straight briefing on
[Innovator Realm](../../curriculum/010-innovator-mega/README.md)
and as long a Q&A as they want. The hour ends with both rooms back together and every recruit
issued something: a **Core** if their family has registered, a **Core Requisition** if they
are still deciding.

This is the two-presenter, split-audience format of
[Recon: What's On This Board?](Recon%20-%20Whats%20On%20This%20Board.md).
The mission content is the same Quest `00` material. What changes is the staging: the
children are not performing in front of their parents, and the parents are not sitting
through a lesson written for their children.

|                     |                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ages**            | 11+                                                                                                                                                                                                                                              |
| **Length**          | 60 minutes. Recruits are in the squad room for 35 of them.                                                                                                                                                                                       |
| **Format**          | Live online, video call with one breakout room. **Two devices per family** — recruit on a laptop, parent on anything.                                                                                                                            |
| **Group size**      | 6-12 recruits for two presenters. 13-20 needs a third person in the squad room. Above 20, split into two squads and run two Squad Leaders.                                                                                                       |
| **Staffing**        | **A — Squad Leader** and **B — Mission Control**. Two people, both live for the whole hour, never one person switching rooms.                                                                                                                    |
| **Platform**        | [wokwi.com](https://wokwi.com/projects/new/micropython-esp32) — free, browser-based, no download. MicroPython on a simulated ESP32. The project is [`blackbox-wokwi/`](blackbox-wokwi/README.md) in this folder — build it once, reuse the link. |
| **Hardware**        | None to take part. Squad Leader has a real wired board on camera throughout. Registered recruits have a sealed crate beside them, unopened.                                                                                                      |
| **Outcome**         | A program each recruit wrote in text Python that reads a sensor and drives an LED on a threshold they chose themselves — and a Core or a Core Requisition in their hands.                                                                        |
| **Conversion goal** | Innovator Realm Quest `00` (Circuits) registrations taken by the stated deadline.                                                                                                                                                                |
| **Slides**          | Not built yet. Run from this plan, a shared browser and the HQ deck outline below.                                                                                                                                                               |

## Why this shape works

The single-room version of Recon makes one compromise: everything said to a child is overheard
by a parent, and everything said to a parent is overheard by a child. Both audiences get a
diluted version. Splitting them removes the compromise in both directions.

- **The recruits get a room with no adults in it.** An eleven-year-old who is stuck will say so
  in front of eleven other eleven-year-olds long before they will say so in front of their
  mother. The squad room is the single biggest reason this format outperforms.
- **The parents get to ask the real questions.** *How much is this going to cost me by the
  end? Is my child actually keeping up? What happens if they hate it?* Nobody asks those with
  their child listening. HQ gets thirty minutes and a dozen honest answers.
- **The reunion is the pitch.** At 0:48 the portal collapses and the squad comes back carrying
  something. The parent has spent half an hour being told what the programme is, and then
  watches their own child explain what an analogue reading is. No slide does that.

**The Core is the object the whole hour points at.** Registered families have had a sealed
crate in the house for a fortnight with instructions not to open it. Undecided families watch
those crates come open and are handed a certificate for one of their own. Nobody is thanked
for attending and sent away empty-handed, and nobody's child is the only one with nothing.

## The cast

| | **A — Squad Leader** | **B — Mission Control** |
| --- | --- | --- |
| **Plays** | The operator who goes in with them. Warm, fast, technical, slightly conspiratorial. Never talks to parents. | The voice from Base. Calm, formal, unhurried. Talks to everybody, but is the only one who talks to parents. |
| **Owns** | The mission: the board, the code, the bug, the field trial, the squad's morale. | The frame: welcome, the brief, the portal, the HQ briefing, Q&A, the transmission, the Core issue, the clock. |
| **Room** | HQ 0:00-0:09, squad room 0:09-0:48, HQ 0:48-1:00. **Travels with the squad both ways** — never already inside when they arrive, never back at HQ before they are. | HQ 0:00-0:44, squad room 0:44-0:48, HQ 0:48-1:00. |
| **Platform role** | Co-host. Picks the portal from the room list at 0:09 like everybody else. | **Host.** Only the host can open, close and set the portal to self-select. |
| **Never** | Mentions price, deadlines or what anything costs. If asked, "that's Mission Control's department — get a grown-up to ask at HQ." | Enters the squad room before 0:44. The whole effect depends on the transmission being the first time Base speaks to the squad directly. |

**Two presenters is the floor, not the target.** Each one is alone in a room with an audience
and a chat window. Above twelve recruits, add a third person as **Comms** in the squad room to
work the chat so the Squad Leader can keep teaching; they also send the DMs and generate the
certificates live. Ops handling the certificate emails can be the same person.

## Learning outcomes

By the end, each recruit can:

- Read a stream of unlabelled numbers off a running system and work out what each one measures,
  by changing one thing at a time.
- Explain what an analogue reading is: a number standing in for a voltage, with a range that
  has to be found rather than assumed.
- Write and run a `while True` loop with a conditional inside it, in text Python.
- Say what indentation does, having broken their program with it.
- Name one reason a program that is correct can still not work on real hardware.

Aligned to CSTA 2-CS-02 (hardware and software components collecting data), 2-DA-07
(representing data), and 2-AP-13 (decomposition and logical conditions).

## Two devices, and walking through the portal

The split only works if the recruit and the adult are on separate connections. Say it three
times before the day: on the booking page, in the T-7 email, and in the T-1 reminder.

> **Two devices, please.** Your recruit needs a laptop or desktop with a keyboard — they will
> be writing code. You need anything with a screen or even just a phone line. If you only have
> one device between you, give it to your recruit and tell us when you arrive.

**Recruits walk through the portal themselves.** Zoom and Teams both let participants pick
their own breakout room, and turning that on is worth more than it sounds: a recruit who
*chooses* to step through a door is on a mission, and a recruit who is teleported by an adult
is in a lesson. It is one setting and it changes the whole feel of 0:09.

| Platform | Setting | Reality |
| --- | --- | --- |
| **Zoom** | Breakout Rooms → **Let participants choose room** | Works from client 5.3.0 on. A **Breakout Rooms** button appears in their toolbar and they pick `PORTAL`. |
| **Teams** | Rooms → settings → **Let people choose a room** | Same idea; needs a current client. |
| **Google Meet** | Not supported | Meet assigns only, so this becomes the fallback below. |

**Nobody needs to rename themselves.** That instruction only ever existed so that Mission
Control could sort the grid into two groups and push each recruit across, and self-selection
removes the sorting job entirely. Dropping it buys back two minutes of the welcome and spares
every family the one piece of admin most likely to go wrong on a phone.

**But the rename was quietly doing a second job**, and that one still needs doing: knowing that
everybody who should be in the squad room is in the squad room. Replace it with a roster check,
which is more reliable anyway because it runs off the booking list rather than off what people
typed:

1. Mission Control has the **expected recruit list** from the bookings, on paper, before the
   call. Names are known in advance; display names never told you anything the roster did not.
2. At 0:01 every recruit is asked to **type their first name in the chat** — one line, no
   renaming, no menus. It doubles as the house rule that everybody types something inside
   ninety seconds, and it gives Mission Control a tick-list.
3. At 0:10, once the portal is open, the Squad Leader **DMs Mission Control the roll count**:
   *"9 in the room."* Mission Control compares it against the tick-list and pushes anyone still
   at HQ across manually. Assignment becomes the exception, handled in fifteen seconds, instead
   of the rule applied to everybody.

**The fallback, which is also the Google Meet path:** Mission Control assigns. If you are
running this on Meet, or on a Zoom account where self-selection is off, ask for the rename
after all — `RECRUIT Amara` on the laptop, `HQ Amara's dad` on the parent's device — and
pre-assign each arrival as they join. It works, it is just heavier, and the recruits notice
that they were moved rather than that they went.

## The recon target

The squad is given this program already running, with **no comments and no variable names that
help**. Working out what it is telling them is the mission.

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

Three components are wired to the simulated board: a light sensor on `GPIO34`, a potentiometer
on `GPIO35` and a pushbutton on `GPIO4`. The console prints three numbers five times a second and
says nothing about which is which. The only way through is to interfere with one thing and watch
which column moves — which is the method the whole realm runs on.

The wiring and both programs live in [`blackbox-wokwi/`](blackbox-wokwi/README.md), one fenced
block per Wokwi tab: [the diagram](blackbox-wokwi/diagram.md) to paste in, [the recon
target](blackbox-wokwi/main.md) above, and a presenter-only
[solution](blackbox-wokwi/solution.md) with all three tiers in it.

| Signal | What moves it                                     | What they should notice                                    |
| ------ | ------------------------------------------------- | ---------------------------------------------------------- |
| `a`    | Clicking the light sensor while the sim runs and dragging its slider | Big range, moves smoothly, roughly 0-4095 |
| `b`    | Turning the potentiometer knob                    | Same range, but *they* control it exactly                  |
| `c`    | Pressing the button                               | Only ever 1 or 0 — and it reads **1** when **not** pressed |

That last row is the one worth stopping on. A pulled-up button reading 1 when nobody is
touching it is the first counter-intuitive thing in the mission, and explaining it takes thirty
seconds: the pin is held high, and pressing the button pulls it to ground.

**There is no hand in a simulator.** Nobody covers anything: with the simulation running, you
click the light sensor and a slider appears over it, and you drag that to set how bright the
room is. Know where that slider is before you teach this — a Squad Leader hunting for it live
costs the room two minutes, and a recruit who never finds it concludes the sensor is broken.
The Core objective below is written in terms of light going *down*, not of covering anything,
and that wording matters: the only place in this mission where a real hand goes over a real
sensor is the Squad Leader's board at 0:41, and the contrast is the point.

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

**Which way the number moves is also theirs.** The comparison above is written `<`, and
whether dragging the slider toward dark makes the reading rise or fall is a property of the
part, not a law.
Check it the day before so you are not surprised; do not tell the squad. A recruit who works out
that their `<` needs to be a `>` has done a better piece of engineering than one who was handed
a working line.

**The threshold must be theirs.** Do not give a number. Have them drag the slider all the way
dark, read the console, drag it all the way bright, read it again, and pick something in
between. That single decision is the
difference between typing along and engineering, and it is also what makes the field trial at
0:41 land — you cannot be shown that your number was wrong if the number was never yours.

### The deliberate mistake

At roughly 0:32, take the `if`/`else` out of the loop. Run it. **The LED never comes on at all**
— not once, no matter what the slider does — while the numbers carry on scrolling exactly as
before.

```python
while True:
    light = a.read()
    print(light)
    time.sleep(0.2)

if light < 1000:          # <- not inside the loop any more
    led.value(1)
else:
    led.value(0)
```

**Make the edit by pasting, not by shift-tabbing.** Keep the broken version above in a second
browser tab and paste the whole program over. If you do insist on doing it by hand, un-indent
the four `if`/`else` lines *and move `time.sleep(0.2)` up under the `print`*, because otherwise
the sleep is left dangling at the end and Python reads it as part of the `else` block — the loop
then has no sleep in it, you get a wall of numbers, and the room is now debugging two things at
once instead of the one you meant.

> "So my code is right. The logic is right. The sensor's fine — look, the numbers are still
> scrolling. But that LED never comes on. Not once. Why?"
>
> "Because in Python, the spaces at the front of a line are not decoration. They're how you say
> what's *inside* what. Those four lines aren't inside the loop any more, so they're not part of
> it — they're what happens *after* the loop has finished."
>
> *(and then, to the room, and wait for it)*
>
> "So when does `while True` finish?"

Somebody will say "never", and that is the whole lesson in one word: the `if` is not broken and
it is not wrong, it is *waiting for a moment that never comes*. Say it back to them:

> "Never. So that `if` is queued up behind a loop that never ends, and Python will never get to
> it. This is the thing text code asks of you that drag-and-drop blocks never did — and it
> catches everybody, including me, ten seconds ago, on purpose."

Re-indent. Run. Celebrate.

## At a glance

| Time | HQ — Mission Control | Squad room — Squad Leader |
| --- | --- | --- |
| 0:00-0:06 | Welcome, both audiences. Names ticked off in chat. | *At HQ. Camera on the board, not their face. Silent.* |
| 0:06-0:09 | The mission brief. Introduces the Squad Leader. | Turns the camera round. Two lines, then leads the squad out. |
| 0:09-0:10 | **The portal opens.** Recruits move across. | Receives the squad. |
| 0:10-0:13 | Resets the room for parents. What just happened. | Roll call, callsigns, cameras on. |
| 0:13-0:17 | Where your child sits on the map: four realms. | The blackbox brief: a real board, three unknowns. |
| 0:17-0:27 | Innovator in full: four quests, the hardware chain, the cost. | **Recon.** Identify `a`, `b` and `c`. |
| 0:27-0:31 | What a mission actually looks like, week to week. | Make it react. Their own threshold. |
| 0:31-0:34 | The honest part: what this is not. | The deliberate mistake. |
| 0:34-0:41 | **Q&A.** Stop presenting. | Solo objectives: Core / Stretch / Boss. |
| 0:41-0:44 | The Core Requisition, and what happens at 0:48. | **The field trial.** The real board disagrees. |
| 0:44-0:48 | *Travels to the squad room.* | **The transmission.** Mission complete. |
| 0:48-0:57 | **The Core issue.** Both rooms, one ceremony. | Alongside Mission Control, naming each recruit. |
| 0:57-1:00 | Send-off, deadline, what arrives tonight. | Holding up a board. |

---

## 0:00-0:06 — HQ assembly

**Goal:** Everybody is in the right room with the right name on the right device inside six
minutes, and nobody has heard a sales sentence yet.

**Mission Control**, camera on, formal:

> "Good evening. This is Mission Control. If you're on this call you're either a recruit or
> you're family to one, and in about eight minutes those two groups are going to two different
> places."
>
> "Recruits — type your first name in the chat so Base knows you're here. That's all I need
> from you. Grown-ups, if you're both on one device, type ONE DEVICE and I'll come to you."

**Moderator or Mission Control posts snippet C1 immediately** and re-posts at 0:02 and 0:04.

**Mission Control ticks names off the roster as they arrive in chat** — quietly, on paper,
without narrating it. Greet every arrival by name as they land; a family who is greeted by name
is a family who unmutes later in Q&A. Nobody is being sorted into anything and nobody is asked
to rename themselves: the recruits let themselves through the portal at 0:09, and the roster is
only there so you know who did not.

**The Squad Leader is in this room too, from the moment it opens.** Display name `SQUAD LEADER`,
**camera on the board rather than on their face**, and not a word until Mission Control
introduces them. Two things come out of that. The recruits spend six minutes looking at a tile
containing an unexplained circuit and nobody telling them what it is, which is the mission
starting early; and the squad is never sent off to meet a stranger in another room — the person
who takes them through the portal is someone they have already been in a room with.

They are not idle. The Squad Leader works the arrival chat while Mission Control talks: greeting
recruits by name, answering "do I need to download anything" (no) and "is this the right
meeting" (yes). It costs
nothing, because nobody has yet heard their voice or seen their face.

**Watch for:**

- **A recruit with no keyboard.** A tablet with no physical keyboard can follow the recon but
  will struggle with the build. Flag them to the Squad Leader by DM before 0:09.
- **The late arrival.** Anyone joining after 0:10 lands at HQ in the middle of a parent
  briefing. With self-selection on they can still pick the portal themselves — but they will not
  know that, so Mission Control DMs them *"click Breakout Rooms at the bottom and choose PORTAL"*
  rather than announcing it to the room, and tells the Squad Leader who is on their way.

## 0:06-0:09 — The mission brief

**Goal:** The recruits leave the main room wanting to go, and the parents understand that this
is a genuine lesson and not a themed sales hour.

**Mission Control**, to the whole room:

> "Here's the situation. Base has recovered a board. It's about the size of a stick of gum, it
> costs less than a takeaway, and there are three things wired to it. We don't know what they
> are. The board won't tell us — it has no screen, no keyboard and no idea what's attached to
> it until somebody writes code to find out."
>
> "So we're sending in a squad. Recruits, in a moment I'm going to open a portal, and you're
> going through it. You'll be gone about thirty-five minutes. Your job is reconnaissance: go
> in, find out what's there, report back."
>
> "You will not be going alone. Squad Leader?"

**Squad Leader**, on camera, holding the real board up close enough to see the pins:

> "Squad Leader here. This is the board. This is all it is. Three wires go into it and it
> doesn't know what any of them are — and in thirty-five minutes, you will."
>
> "Nobody is going to tell you the answers. That's the whole point of recon. Bring a browser
> and bring a guess."

**Mission Control:**

> "Grown-ups, you're staying here with me. While your recruits are in there I'll show you
> exactly what they'd be doing for the next eight weeks, and then I'll answer anything you
> want to ask, for as long as you want to ask it."
>
> "Recruits — portal opens in ten. Nine. Eight..."

**Squad Leader, over the count, and this is the last thing the recruits hear at HQ:**

> "Squad, on me. Follow me through — I'll be there before you are."

**Do not** explain the simulator, the language or the objectives here. The Squad Leader does
that inside. Parents should see their child leave curious, not briefed.

## 0:09-0:10 — The portal

Mission Control opens breakout rooms. **One room, named `PORTAL`** — not "Breakout Room 1". The
name is the whole effect: it is what the recruits will see in the list they are about to click.

**They let themselves in.** Say where the button is, once, plainly, because eleven-year-olds
will find it instantly and some of their parents will not:

> "Recruits — at the bottom of your screen there's a button that says Breakout Rooms. Click it,
> and you'll see one room called PORTAL. Go through."

**The Squad Leader goes through with them, on the same button.** They are a co-host, and they
pick the portal out of the list exactly as the squad does. They are not sitting in the breakout
waiting — the recruits should see that tile leave the HQ grid at the same moment theirs does.

**Mission Control sweeps at 0:10.** Anybody still on the HQ grid who typed their name in chat
gets pushed across manually, without comment. That is the entire assignment workload for the
session, and it is usually one child on an old client.

**Zoom:** Breakout Rooms → **Let participants choose room**, set before the meeting starts. The
button only appears for participants on client 5.3.0 or later; anyone older simply does not see
it, which is exactly the case the 0:10 sweep exists for. **Teams:** *Let people choose a room*
in the rooms settings, same behaviour. **Google Meet:** no self-selection — assign everybody,
and take the rename fallback described above.

**Rehearse this transition.** It is the one moment in the hour where a platform mistake is
visible to everybody at once, and it is thirty seconds of work to make it clean.

---

# Track 1 — The squad room

## 0:10-0:13 — Roll call

**Goal:** Every recruit has spoken or typed within three minutes of arriving, and the room
sounds like eleven-year-olds rather than an assembly.

> "Right — we're through, and there are no grown-ups in here. Cameras on if you can. I want to
> see faces, because in a minute I'm going to want to see confusion and I can't hear that."
>
> "Roll call. Say your name and one machine in your house that you think can sense something.
> Anything. I'll start: Squad Leader, and my washing machine knows when the door's shut."

**Count the tiles before you start and DM the number to Mission Control** — *"9 in the room"* —
so anyone who did not find the button gets swept across while you are still going round. Do not
wait until roll call is finished; the sweep is only cheap if it happens at 0:10.

Go round every recruit by name. Three minutes, hard stop. This is the price of admission for
everything after it: a squad that has each heard their own voice in the room will answer
questions for the next half hour, and a silent one will not.

**Watch for:** the recruit who does not want to speak. Give them the chat instead, name them
warmly when they type, and come back to them at 0:17 with a question you know they can answer.

## 0:13-0:17 — The blackbox brief

**Goal:** Establish that the board is real, cheap and blind — and that nobody is going to say
what is attached to it.

Hold the real board to camera again, close.

> "This is what Base recovered. Now look at this —" *(pan to the breadboard)* "— three things
> wired onto it. I'm not telling you what they are. What I *am* going to give you is the board's
> own output."
>
> "There's a program already running on it. It prints three numbers, five times a second, and
> it labels none of them. That's your intel. That's all your intel."

**Moderator or Squad Leader posts snippet C2 now** and re-posts every two minutes.

Resist listing the senses. Younger children are told what a board can do; recruits are asked to
find out. Land it:

> "One rule, and it's the rule the whole job runs on. **Change one thing.** If you change two
> things and something moves, you've learned nothing."

## 0:17-0:27 — Recon

**Goal:** Every recruit can say what `a`, `b` and `c` are by 0:27, and can say how they know.

1. **Everyone opens the link and presses the green play button.** Wait for it. Ask for a `1` in
   chat from everyone who can see three numbers scrolling. Do not move on at 80%.
2. **Do not explain the code yet.** Ask instead: "Which of those three numbers do you think you
   can change with your mouse? Try things. Tell me what moves."
3. Let the squad find the potentiometer first — it always goes first, because turning a knob is
   the most obvious thing on screen.
4. **Name the method out loud the moment somebody gets it:** "Notice what you just did. You
   changed *one* thing and watched what moved."
5. Land the button last, and explain the pull-up when somebody complains it reads 1 when they
   are not pressing it. Somebody always complains. That complaint is the mission working.
6. **Then** read the code together, top to bottom, now that they know what it does. Six lines,
   ninety seconds. `ADC` is "analogue to digital" — a number standing in for a voltage.

**The report format.** Have each recruit post one line in chat as they crack each signal:

`SIGNAL A = light sensor, because it moved when I dragged the slider`

That sentence — claim, then evidence — is the thing being taught. It is also what Mission
Control asks for at 0:45, so it has to exist before then.

**Watch for:**

- **Recruits who try to read the code first and stall.** Tell the room explicitly at the start
  that reading the code is the *last* step, not the first.
- **The recruit who cannot find the light slider.** It only appears when you click the sensor
  while the simulation is actually running, so anyone who has not pressed play sees nothing
  happen no matter what they click. Snippet C10.

## 0:27-0:34 — Make it react, and break it

**Goal:** Every recruit has an LED responding to a threshold they chose themselves, and has
watched indentation destroy a program that was otherwise correct.

Code along, slowly, one line at a time. Do the threshold discovery properly — slider dark,
read; slider bright, read; choose. Write each recruit's chosen number down; you will quote two or three of
them at 0:41.

Then run **the deliberate mistake** above at around 0:32.

**Watch for:** the temptation to hand out a threshold to speed things up. Don't. A recruit who
was given `1000` learned typing; a recruit who chose `740` because that was halfway between what
they measured learned the realm — and only the second one can be surprised at 0:41.

## 0:34-0:41 — Solo objectives

**On screen:** one slide, three tiers, a countdown. Squad Leader stops presenting and works the
room.

| Tier | Objective | What it needs |
| --- | --- | --- |
| 🟢 **Core** | The LED comes on when you drag the light down to dark, and off when you bring it back. | The threshold you chose, in an `if`/`else` inside the loop |
| 🟡 **Stretch** | Use the knob to set the threshold live, so you can tune it without editing code. | Read `b` each time round and compare `a` against it |
| 🔴 **Boss** | An intruder alarm: when it goes dark the LED blinks and *keeps* blinking until the button is pressed. | A variable that remembers the alarm is going — the first state machine most of them will write |

> "Green is the objective. Yellow is if you finish green. Red is what mission four of the real
> quest looks like — if you get there, say so, because I want to see it."

**Call the clock at 0:38 and 0:40.**

**Watch for:**

- **Console flooding.** A recruit who deletes `time.sleep` gets a wall of numbers and thinks
  they broke it. Snippet C7.
- **Indentation errors**, constantly, which is correct and expected. Answer with "what line is
  Python pointing at?" rather than with the fix.
- **The Stretch trap:** reading the knob *before* the loop, so it never updates. Same bug as the
  deliberate one, found independently. Let them find it.
- **The clock.** Objectives are the compressible segment. The field trial is not.

## 0:41-0:44 — The field trial

**Goal:** Every recruit watches their own correct program fail on real hardware, in a real room,
for a reason that is nobody's fault. This is the three minutes the hour is built on — protect
them even if it means cutting the objectives short.

> "Stop typing. Everybody look at my camera. This is my board, on my desk, in my room. Not a
> simulation. Amara — what number did you pick?"

Type their threshold into the real board, live, on camera. Run it. **Put your hand over the
sensor** — and say that you are doing it, because for the last twenty minutes nobody in the room
has been able to do that:

> "Notice what I just did there. You've all been dragging a slider. I can't drag a slider. I've
> got a hand, and a lamp I can't turn off, and whatever the weather's doing outside."

**Nothing happens.** Or it is already on and stays on. Either way it disagrees.

> "Your code is right. I just typed it in myself. Your logic is right. My sensor is fine —
> look, the numbers are still moving."
>
> "In the simulator that sensor swung across the whole range, because a simulator is a piece of
> maths and maths is tidy. My room is not tidy. There's a lamp behind me and a window over
> there, and the number this thing actually produces never gets anywhere near the one you
> picked."
>
> "So: your code is right and the device doesn't work. That sentence is embedded engineering.
> It's what the job actually is. Amara — read my numbers off the console and give me a new
> threshold."

Fix it live with them. Ninety seconds. Then:

> "You just debugged hardware you can't touch, in a room you've never been in, with a number you
> worked out from evidence. That's the mission. Write that down, because somebody's going to ask
> you what you did in here."

That last line is not a flourish. It is the prompt for the reunion at 0:48, and recruits deliver
it far better when they have been told it is coming.

---

# Track 2 — HQ

## 0:10-0:13 — Reset the room

**Goal:** The parents stop being an audience at their child's lesson and start being the people
the next thirty minutes are for.

Cameras can go off. Invite it explicitly — half of them are in a kitchen.

> "Right, they're gone. Let me tell you what's happening in there, and then let me tell you what
> this actually is, and then I'll shut up and you can ask me anything."
>
> "For the next half hour your recruit is being given a board with three unidentified things
> wired to it and no explanation, and they have to work out what each one is by interfering with
> one thing at a time. Then they'll make it react to one of them. They'll be writing text Python
> — real Python, the same language that runs half the internet, not drag-and-drop blocks."
>
> "Nobody in there is going to be told an answer. That's deliberate, and it's the single thing
> that most distinguishes what we do from a coding club."

**Then set the shape of the half hour**, so nobody spends it waiting for a pitch:

> "There's no presentation to sit through. Twenty minutes on what the programme is and what it
> costs, all of it, no surprises at the end — then Q&A, and I'd rather run out of time on
> questions than on slides."

## 0:13-0:17 — The map

**Goal:** Every parent can place their own child on a four-realm progression and see what comes
before and after this year.

| Realm | Ages | What the child works on |
| --- | --- | --- |
| **Explorer** | 5-7 | LEGO Education and block coding in the browser. Robots with characters and stories. |
| **Maker** | 8-11 | Their own micro:bit. Blocks, but now driving hardware they own. |
| **Innovator** | **11+** | **Text Python on a real microcontroller. This is the one tonight is about.** |
| **Leader** | 14+ | Linux, Raspberry Pi, computer vision and training models on real compute. |

> "Innovator is the crossing point. It's where a child stops dragging blocks and starts typing,
> and it's where the thing they're programming stops being a picture of a device on a screen and
> starts being a device on the table. Both of those happen in the same eight weeks, on purpose,
> because each one makes the other one make sense."

Full detail, if a parent asks for the written version, is in the
[curriculum framework](../../curriculum/README.md).

## 0:17-0:27 — Innovator in full, including the money

**Goal:** A parent leaves able to explain to their partner what the year costs and what arrives
in the post. No figure appears for the first time in the follow-up email.

**The four quests**, from [Innovator Realm](../../curriculum/010-innovator-mega/README.md):

| Quest | Name | What the child ends up with | Hardware |
| --- | --- | --- | --- |
| **`00`** | Circuits | A battery-powered device of their own design that senses one thing and reports it, running with no laptop attached | The starter kit — the Core. No add-on. |
| **`01`** | Instruments | A handheld instrument with a screen, menus and a battery that lasts a day | The M5 pack |
| **`10`** | Fieldwork | A week of readings from their own home, pooled into a class dataset, and a model trained on it | The environment pack |
| **`11`** | Vision | A camera that recognises things they taught it, on a head that turns to follow | The vision pack |

**Then say the three things parents are actually working out.** Say them before being asked.

1. **The cost is flat, not a ramp.** Each add-on is specified to cost about what the starter kit
   costs. There is no expensive capstone at the end that the whole year has been building toward.
2. **Nothing is superseded and nothing is shared.** Every quest puts the earlier hardware back to
   work in a new role, and every mission runs on hardware that one child owns, in one child's
   home. The kit is theirs and it all still works after the course ends.
3. **You can stop after any quest** having spent a predictable amount, and your child keeps
   everything.

> "Tonight is Quest `00`. Everything your recruit is doing in that room right now is Quest `00`
> material — mission one and mission five of eight. What you saw is what you'd be buying."

## 0:27-0:31 — What a mission actually looks like

**Goal:** Turn "an online course" into a specific, picturable Tuesday evening.

- **Eight live missions**, one a week, in **pods of four**. Not a lecture hall and not
  one-to-one — four children who know each other's names by mission three.
- **Every mission has Core, Stretch and Boss objectives.** Green is the goal for everybody. A
  child who finishes fast never runs out, and a child who is finding it hard never fails.
- **Every mission ends with something that works.** Not a chapter finished — a thing that does
  something, that they can show you.
- **Mission `110` is four boards broken on purpose.** A floating input, a missing ground, the
  wrong pin, a brownout. Every one of them presents as a software bug and is not one. A child
  who has met all four stops assuming the code is the problem — that is a skill people are paid
  for, and it is in week seven of the first quest.
- **Mission `111` is a showcase** with families watching, where they demonstrate their own build,
  show the circuit they drew, and explain one bug that nearly beat them.
- **Sessions are recorded**, and pod leaders catch up anyone who missed one at the start of the
  next.

## 0:31-0:34 — The honest part

**Goal:** Say the objections out loud before the parents have to. This segment buys more
registrations than the previous three combined, and it only works if it is genuinely candid.

| The worry | Say this |
| --- | --- |
| "Is this just more screen time?" | It's an hour a week at a screen that ends with them holding a circuit they wired. The last mission of the quest runs with the laptop unplugged entirely. |
| "My child has never written a line of code." | Tonight is most of them writing their first six. Quest `00` assumes nothing — mission `000` is switching on one LED. |
| "Is it safe? Electronics, at home?" | Low voltage only, from USB or a battery pack — never mains. Pre-stripped wires, marked polarity, and the first at-home session is an instructor-led wiring walkthrough. |
| "What if they don't like it?" | You'd know by mission three, and you'd have spent one quest. Tell us and we'll stop — and they keep the kit. |
| "Will they keep up in a pod?" | Every mission has three tiers running at once, so a pod is never travelling at one speed. |
| "I can't help them — I don't know any of this." | Good. You're not meant to. Everything they need is in the session and the mission page; what you provide is a table and a plug socket. |

## 0:34-0:41 — Q&A

**Stop presenting. Share nothing. Camera on, notes away.** Seven minutes is the floor; if the
questions are still coming at 0:41, keep going and compress the Requisition segment — it is two
minutes of content.

Open it properly, because a cold room stays cold:

> "Most-asked question first, so nobody has to go first: yes, the kit is included in the price
> of Quest `00`, and it's posted to you before mission one. Right — who's next?"

Hold a question in reserve to break a silence, and attribute it honestly: *"Somebody asked me
last week whether..."*

| Question | Answer |
| --- | --- |
| "Does my child need the hardware to start?" | It ships before mission one and it's included. The first missions also run in a free browser simulator, which is how every quest starts. |
| "Do they need Python already?" | No. Tonight is most of them writing their first six lines. |
| "Is it the same board all year?" | No — each quest adds one piece, each costing about what the starter kit costs. The next is a handheld computer with a screen. |
| "What if they miss a session?" | Recorded, and the pod leader catches them up at the start of the next one. |
| "How much of the hour is my child actually talking?" | In a pod of four, a lot. Tonight they did a roll call, reported three findings and debugged live with the Squad Leader. |
| "My child is 10 / is 15." | Ten and confident with blocks — talk to me, it sometimes works. Fifteen — look at Leader realm instead, and I'll send you the page. |
| "Do you have a school / group rate?" | Yes. Email me and I'll send it tonight. |

## 0:41-0:44 — The Core Requisition

**Goal:** Every parent knows exactly what is about to happen at 0:48 and that their child is not
about to be embarrassed. **This segment exists to remove a fear, not to sell.**

> "In about four minutes the portal closes and they all come back in here, and we finish with
> something called the Core issue. Here's what that is, so none of it is a surprise."
>
> "The Core is the board. It's the thing at the centre of every machine they'll build for the
> next four quests, and Quest `00` is eight weeks of nothing but that board. Some of the recruits
> in that room have a sealed crate next to them that arrived a fortnight ago with instructions
> not to open it. Those get opened, on camera, when their name is called."
>
> "If that isn't you — your recruit's name still gets called, and they're issued a **Core
> Requisition** instead. It's a certificate, it's in their name, and it's worth the kit, free,
> when you register. Nobody in that room is going to be the child with nothing."
>
> "It's [PRICE] with the code [CODE], and the Requisition runs out on [DEADLINE]. The link is in
> the chat and that's the last I'll say about money tonight."

**Post snippet C5 on that cue.** Then take any last questions until 0:44.

**Then hand over and go:**

> "I'm going to go and get them. Stay here — the room will fill up around you."

Mission Control leaves a holding slide up at HQ: **PORTAL COLLAPSING — STAND BY**.

---

# 0:44-0:48 — The transmission

**Goal:** The recruits experience Base arriving. This is theatre, it takes four minutes, and it
is the thing they describe at school the next day. Play it absolutely straight — the moment
either presenter winks at it, it is a party game instead of a mission.

**0:44 — Mission Control joins the squad room. Camera off. Says nothing for thirty seconds.**
Let the squad notice that somebody new is in the room. They will.

**0:45 — Camera on. Flat, formal, unhurried:**

> **MISSION CONTROL:** "Squad Leader, Mission Control. We have an incoming transmission."
>
> **SQUAD LEADER:** "Copy, Mission Control."

**Then the debrief, which is the actual assessment.** Squad Leader turns to the squad and takes
the report — every recruit, one line each, claim and evidence:

> **SQUAD LEADER:** "Squad, report. Signal, and how you know. Amara, you're first."
>
> *"Signal A is a light sensor, because it moved when I dragged the slider and nothing else
> changed."*

Mission Control acknowledges each one — `"Base copies"` — and nothing more. Do not praise
individually here; the flatness is what makes it feel official. If a recruit freezes, Squad
Leader takes it: *"Mission Control, Amara identified the button. Confirmed pull-up behaviour."*

**0:47 — the confirmation:**

> **MISSION CONTROL:** "Squad Leader, we have confirmation from Base. Your mission has been
> completed."
>
> **SQUAD LEADER:** "Then it's time to issue your Core."

**Mission Control, to the squad:**

> "Portal collapses in sixty seconds. Squad, return to HQ. Your families are waiting."

**Mission Control closes all breakout rooms with the 60-second countdown running.** The platform
timer *is* the portal collapsing, visible on every recruit's screen, and it drops the whole room
— recruits, Squad Leader and Mission Control — back into HQ together. Nobody has to be chased.

**The Squad Leader leaves last and arrives with the squad.** Do not return to HQ early to set up
for the ceremony, and do not send the recruits back ahead. Going in together and coming out
together is most of why the portal reads as real, and the parents watching the HQ grid refill
should see their own child and the person who took them in appear in the same second.

**Watch for:** a Squad Leader who rushes "Then it's time to issue your Core." It is the last line
of the mission and the first line of the ceremony. Land it, then pause.

---

# 0:48-0:57 — The Core issue

**Goal:** Every recruit is named, every recruit receives something, and every parent watches
their own child explain what they did. Nine minutes. Do not let it run to eleven.

**Mission Control opens, to the reunited room:**

> "HQ, the squad is back. Mission complete — they went into a room with an unidentified board in
> it and they came out knowing what all three of its senses were, which is more than Base knew
> this morning."
>
> "Squad Leader, mission report."

**Squad Leader, thirty seconds, no more** — and it must contain the field trial, because that is
the argument:

> "Good squad. They had all three signals inside ten minutes. Then every one of them wrote a
> program that worked perfectly in the simulator, and I ran their numbers on my real board in my
> real room, and it didn't work. Not one of them had done anything wrong. That gap — between a
> program that's right and a device that doesn't work — is what the eight weeks are about, and
> they've already met it."

**Then hand a recruit the floor, for one question only.** Pick one you warned by DM during the
objectives: *"Amara, tell your parents what an analogue reading is."* One child, one answer,
fifteen seconds. Do not go round the room — the scarcity is what makes it land.

**Then the issue itself. One list, read alphabetically, registered and undecided mixed
together.** Mission Control reads names; Squad Leader receives each response.

**For a recruit with a crate:**

> "Recruit Amara — your Core. Break the seal."

They open it on camera and hold the board up. Squad Leader: *"Core issued."* Move on inside
twenty seconds; twelve of these is four minutes and it must not sag.

**For a recruit without one:**

> "Recruit Josh — Core Requisition, issued in your name, valid until [DEADLINE]. It's going to
> your grown-up's inbox tonight and it's worth the full kit."

Same tone, same pace, same "Core issued" from the Squad Leader. **Never say "not yet
registered", "when your parents decide" or anything that sorts the room into two groups.** Both
lines are an issue of equipment; the difference is timing, and no eleven-year-old needs it
explained in front of eleven others.

**Then, once every name has been read, the inventory — two minutes, Squad Leader, on camera:**
board, USB cable, breadboard, jumper wires, LEDs, resistors, light sensor, potentiometer, button,
and a battery holder. Five words each. Do not teach. The battery holder is the one worth a
second sentence, because it is the only thing in the box they will not touch for eight weeks:

> "That one you don't need yet. That's for the last session, when you unplug the laptop
> altogether and the thing you built keeps running without it."

Finish on the board itself:

> "That one. That's the Core. Everything else in the box plugs into it, and everything you build
> for the next eight weeks starts by picking that up."
>
> "Mission one, you'll make it say hello. Mission seven, I hand you four boards that I have
> broken on purpose and you have to tell me why. Mission eight, you build something of your own,
> unplug the laptop, run it off a battery and show it to whoever's in the house."

**Do not** show the Stick, the sensors or the camera. Those are later quests with their own
add-ons, and showing them sells something this family is not about to buy.

**Watch for:**

- **A crate that never arrived.** Handle it by DM before 0:48 and issue them a Requisition with
  everybody else — never an apology in front of the room. Ops chases the courier tonight.
- **A crate opened early.** Fine. Call their name, ask them to hold up the board they already
  know. No comment.
- **A recruit who has left the call.** Read the name anyway, say the Requisition is going to
  their inbox, and move on.
- **The ceremony sagging.** Twenty seconds a recruit. If the room is over twelve, the Squad
  Leader reads the second half of the list while Mission Control keeps the chat moving.

## 0:57-1:00 — Send-off

> "Recruits — hold up whatever you've got. A board, a certificate, or a browser with a working
> program in it. All three count. Say cheese."
>
> "Tonight you'll get the recording of the HQ briefing, the code your recruit wrote, the wiring
> card, and the Requisition if you were issued one. Grown-ups, the registration link and the
> deadline are in the chat. Recruits — good work. Base is pleased, and Base is not easily
> pleased."
>
> "Mission Control, out."

**Post snippets C6 and C8.** Consent for the photo must already be on file from the booking form;
crop out any tile from a family who declined before the image is used anywhere. **End on time.**

---

## Chat snippet bank

Both rooms need their own. Keep them in two lists so nothing meant for a parent lands in front
of the squad.

**HQ (Mission Control):**

- **C1 (0:00, repeat 0:02 and 0:04):** `Welcome! RECRUITS: type your first name here so Base knows you're on the call. On one device between you? Type ONE DEVICE and we'll come to you.`
- **C1b (0:09, on cue):** `RECRUITS: click "Breakout Rooms" at the bottom of your screen, then choose PORTAL. Grown-ups, stay here with Mission Control.`
- **C5 (0:43, on cue):** `Innovator Realm · Quest 00 "Circuits" — 8 live missions, pods of 4, the Core kit shipped to your door, ages 11+. Register: [LINK] · Code: [CODE] · Core Requisition expires [DEADLINE]`
- **C6 (0:58):** `Tonight's email: the HQ briefing recording, your recruit's code, the wiring card, and their Core Requisition. Questions any time: [EMAIL]`

**Squad room (Squad Leader or Comms):**

- **C2 (0:15, then every 2 min):** `Open this, then press the green ▶ button: [WOKWI LINK] — no account needed. You should see three numbers scrolling.`
- **C3 (0:16):** `Stuck? Type STUCK and one of us comes to you. Nobody gets left behind in here.`
- **C4 (0:34):** `🟢 Core: LED reacts when you drag the light sensor's slider down to dark. 🟡 Stretch: the knob sets the threshold. 🔴 Boss: it keeps blinking until you press the button. Green is the objective!`
- **C10 (as needed):** `Can't change the light? Press the green ▶ first, THEN click on the light sensor - a slider appears on top of it. Drag it up and down and watch the first number.`
- **C7 (as needed):** `Wall of numbers? Make sure time.sleep(0.2) is the last line INSIDE the loop, indented the same as the print.`
- **C8 (as needed):** `IndentationError just means Python can't tell what's inside the loop. Every line inside "while True:" needs the same number of spaces in front of it.`
- **C9 (as needed, at the Core issue):** `LED not lighting? Long leg to the pin, short leg to the resistor and then to GND. In backwards it just does nothing — no harm done.`

## Before the mission

| When | Who | What |
| --- | --- | --- |
| T-14 days | Ops | Registered crates posted, **sealed, with a "SEALED BY BASE — DO NOT OPEN UNTIL [date]" sticker** and the wiring card inside. Boards flashed with MicroPython and the Core program as `main.py`. Packing, sourcing and the tracking log: [Kit Fulfilment](../../docs/kit-fulfilment.md). |
| T-7 days | Ops | Confirmation email to everyone: date, link, **"two devices, please — your recruit needs a laptop with a keyboard"**, and a line asking people to update their video app so the breakout button is there. Separate line to registered families: *keep the crate sealed, have it in the room.* Families who sourced their own kit get the flash-before-the-call instructions — an unflashed board cannot do 0:41. |
| T-3 days | Ops | Certificate template ready with [DEADLINE] and [CODE] on it, and a tested one-per-recruit generation run. This cannot be improvised at 0:57. |
| T-2 days | Ops | Check with registered families that the crate actually arrived. A recruit whose kit is in a depot needs to be known about tonight, not at 0:48. |
| First run only | Squad Leader | Build the shared Wokwi project from [`blackbox-wokwi/`](blackbox-wokwi/README.md) — paste the blocks from [`diagram.md`](blackbox-wokwi/diagram.md) and [`main.md`](blackbox-wokwi/main.md) into a new MicroPython ESP32 project, save it as **BLACKBOX**, and put the share link into `[WOKWI LINK]` and snippet C2. Fix any part name the editor flags; the README lists the likely swaps. |
| T-1 day | Squad Leader | Run the Wokwi project end to end in a fresh browser profile with no account logged in. **Confirm it runs without a login** — if a shared link now prompts for one, fall back to the "new project" link and paste the code from C2. |
| T-1 day | Squad Leader | Drag the light slider to both ends, note both numbers and **which direction the reading moves as it gets darker**. Press the button and confirm it reads 1 unpressed. |
| T-1 day | Squad Leader | Build the real circuit on the actual shipped kit and confirm the pre-flashed program runs on power-up. **Write down the real readings in your own room** — you quote them at 0:41 and the field trial is nothing without them. |
| T-1 day | Both | **Rehearse the transmission.** Four minutes, out loud, both voices, including the sixty-second close. It is the only scripted thing in the hour and the only thing that looks amateur if fumbled. |
| T-1 day | Mission Control | Breakout room created and named `PORTAL`, **self-selection turned on** and tested with a second device, Squad Leader added as co-host, HQ recording set to **main room only**. |
| T-1 day | Mission Control | **The expected recruit list printed on paper**, marked up with who has a crate and who is getting a Requisition. It is the tick-list at 0:01, the sweep list at 0:10 and the name list at 0:48. |
| T-30 min | Squad Leader | Board wired and framed on camera. Second board ready as a swap. Timer running. |
| T-15 min | Both | Open the room. **Both presenters are at HQ.** Mission Control greets and ticks off the roster; Squad Leader sits with camera on the board, named `SQUAD LEADER`, silent, working the chat. |
| T-5 min | Both | Agree the reunion question pick, who reads the second half of the name list, and the exact wall-clock time Mission Control enters the portal. |

## Contingencies

| If | Then |
| --- | --- |
| A family has **one device only** | The recruit takes it and goes through the portal. The parent dials in by phone audio to HQ if they can — the briefing is nearly all talk — or gets the HQ recording tonight plus the offer of a ten-minute call. Never keep the child at HQ. |
| A parent is **not on the call at all** | Fine. Their recruit is issued with everybody else and the Requisition goes to the booking email. Mission Control emails the briefing recording tonight. |
| **Only one or two recruits** show | Run it anyway and run it straight. Do not collapse to one room — the portal is the format. A squad of two gets a very good hour. |
| **No parents** stay at HQ | Mission Control records the briefing to camera in the empty room, sends it to every family tonight, and joins the squad room early as an observer (camera off, still silent until 0:45). |
| **More than 20 recruits** | Two portals, two Squad Leaders, identical plan. Mission Control visits both for the transmission — the second squad waits three minutes, so the Squad Leader holds them on Boss. |
| A **parent follows their recruit** through the portal | The Squad Leader spots it at roll call — an adult on camera in a room of eleven-year-olds is not subtle. Say it lightly and privately by DM: *"HQ needs you, there's a Q&A running."* If they stay, run the mission as written and never make the room aware of it. |
| A **recruit stays at HQ** and does not go through | Mission Control pushes them across at the 0:10 sweep, no comment made. If they actively do not want to go — it happens, and usually it is nerves — let them stay, seat them beside their adult, and DM the Squad Leader so their name is still read at the Core issue. |
| **Self-selection is off** on the day, or the account cannot enable it | Assign everybody manually, and take the rename fallback: recruits to `RECRUIT <name>`, parents to `HQ <name>`. Add ninety seconds to the welcome and open the portal at 0:10 rather than 0:09. |
| **Breakout rooms fail** on the platform | Fall back: Squad Leader takes the recruits to a second meeting link, posted only in chat as `PORTAL COORDINATES`. Have that link generated and pasted in a private note before the session starts. |
| A recruit **cannot get Wokwi to load** | C2 again, then pair them onto the Squad Leader's screen. Promise the step-by-step email. Never stall the squad. |
| Wokwi **requires a login** on the day | Squad Leader pastes the code and everyone uses the blank "new project" link. This is why it is tested the day before. |
| A recruit's **crate has not arrived** | DM them before 0:48. They get a Requisition in the ceremony like anyone else, and Ops chases the courier tonight. Do not single them out live. |
| Q&A **dries up at 0:36** | Do not fill it with more pitch. Go to the reserve questions, then give the parents the five minutes back and go into the portal early as a silent observer — you can always sit there camera-off until 0:45. |
| Q&A is **still going at 0:44** | Mission Control must leave. "Hold that — I'll answer it the second they're back, and if we run out of time I'll answer it tonight by email." Then go. The transmission cannot slip. |
| The squad room is **3+ minutes behind** at 0:41 | Cut the solo objectives, never the field trial. Recruits can finish Core in their own time; they cannot watch a real board disagree in their own time. |
| Chat in either room goes **silent 60+ seconds** | One-key poll. Squad: "Type 1 if your numbers are scrolling, 2 if you're stuck." HQ: "Type 1 if you've done anything like this before, 2 if this is all new." |

## After the mission

1. **Follow-up email, same day**, and it is two different emails. Registered families get the
   recording, the code, the wiring card and mission `000`'s date. Undecided families get all of
   that **plus the Core Requisition as a PDF in the recruit's name**, the registration link and
   the deadline, stated once.
2. **The certificate must go out tonight.** It was promised in front of the child. A Requisition
   that arrives on Thursday is worth a fraction of one that arrives before bedtime.
3. **DM the recruits whose circuits or simulators did not work**, with a screenshot of the
   working code. These are the families most likely to feel doubt tonight, and a five-minute
   message prevents it.
4. **Debrief, 10 minutes, both presenters:** did the portal open cleanly, was the field trial
   protected, how long did Q&A actually run, and how long did the ceremony take per recruit.

## Success metrics

| Metric | Target |
| --- | --- |
| Portal open and squad in the room | By 0:10, with at most one recruit needing a manual push |
| Recruits with three signals identified by 0:27 | 90%+ |
| Recruits with Core running by 0:41 | 85%+ |
| Field trial run with a recruit's own number | Every time |
| Parents still at HQ at 0:44 | 85%+ |
| Questions asked in Q&A | 5+ distinct families |
| Recruits issued a Core or a Requisition | 100%, no exceptions |
| Requisition emails delivered same day | 100% |
| Finished within 60 minutes | Every time |
| Registrations from the undecided cohort | Track per run |

## Notes on this plan

- **Everything the squad does is Quest `00`.** The recon program is mission `000` and `010`
  material, the threshold build is mission `100`, the four broken boards mentioned at HQ are
  mission `110`, and the showcase is mission `111`. Nothing from a later quest is shown.
- **The Core issue is at the end, so the field trial carries the argument.** In the
  single-room [Recon](Recon%20-%20Whats%20On%20This%20Board.md) the kits are opened at 0:37 and
  the children discover the simulator-to-hardware gap on their own boards. Here the crates stay
  sealed until the ceremony, so the Squad Leader's real board has to do that work at 0:41. If
  the field trial is cut, this plan loses its argument and becomes an hour of Python.
- **Mission Control never enters the portal before 0:44.** The transmission only works if Base
  has been a voice from somewhere else all hour.
- **The two lists are read as one list.** The single most important instruction in the ceremony
  is that a recruit without a crate is issued equipment in exactly the tone of a recruit with
  one. Get that wrong and the format does more harm than a plain webinar would.
- **Placeholders to fill before the first run:** `[PRICE]`, `[CODE]`, `[DEADLINE]`, `[LINK]`,
  `[EMAIL]`, `[WOKWI LINK]`, the certificate template, and the "do not open until" date on the
  sticker.

---

[Innovator Realm (Mega)](../../curriculum/010-innovator-mega/README.md) ·
[Quest `00` — Circuits](../../curriculum/010-innovator-mega/quest-00-circuits/README.md) ·
[Recon: What's On This Board?](Recon%20-%20Whats%20On%20This%20Board.md)
