import {
  BackLink,
  BackLinkBtn,
  NotFoundMessage,
  NotFoundTitle,
  NotFoundWrapper,
} from './NotFound.styled';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>
        Oops! The page you're looking for does not exist.
      </NotFoundMessage>
      <BackLinkBtn>
        <BackLink to="/">Go back to the home page</BackLink>
      </BackLinkBtn>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
