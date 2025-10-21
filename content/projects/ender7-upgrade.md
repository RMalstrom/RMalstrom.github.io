---
title: "Ender 7: Hotend & Speed Upgrade"
date: 2025-10-10
description: "HeroMe Gen7 hotend, higher flow, faster PLA profiles."
tags: ["3d-printing", "klipper", "hardware"]
categories: ["Hardware"]
# If you want an external link button:
# external_url: "https://github.com/yourrepo/ender7-upgrade"
---

**Goal:** reduce print time while keeping quality.  
**Upgrades:** HeroMe Gen7 hotend, tuned input shaper, adaptive mesh.

### Results
- 0.28 mm layer “draft” profile: ~2.1× speedup
- Benchy in ~28 minutes

{{< image src="/images/projects/ender7/benchy.jpg" alt="Benchy" caption="Draft Benchy after tuning" >}}

### Notes
- Orca Slicer: high-flow filament profiles
- Klipper: `Mainsail` graphs helped tune accel limits
