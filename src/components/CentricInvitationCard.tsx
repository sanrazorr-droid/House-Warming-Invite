import React from 'react';
import { Calendar, Clock, MapPin, Eye, Heart, Sparkles } from 'lucide-react';
import { INVITATION_CONTENT } from '../utils/invitationData';
import { BaminiText } from './BaminiText';
import {
  HangingLotusGarlands,
  TraditionalFlourishDivider,
  KuthuvilakkuLamp,
} from './RoyalMandapamArt';
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

interface CentricInvitationCardProps {
  onOpenOriginalModal: () => void;
  onScrollToMap: () => void;
  onReplayOpening?: () => void;
}

const GoldFloralIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block shrink-0 text-[#B3861B]"
    aria-hidden="true"
  >
    <path
      d="M8 1L9.8 5.6L14.5 6.2L11 9.4L12 14L8 11.6L4 14L5 9.4L1.5 6.2L6.2 5.6L8 1Z"
      fill="currentColor"
    />
  </svg>
);

export const CentricInvitationCard: React.FC<CentricInvitationCardProps> = ({
  onOpenOriginalModal,
  onScrollToMap,
  onReplayOpening,
}) => {
  return (
    <div className="relative mx-auto w-full max-w-[780px]">
      <SharedPichwaiSvgDefs />

      {/* Outer Royal Gold Mandapam & Vintage Parchment Frame */}
      <div className="relative overflow-hidden rounded-[28px] border-2 border-[#C59B27] bg-gradient-to-b from-[#F5E6C4] via-[#FAF3E3] to-[#F3E2BC] shadow-xl">
        {/* 0. Grand Ribbed Golden Temple Dome, Kadamba Canopy, Cascading Corner Roses & Cornice Header */}
        <GrandRibbedTempleDomeHeader />

        {/* Left & Right Climbing Pink Rose & Botanical Vines Along Outer Pillar Margins */}
        <ClimbingRoseVinesSide
          side="left"
          className="absolute top-56 left-0 z-20 h-96 w-12 opacity-95 sm:top-68 sm:h-[420px] sm:w-18"
        />
        <ClimbingRoseVinesSide
          side="right"
          className="absolute top-56 right-0 z-20 h-96 w-12 opacity-95 sm:top-68 sm:h-[420px] sm:w-18"
        />

        <div className="px-2 pb-2.5 sm:px-5 sm:pb-5">
          {/* Inner Temple Archway Container — Flush-mounted directly beneath the Dome Cornice & Pillar Capitals */}
          <div className="relative -mt-1 overflow-hidden rounded-b-[22px] border-2 border-[#C59B27] bg-gradient-to-b from-[#FFFDF8] via-[#FAF2E1] to-[#F6E8CC] pb-0 shadow-inner">
            {/* 1. Top Divine Blessings Carved Temple Lintel Frieze (ஓம் முருகன் துணை ★ ஸ்ரீ வீரமாட்சி அம்மன் துணை) */}
            <div className="relative z-30 flex items-center justify-between gap-1 border-b-2 border-[#C59B27] bg-gradient-to-r from-[#F2DFB0] via-[#FFFDF7] to-[#F2DFB0] px-2.5 py-2 font-bold tracking-tight text-[#6E2019] shadow-2xs sm:gap-2 sm:px-6 sm:py-2.5 sm:tracking-wide">
              <span className="font-tamil-serif text-fluid-lintel whitespace-nowrap">
                {INVITATION_CONTENT.blessingLeft}
              </span>
              <GoldFloralIcon />
              <span className="font-tamil-serif text-fluid-lintel whitespace-nowrap text-right">
                {INVITATION_CONTENT.blessingRight}
              </span>
            </div>

            {/* 2. Architectural Full-Span Multi-Cusped Scalloped Temple Arch & Pietra Dura Corner Spandrels
                   (Spans seamlessly from left pillar to center ogee peak to right pillar, matching pin-poster.jpg) */}
            <RoyalScallopedArchSpandrel
              side="full"
              className="absolute inset-x-0 top-[34px] z-20 h-32 w-full sm:top-[41px] sm:h-44"
            />

            {/* 3. Left & Right Carved Sandstone & Gold Vertical Temple Pillars Supporting the Arch */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-2.5 border-r border-[#C59B27]/60 bg-gradient-to-r from-[#DEC078] via-[#F9EED2] to-[#E5CC8A] sm:w-4"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-2.5 border-l border-[#C59B27]/60 bg-gradient-to-l from-[#DEC078] via-[#F9EED2] to-[#E5CC8A] sm:w-4"
              aria-hidden="true"
            />

            {/* 4. Swaying Hanging Pink Lotus Garlands & Beaded Golden Temple Bells Emerging From Behind the Scalloped Arch */}
            <HangingLotusGarlands />
            <SwayingGoldenTempleBellsRow topClassName="top-9 sm:top-10" />

            {/* Main Invitation Content Inside the Temple Pavilion */}
            <div className="relative z-20 px-3 pt-24 text-center sm:px-10 sm:pt-30">
              {/* Rotating Filigree Golden Ganesha Mandala (from 00:00 - 00:28 of Video) */}
              <GoldenGaneshaMandalaMedallion size="md" />

              {/* 2. Handwritten Top Main Title: புதுமனை புகுவிழா அழைப்பிதழ் */}
              <p className="font-tamil-stylish mt-1.5 text-sm font-normal tracking-wider text-[#8C2D19] sm:text-base">
                மங்களகரமான
              </p>
              <h1 className="mx-auto mt-1.5 text-[1.75rem] leading-[1.3] tracking-tight text-[#6E1414] sm:text-[2.45rem] md:text-[2.75rem]">
                <BaminiText
                  text={INVITATION_CONTENT.mainTitle}
                  className="inline-block text-[1.05em]"
                />
              </h1>

              <TraditionalFlourishDivider className="my-2.5" />

              {/* 3. Astrological Panchangam Prose Paragraph (with pen corrections applied) */}
              <div className="mx-auto max-w-[570px] px-1.5 sm:px-4">
                <p className="font-tamil-body text-fluid-body text-center font-medium text-[#3B1610]">
                  <span className="font-tamil-stylish text-[1.06em] text-[#7A1C1C]">
                    அன்புடையீர்,{' '}
                  </span>
                  பராபவ வருடம் வளர்பிறை{' '}
                  <span className="font-bold text-[#7A1C1C]">
                    ஐப்பசி மாதம் 30 ஆம் நாள் சப்தமி திதியும் திருவோணம் நட்சத்திரம் அமிர்தயோகம் துலாம் லக்னம்
                  </span>{' '}
                  கூடிய சுபதினத்தில் இந்நிகழ்வை எங்களுடன் பகிர்ந்து கொள்ள தங்கள் வருகையை அன்புடன் வேண்டுகிறோம்.
                </p>
              </div>

              {/* 4. Compact Date & Time Box ("Make the size smaller (box size)" & removed ஆவணி 30) */}
              <div className="mx-auto mt-3.5 max-w-[440px] rounded-2xl border border-[#C59B27] bg-[#FDF8EC]/95 px-2.5 py-2.5 shadow-xs sm:px-4 sm:py-3">
                <div className="grid grid-cols-2 divide-x divide-[#D4AF37]/50 text-left">
                  {/* Date Column */}
                  <div className="pr-2 sm:pr-3.5">
                    <div className="font-tamil-body flex items-center gap-1.5 text-xs font-bold text-[#8A5A19]">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-[#7A1C1C]" />
                      <span>{INVITATION_CONTENT.dateLabel}</span>
                    </div>
                    <div className="font-tamil-display mt-1 text-[15px] font-bold tabular-nums text-[#4A1212] sm:text-lg">
                      {INVITATION_CONTENT.dateValue}
                    </div>
                    <div className="font-tamil-body mt-0.5 text-[11.5px] font-semibold text-[#5C2618] sm:text-xs">
                      {INVITATION_CONTENT.dayValue} · {INVITATION_CONTENT.tamilMonthDate}
                    </div>
                  </div>

                  {/* Time Column */}
                  <div className="pl-2 sm:pl-3.5">
                    <div className="font-tamil-body flex items-center gap-1.5 text-xs font-bold text-[#8A5A19]">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-[#7A1C1C]" />
                      <span>{INVITATION_CONTENT.timeLabel}</span>
                    </div>
                    <div className="font-tamil-body mt-1 text-[11.5px] font-bold tabular-nums text-[#4A1212] sm:text-[14px]">
                      {INVITATION_CONTENT.timeStart}
                    </div>
                    <div className="font-tamil-body mt-0.5 text-[11.5px] font-bold tabular-nums text-[#4A1212] sm:text-[14px]">
                      {INVITATION_CONTENT.timeEnd}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scene 2 Artwork from Video: 5 Sacred Adorned White Kamadhenu Cows (Go-Puja) Courtyard */}
              <div className="mt-4">
                <SacredKamadhenuCourtyardScene />
              </div>

              <TraditionalFlourishDivider className="my-3.5" />

              {/* 5. CENTRIC INVITE SECTION: அருள் நிறை இல்லம் (Arul Nirai Illam)
                  Swapped to the center focal position per the blue pen arrows & prompt instruction! */}
              <div className="relative mx-auto my-2 max-w-[560px] rounded-3xl border-2 border-[#C59B27] bg-gradient-to-b from-[#FFFDF9] via-[#FDF5E2] to-[#F7E7C2] px-3.5 py-6 shadow-md sm:px-8 sm:py-7">
                {/* Iridescent Fluttering Watercolor Hummingbirds inside the top-left and top-right corners of this component box */}
                <div className="pointer-events-none absolute top-1.5 left-1.5 z-20 sm:top-2.5 sm:left-3">
                  <IridescentHummingbird facing="right" />
                </div>
                <div className="pointer-events-none absolute top-1.5 right-1.5 z-20 sm:top-2.5 sm:right-3">
                  <IridescentHummingbird facing="left" />
                </div>

                {/* Left & Right Kuthuvilakku Lamps */}
                <div className="pointer-events-none absolute bottom-3 left-2 hidden sm:block">
                  <KuthuvilakkuLamp className="h-14 w-9" />
                </div>
                <div className="pointer-events-none absolute right-2 bottom-3 hidden sm:block">
                  <KuthuvilakkuLamp className="h-14 w-9" />
                </div>

                <div className="font-tamil-stylish mt-1 inline-flex items-center justify-center gap-1.5 px-8 text-[11px] tracking-wide text-[#8C5814] whitespace-nowrap sm:mt-0 sm:px-12 sm:text-sm">
                  <span className="hidden sm:inline-flex">
                    <GoldFloralIcon />
                  </span>
                  <span>இறையருள் நிறைந்த எங்கள் புதிய இல்லம்</span>
                  <span className="hidden sm:inline-flex">
                    <GoldFloralIcon />
                  </span>
                </div>

                <h2 className="text-fluid-house mt-2 tracking-tight text-[#7A1616] whitespace-nowrap">
                  <BaminiText text={INVITATION_CONTENT.houseNameTamil} />
                </h2>

                <p className="font-english-serif mt-0.5 text-xl italic font-semibold tracking-wide text-[#5C2216] sm:text-3xl">
                  {INVITATION_CONTENT.houseNameEnglish}
                </p>

                <div className="mx-auto my-3.5 h-[1px] w-40 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent" />

                {/* 6. Poetic Invite Verse (with "இல்லமாய்" correction applied, flowing gracefully below Arul Nirai Illam) */}
                <div className="font-tamil-stylish text-fluid-verse space-y-1 text-[#3B1610]">
                  {INVITATION_CONTENT.poeticInviteLines.map((line, index) => (
                    <p key={index}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <TraditionalFlourishDivider className="my-3.5" />

              {/* 7. Venue Box (இடம்: நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி) */}
              <div className="mx-auto max-w-[440px]">
                <div className="font-tamil-body inline-flex items-center gap-1.5 rounded-t-xl border border-b-0 border-[#C59B27] bg-[#4A1812] px-4 py-1.5 text-xs font-bold text-[#FAF3E3]">
                  <MapPin className="h-3.5 w-3.5 text-[#E6C762]" />
                  <span>{INVITATION_CONTENT.venueLabel}</span>
                </div>
                <div className="rounded-2xl border border-[#C59B27] bg-[#FDF8EC]/95 px-3.5 py-3.5 shadow-xs sm:px-5">
                  <div className="font-tamil-body text-fluid-body space-y-0.5 font-bold text-[#3B1610]">
                    {INVITATION_CONTENT.venueLines.map((vLine, i) => (
                      <p key={i}>{vLine}</p>
                    ))}
                  </div>
                  <div className="font-tamil-body mt-3 flex flex-wrap items-center justify-center gap-2 border-t border-[#D4AF37]/35 pt-2.5">
                    <button
                      type="button"
                      onClick={onScrollToMap}
                      className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#7A1C1C] px-3.5 py-1.5 text-xs font-bold text-[#FFFDF8] transition-colors hover:bg-[#5C1313] whitespace-nowrap shrink-0"
                    >
                      <MapPin className="h-3.5 w-3.5 text-[#F3DFA2]" />
                      <span>வரைபடத்தில் வழிகாட்டுதல்</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenOriginalModal}
                      className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-[#B3861B] bg-[#FFFDF8] px-3.5 py-1.5 text-xs font-bold text-[#5C2216] transition-colors hover:bg-[#F5E6C4] whitespace-nowrap shrink-0"
                    >
                      <Eye className="h-3.5 w-3.5 text-[#9A721C]" />
                      <span>அசல் அழைப்பிதழ் ஒப்பீடு</span>
                    </button>
                    {onReplayOpening && (
                      <button
                        type="button"
                        onClick={onReplayOpening}
                        className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-[#B3861B] bg-[#FAF0D7] px-3.5 py-1.5 text-xs font-bold text-[#5C2216] transition-colors hover:bg-[#F3DFAD] whitespace-nowrap shrink-0"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-[#9A721C]" />
                        <span>முகப்புக் காட்சியை மீண்டும் காண்க</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* 8. Bottom Blessing Quote */}
              <div className="mt-5 mb-1 text-center">
                <p className="font-tamil-stylish text-sm text-[#5C1D18] sm:text-base">
                  {INVITATION_CONTENT.footerBlessingLine1}
                </p>
                <p className="font-tamil-display mt-0.5 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-[#7A1C1C] sm:text-base">
                  <span>எங்கள் இல்லத்தின் முதல் மகிழ்ச்சி.</span>
                  <Heart className="h-4 w-4 fill-[#7A1C1C] text-[#7A1C1C]" />
                </p>
              </div>

              {/* 9. Triple-Domed Golden Palace, Twin Caparisoned Royal Elephants, Majestic Peacock & Blooming Lotus Pond */}
              <GrandPalaceElephantsPeacockAndLotusPond />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
