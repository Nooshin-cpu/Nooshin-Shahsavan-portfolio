import React from "react";
import styled from "styled-components";

const MinimalSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`;

const Title = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
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