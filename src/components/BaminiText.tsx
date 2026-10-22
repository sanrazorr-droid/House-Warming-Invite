import React from 'react';
import { unicodeToBamini } from '../utils/baminiConverter';

interface BaminiTextProps {
  text: string;
  className?: string;
}

/**
 * Renders Unicode Tamil text using the decorative `Bamini_Tamil_09` font
 * from tamilfontstyle.com (`BAMINI-Tamil09.ttf`) by converting the visible
 * glyphs to Bamini encoding while preserving the accessible Unicode Tamil string
 * for screen readers and text selection/search.
 */
export const BaminiText: React.FC<BaminiTextProps> = ({ text, className = '' }) => {
  const baminiEncoded = unicodeToBamini(text);
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      <span aria-hidden="true" className="font-bamini-09">
        {baminiEncoded}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
};
