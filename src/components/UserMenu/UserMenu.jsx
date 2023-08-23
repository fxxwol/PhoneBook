import { AuthBtn, AuthLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { UserEmail, UserWrapper } from './UserMenu.styled';

function UserMenu() {
    const {user: {email}} = useAuth()
  return (
    <UserWrapper>
      <UserEmail>{email}</UserEmail>
      <AuthBtn>
        <AuthLink>Logout</AuthLink>
      </AuthBtn>
    </UserWrapper>
  );
}

export default UserMenu