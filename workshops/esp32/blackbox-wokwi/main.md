# BLACKBOX — main.py

The recon target. Paste this over whatever is in the **main.py** tab. It prints three unlabelled
numbers five times a second and explains nothing, which is the mission.

**No comments and no helpful variable names.** That is deliberate and it is the whole difficulty.
Do not tidy it up, do not rename `a`, `b` and `c`, and do not add a header explaining what is
attached to the board.

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

| Signal | What moves it | What they should notice |
| --- | --- | --- |
| `a` | Clicking the light sensor while the sim runs and dragging its slider | Big range, moves smoothly, roughly 0-4095 |
| `b` | Turning the potentiometer knob | Same range, but *they* control it exactly |
| `c` | Pressing the button | Only ever 1 or 0 — and it reads **1** when **not** pressed |

The light slider only exists while the simulation is running, and only appears when you click
the sensor. Nothing is ever covered by a hand here — that happens once, on the Squad Leader's
real board, at 0:41.

---

[Wokwi project](README.md) · [diagram.json](diagram.md) · [solution.py](solution.md)
