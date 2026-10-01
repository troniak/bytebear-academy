# Operation Blackbox — Wokwi project

The simulated board the squad is sent into, for
[Recon Mission: Operation Blackbox](../Recon%20Mission%20-%20Operation%20Blackbox.md).
Three components, no labels, no comments.

Each file below holds one fenced code block to copy straight into the matching Wokwi tab.

| File | Tab it goes in | What it is |
| --- | --- | --- |
| **[diagram.md](diagram.md)** | `diagram.json` | The wiring. Light sensor on `GPIO34`, potentiometer on `GPIO35`, button on `GPIO4` with an internal pull-up, LED and a 220 Ω resistor on `GPIO2`. |
| **[main.md](main.md)** | `main.py` | The recon target. Prints three unlabelled numbers five times a second and explains nothing. This is what the recruits are handed. |
| **[solution.md](solution.md)** | — | Presenter reference — Core, Stretch and Boss, and what to say instead of each fix. **Never posted in chat and never on screen before 0:27.** |

## Building the shared project

Wokwi has no import button, so this is a copy and paste, once, and then the link is reused
every run.

1. Open a new MicroPython ESP32 project:
   [wokwi.com/projects/new/micropython-esp32](https://wokwi.com/projects/new/micropython-esp32)
2. Click the **diagram.json** tab and paste the block from [diagram.md](diagram.md) over what
   is there.
3. Click the **main.py** tab and paste the block from [main.md](main.md) over what is there.
4. Rename the project **BLACKBOX** and save it.
5. **Share → Copy link**, and put that link in the plan wherever it says `[WOKWI LINK]`, and in
   chat snippet C2.

A Wokwi account is needed to *save* a project. It is not needed to *open* one, which is the
thing that matters — recruits follow the link, press play and are running in about fifteen
seconds with nothing to install and nothing to sign into.

## Check this before every run

- **Open the share link in a fresh browser profile with nothing logged in** and confirm it runs
  without a login prompt. If Wokwi ever starts demanding one, fall back to the blank
  [new project](https://wokwi.com/projects/new/micropython-esp32) link and have everybody paste
  `main.py` from chat — the diagram that comes with a blank MicroPython project is a bare board,
  so the recon has to move to the Squad Leader's screen for that run.
- **Find the light slider and know exactly where it is.** With the simulation *running*, click
  the light sensor and a slider appears over the part; drag it to set how bright the room is.
  There is no hand in a simulator and nothing gets covered — if the Squad Leader has to hunt for
  this live, the room loses two minutes at the worst possible moment.
- **Drag it to both ends and write down both numbers.** Which direction the reading moves as it
  gets darker is a property of the simulated module, not a law, and the Core objective is
  written as `<`. Know which way it goes before the squad finds out, and let them find out.
- **Press the button and confirm the third column reads 1 when nothing is touching it.** That is
  the pull-up, and it is the moment of the recon that does the teaching.

## If a part or a pin is rejected

Wokwi renames parts occasionally and the editor says so plainly — a bad part type or pin shows
as a red error on the line, and nothing else in the file is affected. **Paste it once, look at
the editor, and fix whichever line it flags.** Likely swaps, in order of likelihood:

| If this errors | Try |
| --- | --- |
| `wokwi-esp32-devkit-v1` | `board-esp32-devkit-c-v4` — same pin names, newer artwork |
| `esp:GND.1` | `esp:GND.2` or `esp:GND.3`; any ground pin will do and several wires may share one |
| `btn1:1.l` / `btn1:2.l` | `btn1:1.r` / `btn1:2.r` — the button's two terminals are `1` and `2`, and `.l`/`.r` are just which side you solder to |
| `wokwi-photoresistor-sensor` | Check the parts list in the editor's **+** menu for the current LDR module name and take its `AO` pin |

The part positions are only where things sit on the canvas. Drag them wherever you like; it
changes nothing electrically.

## Why these three parts

They are the three kinds of input the whole realm is built on, and each one answers a different
question. The potentiometer is a value a human sets. The light sensor is a value the world sets.
The button is not a value at all — it is a state, and it reads backwards. A recruit who can tell
those three apart from nothing but a column of numbers has done the actual job.

The light sensor here is a **module**, so the voltage divider is hidden inside it. That is a
deliberate simplification for a 35-minute mission — building the divider by hand, with the second
resistor, is
[mission `010`](../../../curriculum/010-innovator-mega/quest-00-circuits/010-numbers-that-mean-volts/README.md).
