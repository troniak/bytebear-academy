---
realm: maker
quest: "00"
mission: "000"
title: "Hello, Bear"
status: outline
duration: 45
slides: TBD
---

# Mission `000` — Hello, Bear

[Quest `00` — Signals](../README.md) · [Maker Realm (Kilo)](../../README.md) · [Curriculum](../../../README.md)

## What the student makes

A bear they draw themselves. On start the micro:bit shows a bear face the child has drawn
pixel by pixel on the 5x5 grid; pressing a button scrolls their initial underneath it.

## Concepts and standards

- A program does nothing until something runs it
- `on start` versus `forever`
- `show leds` as a drawing surface — 25 lights the child controls one at a time
- CSTA 1B‑AP‑10

## The reference bear

Give this as the starting bear, then hand it straight over. It is drawn with a single
`show leds` block from the Basic category — no extension, no coordinates.

```
# . . . #     ears, in the two top corners
. # # # .     top of the head
# # . # #     the sides, with an eye tucked inside each one
# . # . #     the sides again, and the snout between them
. # # # .     the chin, closing the outline
```

All five rows are doing work: rows two to five are a closed outline of the face, and the ears
sit in the corners row one leaves empty. Ears in the top corners are the whole trick at this
size — they are what makes twenty-five lights read as a bear rather than a face.

Expect someone to say the eyes look stuck to the sides of the head, because at this size they
are — the eye and the outline are neighbouring lights with nothing between them. That
complaint is the mission working. Ask them to fix it and they will, by moving an eye down a
row or opening up the chin, which is the first time a child in this quest changes a design
because they judged it rather than because they were told to.

**Then they change it.** The point of the mission is that the bear on the screen is theirs and
nobody else's, so the reference is a floor, never a target. Prompts that work: make it sleepy,
make it grumpy, give it one ear up, make it your pet instead of a bear. Every one of those is
a child clicking single squares on and off in the same block — which is exactly the practice
needed before mission `011` asks them to light the same grid with `plot` and coordinates.

Hold the finished bears up to the camera together at the end. Twenty-five lights, twenty-five
different faces, is the moment the class stops looking like a lesson.

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

- micro:bit v2
- Battery pack and USB cable

## Resources in this folder

| File | What it is |
| --- | --- |
| _none yet_ | Slide deck, worksheets, starter `.hex` files, clips and handouts for this mission live here. |
