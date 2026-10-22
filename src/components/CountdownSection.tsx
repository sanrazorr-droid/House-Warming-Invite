import React, { useEffect, useState } from 'react';
import { CalendarPlus, Share2, Check, Clock } from 'lucide-react';
import {
  calculateCountdown,
  generateIcsCalendarContent,
  CEREMONY_SCHEDULE,
  CountdownState,
} from '../utils/invitationData';
import { TraditionalFlourishDivider } from './RoyalMandapamArt';
import { BaminiText } from './BaminiText';

export const CountdownSection: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    calculateCountdown(Date.now())
  );
  const [copiedShare, setCopiedShare] = useState(false);
  const [downloadedCalendar, setDownloadedCalendar] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadIcs = () => {
    const icsContent = generateIcsCalendarContent();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Arul-Nirai-Illam-Gruhapravesam-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadedCalendar(true);
    setTimeout(() => setDownloadedCalendar(false), 3000);
  };

  const handleShareInvite = async () => {
    const shareText =
      'அருள் நிறை இல்லம் (Arul Nirai Illam) - புதுமனை புகுவிழா அழைப்பிதழ் | நாள்: 16.11.2026 (திங்கள், ஐப்பசி 30) | நேரம்: அதிகாலை 04.00 - 05.30 மணி | இடம்: நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி.';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(
          `${shareText} ${window.location.href}`
        );
      }
    } catch {
      // Fallback handled silently
    }
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  const timeUnits = [
    {
      value: countdown.daysFormatted,
      labelTamil: 'நாட்கள்',
    },
    {
      value: countdown.hoursFormatted,
      labelTamil: 'மணி',
    },
    {
      value: countdown.minutesFormatted,
      labelTamil: 'நிமிடங்கள்',
    },
    {
      value: countdown.secondsFormatted,
      labelTamil: 'விநாடிகள்',
    },
  ];

  return (
    <section
      id="muhurtham"
      aria-labelledby="muhurtham-heading"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="rounded-3xl border border-[#C59B27] bg-gradient-to-b from-[#FFFDF8] via-[#FAF2E1] to-[#F5E6C8] p-5 shadow-md sm:p-9">
        <div className="text-center">
          <p className="font-tamil-stylish text-xs tracking-wider text-[#8C5814] sm:text-sm">
            பராபவ வருடம் · ஐப்பசி மாதம் 30 ஆம் நாள் · திங்கட்கிழமை
          </p>
          <h2
            id="muhurtham-heading"
            className="text-fluid-h2 mt-1.5 text-[#6E1414]"
            style={{ textWrap: 'balance' }}
          >
            <BaminiText text="சுப முகூர்த்த நேர கவுண்டவுன்" />
          </h2>
          <p className="font-tamil-body text-fluid-body mt-1 font-semibold text-[#5C2618]">
            16.11.2026 அதிகாலை 04.00 மணி முதல் 05.30 மணி வரை (துலாம் லக்னம்)
          </p>
        </div>

        <TraditionalFlourishDivider className="my-4" />

        {/* 4-Column Countdown Grid */}
        <div
          className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          data-testid="countdown-grid"
        >
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl border border-[#C59B27]/80 bg-[#FFFDF9] px-3 py-4 text-center shadow-xs"
            >
              <span className="font-tamil-display text-3xl font-bold tabular-nums text-[#7A1C1C] sm:text-4xl">
                {unit.value}
              </span>
              <span className="font-tamil-body mt-1 text-sm font-bold text-[#3B1610]">
                {unit.labelTamil}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons: Save to Calendar & Share Invite */}
        <div className="font-tamil-body mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleDownloadIcs}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#7A1C1C] px-4 py-2.5 text-xs font-bold text-[#FFFDF8] shadow-xs transition-colors hover:bg-[#5C1313] whitespace-nowrap shrink-0 sm:px-5 sm:text-sm"
          >
            {downloadedCalendar ? (
              <>
                <Check className="h-4 w-4 text-[#F3DFA2]" />
                <span>காலண்டர் கோப்பு பதிவிறக்கப்பட்டது</span>
              </>
            ) : (
              <>
                <CalendarPlus className="h-4 w-4 text-[#F3DFA2]" />
                <span>காலண்டரில் நினைவூட்டல் சேர்க்க</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleShareInvite}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#B3861B] bg-[#FFFDF8] px-4 py-2.5 text-xs font-bold text-[#4A1812] transition-colors hover:bg-[#F5E6C4] whitespace-nowrap shrink-0 sm:px-5 sm:text-sm"
          >
            {copiedShare ? (
              <>
                <Check className="h-4 w-4 text-[#2E6B40]" />
                <span>அழைப்பிதழ் தகவல் நகலெடுக்கப்பட்டது!</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 text-[#9A721C]" />
                <span>அழைப்பிதழைப் பகிர்க</span>
              </>
            )}
          </button>
        </div>

        {/* Auspicious Ceremony Schedule (மங்கள நிகழ்ச்சி நிரல்) */}
        <div className="mt-9 border-t border-[#D4AF37]/40 pt-7">
          <h3 className="text-fluid-h3 text-center text-[#6E1414]">
            <BaminiText text="மங்கள நிகழ்ச்சி நிரல்" />{' '}
            <span className="font-tamil-body text-sm font-bold text-[#8C5814]">
              (16.11.2026 - திங்கள்)
            </span>
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {CEREMONY_SCHEDULE.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-2xl border border-[#D4AF37]/60 bg-[#FFFDF9]/90 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C59B27]/50 bg-[#F7E8C4] text-xs font-bold tabular-nums text-[#7A1C1C]">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-tamil-body text-xs font-bold tabular-nums text-[#8C5814]">
                    {item.time}
                  </div>
                  <h4 className="font-tamil-body mt-0.5 text-base font-bold text-[#3B1610] sm:text-lg">
                    {item.titleTamil}
                  </h4>
                  <p className="font-tamil-body mt-1 text-xs leading-relaxed font-medium text-[#5C2618] sm:text-sm">
                    {item.descriptionTamil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
