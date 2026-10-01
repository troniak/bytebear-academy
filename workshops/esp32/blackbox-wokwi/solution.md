# BLACKBOX — solution.py

**Presenter reference only.** Never posted in chat, never on screen before 0:27, and never
pasted into the shared project. It exists so that whoever is running the squad room has all
three tiers in front of them without having to write them live.

```python
# Presenter reference only. Never posted in chat, never shown before 0:27.
#
# Core      - the LED follows the light sensor, on a threshold the recruit chose.
# Stretch   - the potentiometer sets the threshold live.
# Boss      - it latches: once it trips it keeps blinking until the button is pressed.
#
# The comparison below is written as "<". Whether dragging the light slider
# toward dark makes the number go UP or DOWN is a finding, not a given - check it
# in the simulator the day before and be ready for either. Do not tell the squad.

from machine import Pin, ADC
import time

light = ADC(Pin(34)); light.atten(ADC.ATTN_11DB)
knob = ADC(Pin(35)); knob.atten(ADC.ATTN_11DB)
button = Pin(4, Pin.IN, Pin.PULL_UP)
led = Pin(2, Pin.OUT)


# --- Core -------------------------------------------------------------------
def core():
    while True:
        value = light.read()
        print(value)
        if value < 1000:              # their number, not this one
            led.value(1)
        else:
            led.value(0)
        time.sleep(0.2)


# --- Stretch ----------------------------------------------------------------
def stretch():
    while True:
        value = light.read()
        threshold = knob.read()       # read it EVERY time round, not once before
        print(value, threshold)
        led.value(1 if value < threshold else 0)
        time.sleep(0.2)


# --- Boss -------------------------------------------------------------------
def boss():
    alarm = False                     # the variable that remembers
    while True:
        value = light.read()
        if value < 1000:
            alarm = True
        if button.value() == 0:       # pulled up: 0 means pressed
            alarm = False
        if alarm:
            led.value(not led.value())
        else:
            led.value(0)
        time.sleep(0.2)


core()
```

## The three traps, and what to say instead of the fix

| Tier | What goes wrong | Say this |
| --- | --- | --- |
| Core | The `if` ends up outside the `while`, so it is queued after a loop that never ends and never runs at all — numbers scroll, LED stays dark. | "What line is Python pointing at?", then "when does `while True` finish?" This is also [the deliberate mistake](../Recon%20Mission%20-%20Operation%20Blackbox.md) you make on purpose at 0:32. |
| Stretch | The knob is read once, before the loop, so the threshold never updates. | "When does that line run? How many times?" Same bug as the Core one, found independently. Let them find it. |
| Boss | No memory: the LED follows the sensor instead of latching, so it stops blinking the moment the light comes back. | "What has to still be true after the light comes back?" That question is the definition of a state machine and they get there on their own. |

---

[Wokwi project](README.md) · [diagram.json](diagram.md) · [main.py](main.md)
