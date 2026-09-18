# Quest `01` — Motion

The rover quest. Every mission here puts the same micro:bit on wheels, and the difference that makes is the point: a program that was correct on a desk now has to survive a floor that is not perfectly flat, batteries that sag and wheels that do not turn exactly alike. Students spend this quest learning that a physical system is measured, not assumed.

**Required add-on:** a micro:bit rover kit — a Cutebot, or a motor driver board with a chassis, motors and a battery holder — plus roughly two metres of floor and a roll of dark tape for the track in missions `100` and `101`. This is stated at booking. The simulator cannot stand in for this quest, so a student whose kit has not arrived pairs with a classmate on camera or borrows a loaner for the session; the quest is not run without hardware.

| Mission | Title | What the student makes | Concepts & standards |
| --- | --- | --- | --- |
| **[`000`](000-rover-meet-microbit/)** | [Rover, Meet micro:bit](000-rover-meet-microbit/) | The rover assembled, the micro:bit seated, and a first program that drives forward for one second and stops | Outputs that move things; motor power is not speed; safe start and stop as a habit; CSTA 1B‑AP‑10 |
| **[`001`](001-driving-a-shape/)** | [Driving a Shape](001-driving-a-shape/) | A route program that drives a square on a taped course, with turn timings tuned until the rover comes back to its start | Sequence with duration; why the same program lands somewhere different each run; NGSS core ideas: **forces and motion** |
| **[`010`](010-speed-distance-variables/)** | [Speed, Distance, Variables](010-speed-distance-variables/) | A speed variable swept across three settings, distance measured at each and the results charted | Variables as tuning knobs, not just counters; CSTA 2‑AP‑11; NGSS practice: **analyzing and interpreting data** |
| **[`011`](011-taking-the-controls/)** | [Taking the Controls](011-taking-the-controls/) | A hand-held driving mode: tilt to steer, buttons to start and stop, running continuously while the rover moves | Reading a sensor in a loop; mapping an input range onto an output range; CSTA 2‑AP‑13 |
| **[`100`](100-following-the-line/)** | [Following the Line](100-following-the-line/) | A line follower using the rover's line sensors and a simple if/else — on the line, off the line, correct | The sense → decide → act loop; why on/off correction wobbles; CSTA 2‑AP‑13 |
| **[`101`](101-smoother-than-on-off/)** | [Smoother Than On/Off](101-smoother-than-on-off/) | The same follower rewritten with proportional steering, the gain tuned by hand and the lap timed before and after | Proportional control; tuning as measured iteration rather than guesswork; STEL practice: **systems thinking**; STEL context: **computation, automation & AI** |
| **[`110`](110-seeing-an-obstacle/)** | [Seeing an Obstacle](110-seeing-an-obstacle/) | An ultrasonic stop-and-avoid behaviour, then a rover that escapes a simple maze | Thresholds and state; where a sensor fails — angled, soft and very close surfaces; CSTA 2‑AP‑13 |
| **[`111`](111-teach-the-rover/)** | [Teach the Rover](111-teach-the-rover/) | **Build and show.** A movement classifier trained on the student's own accelerometer data, wired up to drive the rover, then tested on a classmate who moves differently — and the failure explained | micro:bit machine-learning tool or Teachable Machine; AI literacy: **evaluate bias and ethical impact**; STEL context: **computation, automation & AI** |

Mission `111` is where the realm's AI strand becomes concrete. The model works well for the student who trained it and often works badly for the next person, which is a result students discover themselves rather than being told, and it is the evidence the bias discussion rests on.

---

[Maker Realm (Kilo)](../README.md) · [Curriculum](../../README.md)
