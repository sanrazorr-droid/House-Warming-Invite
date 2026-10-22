# Kongu Sunrise & Traditional Thinnai Opening Sequence — அருள் நிறை இல்லம்

An interactive, culturally rooted opening sequence for the **அருள் நிறை இல்லம் (Arul Nirai Illam)** housewarming invitation that celebrates the agricultural heritage and traditional Kongu Nadu architecture of **காடுவெட்டிபாளையம், கருமத்தம்பட்டி (Kaduvettipalayam, Karumathampatti)** before parting the carved teakwood doors into the main invitation.

## User Review & Critical Decisions

> [!IMPORTANT]
> Please review the confirmed visual narrative and interaction flow below. Click **Proceed** when you are ready to build this opening experience, or share any adjustments you would like to make.

- **Confirmed Decision 1 (Visual Narrative)**: **Sunrise over green coconut and paddy fields leading to the house entrance** — A golden dawn rises over lush Kaduvettipalayam farmland, illuminating the pathway to the traditional entrance of *Arul Nirai Illam*.
- **Confirmed Decision 2 (Architectural & Farming Motifs)**:
  1. **Swaying coconut palms, banana trees (`வாழை`), and lush green paddy fields (`நெல் வயல்`)** framing the horizon.
  2. **Traditional Kongu house facade** featuring carved wooden pillars (`தூண்கள்`), sloped Mangalore-tile roof eaves, mango-leaf thoranam (`மாவிலைத் தோரணம்`), and raised veranda (`திண்ணை`).
  3. **Flowing farm water canal (`வாய்க்கால் நீர்`), sugarcane (`கரும்பு`), and auspicious turmeric harvest (`மஞ்சள் கொத்து`) motifs** flanking the entrance threshold.
- **Confirmed Decision 3 (Opening Interaction & Accessibility)**: **Interactive tap on the brass door rings (`பித்தளை கதவு வளையம்`) to open**, paired with an always-accessible **Skip (`நேரடியாக அழைப்பிதழைக் காண`)** button and a **Replay Opening (`முகப்புக் காட்சி`)** trigger so guests can re-experience the animation anytime.

---

## 1. Overview & Core Concept

- **What It Does**: Introduces guests to the housewarming ceremony with a full-viewport theatrical prelude inspired by a dawn Muhurtham (`காலை 04.00 – 05.30 மணி`) in rural Kongu Nadu. Guests see the golden sun rising behind swaying coconut groves, emerald paddy fields, flowing farm water, and festive sugarcane/turmeric bundles leading right up to the carved wooden double doors and pillared *thinnai* of **அருள் நிறை இல்லம்**.
- **Target Audience / Persona**: Family, relatives, and friends viewing the invitation primarily on mobile phones (via WhatsApp shares) as well as desktop browsers, who value traditional Tamil customs, agricultural roots, and auspicious hospitality.
- **Key Value**: Transforms a static webpage load into a memorable ceremonial welcome (`வரவேற்பு`) that honors the family's farming roots and new home architecture while remaining fast, responsive, and effortless to navigate on one-handed mobile screens.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Arrival (Stage 1 — Kongu Dawn & Courtyard Threshold)**:
   - Upon visiting the invitation, guests are greeted by a full-screen layered scene showing the auspicious morning sun rising over Kaduvettipalayam's green coconut trees and paddy fields, with a shimmering irrigation stream at the foreground base.
   - Framing the center is the grand Kongu architectural porch (*thinnai*) with carved pillars, red-oxide floor accents, fresh sugarcane stalks, turmeric plants at the base, and ornate double teakwood doors adorned with brass studs and twin circular brass knockers (`பித்தளை வளையங்கள்`).
   - Above the doors, the auspicious header reads: **`ஓம் முருகன் துணை · ஸ்ரீ வீரமாட்சி அம்மன் துணை`** and **`அருள் நிறை இல்லம் — புதுமனை புகுவிழா அழைப்பிதழ்`**.
2. **Interactive Trigger (Stage 2 — Tapping the Brass Door Rings)**:
   - Positioned in the ergonomic mobile thumb/center zone is the interactive brass door ring medallion with a clear Tamil call-to-action: **`கதவைத் திறந்து உள்ளே வருக`** (*Tap the brass rings to open and enter*, with a $\ge 48 \times 48\text{px}$ touch target).
   - A secondary quiet button at the bottom (`நேரடியாக அழைப்பிதழுக்குச் செல்ல / Skip`) allows guests in a hurry to bypass the animation immediately.
3. **Ceremonial Reveal (Stage 3 — Parting the Teakwood Doors)**:
   - When tapped, the brass rings chime visually with a warm golden ripple, the sunrise glow intensifies over the coconut and paddy landscape, and the left and right carved wooden doors swing open in smooth 3D perspective (`rotateY`), revealing the centric **அருள் நிறை இல்லம்** Royal Mandapam invitation card underneath.
4. **Re-Entry Option**:
   - Once inside the main invitation, a subtle button in the hero top area (`முகப்புக் காட்சியை மீண்டும் காண்க`) allows guests to replay the farming & architectural opening sequence whenever they wish.

### Visual Identity & Theme
- **Aesthetic Direction**: Heritage Kongu Agrarian & Temple-Home Architecture — blending fertile countryside greens and sunrise amber with royal maroon, carved teakwood, and antique temple gold.
- **Color Palette & Mood**:
  - **60% Dominant Atmosphere**: Warm Dawn Cream & Golden Sunrise Sky (`#FAF3E3` to `#F6D38B`) transitioning into rich Carved Teakwood (`#3B1610` / `#521E14`) on the architectural doors.
  - **30% Structural & Agrarian Surfaces**: Lush Paddy & Coconut Emerald (`#2D5A27` / `#4A7C36`), Terracotta Thinnai (`#7A1C1C`), and Flowing Canal Water Shimmer (`#6BA3B8` with gold sunlight reflections).
  - **10% Accent Budget**: Antique Brass & Temple Gold (`#D4AF37` / `#F5D77F`) concentrated on the interactive brass door rings, turmeric blossoms, and sun rays.
- **Typography & Hierarchy**:
  - **Display Face**: `Noto Serif Tamil` (`font-tamil-serif`) for ceremonial headers, house name (`அருள் நிறை இல்லம்`), and invitation prompts, using balanced line wrapping (`text-wrap: balance`).
  - **Body Face**: `Noto Sans Tamil` (`font-tamil-sans`) for clear action labels and location subtitles (`நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி`).
- **Component Styling & Spatial Math**:
  - Designed mobile-first ($375\text{px}$–$430\text{px}$) and scaling seamlessly to $1440\text{px}$ desktop viewports without clipping or overflow.
  - Touch hitboxes on the brass door knocker CTA and skip controls strictly exceed $48 \times 48\text{px}$ for effortless one-handed mobile tapping.
- **Interactive Feedback & Motion**:
  - Uses GPU-composited properties (`transform`, `opacity`) for 60fps mobile performance: gentle swaying animation on coconut fronds, paddy stalks, and sugarcane leaves; rising sun translation; shimmering water wave translation; and 3D door opening (`perspective(1400px) rotateY(...)`).
  - Respects `prefers-reduced-motion` by providing an instant cross-fade reveal when reduced motion is enabled on the guest's device.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Layered Vector Art + CSS/Motion Choreography vs. Heavy Video File**
  - *Chosen Approach*: Build the sunrise farmland, swaying coconut/banana trees, flowing canal, sugarcane/turmeric bundles, and carved Kongu *thinnai* doors using bespoke, high-detail layered SVG artwork combined with smooth `motion` / CSS compositor animations.
  - *Why*: Loads instantaneously on mobile networks (crucial for guests opening WhatsApp links in rural/suburban areas), scales with razor-sharp clarity from $375\text{px}$ mobile screens to $1440\text{px}$ desktop monitors, and allows individual parts (sun, coconut fronds, water, left door, right door, brass rings) to animate independently on user tap.
  - *Alternatives Considered*: Embedded MP4 video background was passed over because it causes buffering delays on mobile data, consumes heavy bandwidth, and cannot interactively swing open on exact brass-ring tap coordinates.
- **Decision 2: Session Memory with One-Tap Replay**
  - *Chosen Approach*: Display the opening sequence on initial visit, and once opened (or skipped), remember the state in `sessionStorage` so accidental refreshes don't block the guest, while providing an explicit button in the invitation header/hero to replay the opening sequence at any time.
  - *Why*: Balances ceremonial delight on first arrival with frictionless usability when checking the venue map or muhurtham time repeatedly.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

### Architecture & Component Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                             App Root State                              │
│   • isInviteOpened: boolean (synced with sessionStorage + Replay CTA)   │
│   • isOpeningAnimating: boolean (tracks door-swing transition phase)    │
└───────────────────┬─────────────────────────────────┬───────────────────┘
                    │                                 │
                    ▼                                 ▼
┌───────────────────────────────────────┐ ┌───────────────────────────────┐
│     OpeningSequenceOverlay (Modal)    │ │   Main Invitation View        │
│ ┌───────────────────────────────────┐ │ │ ┌───────────────────────────┐ │
│ │ 1. Kongu Sunrise & Farmland Layer │ │ │ │ Replay Opening Trigger    │ │
│ │    • Rising Sun & Golden Rays     │ │ │ │ ("முகப்புக் காட்சி")      │ │
│ │    • Swaying Coconut & Paddy SVG  │ │ │ └─────────────┬─────────────┘ │
│ │    • Flowing Canal Water Stream   │ │ │               ▼               │
│ ├───────────────────────────────────┤ │ │ ┌───────────────────────────┐ │
│ │ 2. Kongu Thinnai & Facade Frame   │ │ │ │ CentricInvitationCard     │ │
│ │    • Carved Pillars & Tile Roof   │ │ │ │ (अरुள் நிறை இல்லம்)        │ │
│ │    • Sugarcane, Banana & Turmeric │ │ │ ├───────────────────────────┤ │
│ ├───────────────────────────────────┤ │ │ │ CountdownSection          │ │
│ │ 3. Interactive Double Teak Doors  │ │ │ ├───────────────────────────┤ │
│ │    • Left & Right Door Panels     │ │ │ │ VenueMapSection           │ │
│ │    • Brass Ring CTA (onOpenTap)   │ │ │ ├───────────────────────────┤ │
│ │    • Skip Button (onSkipTap)      │ │ │ │ FamilyBlessingsSection    │ │
│ └───────────────────────────────────┘ │ │ └───────────────────────────┘ │
└───────────────────────────────────────┘ └───────────────────────────────┘
```

### Data Model & State
- **`openingPhase` (`'closed' | 'opening' | 'opened'`)**:
  - `'closed'`: The opening scene is active; gentle ambient animations run on the rising sun, swaying coconut palms, green paddy stalks, sugarcane, and flowing farm canal water.
  - `'opening'`: Triggered when the guest taps the brass door rings (`கதவைத் திறந்து உள்ளே வருக`). The brass rings pulse with a golden glow, the doors rotate open over `1.4s` using a smooth cubic-bezier curve, and the camera scales gently toward the glowing interior of *Arul Nirai Illam*.
  - `'opened'`: The overlay unmounts cleanly, unlocking body scroll on the main invitation and saving `'opened'` in `sessionStorage`.

### Interactive Component & State Mapping
- **Brass Door Ring Medallion (`handleOpenDoors`)**:
  - Triggers `'opening'` state, plays the door-parting 3D rotation and golden sunrise bloom, and transitions to `'opened'` upon animation completion.
- **Instant Skip Control (`handleSkipOpening`)**:
  - Immediately transitions `openingPhase` to `'opened'` with a fast 200ms fade for guests who want instant access to the venue map or date.
- **Replay Ceremony Button (`handleReplayOpening`)**:
  - Accessible at the top of the main invitation section (`முகப்புக் காட்சியை மீண்டும் காண்க`), resetting `openingPhase` to `'closed'` and scrolling to the top so guests or family members can show the opening animation to others.
