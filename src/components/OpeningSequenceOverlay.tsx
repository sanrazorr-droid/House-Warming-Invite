import React, { useEffect, useState } from 'react';
import {
  INVITATION_CONTENT,
  OPENING_SEQUENCE_CONTENT,
  OpeningSequencePhase,
} from '../utils/invitationData';
import {
  ClimbingRoseVinesSide,
  GrandRibbedTempleDomeHeader,
  IridescentHummingbird,
  RoyalScallopedArchSpandrel,
  SharedPichwaiSvgDefs,
  SwayingGoldenTempleBellsRow,
} from './DetailedPichwaiArt';
import {
  GoldenGaneshaMandalaMedallion,
  GrandPalaceElephantsPeacockAndLotusPond,
  SacredKamadhenuCourtyardScene,
} from './DetailedPichwaiScenes';
import {
  HangingLotusGarlands,
  TraditionalFlourishDivider,
} from './RoyalMandapamArt';
import { BaminiText } from './BaminiText';

interface OpeningSequenceOverlayProps {
  phase: OpeningSequencePhase;
  onTapBrassRings: () => void;
  onSkip: () => void;
}

const SCENE_TABS = [
  { id: 0, labelTamil: '1. கோபுர மண்டபம்', shortLabel: '1. கோபுரம்' },
  { id: 1, labelTamil: '2. கோ பூஜை & வயல்', shortLabel: '2. கோ பூஜை' },
  { id: 2, labelTamil: '3. அருள் நிறை இல்லம்', shortLabel: '3. இல்லம்' },
  { id: 3, labelTamil: '4. மங்கள மயில் & வாசல்', shortLabel: '4. மயில்' },
];

export const OpeningSequenceOverlay: React.FC<OpeningSequenceOverlayProps> = ({
  phase,
  onTapBrassRings,
  onSkip,
}) => {
  const [activeScene, setActiveScene] = useState<number>(0);

  // Auto-advance scenes every 4.8 seconds so guests can watch the full 4-part video story
  useEffect(() => {
    if (phase !== 'closed') return;
    const interval = window.setInterval(() => {
      setActiveScene((prev) => (prev + 1) % 4);
    }, 4800);
    return () => window.clearInterval(interval);
  }, [phase]);

  if (phase === 'opened') {
    return null;
  }

  const isOpening = phase === 'opening';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="அருள் நிறை இல்லம் - புதுமனை புகுவிழா முகப்புக் காட்சி"
      data-testid="opening-sequence-overlay"
      data-phase={phase}
      data-scene={activeScene + 1}
      className={`fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto overflow-x-hidden bg-[#F4E8CD] select-none transition-opacity duration-700 ${
        isOpening ? 'pointer-events-none opacity-95' : 'opacity-100'
      }`}
    >
      <SharedPichwaiSvgDefs />

      {/* =====================================================================
          3D TEAKWOOD DOUBLE DOORS TRANSITION OVERLAY (Swings open when tapped!)
         ===================================================================== */}
      <div
        className={`door-perspective-stage pointer-events-none fixed inset-0 z-40 grid grid-cols-2 transition-opacity duration-500 ${
          isOpening ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <div
          className={`door-panel-left border-r-2 border-[#D4AF37] bg-gradient-to-br from-[#5B2012] via-[#43150B] to-[#2E0D06] p-4 shadow-2xl ${
            isOpening ? 'door-panel-left-open' : ''
          }`}
        />
        <div
          className={`door-panel-right border-l-2 border-[#D4AF37] bg-gradient-to-bl from-[#5B2012] via-[#43150B] to-[#2E0D06] p-4 shadow-2xl ${
            isOpening ? 'door-panel-right-open' : ''
          }`}
        />
      </div>

      {/* =====================================================================
          TOP SCENE PROGRESS & CHAPTER SELECTOR BAR (Video Chapters 1 to 4)
         ===================================================================== */}
      <div className="relative z-30 mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-1.5 border-b border-[#C59B27]/50 bg-[#FAF2DE]/95 px-2.5 py-1.5 backdrop-blur-xs sm:flex-row sm:px-6">
        <span className="font-tamil-serif text-[11px] font-bold text-[#7A1C1C] sm:text-xs">
          {OPENING_SEQUENCE_CONTENT.blessingHeader}
        </span>

        {/* Interactive 4-Scene Story Switcher (matches the 4 scenes of the Pinterest video) */}
        <div
          className="grid w-full max-w-md grid-cols-4 gap-1 rounded-lg bg-[#E9D7B0]/80 p-1 sm:flex sm:w-auto sm:max-w-none"
          role="tablist"
          aria-label="முகப்புக் காட்சி பகுதிகள்"
        >
          {SCENE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-label={tab.labelTamil}
              aria-selected={activeScene === tab.id}
              onClick={() => setActiveScene(tab.id)}
              className={`cursor-pointer rounded-md px-1.5 py-1 text-center text-[10.5px] font-bold transition-colors whitespace-nowrap shrink-0 sm:px-2.5 sm:text-xs ${
                activeScene === tab.id
                  ? 'bg-[#7A1C1C] text-[#FFFDF8] shadow-xs'
                  : 'text-[#5C2216] hover:bg-[#DFC794]'
              }`}
            >
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.labelTamil}</span>
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================================
          MAIN PICHWAI & KONGU ARCHITECTURAL MANDAPAM STAGE
          (Exact Vintage Parchment, Gold Dome, Temple Bells, Lotuses, Cows,
           Elephants, Peacock, Hummingbirds & Kongu Farmland Sunrise)
         ===================================================================== */}
      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-2.5 py-1 sm:px-6">
        <div className="relative w-full max-w-[720px] overflow-hidden rounded-[26px] border-2 border-[#C59B27] bg-gradient-to-b from-[#F7EED8] via-[#FAF3E3] to-[#EFE0BC] shadow-2xl">
          {/* 1. Grand Ribbed Golden Temple Dome & Floral Frieze Header (00:00 - 00:10 of Video) */}
          <GrandRibbedTempleDomeHeader />

          {/* Left & Right Climbing Pink Rose & Botanical Vines (00:00 - 00:59 of Video) */}
          <ClimbingRoseVinesSide
            side="left"
            className="absolute top-44 left-0 z-20 h-64 w-11 opacity-95 sm:top-52 sm:h-84 sm:w-16"
          />
          <ClimbingRoseVinesSide
            side="right"
            className="absolute top-44 right-0 z-20 h-64 w-11 opacity-95 sm:top-52 sm:h-84 sm:w-16"
          />

          {/* Inner Scalloped Cusped Archway Frame — Flush mounted beneath the Dome Cornice */}
          <div className="relative mx-2 -mt-1 overflow-hidden border-x-2 border-t border-[#C59B27] bg-gradient-to-b from-[#FFFDF7]/95 via-[#F8EFE0]/95 to-[#F2E3C2]/95 px-2.5 pt-2 pb-0 sm:mx-4 sm:px-7">
            {/* Architectural Full-Span Multi-Cusped Temple Arch & Pietra Dura Spandrels */}
            <RoyalScallopedArchSpandrel
              side="full"
              className="absolute inset-x-0 top-0 z-20 h-26 w-full sm:h-36"
            />

            {/* Left & Right Carved Sandstone & Gold Vertical Temple Pillars */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-2 border-r border-[#C59B27]/60 bg-gradient-to-r from-[#DEC078] via-[#F9EED2] to-[#E5CC8A] sm:w-3"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-2 border-l border-[#C59B27]/60 bg-gradient-to-l from-[#DEC078] via-[#F9EED2] to-[#E5CC8A] sm:w-3"
              aria-hidden="true"
            />

            {/* Swaying Beaded Golden Temple Bells (Scene 1 & 2) OR Hanging Pink Lotus Garlands (Scene 3 & 4) */}
            {activeScene <= 1 ? (
              <SwayingGoldenTempleBellsRow />
            ) : (
              <HangingLotusGarlands />
            )}

            {/* Iridescent Fluttering Hummingbirds / Sunbirds */}
            <IridescentHummingbird
              facing="right"
              className="absolute top-20 left-3 z-20 sm:left-10"
            />
            <IridescentHummingbird
              facing="left"
              className="absolute top-20 right-3 z-20 sm:right-10"
            />

            {/* ===============================================================
                DYNAMIC 4-SCENE CONTENT AREA (Matches the 4 Video Acts + Kongu Farm)
               =============================================================== */}
            <div className="relative z-20 pt-12 text-center sm:pt-14">
              {activeScene === 0 && (
                /* SCENE 1 (00:00 - 00:10): Golden Ganesha Mandala, Auspicious Invocation & Housewarming Title */
                <div className="animate-fadeIn">
                  <GoldenGaneshaMandalaMedallion size="sm" />
                  <p className="font-tamil-stylish mt-0.5 text-[11px] tracking-wide text-[#8C5814] sm:text-xs">
                    வக்ரதுண்ட மஹாகாய சூர்யகோடி சமப்ரப · அவிக்னம் குரு மே தேவ சர்வ கார்யேஷு சர்வதா
                  </p>
                  <h1 className="text-fluid-h2 mt-1 tracking-tight text-[#7A1616]">
                    <BaminiText text={INVITATION_CONTENT.mainTitle} />
                  </h1>
                  <p className="font-english-serif text-lg italic font-semibold text-[#6E2019] sm:text-xl">
                    Housewarming Ceremony — {INVITATION_CONTENT.houseNameEnglish}
                  </p>
                </div>
              )}

              {activeScene === 1 && (
                /* SCENE 2 (00:12 - 00:28): Go-Puja Kamadhenu Cows + Kaduvettipalayam Sunrise & Farmland */
                <div className="animate-fadeIn">
                  <GoldenGaneshaMandalaMedallion size="sm" />
                  <p className="font-tamil-stylish text-[11px] text-[#7A1C1C] sm:text-xs">
                    ஓம் முருகன் துணை · ஸ்ரீ வீரமாட்சி அம்மன் துணை · கோ பூஜை & வாஸ்து சாந்தி
                  </p>
                  <h2 className="text-fluid-h3 mt-0.5 text-[#6E1414]">
                    <BaminiText text="காடுவெட்டிபாளையம் பசுமை வயல் மற்றும் உதய சூரியன் வரவேற்பு" />
                  </h2>
                  <p className="font-tamil-body mx-auto mt-1 max-w-xl px-1 text-[11.5px] leading-relaxed font-semibold text-[#4A1812] sm:text-xs">
                    {OPENING_SEQUENCE_CONTENT.heritageDescription}
                  </p>

                  {/* Panoramic Kaduvettipalayam Sunrise over Coconut Palms, Paddy Fields, Sugarcane & Canal */}
                  <div className="mx-auto mt-2 max-w-md overflow-hidden rounded-xl border border-[#C59B27] shadow-xs">
                    <svg
                      viewBox="0 0 600 84"
                      className="h-16 w-full object-cover sm:h-20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="konguDawnGrad" x1="300" y1="0" x2="300" y2="84" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#9E3518" />
                          <stop offset="50%" stopColor="#E89A3C" />
                          <stop offset="100%" stopColor="#FFF3C4" />
                        </linearGradient>
                      </defs>
                      <rect width="600" height="84" fill="url(#konguDawnGrad)" />
                      <circle cx="300" cy="46" r="34" fill="#FFFDF2" opacity="0.92" />
                      <path d="M0 52 Q150 40 300 48 Q450 40 600 52 L600 70 L0 70 Z" fill="#46892A" />
                      <path d="M275 48 L325 48 L355 72 L245 72 Z" fill="#D99B52" />
                      <rect x="0" y="68" width="600" height="16" fill="#2A748A" />
                      <path d="M40 76 Q120 72 200 76 T360 76 T520 76" stroke="#FFF3C4" strokeWidth="1.5" />
                      <path d="M55 68 Q64 36 76 12" stroke="#5A351D" strokeWidth="4.5" strokeLinecap="round" />
                      <path d="M76 12 Q52 2 38 18 M76 12 Q100 4 112 20" stroke="#2D6A1E" strokeWidth="3" strokeLinecap="round" />
                      <path d="M545 68 Q536 36 524 12" stroke="#5A351D" strokeWidth="4.5" strokeLinecap="round" />
                      <path d="M524 12 Q548 2 562 18 M524 12 Q500 4 488 20" stroke="#2D6A1E" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              )}

              {activeScene === 2 && (
                /* SCENE 3 (00:29 - 00:43): Centric Arul Nirai Illam & Poetic Invite Verse */
                <div className="animate-fadeIn">
                  <p className="font-tamil-stylish text-xs tracking-wider text-[#8C5814] sm:text-sm">
                    இறையருள் நிறைந்த எங்கள் புதிய இல்லம்
                  </p>
                  <h2 className="text-fluid-house mt-0.5 tracking-tight text-[#7A1616]">
                    <BaminiText text={INVITATION_CONTENT.houseNameTamil} />
                  </h2>
                  <p className="font-english-serif text-lg italic font-semibold text-[#5C2216] sm:text-xl">
                    ({INVITATION_CONTENT.houseNameEnglish})
                  </p>
                  <div className="font-tamil-stylish mx-auto mt-1.5 max-w-md space-y-0.5 text-xs leading-relaxed text-[#3B1610] sm:text-sm">
                    {INVITATION_CONTENT.poeticInviteLines.map((line, i) => (
                      <p key={i}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {activeScene === 3 && (
                /* SCENE 4 (00:44 - 00:59): Muhurtham Date, Time & Kaduvettipalayam Venue */
                <div className="animate-fadeIn">
                  <p className="font-tamil-body text-[11px] font-bold text-[#7A1C1C] sm:text-xs">
                    பராபவ வருடம் · ஐப்பசி மாதம் 30 ஆம் நாள் · சப்தமி திதி · திருவோணம் நட்சத்திரம் · துலாம் லக்னம்
                  </p>
                  <h2 className="font-tamil-display text-fluid-h3 mt-1 font-bold text-[#6E1414]">
                    16.11.2026 (திங்கட்கிழமை) · அதிகாலை 04.00 – 05.30 மணி
                  </h2>
                  <p className="font-tamil-body mt-1 text-xs font-bold text-[#4A1812] sm:text-base">
                    இடம்: நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி
                  </p>
                  <p className="font-tamil-stylish mt-0.5 text-xs text-[#7A1C1C] sm:text-sm">
                    தங்கள் வருகையே எங்கள் இல்லத்தின் முதல் மகிழ்ச்சி ♥
                  </p>
                </div>
              )}

              <TraditionalFlourishDivider className="my-1.5" />

              {/* =============================================================
                  PROMINENT INTERACTIVE BRASS DOOR RINGS CTA (Always accessible!)
                 ============================================================= */}
              <div className="my-1 flex flex-col items-center justify-center px-1">
                <button
                  type="button"
                  onClick={onTapBrassRings}
                  aria-label={OPENING_SEQUENCE_CONTENT.openDoorCta}
                  className="group relative flex min-h-[50px] w-full max-w-[305px] cursor-pointer items-center justify-center gap-2.5 rounded-2xl border-2 border-[#B3861B] bg-gradient-to-r from-[#5A1810] via-[#7A1C1C] to-[#5A1810] px-3.5 py-2 text-center shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-[#D4AF37] focus-visible:outline-none sm:max-w-[335px] sm:px-5 sm:py-2.5"
                >
                  {/* Twin Ornate Brass Door Rings Icon */}
                  <svg
                    className="animate-brass-ring h-8 w-11 shrink-0 drop-shadow-xs sm:h-9 sm:w-12"
                    viewBox="0 0 90 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="26" cy="16" r="8" fill="#F5D77F" stroke="#5A3510" strokeWidth="1.2" />
                    <circle cx="26" cy="34" r="14" stroke="#F5D77F" strokeWidth="4.5" fill="none" />
                    <circle cx="64" cy="16" r="8" fill="#F5D77F" stroke="#5A3510" strokeWidth="1.2" />
                    <circle cx="64" cy="34" r="14" stroke="#F5D77F" strokeWidth="4.5" fill="none" />
                  </svg>

                  <div className="text-left">
                    <span className="font-tamil-serif block text-xs font-extrabold text-[#FFFDF8] whitespace-nowrap sm:text-sm">
                      {OPENING_SEQUENCE_CONTENT.openDoorCta}
                    </span>
                    <span className="block text-[10px] font-medium text-[#F5D77F] sm:text-[11px]">
                      பித்தளை வளையத்தைத் தொட்டு உள்ளே வருக
                    </span>
                  </div>
                </button>
              </div>

              {/* =============================================================
                  BOTTOM PICHWAI ILLUSTRATION STAGE:
                  - Scene 2 shows the 5 Sacred Adorned Kamadhenu Cows (00:12 - 00:28)
                  - Scenes 1, 3, 4 show the Triple-Domed Golden Palace, Twin Caparisoned
                    Royal Elephants, Majestic Peacock & Blooming Pink Lotus Pond
                 ============================================================= */}
              <div className="-mt-1">
                {activeScene === 1 ? (
                  <SacredKamadhenuCourtyardScene />
                ) : (
                  <GrandPalaceElephantsPeacockAndLotusPond />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          BOTTOM SKIP & SCENE NAVIGATION BAR (Ergonomic Mobile Thumb Zone)
         ===================================================================== */}
      <div className="relative z-30 mx-auto flex w-full max-w-[440px] items-center justify-center gap-2 px-3 pb-2 pt-0.5 sm:gap-3 sm:px-4 sm:pb-2.5">
        <button
          type="button"
          onClick={() => setActiveScene((prev) => (prev + 1) % 4)}
          className="inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded-xl border border-[#B3861B] bg-[#FFFDF8] px-2.5 py-1.5 text-[11px] font-bold text-[#5C2216] shadow-xs transition-colors hover:bg-[#F5E6C4] sm:px-3.5 sm:text-xs"
        >
          அடுத்த காட்சி ({activeScene + 1}/4)
        </button>

        <button
          type="button"
          onClick={onSkip}
          className="inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded-xl border border-[#7A1C1C] bg-[#3B100A] px-2.5 py-1.5 text-[11px] font-bold text-[#FFFDF8] shadow-xs transition-colors hover:bg-[#5A1810] sm:px-3.5 sm:text-xs"
        >
          <span className="sm:hidden">அழைப்பிதழுக்குச் செல்ல →</span>
          <span className="hidden sm:inline">{OPENING_SEQUENCE_CONTENT.skipCta}</span>
        </button>
      </div>
    </div>
  );
};
