import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import s2workday from "../../assets/work/2sol.mp4";

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`;

const SectionCard = styled(motion.section)`
  background: var(--cardBackground);
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(0, 0, 0, 0.08);
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  min-height: 500px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    border-radius: 28px 28px 0 0;
  }

  @media (max-width: 1024px) {
    width: 95%;
    border-radius: 20px;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    border-radius: 16px;
    padding: 2rem 1.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
    border-radius: 12px;
    padding: 1.5rem 1rem;
  }
`;

const Label = styled(motion.div)`
  color: var(--accent1);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const FlowTitle = styled(motion.h1)`
  color: var(--text);
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 900px) {
    font-size: 2.2rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
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
  align-items: center;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  background: var(--cardBackground);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: block;
  border: 1px solid var(--border);
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
  background: var(--accent1);
  color: var(--text);
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
    background: var(--accent2);
  }
`;

const Slider = styled.input.attrs({ type: "range" })`
  flex: 1 1 0;
  width: 100%;
  margin: 0 8px;
  accent-color: var(--accent1);
  height: 4px;
`;

const Time = styled.span`
  font-size: 0.95rem;
  color: var(--text);
  min-width: 44px;
  text-align: right;
  opacity: 0.8;
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

const FinalLookDayOff: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Final Look: Taking a Day Off | Workday UX Project"
        description="See the final implementation of the improved time-off request process in the Workday app with interactive video demonstration."
        keywords="final UI, time off design, UX implementation, mobile app, Workday app, design showcase"
        image="/src/assets/work/final-timeoff.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Label variants={itemVariants}>Final look of Making a Day Off</Label>
          <FlowTitle variants={itemVariants}>Flow 2</FlowTitle>
          <FlexRow>
            <TextColumn />
            <VideoWrapper>
              <VideoContainer>
                <StyledVideo
                  ref={videoRef}
                  src={s2workday}
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
        </SectionCard>
      </Container>
    </>
  );
};

export default FinalLookDayOff;