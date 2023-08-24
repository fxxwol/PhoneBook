import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 97px);
`;

export const NotFoundTitle = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #004d99;
`;

export const BackLinkBtn = styled(Button)`
  border: 1px solid;
  border-color: #1f398786;
  &:hover,
  :active,
  :focus {
    border-color: rgba(3, 44, 84, 0.5);
    box-shadow: 0 0 0 1px rgba(3, 44, 84, 0.5);
    color: #002f66;
  }
`;
