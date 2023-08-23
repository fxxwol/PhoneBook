import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import img from '../../img/homeImg.png';
export const HomeTitle = styled.h2`
  color: #021d38;
  font-size: 40px;
  margin-bottom: 40px;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${img});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const TextWrapper = styled.div`
  margin-top: 100px;
  padding: 40px;
  width: 500px;
  /* background-color: #5b98fb9e; */
  /* box-shadow: 0 4px 6px rgba(15, 3, 146, 0.895); */
  /* border-radius: 8px; */
  /* text-align: left; */
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
