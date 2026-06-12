import React, { useRef, useState, useEffect, memo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

// ─── Types ────────────────────────────────────────────────────────────────────

type LoadState = 'idle' | 'loading' | 'ready';

export interface LazyVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  controlsList?: string;
  /** Applied to the outermost wrapper div */
  className?: string;
  /** Applied to the outermost wrapper div */
  style?: React.CSSProperties;
  /**
   * When provided, both the wrapper and video fill the parent 100%.
   * Use this whenever the parent container already defines width + height
   * (e.g. aspect-ratio: 16/9, fixed height cards, etc.).
   * Omit for "natural" flow (width: 100%, height: auto).
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  /**
   * Aspect-ratio for the loading skeleton (e.g. "9/16", "16/9", "1/1").
   * Only used in "natural" mode (no objectFit). Helps prevent layout shift.
   * Defaults to a simple min-height skeleton when omitted.
   */
  skeletonAspectRatio?: string;
  'aria-label'?: string;
  onCanPlay?: () => void;
}

// ─── Styled components ────────────────────────────────────────────────────────

const shimmer = keyframes`
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

const Wrapper = styled.div<{ $fill: boolean }>`
  position: relative;
  width: 100%;
  ${({ $fill }) => $fill && 'height: 100%;'}
  overflow: hidden;
`;

/** Skeleton shown while the video hasn't loaded yet */
const SkeletonEl = styled.div<{ $fill: boolean; $aspectRatio?: string }>`
  ${({ $fill }) =>
    $fill
      ? 'position: absolute; inset: 0;'
      : `width: 100%; ${
          '' /* aspect-ratio takes precedence; fall back to min-height */
        }`}
  ${({ $fill, $aspectRatio }) =>
    !$fill && ($aspectRatio ? `aspect-ratio: ${$aspectRatio};` : 'min-height: 160px;')}
  background: linear-gradient(
    90deg,
    #e0e0e0 0%,
    #efefef 50%,
    #e0e0e0 100%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.8s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
`;

const VideoEl = styled.video<{
  $visible: boolean;
  $fill: boolean;
  $objectFit: string;
}>`
  display: block;
  ${({ $fill }) =>
    $fill
      ? 'width: 100%; height: 100%;'
      : 'width: 100%; height: auto;'}
  object-fit: ${({ $objectFit }) => $objectFit};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.55s ease;
  ${({ $visible, $fill }) =>
    !$visible && !$fill
      ? 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
      : ''}
`;

// ─── Size-warning helper (dev only) ─────────────────────────────────────────

function warnIfLarge(src: string) {
  if (!import.meta.env.DEV) return;
  fetch(src, { method: 'HEAD' })
    .then((res) => {
      const bytes = parseInt(res.headers.get('content-length') ?? '0', 10);
      if (bytes > 5_000_000) {
        console.warn(
          `[LazyVideo] ⚠ "${src.split('/').pop()}" is ${(bytes / 1_000_000).toFixed(1)} MB. ` +
            'Videos over 5 MB hurt performance — consider compressing with HandBrake or ffmpeg.'
        );
      }
    })
    .catch(() => {});
}

// ─── Component ────────────────────────────────────────────────────────────────

const LazyVideo = memo<LazyVideoProps>(
  ({
    src,
    poster,
    autoPlay = false,
    loop = false,
    muted = true,
    playsInline = true,
    controls = false,
    controlsList,
    className,
    style,
    objectFit,
    skeletonAspectRatio,
    'aria-label': ariaLabel,
    onCanPlay,
  }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [state, setState] = useState<LoadState>('idle');
    const [activeSrc, setActiveSrc] = useState<string | undefined>();

    const fillMode = !!objectFit;

    // Trigger loading when the wrapper enters the viewport
    useEffect(() => {
      const el = wrapperRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSrc(src);
            setState('loading');
            observer.disconnect();
            warnIfLarge(src);
          }
        },
        // Start loading 300 px before the video scrolls into view
        { rootMargin: '300px 0px', threshold: 0 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [src]);

    // If the src prop changes while already visible, refresh the source
    useEffect(() => {
      if (activeSrc && activeSrc !== src) {
        setState('loading');
        setActiveSrc(src);
        warnIfLarge(src);
      }
    }, [src, activeSrc]);

    const handleReady = useCallback(() => {
      setState('ready');
      if (autoPlay && videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
      onCanPlay?.();
    }, [autoPlay, onCanPlay]);

    const isReady = state === 'ready';
    const hasStarted = state !== 'idle';

    return (
      <Wrapper ref={wrapperRef} className={className} style={style} $fill={fillMode}>
        {/* Skeleton — shown until video is fully loaded */}
        {!isReady && (
          <SkeletonEl
            $fill={fillMode}
            $aspectRatio={skeletonAspectRatio}
            aria-hidden="true"
          />
        )}

        {/* Video — rendered only after IntersectionObserver fires */}
        {hasStarted && (
          <VideoEl
            ref={videoRef}
            src={activeSrc}
            poster={poster}
            preload="metadata"
            /* We start playback manually via handleReady to avoid autoplay race */
            autoPlay={false}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            controls={controls}
            controlsList={controlsList}
            aria-label={ariaLabel}
            $visible={isReady}
            $fill={fillMode}
            $objectFit={objectFit ?? 'cover'}
            onLoadedData={handleReady}
            onCanPlay={handleReady}
            onError={() => setState('ready')}
          />
        )}
      </Wrapper>
    );
  }
);

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo;
