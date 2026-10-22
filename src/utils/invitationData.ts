export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  daysFormatted: string;
  hoursFormatted: string;
  minutesFormatted: string;
  secondsFormatted: string;
  isCompleted: boolean;
}

export interface RsvpFormInput {
  name: string;
  relationOrCity: string;
  guestsCount: number;
  attendingFeast: boolean;
  blessingMessage: string;
}

export interface RsvpEntry extends RsvpFormInput {
  id: string;
  timestamp: string;
}

export interface RasiBoxData {
  id: string;
  rasiNameTamil: string;
  rasiLordTamil: string;
  gridPosition: { row: number; col: number };
  planetsTamil: string[];
  isLagnam?: boolean;
  isAuspiciousHighlight?: boolean;
  houseNumberFromLagnam: number;
  significanceTitleTamil: string;
  significanceDetailTamil: string;
}

export interface VenueLandmark {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  nameTamil: string;
  subtitleTamil: string;
  distanceTamil: string;
  position: { lat: number; lng: number };
  isMainVenue?: boolean;
}

// Target Muhurtham: 16.11.2026, 04:00 AM IST (+05:30)
export const MUHURTHAM_TARGET_ISO = '2026-11-16T04:00:00+05:30';
export const MUHURTHAM_END_ISO = '2026-11-16T05:30:00+05:30';
export const MUHURTHAM_TARGET_MS = new Date(MUHURTHAM_TARGET_ISO).getTime();

export function padTwoDigits(val: number): string {
  return Math.max(0, Math.floor(val)).toString().padStart(2, '0');
}

export function calculateCountdown(
  nowMs: number,
  targetMs: number = MUHURTHAM_TARGET_MS
): CountdownState {
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      daysFormatted: '00',
      hoursFormatted: '00',
      minutesFormatted: '00',
      secondsFormatted: '00',
      isCompleted: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    daysFormatted: padTwoDigits(days),
    hoursFormatted: padTwoDigits(hours),
    minutesFormatted: padTwoDigits(minutes),
    secondsFormatted: padTwoDigits(seconds),
    isCompleted: false,
  };
}

export function validateRsvpInput(input: RsvpFormInput): {
  valid: boolean;
  errors: Partial<Record<keyof RsvpFormInput, string>>;
} {
  const errors: Partial<Record<keyof RsvpFormInput, string>> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'தயவுசெய்து தங்கள் பெயரை உள்ளிடவும்.';
  }

  if (!input.relationOrCity || input.relationOrCity.trim().length < 2) {
    errors.relationOrCity = 'தயவுசெய்து தங்கள் ஊர் அல்லது உறவுமுறையைக் குறிப்பிடவும்.';
  }

  if (
    !Number.isFinite(input.guestsCount) ||
    input.guestsCount < 1 ||
    input.guestsCount > 25
  ) {
    errors.guestsCount = 'வருகை தரும் நபர்கள் எண்ணிக்கை 1 முதல் 25-க்குள் இருக்க வேண்டும்.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateIcsCalendarContent(): string {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Arul Nirai Illam//Gruhapravesam Invite//TA',
    'BEGIN:VEVENT',
    'UID:arul-nirai-illam-20261116@karumathampatti.in',
    'DTSTAMP:20261022T000000Z',
    'DTSTART:20261115T223000Z',
    'DTEND:20261116T000000Z',
    'SUMMARY:அருள் நிறை இல்லம் - புதுமனை புகுவிழா (Arul Nirai Illam)',
    'DESCRIPTION:பராபவ வருடம் வளர்பிறை ஐப்பசி மாதம் 30 ஆம் நாள் (16.11.2026 திங்கள்) சப்தமி திதியும் திருவோணம் நட்சத்திரம் அமிர்தயோகம் துலாம் லக்னம் கூடிய சுபதினத்தில் அதிகாலை 04.00 மணி முதல் 05.30 மணி வரை புதுமனை புகுவிழா.',
    'LOCATION:அருள் நிறை இல்லம், நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி, தமிழ்நாடு',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

export const INVITATION_CONTENT = {
  blessingLeft: 'ஓம் முருகன் துணை',
  blessingRight: 'ஸ்ரீ வீரமாட்சி அம்மன் துணை',
  mainTitle: 'புதுமனை புகுவிழா அழைப்பிதழ்',
  houseNameTamil: 'அருள் நிறை இல்லம்',
  houseNameEnglish: 'Arul Nirai Illam',
  salutation: 'அன்புடையீர்,',
  panchangamProse:
    'அன்புடையீர், பராபவ வருடம் வளர்பிறை ஐப்பசி மாதம் 30 ஆம் நாள் சப்தமி திதியும் திருவோணம் நட்சத்திரம் அமிர்தயோகம் துலாம் லக்னம் கூடிய சுபதினத்தில் இந்நிகழ்வை எங்களுடன் பகிர்ந்து கொள்ள தங்கள் வருகையை அன்புடன் வேண்டுகிறோம்.',
  poeticInviteLines: [
    'இறைவன் அருளால்',
    'கனவாய் தொடங்கி இல்லமாய் நிறைந்த',
    'எங்கள் புதிய இல்லத்தின்',
    'புதுமனை புகுவிழாவிற்கு',
    'தங்களை அன்புடன் அழைக்கிறோம்.',
  ],
  dateLabel: 'நாள்',
  dateValue: '16.11.2026',
  dayValue: '(திங்கள்)',
  tamilMonthDate: 'ஐப்பசி 30',
  timeLabel: 'நேரம்',
  timeStart: '04.00 மணி முதல்',
  timeEnd: '05.30 மணி வரை',
  venueLabel: 'இடம்',
  venueLines: [
    'நால் ரோடு',
    'காடுவெட்டிபாளையம்',
    'கருமத்தம்பட்டி',
  ],
  footerBlessingLine1: 'தங்கள் வருகையே',
  footerBlessingLine2: 'எங்கள் இல்லத்தின் முதல் மகிழ்ச்சி. ♥',
};

export const PANCHANGAM_HIGHLIGHTS = [
  {
    label: 'தமிழ் வருடம் & மாதம்',
    value: 'பராபவ வருடம் · ஐப்பசி 30',
    detail: 'வளர்பிறை சுப காலம்',
  },
  {
    label: 'திதி',
    value: 'வளர்பிறை சப்தமி திதி',
    detail: 'சகல ஐஸ்வர்ய விருத்தி',
  },
  {
    label: 'நட்சத்திரம்',
    value: 'திருவோணம் நட்சத்திரம்',
    detail: 'ஸ்ரீ மகாவிஷ்ணுவின் திருநட்சத்திரம்',
  },
  {
    label: 'யோகம்',
    value: 'அமிர்தயோகம்',
    detail: 'நிலைத்த மங்களம் & சுபீட்சம்',
  },
  {
    label: 'சுப முகூர்த்த லக்னம்',
    value: 'துலாம் லக்னம்',
    detail: 'சுக்கிர பகவான் ஆட்சி பலம் (04.00 - 05.30 AM)',
  },
  {
    label: 'நாள் & கிழமை',
    value: '16.11.2026 · திங்கட்கிழமை',
    detail: 'சோமவார பிரம்ம முகூர்த்தம்',
  },
];

// South Indian 4x4 Rasi Chart Perimeter Layout
export const SOUTH_INDIAN_RASI_CHART: RasiBoxData[] = [
  {
    id: 'meenam',
    rasiNameTamil: 'மீனம்',
    rasiLordTamil: 'குரு பகவான்',
    gridPosition: { row: 1, col: 1 },
    planetsTamil: ['சனி'],
    houseNumberFromLagnam: 6,
    significanceTitleTamil: 'மீன ராசி — சனி பகவான் நிலை',
    significanceDetailTamil:
      'ஆறாம் இடத்தில் சனி பகவான் சஞ்சரிப்பது புதிய இல்லத்திற்கு எவ்வித திருஷ்டி மற்றும் தடைகளையும் நீக்கி, நீடித்த ஆயுளும் உறுதியான கட்டுமான பலத்தையும் வழங்குகிறது.',
  },
  {
    id: 'mesham',
    rasiNameTamil: 'மேஷம்',
    rasiLordTamil: 'செவ்வாய் பகவான்',
    gridPosition: { row: 1, col: 2 },
    planetsTamil: [],
    houseNumberFromLagnam: 7,
    significanceTitleTamil: 'மேஷ ராசி — களத்திர ஸ்தானம் (7-ம் இடம்)',
    significanceDetailTamil:
      'துலாம் லக்னத்தின் ஏழாம் இடமான மேஷத்தின் மீது சுக்கிரன் மற்றும் சூரியனின் நேர் பார்வை பதிவதால் குடும்ப ஒற்றுமையும், உறவினர்கள் மத்தியில் நன்மதிப்பும் பெருகுகிறது.',
  },
  {
    id: 'rishabam',
    rasiNameTamil: 'ரிஷபம்',
    rasiLordTamil: 'சுக்கிர பகவான்',
    gridPosition: { row: 1, col: 3 },
    planetsTamil: [],
    houseNumberFromLagnam: 8,
    significanceTitleTamil: 'ரிஷப ராசி — ஆயுள் & மாங்கல்ய ஸ்தானம் (8-ம் இடம்)',
    significanceDetailTamil:
      'அதிபதி சுக்கிரன் லக்னத்தில் ஆட்சி பெற்றிருப்பதால் இல்லத்தில் வசிப்போருக்கு தீர்க்காயுளும், தடையற்ற சுப நிகழ்ச்சிகளும் நிலைத்திருக்கும்.',
  },
  {
    id: 'mithunam',
    rasiNameTamil: 'மிதுனம்',
    rasiLordTamil: 'புதன் பகவான்',
    gridPosition: { row: 1, col: 4 },
    planetsTamil: [],
    houseNumberFromLagnam: 9,
    significanceTitleTamil: 'மிதுன ராசி — பாக்கிய ஸ்தானம் (9-ம் இடம்)',
    significanceDetailTamil:
      'ஒன்பதாம் இடமான பாக்கிய ஸ்தானாதிபதி புதன் லக்னத்தில் சுக்கிரனுடன் இணைந்து தர்ம-கர்மாதிபதி யோகத்தை அருள்கிறார்.',
  },
  {
    id: 'kumbam',
    rasiNameTamil: 'கும்பம்',
    rasiLordTamil: 'சனி பகவான்',
    gridPosition: { row: 2, col: 1 },
    planetsTamil: ['ராகு'],
    houseNumberFromLagnam: 5,
    significanceTitleTamil: 'கும்ப ராசி — பூர்வ புண்ணிய ஸ்தானம் (5-ம் இடம்)',
    significanceDetailTamil:
      'ஐந்தாம் இடத்தில் ராகு சஞ்சாரம் குலதெய்வ அருளையும், வம்ச விருத்தியையும், நவீன தொழில் வளர்ச்சியையும் ஊக்குவிக்கிறது.',
  },
  {
    id: 'kadagam',
    rasiNameTamil: 'கடகம்',
    rasiLordTamil: 'சந்திர பகவான்',
    gridPosition: { row: 2, col: 4 },
    planetsTamil: ['குரு (உச்சம்)'],
    isAuspiciousHighlight: true,
    houseNumberFromLagnam: 10,
    significanceTitleTamil: 'கடக ராசி — உச்ச குரு பார்வை யோகம் (10-ம் இடம்)',
    significanceDetailTamil:
      'கடக ராசியில் குரு பகவான் உச்சம் பெற்று (ஹம்ச மகா புருஷ யோகம்) நான்காம் இடமான சுக மற்றும் வாஸ்து ஸ்தானத்தை நேர் பார்வையாகப் பார்ப்பது "குரு பார்வை கோடி நன்மை" என்ற வாக்கிற்கேற்ப அருள் நிறைந்த இல்லமாக மாற்றுகிறது.',
  },
  {
    id: 'makaram',
    rasiNameTamil: 'மகரம்',
    rasiLordTamil: 'சனி பகவான்',
    gridPosition: { row: 3, col: 1 },
    planetsTamil: ['சந்திரன் (திருவோணம்)'],
    isAuspiciousHighlight: true,
    houseNumberFromLagnam: 4,
    significanceTitleTamil: 'மகர ராசி — சுக & கிருஹ ஸ்தானம் (4-ம் இடம்)',
    significanceDetailTamil:
      'புதுமனை புகுவிழாவின் முக்கிய வீடான 4-ம் இடத்தில் (வாஸ்து & சுக ஸ்தானம்) திருவோணம் நட்சத்திரத்தில் வளர்பிறை சந்திரன் அமர்ந்து, உச்ச குருவின் நேர் பார்வையைப் பெறுவது மன நிம்மதி, தாயார் ஆசி மற்றும் வற்றாத செல்வத்தைத் தருகிறது.',
  },
  {
    id: 'simmam',
    rasiNameTamil: 'சிம்மம்',
    rasiLordTamil: 'சூரிய பகவான்',
    gridPosition: { row: 3, col: 4 },
    planetsTamil: ['செவ்வாய்', 'கேது'],
    isAuspiciousHighlight: true,
    houseNumberFromLagnam: 11,
    significanceTitleTamil: 'சிம்ம ராசி — லாப ஸ்தானத்தில் பூமி காரகன் (11-ம் இடம்)',
    significanceDetailTamil:
      'பதினொன்றாம் இடமான லாப ஸ்தானத்தில் பூமி காரகன் செவ்வாய் பகவான் அமர்ந்திருப்பது பூமி யோகத்தையும், தொட்ட காரியங்கள் அனைத்திலும் வெற்றியையும் அளிக்கிறது.',
  },
  {
    id: 'dhanusu',
    rasiNameTamil: 'தனுசு',
    rasiLordTamil: 'குரு பகவான்',
    gridPosition: { row: 4, col: 1 },
    planetsTamil: [],
    houseNumberFromLagnam: 3,
    significanceTitleTamil: 'தனுசு ராசி — தைரிய & முயற்சி ஸ்தானம் (3-ம் இடம்)',
    significanceDetailTamil:
      'மூன்றாம் அதிபதி குரு உச்சம் பெற்றிருப்பதால் இல்லத்தாரின் முயற்சிகள் அனைத்தும் இறைவன் அருளால் கனவாய் தொடங்கி வெற்றியாய் நிறைவேறுகிறது.',
  },
  {
    id: 'viruchigam',
    rasiNameTamil: 'விருச்சிகம்',
    rasiLordTamil: 'செவ்வாய் பகவான்',
    gridPosition: { row: 4, col: 2 },
    planetsTamil: [],
    houseNumberFromLagnam: 2,
    significanceTitleTamil: 'விருச்சிக ராசி — தன & குடும்ப ஸ்தானம் (2-ம் இடம்)',
    significanceDetailTamil:
      'இரண்டாம் இடத்து அதிபதி செவ்வாய் லாப ஸ்தானத்தில் இருப்பதால் தன தானிய விருத்தியும், இனிய குடும்பச் சூழலும் நிலவும்.',
  },
  {
    id: 'thulam',
    rasiNameTamil: 'துலாம்',
    rasiLordTamil: 'சுக்கிர பகவான்',
    gridPosition: { row: 4, col: 3 },
    planetsTamil: ['லக்னம் (ல)', 'சூரியன்', 'சுக்கிரன்', 'புதன்'],
    isLagnam: true,
    isAuspiciousHighlight: true,
    houseNumberFromLagnam: 1,
    significanceTitleTamil: 'துலாம் லக்னம் — மாளவ்ய மகா புருஷ யோகம் (1-ம் இடம்)',
    significanceDetailTamil:
      'ஐப்பசி 30 அதிகாலை 04.00 - 05.30 சுப முகூர்த்தத்தில் துலாம் லக்னத்தில் லக்னாதிபதி சுக்கிரன் ஆட்சி பலத்துடன் புதன் மற்றும் சூரியனுடன் இணைந்து மகாலட்சுமி கடாட்சத்தையும், அழகும் அருளும் நிறைந்த இல்லற வாழ்வையும் வழங்குகிறார்.',
  },
  {
    id: 'kanni',
    rasiNameTamil: 'கன்னி',
    rasiLordTamil: 'புதன் பகவான்',
    gridPosition: { row: 4, col: 4 },
    planetsTamil: [],
    houseNumberFromLagnam: 12,
    significanceTitleTamil: 'கன்னி ராசி — சுப விரய ஸ்தானம் (12-ம் இடம்)',
    significanceDetailTamil:
      'புதுமனை கட்டுமானம் மற்றும் சுப காரியங்களுக்கான முதலீடுகள் பன்மடங்கு சுப பலன்களாக திரும்பும் யோகம்.',
  },
];

export const CEREMONY_SCHEDULE = [
  {
    time: '04.00 AM',
    titleTamil: 'மங்கள இசை, கோ பூஜை & வாஸ்து சாந்தி',
    descriptionTamil:
      'பிரம்ம முகூர்த்த சுப வேளையில் மங்கள நாதஸ்வர இசையுடன் கோமாதா வழிபாடு மற்றும் வாஸ்து புருஷ பூஜை.',
  },
  {
    time: '04.30 AM',
    titleTamil: 'ஸ்ரீ கணபதி ஹோமம், நவக்கிரக & மகாலட்சுமி ஹோமம்',
    descriptionTamil:
      'ஓம் முருகன் மற்றும் ஸ்ரீ வீரமாட்சி அம்மன் அருளுடன் வேத விற்பன்னர்களால் மங்கள ஹோம வழிபாடு.',
  },
  {
    time: '05.00 AM',
    titleTamil: 'துலாம் லக்ன சுப முகூர்த்தத்தில் புதுமனை புகுவிழா & பால் காய்ச்சுதல்',
    descriptionTamil:
      'சப்தமி திதி, திருவோணம் நட்சத்திரம், அமிர்தயோகம் கூடிய சுபதினத்தில் "அருள் நிறை இல்லம்" கிருஹப்பிரவேசம் மற்றும் புதுப்பால் காய்ச்சும் வைபவம்.',
  },
  {
    time: '05.30 AM முதலாய்',
    titleTamil: 'பெரியோர் ஆசீர்வாதம் & மங்கள விருந்து உபசரிப்பு',
    descriptionTamil:
      'உற்றார் உறவினர்கள் மற்றும் நண்பர்கள் வருகை தந்து வாழ்த்துரை வழங்கி, மங்கள சிற்றுண்டி விருந்தில் பங்கேற்றல்.',
  },
];

// Coordinates around Naal Road, Kaduvettipalayam, Karumathampatti, Coimbatore District
export const VENUE_LANDMARKS: VenueLandmark[] = [
  {
    id: 'arul-nirai-illam',
    name: 'Arul Nirai Illam (Ceremony Venue)',
    subtitle: 'Naal Road (Four Roads), Kaduvettipalayam, Karumathampatti',
    distance: 'Housewarming Venue',
    nameTamil: 'அருள் நிறை இல்லம்',
    subtitleTamil: 'நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி',
    distanceTamil: 'விழா இடம்',
    position: { lat: 11.1396, lng: 77.1728 },
    isMainVenue: true,
  },
  {
    id: 'karumathampatti-junction',
    name: 'Karumathampatti Four Roads Junction',
    subtitle: 'National Highway NH-544 (Salem – Kochi Highway)',
    distance: '~3.5 km (7 mins drive)',
    nameTamil: 'கருமத்தம்பட்டி நால் ரோடு',
    subtitleTamil: 'சேலம் – கொச்சி நெடுஞ்சாலை (7 நிமிடம்)',
    distanceTamil: '3.5 கி.மீ',
    position: { lat: 11.1112, lng: 77.1782 },
  },
  {
    id: 'somanur-station',
    name: 'Somanur Railway Station & Bus Stand',
    subtitle: 'Nearest Railhead & Local Transit Hub',
    distance: '~5.2 km (10 mins drive)',
    nameTamil: 'சோமனூர் ரயில் நிலையம்',
    subtitleTamil: 'ரயில் மற்றும் பேருந்து நிலையம் (10 நிமிடம்)',
    distanceTamil: '5.2 கி.மீ',
    position: { lat: 11.0875, lng: 77.1856 },
  },
  {
    id: 'coimbatore-airport',
    name: 'Coimbatore International Airport (CJB)',
    subtitle: 'Via Avinashi Road (NH-544)',
    distance: '~19 km (25 mins drive)',
    nameTamil: 'கோவை விமான நிலையம்',
    subtitleTamil: 'அவிநாசி சாலை வழியாக (25 நிமிடம்)',
    distanceTamil: '19 கி.மீ',
    position: { lat: 11.03, lng: 77.0434 },
  },
];

export const INITIAL_BLESSINGS: RsvpEntry[] = [
  {
    id: 'b-1',
    name: 'திரு. சுப்பிரமணியம் & குடும்பத்தினர்',
    relationOrCity: 'கருமத்தம்பட்டி',
    guestsCount: 4,
    attendingFeast: true,
    blessingMessage:
      'முருகப்பெருமான் மற்றும் ஸ்ரீ வீரமாட்சி அம்மன் அருளால் "அருள் நிறை இல்லம்" சகல செல்வங்களும் நிறைந்து வாழ்க வளமுடன்!',
    timestamp: 'இன்று',
  },
  {
    id: 'b-2',
    name: 'திருமதி. கற்பகம் சிவக்குமார்',
    relationOrCity: 'கோயம்புத்தூர்',
    guestsCount: 3,
    attendingFeast: true,
    blessingMessage:
      'கனவாய் தொடங்கி இல்லமாய் நிறைந்த உங்கள் புதிய இல்லத்தில் என்றும் மகிழ்ச்சியும் மங்களமும் பொங்க மனமார்ந்த வாழ்த்துக்கள்.',
    timestamp: 'இன்று',
  },
];

export type OpeningSequencePhase = 'closed' | 'opening' | 'opened';

export type OpeningSequenceAction =
  | 'TAP_BRASS_RINGS'
  | 'ANIMATION_COMPLETE'
  | 'SKIP'
  | 'REPLAY';

export const OPENING_SESSION_STORAGE_KEY = 'arul_nirai_illam_invite_opened_v1';

export const OPENING_SEQUENCE_CONTENT = {
  blessingHeader: 'ஓம் முருகன் துணை · ஸ்ரீ வீரமாட்சி அம்மன் துணை',
  ceremonyBadge: 'கொங்கு நாட்டு பாரம்பரிய புதுமனை புகுவிழா வரவேற்பு',
  houseTitleTamil: 'அருள் நிறை இல்லம்',
  houseTitleEnglish: 'Arul Nirai Illam',
  locationSubtitle: 'நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி',
  dateSubtitle: '16.11.2026 (ஐப்பசி 30 · திங்கள்) · அதிகாலை 04.00 – 05.30 மணி',
  heritageDescription:
    'பசுமையான தென்னந்தோப்பு, நெல் வயல், வாய்க்கால் நீர், செங்கரும்பு மற்றும் மஞ்சள் கொத்துக்கள் சூழ உதய சூரியனின் பொற்கதிர்களோடு எங்கள் புதிய இல்லத்திற்குத் தங்களை இருகரம் கூப்பி வரவேற்கிறோம்.',
  openDoorCta: 'கதவைத் திறந்து உள்ளே வருக',
  openDoorSubtext: 'பித்தளை வளையத்தைத் தொட்டு இல்லத்திற்குள் அடியெடுத்து வைக்கவும்',
  openingStatusText: 'மங்கள கதவுகள் திறக்கப்படுகின்றன...',
  skipCta: 'நேரடியாக அழைப்பிதழுக்குச் செல்ல',
  replayCta: 'முகப்புக் காட்சி',
};

export function resolveInitialOpeningPhase(
  search: string,
  sessionStoredValue: string | null
): OpeningSequencePhase {
  if (search) {
    const cleaned = search.startsWith('?') ? search.slice(1) : search;
    const params = new URLSearchParams(cleaned);
    if (params.get('autostart') === '1') {
      return 'opened';
    }
    if (params.get('intro') === '1') {
      return 'closed';
    }
  }
  if (sessionStoredValue === 'opened') {
    return 'opened';
  }
  return 'closed';
}

export function transitionOpeningPhase(
  current: OpeningSequencePhase,
  action: OpeningSequenceAction
): OpeningSequencePhase {
  switch (action) {
    case 'TAP_BRASS_RINGS':
      return current === 'closed' ? 'opening' : current;
    case 'ANIMATION_COMPLETE':
      return 'opened';
    case 'SKIP':
      return 'opened';
    case 'REPLAY':
      return 'closed';
    default:
      return current;
  }
}

