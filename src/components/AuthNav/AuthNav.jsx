import React from 'react';
import { AuthBtn, AuthLink, AuthWrap } from './AuthNav.styled';

function AuthNav() {
  return (
    <AuthWrap>
      <AuthBtn size="small">
        <AuthLink to="/register">Register</AuthLink>
      </AuthBtn>
      <AuthBtn size="small">
        <AuthLink to="/login">Log In</AuthLink>
      </AuthBtn>
    </AuthWrap>
  );
}

export default AuthNav;
