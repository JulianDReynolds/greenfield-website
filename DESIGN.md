---
name: Greenfield Group, Land Solutions
description: Development-site signboards standing on aerial photography. Black boards, white capitals, one fact per board.
colors:
  board-black: "#0A0A0A"
  ink: "#141414"
  white: "#FFFFFF"
  paper: "#EDEBE6"
  paper-deep: "#E2DFD8"
  grey: "#5E5D59"
  grey-light: "#A9A8A3"
  rule: "rgba(10, 10, 10, 0.14)"
  rule-on-black: "rgba(255, 255, 255, 0.22)"
  copy-on-black: "rgba(255, 255, 255, 0.86)"
  caption-on-black: "rgba(255, 255, 255, 0.82)"
typography:
  display:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 2.6vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 0.95rem + 2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.14
    letterSpacing: "0.06em"
  title:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "0.06em"
  figure:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "normal"
  lead:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 1.1vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  board-copy:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.3vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  button:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  nav:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  label:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
  label-small:
    fontFamily: "Arquitecta, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  tab: "12px"
  grid: "18px"
  copy: "24px"
  cta: "30px"
  gutter: "clamp(20px, 4vw, 56px)"
  board-pad: "clamp(28px, 3.4vw, 48px)"
  section: "clamp(72px, 10vw, 140px)"
  max-width: "1360px"
components:
  button-black:
    backgroundColor: "{colors.board-black}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-black-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.board-black}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.board-black}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-white-hover:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
  button-outline-black:
    backgroundColor: "transparent"
    textColor: "{colors.board-black}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-outline-black-hover:
    backgroundColor: "{colors.board-black}"
    textColor: "{colors.white}"
  button-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "52px"
  button-outline-white-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.board-black}"
  board:
    backgroundColor: "{colors.board-black}"
    textColor: "{colors.white}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
    width: "min(100%, 640px)"
  caption-tab:
    backgroundColor: "{colors.board-black}"
    textColor: "{colors.caption-on-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  card-deliverable:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "24px 26px 28px"
  card-ledger:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 14px 14px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px 0"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.nav}"
    padding: "6px 0"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.nav}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  nav-cta-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.board-black}"
---

<!-- PRECEDENCE: the client expects a designer-supplied DESIGN.md. When it arrives it takes precedence over this file, which records the system as shipped on the redesign branch on 2026-09-02. -->

# Design System: Greenfield Group, Land Solutions

## Overview

**Creative North Star: "The Development-Site Signboard"**

Every surface is a row of opaque black signboards standing on real aerial photography. A board carries one fact: the key mark, a headline in Arquitecta Heavy capitals, one short paragraph, one button. Photography runs full bleed to the viewport edge and the board sits on it at a hard edge, never floating, never softened by a gradient overlay. The system refuses the brokerage default of a white hero, gradient scrim, and four icon cards; the proof (site plans, before and after pairs, completed communities) does the persuading.

The palette is black and white with a single warm paper for the material site plans are drawn on. There is no green anywhere: the client replaced the former deep green with black as the brand colour on 2026-09-02. Depth comes from opacity and contrast, never from shadow. Every rectangle is square-cornered, every divider is a 1px rule, and the only icon on the site is the key-and-plot mark that stands beside board headlines.

Density is editorial rather than dashboard: generous section rhythm (72 to 140px), a 1360px measure, and boards capped at 600 to 680px so a headline breaks into three or four lines like a painted sign. Motion is restrained and reduced-motion safe: boards rise 22 to 24px on reveal, photographs unclip from the top, the hero's property-type tab cross-dissolves.

This file records the system as shipped. A designer-supplied DESIGN.md is expected and will take precedence when it arrives.

**Key Characteristics:**
- Opaque black boards on full-bleed aerial photography, hard-edged, no scrim
- Black, white, and one warm paper; no green, no accent hue
- Arquitecta only: Heavy 800 capitals for every heading, Regular 400 for copy, Bold 700 for labels and buttons
- The key mark beside board headlines is the only icon
- Zero radius, zero shadow, 1px rules for every division
- Every photograph carries a black caption tab naming the project
- Strict inversion: black surfaces on the white page, paper and white surfaces on black sections

## Colors

A two-value palette (board black and page white) with one paper neutral for site plans, and two mid greys for supporting copy; no accent hue exists.

### Primary
- **Board Black** (`board-black`): The brand colour and the material of every signboard, the scrolled header, the mobile menu, the track-record section, the footer, and the caption tabs on photographs. It is fully opaque wherever it stands on a photograph.
- **Ink** (`ink`): Body text on white and paper grounds. A hair lighter than the board so running copy never reads as heavy as a board.

### Neutral
- **White** (`white`): The page ground, the text on boards, the primary button on a board, and the tab at the top of the hero board.
- **Paper** (`paper`): The ground of the "Free with your listing" section and of ledger cards under site plans on black sections. Paper appears only where site plans and drawings are shown; it is the drawing material, not a second page colour.
- **Paper Deep** (`paper-deep`): Figure backdrops behind site plans while they load and behind plans that do not fill their 4:3 frame.
- **Grey** (`grey`): Supporting paragraphs beside a lead, deliverable descriptions, form placeholders, source labels, and the small caps labels on the contact page.
- **Grey Light** (`grey-light`): Footer copy, footer column headings, and the secondary contact line in the mobile menu.
- **Rule** (`rule`) and **Rule on Black** (`rule-on-black`): The only divider colours. 1px hairlines between sections, around deliverable cards, above and below the figures strip, under form fields at rest, and between contact rows.
- **Copy on Black** (`copy-on-black`) and **Caption on Black** (`caption-on-black`): Board paragraphs and caption tab text step down from pure white by opacity so the Heavy headline stays the brightest thing on the board. Emphasis inside a board paragraph returns to full white.

### Named Rules
**The No Green Rule.** Black is the brand colour. No green, and no other accent hue, appears anywhere on the site. If a state needs signalling, do it with inversion (black to white, white to black), not with colour.

**The Football Kit Rule.** Surfaces invert strictly with their ground. On the white page, boards and buttons are black. On a black section, cards are paper or white and the button is white. The key mark stays white on every board; it never changes colour with the ground.

**The One Paper Rule.** Paper is reserved for surfaces that carry site plans, lot plans, and concept drawings. It is never used as a general alternate section colour.

## Typography

**Display Font:** Arquitecta Heavy 800 (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Arquitecta Regular 400 (with Helvetica Neue, Arial, sans-serif)
**Label/Button Font:** Arquitecta Bold 700

**Character:** One geometric family at three weights, self-hosted from assets/fonts/ (arquitecta-regular.otf, arquitecta-bold.otf, arquitecta-heavy.otf). Headings are always Heavy capitals with wide tracking, exactly as on the client's Instagram adverts; copy is Regular, quiet, and set at a comfortable 1.6 leading so the boards stay the loud element.

### Hierarchy
- **Display** (800, clamp 1.75rem to 3.4rem, 1.12, uppercase, 0.06em): Section headings on the white and black page sections ("Free with your listing.", "We don't just list property. We underwrite it."). Balanced wrap.
- **Headline** (800, clamp 1.5rem to 2.6rem, 1.14, uppercase, 0.06em): The board headline, always preceded by the key mark. The closing board steps up to clamp 1.6rem to 3rem; the compact page hero on contact and legal pages steps up to clamp 2rem to 4rem.
- **Title** (800, 1.05rem, uppercase, 0.06em): Deliverable card titles and legal subheadings. Same voice as the display, shrunk to card scale.
- **Figure** (800, clamp 1.6rem to 2.6rem, 1, tabular numerals): Measured figures in the track-record strip ("20+", "2,000", "600"), each paired with a Bold caps unit label at 0.85rem and 0.08em.
- **Lead** (400, clamp 1.25rem to 1.9rem, 1.35): The positioning statement under the hero; on the home page it rises to clamp 1.5rem to 2.6rem at 1.22.
- **Body** (400, 1.0625rem, 1.6): Running copy on white and paper. The about page runs it at 1.1rem and 1.7. Legal text is capped at 72ch.
- **Board Copy** (400, clamp 1rem to 1.15rem, 1.6): Paragraph inside a board, capped at 52ch, at 86% white with Bold emphasis returning to full white.
- **Button** (700, 0.875rem, uppercase, 0.1em): All buttons.
- **Nav** (700, 0.8125rem, uppercase, 0.12em): Header links and the boxed header CTA.
- **Label** (700, 0.75rem, uppercase, 0.12em): Caption tabs on photographs, before and after figure captions, ledger and gallery captions (0.1em), the legal "updated" line, and the footer bottom line (0.06em).
- **Label Small** (700, 0.72rem, uppercase, 0.12em): Form labels, contact-row keys, source lines under deliverable titles, footer column headings (0.14em, grey light).

### Named Rules
**The Heavy Caps Rule.** Every h1, h2, and h3 is Arquitecta Heavy 800, uppercase, tracked 0.06em, with balanced wrapping. There is no sentence-case heading anywhere in the system.

**The Mark Beside the Headline Rule.** A board headline begins with the white key mark (gg-mark-solo-white.svg) at 2.1em tall, aria-hidden, 18px before the text. The mark is the only icon in the system; the legacy icon PNGs in assets/images are unreferenced.

**The No Dash Rule.** No em dash or en dash appears in rendered text. Use a full stop, a comma, or a new sentence. Hyphens are fine ("hard-to-value", "highest-and-best").

**The Loteria Rule.** Every photograph and drawing is captioned with its real project name in a Bold caps label. No uncaptioned imagery, no invented project names.

## Layout

A single 1360px measure with a fluid gutter of clamp(20px, 4vw, 56px). Section padding is clamp(72px, 10vw, 140px) top and bottom. Photographic sections ("sign" and "hero") break the measure: the image runs full bleed and the board sits inside the measure at the bottom-left, or bottom-right on alternating sections, with the photo's caption tab on the opposite corner. Boards are capped at min(100%, 640px) on the hero, 600px on service signboards, and 680px on page heroes; board padding is clamp(28px, 3.4vw, 48px).

Two-column sections use asymmetric grids: 1.4fr to 1fr for the positioning statement and the closing board, 1fr to 1.2fr for the split board beside its before and after pair, 1fr to 1.4fr on the about page, 1fr to 1.3fr on the contact page. Column gaps are clamp(28px, 5vw, 80px) to clamp(32px, 6vw, 110px). Card grids run at 18px gap: three deliverables, four ledger plans, three gallery photographs.

Section rhythm on the home page alternates ground: photograph, white, paper, white, photograph, photograph, photograph, black, white, black footer. Two adjacent sections never share a ground unless a photograph separates them.

Breakpoints, largest first: 1024px (ledger and footer to two columns), 860px (all two-column grids stack; header links collapse to the hamburger; signboards become photo above board with the caption tab between them; deliverables become horizontal rows; figures stack with rules between), 480px (root size drops to 15px, board padding fixes at 26px 22px 28px, buttons go full width inside boards, the before and after pair stacks, the commercial inset figure hides). The header is 84px, shrinking to 68px once scrolled 40px, when it also turns opaque black with a 1px rule beneath.

**The Board at the Edge Rule.** A board on a photograph always touches the bottom of the viewport section (align flex-end) and the photo runs behind it to the section edge. No board floats mid-image and no photo gets a gradient scrim to make text legible; the board's opacity is the legibility.

## Elevation & Depth

The system is flat and uses no box shadow anywhere. Depth is conveyed by three devices only: the opaque black board standing on photography, the alternation of black, white, and paper grounds between sections, and 1px hairline rules (rgba black at 14% on light grounds, rgba white at 22% on black). The one lifted element, the commercial "today" inset photograph, is a white-bordered print (8px white padding) pinned to the top-right of its signboard, still flat.

Hover depth is inversion, not elevation: buttons swap fill and text, nav links draw a 1.5px underline, deliverable photographs scale 3% over 800ms.

### Named Rules
**The Hard Edge Rule.** No box shadow, no blur, no gradient overlay on photography, no translucent panel over an image. If an element needs to sit on a photograph, it is an opaque black board or a black caption tab.

## Shapes

Every corner is square (radius 0, including form fields, which set border-radius 0 explicitly to defeat platform defaults). The form language is the printed rectangle: boards, tabs, cards, buttons, and inset prints are all hard rectangles. Borders are 1px hairline rules for structure and 1.5px solid currentColor for interactive outlines (buttons, header CTA, nav underline, form field baseline, contact link underline). Focus is a 2px solid outline offset 3px, black on light grounds and white on black. Images are cropped to fixed ratios: 4:3 for plans and deliverables, 3:2 for gallery photographs, 8:9 for the before and after pair (4:3 under 480px).

**The Zero Radius Rule.** No element may carry a border radius. Not a pill, not a chip, not a 2px softening on a card.

## Components

Every control is a rectangle with a 1.5px border in its own colour and an uppercase Bold label; state is signalled by inversion, and every press scales to 0.97.

### Buttons
- **Shape:** Hard rectangle (radius 0), 52px minimum height, 30px horizontal padding, 1.5px solid border, Bold caps at 0.875rem tracked 0.1em, inline flex with a 12px gap. Under 480px buttons inside boards go full width and labels may wrap.
- **Black** (`button-black`): Black fill, white text and border. The primary action on white and paper grounds ("Book a free analysis" at the offer foot, "Send message", "Contact us").
- **White** (`button-white`): White fill, black text, white border. The primary action inside a black board and in the mobile menu. Every board ends with one.
- **Outline Black** (`button-outline-black`): Transparent, black text and border. Secondary action on white ("About Greenfield Group").
- **Outline White** (`button-outline-white`): Transparent, white text and border, for a secondary action on black. Defined and available; not currently placed.
- **Hover / Focus:** Fill and text invert over 180ms (black becomes white on black, white becomes transparent on white, outline fills). Hover only on hover-capable fine pointers. Active scales 0.97 over 160ms. Focus-visible is the 2px offset outline.

### Signboard (`board`)
The signature component. Opaque black rectangle, padding clamp(28px, 3.4vw, 48px), white text. Contents in order: the key mark and Heavy caps headline on one flex row (18px gap, mark 2.1em tall); a copy paragraph 24px below at 86% white, capped at 52ch, Bold spans at full white; a white button 30px below. On the hero, a white property-type tab runs edge to edge across the board's top (Heavy caps 0.8rem, 0.14em, 42px tall, bleeding through the board padding) and cross-dissolves through the four service lines every 2.5s, holding still under reduced motion. On black grounds (compact page heroes on contact and legal pages) the board drops its padding and background and dissolves into the section; the headline and copy keep their board typography.

### Caption Tab (`caption-tab`)
A black tab on a photograph: 9px 14px padding, Bold caps 0.75rem tracked 0.12em at 82% white, naming the project shown ("The Reserve at Flores Valley, lots under construction"). Sits at the bottom of the photographic section opposite the board; on mobile it moves between the photo and the board. Ledger and gallery captions on paper and legal "updated" lines use the same voice on their own grounds.

### Cards / Containers
- **Deliverable card** (`card-deliverable`): White, 1px rule border, 4:3 figure on paper deep above a body padded 24px 26px 28px: Heavy caps title at 1.05rem, a Bold caps source line at 0.72rem in grey 6px below, a grey description 10px below. Photograph scales 1.03 on hover. Becomes a horizontal row (38% figure) at 860px and stacks again at 480px.
- **Ledger card** (`card-ledger`): Paper ground on a black section, 4:3 figure with the plan contained and padded 6px on paper deep (photographs cover instead), then a meta row padded 12px 14px 14px with the project name in Bold caps and the plan type in grey.
- **Gallery figure:** Paper ground, 3:2 photograph, one Bold caps caption padded 12px 14px 14px.
- **Inset print** (`sign-inset`): White-bordered before photograph (8px white padding, 4:3, black caps figcaption) pinned top-right of the commercial signboard at min(30%, 300px); hidden under 480px.
- **Figures strip:** Three measured figures between 1px rules, separated by 1px vertical rules and 22px padding, tabular Heavy numerals with a Bold caps unit label at 70% white. Stacks with horizontal rules under 860px.
- **Shadow Strategy:** None (see Elevation & Depth).

### Inputs / Fields (`input`)
- **Style:** Underline only. Transparent ground, no side or top border, 1.5px black baseline, radius 0, 14px vertical padding, inherited Arquitecta at 1.05rem in ink. Labels are Bold caps at 0.72rem tracked 0.12em, 8px above, with an optional Regular grey "optional" after the label. Placeholders in grey. Textarea min height 130px, vertical resize only.
- **Focus:** Baseline thickens to 2.5px (bottom padding drops 1px to keep the field height), no outline, no glow.
- **Layout:** Two-column grid, 28px row gap by 24px column gap, full-width message field, single column under 860px with the submit button full width.
- **Status:** A Bold message in a 1.5px black rectangle padded 14px 18px. Errors use a single dark red for text and border; it is the only non-neutral colour in the build and is reserved for this state.

### Navigation
- **Header:** Fixed, transparent over the hero, white logo 52px tall at the left; turns opaque black with a 1px rule and shrinks to 68px (logo 44px) after 40px of scroll. Links are Bold caps 0.8125rem tracked 0.12em, 36px apart. Hover and active draw a 1.5px underline that scales in from the left over 220ms.
- **Header CTA** (`nav-cta`): The same label in a 1.5px white rectangle padded 12px 20px; hover inverts to white fill, black text.
- **Mobile:** Under 860px the links collapse to a 44px two-bar toggle that rotates into a cross. The menu is a full-screen black panel: Heavy caps links at 1.75rem with 1px white rules between, a white button 28px below, and phone and email in grey light at the foot. Body scroll locks while open; Escape closes.
- **Footer:** Black, 1px rule above, four columns (1.4fr then three 1fr) at 32px gap with a 1px rule beneath; white logo 56px, grey light description capped at 34ch, Bold caps column headings at 0.72rem tracked 0.14em in grey light, Bold links that fade to grey light on hover; a Bold caps bottom line at 0.75rem tracked 0.06em for copyright and licence.

### Before and After Pair (`pair`)
Two 8:9 photographs in a 12px two-column grid beside a split board, each with a numbered Bold caps caption ("1. Existing house") and a Regular grey detail line beneath. Unclips from the top on reveal.

### Motion
Reveal elements rise 22px and fade over 700ms on an ease-out curve (cubic-bezier 0.23, 1, 0.32, 1), staggered 70ms per child. Photographs unclip from top to bottom over 1000ms. The hero board rises 24px over 900ms after a 120ms delay. Under prefers-reduced-motion every reveal is instant, the rotator holds its first phrase, and the smooth scroll and hover scale are off.

## Do's and Don'ts

### Do:
- **Do** set every heading in Arquitecta Heavy 800, uppercase, tracked 0.06em, and every button, tab, and label in Arquitecta Bold 700 uppercase.
- **Do** put text over photography only inside an opaque board-black rectangle or a black caption tab.
- **Do** begin every board headline with the white key mark (gg-mark-solo-white.svg) at 2.1em.
- **Do** caption every photograph and drawing with its real project name in a Bold caps label.
- **Do** divide with 1px hairline rules (rgba black 14% on light, rgba white 22% on black) and outline interactive elements with 1.5px solid currentColor.
- **Do** invert on hover (fill to text, text to fill) and scale to 0.97 on press.
- **Do** reserve paper for surfaces that carry site plans and drawings.
- **Do** keep board copy at or under 52ch and at 86% white, with Bold emphasis returning to full white.
- **Do** keep the header transparent over the hero and switch it to opaque black after 40px of scroll.
- **Do** honour prefers-reduced-motion: every reveal instant, the rotator still.

### Don't:
- **Don't** use green, or any hue other than black, white, paper, and the greys; the contact form's error red is the single exception and stays there.
- **Don't** add a border radius to anything, including form fields and images.
- **Don't** use box shadows, blur, gradient overlays, or translucent panels on photographs.
- **Don't** introduce icons beyond the key mark; no glyph icon sets, no icon cards, and never the legacy icon PNGs in assets/images.
- **Don't** set an em dash or en dash in rendered text.
- **Don't** add label strips above headlines on boards or sections; the hero board's white property-type tab exists because it carries the rotating service line, not as an eyebrow, and is the only one.
- **Don't** use sentence-case or lighter-weight headings, or a second typeface; Arquitecta at 400, 700, and 800 is the whole type system.
- **Don't** let two adjacent sections share a ground without a photograph between them.
- **Don't** invent testimonials, prices, or project names for captions; only Greenfield's own work is shown, named as it is.
