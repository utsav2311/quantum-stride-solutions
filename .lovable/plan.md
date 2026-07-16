## Plan: Keep Hero Carousel Titles on One Line Across All Devices

### Problem
The selected slide title “INNOVATION” (and the other carousel titles) currently uses `break-words` with aggressive responsive font sizing (`text-5xl` → `text-[10rem]`). On small/mobile viewports, long words can wrap to a second line.

### Goal
Ensure every hero carousel title renders on a single line on all devices without clipping or overflow.

### Changes
1. **Update `src/components/HeroCarousel.tsx`**
   - Replace `break-words` with `whitespace-nowrap` on the main title `<span>`.
   - Adjust the responsive font-size scale so the largest words (e.g., “INNOVATION”) still fit within the container width on the smallest screens.
   - Optionally add `overflow-hidden` / `text-ellipsis` safeguards, but prefer sizing that avoids overflow entirely.
   - Apply the same treatment to the `titleAccent` span if it exists.

2. **Verification**
   - Run TypeScript typecheck (`tsgo --noEmit`).
   - Capture Playwright screenshots of the hero carousel on mobile, tablet, and desktop viewports to confirm each title stays on one line.

### Out of scope
- No content/copy changes to the slide data.
- No changes to the carousel autoplay, images, or CTA behavior.

### Acceptance criteria
- All five carousel titles (`FREEDOM`, `FIT Perfectly`, `PERFORM Exceptionally`, `FEEL Natural`, `RESEARCH & INNOVATION`) display on a single line at every breakpoint.
- No horizontal overflow or clipping occurs.
- Typecheck passes.