import React, { useRef, useState } from "react";
import styled from "styled-components";
import s1workday from "../../assets/work/s1workday.mp4";

const Container = styled.section`
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  max-width: 1100px;
  margin: 4vw auto 2vw auto;
  font-family: 'Montserrat', sans-serif;
  padding: 2.5rem 3vw 2.5rem 3vw;
  min-height: 700px;
  @media (max-width: 900px) {
    width: 95vw;
    border-radius: 16px;
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    max-width: 100vw;
  }
`;

const Label = styled.div`
  color: #979797;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FlowTitle = styled.h1`
  color: #483efc;
  font-size: 2.3rem;
  font-weight: 900;
  margin: 0 0 2.5rem 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextColumn = styled.div`
  flex: 1 1 0;
  min-width: 0;
`;

const VideoWrapper = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  background: #000;
  border-radius: 0;
  box-shadow: none;
  display: block;
`;

const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
  user-select: none;
`;

const PlayPauseButton = styled.button`
  background: #483efc;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background 0.2s;
  &:hover {
    background: #362bb5;
  }
`;

const Slider = styled.input.attrs({ type: "range" })`
  flex: 1 1 0;
  width: 100%;
  margin: 0 8px;
  accent-color: #483efc;
  height: 4px;
`;

const Time = styled.span`
  font-size: 0.95rem;
  color: #333;
  min-width: 44px;
  text-align: right;
`;

function formatTime(sec: number) {
  const minutes = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

const FinalLookMakingSchedule: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play/Pause Handler
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Update progress as video plays
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setProgress(videoRef.current.currentTime);
  };

  // When loaded, set the duration
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  // Slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setProgress(value);
    }
  };

  // Handle video end
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(duration);
  };

  return (
    <Container>
      <Label>Final look of Making a Schedule</Label>
      <FlowTitle>Flow 1</FlowTitle>
      <FlexRow>
        <TextColumn />
        <VideoWrapper>
          <VideoContainer>
            <StyledVideo
              ref={videoRef}
              src={s1workday}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              playsInline
            />
            <ControlsContainer>
              <PlayPauseButton onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? "❚❚" : "►"}
              </PlayPauseButton>
              <Slider
                min={0}
                max={duration}
                step={0.1}
                value={progress}
                onChange={handleSliderChange}
                aria-label="Video progress"
              />
              <Time>
                {formatTime(progress)} / {formatTime(duration)}
              </Time>
            </ControlsContainer>
          </VideoContainer>
        </VideoWrapper>
      </FlexRow>
    </Container>
  );
};

export default FinalLookMakingSchedule;