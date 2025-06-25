import React from "react";
import styled from "styled-components";
// If you want to use the image, uncomment below:
// import keyTakeawayImg from "../../assets/your-image-path.png"; // Adjust path if needed

const Card = styled.section`
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 8px 32px #0002, 0 2px 10px #0001;
  width: 60vw;
  max-width: 1100px;
  margin: 4vw auto 2vw auto;
  font-family: 'Montserrat', sans-serif;
  padding: 4vw 5vw 4vw 5vw;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    width: 95vw;
    border-radius: 16px;
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    max-width: 100vw;
    min-height: 0;
  }
`;

const Finally = styled.p`
  color: #878787;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.9rem;
`;

const KeyTitle = styled.h2`
  color: #3926e8;
  font-size: 2.7rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
`;

const Paragraph = styled.p`
  color: #232323;
  font-size: 1.18rem;
  line-height: 1.5;
  margin-bottom: 0.35rem;
  max-width: 80vw;
`;

// If you want to show the image at the top, uncomment and use this:
// const Image = styled.img`
//   width: 300px;
//   max-width: 80vw;
//   margin: 0 auto 2vw auto;
//   display: block;
// `;

const KeyTakeawaySection: React.FC = () => (
  <Card>
    {/* <Image src={keyTakeawayImg} alt="Key Takeaway Visual" /> */}
    <Finally>Finally</Finally>
    <KeyTitle>Key Takeaway</KeyTitle>
    <Paragraph>
      Redesigning this app taught me that today’s users — especially busy people like part-time workers — value speed and simplicity above all. As a designer, it’s easy to get caught up in visuals and aesthetics (which do matter!), but what matters more is how easily someone can use the product.
    </Paragraph>
    <Paragraph>
      I learned the importance of using clear structure, proper button placement, readable fonts, and intuitive color choices to guide users quickly and confidently through their tasks. A well-designed app should not only look good, but feel effortless to use — and that balance is what I aim for in every project.
    </Paragraph>
  </Card>
);

export default KeyTakeawaySection;