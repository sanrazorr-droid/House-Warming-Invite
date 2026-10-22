import React from 'react';

export const HangingLotusGarlands: React.FC = () => {
  // 8 hanging strings across the top cusp arch, symmetric lengths framing the arch
  const garlands = [
    { left: '6%', beadCount: 6, swayClass: 'animate-thoranam' },
    { left: '17%', beadCount: 5, swayClass: 'animate-thoranam-alt' },
    { left: '29%', beadCount: 3, swayClass: 'animate-thoranam' },
    { left: '42%', beadCount: 2, swayClass: 'animate-thoranam-alt' },
    { left: '58%', beadCount: 2, swayClass: 'animate-thoranam' },
    { left: '71%', beadCount: 3, swayClass: 'animate-thoranam-alt' },
    { left: '83%', beadCount: 5, swayClass: 'animate-thoranam' },
    { left: '94%', beadCount: 6, swayClass: 'animate-thoranam-alt' },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-9 z-10 h-44 overflow-hidden sm:top-10 sm:h-52"
      aria-hidden="true"
    >
      {garlands.map((g, idx) => (
        <div
          key={idx}
          style={{ left: g.left }}
          className={`absolute top-0 -translate-x-1/2 ${g.swayClass}`}
        >
          <svg
            width="28"
            height={g.beadCount * 16 + 44}
            viewBox={`0 0 28 ${g.beadCount * 16 + 44}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Golden thread */}
            <line
              x1="14"
              y1="0"
              x2="14"
              y2={g.beadCount * 16}
              stroke="#C59B27"
              strokeWidth="1.5"
            />
            {/* Jasmine / Golden flower buds along the cord */}
            {Array.from({ length: g.beadCount }).map((_, bIdx) => {
              const y = bIdx * 16 + 6;
              return (
                <g key={bIdx}>
                  <path
                    d={`M14 ${y} C9 ${y + 4}, 9 ${y + 10}, 14 ${y + 13} C19 ${y + 10}, 19 ${y + 4}, 14 ${y}Z`}
                    fill="#F3DFA2"
                    stroke="#C59B27"
                    strokeWidth="0.9"
                  />
                  <circle cx="14" cy={y + 2} r="1.5" fill="#D4AF37" />
                </g>
              );
            })}
            {/* Pink Lotus Bud at the bottom */}
            <g transform={`translate(0, ${g.beadCount * 16})`}>
              {/* Green Calyx / Sepals */}
              <path
                d="M14 0 C9 2, 7 8, 9 13 C11 9, 13 7, 14 7 C15 7, 17 9, 19 13 C21 8, 19 2, 14 0Z"
                fill="#4D7C4D"
              />
              {/* Outer Pink Petals */}
              <path
                d="M14 5 C6 10, 5 22, 14 33 C23 22, 22 10, 14 5Z"
                fill="url(#lotusPinkGrad)"
              />
              {/* Inner Deep Pink Petal Highlights */}
              <path
                d="M14 7 C10 13, 10 23, 14 33 C18 23, 18 13, 14 7Z"
                fill="#D84B73"
                fillOpacity="0.65"
              />
              <path
                d="M14 9 C12 15, 12 24, 14 32"
                stroke="#FAD0DC"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <linearGradient
                id="lotusPinkGrad"
                x1="14"
                y1="5"
                x2="14"
                y2="33"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#F7A8C0" />
                <stop offset="55%" stopColor="#E65C85" />
                <stop offset="100%" stopColor="#B82955" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

export const FlutteringSunbird: React.FC<{ side: 'left' | 'right' }> = ({
  side,
}) => {
  const isLeft = side === 'left';
  return (
    <div
      className={`pointer-events-none select-none ${
        isLeft ? 'animate-bird-left' : 'animate-bird-right'
      }`}
      aria-hidden="true"
    >
      <svg
        width="64"
        height="58"
        viewBox="0 0 64 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLeft ? '' : '-scale-x-100'}
      >
        {/* Fluttering Back Wing */}
        <g className="animate-wing">
          <path
            d="M28 24 C16 8, 6 6, 3 14 C8 22, 18 26, 28 26 Z"
            fill="#6E8B74"
            fillOpacity="0.75"
          />
        </g>
        {/* Tail feathers */}
        <path
          d="M21 34 L7 48 L13 51 L25 37 Z"
          fill="#8C2D19"
        />
        {/* Body - Emerald & Ruby Sunbird */}
        <path
          d="M22 35 C20 26, 27 19, 36 20 C43 20, 46 25, 43 31 C39 38, 28 41, 22 35 Z"
          fill="url(#sunbirdBody)"
        />
        {/* Ruby breast patch */}
        <path
          d="M34 23 C39 24, 42 28, 39 33 C35 35, 31 32, 34 23 Z"
          fill="#C84630"
        />
        {/* Fluttering Fore Wing */}
        <g className="animate-wing">
          <path
            d="M31 25 C22 10, 10 9, 7 18 C13 25, 22 28, 31 27 Z"
            fill="url(#sunbirdWing)"
          />
        </g>
        {/* Head & Beak */}
        <circle cx="42" cy="21" r="5.5" fill="#2A6F57" />
        <circle cx="44" cy="20" r="1.3" fill="#1A1A1A" />
        <circle cx="44.4" cy="19.6" r="0.4" fill="#FFFFFF" />
        <path
          d="M47 20 Q56 18 61 21 Q55 21 47 22 Z"
          fill="#3A2618"
        />
        <defs>
          <linearGradient id="sunbirdBody" x1="20" y1="19" x2="44" y2="39" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E7D5B" />
            <stop offset="60%" stopColor="#489FB5" />
            <stop offset="100%" stopColor="#D96B27" />
          </linearGradient>
          <linearGradient id="sunbirdWing" x1="7" y1="10" x2="31" y2="27" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F7756" />
            <stop offset="100%" stopColor="#264E36" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const BananaLeafCluster: React.FC<{ side: 'left' | 'right' }> = ({
  side,
}) => {
  const isLeft = side === 'left';
  return (
    <svg
      viewBox="0 0 140 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${
        isLeft ? '' : '-scale-x-100'
      }`}
      aria-hidden="true"
    >
      {/* Upper arching banana leaf */}
      <path
        d="M0 95 C25 45, 78 18, 128 24 C102 52, 62 78, 0 110 Z"
        fill="url(#leafGrad1)"
      />
      <path
        d="M0 102 C45 65, 85 40, 125 25"
        stroke="#A3C985"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Second broad tropical banana leaf */}
      <path
        d="M0 130 C35 88, 95 75, 136 92 C100 120, 52 135, 0 148 Z"
        fill="url(#leafGrad2)"
      />
      <path
        d="M0 138 C48 108, 92 94, 133 92"
        stroke="#9BC47B"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Lower curving leaf */}
      <path
        d="M0 165 C28 140, 72 138, 105 156 C72 175, 35 182, 0 185 Z"
        fill="url(#leafGrad1)"
      />
      <defs>
        <linearGradient id="leafGrad1" x1="0" y1="20" x2="130" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2E5A36" />
          <stop offset="55%" stopColor="#4F834F" />
          <stop offset="100%" stopColor="#76A865" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0" y1="80" x2="136" y2="145" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#244B2C" />
          <stop offset="60%" stopColor="#3E7242" />
          <stop offset="100%" stopColor="#689B5B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TraditionalFlourishDivider: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <div
    className={`flex items-center justify-center gap-2 py-1 ${className}`}
    aria-hidden="true"
  >
    <div className="h-[1px] flex-1 max-w-[110px] bg-gradient-to-r from-transparent via-[#C59B27] to-[#9A721C]" />
    <svg
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-[#B3861B]"
    >
      <path
        d="M18 2 L20.5 7.5 L26 6 L22.5 10 L26 14 L20.5 12.5 L18 18 L15.5 12.5 L10 14 L13.5 10 L10 6 L15.5 7.5 Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <circle cx="4" cy="10" r="1.8" fill="currentColor" />
      <circle cx="32" cy="10" r="1.8" fill="currentColor" />
    </svg>
    <div className="h-[1px] flex-1 max-w-[110px] bg-gradient-to-l from-transparent via-[#C59B27] to-[#9A721C]" />
  </div>
);

export const RoyalElephantAndLotuses: React.FC = () => {
  return (
    <div
      className="relative mx-auto mt-2 w-full max-w-[680px] pt-2 select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 680 215"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        {/* Background Golden Mandapam Domes Left & Right (matching reference image_9abc643c.png) */}
        <g opacity="0.92">
          {/* Left Golden Palace Dome */}
          <path
            d="M0 145 C0 88, 45 55, 92 50 L92 145 Z"
            fill="url(#goldDomeGrad)"
            stroke="#B68B23"
            strokeWidth="1.2"
          />
          <path
            d="M10 125 L92 125 M15 135 L92 135"
            stroke="#9A721C"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          {/* Right Golden Palace Dome & Pavilion */}
          <path
            d="M520 112 C525 62, 575 35, 635 35 C660 35, 675 45, 680 55 L680 112 Z"
            fill="url(#goldDomeGrad)"
            stroke="#B68B23"
            strokeWidth="1.2"
          />
          <rect
            x="495"
            y="112"
            width="185"
            height="10"
            rx="2"
            fill="#D4AF37"
            stroke="#9A721C"
            strokeWidth="1"
          />
          {/* Row of tiny golden diyas on pavilion roof */}
          {[515, 540, 565, 590, 615, 640, 665].map((x) => (
            <g key={x}>
              <path
                d={`M${x - 5} 112 Q${x} 117 ${x + 5} 112 Z`}
                fill="#8B4513"
              />
              <path
                d={`M${x} 104 Q${x - 3} 109 ${x} 112 Q${x + 3} 109 ${x} 104 Z`}
                fill="#FF9900"
              />
            </g>
          ))}
          {/* Pavilion Pillars */}
          <rect x="528" y="122" width="12" height="75" fill="url(#goldDomeGrad)" stroke="#9A721C" strokeWidth="1" />
          <rect x="642" y="122" width="12" height="75" fill="url(#goldDomeGrad)" stroke="#9A721C" strokeWidth="1" />
        </g>

        {/* Low Golden Courtyard Balustrade */}
        <rect
          x="40"
          y="162"
          width="600"
          height="10"
          fill="url(#goldDomeGrad)"
          stroke="#B68B23"
          strokeWidth="1"
        />

        {/* Royal Caparisoned Ceremonial Elephant (Left-Center, Raising Trunk Auspiciously) */}
        <g transform="translate(88, 22)">
          {/* Back & Front Legs */}
          <path
            d="M32 115 L26 168 L52 168 L56 122 Z"
            fill="#2C3E55"
          />
          <path
            d="M72 120 L68 168 L92 168 L95 120 Z"
            fill="#1E2D40"
          />
          <path
            d="M124 115 L120 168 L146 168 L148 115 Z"
            fill="#2C3E55"
          />
          <path
            d="M150 112 L156 168 L180 168 L172 110 Z"
            fill="#1E2D40"
          />
          {/* Golden anklets & toenails on elephant feet */}
          {[26, 68, 120, 156].map((lx, i) => (
            <g key={i}>
              <rect x={lx} y="154" width="24" height="5" rx="2" fill="#D4AF37" />
              <circle cx={lx + 5} cy="166" r="2.5" fill="#F5E9D3" />
              <circle cx={lx + 12} cy="166" r="2.5" fill="#F5E9D3" />
              <circle cx={lx + 19} cy="166" r="2.5" fill="#F5E9D3" />
            </g>
          ))}

          {/* Elephant Body */}
          <path
            d="M22 92 C18 55, 58 42, 112 45 C148 47, 172 68, 168 108 C164 132, 125 135, 82 135 C42 135, 25 120, 22 92 Z"
            fill="url(#elephantSkin)"
          />

          {/* Ornate Royal Caparison / Silk Jhool Blanket (Magenta, Royal Blue & Gold) */}
          <path
            d="M38 48 C68 42, 112 43, 135 52 L140 126 C108 132, 68 132, 34 124 Z"
            fill="#283593"
            stroke="#D4AF37"
            strokeWidth="3"
          />
          <rect
            x="46"
            y="54"
            width="80"
            height="62"
            rx="4"
            fill="#AD1457"
            stroke="#F3DFA2"
            strokeWidth="2"
          />
          {/* Intricate Golden Mandala inside the blanket */}
          <circle
            cx="86"
            cy="85"
            r="20"
            fill="#D4AF37"
            fillOpacity="0.25"
            stroke="#F3DFA2"
            strokeWidth="1.5"
          />
          <circle cx="86" cy="85" r="10" fill="#E65100" stroke="#F3DFA2" strokeWidth="1.2" />
          <circle cx="86" cy="85" r="4" fill="#FFF8E1" />
          {/* Golden tassels along bottom of blanket */}
          {[40, 52, 64, 76, 88, 100, 112, 124, 136].map((tx) => (
            <circle key={tx} cx={tx} cy="130" r="3" fill="#D4AF37" />
          ))}

          {/* Elephant Head & Raised Auspicious Trunk */}
          <path
            d="M148 56 C168 48, 192 56, 198 76 C203 92, 226 88, 226 68 C226 52, 206 42, 200 28 C196 18, 204 8, 214 12 C220 15, 218 24, 212 25 C218 35, 245 45, 244 72 C243 102, 208 114, 184 102 C170 96, 155 86, 148 56 Z"
            fill="url(#elephantSkin)"
          />
          {/* Decorative Forehead Nettipattam (Gold & Crimson Headpiece) */}
          <path
            d="M174 52 C188 52, 198 62, 196 76 C186 78, 176 70, 174 52 Z"
            fill="#C62828"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          {/* Ear */}
          <path
            d="M132 54 C116 54, 112 82, 128 96 C142 102, 156 90, 154 68 Z"
            fill="#34495E"
            stroke="#D4AF37"
            strokeWidth="1.5"
          />
          {/* Ivory Tusk */}
          <path
            d="M186 92 Q208 100 216 88 Q204 106 182 99 Z"
            fill="#FFFDF7"
            stroke="#D4AF37"
            strokeWidth="1"
          />
          {/* Eye */}
          <circle cx="182" cy="70" r="2.2" fill="#FFFFFF" />
          <circle cx="182.5" cy="70" r="1.2" fill="#111111" />
        </g>

        {/* Foreground Lush Lotus Pond: Green Lotus Leaves, Lotus Pods & Blooming Pink Lotuses */}
        <g className="animate-lotus">
          {/* Green Lotus Leaves across base */}
          <ellipse cx="65" cy="195" rx="55" ry="18" fill="#2E6B40" />
          <ellipse cx="195" cy="198" rx="65" ry="16" fill="#3B7A4C" />
          <ellipse cx="340" cy="196" rx="70" ry="18" fill="#275935" />
          <ellipse cx="485" cy="198" rx="65" ry="16" fill="#3B7A4C" />
          <ellipse cx="615" cy="195" rx="58" ry="18" fill="#2E6B40" />

          {/* Lotus Seed Pods (Left & Right) */}
          <g transform="translate(42, 118)">
            <path d="M18 30 L24 75" stroke="#3D6B42" strokeWidth="3.5" />
            <path d="M4 22 C4 35, 32 35, 32 22 Z" fill="#558B59" />
            <ellipse cx="18" cy="22" rx="14" ry="6" fill="#8BC34A" stroke="#3D6B42" strokeWidth="1.2" />
            <circle cx="13" cy="22" r="1.5" fill="#33691E" />
            <circle cx="18" cy="20" r="1.5" fill="#33691E" />
            <circle cx="23" cy="22" r="1.5" fill="#33691E" />
          </g>
          <g transform="translate(595, 118)">
            <path d="M18 30 L12 75" stroke="#3D6B42" strokeWidth="3.5" />
            <path d="M4 22 C4 35, 32 35, 32 22 Z" fill="#558B59" />
            <ellipse cx="18" cy="22" rx="14" ry="6" fill="#8BC34A" stroke="#3D6B42" strokeWidth="1.2" />
            <circle cx="13" cy="22" r="1.5" fill="#33691E" />
            <circle cx="18" cy="20" r="1.5" fill="#33691E" />
            <circle cx="23" cy="22" r="1.5" fill="#33691E" />
          </g>

          {/* Blooming Pink Lotuses across the bottom border */}
          {[
            { x: 125, y: 175, scale: 0.95 },
            { x: 255, y: 182, scale: 0.8 },
            { x: 385, y: 172, scale: 1.1 },
            { x: 515, y: 176, scale: 0.95 },
            { x: 635, y: 180, scale: 0.8 },
          ].map((lotus, idx) => (
            <g
              key={idx}
              transform={`translate(${lotus.x}, ${lotus.y}) scale(${lotus.scale})`}
            >
              {/* Back petals */}
              <path
                d="M-38 8 C-34 -18, -14 -28, 0 -32 C14 -28, 34 -18, 38 8 Z"
                fill="#F48FB1"
              />
              {/* Side petals */}
              <path
                d="M-46 14 C-32 -6, -16 -12, 0 12 C16 -12, 32 -6, 46 14 C26 24, -26 24, -46 14 Z"
                fill="#EC407A"
              />
              {/* Center upright petals */}
              <path
                d="M-22 12 C-18 -14, -8 -26, 0 -34 C8 -26, 18 -14, 22 12 Z"
                fill="#F8BBD0"
              />
              <path
                d="M-12 14 C-10 -8, -4 -20, 0 -28 C4 -20, 10 -8, 12 14 Z"
                fill="#D81B60"
              />
              {/* Golden lotus stamen */}
              <ellipse cx="0" cy="10" rx="10" ry="4" fill="#FBC02D" />
            </g>
          ))}
        </g>

        <defs>
          <linearGradient id="goldDomeGrad" x1="0" y1="35" x2="680" y2="175" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5E1A4" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9A721C" />
          </linearGradient>
          <linearGradient id="elephantSkin" x1="20" y1="20" x2="220" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A607A" />
            <stop offset="55%" stopColor="#2C3E55" />
            <stop offset="100%" stopColor="#1B2838" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const KuthuvilakkuLamp: React.FC<{ className?: string }> = ({
  className = 'w-10 h-16',
}) => (
  <svg
    viewBox="0 0 48 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Glowing Aura */}
    <circle cx="24" cy="16" r="14" fill="#F59E0B" fillOpacity="0.22" />
    {/* Flame */}
    <g className="animate-diya">
      <path
        d="M24 4 C19 12, 18 18, 24 22 C30 18, 29 12, 24 4 Z"
        fill="#F59E0B"
      />
      <path
        d="M24 9 C21 14, 21 18, 24 21 C27 18, 27 14, 24 9 Z"
        fill="#FEF08A"
      />
    </g>
    {/* Lamp Crown / Swan / Deepam Bowl */}
    <path
      d="M10 24 L38 24 L33 31 L15 31 Z"
      fill="url(#brassLampGrad)"
      stroke="#8A6112"
      strokeWidth="1"
    />
    {/* Stem */}
    <rect x="21" y="31" width="6" height="32" rx="2" fill="url(#brassLampGrad)" />
    <ellipse cx="24" cy="42" rx="6" ry="2.5" fill="#D4AF37" />
    <ellipse cx="24" cy="52" rx="5" ry="2" fill="#D4AF37" />
    {/* Base */}
    <path
      d="M12 72 C14 63, 34 63, 36 72 Z"
      fill="url(#brassLampGrad)"
      stroke="#8A6112"
      strokeWidth="1"
    />
    <rect x="8" y="72" width="32" height="4" rx="2" fill="#9A721C" />
    <defs>
      <linearGradient id="brassLampGrad" x1="8" y1="24" x2="40" y2="76" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F6E099" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8A6112" />
      </linearGradient>
    </defs>
  </svg>
);
