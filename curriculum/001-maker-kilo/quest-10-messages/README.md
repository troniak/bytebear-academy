# Quest `10` — Messages

Two devices, and everything that goes wrong between them. This is the quest where a program stops being one thing running in one place: a student sends a number out of a device that cannot see whether it arrived, and has to design for that. Radio is genuinely taught here rather than described, because the radio pack means every student has both ends of a network on their own desk — which is what makes the quest work for a remote class, where two homes are far outside radio range of each other. The pod still builds one system together; they just exchange a written protocol instead of packets, and each student tests their half against a device they control.

**Required add-on:** the radio pack — a second micro:bit v2 with its own battery pack, and a 24‑LED ZIP halo. The halo is not decoration: radio traffic is invisible, and a ring that lights a colour the instant a packet lands is what lets a nine-year-old see a protocol working, stalling or dropping messages.

| Mission | Title | What the student makes | Concepts & standards |
| --- | --- | --- | --- |
| **[`000`](000-two-devices-one-program/)** | [Two Devices, One Program](000-two-devices-one-program/) | One micro:bit sends a number when a button is pressed; the other shows it — one program, flashed to both | A network needs both ends to agree before anything works; radio groups; CSTA 2‑NI‑04 |
| **[`001`](001-the-halo-speaks/)** | [The Halo Speaks](001-the-halo-speaks/) | The ZIP halo wired up and lighting one pixel per message, coloured by which device sent it | Making an invisible process visible; addressing individual pixels; CSTA 2‑CS‑02 |
| **[`010`](010-names-and-addresses/)** | [Names and Addresses](010-names-and-addresses/) | Each device given an ID, messages sent as name-and-value pairs, and anything addressed to someone else ignored | Addressing and filtering; why a device must decide what is not for it; CSTA 2‑NI‑04 |
| **[`011`](011-designing-a-protocol/)** | [Designing a Protocol](011-designing-a-protocol/) | A message format the pod agrees, writes down, and then both ends implement separately from the written version alone | An interface is a written agreement; CSTA 2‑AP‑19 (documenting); STEL practice: **collaboration & communication** |
| **[`100`](100-when-messages-go-missing/)** | [When Messages Go Missing](100-when-messages-go-missing/) | The working system deliberately broken — out of range, sending too fast, two senders at once — the loss rate counted, then acknowledgements added | Reliability, collisions and latency; measuring failure instead of assuming success; CSTA 2‑NI‑04, 1B‑NI‑04 |
| **[`101`](101-a-sensor-network/)** | [A Sensor Network](101-a-sensor-network/) | One device outdoors or in another room reporting readings to the other, the halo showing the live value, and the class aggregating results | Distributed data collection; CSTA 2‑CS‑02, 1B‑DA‑06; NGSS practice: **analyzing and interpreting data**; AI literacy: **data privacy** — what a network of home sensors would reveal |
| **[`110`](110-driving-it-from-across-the-room/)** | [Driving It From Across the Room](110-driving-it-from-across-the-room/) | The Quest `01` rover put under radio control from the second micro:bit, with a stop command that works even when the rover is out of sight | Remote control as a protocol, not a wire; designing a fail-safe; CSTA 2‑AP‑13. Students without a rover control a classmate's on camera or use a loaner |
| **[`111`](111-the-signal-chain/)** | [The Signal Chain](111-the-signal-chain/) | **Build and show.** A pod-built relay: a signal has to pass through every member's device, in an order the pod defined, and return to the sender — with each halo lighting as the message hops through it | A system nobody owns alone; CSTA 2‑AP‑18 (distributing tasks); NGSS practice: **communicating information** |

The failures in mission `100` are the ones students remember. A network that works perfectly teaches nothing about networks, so the quest deliberately spends a session making a working system fail in three different ways and counting what was lost.

---

[Maker Realm (Kilo)](../README.md) · [Curriculum](../../README.md)
