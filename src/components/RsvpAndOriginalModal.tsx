import React from 'react';
import { Heart, X, CheckCircle2, FileCheck2 } from 'lucide-react';
import { TraditionalFlourishDivider } from './RoyalMandapamArt';
import { BaminiText } from './BaminiText';
import familyWelcomeImg from '../assets/images/regenerated_image_1792649232010.png';

export const FamilyBlessingsSection: React.FC = () => {
  const familyMembers = [
    {
      id: 'parents',
      roleLabelTamil: 'இல்லத்தரசன் & இல்லத்தரசி (பெற்றோர்)',
      namePlaceholderTamil: 'திரு. [தந்தை பெயர்] & திருமதி. [தாயார் பெயர்]',
    },
    {
      id: 'elder-daughter',
      roleLabelTamil: 'மூத்த மகள் (Elder Daughter)',
      namePlaceholderTamil: 'செல்வி. [மூத்த மகள் பெயர்]',
    },
    {
      id: 'younger-son',
      roleLabelTamil: 'இளைய மகன் (Younger Son)',
      namePlaceholderTamil: 'செல்வன். [இளைய மகன் பெயர்]',
    },
  ];

  return (
    <section
      id="blessings"
      aria-labelledby="blessings-heading"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="rounded-3xl border border-[#C59B27] bg-gradient-to-b from-[#FFFDF8] via-[#FAF3E3] to-[#F4E4C1] p-5 shadow-md sm:p-9">
        <div className="text-center">
          <p className="font-tamil-stylish text-xs tracking-wider text-[#8C5814] sm:text-sm">
            தங்கள் வருகையே எங்கள் இல்லத்தின் முதல் மகிழ்ச்சி
          </p>
          <h2
            id="blessings-heading"
            className="text-fluid-h2 mt-1.5 text-[#6E1414]"
            style={{ textWrap: 'balance' }}
          >
            <BaminiText text="தங்களை அன்புடன் வரவேற்கும் குடும்பத்தினர்" />
          </h2>
          <p className="font-tamil-body text-fluid-body mt-1 font-semibold text-[#5C2618]">
            இருகரம் கூப்பி அன்போடு அழைக்கும் அருள் நிறை இல்லக் குடும்பத்தினர்
          </p>
        </div>

        <TraditionalFlourishDivider className="my-4" />

        {/* Family Welcome Portrait + Placeholder Family Member Cards */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Traditional Tamil Family of 4 Illustration (Parents, 1 Elder Daughter, 1 Younger Son) */}
          <div className="overflow-hidden rounded-3xl border-2 border-[#C59B27] bg-[#FFFDF9] p-2.5 shadow-sm sm:p-4">
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-[#FAF0D8]">
              <img
                src={familyWelcomeImg}
                alt="தங்களை அன்புடன் வரவேற்கும் குடும்பத்தினர் - பெற்றோர், மூத்த மகள் மற்றும் இளைய மகன்"
                referrerPolicy="no-referrer"
                className="mx-auto h-auto max-h-[380px] w-full object-contain"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-center text-xs font-bold text-[#6E2019] sm:text-sm">
              <Heart className="h-4 w-4 shrink-0 fill-[#7A1C1C] text-[#7A1C1C]" />
              <span className="font-tamil-stylish">
                பெற்றோர் · மூத்த மகள் · இளைய மகன் — அன்புடன் வரவேற்கும் குடும்பத்தினர்
              </span>
            </div>
          </div>

          {/* Family Members Welcome Cards (Parents, 1 Elder Daughter, 1 Younger Son) */}
          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            data-testid="family-welcome-list"
          >
            {familyMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col justify-center rounded-2xl border border-[#D4AF37]/80 bg-[#FFFDF9] p-5 text-center shadow-xs"
              >
                <div>
                  <div className="font-tamil-body text-xs font-bold text-[#8A5A19]">
                    {member.roleLabelTamil}
                  </div>
                  <h3 className="font-tamil-body mt-1.5 text-base font-bold text-[#6E1414] sm:text-lg">
                    {member.namePlaceholderTamil}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface OriginalInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalInviteModal: React.FC<OriginalInviteModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const correctionsList = [
    'தலைப்பு: "புதுமனை புகுவிழா அழைப்பிதழ்" முதன்மைத் தலைப்பாக மேலே சேர்க்கப்பட்டுள்ளது.',
    'பஞ்சாங்க விபரம்: "அன்புடையீர், பராபவ வருடம் வளர்பிறை ஐப்பசி மாதம் 30 ஆம் நாள் சப்தமி திதியும் திருவோணம் நட்சத்திரம் அமிர்தயோகம் துலாம் லக்னம் கூடிய சுபதினத்தில்..." எனத் தொடக்கத்தில் இணைக்கப்பட்டுள்ளது.',
    'சொற்றொடர் திருத்தம்: "தங்களை வருகையை" என்பது "தங்கள் வருகையை அன்புடன் வேண்டுகிறோம்" எனத் திருத்தப்பட்டுள்ளது.',
    'நாள் & நேரம் பெட்டி: அளவு சிறியதாகவும் நேர்த்தியாகவும் (Compact Box) அமைக்கப்பட்டு, தவறான "ஆவணி 30" நீக்கப்பட்டு "ஐப்பசி 30" எனக் குறிப்பிடப்பட்டுள்ளது.',
    'மைய அழைப்புப் பகுதி (Centric Section): அம்புக்குறி குறியீட்டின்படி "அருள் நிறை இல்லம் (Arul Nirai Illam)" அழைப்பிதழின் மையப் பகுதியாக அமைக்கப்பட்டுள்ளது.',
    'கவிதை வரிகள் திருத்தம்: "இல்லாமல் நிறைந்த" என்பது "கனவாய் தொடங்கி இல்லமாய் நிறைந்த" எனத் திருத்தப்பட்டுள்ளது.',
    'இடம் (Venue) திருத்தம்: "கழிவெட்டிபாளையம்" என்பது "காடுவெட்டிபாளையம்" எனத் திருத்தப்பட்டு (நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி) வரைபடத்துடன் இணைக்கப்பட்டுள்ளது.',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="original-invite-modal-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-2 border-[#C59B27] bg-[#FAF3E3] p-5 shadow-2xl sm:p-7">
        <div className="flex items-center justify-between border-b border-[#D4AF37]/50 pb-4">
          <div className="flex items-center gap-2">
            <FileCheck2 className="h-5 w-5 text-[#7A1C1C]" />
            <h3
              id="original-invite-modal-title"
              className="text-lg text-[#6E1414] sm:text-xl"
            >
              <BaminiText text="அசல் அழைப்பிதழ் மற்றும் மேற்கொள்ளப்பட்ட திருத்தங்கள்" />
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="மூடுக"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C59B27] bg-[#FFFDF8] text-[#4A1812] hover:bg-[#F3E2BC]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#C59B27] bg-[#FFFDF8] p-2">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-22_at_9.05.05_AM_b0242718.jpeg"
                alt="அசல் புதுமனை புகுவிழா அழைப்பிதழ் குறிப்புகள்"
                referrerPolicy="no-referrer"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between md:col-span-7">
            <div>
              <h4 className="font-tamil-display text-base font-bold text-[#7A1C1C]">
                பேனாவில் குறிக்கப்பட்ட அனைத்து திருத்தங்களும் 100% பின்பற்றப்பட்டுள்ளன:
              </h4>
              <ul className="font-tamil-body mt-3 space-y-2.5 text-xs leading-relaxed text-[#3B1610] sm:text-sm">
                {correctionsList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-xl border border-[#D4AF37]/50 bg-[#FFFDF9] p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6B40]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="font-tamil-body rounded-xl bg-[#7A1C1C] px-5 py-2.5 text-xs font-bold text-[#FFFDF8] hover:bg-[#5C1313]"
              >
                அழைப்பிதழுக்குத் திரும்புக
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
