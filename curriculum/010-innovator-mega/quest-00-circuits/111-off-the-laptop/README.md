---
realm: innovator
quest: "00"
mission: "111"
title: "Off the Laptop"
status: outline
duration: 45
slides: TBD
---

# Mission `111` — Off the Laptop

[Quest `00` — Circuits](../README.md) · [Innovator Realm (Mega)](../../README.md) · [Curriculum](../../../README.md)

## What the student makes

**Build and show.** A battery-powered device of the student's own design that senses one thing and reports it, boots from `main.py` with no laptop attached, and is demonstrated with its circuit drawn and one bug explained

## Concepts and standards

- NGSS practice: **designing solutions and communicating results**
- STEL practice: **making and doing**
- Drawing the circuit you built so that somebody else could rebuild it

## The unlock

The session closes by handing over what Quest `01` runs on: the M5 pack. The student has just demonstrated a device they wired themselves, running on four AA cells with nothing plugged into it. The box — [posted ahead](../../../../docs/kit-fulfilment.md) to at-home learners and left sealed until this moment, so the whole class opens together — holds the same chip family and the same language, already in a case, with a screen on the front and a battery inside — somebody else's answer to the problem they spent eight missions solving by hand. They open it in front of the room and are asked not to switch it on until mission `000`.

## Run of show (45 minutes)

Follows the ByteBear 5E shape. Not yet written.

| Phase | Min | Beat | What happens |
| --- | --- | --- | --- |
| **Engage** | 5 | Goals · Intro · Context | |
| **Explore** | 15 | Team · Build · Hypothesis · Test | |
| **Explain** | 5 | Check | |
| **Elaborate** | 15 | Extend · Share | |
| **Evaluate** | 5 | Demo | |

## Materials

- ESP32 dev board, USB data cable, and a laptop running Thonny — the laptop is used to load the program and then put away
- Breadboard and jumper wires
- LEDs, resistors, a pushbutton, a potentiometer and a light-dependent resistor
- Temperature and humidity sensor from the starter kit
- **4×AA battery holder with flying leads, from the starter kit, and four AA cells** — the cells are the one consumable a family provides
- **Optional: a USB power bank**, if the family has one. It works, and see the warning below before relying on it

## Power

This is the mission the battery holder is in the kit for, and it is worth being clear about why,
because "runs on a battery" is doing three different jobs at once and only one of them is about
electricity.

1. **It proves the program lives on the board.** For seven missions the student has pressed play
   in Thonny and watched the board react, and a beginner genuinely cannot tell you where the
   program *is*. Unplugging the laptop is the only demonstration that settles it. That claim was
   made back in mission [`001`](../001-code-that-stays/); this is where it is tested.
2. **It turns a peripheral into an object.** Tethered to a laptop, the thing is an accessory of
   the laptop. Untethered, it is something the student carries to whoever is in the house. This
   is the moment the board becomes theirs, and a wall socket is still a leash.
3. **It makes the power budget real.** The budget written in mission
   [`100`](../100-fading-not-switching/) has been arithmetic on paper until now. On four AA cells
   it becomes the reason the device is still running at the end of the demonstration, or is not.

**Wiring it: the holder's red lead to `VIN`, the black lead to `GND`.** Four alkaline cells give
about 6 V fresh and around 4.8 V worn, and the board's onboard regulator brings that down to the
3.3 V the chip runs on. Three questions are worth asking out loud while it is connected, and all
three are strand 11 content the student already has the tools for:

- Six volts in, three point three volts out — **where did the rest of it go?** (Heat, in the
  regulator. Feel it.)
- **How long will these last?** Capacity divided by draw, using the budget from mission `100`.
- **What happens as they run down?** The supply sags, the board browns out and resets — which is
  exactly the fault they diagnosed on somebody else's board in mission
  [`110`](../110-when-the-circuit-disagrees/), now arriving on their own and for an honest reason.

**Never wire a battery to the `3V3` pin.** That bypasses the regulator and there is nothing left
to protect the chip. Red to `VIN`, black to `GND`, and check it before power goes on.

**The power bank warning, which will otherwise ruin a demonstration in front of families.** Many
USB power banks switch themselves off below roughly 50-100 mA, and an ESP32 with the radio idle
can sit under that threshold. The board runs for twenty seconds, dies, and the student concludes
in front of an audience that they broke it. If a student is using a bank, test it on their actual
program the week before — or put them on the AA holder, which has no such behaviour. A power bank
is also, electrically, the same 5 V over the same cable as the laptop, so it satisfies the first
two purposes above and teaches nothing about the third.

## Resources in this folder

| File | What it is |
| --- | --- |
| _none yet_ | Slide deck, worksheets, starter `.py` files, clips and handouts for this mission live here. |
