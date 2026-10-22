/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { CentricInvitationCard } from './components/CentricInvitationCard';
import { CountdownSection } from './components/CountdownSection';
import { VenueMapSection } from './components/VenueMapSection';
import {
  FamilyBlessingsSection,
  OriginalInviteModal,
} from './components/RsvpAndOriginalModal';
import { KuthuvilakkuLamp, TraditionalFlourishDivider } from './components/RoyalMandapamArt';
import { OpeningSequenceOverlay } from './components/OpeningSequenceOverlay';
import { BaminiText } from './components/BaminiText';
import {
  OPENING_SESSION_STORAGE_KEY,
  OpeningSequencePhase,
  resolveInitialOpeningPhase,
  transitionOpeningPhase,
} from './utils/invitationData';

export default function App() {
  const [gmpQuotaExceeded, setGmpQuotaExceeded] = useState(false);
  const [isOriginalModalOpen, setIsOriginalModalOpen] = useState(false);
  const [openingPhase, setOpeningPhase] = useState<OpeningSequencePhase>(() => {
    if (typeof window === 'undefined') {
      return 'closed';
    }
    let stored: string | null = null;
    try {
      stored = window.sessionStorage.getItem(OPENING_SESSION_STORAGE_KEY);
    } catch {
      stored = null;
    }
    return resolveInitialOpeningPhase(window.location.search, stored);
  });

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setGmpQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  useEffect(() => {
    if (openingPhase !== 'opening') {
      return;
    }
    const timer = window.setTimeout(() => {
      setOpeningPhase((prev) => transitionOpeningPhase(prev, 'ANIMATION_COMPLETE'));
      try {
        window.sessionStorage.setItem(OPENING_SESSION_STORAGE_KEY, 'opened');
      } catch {
        // Ignore storage errors in restricted environments
      }
    }, 1150);
    return () => window.clearTimeout(timer);
  }, [openingPhase]);

  const handleTapBrassRings = () => {
    setOpeningPhase((prev) => transitionOpeningPhase(prev, 'TAP_BRASS_RINGS'));
  };

  const handleSkipOpening = () => {
    setOpeningPhase((prev) => transitionOpeningPhase(prev, 'SKIP'));
    try {
      window.sessionStorage.setItem(OPENING_SESSION_STORAGE_KEY, 'opened');
    } catch {
      // Ignore storage errors
    }
  };

  const handleReplayOpening = () => {
    try {
      window.sessionStorage.removeItem(OPENING_SESSION_STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpeningPhase((prev) => transitionOpeningPhase(prev, 'REPLAY'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF3E3] text-[#3B1610]">
      {/* Kongu Sunrise, Farmland & Traditional Thinnai Teak Door Opening Sequence */}
      <OpeningSequenceOverlay
        phase={openingPhase}
        onTapBrassRings={handleTapBrassRings}
        onSkip={handleSkipOpening}
      />

      {/* Mandatory Google Maps Platform Demo Key Quota Banner */}
      {gmpQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-40 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Top Navigation Bar (Strict 3-Zone Contract, <= 56px height for mobile ergonomics) */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-8 border-b border-[#D4AF37]/60 bg-[#FFFDF8]/95 px-4 backdrop-blur-md sm:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#invite"
          className="text-base tracking-tight text-[#7A1C1C] whitespace-nowrap shrink-0 sm:text-xl"
        >
          <BaminiText text="அருள் நிறை இல்லம்" />
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="முதன்மை வழிசெலுத்தல்"
          className="font-tamil-body hidden md:flex items-center gap-6 text-sm font-bold text-[#5C2216]"
        >
          <a
            href="#invite"
            className="hover:text-[#7A1C1C] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            அழைப்பிதழ்
          </a>
          <a
            href="#muhurtham"
            className="hover:text-[#7A1C1C] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            சுப முகூர்த்தம்
          </a>
          <a
            href="#venue"
            className="hover:text-[#7A1C1C] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            வழித்தடம்
          </a>
          <a
            href="#blessings"
            className="hover:text-[#7A1C1C] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            வாழ்த்து மடல்
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => scrollToSection('venue')}
            className="font-tamil-body rounded-lg bg-[#7A1C1C] px-3.5 py-1.5 text-xs font-bold text-[#FFFDF8] transition-colors hover:bg-[#5C1313] whitespace-nowrap shrink-0 sm:px-4 sm:py-2"
          >
            வழிகாட்டுதல்
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Section 1: Centric Royal Mandapam Invitation Card */}
        <section
          id="invite"
          aria-label="புதுமனை புகுவிழா அழைப்பிதழ்"
          className="scroll-mt-16 px-3 pt-5 pb-8 sm:px-6 sm:pt-8 sm:pb-12"
        >
          <CentricInvitationCard
            onOpenOriginalModal={() => setIsOriginalModalOpen(true)}
            onScrollToMap={() => scrollToSection('venue')}
            onReplayOpening={handleReplayOpening}
          />
        </section>

        {/* Section 2: Live Countdown Timer & Ceremony Schedule */}
        <CountdownSection />

        {/* Section 3: Interactive Google Map & Venue Landmarks */}
        <VenueMapSection />

        {/* Section 4: Family Blessings Section (kept below where RSVP form was) */}
        <FamilyBlessingsSection />
      </main>

      {/* Traditional Quiet Footer */}
      <footer className="mt-8 border-t border-[#C59B27]/60 bg-[#F3E2BC] px-4 py-10 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <KuthuvilakkuLamp className="h-12 w-8 shrink-0" />
            <div>
              <p className="font-tamil-serif text-xs font-bold text-[#6E2019] sm:text-sm">
                ஓம் முருகன் துணை · ஸ்ரீ வீரமாட்சி அம்மன் துணை
              </p>
              <h2 className="text-fluid-h3 mt-1 text-[#7A1C1C]">
                <BaminiText text="அருள் நிறை இல்லம்" />{' '}
                <span className="font-english-serif text-base italic font-semibold text-[#5C2216]">
                  (Arul Nirai Illam)
                </span>
              </h2>
              <p className="font-tamil-body mt-1 text-xs font-semibold text-[#4A1812] sm:text-sm">
                நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி · 16.11.2026 (ஐப்பசி 30)
              </p>
            </div>
            <KuthuvilakkuLamp className="h-12 w-8 shrink-0" />
          </div>

          <TraditionalFlourishDivider className="my-4" />

          <p className="font-tamil-stylish text-sm text-[#6E1414] sm:text-base">
            தங்கள் வருகையே எங்கள் இல்லத்தின் முதல் மகிழ்ச்சி.
          </p>
        </div>
      </footer>

      {/* Modal comparing the original handwritten pen corrections with the live site */}
      <OriginalInviteModal
        isOpen={isOriginalModalOpen}
        onClose={() => setIsOriginalModalOpen(false)}
      />
    </div>
  );
}

