---
title: "Ender-7 Speed Upgrade"
date: 2025-10-19
tags: ["3D printing", "Klipper"]
summary: "Linear rails, tuned accel, and cleaner harnessing."
---

{{< image src="/img/ender7.jpg" alt="Ender-7 after rail mod" position="center" style="border-radius:12px;" >}}

## Notes
- Rails on X/Y, belt path cleaned up, resonance tuned.

{{< code language="ini" title="Klipper: input shaper snippet" open="true" >}}
[resonance_tester]
accel_chip: adxl345
{{< /code >}}
