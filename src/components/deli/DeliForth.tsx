import React from "react";
import styled from "styled-components";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background: #fafaf8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px clamp(1.5rem, 5vw, 4rem) 80px;
  @media (max-width: 900px) {
    padding: 80px clamp(1rem, 3vw, 2rem) 60px;
  }
  @media (max-width: 600px) {
    padding: 60px clamp(0.75rem, 2vw, 1.5rem) 40px;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #444;
  font-weight: 400;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 2.2rem 0;
  text-align: center;
  @media (max-width: 900px) {
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }
`;

const Category = styled.div`
  font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`;

const Highlight = styled.span`
  color: #b48a3b;
  font-weight: 400;
`;

const DeliForth: React.FC = () => (
  <MinimalSection>
    <Title>Logo Design</Title>
    <Description>
      <Category>I drew inspiration</Category>
      From the <Highlight>iconic classical columns</Highlight>, which are widely recognized <Highlight>symbols</Highlight> of that era. I developed a <Highlight>minimal</Highlight>, <Highlight>elegant</Highlight> symbol that merges with the letter "D" in "Delicato".
      <Category>The column is</Category>
      Abstracted into a balance of <Highlight>positive and negative</Highlight> space, evoking both strength and delicacy. A subtle <Highlight>break</Highlight> in the lower curved line represents the passage of time, the <Highlight>separation and connection</Highlight> between classical and modern eras. The overall form is clean and memorable, encapsulating the brand's concept of timeless elegance.      
    </Description>
  </MinimalSection>
);

export default DeliForth; 