import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
export const HomeTitle = styled.h2`
  color: #021d38;
  font-size: 40px;
  margin-bottom: 40px;
  margin-left: auto;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const HomeWrapper = styled.div`
  width: 1000px;
  margin: 100px auto;
  padding: 40px;
  background-color: #5b98fb9e;
  box-shadow: 0 4px 6px rgba(15, 3, 146, 0.895);
  border-radius: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeIn} 1s ease-in;
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const TypingText = styled.p`
  overflow: hidden;
  font-size: 18px;
  font-weight: 600;
  width: 500px;
  color: #021d38;
  animation: ${typingAnimation} 2s steps(40, end);
`;

const blinkCaretAnimation = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #021d38;
  }
`;

export const BlinkCaret = styled.span`
  border-right: 0.15em solid #021d38;
  animation: ${blinkCaretAnimation} 0.75s step-end infinite;
`;

