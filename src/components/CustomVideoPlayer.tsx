import React, { useRef, useState, useEffect, useCallback, memo } from 'react';

interface CustomVideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = memo(({ src, className, style }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeSrc, setActiveSrc] = useState<string | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Lazy-load: only set video src when container enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;

    const onLoaded = () => setIsLoaded(true);
    const onTime = () => setCurrentTime(video.currentTime);
    const onMeta = () => setDuration(video.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('canplay', onLoaded);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('canplay', onLoaded);
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, [activeSrc]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = (parseFloat(e.target.value) / 100) * duration;
  }, [duration]);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div ref={containerRef} className={`custom-video-player ${className ?? ''}`} style={style}>
      {/* Skeleton shimmer until video is loaded */}
      {!isLoaded && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg,#e0e0e0 0%,#efefef 50%,#e0e0e0 100%)',
            backgroundSize: '400% 100%',
            animation: 'cvpShimmer 1.8s ease-in-out infinite',
            zIndex: 1,
          }}
        />
      )}

      <video
        ref={videoRef}
        src={activeSrc}
        preload={activeSrc ? 'metadata' : 'none'}
        playsInline
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {isLoaded && (
        <div className="video-controls">
          <button
            className="play-pause-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <div className="progress-container">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="progress-bar"
            />
          </div>
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      )}

      <style>{`
        @keyframes cvpShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .custom-video-player {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: #e0e0e0;
        }
        .video-controls {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(0,0,0,0.7);
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
        }
        .play-pause-btn {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        .play-pause-btn:hover { background: rgba(255,255,255,0.2); }
        .progress-container { flex: 1; }
        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
        }
        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px; height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }
        .progress-bar::-moz-range-thumb {
          width: 12px; height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
        .time-display {
          color: white;
          font-size: 12px;
          font-family: monospace;
          min-width: 80px;
          text-align: right;
        }
      `}</style>
    </div>
  );
});

CustomVideoPlayer.displayName = 'CustomVideoPlayer';

export default CustomVideoPlayer;
