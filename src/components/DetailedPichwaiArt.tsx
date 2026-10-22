import React from 'react';

/**
 * Ultra-detailed Pichwai, Royal Mandapam, Botanical & Kongu Agrarian SVG Artwork
 * Inspired directly by the 59-second reference video (https://pin.it/4NVOMLBDD):
 * - Ribbed Golden Temple Dome & Multi-tier Floral Friezes (00:00 - 00:10)
 * - 6 Swaying Beaded Golden Temple Bells & 7 Hanging Pink Lotus Bud Garlands
 * - Twin Caparisoned Royal Elephants with Zardozi Saddlecloths
 * - 5 Sacred Adorned White Kamadhenu Cows (Go-Puja) behind Sandstone Balustrade (00:12 - 00:28)
 * - Golden Chhatri Pavilion, Fluted Celadon-Sandstone Pillars & Climbing Rose Vines
 * - Triple-Domed Golden Palace & Majestic Blue-Emerald Peacock (00:44 - 00:59)
 * - Multi-layered Watercolor Pink Lotus Pond with Green Seed Pods & Pleated Teal Leaves
 * - Iridescent Ruby-Emerald Hummingbirds / Sunbirds
 */

export const DetailedLotusBloom: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
  flip?: boolean;
}> = ({ cx, cy, scale = 1, flip = false }) => (
  <g
    transform={`translate(${cx}, ${cy}) scale(${flip ? -scale : scale}, ${scale})`}
  >
    {/* Broad Ruffled Teal-Green Lotus Pad Base */}
    <ellipse cx="0" cy="24" rx="52" ry="15" fill="url(#pichwaiTealPadGrad)" />
    <path
      d="M-50 24 Q-25 14 0 22 Q25 14 50 24 Q25 34 0 28 Q-25 34 -50 24 Z"
      fill="#165B4C"
      opacity="0.65"
    />
    <path
      d="M0 24 L-38 20 M0 24 L-22 15 M0 24 L0 14 M0 24 L22 15 M0 24 L38 20"
      stroke="#66B59E"
      strokeWidth="1"
      opacity="0.6"
    />

    {/* Back Outer Deep Pink Petals */}
    <path
      d="M0 16 C-28 12, -48 -8, -42 -26 C-28 -22, -14 -8, 0 16 Z"
      fill="url(#pichwaiLotusOuterGrad)"
      stroke="#B8335E"
      strokeWidth="0.7"
    />
    <path
      d="M0 16 C28 12, 48 -8, 42 -26 C28 -22, 14 -8, 0 16 Z"
      fill="url(#pichwaiLotusOuterGrad)"
      stroke="#B8335E"
      strokeWidth="0.7"
    />

    {/* Mid-Layer Lush Rose-Pink Petals */}
    <path
      d="M0 16 C-22 6, -36 -18, -28 -38 C-14 -30, -6 -12, 0 16 Z"
      fill="url(#pichwaiLotusMidGrad)"
      stroke="#C94A72"
      strokeWidth="0.7"
    />
    <path
      d="M0 16 C22 6, 36 -18, 28 -38 C14 -30, 6 -12, 0 16 Z"
      fill="url(#pichwaiLotusMidGrad)"
      stroke="#C94A72"
      strokeWidth="0.7"
    />
    <path
      d="M0 16 C-14 0, -22 -26, -13 -44 C-4 -34, -2 -14, 0 16 Z"
      fill="url(#pichwaiLotusInnerGrad)"
      stroke="#D45B82"
      strokeWidth="0.7"
    />
    <path
      d="M0 16 C14 0, 22 -26, 13 -44 C4 -34, 2 -14, 0 16 Z"
      fill="url(#pichwaiLotusInnerGrad)"
      stroke="#D45B82"
      strokeWidth="0.7"
    />

    {/* Golden Seed Pod Receptacle Center (தாமரை பொகுட்டு) */}
    <ellipse cx="0" cy="-14" rx="12" ry="6.5" fill="#7FA650" stroke="#4D6E27" strokeWidth="0.8" />
    <circle cx="-5" cy="-14" r="1.4" fill="#3B591B" />
    <circle cx="0" cy="-16" r="1.4" fill="#3B591B" />
    <circle cx="5" cy="-14" r="1.4" fill="#3B591B" />
    <circle cx="-2.5" cy="-12" r="1.4" fill="#3B591B" />
    <circle cx="2.5" cy="-12" r="1.4" fill="#3B591B" />

    {/* Center Upright Soft Blush-White Tipped Petal */}
    <path
      d="M0 16 C-11 -4, -12 -32, 0 -48 C12 -32, 11 -4, 0 16 Z"
      fill="url(#pichwaiLotusCenterGrad)"
      stroke="#D96B8F"
      strokeWidth="0.8"
    />

    {/* Foreground Cupping Petals */}
    <path
      d="M-24 14 C-12 22, 12 22, 24 14 C14 6, -14 6, -24 14 Z"
      fill="url(#pichwaiLotusMidGrad)"
      stroke="#B8335E"
      strokeWidth="0.7"
    />
  </g>
);

export const DetailedLotusSeedPod: React.FC<{
  cx: number;
  cy: number;
  angle?: number;
  scale?: number;
}> = ({ cx, cy, angle = 0, scale = 1 }) => (
  <g transform={`translate(${cx}, ${cy}) rotate(${angle}) scale(${scale})`}>
    {/* Stem */}
    <path d="M0 45 Q-4 20 0 0" stroke="#3D6B35" strokeWidth="3" fill="none" />
    {/* Conical Green Seed Pod Cup */}
    <path
      d="M-18 -8 L0 16 L18 -8 Z"
      fill="#5B8C42"
      stroke="#365926"
      strokeWidth="1"
    />
    {/* Flat Perforated Top Face */}
    <ellipse
      cx="0"
      cy="-8"
      rx="18"
      ry="8"
      fill="#8EBE68"
      stroke="#365926"
      strokeWidth="1"
    />
    {/* Seed Holes */}
    <circle cx="-9" cy="-9" r="2" fill="#2E4D1E" />
    <circle cx="-3" cy="-11" r="2" fill="#2E4D1E" />
    <circle cx="4" cy="-11" r="2" fill="#2E4D1E" />
    <circle cx="10" cy="-8" r="2" fill="#2E4D1E" />
    <circle cx="-4" cy="-6" r="2" fill="#2E4D1E" />
    <circle cx="3" cy="-6" r="2" fill="#2E4D1E" />
  </g>
);

export const CaparisonedRoyalElephant: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
  facing?: 'left' | 'right';
}> = ({ cx, cy, scale = 1, facing = 'right' }) => {
  const dir = facing === 'left' ? -1 : 1;
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${dir * scale}, ${scale})`}>
      {/* Shadow on Terrace */}
      <ellipse cx="0" cy="54" rx="68" ry="8" fill="#4A3520" opacity="0.25" />

      {/* Back Left & Front Left Legs (Darker Slate Blue-Grey) */}
      <path
        d="M-46 12 L-52 50 L-34 50 L-30 15 Z"
        fill="#35495E"
        stroke="#22303F"
        strokeWidth="1"
      />
      <path
        d="M16 14 L14 50 L32 50 L34 14 Z"
        fill="#35495E"
        stroke="#22303F"
        strokeWidth="1"
      />
      {/* Gold Anklets */}
      <rect x="-52" y="43" width="18" height="4" rx="1.5" fill="#E6C25A" />
      <rect x="14" y="43" width="18" height="4" rx="1.5" fill="#E6C25A" />

      {/* Main Elephant Body */}
      <path
        d="M-58 -6 C-62 -36, -24 -46, 18 -38 C36 -34, 48 -18, 44 10 C22 22, -32 22, -58 -6 Z"
        fill="#48617A"
        stroke="#263849"
        strokeWidth="1.2"
      />

      {/* Tail with Tuft */}
      <path
        d="M-57 -12 Q-70 8 -66 28"
        stroke="#35495E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="-66" cy="31" rx="3" ry="5" fill="#1F2D3A" />

      {/* Back Right & Front Right Legs */}
      <path
        d="M-34 12 L-38 52 L-18 52 L-14 14 Z"
        fill="#48617A"
        stroke="#263849"
        strokeWidth="1"
      />
      <path
        d="M26 10 L28 52 L48 52 L44 8 Z"
        fill="#48617A"
        stroke="#263849"
        strokeWidth="1"
      />
      {/* Ornate Gold & Crimson Leg Guards / Anklets */}
      <rect x="-38" y="44" width="20" height="5" rx="2" fill="#D4AF37" />
      <rect x="28" y="44" width="20" height="5" rx="2" fill="#D4AF37" />
      <path d="M-36 49 L-20 49 M30 49 L46 49" stroke="#FFF3C4" strokeWidth="2" strokeDasharray="2 2" />

      {/* Ornate Zardozi Royal Saddlecloth (ஜூல் / பட்டத்து அலங்காரத் துணி) */}
      <path
        d="M-46 -36 C-18 -42, 10 -40, 24 -32 L28 22 C6 28, -22 28, -48 20 Z"
        fill="#8E6CC0"
        stroke="#F5D77F"
        strokeWidth="2"
      />
      {/* Inner Crimson & Gold Brocade Medallion */}
      <rect
        x="-34"
        y="-30"
        width="44"
        height="42"
        rx="4"
        fill="#C83E2B"
        stroke="#F5D77F"
        strokeWidth="1.8"
      />
      {/* Intricate Gold Lotus Motif inside Saddlecloth */}
      <circle cx="-12" cy="-9" r="11" fill="#F59E0B" stroke="#FFF4C2" strokeWidth="1" />
      <circle cx="-12" cy="-9" r="5" fill="#8C1D18" />
      <path
        d="M-12 -24 L-9 -15 L0 -15 L-7 -9 L-4 0 L-12 -5 L-20 0 L-17 -9 L-24 -15 L-15 -15 Z"
        fill="#FFF3B8"
      />
      {/* Hanging Gold Tassels along Saddlecloth Hem */}
      {Array.from({ length: 9 }).map((_, idx) => (
        <circle
          key={idx}
          cx={-44 + idx * 8.5}
          cy="24"
          r="2.4"
          fill="#F5D77F"
        />
      ))}

      {/* Elephant Head & Raised Salute Trunk (துதிக்கை உயர்த்திய பட்டத்து யானை) */}
      <path
        d="M24 -34 C42 -42, 58 -32, 62 -16 C66 -2, 78 -6, 78 -20 C78 -32, 66 -38, 60 -34 C58 -40, 68 -48, 78 -44 C88 -40, 90 -24, 84 -8 C78 6, 62 12, 46 4 Z"
        fill="#48617A"
        stroke="#263849"
        strokeWidth="1.2"
      />

      {/* Decorative Forehead Nettipattam (நெற்றிப்பட்டம்) & Head Cloth */}
      <path
        d="M28 -36 C40 -40, 52 -34, 56 -20 C46 -16, 34 -20, 28 -36 Z"
        fill="#D94862"
        stroke="#F5D77F"
        strokeWidth="1.5"
      />

      {/* Large Fan Ear with Pink & Gold Inner Marking */}
      <path
        d="M16 -32 C4 -34, -2 -18, 6 -4 C14 4, 28 -2, 28 -18 Z"
        fill="#3B5168"
        stroke="#F5D77F"
        strokeWidth="1.2"
      />
      <path
        d="M16 -26 C8 -26, 4 -16, 10 -8 C16 -2, 24 -6, 24 -16 Z"
        fill="#D96B82"
        opacity="0.75"
      />

      {/* Ivory Tusk with Gold Band */}
      <path
        d="M50 -6 Q68 -2 74 -14 Q64 -14 52 -12 Z"
        fill="#FFFDF5"
        stroke="#C59B27"
        strokeWidth="1"
      />
      {/* Eye */}
      <circle cx="48" cy="-22" r="2.2" fill="#FFFDF5" />
      <circle cx="48.5" cy="-22" r="1.2" fill="#111827" />
    </g>
  );
};

export const SacredKamadhenuCow: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
  facing?: 'left' | 'right';
  seated?: boolean;
}> = ({ cx, cy, scale = 1, facing = 'right', seated = false }) => {
  const dir = facing === 'left' ? -1 : 1;
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${dir * scale}, ${scale})`}>
      {/* Soft Ground Shadow */}
      <ellipse cx="0" cy={seated ? 28 : 42} rx="44" ry="7" fill="#3B5228" opacity="0.22" />

      {!seated ? (
        <>
          {/* Standing Legs with Gold Hooves */}
          <path d="M-28 8 L-32 40 L-22 40 L-18 10 Z" fill="#EAE3D2" stroke="#9E8C6C" strokeWidth="1" />
          <path d="M-16 10 L-18 42 L-8 42 L-6 10 Z" fill="#FFFDF7" stroke="#9E8C6C" strokeWidth="1" />
          <path d="M14 10 L12 40 L22 40 L24 10 Z" fill="#EAE3D2" stroke="#9E8C6C" strokeWidth="1" />
          <path d="M24 8 L26 42 L36 42 L34 8 Z" fill="#FFFDF7" stroke="#9E8C6C" strokeWidth="1" />
          <rect x="-32" y="37" width="10" height="3.5" fill="#C59B27" />
          <rect x="-18" y="39" width="10" height="3.5" fill="#C59B27" />
          <rect x="12" y="37" width="10" height="3.5" fill="#C59B27" />
          <rect x="26" y="39" width="10" height="3.5" fill="#C59B27" />
        </>
      ) : (
        <>
          {/* Seated Folded Legs */}
          <ellipse cx="-18" cy="22" rx="18" ry="8" fill="#EAE3D2" stroke="#9E8C6C" strokeWidth="1" />
          <ellipse cx="18" cy="22" rx="18" ry="8" fill="#FFFDF7" stroke="#9E8C6C" strokeWidth="1" />
        </>
      )}

      {/* Sacred White Cow Body with Hump */}
      <path
        d="M-38 -8 C-42 -28, -18 -34, 8 -28 C16 -36, 28 -38, 34 -24 C42 -12, 40 8, 28 16 C6 20, -24 20, -38 -8 Z"
        fill="#FFFDF9"
        stroke="#A6906A"
        strokeWidth="1.2"
      />

      {/* Auspicious Orange-Vermilion & Turmeric Dots on Coat (பசு மஞ்சள் குங்கும அலங்காரம்) */}
      <circle cx="-26" cy="-12" r="2.6" fill="#E85D26" />
      <circle cx="-18" cy="-4" r="2.4" fill="#F59E0B" />
      <circle cx="-28" cy="2" r="2.4" fill="#E85D26" />
      <circle cx="18" cy="-4" r="2.6" fill="#E85D26" />
      <circle cx="26" cy="4" r="2.4" fill="#F59E0B" />

      {/* Ornate Golden & Maroon Back Shawl (பட்டுத் துணி) */}
      <path
        d="M-18 -29 C-4 -31, 8 -29, 16 -25 L18 8 C4 12, -8 12, -20 8 Z"
        fill="#F5D77F"
        stroke="#B3861B"
        strokeWidth="1.4"
      />
      <rect x="-13" y="-24" width="22" height="24" rx="2" fill="#9E2A1C" stroke="#FFF3B8" strokeWidth="1" />
      <circle cx="-2" cy="-12" r="4.5" fill="#F5D77F" />

      {/* Dewlap (தாடை மடிப்பு) & Neck Garland with Brass Bell */}
      <path
        d="M26 -22 Q42 -12 34 8 Q24 6 22 -8 Z"
        fill="#F5EFE0"
        stroke="#A6906A"
        strokeWidth="1"
      />
      <path
        d="M22 -24 Q34 -10 38 -22"
        stroke="#D9381E"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="32" cy="-12" r="4" fill="#D4AF37" stroke="#7A520B" strokeWidth="1" />

      {/* Cow Head, Ears & Gold-Tipped Horns */}
      <path
        d="M26 -30 C32 -42, 46 -40, 52 -26 C56 -16, 48 -12, 38 -14 C30 -16, 24 -22, 26 -30 Z"
        fill="#FFFDF9"
        stroke="#A6906A"
        strokeWidth="1.2"
      />
      {/* Curved Horns with Golden Tips */}
      <path d="M28 -36 Q22 -48 30 -54 Q34 -46 34 -37 Z" fill="#5C4938" />
      <circle cx="30" cy="-54" r="2.5" fill="#F5D77F" />
      <path d="M36 -36 Q36 -48 44 -52 Q44 -44 40 -35 Z" fill="#4A3A2C" />
      <circle cx="44" cy="-52" r="2.5" fill="#F5D77F" />
      {/* Ear */}
      <ellipse cx="22" cy="-28" rx="7" ry="3.5" transform="rotate(-25 22 -28)" fill="#F2D5C4" stroke="#A6906A" strokeWidth="1" />
      {/* Gentle Eye & Tilak */}
      <circle cx="40" cy="-28" r="1.8" fill="#1F2937" />
      <circle cx="36" cy="-32" r="2.2" fill="#E11D48" />
      {/* Muzzle */}
      <ellipse cx="50" cy="-20" rx="4.5" ry="3.5" fill="#F2C6B6" stroke="#A6906A" strokeWidth="0.8" />
    </g>
  );
};

export const RoyalIndianPeacock: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
}> = ({ cx, cy, scale = 1 }) => (
  <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
    {/* Lush Sweeping Emerald & Gold Train Feathers (மயில் தோகை) */}
    <path
      d="M8 10 C38 8, 76 22, 108 52 C74 56, 36 42, 2 22 Z"
      fill="#145A3E"
      stroke="#0D3D29"
      strokeWidth="1"
    />
    <path
      d="M12 6 C46 -2, 86 10, 118 38 C86 44, 48 32, 6 18 Z"
      fill="#1E7A52"
    />
    {/* Peacock Feather Eye Spots (மயில் கண்) */}
    {[
      { x: 42, y: 18 },
      { x: 64, y: 24 },
      { x: 86, y: 34 },
      { x: 54, y: 32 },
      { x: 76, y: 42 },
      { x: 98, y: 46 },
    ].map((pt, i) => (
      <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
        <ellipse cx="0" cy="0" rx="6" ry="4" fill="#D4AF37" />
        <ellipse cx="0" cy="0" rx="3.8" ry="2.5" fill="#1D4ED8" />
        <circle cx="-1" cy="0" r="1.4" fill="#0F172A" />
      </g>
    ))}

    {/* Peacock Body & Wing */}
    <path
      d="M-18 8 C-14 -10, 8 -12, 22 4 C26 16, 8 26, -12 20 Z"
      fill="#1E40AF"
      stroke="#1E3A8A"
      strokeWidth="1"
    />
    <path
      d="M-6 4 C6 0, 18 6, 20 14 C8 18, -4 14, -6 4 Z"
      fill="#0F766E"
      stroke="#5EEAD4"
      strokeWidth="0.8"
    />

    {/* Graceful S-Curved Cobalt Blue Neck & Head */}
    <path
      d="M-12 12 C-22 -4, -18 -26, -24 -40 C-30 -42, -36 -38, -34 -32 C-28 -28, -28 -6, -4 16 Z"
      fill="url(#peacockNeckGrad)"
    />
    {/* Royal Crown Crest (மயில் கொண்டை) */}
    <line x1="-26" y1="-40" x2="-30" y2="-50" stroke="#D4AF37" strokeWidth="1.2" />
    <line x1="-24" y1="-40" x2="-25" y2="-51" stroke="#D4AF37" strokeWidth="1.2" />
    <line x1="-22" y1="-39" x2="-20" y2="-49" stroke="#D4AF37" strokeWidth="1.2" />
    <circle cx="-30" cy="-50" r="2" fill="#1D4ED8" />
    <circle cx="-25" cy="-51" r="2" fill="#1D4ED8" />
    <circle cx="-20" cy="-49" r="2" fill="#1D4ED8" />

    {/* Beak & Eye */}
    <path d="M-34 -36 L-43 -34 L-34 -32 Z" fill="#F59E0B" />
    <circle cx="-29" cy="-36" r="1.5" fill="#FFF" />
    <circle cx="-29" cy="-36" r="0.8" fill="#000" />
  </g>
);

const WATERCOLOR_HUMMINGBIRD_SRC =
  '/assets/aistudio/Watercolor_Hummingbird_Artwork___Colorful_Nature_Design_fee3ff3f.jpg';

interface HummingbirdSprites {
  bodyUrl: string;
  wingUrl: string;
}

let cachedHummingbirdSprites: HummingbirdSprites | null = null;
let pendingHummingbirdPromise: Promise<HummingbirdSprites> | null = null;

function loadTransparentHummingbirdSprites(): Promise<HummingbirdSprites> {
  if (cachedHummingbirdSprites) {
    return Promise.resolve(cachedHummingbirdSprites);
  }
  if (pendingHummingbirdPromise) {
    return pendingHummingbirdPromise;
  }

  pendingHummingbirdPromise = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const w = img.naturalWidth || 736;
        const h = img.naturalHeight || 1104;

        const srcCanvas = document.createElement('canvas');
        srcCanvas.width = w;
        srcCanvas.height = h;
        const srcCtx = srcCanvas.getContext('2d');

        const bodyCanvas = document.createElement('canvas');
        bodyCanvas.width = w;
        bodyCanvas.height = h;
        const bodyCtx = bodyCanvas.getContext('2d');

        const wingCanvas = document.createElement('canvas');
        wingCanvas.width = w;
        wingCanvas.height = h;
        const wingCtx = wingCanvas.getContext('2d');

        if (!srcCtx || !bodyCtx || !wingCtx) {
          const fallback = {
            bodyUrl: WATERCOLOR_HUMMINGBIRD_SRC,
            wingUrl: WATERCOLOR_HUMMINGBIRD_SRC,
          };
          cachedHummingbirdSprites = fallback;
          resolve(fallback);
          return;
        }

        srcCtx.drawImage(img, 0, 0, w, h);
        const srcData = srcCtx.getImageData(0, 0, w, h);
        const bodyData = bodyCtx.createImageData(w, h);
        const wingData = wingCtx.createImageData(w, h);

        const data = srcData.data;
        const bOut = bodyData.data;
        const wOut = wingData.data;

        for (let y = 0; y < h; y++) {
          const ny = y / h;
          for (let x = 0; x < w; x++) {
            const nx = x / w;
            const i = (y * w + x) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const sat = maxC - minC;
            const luma = r * 0.299 + g * 0.587 + b * 0.114;
            const darkness = 255 - luma;
            const signal = Math.max(darkness, sat * 1.45);

            // Key out the pure white paper background with smooth watercolor edge feathering
            if (signal <= 10) {
              continue;
            }

            const alpha =
              signal >= 36
                ? 255
                : Math.min(255, Math.round(((signal - 10) / 26) * 255));

            // Remove white paper matte from semi-transparent edge pixels
            const dewhite = alpha < 255 ? Math.max(0.75, alpha / 255) : 1;
            const outR = Math.max(0, Math.min(255, Math.round(r * dewhite)));
            const outG = Math.max(0, Math.min(255, Math.round(g * dewhite)));
            const outB = Math.max(0, Math.min(255, Math.round(b * dewhite)));

            // Anatomical boundary between the outstretched upper-left blue wings and the head/body/tail
            const shoulderBoundaryX = 0.49 - (ny - 0.34) * 0.38;
            const isWingRegion = ny < 0.54 && nx < shoulderBoundaryX;
            // Small overlap at the shoulder joint (nx: 0.38..0.49, ny: 0.35..0.50) so rotation never leaves a seam
            const isShoulderOverlap =
              ny >= 0.35 &&
              ny <= 0.51 &&
              nx >= shoulderBoundaryX - 0.06 &&
              nx <= shoulderBoundaryX + 0.04;

            if (isWingRegion || isShoulderOverlap) {
              wOut[i] = outR;
              wOut[i + 1] = outG;
              wOut[i + 2] = outB;
              wOut[i + 3] = alpha;
            }

            if (!isWingRegion || isShoulderOverlap) {
              bOut[i] = outR;
              bOut[i + 1] = outG;
              bOut[i + 2] = outB;
              bOut[i + 3] = alpha;
            }
          }
        }

        bodyCtx.putImageData(bodyData, 0, 0);
        wingCtx.putImageData(wingData, 0, 0);

        const result = {
          bodyUrl: bodyCanvas.toDataURL('image/png'),
          wingUrl: wingCanvas.toDataURL('image/png'),
        };
        cachedHummingbirdSprites = result;
        resolve(result);
      } catch {
        const fallback = {
          bodyUrl: WATERCOLOR_HUMMINGBIRD_SRC,
          wingUrl: WATERCOLOR_HUMMINGBIRD_SRC,
        };
        cachedHummingbirdSprites = fallback;
        resolve(fallback);
      }
    };
    img.onerror = () => {
      const fallback = {
        bodyUrl: WATERCOLOR_HUMMINGBIRD_SRC,
        wingUrl: WATERCOLOR_HUMMINGBIRD_SRC,
      };
      cachedHummingbirdSprites = fallback;
      resolve(fallback);
    };
    img.src = WATERCOLOR_HUMMINGBIRD_SRC;
  });

  return pendingHummingbirdPromise;
}

export const IridescentHummingbird: React.FC<{
  className?: string;
  facing?: 'left' | 'right';
}> = ({ className = '', facing = 'right' }) => {
  const [sprites, setSprites] = React.useState<HummingbirdSprites | null>(
    cachedHummingbirdSprites
  );

  React.useEffect(() => {
    let mounted = true;
    loadTransparentHummingbirdSprites().then((res) => {
      if (mounted) {
        setSprites(res);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const bodySrc = sprites?.bodyUrl || WATERCOLOR_HUMMINGBIRD_SRC;
  const wingSrc = sprites?.wingUrl || WATERCOLOR_HUMMINGBIRD_SRC;

  return (
    <div
      className={`pointer-events-none select-none ${
        facing === 'left' ? 'animate-bird-right' : 'animate-bird-left'
      } ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative h-[68px] w-12 sm:h-24 sm:w-[68px] ${
          facing === 'left' ? '-scale-x-100' : ''
        }`}
      >
        {/* Layer 1: Secondary Counter-Phase Translucent Wing Blur (Simulates rapid hummingbird wing beat) */}
        <img
          src={wingSrc}
          alt=""
          draggable={false}
          className="animate-wing-echo absolute inset-0 h-full w-full object-contain drop-shadow-xs"
        />

        {/* Layer 2: Hummingbird Body, Head, Beak, Ruby-Gold Breast, Claws & Tail Feathers */}
        <img
          src={bodySrc}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain drop-shadow-xs"
        />

        {/* Layer 3: Primary Articulated Flapping Watercolor Wings (Pivoting from shoulder joint at 45% 41%) */}
        <img
          src={wingSrc}
          alt=""
          draggable={false}
          className="animate-wing absolute inset-0 h-full w-full object-contain drop-shadow-xs"
        />
      </div>
    </div>
  );
};

export const PichwaiDetailedRoseBloom: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
  rotate?: number;
}> = ({ cx, cy, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${cx}, ${cy}) rotate(${rotate}) scale(${scale})`}>
    {/* Back Serrated Rose Leaves */}
    <path
      d="M-4 2 C-16 -6, -24 -2, -26 6 C-18 12, -10 10, -4 2 Z"
      fill="#355E34"
      stroke="#1F3B1E"
      strokeWidth="0.6"
    />
    <path
      d="M-5 2 L-21 5"
      stroke="#78A36D"
      strokeWidth="0.7"
      strokeLinecap="round"
    />
    <path
      d="M4 -2 C16 -10, 24 -6, 26 2 C18 8, 10 6, 4 -2 Z"
      fill="#477542"
      stroke="#1F3B1E"
      strokeWidth="0.6"
    />
    <path
      d="M5 -2 L21 1"
      stroke="#8AB57E"
      strokeWidth="0.7"
      strokeLinecap="round"
    />

    {/* Outer Ruffled Blush-Pink Petals (8 scalloped petals) */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <path
        key={deg}
        transform={`rotate(${deg})`}
        d="M0 0 C-6 -10, -9 -16, 0 -18 C9 -16, 6 -10, 0 0 Z"
        fill="url(#pichwaiRoseOuterGrad)"
        stroke="#B5385A"
        strokeWidth="0.55"
      />
    ))}

    {/* Mid-Layer Rich Coral-Rose Cupped Petals */}
    {[22, 82, 142, 202, 262, 322].map((deg) => (
      <path
        key={deg}
        transform={`rotate(${deg})`}
        d="M0 0 C-5 -7, -7 -12, 0 -13.5 C7 -12, 5 -7, 0 0 Z"
        fill="url(#pichwaiRoseMidGrad)"
        stroke="#9E2446"
        strokeWidth="0.5"
      />
    ))}

    {/* Inner Swirled Crimson-Rose Core Petals */}
    {[0, 72, 144, 216, 288].map((deg) => (
      <path
        key={deg}
        transform={`rotate(${deg})`}
        d="M0 0 C-3.5 -4.5, -4.5 -8, 0 -9 C4.5 -8, 3.5 -4.5, 0 0 Z"
        fill="#C92A52"
        stroke="#FAD1DF"
        strokeWidth="0.45"
      />
    ))}

    {/* Golden Stamens Center */}
    <circle cx="0" cy="0" r="3" fill="#8C1838" />
    <circle cx="0" cy="0" r="1.6" fill="#F6C85F" />
    <circle cx="-1.5" cy="-1" r="0.6" fill="#FFF3C4" />
    <circle cx="1.5" cy="-1" r="0.6" fill="#FFF3C4" />
    <circle cx="0" cy="1.6" r="0.6" fill="#FFF3C4" />
  </g>
);

export const PichwaiRoseBud: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
  rotate?: number;
}> = ({ cx, cy, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${cx}, ${cy}) rotate(${rotate}) scale(${scale})`}>
    <path d="M0 10 L0 2" stroke="#5A6E3A" strokeWidth="1.4" />
    <path
      d="M0 2 C-5 -2, -5 -9, 0 -13 C5 -9, 5 -2, 0 2 Z"
      fill="url(#pichwaiRoseMidGrad)"
      stroke="#A3294C"
      strokeWidth="0.6"
    />
    <path
      d="M0 3 C-5 1, -6 -4, -3 -7 C-2 -2, -1 1, 0 3 Z"
      fill="#385E34"
    />
    <path
      d="M0 3 C5 1, 6 -4, 3 -7 C2 -2, 1 1, 0 3 Z"
      fill="#4A7542"
    />
  </g>
);

/**
 * Authentic Pichwai Kadamba / Mango Tree Leaf Rosette Cluster
 * Replaces flat circles with radiating pointed botanical leaves with veins
 */
export const PichwaiKadambaFoliageCluster: React.FC<{
  cx: number;
  cy: number;
  scale?: number;
  variant?: 'dark' | 'mid' | 'light';
}> = ({ cx, cy, scale = 1, variant = 'mid' }) => {
  const leafFill =
    variant === 'dark'
      ? '#1B3620'
      : variant === 'light'
      ? '#496E3E'
      : '#2E522E';
  const tipFill =
    variant === 'dark'
      ? '#2A4D2E'
      : variant === 'light'
      ? '#7BA067'
      : '#557D4C';
  const strokeColor =
    variant === 'dark'
      ? '#355938'
      : variant === 'light'
      ? '#A3C48B'
      : '#749966';

  const angles = [-75, -50, -25, 0, 25, 50, 75, 105, 135, 165, -155, -115];

  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      {/* Deep shadow cushion behind leaves */}
      <circle cx="0" cy="0" r="18" fill="#132616" opacity="0.85" />
      {angles.map((ang, i) => (
        <g key={i} transform={`rotate(${ang})`}>
          {/* Pointed Lanceolate Mango/Kadamba Leaf */}
          <path
            d="M0 -2 C-5.5 -9, -5 -20, 0 -27 C5 -20, 5.5 -9, 0 -2 Z"
            fill={i % 2 === 0 ? leafFill : tipFill}
            stroke={strokeColor}
            strokeWidth="0.65"
          />
          {/* Central Golden-Sage Leaf Midrib Vein */}
          <path
            d="M0 -4 L0 -23"
            stroke={strokeColor}
            strokeWidth="0.55"
            opacity="0.8"
          />
        </g>
      ))}
      {/* Inner rosette whorl of smaller young leaves */}
      {[-60, -20, 20, 60, 110, 160, -130].map((ang, i) => (
        <g key={`in-${i}`} transform={`rotate(${ang}) scale(0.62)`}>
          <path
            d="M0 -2 C-5.5 -9, -5 -20, 0 -26 C5 -20, 5.5 -9, 0 -2 Z"
            fill={tipFill}
            stroke="#B4D19C"
            strokeWidth="0.6"
          />
          <path d="M0 -4 L0 -21" stroke="#C5DEB0" strokeWidth="0.5" />
        </g>
      ))}
      {/* Subtle Kadamba golden pollen bud center */}
      <circle cx="0" cy="0" r="3.2" fill="#3B5E36" stroke="#8FB379" strokeWidth="0.7" />
    </g>
  );
};

/**
 * Architectural Full-Span Multi-Cusped Temple Arch & Pietra Dura Corner Spandrels
 * (Directly modeled on 00:00 - 00:28 of the Pinterest reference video & pin-poster.jpg)
 * Spans continuously from the left pillar to a central ogee peak and down to the right pillar,
 * with realistic inlaid Pietra Dura floral arabesque scrollwork in both upper corners.
 */
const PietraDuraCornerArabesque: React.FC = () => (
  <g>
    {/* Main Flowing Celadon-Sage Acanthus Stem Scroll from Corner Medallion */}
    <path
      d="M16 16 C48 14, 88 16, 138 14 C168 12, 198 8, 224 6"
      stroke="#8FA38A"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 16 C14 48, 16 84, 14 128 C12 152, 8 172, 6 190"
      stroke="#8FA38A"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 22 C44 44, 62 56, 88 52 C112 48, 126 30, 146 22"
      stroke="#8FA38A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 22 C44 44, 56 62, 52 88 C48 110, 30 124, 22 142"
      stroke="#8FA38A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Realistic Multi-Petal Pietra Dura Blush-Terracotta Corner Peony / Lotus Medallion */}
    <g transform="translate(36, 36) rotate(-45)">
      {/* Soft Halo Leaf Cushion */}
      <path
        d="M-22 4 C-18 -14, -8 -24, 0 -28 C8 -24, 18 -14, 22 4 C10 12, -10 12, -22 4 Z"
        fill="#A6B89E"
        fillOpacity="0.45"
      />
      {/* Outer Blush-Terracotta Petals */}
      {[-52, -26, 0, 26, 52].map((ang, i) => (
        <path
          key={i}
          transform={`rotate(${ang})`}
          d="M0 6 C-6 -4, -7 -16, 0 -22 C7 -16, 6 -4, 0 6 Z"
          fill="#E5A88B"
          fillOpacity="0.78"
          stroke="#B5795A"
          strokeWidth="0.7"
        />
      ))}
      {/* Inner Warm Coral-Terracotta Cupped Petals */}
      {[-32, 0, 32].map((ang, i) => (
        <path
          key={i}
          transform={`rotate(${ang})`}
          d="M0 6 C-4.5 -2, -5 -11, 0 -16 C5 -11, 4.5 -2, 0 6 Z"
          fill="#D98666"
          fillOpacity="0.85"
          stroke="#9E5E42"
          strokeWidth="0.6"
        />
      ))}
      {/* Golden-Terracotta Stamen Polka Dots */}
      <circle cx="-5" cy="-19" r="2.2" fill="#D4886A" />
      <circle cx="0" cy="-21" r="2.4" fill="#D4886A" />
      <circle cx="5" cy="-19" r="2.2" fill="#D4886A" />
      <circle cx="0" cy="2" r="3.5" fill="#C59B27" fillOpacity="0.75" />
    </g>

    {/* Secondary Terracotta-Rose Florets & Buds Along Upper Lintel Scroll */}
    <g transform="translate(106, 24) rotate(-18)">
      <path
        d="M0 6 C-6 -2, -7 -10, 0 -14 C7 -10, 6 -2, 0 6 Z"
        fill="#E5A88B"
        fillOpacity="0.8"
        stroke="#B5795A"
        strokeWidth="0.6"
      />
      <path
        d="M0 6 C-10 2, -12 -6, -6 -10 C-2 -6, -1 0, 0 6 Z"
        fill="#E8B59B"
        fillOpacity="0.75"
      />
      <path
        d="M0 6 C10 2, 12 -6, 6 -10 C2 -6, 1 0, 0 6 Z"
        fill="#E8B59B"
        fillOpacity="0.75"
      />
    </g>
    <g transform="translate(166, 16) rotate(12)">
      <path
        d="M0 5 C-4 -1, -5 -7, 0 -10 C5 -7, 4 -1, 0 5 Z"
        fill="#E5A88B"
        fillOpacity="0.75"
      />
    </g>

    {/* Secondary Terracotta-Rose Floret Along Vertical Pillar Scroll */}
    <g transform="translate(24, 102) rotate(-72)">
      <path
        d="M0 6 C-6 -2, -7 -10, 0 -14 C7 -10, 6 -2, 0 6 Z"
        fill="#E5A88B"
        fillOpacity="0.8"
        stroke="#B5795A"
        strokeWidth="0.6"
      />
      <path
        d="M0 6 C-10 2, -12 -6, -6 -10 C-2 -6, -1 0, 0 6 Z"
        fill="#E8B59B"
        fillOpacity="0.75"
      />
      <path
        d="M0 6 C10 2, 12 -6, 6 -10 C2 -6, 1 0, 0 6 Z"
        fill="#E8B59B"
        fillOpacity="0.75"
      />
    </g>

    {/* Celadon-Sage Acanthus Leaves Along Horizontal & Diagonal Scrollwork */}
    {[
      { x: 68, y: 16, r: -15, s: 1 },
      { x: 84, y: 34, r: 25, s: 0.95 },
      { x: 132, y: 18, r: -12, s: 0.9 },
      { x: 152, y: 24, r: 20, s: 0.82 },
      { x: 192, y: 12, r: -10, s: 0.75 },
      { x: 16, y: 68, r: 105, s: 1 },
      { x: 34, y: 82, r: 65, s: 0.95 },
      { x: 18, y: 126, r: 100, s: 0.88 },
      { x: 22, y: 152, r: 70, s: 0.78 },
      { x: 64, y: 56, r: 45, s: 0.9 },
    ].map((lf, i) => (
      <g
        key={i}
        transform={`translate(${lf.x}, ${lf.y}) rotate(${lf.r}) scale(${lf.s})`}
      >
        <path
          d="M0 0 C6 -8, 18 -8, 24 -2 C16 4, 6 4, 0 0 Z"
          fill="#8FA38A"
          fillOpacity="0.78"
        />
        <path
          d="M2 -1 L18 -2"
          stroke="#FDF6E2"
          strokeWidth="0.6"
          opacity="0.7"
        />
      </g>
    ))}
  </g>
);

export const RoyalScallopedArchSpandrel: React.FC<{
  side?: 'left' | 'right' | 'full';
  className?: string;
}> = ({ side = 'full', className = '' }) => {
  if (side === 'right') {
    // When rendered as a pair, only 'left' or 'full' needs to draw the full-span arch
    return null;
  }

  return (
    <svg
      viewBox="0 0 740 210"
      preserveAspectRatio="none"
      className={`pointer-events-none inset-x-0 w-full select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fullArchStoneGrad" x1="370" y1="0" x2="370" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDF6E2" />
          <stop offset="55%" stopColor="#F6E8C6" />
          <stop offset="100%" stopColor="#E9D39E" />
        </linearGradient>
        <linearGradient id="fullArchGoldRim" x1="0" y1="0" x2="740" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9A721C" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B8891E" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A721C" />
        </linearGradient>
      </defs>

      {/* Continuous Full-Span Multi-Cusped Scalloped Temple Arch Spandrel
          Curves smoothly from left pillar (0,205) up through 5 lotus cusps to center ogee peak (370,8)
          and symmetrically down 5 lotus cusps to right pillar (740,205) — zero vertical cutoffs! */}
      <path
        d="M0 0 L740 0 L740 205
           C734 172, 722 148, 706 138
           C696 106, 672 84, 646 78
           C626 52, 592 36, 558 36
           C532 18, 494 12, 458 18
           C428 6, 392 6, 370 18
           C348 6, 312 6, 282 18
           C246 12, 208 18, 182 36
           C148 36, 114 52, 94 78
           C68 84, 44 106, 34 138
           C18 148, 6 172, 0 205 Z"
        fill="url(#fullArchStoneGrad)"
        stroke="url(#fullArchGoldRim)"
        strokeWidth="2.2"
      />

      {/* Inner Parallel Gold Filigree Scalloped Arch Molding */}
      <path
        d="M6 5 L734 5 L734 182
           C727 156, 716 138, 701 130
           C690 100, 667 79, 641 73
           C621 47, 588 31, 554 31
           C528 13, 491 8, 455 14
           C426 3, 391 3, 370 14
           C349 3, 314 3, 285 14
           C249 8, 212 13, 186 31
           C152 31, 119 47, 99 73
           C73 79, 50 100, 39 130
           C24 138, 13 156, 6 182 Z"
        stroke="#C59B27"
        strokeWidth="1"
        strokeDasharray="4 2"
        opacity="0.85"
      />

      {/* Left Spandrel Pietra Dura Inlaid Floral Arabesque */}
      <PietraDuraCornerArabesque />

      {/* Right Spandrel Pietra Dura Inlaid Floral Arabesque (Mirrored) */}
      <g transform="translate(740, 0) scale(-1, 1)">
        <PietraDuraCornerArabesque />
      </g>

      {/* Ornate Golden Lotus Drop Finials at Each Scalloped Cusp Tip */}
      {[
        { x: 34, y: 138 },
        { x: 94, y: 78 },
        { x: 182, y: 36 },
        { x: 282, y: 18 },
        { x: 370, y: 18 },
        { x: 458, y: 18 },
        { x: 558, y: 36 },
        { x: 646, y: 78 },
        { x: 706, y: 138 },
      ].map((pt, idx) => (
        <g key={idx} transform={`translate(${pt.x}, ${pt.y})`}>
          <circle cx="0" cy="0" r="3.2" fill="#D4AF37" stroke="#7A520B" strokeWidth="0.9" />
          <circle cx="0" cy="4.2" r="1.6" fill="#B8891E" />
        </g>
      ))}
    </svg>
  );
};

export const ClimbingRoseVinesSide: React.FC<{
  side: 'left' | 'right';
  className?: string;
}> = ({ side, className = '' }) => (
  <svg
    viewBox="0 0 95 520"
    className={`pointer-events-none select-none ${
      side === 'right' ? '-scale-x-100' : ''
    } ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Woody Botanical Vine Branches Hugging the Outer Pillar Edge */}
    <path
      d="M2 495 C14 430, 8 360, 18 290 C26 225, 10 155, 22 85 C28 45, 42 18, 56 0"
      stroke="#6E5536"
      strokeWidth="2.6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12 395 Q32 370 38 342 M18 280 Q38 252 44 222 M16 175 Q36 148 42 118 M24 80 Q44 58 52 34"
      stroke="#5C6E3B"
      strokeWidth="1.7"
      strokeLinecap="round"
      fill="none"
    />

    {/* Compound Serrated Rose Leaves Along the Pillar */}
    {[
      { x: 14, y: 440, r: -25, s: 0.85 },
      { x: 26, y: 365, r: 22, s: 0.9 },
      { x: 14, y: 310, r: -18, s: 0.85 },
      { x: 30, y: 248, r: 28, s: 0.95 },
      { x: 16, y: 195, r: -24, s: 0.85 },
      { x: 28, y: 142, r: 20, s: 0.9 },
      { x: 20, y: 92, r: -22, s: 0.9 },
      { x: 36, y: 52, r: 18, s: 0.95 },
    ].map((lf, idx) => (
      <g
        key={idx}
        transform={`translate(${lf.x}, ${lf.y}) rotate(${lf.r}) scale(${lf.s})`}
      >
        <path
          d="M0 0 C-8 -5, -16 -2, -20 5 C-11 10, -4 7, 0 0 Z"
          fill="#355E34"
          stroke="#1F3B1E"
          strokeWidth="0.6"
        />
        <path d="M-2 1 L-15 4" stroke="#8AB57E" strokeWidth="0.6" />
        <path
          d="M0 0 C8 -7, 17 -3, 21 4 C12 9, 5 7, 0 0 Z"
          fill="#4E7C46"
          stroke="#1F3B1E"
          strokeWidth="0.6"
        />
        <path d="M2 1 L16 3" stroke="#9EC491" strokeWidth="0.6" />
      </g>
    ))}

    {/* Unopened Rose Buds */}
    <PichwaiRoseBud cx={38} cy={338} scale={0.85} rotate={24} />
    <PichwaiRoseBud cx={44} cy={218} scale={0.85} rotate={18} />
    <PichwaiRoseBud cx={42} cy={114} scale={0.9} rotate={22} />

    {/* Realistic Ruffled Multi-Petal Pink Garden Roses */}
    <PichwaiDetailedRoseBloom cx={22} cy={410} scale={0.78} rotate={-15} />
    <PichwaiDetailedRoseBloom cx={26} cy={285} scale={0.85} rotate={12} />
    <PichwaiDetailedRoseBloom cx={24} cy={168} scale={0.82} rotate={-20} />
    <PichwaiDetailedRoseBloom cx={32} cy={72} scale={0.92} rotate={15} />
    <PichwaiDetailedRoseBloom cx={48} cy={26} scale={0.95} rotate={-10} />
  </svg>
);

export const SwayingGoldenTempleBellsRow: React.FC<{
  topClassName?: string;
}> = ({ topClassName = 'top-0' }) => {
  const bells = [
    { left: '13%', height: 74, cls: 'animate-thoranam' },
    { left: '26%', height: 56, cls: 'animate-thoranam-alt' },
    { left: '39%', height: 40, cls: 'animate-thoranam' },
    { left: '61%', height: 40, cls: 'animate-thoranam-alt' },
    { left: '74%', height: 56, cls: 'animate-thoranam' },
    { left: '87%', height: 74, cls: 'animate-thoranam-alt' },
  ];

  return (
    <div
      className={`pointer-events-none absolute right-0 left-0 z-10 h-32 overflow-hidden select-none ${topClassName}`}
      aria-hidden="true"
    >
      {bells.map((b, i) => (
        <div
          key={i}
          style={{ left: b.left }}
          className={`absolute top-0 -translate-x-1/2 ${b.cls}`}
        >
          <svg
            width="28"
            height={b.height + 34}
            viewBox={`0 0 28 ${b.height + 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Beaded Golden Chain */}
            <line
              x1="14"
              y1="0"
              x2="14"
              y2={b.height}
              stroke="#B8891E"
              strokeWidth="1.6"
              strokeDasharray="3 3"
            />
            {Array.from({ length: Math.floor(b.height / 14) }).map((_, idx) => (
              <circle
                key={idx}
                cx="14"
                cy={idx * 14 + 8}
                r="2.4"
                fill="#E5C158"
                stroke="#8F6814"
                strokeWidth="0.6"
              />
            ))}
            {/* Ornate Brass Temple Bell (கோயில் மணி) */}
            <g transform={`translate(0, ${b.height})`}>
              <circle cx="14" cy="3" r="3" fill="#B8891E" />
              <path
                d="M8 6 C8 3, 20 3, 20 6 L24 22 C25 25, 26 26, 26 27 L2 27 C2 26, 3 25, 4 22 Z"
                fill="url(#templeBellBrassGrad)"
                stroke="#7A520B"
                strokeWidth="1"
              />
              <line x1="6" y1="18" x2="22" y2="18" stroke="#FFF3B8" strokeWidth="1" />
              <line x1="4" y1="23" x2="24" y2="23" stroke="#7A520B" strokeWidth="1" />
              {/* Bell Clapper */}
              <circle cx="14" cy="29" r="2.8" fill="#9A6B13" />
            </g>
            <defs>
              <linearGradient id="templeBellBrassGrad" x1="2" y1="6" x2="26" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF0A8" />
                <stop offset="45%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8A5A10" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

export const GrandRibbedTempleDomeHeader: React.FC = () => (
  <div className="pointer-events-none relative mx-auto w-full select-none" aria-hidden="true">
    <svg
      viewBox="0 0 800 176"
      className="block h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ribbedDomeGoldGrad" x1="160" y1="0" x2="640" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D8BC7D" />
          <stop offset="28%" stopColor="#FBF3DC" />
          <stop offset="52%" stopColor="#DFC686" />
          <stop offset="78%" stopColor="#F5E7C4" />
          <stop offset="100%" stopColor="#B89448" />
        </linearGradient>
        <linearGradient id="friezeBandGrad" x1="40" y1="0" x2="760" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A85C" />
          <stop offset="25%" stopColor="#F7EBD0" />
          <stop offset="50%" stopColor="#FFF8E6" />
          <stop offset="75%" stopColor="#F7EBD0" />
          <stop offset="100%" stopColor="#C9A85C" />
        </linearGradient>
        <linearGradient id="templeGroveBgGrad" x1="400" y1="0" x2="400" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F2113" />
          <stop offset="65%" stopColor="#1E3B22" />
          <stop offset="100%" stopColor="#2E5230" />
        </linearGradient>
        <clipPath id="headerTopClip">
          <rect x="0" y="0" width="800" height="176" />
        </clipPath>
      </defs>

      <g clipPath="url(#headerTopClip)">
        {/* 1. Deep Emerald Pichwai Forest Grove Canopy Backdrop in Left & Right Corners */}
        <path
          d="M0 0 L800 0 L800 122 Q695 102 615 108 L185 108 Q105 102 0 122 Z"
          fill="url(#templeGroveBgGrad)"
        />

        {/* 2. Authentic Multi-Layered Pichwai Kadamba & Mango Leaf Canopies in Top Corners
               (Replaces the weird grid of flat circles with realistic radiating botanical leaf rosettes!) */}
        {/* Left Corner Canopy — Deep Tier */}
        <PichwaiKadambaFoliageCluster cx={22} cy={14} scale={1.15} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={68} cy={12} scale={1.2} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={118} cy={14} scale={1.15} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={166} cy={18} scale={1.1} variant="dark" />
        {/* Left Corner Canopy — Mid Olive-Emerald Tier */}
        <PichwaiKadambaFoliageCluster cx={18} cy={46} scale={1.12} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={62} cy={42} scale={1.18} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={108} cy={44} scale={1.15} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={152} cy={48} scale={1.08} variant="mid" />
        {/* Left Corner Canopy — Lower Highlight Celadon-Sage Tier */}
        <PichwaiKadambaFoliageCluster cx={24} cy={78} scale={1.05} variant="light" />
        <PichwaiKadambaFoliageCluster cx={66} cy={74} scale={1.1} variant="light" />
        <PichwaiKadambaFoliageCluster cx={112} cy={74} scale={1.05} variant="light" />
        <PichwaiKadambaFoliageCluster cx={154} cy={76} scale={0.98} variant="light" />

        {/* Right Corner Canopy — Deep Tier */}
        <PichwaiKadambaFoliageCluster cx={778} cy={14} scale={1.15} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={732} cy={12} scale={1.2} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={682} cy={14} scale={1.15} variant="dark" />
        <PichwaiKadambaFoliageCluster cx={634} cy={18} scale={1.1} variant="dark" />
        {/* Right Corner Canopy — Mid Olive-Emerald Tier */}
        <PichwaiKadambaFoliageCluster cx={782} cy={46} scale={1.12} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={738} cy={42} scale={1.18} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={692} cy={44} scale={1.15} variant="mid" />
        <PichwaiKadambaFoliageCluster cx={648} cy={48} scale={1.08} variant="mid" />
        {/* Right Corner Canopy — Lower Highlight Celadon-Sage Tier */}
        <PichwaiKadambaFoliageCluster cx={776} cy={78} scale={1.05} variant="light" />
        <PichwaiKadambaFoliageCluster cx={734} cy={74} scale={1.1} variant="light" />
        <PichwaiKadambaFoliageCluster cx={688} cy={74} scale={1.05} variant="light" />
        <PichwaiKadambaFoliageCluster cx={646} cy={76} scale={0.98} variant="light" />

        {/* 3. Woody Rose Tree Branches & Cascading Pink Garden Roses in Left & Right Upper Corners
               (Directly matching the upper-left and upper-right corners of pin-poster.jpg!) */}
        {/* Left Upper Corner Rose Branch */}
        <path
          d="M-5 155 C12 122, 24 96, 58 64 M22 112 C48 104, 72 95, 92 86 M14 134 C28 128, 42 126, 56 132"
          stroke="#7A5C3E"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <PichwaiDetailedRoseBloom cx={58} cy={56} scale={0.95} rotate={-15} />
        <PichwaiDetailedRoseBloom cx={26} cy={88} scale={1.08} rotate={12} />
        <PichwaiDetailedRoseBloom cx={72} cy={98} scale={0.92} rotate={-22} />
        <PichwaiDetailedRoseBloom cx={22} cy={126} scale={0.85} rotate={18} />
        <PichwaiRoseBud cx={96} cy={82} scale={0.9} rotate={35} />
        <PichwaiRoseBud cx={48} cy={132} scale={0.85} rotate={-25} />

        {/* Right Upper Corner Rose Branch */}
        <path
          d="M805 155 C788 122, 776 96, 742 64 M778 112 C752 104, 728 95, 708 86 M786 134 C772 128, 758 126, 744 132"
          stroke="#7A5C3E"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        <PichwaiDetailedRoseBloom cx={742} cy={56} scale={0.95} rotate={15} />
        <PichwaiDetailedRoseBloom cx={774} cy={88} scale={1.08} rotate={-12} />
        <PichwaiDetailedRoseBloom cx={728} cy={98} scale={0.92} rotate={22} />
        <PichwaiDetailedRoseBloom cx={778} cy={126} scale={0.85} rotate={-18} />
        <PichwaiRoseBud cx={704} cy={82} scale={0.9} rotate={-35} />
        <PichwaiRoseBud cx={752} cy={132} scale={0.85} rotate={25} />

        {/* 4. Grand Fluted Golden Temple Dome (கோபுரக் கலச குவிமாடம் - 00:00 of Video) */}
        <path
          d="M172 68 C172 12, 265 -8, 400 -8 C535 -8, 628 12, 628 68 Z"
          fill="url(#ribbedDomeGoldGrad)"
          stroke="#8C6D2E"
          strokeWidth="1.6"
        />
        {/* 3D Fluted Rib Channels on the Dome */}
        {[208, 244, 282, 320, 360, 400, 440, 480, 518, 556, 592].map((x, idx) => (
          <g key={idx}>
            <path
              d={`M400 -10 Q${x} 24 ${x} 68`}
              stroke="#9E7C36"
              strokeWidth="1.3"
              fill="none"
            />
            <path
              d={`M400 -10 Q${x + 3} 24 ${x + 3} 68`}
              stroke="#FFF8E7"
              strokeWidth="0.9"
              opacity="0.7"
              fill="none"
            />
          </g>
        ))}

        {/* 5. Tier 1: Overlapping Scalloped Lotus-Petal Band at Base of Dome (पद्म पट्टी) */}
        <rect x="166" y="54" width="468" height="16" rx="3" fill="#F5E6C3" stroke="#8C6D2E" strokeWidth="1.2" />
        {Array.from({ length: 24 }).map((_, idx) => {
          const x = 170 + idx * 19.2;
          return (
            <path
              key={idx}
              d={`M${x} 70 C${x + 2} 55, ${x + 17} 55, ${x + 19.2} 70 Z`}
              fill={idx % 2 === 0 ? '#EFE0B4' : '#DFC682'}
              stroke="#8C6D2E"
              strokeWidth="0.95"
            />
          );
        })}

        {/* 6. Tier 2: Classical Carved S-Scroll Wave Frieze & Inverted Lotus Palmette Molding */}
        <rect x="162" y="70" width="476" height="10" fill="#FBF2DA" stroke="#8C6D2E" strokeWidth="1.1" />
        {Array.from({ length: 28 }).map((_, idx) => {
          const x = 168 + idx * 16.8;
          return (
            <path
              key={idx}
              d={`M${x} 77 C${x + 4} 71, ${x + 10} 71, ${x + 12} 76 C${x + 10} 79, ${x + 6} 78, ${x + 8} 74`}
              stroke="#7A5D24"
              strokeWidth="1"
              fill="none"
            />
          );
        })}

        <rect x="156" y="80" width="488" height="16" fill="#E8D29C" stroke="#8C6D2E" strokeWidth="1.2" />
        {Array.from({ length: 15 }).map((_, idx) => {
          const cx = 178 + idx * 31.6;
          return (
            <g key={idx}>
              <path
                d={`M${cx - 12} 95 Q${cx} 81 ${cx + 12} 95`}
                fill="#FBF2DA"
                stroke="#7A5D24"
                strokeWidth="1"
              />
              <path
                d={`M${cx - 6} 95 L${cx} 85 L${cx + 6} 95 Z`}
                fill="#C59B27"
              />
            </g>
          );
        })}

        {/* 7. Tier 3: Finely Beaded Gold Architrave & Sloped Eave with 9 Golden Lotus-Crown Merlons */}
        <rect x="142" y="96" width="516" height="9" rx="2" fill="#F5E4B8" stroke="#8C6D2E" strokeWidth="1.1" />
        {Array.from({ length: 42 }).map((_, idx) => (
          <circle key={idx} cx={150 + idx * 12.2} cy="100.5" r="1.8" fill="#9A721C" />
        ))}

        {/* Sloped Eave Cornice (Chhajja) */}
        <path
          d="M120 105 L680 105 L725 123 L75 123 Z"
          fill="url(#friezeBandGrad)"
          stroke="#8C6D2E"
          strokeWidth="1.4"
        />
        {/* 9 Ornate 5-Petalled Golden Lotus-Crown Merlons (Exact match to pin-poster.jpg) */}
        {Array.from({ length: 9 }).map((_, idx) => {
          const cx = 168 + idx * 58;
          return (
            <g key={idx} transform={`translate(${cx}, 114)`}>
              <path
                d="M-18 6 C-16 -2, -10 -5, -6 2 L0 -7 L6 2 C10 -5, 16 -2, 18 6 Q0 9 -18 6 Z"
                fill="#C59B27"
                stroke="#5C3F0D"
                strokeWidth="1"
              />
              <path d="M-6 5 L0 -4 L6 5 Z" fill="#F5D77F" />
              <circle cx="0" cy="6" r="1.8" fill="#6E4E14" />
            </g>
          );
        })}

        {/* 8. Tier 4: Double-Row Pietra Dura Floral & Jewel Frieze Cornice */}
        <rect x="102" y="123" width="596" height="19" fill="#FAF0D7" stroke="#9A721C" strokeWidth="1.2" />
        <line x1="102" y1="132.5" x2="698" y2="132.5" stroke="#B8891E" strokeWidth="0.9" />
        {Array.from({ length: 28 }).map((_, idx) => {
          const cx = 114 + idx * 21.2;
          return (
            <g key={idx}>
              {/* Upper floret row */}
              <circle
                cx={cx}
                cy="127.8"
                r="3.2"
                fill={idx % 2 === 0 ? '#D96B52' : '#588254'}
              />
              <circle cx={cx} cy="127.8" r="1.2" fill="#FFF8E7" />
              {/* Lower floret row */}
              <circle
                cx={cx + 5}
                cy="137.2"
                r="3.2"
                fill={idx % 2 === 0 ? '#588254' : '#D96B52'}
              />
              <circle cx={cx + 5} cy="137.2" r="1.2" fill="#FFF8E7" />
            </g>
          );
        })}

        {/* Recessed Shadow Molding */}
        <rect x="96" y="142" width="608" height="7" fill="#B5945B" stroke="#7A5D24" strokeWidth="1" />

        {/* 9. Tier 5: Grand Scalloped Temple Torana Lintel Beam Spanning Across the Pillar Capitals */}
        <path
          d="M52 149 L748 149 L778 168 L22 168 Z"
          fill="url(#friezeBandGrad)"
          stroke="#8C6D2E"
          strokeWidth="1.5"
        />
        {Array.from({ length: 31 }).map((_, idx) => {
          const cx = 48 + idx * 23.4;
          return (
            <g key={idx}>
              <path
                d={`M${cx - 8} 166 Q${cx} 152 ${cx + 8} 166`}
                stroke="#9A721C"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx={cx}
                cy="159.5"
                r="3.6"
                fill={idx % 2 === 0 ? '#E8B89A' : '#A4B89A'}
                stroke="#8C6D2E"
                strokeWidth="0.8"
              />
              <circle cx={cx} cy="159.5" r="1.3" fill="#FFFDF7" />
            </g>
          );
        })}

        {/* 10. Left & Right Carved Pillar Capitals (போதிகை / தூண் தலைப்பு)
                Directly anchoring the vertical temple pillars of the card below! */}
        <g transform="translate(18, 168)">
          <path
            d="M0 0 L84 0 L76 8 L8 8 Z"
            fill="#D4AF37"
            stroke="#7A520B"
            strokeWidth="1.1"
          />
        </g>
        <g transform="translate(698, 168)">
          <path
            d="M0 0 L84 0 L76 8 L8 8 Z"
            fill="#D4AF37"
            stroke="#7A520B"
            strokeWidth="1.1"
          />
        </g>
      </g>
    </svg>
  </div>
);

export const SharedPichwaiSvgDefs: React.FC = () => (
  <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
    <defs>
      <linearGradient id="pichwaiTealPadGrad" x1="0" y1="10" x2="0" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B9B82" />
        <stop offset="100%" stopColor="#0E473B" />
      </linearGradient>
      <linearGradient id="pichwaiLotusOuterGrad" x1="0" y1="-30" x2="0" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E65C85" />
        <stop offset="65%" stopColor="#C83764" />
        <stop offset="100%" stopColor="#941B42" />
      </linearGradient>
      <linearGradient id="pichwaiLotusMidGrad" x1="0" y1="-40" x2="0" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F78FB0" />
        <stop offset="50%" stopColor="#E35482" />
        <stop offset="100%" stopColor="#B02954" />
      </linearGradient>
      <linearGradient id="pichwaiLotusInnerGrad" x1="0" y1="-44" x2="0" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD1DF" />
        <stop offset="55%" stopColor="#EE6E97" />
        <stop offset="100%" stopColor="#C43866" />
      </linearGradient>
      <linearGradient id="pichwaiLotusCenterGrad" x1="0" y1="-48" x2="0" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF5F8" />
        <stop offset="40%" stopColor="#F99BBC" />
        <stop offset="100%" stopColor="#D14372" />
      </linearGradient>
      <linearGradient id="pichwaiRoseOuterGrad" x1="0" y1="-18" x2="0" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FAD2E0" />
        <stop offset="55%" stopColor="#EC799A" />
        <stop offset="100%" stopColor="#C43C64" />
      </linearGradient>
      <linearGradient id="pichwaiRoseMidGrad" x1="0" y1="-14" x2="0" y2="4" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F594B2" />
        <stop offset="60%" stopColor="#DF4A73" />
        <stop offset="100%" stopColor="#A82046" />
      </linearGradient>
      <linearGradient id="peacockNeckGrad" x1="-30" y1="-42" x2="-8" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1D4ED8" />
        <stop offset="60%" stopColor="#1E3A8A" />
        <stop offset="100%" stopColor="#0F766E" />
      </linearGradient>
    </defs>
  </svg>
);
