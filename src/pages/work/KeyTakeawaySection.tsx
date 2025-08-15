import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

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

const Card = styled(motion.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`;

const Finally = styled(motion.div)`
  color: #3e2ffc;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
`;

const KeyTitle = styled(motion.h1)`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const Paragraph = styled(motion.p)`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  opacity: 0.9;
  max-width: 100%;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }
`;

const KeyPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const KeyPoint = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: #3e2ffc;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const PointTitle = styled.h3`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const PointText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const KeyTakeawaySection: React.FC = () => {
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

  const keyPoints = [
    {
      title: "User-Centered Design",
      text: "Focus on user needs and behaviors rather than just aesthetics. Speed and simplicity are paramount for busy users."
    },
    {
      title: "Clear Structure",
      text: "Use intuitive navigation, proper button placement, and readable typography to guide users efficiently."
    },
    {
      title: "Visual Balance",
      text: "A well-designed app should look good while feeling effortless to use - this balance is key to success."
    }
  ];

  return (
    <>
      <SEO 
        title="Key Takeaways | Design Insights & Learnings"
        description="Discover the key insights and learnings from our design projects, focusing on user-centered design principles and effective UX strategies."
        keywords="key takeaways, design insights, UX learnings, user-centered design, design principles"
        image="/src/assets/work/key-takeaways.jpg"
      />
      <Container>
        <Card
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Finally variants={itemVariants}>
            Finally
          </Finally>
          
          <KeyTitle variants={itemVariants}>
            Key Takeaways
          </KeyTitle>
          
          <ContentGrid>
            <Paragraph variants={itemVariants}>
              Redesigning this app taught me that today's users — especially busy people like part-time workers — value speed and simplicity above all. As a designer, it's easy to get caught up in visuals and aesthetics (which do matter!), but what matters more is how easily someone can use the product.
            </Paragraph>
            
            <Paragraph variants={itemVariants}>
              I learned the importance of using clear structure, proper button placement, readable fonts, and intuitive color choices to guide users quickly and confidently through their tasks. A well-designed app should not only look good, but feel effortless to use — and that balance is what I aim for in every project.
            </Paragraph>
          </ContentGrid>

          <KeyPoints>
            {keyPoints.map((point, index) => (
              <KeyPoint
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <PointTitle>{point.title}</PointTitle>
                <PointText>{point.text}</PointText>
              </KeyPoint>
            ))}
          </KeyPoints>
        </Card>
      </Container>
    </>
  );
};

export default KeyTakeawaySection;