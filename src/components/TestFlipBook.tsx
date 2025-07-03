import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  z-index: 9999;
  position: relative;
`;

const TestFlipBook: React.FC = () => {
  console.log('TestFlipBook is rendering');
  
  return (
    <TestContainer>
      <div>
        <h1>TEST FLIPBOOK</h1>
        <p>If you can see this, the component is working!</p>
      </div>
    </TestContainer>
  );
};

export default TestFlipBook; 