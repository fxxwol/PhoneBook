import React from 'react';
import { AuthBtn, AuthLink, AuthWrap } from './AuthNav.styled';

function AuthNav() {
  return (
    <AuthWrap>
      <AuthBtn size="small">
        <AuthLink to="/register">Sign up</AuthLink>
      </AuthBtn>
      <AuthBtn size="small">
        <AuthLink to="/login">Sign in</AuthLink>
      </AuthBtn>
    </AuthWrap>
  );
}

export default AuthNav;
