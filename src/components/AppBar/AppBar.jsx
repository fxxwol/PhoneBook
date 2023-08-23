import { useAuth } from 'hooks/useAuth';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { Header, HeaderTitle, NavDiv } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavDiv>
        <HeaderTitle>Phone Book</HeaderTitle>
        <Navigation />
      </NavDiv>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}

export default AppBar;
