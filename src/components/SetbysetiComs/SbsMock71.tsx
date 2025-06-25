import React from "react";
import styled from "styled-components";
import mockVideo from "../../assets/sbsimg/story5.mp4";

const MockSection6 = styled.section`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const FullVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
`;

const SbsMock71: React.FC = () => (
  <MockSection6>
    <FullVideo
      src={mockVideo}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      aria-label="SBS Story Video"
    />
  </MockSection6>
);

export default SbsMock71 ;