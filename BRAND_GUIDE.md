# Brand Guide & Visual Identity System

This document outlines the brand voice, visual aesthetics, color usage, typography rules, animation philosophy, and design system rules for Sudip Bohara / SB Studio.

---

## 1. Brand Identity & Positioning
* **Who We Are**: A high-craft digital agency & web engineering studio building modern digital products.
* **Mission**: To build digital experiences that establish immediate trust, drive business revenue, and scale effortlessly.
* **Vision**: To set the benchmark for digital craft across web applications, design systems, and digital agency standards.
* **Personality**: Precision-driven, understated luxury, technically elite, transparent.

---

## 2. Color Palette & Token Usage
* **Primary Canvas**: Dark Obsidian (`#050507`)
* **Card Surfaces**: Surface 1 (`#0A0B10`), Surface 2 (`#12131C`), Frosted Glass (`rgba(18, 19, 28, 0.65)`)
* **Border Hierarchy**: Subdued (`rgba(255, 255, 255, 0.07)`), Highlight (`rgba(255, 255, 255, 0.25)`)
* **Accents**: Electric Indigo (`#6366F1`), Cyan Beam (`#06B6D4`), Active Emerald (`#10B981`)
* **Usage Rule**: Accents are used sparingly for visual focus (active badges, hover sheens, primary CTAs). Never flood backgrounds with heavy saturated colors.

---

## 3. Typography & Spacing Rules
* **Primary Display**: `Inter` / `Geist Sans` with OpenType numeric features enabled (`cv02`, `cv03`, `cv04`, `cv11`).
* **Monospace Accent**: `Geist Mono` / `JetBrains Mono` for index tags (`01`, `02`), technical pills, and code identifiers.
* **Tracking & Scale**: Tight negative tracking on display titles (`-0.035em`), comfortable line height on body copy (`1.6`).

---

## 4. Imagery, Icons & Illustrations
* **Photography Style**: High-contrast, dark-mode adapted product screenshots framed in minimalist browser/device chrome.
* **Icons**: Crisp line icons via `lucide-react`, 1.5px to 2.0px stroke width.
* **Illustrations**: Zero generic 3D human vector art. Use subtle geometric mesh grids, radial lighting spotlights, and architectural UI wires.

---

## 5. Animation & Motion Philosophy
* **Physics Target**: Smooth 60fps spring transitions (`stiffness: 100, damping: 20`).
* **Hover Interaction**: Micro-lifts (`y: -4px`), subtle border illumination, smooth scale transitions (`scale: 1.01`).
* **Golden Rule**: Performance before animation. Motion must enhance spatial clarity and feedback—never delay user interaction.
