import React, { useState, useEffect } from 'react';
import {
  BlinkCaret,
  HomeTitle,
  HomeWrapper,
  TextWrapper,
  TypingText,
} from './HomeWelcoming.styled';

const initialMessage =
  "Hey there! I'm your virtual PhoneBook assistant. To access your contacts, please log in or create an account. If you're new here, I can't wait to assist you in managing your contacts efficiently!";
function HomeWelcoming() {
  const [isTyping, setIsTyping] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(initialMessage);

  useEffect(() => {
    let typingTimeout;

    const typeMessage = (message, index) => {
      if (index <= message.length) {
        setDisplayMessage(message.substring(0, index));
        typingTimeout = setTimeout(() => {
          typeMessage(message, index + 1);
        }, 50);
      } else {
        clearTimeout(typingTimeout);
        setTimeout(() => {
          setIsTyping(false);
        }, 250);
      }
    };

    typeMessage(initialMessage, 0);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
   <HomeWrapper>
      <TextWrapper>
        <HomeTitle>Unlock Your PhoneBook</HomeTitle>
        <TypingText>
          {displayMessage}
          {isTyping && <BlinkCaret>|</BlinkCaret>}
        </TypingText>
      </TextWrapper>
   </HomeWrapper>
  );
}

export default HomeWelcoming;
