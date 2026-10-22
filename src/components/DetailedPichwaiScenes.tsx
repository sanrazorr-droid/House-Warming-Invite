import React from 'react';
import {
  CaparisonedRoyalElephant,
  DetailedLotusBloom,
  DetailedLotusSeedPod,
  PichwaiDetailedRoseBloom,
  PichwaiKadambaFoliageCluster,
  RoyalIndianPeacock,
  SacredKamadhenuCow,
  SharedPichwaiSvgDefs,
} from './DetailedPichwaiArt';

/**
 * Calligraphic Golden Ganesha & Filigree Lotus Mandala (from 00:00 - 00:28 of the video)
 */
export const GoldenGaneshaMandalaMedallion: React.FC<{
  size?: 'sm' | 'md' | 'lg';
}> = ({ size = 'md' }) => {
  const dims =
    size === 'lg'
      ? 'h-36 w-36 sm:h-44 sm:w-44'
      : size === 'sm'
      ? 'h-20 w-20 sm:h-24 sm:w-24'
      : 'h-28 w-28 sm:h-34 sm:w-34';

  return (
    <div
      className={`pointer-events-none relative mx-auto flex items-center justify-center select-none ${dims}`}
      aria-hidden="true"
    >
      {/* Slowly Rotating Outer Filigree Lotus Mandala Ring */}
      <svg
        viewBox="0 0 220 220"
        className="animate-mandala-slow absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mandalaGoldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5D77F" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#C59B27" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="110" cy="110" r="104" fill="url(#mandalaGoldGlow)" />
        <circle
          cx="110"
          cy="110"
          r="92"
          stroke="#C59B27"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.7"
        />
        <circle
          cx="110"
          cy="110"
          r="78"
          stroke="#B8891E"
          strokeWidth="1.4"
          opacity="0.65"
        />

        {/* 16 Ornate Filigree Lotus Petals Around the Mandala Perimeter */}
        {Array.from({ length: 16 }).map((_, idx) => {
          const deg = idx * 22.5;
          return (
            <g key={idx} transform={`rotate(${deg} 110 110)`}>
              <path
                d="M110 10 C118 22, 120 32, 110 42 C100 32, 102 22, 110 10 Z"
                fill="#E5C158"
                fillOpacity="0.38"
                stroke="#B3861B"
                strokeWidth="1"
              />
              <circle cx="110" cy="6" r="2.2" fill="#B3861B" />
            </g>
          );
        })}
      </svg>

      {/* Center Circular Golden-Rimmed Medallion with Uploaded Sri Vinayagar Emblem */}
      <div className="relative z-10 h-[62%] w-[62%] overflow-hidden rounded-full border-2 border-[#D4AF37] bg-[#520509] shadow-md ring-2 ring-[#F5D77F]/60">
        <img
          src="/assets/aistudio/Welcoming_Bappa__The_Divine_Energy_of_Ganesha_____As_we_prepare_to_welcome_Lord_Ganesha_into_our_homes_and_hearts_for_Ganesh_Chaturthi_tomorrow__September_14th__let_s_take_a_moment_to_soak_in_His_divine_grace__Whic_76452a83.jpg"
          alt="ஸ்ரீ விநாயகர்"
          className="h-full w-full scale-[1.22] object-cover object-center"
        />
      </div>
    </div>
  );
};

/**
 * Scene 2 Artwork from Video (00:12 - 00:28):
 * Golden Chhatri Pavilion + 5 Sacred Adorned White Kamadhenu Cows (Go-Puja)
 * behind Carved Sandstone Balustrade + Blooming Pink Lotus Pond
 */
export const SacredKamadhenuCourtyardScene: React.FC = () => (
  <div className="pointer-events-none relative mx-auto w-full select-none" aria-hidden="true">
    <SharedPichwaiSvgDefs />
    <svg
      viewBox="0 0 800 310"
      className="h-auto w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Golden Domed Chhatri Pavilion (00:12 - 00:27 of Video) */}
      <g transform="translate(15, 25)">
        {/* Upper Golden Parasol Dome */}
        <path d="M75 0 L80 14 L70 14 Z" fill="#B8891E" />
        <path
          d="M15 52 C20 18, 50 12, 75 12 C100 12, 130 18, 135 52 Z"
          fill="url(#ribbedDomeGoldGrad)"
          stroke="#8C6D2E"
          strokeWidth="1.5"
        />
        <path d="M5 52 L145 52 L155 64 L-5 64 Z" fill="#D4AF37" stroke="#7A520B" strokeWidth="1.2" />
        {/* Lower Domed Pavilion & Slender Golden Columns */}
        <rect x="18" y="64" width="8" height="120" fill="#DFC682" stroke="#8C6D2E" strokeWidth="1" />
        <rect x="72" y="64" width="8" height="120" fill="#DFC682" stroke="#8C6D2E" strokeWidth="1" />
        <rect x="124" y="64" width="8" height="120" fill="#DFC682" stroke="#8C6D2E" strokeWidth="1" />
        <path
          d="M26 95 Q50 72 72 95 M80 95 Q102 72 124 95"
          stroke="#9A6B13"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Lush Tropical Fan Palms, Kadamba Foliage & Blooming Rose Shrubs Behind the Cows */}
      <g>
        {/* Left Flowering Rose & Kadamba Shrub */}
        <PichwaiKadambaFoliageCluster cx={48} cy={176} scale={1.15} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={88} cy={184} scale={1.05} variant="light" />
        <PichwaiDetailedRoseBloom cx={38} cy={162} scale={0.75} rotate={-12} />
        <PichwaiDetailedRoseBloom cx={68} cy={156} scale={0.82} rotate={18} />
        <PichwaiDetailedRoseBloom cx={92} cy={174} scale={0.75} rotate={-20} />

        {/* Right Tropical Fan Palms & Flowering Shrubs */}
        <g transform="translate(680, 145)">
          <path d="M0 40 C-18 18, -36 2, -52 -8 C-32 8, -14 22, 0 40 Z" fill="#3E7B42" stroke="#23492D" strokeWidth="0.8" />
          <path d="M0 40 C-12 12, -24 -12, -34 -28 C-18 -8, -6 14, 0 40 Z" fill="#4E8E4E" stroke="#23492D" strokeWidth="0.8" />
          <path d="M0 40 C-2 8, -4 -18, -4 -36 C4 -16, 4 10, 0 40 Z" fill="#5CA058" stroke="#23492D" strokeWidth="0.8" />
          <path d="M0 40 C12 12, 22 -12, 30 -28 C20 -6, 10 16, 0 40 Z" fill="#4E8E4E" stroke="#23492D" strokeWidth="0.8" />
          <path d="M0 40 C20 18, 36 4, 52 -6 C34 10, 16 24, 0 40 Z" fill="#3E7B42" stroke="#23492D" strokeWidth="0.8" />
          <PichwaiKadambaFoliageCluster cx={38} cy={28} scale={1.1} variant="mid" />
          <PichwaiDetailedRoseBloom cx={24} cy={18} scale={0.78} rotate={15} />
          <PichwaiDetailedRoseBloom cx={52} cy={26} scale={0.75} rotate={-14} />
        </g>
      </g>

      {/* Green Courtyard Lawn Mound */}
      <path
        d="M40 220 Q220 185 400 205 Q580 185 760 220 L760 265 L40 265 Z"
        fill="#7DA856"
      />

      {/* 5 SACRED ADORNED WHITE KAMADHENU COWS (கோமாதா பசுக்கள் - 00:12 to 00:28 of Video) */}
      {/* Back Left Cow */}
      <SacredKamadhenuCow cx={275} cy={176} scale={0.92} facing="right" />
      {/* Back Right Cow */}
      <SacredKamadhenuCow cx={515} cy={176} scale={0.92} facing="left" />
      {/* Front Left Standing Cow */}
      <SacredKamadhenuCow cx={205} cy={198} scale={1.05} facing="right" />
      {/* Center Seated Auspicious Cow / Calf */}
      <SacredKamadhenuCow cx={390} cy={210} scale={0.95} facing="left" seated />
      {/* Front Right Standing Cow */}
      <SacredKamadhenuCow cx={595} cy={198} scale={1.05} facing="left" />

      {/* Carved Sandstone & Celadon Balustrade (கற்கட்டளை வேலி - 00:12 to 00:28 of Video) */}
      <g transform="translate(0, 232)">
        <rect x="60" y="0" width="680" height="8" rx="2" fill="#E8D7B4" stroke="#9E8252" strokeWidth="1.2" />
        <rect x="60" y="36" width="680" height="10" rx="2" fill="#D5C096" stroke="#9E8252" strokeWidth="1.2" />
        {Array.from({ length: 28 }).map((_, idx) => {
          const x = 78 + idx * 23.5;
          return (
            <path
              key={idx}
              d={`M${x - 4} 8 Q${x - 7} 22 ${x - 4} 36 L${x + 4} 36 Q${x + 7} 22 ${x + 4} 8 Z`}
              fill="#F3E6C9"
              stroke="#9E8252"
              strokeWidth="1"
            />
          );
        })}
        {/* Balustrade Pillars with Celadon Green Caps */}
        {[65, 225, 575, 730].map((px, i) => (
          <g key={i} transform={`translate(${px}, -12)`}>
            <rect x="-10" y="6" width="20" height="52" fill="#EFE0BE" stroke="#8C6D3B" strokeWidth="1.2" />
            <ellipse cx="0" cy="4" rx="12" ry="5" fill="#4E8C6F" stroke="#2D5944" strokeWidth="1" />
          </g>
        ))}
      </g>

      {/* Foreground Blooming Pink Lotuses & Seed Pods Along the Balustrade */}
      <g className="animate-lotus">
        <DetailedLotusSeedPod cx={105} cy={226} angle={14} scale={0.9} />
        <DetailedLotusSeedPod cx={695} cy={224} angle={-16} scale={0.9} />
        <DetailedLotusBloom cx={55} cy={268} scale={1.15} />
        <DetailedLotusBloom cx={165} cy={282} scale={0.85} />
        <DetailedLotusBloom cx={310} cy={285} scale={0.9} />
        <DetailedLotusBloom cx={485} cy={285} scale={0.9} flip />
        <DetailedLotusBloom cx={635} cy={282} scale={0.85} flip />
        <DetailedLotusBloom cx={745} cy={268} scale={1.15} flip />
      </g>
    </svg>
  </div>
);

/**
 * Combined Grand Finale Palace, Twin Caparisoned Royal Elephants, Majestic Peacock,
 * and Multi-Layered Watercolor Pink Lotus Pond (Scenes 1, 3 & 4 of Video)
 */
export const GrandPalaceElephantsPeacockAndLotusPond: React.FC = () => (
  <div
    className="pointer-events-none relative mx-auto mt-2 w-full overflow-hidden pt-2 select-none"
    aria-hidden="true"
  >
    <SharedPichwaiSvgDefs />
    <svg
      viewBox="0 0 800 320"
      className="h-auto w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="palaceGoldWall" x1="400" y1="15" x2="400" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBF2D8" />
          <stop offset="55%" stopColor="#DFC480" />
          <stop offset="100%" stopColor="#B58E3E" />
        </linearGradient>
        <linearGradient id="pondMeadowGrad" x1="400" y1="185" x2="400" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9AB569" />
          <stop offset="50%" stopColor="#658E4C" />
          <stop offset="100%" stopColor="#26593C" />
        </linearGradient>
      </defs>

      {/* =====================================================================
          1. TRIPLE-DOMED GOLDEN PALACE PAVILION (00:44 - 00:59 of Video)
         ===================================================================== */}
      <g transform="translate(185, 8)">
        {/* Left Dome */}
        <path d="M85 18 L89 30 L81 30 Z" fill="#9A6B13" />
        <path
          d="M35 72 C38 38, 58 28, 85 28 C112 28, 132 38, 135 72 Z"
          fill="url(#palaceGoldWall)"
          stroke="#8C6D2E"
          strokeWidth="1.3"
        />
        {/* Center Grand Ribbed Dome */}
        <path d="M215 0 L220 15 L210 15 Z" fill="#9A6B13" />
        <path
          d="M145 72 C150 24, 178 14, 215 14 C252 14, 280 24, 285 72 Z"
          fill="url(#palaceGoldWall)"
          stroke="#8C6D2E"
          strokeWidth="1.5"
        />
        <path d="M215 14 Q185 42 182 72 M215 14 L215 72 M215 14 Q245 42 248 72" stroke="#9E7C36" strokeWidth="1" />
        {/* Right Dome */}
        <path d="M345 18 L349 30 L341 30 Z" fill="#9A6B13" />
        <path
          d="M295 72 C298 38, 318 28, 345 28 C372 28, 392 38, 395 72 Z"
          fill="url(#palaceGoldWall)"
          stroke="#8C6D2E"
          strokeWidth="1.3"
        />

        {/* Palace Cornice & Scalloped Arches */}
        <rect x="15" y="72" width="400" height="12" rx="2" fill="#E5C878" stroke="#8C6D2E" strokeWidth="1.2" />
        <rect x="25" y="84" width="380" height="95" fill="#FAF0D6" stroke="#9A721C" strokeWidth="1.2" />
        {/* 3 Cusped Palace Arches */}
        {[85, 215, 345].map((ax, idx) => (
          <path
            key={idx}
            d={`M${ax - 42} 178 L${ax - 42} 122 Q${ax - 22} 95 ${ax} 92 Q${ax + 22} 95 ${ax + 42} 122 L${ax + 42} 178 Z`}
            fill="#EAD5A2"
            stroke="#8C6D2E"
            strokeWidth="1.2"
          />
        ))}
      </g>

      {/* =====================================================================
          2. LUSH BOTANICAL PALMS, BANANA TREES & TEMPLE GROVE FOLIAGE
         ===================================================================== */}
      {/* Left Pichwai Grove & Banana Leaves */}
      <g transform="translate(20, 65)">
        <PichwaiKadambaFoliageCluster cx={44} cy={72} scale={1.25} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={86} cy={84} scale={1.15} variant="mid" />
        <path d="M75 110 C45 65, 18 42, -2 50 C18 78, 45 96, 75 110 Z" fill="#4E8E42" stroke="#2D5927" strokeWidth="0.9" />
        <path d="M72 108 C45 75, 22 58, 2 52" stroke="#A3D18A" strokeWidth="1.2" fill="none" />
        <path d="M85 105 C62 52, 42 22, 20 22 C42 56, 62 84, 85 105 Z" fill="#64A64E" stroke="#2D5927" strokeWidth="0.9" />
        <path d="M82 102 C62 64, 44 38, 24 25" stroke="#B6DE9E" strokeWidth="1.2" fill="none" />
        <PichwaiDetailedRoseBloom cx={32} cy={86} scale={0.78} rotate={-14} />
      </g>
      {/* Right Tropical Fan Palms & Kadamba Foliage Behind the Peacock */}
      <g transform="translate(655, 65)">
        <path d="M20 115 C-4 72, -26 44, -48 34 C-22 56, -2 84, 20 115 Z" fill="#3D753B" stroke="#214520" strokeWidth="0.9" />
        <path d="M20 115 C8 66, -4 32, -16 14 C2 42, 12 76, 20 115 Z" fill="#4E8C4A" stroke="#214520" strokeWidth="0.9" />
        <path d="M20 115 C22 64, 24 28, 26 8 C30 42, 26 78, 20 115 Z" fill="#5FA058" stroke="#214520" strokeWidth="0.9" />
        <path d="M20 115 C38 68, 56 38, 72 24 C56 54, 38 84, 20 115 Z" fill="#4E8C4A" stroke="#214520" strokeWidth="0.9" />
        <path d="M20 115 C48 82, 74 62, 96 54 C72 76, 46 96, 20 115 Z" fill="#3D753B" stroke="#214520" strokeWidth="0.9" />
        <PichwaiKadambaFoliageCluster cx={58} cy={86} scale={1.15} variant="mid" />
        <PichwaiDetailedRoseBloom cx={74} cy={78} scale={0.78} rotate={16} />
      </g>

      {/* =====================================================================
          3. CARVED TERRACE BALUSTRADE & ROLLING LOTUS POND MEADOW
         ===================================================================== */}
      <rect x="0" y="176" width="800" height="12" fill="#E8D7B4" stroke="#9E8252" strokeWidth="1" />
      <path
        d="M0 192 Q180 165 400 185 Q620 165 800 192 L800 320 L0 320 Z"
        fill="url(#pondMeadowGrad)"
      />
      <path
        d="M0 225 Q220 202 400 220 Q580 202 800 225 L800 320 L0 320 Z"
        fill="#4D7A42"
        opacity="0.75"
      />

      {/* =====================================================================
          4. TWIN CAPARISONED ROYAL ELEPHANTS (00:00 - 00:10 & 00:30 - 00:43)
             AND MAJESTIC INDIAN PEACOCK (00:45 - 00:59)
         ===================================================================== */}
      <CaparisonedRoyalElephant cx={215} cy={156} scale={0.95} facing="right" />
      <CaparisonedRoyalElephant cx={515} cy={156} scale={0.95} facing="left" />
      <RoyalIndianPeacock cx={660} cy={175} scale={1.08} />

      {/* =====================================================================
          5. MULTI-LAYERED WATERCOLOR PINK LOTUS POND & GREEN SEED PODS
         ===================================================================== */}
      <g className="animate-lotus">
        {/* Green Perforated Seed Pods (தாமரை விதைப்பை) */}
        <DetailedLotusSeedPod cx={145} cy={195} angle={16} scale={0.95} />
        <DetailedLotusSeedPod cx={445} cy={225} angle={-18} scale={0.88} />
        <DetailedLotusSeedPod cx={615} cy={192} angle={-12} scale={0.95} />

        {/* Back Row Blooming Pink Lotuses */}
        <DetailedLotusBloom cx={65} cy={215} scale={0.95} />
        <DetailedLotusBloom cx={245} cy={238} scale={0.82} />
        <DetailedLotusBloom cx={545} cy={235} scale={0.82} flip />
        <DetailedLotusBloom cx={745} cy={215} scale={0.95} flip />

        {/* Foreground Grand Blooming Watercolor Lotuses */}
        <DetailedLotusBloom cx={95} cy={282} scale={1.22} />
        <DetailedLotusBloom cx={365} cy={272} scale={1.15} />
        <DetailedLotusBloom cx={505} cy={292} scale={1.25} flip />
        <DetailedLotusBloom cx={695} cy={278} scale={1.18} flip />

        {/* Tall Pink Lotus Buds */}
        <g transform="translate(178, 248)">
          <path d="M0 45 Q4 20 0 0" stroke="#365926" strokeWidth="3" />
          <path d="M0 -22 C-10 -10, -10 4, 0 10 C10 4, 10 -10, 0 -22 Z" fill="#E34A77" />
          <path d="M-8 6 Q0 14 8 6" fill="#3E6B36" />
        </g>
        <g transform="translate(595, 245)">
          <path d="M0 45 Q-4 20 0 0" stroke="#365926" strokeWidth="3" />
          <path d="M0 -22 C-10 -10, -10 4, 0 10 C10 4, 10 -10, 0 -22 Z" fill="#E34A77" />
          <path d="M-8 6 Q0 14 8 6" fill="#3E6B36" />
        </g>
      </g>
    </svg>
  </div>
);
