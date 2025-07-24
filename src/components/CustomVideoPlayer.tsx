import React, { useRef, useState, useEffect } from 'react';

interface CustomVideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = (parseFloat(e.target.value) / 100) * duration;
      videoRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`custom-video-player ${className || ''}`} style={style}>
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
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
      <style>{`
        .custom-video-player {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
        }
        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 1;
          transition: opacity 0.3s ease;
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
        .play-pause-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .progress-container {
          flex: 1;
          position: relative;
        }
        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
        }
        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }
        .progress-bar::-moz-range-thumb {
          width: 12px;
          height: 12px;
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
};

export default CustomVideoPlayer; 