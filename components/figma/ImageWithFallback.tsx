import React, { useState, useRef, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  fallback, 
  className = "",
  ...props 
}: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Default fallback - a cosmic gradient placeholder
  const defaultFallback = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cosmicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
        </linearGradient>
        <pattern id="stars" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#00ffff" opacity="0.3"/>
          <circle cx="30" cy="25" r="0.5" fill="#8b5cf6" opacity="0.4"/>
          <circle cx="45" cy="5" r="0.8" fill="#ffffff" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cosmicGrad)"/>
      <rect width="100%" height="100%" fill="url(#stars)"/>
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#00ffff" font-family="Arial, sans-serif" font-size="14" opacity="0.7">${alt}</text>
    </svg>
  `)}`;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallback || defaultFallback);
  };

  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        {...props}
      />
      {hasError && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg flex items-center justify-center">
          <span className="text-red-400 text-xs opacity-70">Failed to load image</span>
        </div>
      )}
    </div>
  );
}