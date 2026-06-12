import React from "react";
import styled from "styled-components";
import LazyVideo from '../LazyVideo';
import mockVideo from "../../assets/sbsimg/sbsillustration.mp4";
import bagImg from "../../assets/sbsimg/tag-2.png";

const MockupSection = styled.section`
  width: 100vw;
  background: #fff;
  display: flex;
    flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
`;

const TwoColumnGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  max-width: 70vw;
`;

const PairedMockup = styled.img`
  width: calc(35vw - 1rem);
  max-width: calc(35vw - 1rem);
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
    object-fit: contain;
`;

const PairedVideo = styled.div`
  width: calc(35vw - 1rem);
  max-width: calc(35vw - 1rem);
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  overflow: hidden;
`;

const SbsMock9: React.FC = () => (
  <MockupSection>
    <TwoColumnGrid>
      <PairedMockup src={bagImg} alt="SBS Bag Mockup" />
      <PairedVideo>
        <LazyVideo
          src={mockVideo}
          loop muted playsInline controls
          skeletonAspectRatio="9/16"
          aria-label="SBS Story Video"
        />
      </PairedVideo>
    </TwoColumnGrid>
  </MockupSection>
);

export default SbsMock9;