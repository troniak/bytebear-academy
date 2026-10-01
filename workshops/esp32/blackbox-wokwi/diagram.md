# BLACKBOX — diagram.json

The wiring. Paste this over whatever is in the **diagram.json** tab of a new
[MicroPython ESP32 project](https://wokwi.com/projects/new/micropython-esp32).

| Component | Pin | Notes |
| --- | --- | --- |
| Light sensor module | `GPIO34` | `AO` to the pin, `VCC` to 3V3, `GND` to ground. Input-only pin, which is fine for an ADC. |
| Potentiometer | `GPIO35` | `SIG` to the pin. The one signal a human sets directly. |
| Pushbutton | `GPIO4` | One terminal to the pin, the other to ground. The pull-up is internal, in code, not in the diagram. |
| LED + 220 Ω | `GPIO2` | Not part of the recon. It is what the build at 0:27 drives. |

```json
{
  "version": 1,
  "author": "ByteBear Academy",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-esp32-devkit-v1", "id": "esp", "top": 0, "left": 0, "attrs": {} },
    {
      "type": "wokwi-photoresistor-sensor",
      "id": "ldr1",
      "top": -60,
      "left": 230,
      "attrs": {}
    },
    {
      "type": "wokwi-potentiometer",
      "id": "pot1",
      "top": 110,
      "left": 230,
      "attrs": {}
    },
    {
      "type": "wokwi-pushbutton",
      "id": "btn1",
      "top": 290,
      "left": 230,
      "attrs": { "color": "green" }
    },
    { "type": "wokwi-led", "id": "led1", "top": -60, "left": 430, "attrs": { "color": "red" } },
    { "type": "wokwi-resistor", "id": "r1", "top": 40, "left": 430, "attrs": { "value": "220" } }
  ],
  "connections": [
    [ "esp:TX0", "$serialMonitor:RX", "", [] ],
    [ "esp:RX0", "$serialMonitor:TX", "", [] ],

    [ "ldr1:VCC", "esp:3V3", "red", [] ],
    [ "ldr1:GND", "esp:GND.1", "black", [] ],
    [ "ldr1:AO", "esp:D34", "green", [] ],

    [ "pot1:VCC", "esp:3V3", "red", [] ],
    [ "pot1:GND", "esp:GND.1", "black", [] ],
    [ "pot1:SIG", "esp:D35", "blue", [] ],

    [ "btn1:1.l", "esp:D4", "purple", [] ],
    [ "btn1:2.l", "esp:GND.1", "black", [] ],

    [ "esp:D2", "r1:1", "orange", [] ],
    [ "r1:2", "led1:A", "orange", [] ],
    [ "led1:C", "esp:GND.1", "black", [] ]
  ],
  "dependencies": {}
}
```

The `top` and `left` values are only where each part sits on the canvas. Drag them wherever you
like — it changes nothing electrically.

---

[Wokwi project](README.md) · [main.py](main.md) · [solution.py](solution.md)
