/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

interface ImageLoaderProps {
  iso?: string;
  emoji: string;
  alt: string;
}

export default function ImageLoader({ iso, emoji, alt }: ImageLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // If there is no ISO code (non-flag items), render the large, beautifully framed emoji directly!
  if (!iso) {
    return (
      <div 
        id="emoji-render-container"
        className="flex items-center justify-center p-6 bg-white/40 backdrop-blur-md rounded-2xl shadow-inner border border-white/40 animate-float"
        style={{ width: '180px', height: '140px', margin: '0 auto' }}
      >
        <span id="large-emoji" className="text-8xl select-none" role="img" aria-label={alt}>
          {emoji}
        </span>
      </div>
    );
  }

  // Otherwise, it's a flag, render the flagcdn.com image with standard skeleton & fallback!
  const flagUrl = `https://flagcdn.com/w160/${iso.toLowerCase()}.png`;

  return (
    <div 
      id="flag-wrap"
      className="relative flex items-center justify-center bg-white/40 backdrop-blur-md rounded-2xl shadow-inner border border-white/40 overflow-hidden mx-auto"
      style={{ width: '180px', height: '140px' }}
    >
      {/* Skeleton Shimmer */}
      {loading && !error && (
        <div 
          id="flag-skeleton"
          className="absolute inset-0 bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 animate-[shimmer_1.5s_infinite]"
          style={{ 
            backgroundSize: '200% 100%',
            borderRadius: '12px'
          }}
        />
      )}

      {/* Flag Image */}
      {!error && (
        <img
          id={`flag-img-${iso}`}
          src={flagUrl}
          alt={alt}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          className="object-contain max-h-[100px] max-w-[150px] shadow-md rounded-md transform transition-all duration-300 hover:scale-105"
          style={{ 
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.3s'
          }}
        />
      )}

      {/* Emoji Fallback */}
      {error && (
        <div 
          id="flag-fallback"
          className="flex items-center justify-center w-full h-full text-7xl select-none bg-white/10 rounded-xl"
        >
          {emoji}
        </div>
      )}
    </div>
  );
}
