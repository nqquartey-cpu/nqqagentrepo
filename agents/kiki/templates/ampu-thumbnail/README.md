# AMPU YouTube Thumbnail Template — v2 "Coast to Coast" (Nov 2026)
**Use `ampu-v2.html`.** v1 (`ampu-thumb.html`) was rejected: guests too small, no LA/DC, not enough energy.

Dr. Quartey's direction: guests and their titles are prominent; LA and DC both visible; energy and motion.
- Sky runs from LA golden hour (left: palms, Hollywood hills, DTLA) to DC night (right: Washington Monument, Capitol), with a dashed flight arc between them
- Host uses a real-photo "flying" cutout (`host_fly_clean.png`); his hand reaches toward DC
- Four skewed gold-framed guest cards: big face, name, full title
- Real photos only (Thumbnail Guardian rule)

**Per episode:** edit the date/time in `.when` and the four `.card` blocks (photo `r_<name>.png`, name, title). Use `.nm.sm` for long names.
**Render:** `node render.js out.png 1 ampu-v2.html`, then export a JPG under 2 MB.
