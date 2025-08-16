import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import s1workday from "../../assets/work/1sol.mp4";
import s2workday from "../../assets/work/2sol.mp4";

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
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
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;
  min-height: 500px;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 2rem 1.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`;

const Label = styled(motion.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const FlowTitle = styled(motion.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 500px;
  }

  @media (max-width: 600px) {
    gap: 1rem;
    max-width: 400px;
  }
`;

const VideoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoTitle = styled(motion.h2)`
  color: #3e2ffc;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledVideo = styled.video`
  width: 300px;
  height: auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  display: block;
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const ControlsContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
  user-select: none;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const PlayPauseButton = styled.button`
  background: #3e2ffc;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background 0.2s;

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  &:hover {
    background: #2196f3;
  }
`;

const Slider = styled.input.attrs({ type: "range" })`
  flex: 1 1 0;
  width: 100%;
  margin: 0 8px;
  accent-color: #3e2ffc;
  height: 4px;

  @media (max-width: 600px) {
    margin: 0 4px;
  }
`;

const Time = styled.span`
  font-size: 0.85rem;
  color: #444;
  min-width: 40px;
  text-align: right;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    min-width: 32px;
  }
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
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [duration1, setDuration1] = useState(0);
  const [duration2, setDuration2] = useState(0);

  // Video 1 handlers
  const handlePlayPause1 = () => {
    if (!video1Ref.current) return;
    if (video1Ref.current.paused) {
      video1Ref.current.play();
      setIsPlaying1(true);
    } else {
      video1Ref.current.pause();
      setIsPlaying1(false);
    }
  };

  const handleTimeUpdate1 = () => {
    if (!video1Ref.current) return;
    setProgress1(video1Ref.current.currentTime);
  };

  const handleLoadedMetadata1 = () => {
    if (!video1Ref.current) return;
    setDuration1(video1Ref.current.duration);
  };

  const handleSliderChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (video1Ref.current) {
      video1Ref.current.currentTime = value;
      setProgress1(value);
    }
  };

  const handleEnded1 = () => {
    setIsPlaying1(false);
    setProgress1(duration1);
  };

  // Video 2 handlers
  const handlePlayPause2 = () => {
    if (!video2Ref.current) return;
    if (video2Ref.current.paused) {
      video2Ref.current.play();
      setIsPlaying2(true);
    } else {
      video2Ref.current.pause();
      setIsPlaying2(false);
    }
  };

  const handleTimeUpdate2 = () => {
    if (!video2Ref.current) return;
    setProgress2(video2Ref.current.currentTime);
  };

  const handleLoadedMetadata2 = () => {
    if (!video2Ref.current) return;
    setDuration2(video2Ref.current.duration);
  };

  const handleSliderChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (video2Ref.current) {
      video2Ref.current.currentTime = value;
      setProgress2(value);
    }
  };

  const handleEnded2 = () => {
    setIsPlaying2(false);
    setProgress2(duration2);
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
        title="Final Look: Making a Schedule | Workday UX Project"
        description="See the final implementation of the improved schedule viewing experience in the Workday app with interactive video demonstration."
        keywords="final UI, schedule design, UX implementation, mobile app, Workday app, design showcase"
        image="/src/assets/work/final-schedule.jpg"
      />
      <Container>
        <SectionCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Label variants={itemVariants}>Final look of Making a Schedule</Label>
          <FlowTitle variants={itemVariants}>Flow 1</FlowTitle>
          <VideoGrid>
            <VideoColumn>
              <VideoTitle variants={itemVariants}>Schedule Flow</VideoTitle>
              <VideoContainer>
                <StyledVideo
                  ref={video1Ref}
                  src={s1workday}
                  onTimeUpdate={handleTimeUpdate1}
                  onLoadedMetadata={handleLoadedMetadata1}
                  onEnded={handleEnded1}
                  playsInline
                />
                <ControlsContainer>
                  <PlayPauseButton onClick={handlePlayPause1} aria-label={isPlaying1 ? "Pause" : "Play"}>
                    {isPlaying1 ? "❚❚" : "►"}
                  </PlayPauseButton>
                  <Slider
                    min={0}
                    max={duration1}
                    step={0.1}
                    value={progress1}
                    onChange={handleSliderChange1}
                    aria-label="Video 1 progress"
                  />
                  <Time>
                    {formatTime(progress1)} / {formatTime(duration1)}
                  </Time>
                </ControlsContainer>
              </VideoContainer>
            </VideoColumn>
            <VideoColumn>
              <VideoTitle variants={itemVariants}>Time Off Flow</VideoTitle>
              <VideoContainer>
                <StyledVideo
                  ref={video2Ref}
                  src={s2workday}
                  onTimeUpdate={handleTimeUpdate2}
                  onLoadedMetadata={handleLoadedMetadata2}
                  onEnded={handleEnded2}
                  playsInline
                />
                <ControlsContainer>
                  <PlayPauseButton onClick={handlePlayPause2} aria-label={isPlaying2 ? "Pause" : "Play"}>
                    {isPlaying2 ? "❚❚" : "►"}
                  </PlayPauseButton>
                  <Slider
                    min={0}
                    max={duration2}
                    step={0.1}
                    value={progress2}
                    onChange={handleSliderChange2}
                    aria-label="Video 2 progress"
                  />
                  <Time>
                    {formatTime(progress2)} / {formatTime(duration2)}
                  </Time>
                </ControlsContainer>
              </VideoContainer>
            </VideoColumn>
          </VideoGrid>
        </SectionCard>
      </Container>
    </>
  );
};

export default FinalLookMakingSchedule;