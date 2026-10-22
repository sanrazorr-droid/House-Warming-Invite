import React, { useState, useCallback } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { VENUE_LANDMARKS, VenueLandmark } from '../utils/invitationData';
import { TraditionalFlourishDivider } from './RoyalMandapamArt';
import { BaminiText } from './BaminiText';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

interface LandmarkMarkerProps {
  landmark: VenueLandmark;
  isSelected: boolean;
  onSelect: (landmark: VenueLandmark) => void;
  onClose: () => void;
}

const LandmarkMarker: React.FC<LandmarkMarkerProps> = ({
  landmark,
  isSelected,
  onSelect,
  onClose,
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={landmark.position}
        title={landmark.nameTamil}
        onClick={() => onSelect(landmark)}
      >
        <Pin
          background={landmark.isMainVenue ? '#7A1C1C' : '#B3861B'}
          borderColor={'#F5E6C4'}
          glyphColor={'#FFFDF8'}
          scale={landmark.isMainVenue ? 1.3 : 1.05}
        />
      </AdvancedMarker>

      {isSelected && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={260}
          onCloseClick={onClose}
        >
          <div className="font-tamil-body p-1 text-[#3B1610]">
            <p className="font-tamil-display text-sm font-bold text-[#7A1C1C]">
              {landmark.nameTamil}
            </p>
            <p className="mt-0.5 text-xs font-medium text-[#5C2618]">
              {landmark.subtitleTamil}
            </p>
            <p className="mt-1 text-[11px] font-bold text-[#8A5A19]">
              {landmark.distanceTamil}
            </p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export const VenueMapSection: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState<VenueLandmark>(
    VENUE_LANDMARKS[0]
  );
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);
  const [cameraCenter, setCameraCenter] = useState<{ lat: number; lng: number }>(
    VENUE_LANDMARKS[0].position
  );
  const [cameraZoom, setCameraZoom] = useState<number>(14);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleSelectLandmark = useCallback((landmark: VenueLandmark) => {
    setSelectedLandmark(landmark);
    setIsInfoWindowOpen(true);
    setCameraCenter(landmark.position);
    setCameraZoom(landmark.isMainVenue ? 15 : 13);
  }, []);

  const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
    setCameraCenter(ev.detail.center);
    setCameraZoom(ev.detail.zoom);
  }, []);

  const handleCopyAddress = async () => {
    const fullAddress =
      'அருள் நிறை இல்லம், நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி, கோயம்புத்தூர் - 641659';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullAddress);
      }
    } catch {
      // Fallback handled silently
    }
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Kaduvettipalayam+Karumathampatti+Tamil+Nadu';

  return (
    <section
      id="venue"
      aria-labelledby="venue-heading"
      className="mx-auto max-w-5xl scroll-mt-16 px-4 py-6 sm:px-6 sm:py-10"
    >
      <div className="rounded-3xl border border-[#C59B27] bg-gradient-to-b from-[#FFFDF8] via-[#FAF3E3] to-[#F4E4C1] p-4 shadow-md sm:p-8">
        <div className="text-center">
          <p className="font-tamil-stylish text-xs tracking-wider text-[#8C5814] sm:text-sm">
            இடம் மற்றும் வழித்தடம்
          </p>
          <h2
            id="venue-heading"
            className="text-fluid-h2 mt-1 text-[#6E1414]"
            style={{ textWrap: 'balance' }}
          >
            <BaminiText text="விழா நடைபெறும் இடம்" />
          </h2>
          <p className="font-tamil-body mt-1.5 text-xs leading-relaxed font-semibold text-[#5C2618] sm:text-sm">
            அருள் நிறை இல்லம் · நால் ரோடு, காடுவெட்டிபாளையம், கருமத்தம்பட்டி
          </p>
        </div>

        <TraditionalFlourishDivider className="my-4" />

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Left 5 Columns: Venue Address Panel */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#C59B27] bg-[#FFFDF9] p-4 shadow-xs sm:p-6 lg:col-span-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7A1C1C] text-[#F3DFA2] sm:h-11 sm:w-11">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-tamil-stylish text-xs text-[#8A5A19] sm:text-sm">
                  வீட்டின் முகவரி
                </span>
                <h3 className="text-fluid-h3 mt-0.5 text-[#7A1C1C]">
                  <BaminiText text="அருள் நிறை இல்லம்" />
                </h3>
                <div className="font-tamil-body text-fluid-body mt-1.5 space-y-0.5 font-semibold text-[#3B1610]">
                  <p>நால் ரோடு, காடுவெட்டிபாளையம்,</p>
                  <p>கருமத்தம்பட்டி,</p>
                  <p className="text-xs font-semibold text-[#5C2618] sm:text-sm">
                    கோயம்புத்தூர் - 641659
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-tamil-body inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#7A1C1C] px-4 py-2.5 text-xs font-bold text-[#FFFDF8] transition-colors hover:bg-[#5C1313] sm:text-[13px]"
              >
                <Navigation className="h-3.5 w-3.5 shrink-0 text-[#F3DFA2]" />
                <span>கூகுள் மேப்ஸில் வழி பார்க்க</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" />
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="font-tamil-body inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-[#B3861B] bg-[#FAF3E3] px-4 py-2.5 text-xs font-bold text-[#4A1812] transition-colors hover:bg-[#F3E2BC] sm:text-[13px]"
              >
                {copiedAddress ? (
                  <>
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#2E6B40]" />
                    <span>நகலெடுக்கப்பட்டது</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 shrink-0 text-[#9A721C]" />
                    <span>முகவரியை நகலெடுக்க</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Google Map Container */}
          <div className="flex flex-col lg:col-span-7">
            <div className="flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-2xl border-2 border-[#C59B27] bg-[#FFFDF8] shadow-inner sm:min-h-[310px]">
              <div className="relative flex-1 min-h-[235px] w-full bg-[#F5E6C4] sm:min-h-[265px]">
                {MAPS_API_KEY ? (
                  <APIProvider
                    apiKey={MAPS_API_KEY}
                    language="en"
                    region="IN"
                  >
                    <Map
                      center={cameraCenter}
                      zoom={cameraZoom}
                      onCameraChanged={handleCameraChange}
                      mapId="DEMO_MAP_ID"
                      gestureHandling="cooperative"
                      internalUsageAttributionIds={[
                        'gmp_mcp_codeassist_v1_aistudio',
                      ]}
                      style={{ width: '100%', height: '100%' }}
                    >
                      {VENUE_LANDMARKS.map((landmark) => (
                        <LandmarkMarker
                          key={landmark.id}
                          landmark={landmark}
                          isSelected={
                            isInfoWindowOpen && selectedLandmark.id === landmark.id
                          }
                          onSelect={handleSelectLandmark}
                          onClose={() => setIsInfoWindowOpen(false)}
                        />
                      ))}
                    </Map>
                  </APIProvider>
                ) : (
                  <iframe
                    title={`${selectedLandmark.nameTamil} - வரைபடம்`}
                    src={`https://maps.google.com/maps?q=${selectedLandmark.position.lat},${selectedLandmark.position.lng}&z=${cameraZoom}&hl=en&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>

              {/* Dedicated Map Footer Bar — zero overlap with Google Maps attribution */}
              <div className="font-tamil-body flex flex-wrap items-center justify-between gap-2 border-t border-[#C59B27]/60 bg-[#FFFDF8] px-3.5 py-2.5 text-xs sm:px-4">
                <div className="flex min-w-0 items-center gap-1.5 font-bold text-[#7A1C1C]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#7A1C1C]" />
                  <span className="truncate">{selectedLandmark.nameTamil}</span>
                </div>
                <div className="shrink-0 font-semibold text-[#5C2618]">
                  {selectedLandmark.distanceTamil}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
