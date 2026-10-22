import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCountdown,
  validateRsvpInput,
  generateIcsCalendarContent,
  INVITATION_CONTENT,
  SOUTH_INDIAN_RASI_CHART,
  MUHURTHAM_TARGET_MS,
  OPENING_SEQUENCE_CONTENT,
  VENUE_LANDMARKS,
  resolveInitialOpeningPhase,
  transitionOpeningPhase,
} from './invitationData';
import { unicodeToBamini } from './baminiConverter';

test('calculateCountdown accurately computes remaining days, hours, minutes, and seconds before 16.11.2026 04:00 AM IST', () => {
  // Exact 10 days, 2 hours, 15 minutes, 30 seconds before Muhurtham
  const offsetMs = ((10 * 24 + 2) * 3600 + 15 * 60 + 30) * 1000;
  const nowMs = MUHURTHAM_TARGET_MS - offsetMs;
  const result = calculateCountdown(nowMs, MUHURTHAM_TARGET_MS);

  assert.equal(result.isCompleted, false);
  assert.equal(result.days, 10);
  assert.equal(result.hours, 2);
  assert.equal(result.minutes, 15);
  assert.equal(result.seconds, 30);
  assert.equal(result.daysFormatted, '10');
  assert.equal(result.hoursFormatted, '02');
});

test('calculateCountdown handles completed state when current time is past Muhurtham', () => {
  const result = calculateCountdown(MUHURTHAM_TARGET_MS + 5000, MUHURTHAM_TARGET_MS);
  assert.equal(result.isCompleted, true);
  assert.equal(result.days, 0);
  assert.equal(result.secondsFormatted, '00');
});

test('INVITATION_CONTENT preserves all handwritten pen corrections from the uploaded Tamil invitation', () => {
  // Check corrected house name and title
  assert.equal(INVITATION_CONTENT.houseNameTamil, 'அருள் நிறை இல்லம்');
  assert.equal(INVITATION_CONTENT.mainTitle, 'புதுமனை புகுவிழா அழைப்பிதழ்');

  // Check corrected panchangam prose with "தங்கள் வருகையை" and "துலாம் லக்னம்"
  assert.ok(INVITATION_CONTENT.panchangamProse.includes('பராபவ வருடம் வளர்பிறை ஐப்பசி மாதம் 30 ஆம் நாள்'));
  assert.ok(INVITATION_CONTENT.panchangamProse.includes('தங்கள் வருகையை அன்புடன் வேண்டுகிறோம்'));

  // Check corrected poetic line ("இல்லாமல்" -> "இல்லமாய்")
  assert.ok(
    INVITATION_CONTENT.poeticInviteLines.includes('கனவாய் தொடங்கி இல்லமாய் நிறைந்த')
  );

  // Check corrected venue ("கழிவெட்டிபாளையம்" -> "காடுவெட்டிபாளையம்")
  assert.deepEqual(INVITATION_CONTENT.venueLines, [
    'நால் ரோடு',
    'காடுவெட்டிபாளையம்',
    'கருமத்தம்பட்டி',
  ]);
});

test('SOUTH_INDIAN_RASI_CHART has all 12 Rasis with Thulam as Lagnam', () => {
  assert.equal(SOUTH_INDIAN_RASI_CHART.length, 12);
  const thulam = SOUTH_INDIAN_RASI_CHART.find((r) => r.id === 'thulam');
  assert.ok(thulam);
  assert.equal(thulam.isLagnam, true);
  assert.equal(thulam.houseNumberFromLagnam, 1);
});

test('validateRsvpInput validates required fields and guest count bounds', () => {
  const invalid = validateRsvpInput({
    name: '',
    relationOrCity: '',
    guestsCount: 0,
    attendingFeast: true,
    blessingMessage: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.relationOrCity);
  assert.ok(invalid.errors.guestsCount);

  const valid = validateRsvpInput({
    name: 'செந்தில் குமார்',
    relationOrCity: 'காடுவெட்டிபாளையம்',
    guestsCount: 4,
    attendingFeast: true,
    blessingMessage: 'வாழ்க வளமுடன்',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateIcsCalendarContent produces valid VCALENDAR event for 16.11.2026', () => {
  const ics = generateIcsCalendarContent();
  assert.ok(ics.includes('BEGIN:VCALENDAR'));
  assert.ok(ics.includes('அருள் நிறை இல்லம்'));
  assert.ok(ics.includes('காடுவெட்டிபாளையம்'));
});

test('resolveInitialOpeningPhase handles default visit, session storage, and ?autostart=1', () => {
  assert.equal(resolveInitialOpeningPhase('', null), 'closed');
  assert.equal(resolveInitialOpeningPhase('', 'opened'), 'opened');
  assert.equal(resolveInitialOpeningPhase('?autostart=1', null), 'opened');
  assert.equal(resolveInitialOpeningPhase('?intro=1', 'opened'), 'closed');
});

test('transitionOpeningPhase transitions cleanly across brass ring tap, animation complete, skip, and replay', () => {
  assert.equal(transitionOpeningPhase('closed', 'TAP_BRASS_RINGS'), 'opening');
  assert.equal(transitionOpeningPhase('opening', 'ANIMATION_COMPLETE'), 'opened');
  assert.equal(transitionOpeningPhase('closed', 'SKIP'), 'opened');
  assert.equal(transitionOpeningPhase('opened', 'REPLAY'), 'closed');
  assert.ok(OPENING_SEQUENCE_CONTENT.locationSubtitle.includes('காடுவெட்டிபாளையம்'));
});

test('VENUE_LANDMARKS provides simple Tamil-only nameTamil, subtitleTamil, and distanceTamil for all route landmarks', () => {
  assert.equal(VENUE_LANDMARKS.length, 4);
  assert.equal(VENUE_LANDMARKS[0].nameTamil, 'அருள் நிறை இல்லம்');
  assert.ok(VENUE_LANDMARKS[0].subtitleTamil.includes('காடுவெட்டிபாளையம்'));
  for (const lm of VENUE_LANDMARKS) {
    assert.ok(lm.nameTamil.length > 0);
    assert.ok(lm.subtitleTamil.length > 0);
    assert.ok(lm.distanceTamil.length > 0);
    // Ensure no Latin characters appear in the Tamil fields
    assert.equal(/[A-Za-z]/.test(lm.nameTamil), false);
    assert.equal(/[A-Za-z]/.test(lm.subtitleTamil), false);
    assert.equal(/[A-Za-z]/.test(lm.distanceTamil), false);
  }
});

test('unicodeToBamini accurately converts Unicode Tamil headers to Bamini_Tamil_09 glyph encoding', () => {
  assert.equal(unicodeToBamini('புதுமனை புகுவிழா அழைப்பிதழ்'), 'GJkid GFtpoh miog;gpjo;');
  assert.equal(unicodeToBamini('அருள் நிறை இல்லம்'), 'mUs; epiw ,y;yk;');
  assert.equal(unicodeToBamini('விழா நடைபெறும் இடம்'), 'tpoh eilngWk; ,lk;');
});


