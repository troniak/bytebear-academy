# Kit Fulfilment

How hardware gets from a supplier to a kitchen table, when the supplier is in Shenzhen, ByteBear
is in Canada, and the kitchen table may be anywhere. This covers the
[Innovator Realm](../curriculum/010-innovator-mega/README.md) kits — the Quest `00` starter kit
and the three add-on packs — because Innovator is the first realm where ByteBear ships physical
objects to individual homes and the first where a missed delivery costs a family a session.

**The old rule in this document was "one box per quest, packed by ByteBear, posted by ByteBear."
That holds domestically and breaks everywhere else.** What follows replaces it with a tiered
model, and separates the two things that rule was bundling together: getting *parts* to a house,
and getting a *ceremony* to a house. Only the first is a freight problem. The second turned out
to be a PDF.

## The geography problem

A kit routed through ByteBear crosses a border twice. Parts come from China to Canada, where GST
and any duty are paid and the lead time is worn. Then the packed box goes from Canada to a
student, and if that student is in the UK, the EU or Australia, it is taxed again on arrival and
carries international parcel postage that is comparable to the value of the kit itself.

CUSMA does not rescue the US leg either: preferential treatment requires *originating* goods, and
Chinese-made boards merely transiting Canada do not qualify.

**For any student outside North America, ByteBear is not a fulfilment hub. It is a detour.**

## What actually has to pass through ByteBear's hands

Four things have been forcing every box open on a Canadian table. They are not equally binding,
and separating them is what makes the rest of this document possible.

| Thing | Why it was required | Does it need the parts? |
| --- | --- | --- |
| **Pre-flashed board** | The board must run on power-up at the recon ceremony | Yes — but only for recon attendees. See below |
| **Power-test** | A DOA board found at packing rather than at T-0 | Yes |
| **Wiring card** | The circuit the host builds on camera at the unboxing | **No.** It is a printed card |
| **Seal and date** | One sealed box, opened at one moment, by everybody at once | **No.** It is a sticker |

**The seal and the card weigh nothing and clear customs as documents.** That is the whole
insight. The sealed box was never really about who shipped the parts — it was about the seal, the
date, and opening together. Those three things fit in an envelope and can be posted from Canada
to anywhere for very little, with no customs exposure at all.

## Pre-flashing, correctly scoped

The previous version of this document said pre-flashing was required for every box. It is not.
**Flashing is mission [`000`](../curriculum/010-innovator-mega/quest-00-circuits/000-hello-repl/README.md)'s
own curriculum** — "MicroPython flashed onto the board and a live prompt that answers back" is
literally what that mission's student makes. The pre-flashed image is a disposable throwaway that
exists so the box *does something* at a ceremony held before mission `000`, and the student
overwrites it in the first session either way.

The ceremony it exists for is the Core issue in
[Operation Blackbox](../workshops/esp32/Recon%20Mission%20-%20Operation%20Blackbox.md) and the
unboxing in [Recon: What's On This Board?](../workshops/esp32/Recon%20-%20Whats%20On%20This%20Board.md).
So it binds in exactly one case:

| The family | Opens the Quest `00` box at | Needs a pre-flashed board? |
| --- | --- | --- |
| **Attended the recon workshop** | The Core issue, on camera at 0:37 | **Yes.** The gap at 0:41 is the workshop's entire pitch and needs a running board |
| **Did not attend** | The start of mission `000` | **No.** They flash it themselves, as the mission intends |
| **Any add-on pack** | The previous quest's mission `111` | **No.** The Stick is flashed by the student with M5Burner in Quest `01` mission `000`; Grove sensors and the vision module carry their own firmware |

Three of the four boxes never needed a ByteBear flash. Only the recon-attendee starter kit does.

## The three tiers

| Tier | Who | How hardware arrives | How the ceremony arrives |
| --- | --- | --- | --- |
| **1 — Domestic** | Canada, and the US while it remains viable | Packed, flashed, sealed, tracked by ByteBear, exactly as below | In the box |
| **2 — Served regions** | UK, EU, Australia, once a region has steady volume | A regional 3PL or regional distributor holds ByteBear stock and posts locally | In the box, packed by the 3PL to the checklist |
| **3 — Rest of world** | Everywhere else | **Published parts list**, two suppliers per region, family buys locally | **Printed at home.** The Mission Pack, below |

**The tiers say where stock sits. The routes below say how much of a kit passes through
ByteBear's hands.** They are different axes, and any tier can run any route — a Canadian student
can be served board-only, and a UK 3PL can pack complete kits.

Tier 2 is the one that costs money to set up and solves the most. No border crossing at the
customer, no customs, no lithium problem, local lead times. Seeed and M5Stack both have regional
distribution to build on. It is not worth it for one cohort and is clearly worth it once a region
enrols steadily; `[volume threshold to justify a regional 3PL]` is the number to decide.

## The Mission Pack: the ceremony as a PDF

The ceremony does not travel with the hardware. It is a printable the parent runs off at home:

- **Seal strips**, with a space for the do-not-open date
- The **wiring card**, the same circuit the host builds on camera
- A **parent briefing** — what to buy, what not to let the child see, what to have ready
- A **luggage label** for the box, so it looks addressed rather than improvised

The parent buys the hardware locally against the published list, puts it in any box without the
child seeing, seals it, and the class opens together on camera. **Nothing is lost by printing it
rather than posting it.** In Tier 3 the parent was always going to be the one sealing the box —
they bought the parts — so a posted seal would only ever have been a better-looking sticker on a
box the parent sealed anyway. Printing removes a freight leg, a lead time and a failure mode.

Three requirements on the artwork, none of them optional:

1. **It must work in monochrome.** Mission [`111`](../curriculum/010-innovator-mega/quest-00-circuits/111-off-the-laptop/README.md)
   depends on *red lead to `VIN`, black lead to `GND`* — a safety instruction. If that is carried
   by wire colour and a family prints greyscale, the cue is gone. **Label every connection in
   text and treat colour as reinforcement, never as the only carrier.** This is the one place a
   printable can actually hurt somebody.
2. **One file, both paper sizes.** Canada and the US print Letter; the UK, EU and Australia print
   A4. Lay out inside the intersection of both margins rather than shipping two files somebody
   has to choose between.
3. **A no-printer fallback on the first page.** Plenty of households have no printer. A line the
   parent can copy onto any paper by hand, plus tape, does the job — the seal is a promise, not a
   security device.

**Send it to the parent, not to the family address**, with a subject line that does not spoil the
contents, and say plainly that it is to be printed out of sight of the student.

**Tier 1 and Tier 2 still get a real sticker**, because the box is already being packed and
sealed by ByteBear or the 3PL and the sticker costs nothing at that point. The Mission Pack is
what makes Tier 3 possible, and it doubles as the recovery path at every tier: a parcel that will
not make its date stops being a crisis and becomes a PDF and a trip to a local supplier.

**Tier 3 families do not get a pre-flashed board.** That is fine for mission `000` and it is
not fine for the recon ceremony, so a Tier 3 family attending recon either flashes before the
call — instructions in the briefing, and the moderator can walk them through it in the fifteen
minutes before the session — or takes part in the unboxing without the 0:41 demonstration, with
the host's board carrying it. Say which in the confirmation email; do not let it be a surprise
at 0:37.

## Lithium: verify this before anything else

**The M5StickS3 has a lithium cell built in, and Canada Post prohibits lithium batteries in
international and US-bound mail — including cells installed in equipment.**

The distinction this document previously drew is real but does not help here: a cell inside a
complete product gets favourable *air freight* treatment (UN3481 / PI967 Section II), which is
not the same as being admissible in the postal stream. If the prohibition holds as understood,
every pack from Quest `01` onward needs a courier with dangerous-goods handling — DHL, FedEx or
UPS — at several times postal rates on a ≈£29 item.

**`[Confirm with Canada Post directly before committing to any international shipping plan.]`**
Three of the four boxes depend on the answer. If it holds, Tier 2 and Tier 3 are not
optimisations — they are the only ways to serve those regions at all.

## Duty, tax and who pays

Rules in this area moved substantially during 2025 and the figures below need confirming against
current guidance before they are relied on:

| Destination | What applies | Practical effect |
| --- | --- | --- |
| **UK** | No low-value relief. Below £135 the *seller* must register for UK VAT and charge at the point of sale; above it, import VAT and duty at the border | Registration, or a surprise bill |
| **EU** | IOSS covers consignments ≤ €150 — register, charge VAT at checkout, nothing owed at the door | IOSS registration is the clean path |
| **US** | De minimis was broadly suspended in 2025. **Do not plan against the old $800 figure** | Verify before quoting a US price |
| **Australia** | GST applies to low-value imports, with seller registration above a sales threshold | Check the threshold against projected volume |

**Never ship DDU.** A family that gets a customs bill plus a carrier handling fee at the door has
a refund conversation with you, on a course they have not started yet. Either register and ship
DDP, or move that region to Tier 2 or Tier 3 and stop shipping to it.

## What ships, and when

Four boxes across the realm, one per quest. Each is posted to arrive **before** the session that
opens it, and each is asked to stay sealed until that session.

| Box | Contents | Posted to land before | Opened at |
| --- | --- | --- | --- |
| **Quest `00` starter kit** | The Core kit, below | The free recon workshop, or mission `000` if the family did not attend one | The Core issue at the recon workshop, or the start of mission `000` |
| **M5 pack** | M5StickS3 and a Grove distance unit | Quest `00` mission `111` | The showcase, in front of families |
| **Environment pack** | Gas, climate, light and sound sensors with Grove cables | Quest `01` mission `111` | The showcase |
| **Vision pack** | Grove Vision AI V2 and camera, pan-and-tilt bracket, two micro servos, battery holder | Quest `10` mission `111` | The showcase |

Quest `11` has no box. The realm ends by pointing at the Raspberry Pi that
[Engineer](../curriculum/011-engineer-giga/README.md) runs on, and the student keeps the machine
they built.

**The add-on boxes are the harder scheduling problem, not the starter kit.** They must arrive
during the *previous* quest, while the family is mid-course and not thinking about hardware, and
then sit unopened in the house for up to two weeks. Say "keep it sealed" in the dispatch email,
again in the T-7 email, and once more in the session before the showcase. Across a time zone and
a customs queue, add a week to every horizon below and check earlier.

## The Quest `00` kit

| Item | Qty | Notes |
| --- | --- | --- |
| ESP32 dev board | 1 | **Flashed before packing for recon attendees only.** MicroPython plus the Core program as `main.py` |
| USB data cable | 1 | Data, not charge-only. A charge-only cable produces a board that powers up and never appears on the laptop, which is a miserable first session |
| Breadboard, half size | 1 | |
| Jumper wires | 1 set | Pre-stripped, as the realm's safety note requires |
| LEDs | several | Assorted colours |
| Resistors | assorted | Must include the values mission [`100`](../curriculum/010-innovator-mega/quest-00-circuits/100-fading-not-switching/README.md) sizes for an LED |
| Pushbutton | 1 | |
| Potentiometer | 1 | |
| Light-dependent resistor | 1 | Plus its divider resistor — mission [`010`](../curriculum/010-innovator-mega/quest-00-circuits/010-numbers-that-mean-volts/README.md) builds the divider by hand |
| Temperature and humidity sensor | 1 | The undemonstrated part in mission [`101`](../curriculum/010-innovator-mega/quest-00-circuits/101-reading-the-datasheet/README.md), so it needs a real datasheet a student can find |
| 4×AA battery holder, flying leads | 1 | For mission [`111`](../curriculum/010-innovator-mega/quest-00-circuits/111-off-the-laptop/README.md). **Cells are not included** — the family provides four AAs |
| Wiring card | 1 | Printed. The same circuit the host builds on camera at the unboxing |
| Seal | 1 | "SEALED BY BASE — DO NOT OPEN UNTIL [date]" across the opening |

The realm README publishes ≈£30, defined as *one student buying one of each at list price*, and
sizes every add-on against it so a family's outlay stays flat across the realm. **That anchor
does not survive translation.** Local taxes, distributor margins and regional availability will
break add-on parity unevenly, so the figure needs per-region bands rather than one converted
number: `[CA band]` · `[US band]` · `[UK band]` · `[EU band]` · `[AU band]` · `[rest-of-world
guide price]`. The gap between landed cost and the published figure is what pays for the box, the
card, the labour and the postage — and in Tier 2 it also pays the 3PL.

## Sourcing

**Route A — rebrand a ready-made starter kit.** One SKU in the door. Open it, flash the board if
the family is a recon attendee, add the wiring card and the AA holder if the kit lacks one,
reseal with your own seal. Far less picking, far less stock to count, and it is the right answer
until volume says otherwise.

> **The risk is silent substitution.** These kits change contents between production runs without
> changing the listing. Pin one supplier and one SKU, buy a batch per cohort, and **check the
> contents of the first kit in every batch against the table above** before packing the rest. The
> wiring card and mission `101` both assume specific parts. Prefer a *branded* kit over a generic
> marketplace listing — branded kits are the ones with stable contents, and the premium is
> cheaper than discovering a substituted sensor mid-cohort.

**Route B — bulk components, ten to twelve lines.** Cheaper per kit and you control exactly what
is inside, including the resistor values and a sensor with a findable datasheet. It costs picking
labour, which is the thing that scales badly. Move to it when the volume justifies the hour.

**Route C — regional stock (Tier 2).** The same SKU as Route A, bought and held *in the
destination region* by a 3PL that packs to the checklist above. ByteBear supplies seals, wiring
cards and the packing standard; the 3PL supplies the shelf and the postage. The board is not
pre-flashed under this route unless the 3PL can be trusted with the step, so Route C pairs
naturally with non-recon enrolment or with a flash-before-the-call instruction.

**Route D — board-only.** ByteBear touches the board and nothing else. The ESP32 is flashed,
power-tested and posted to the *parent* in a small padded envelope; the breadboard, wires,
components and battery holder are drop-shipped from a supplier in whatever packaging they use;
the Mission Pack arrives as a PDF. The parent puts the board in the parts box, seals it, and the
class opens one box on camera.

> This keeps the pre-flash and therefore keeps the 0:41 gap, while deleting the picking, the
> weighing, the kit stock and the bulky international freight. What ByteBear holds is the one
> item that actually needs its hands — and that is also the highest-value line, the one most
> likely to arrive dead, and the only one worth power-testing.
>
> **A bare board posts well.** Light, small, no lithium, low declared value, and it clears
> customs as about the cheapest thing in this document. Two inbound shipments is not the failure
> the old "not several parcels" rule was guarding against: that rule protected the *child* from
> seeing hardware early, and here both shipments go to the parent, who does the sealing.
>
> **What it costs:** you no longer control what the parts box contains, so mission
> [`101`](../curriculum/010-innovator-mega/quest-00-circuits/101-reading-the-datasheet/README.md)'s
> datasheet-findable sensor and mission [`100`](../curriculum/010-innovator-mega/quest-00-circuits/100-fading-not-switching/README.md)'s
> resistor values become supplier promises rather than checked facts. Pin a branded SKU, and
> order one to your own address at the start of every batch and check it against the kit table.

**Route E — full drop-ship.** Nothing passes through ByteBear. Supplier to family, Mission Pack
by email, no stock, no packing line, no postage, no spares.

> **Precondition, stated plainly: this route requires removing the unboxing from the recon
> workshop**, or accepting that the host's board alone carries the 0:41 demonstration. A
> drop-shipped board is not flashed, and an unflashed board cannot do the thing the segment
> exists for. Both workshop plans call the unboxing the reason the session exists and place it
> before the offer deliberately, so this is a conversion decision, not a logistics one.
>
> **Decide it with the right comparison.** Packing is a per-kit labour cost you can measure in an
> afternoon. The unboxing is worth whatever a point of booking rate is worth. If removing it
> moves conversion at all, the packing line is almost certainly the cheaper thing to keep.
>
> Route E is the right answer in exactly two places: a region that cannot be served any other way,
> and a late enrolment who missed the recon workshop anyway and opens their box at mission `000`.
> Both are already covered without adopting it globally.

| Route | ByteBear handles | Pre-flash possible | Ceremony | Best for |
| --- | --- | --- | --- | --- |
| **A** — rebranded kit | The whole box | Yes | Sealed by ByteBear | The default, at low volume |
| **B** — bulk components | The whole box, and the picking | Yes | Sealed by ByteBear | High volume, full control of contents |
| **C** — regional stock | Nothing; the 3PL packs | Only if the 3PL is trusted with it | Sealed by the 3PL | A region with steady enrolment |
| **D** — board-only | The board | **Yes** | Parent seals, Mission Pack | **Cutting the packing line without losing the pitch** |
| **E** — full drop-ship | Nothing | No | Parent seals, Mission Pack | Unservable regions; non-recon late enrolments |

Whichever route: **two suppliers per line, not one**, and per region. A single-sourced part that
goes out of stock in the week before a cohort starts is the failure mode that cannot be recovered
in time, and a supplier that is fine in Toronto may not ship to Manchester at all.

## Packing a kit

1. **Flash the board**, for recon attendees. MicroPython, then `main.py` for the session it is
   opening. Skip for everyone else — mission `000` does it.
2. **Power-test it.** Unplug, replug, confirm it runs on power-up alone with no laptop. A board
   that was flashed but not tested is a board you *believe* works. Power-test unflashed boards
   too: confirm they enumerate over USB.
3. **Pack to the checklist**, in the same order every time.
4. **Weigh the sealed box.** Every kit in a batch should weigh the same within a few grams, and a
   scale finds a missing part faster and more reliably than a second person checking. A missing
   resistor discovered at mission `100` costs that student a session.
5. **Seal and sticker**, with the do-not-open date written in.
6. **Label, and record the tracking number against the student.** The T-2 check is worthless
   without it.

**Packing a board-only shipment (Route D)** is the same discipline on a shorter list:

1. **Flash**, for recon attendees. **Power-test**, always — this is now the only QA in the chain.
2. **Envelope it with an anti-static bag and something rigid**, addressed to the parent, not the
   student.
3. **Include one printed line** — *"this goes in the box with the rest, do not let them see it"* —
   because the Mission Pack is a separate email and the envelope may arrive first.
4. **Record the tracking number and the supplier's**, both against the student. Two shipments
   means two things to check at T-2, and the parts box is the one that slips.

**Keep spares of the two things that fail:** boards and cables. The T-2 check exists to catch a
dead parcel or a DOA board, and a same-day replacement posted that afternoon is the only fix that
saves the first session — which is only true domestically. **In Tier 2 the spares live with the
3PL, and in Tier 3 there are none**, so a Tier 3 student's fallback is the simulator and the
published list, not a replacement in the post.

## Stock and lead time

**T-14 dispatch means parts on a shelf when a family enrols, not an order placed when they
enrol.** Overseas distributors run in weeks, and a cohort that fills late is the normal case, not
the exception. Hold at least one cohort's worth plus spares, and re-order at a threshold rather
than when the shelf is empty.

The add-on packs need the same buffer on a longer horizon, because they are ordered while a
different quest is running and nobody is thinking about them.

**Tier 2 doubles the problem**: stock sits in two places, and the regional shelf is the one you
cannot see. Agree a re-order threshold with the 3PL in writing and ask for a monthly count.

## The dispatch calendar

Both workshop plans already carry these rows; this is the same sequence for any session that
opens a box. **Tier 2 and Tier 3 run a week earlier at every step.**

| When | What |
| --- | --- |
| **At booking** | *Tier 3 only:* Mission Pack PDF and the published parts list sent to the parent. No freight, so this happens at booking rather than on a dispatch clock |
| **T-14** | Kits posted, sealed, tracking recorded per student. *Tier 2:* dispatch instruction to the 3PL |
| **T-7** | Confirmation email. Registered families get a separate line: *keep the box sealed, have it in the room.* Tier 3 families get the flash-before-the-call instruction |
| **T-2** | **Check that it arrived.** A student whose kit is in a depot needs to be known about now, not during the session. *Tier 3:* check they bought the parts |
| **T-0** | Any student without a kit is given a job in the unboxing and a replacement is posted the same day |

## When it goes wrong

| If | Then |
| --- | --- |
| **The parcel has not arrived by T-2** | Chase the courier, and post a replacement rather than waiting to find out. Tell the family before the session, never during it |
| **A board is dead on arrival** | Same-day replacement from spares. The student runs that session in Wokwi, which covers everything except mission `110` |
| **A part is missing** | Post the part, and post it alone rather than waiting to batch it. Then look at the weight log for that batch, because it will usually be in there |
| **The box was opened early** | Nothing to do and no comment to make. Call their name at the ceremony and ask them to hold up the board they already know |
| **A family cancels after dispatch** | **Policy decision, not yet made.** Decide before the first cohort whether the kit is returned, kept, or kept-and-invoiced, and put the answer on the booking page rather than into an email argument later. International returns are rarely worth the freight — price that in |
| **A kit is needed at short notice** | Keep one or two fully packed kits sealed on the shelf at all times. A late enrolment that cannot be served is a refund |
| **A parcel is held at customs** | Move that student to the simulator for the affected sessions and treat it as a Tier 3 case: send the Mission Pack, point at the parts list. Chasing a foreign customs queue mid-cohort does not work |
| **A family is charged duty at the door** | Refund it the same day, without argument, and move that region off direct shipping. It is a pricing failure, not the family's problem |
| **Route D: the parts box lands and the board envelope does not** | Post another board same-day; it is small, cheap and you hold spares. This is the cheap half to replace, which is the point of the split |
| **Route D: the board lands and the parts box does not** | Chase the supplier, and treat it as a Tier 3 case — the published list and a local purchase will beat a reshipped parcel |
| **A region cannot be served at all** | Sell the simulator track honestly, or do not sell. Do not take a booking against a parcel you are not confident will arrive |

## What is never shipped

- **AA cells.** The family provides them. Stated in mission `111` and on the wiring card.
- **Mains adapters of any kind.** The realm runs on USB or a battery pack, never mains, and
  shipping a wall wart invites exactly the thing the safety note rules out. Internationally it
  also invites the wrong plug.
- **Lithium cells loose in a kit.** And, pending the check above, **very probably no lithium
  cells internationally at all**, installed in a product or otherwise. See the lithium section.

## Why Engineer does the opposite

[Engineer realm](../curriculum/011-engineer-giga/README.md) deliberately does not ship. It
publishes *"a single specified parts list with current pricing and at least two suppliers per
region"* and the family buys direct, because a Raspberry Pi with storage, a case and a camera is
too expensive to hold as stock, too variable in availability, and often already partly owned.

The dividing line was originally about cost: **ByteBear ships what it can pre-configure and seal
for a ceremony, and publishes a list for everything else.** Geography is the second axis of the
same rule. A £30 kit with a flashed board in it is the first kind *within reach of a shelf ByteBear
controls*; the same kit bound for a country two customs regimes away is the second kind, whatever
it costs. Tier 3 is the Engineer model applied to Innovator, and the Mission Pack is what keeps it
from feeling like a downgrade.

## Placeholders to fill

`[Canada Post lithium ruling — check first]` · `[supplier and SKU for Route A]` ·
`[regional 3PL, per served region]` · `[Mission Pack PDF — mono-safe, Letter/A4]` · `[volume threshold to justify a regional 3PL]` ·
`[bulk cost per kit]` · `[postage class and carrier, per tier]` · `[route in use, per region]` ·
`[board-envelope postage class]` · `[per-region price bands]` ·
`[VAT/IOSS/GST registrations held]` · `[do-not-open date, per cohort]` · `[cancellation policy]` ·
`[buffer stock level, per region]`

---

[Innovator Realm (Mega)](../curriculum/010-innovator-mega/README.md) ·
[Quest `00` — Circuits](../curriculum/010-innovator-mega/quest-00-circuits/README.md) ·
[Recon](../workshops/esp32/Recon%20-%20Whats%20On%20This%20Board.md) ·
[Operation Blackbox](../workshops/esp32/Recon%20Mission%20-%20Operation%20Blackbox.md) ·
[Curriculum](../curriculum/README.md)
