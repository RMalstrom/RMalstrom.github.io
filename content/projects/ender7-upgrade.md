---
title: "Ender 7 Speed Upgrade Project"
date: 2025-10-15
description: "Boosting PLA print speed by 2× using a HeroMe Gen7 hotend and Klipper tuning."
tags: ["3D printing", "hardware", "klipper", "engineering"]
categories: ["Hardware"]
tech: ["Klipper", "Orca Slicer", "Fusion 360"]
external_url: "https://github.com/RMalstrom/ender7-upgrade"
discipline: "3D printing"
mark: "04"
---

## Objective
Increase print speed without compromising surface quality on the Ender 7.

## Tools & Setup
- **Hardware:** Ender 7, Sonic Pad (Klipper)
- **Software:** Orca Slicer, Fusion 360
- **Mods:** HeroMe Gen7 hotend, dual-gear extruder

## Process
1. Modeled the hotend in CAD for airflow optimization
2. Tuned Klipper's input-shaper and pressure-advance
3. Measured overhang quality using standardized test models

## Results
| Metric | Before | After |
|---------|---------|--------|
| Benchy Time | 53 min | 26 min |
| Quality | 7/10 | 9/10 |

## Gallery
{{< image src="/images/projects/ender7/benchy.jpg" alt="Benchy print" caption="High-flow Benchy result" >}}
{{< image src="/images/projects/ender7/setup.jpg" alt="Ender 7 setup" caption="Upgraded Ender 7 setup" >}}

## Files & Source
- **GitHub:** [RMalstrom/ender7-upgrade](https://github.com/RMalstrom/ender7-upgrade)
