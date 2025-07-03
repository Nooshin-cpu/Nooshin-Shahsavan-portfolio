import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// import HTMLFlipBook from 'react-pageflip';

// Import all brand book images
import page1 from '../assets/book/Brand-Book-1.png';
import page2 from '../assets/book/Brand-Book-2.png';
import page3 from '../assets/book/Brand-Book-3.png';
import page4 from '../assets/book/Brand-Book-4.png';
import page5 from '../assets/book/Brand-Book-5.png';
import page6 from '../assets/book/Brand-Book-6.png';
import page7 from '../assets/book/Brand-Book-7.png';
import page8 from '../assets/book/Brand-Book-8.png';
import page9 from '../assets/book/Brand-Book-9.png';
import page10 from '../assets/book/Brand-Book-10.png';
import page11 from '../assets/book/Brand-Book-11.png';
import page12 from '../assets/book/Brand-Book-12.png';
import page13 from '../assets/book/Brand-Book-13.png';
import page14 from '../assets/book/Brand-Book-14.png';
import page15 from '../assets/book/Brand-Book-15.png';
import page16 from '../assets/book/Brand-Book-16.png';
import page17 from '../assets/book/Brand-Book-17.png';
import page18 from '../assets/book/Brand-Book-18.png';
import page19 from '../assets/book/Brand-Book-19.png';
import page20 from '../assets/book/Brand-Book-20.png';
import page21 from '../assets/book/Brand-Book-21.png';
import page22 from '../assets/book/Brand-Book-22.png';
import page23 from '../assets/book/Brand-Book-23.png';
import page24 from '../assets/book/Brand-Book-24.png';
import page25 from '../assets/book/Brand-Book-25.png';
import page26 from '../assets/book/Brand-Book-26.png';
import page27 from '../assets/book/Brand-Book-27.png';
import page28 from '../assets/book/Brand-Book-28.png';
import page29 from '../assets/book/Brand-Book-29.png';
import page30 from '../assets/book/Brand-Book-30.png';
import page31 from '../assets/book/Brand-Book-31.png';
import page32 from '../assets/book/Brand-Book-32.png';
import page33 from '../assets/book/Brand-Book-33.png';
import page34 from '../assets/book/Brand-Book-34.png';
import page35 from '../assets/book/Brand-Book-35.png';
import page36 from '../assets/book/Brand-Book-36.png';
import page37 from '../assets/book/Brand-Book-37.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #f5f5f5;
  border: 2px solid red; /* Debug border */
`;

const BookContainer = styled.div`
  margin-bottom: 2rem;
  border: 2px solid blue; /* Debug border */
  padding: 2rem;
  background: white;
  
  @media (max-width: 768px) {
    transform: scale(0.8);
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    transform: scale(0.6);
    margin-bottom: 0.5rem;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const NavButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background: #555;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const PageNumber = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestText = styled.h1`
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const FlipBook: React.FC = () => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(2); // Start at page 2
  
  console.log('FlipBook component rendering'); // Debug log
  
  const pages = [
    page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
    page11, page12, page13, page14, page15, page16, page17, page18, page19, page20,
    page21, page22, page23, page24, page25, page26, page27, page28, page29, page30,
    page31, page32, page33, page34, page35, page36, page37
  ];

  console.log('Pages array length:', pages.length); // Debug log

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handlePageChange = (e: any) => {
    setCurrentPage(e.data + 1);
  };

  return (
    <Container>
      <BookContainer>
        <TestText>FlipBook Component is Working!</TestText>
        <p>Total pages: {pages.length}</p>
        <p>Current page: {currentPage}</p>
        {/* Temporarily comment out the flipbook to test basic rendering */}
        {/* <HTMLFlipBook
          ref={bookRef}
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          showCover={true}
          flippingTime={1000}
          usePortrait={false}
          startPage={1} // 0-indexed, so 1 = page 2
          drawShadow={true}
          className="demo-book"
          style={{
            margin: '0 auto'
          }}
          onFlip={handlePageChange}
          onInit={() => {
            setCurrentPage(2);
          }}
        >
          {pages.map((page, index) => (
            <Page key={index} className="demoPage">
              <img src={page} alt={`Page ${index + 1}`} />
            </Page>
          ))}
        </HTMLFlipBook> */}
      </BookContainer>
      
      <NavigationContainer>
        <NavButton onClick={handlePrev} disabled={currentPage <= 1}>
          Previous
        </NavButton>
        <PageNumber>
          Page {currentPage} of {pages.length}
        </PageNumber>
        <NavButton onClick={handleNext} disabled={currentPage >= pages.length}>
          Next
        </NavButton>
      </NavigationContainer>
    </Container>
  );
};

export default FlipBook; 