import styled from '@emotion/styled';
import { ListItem } from '@mui/material';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Item = styled(ListItem)`
  width: 500px;
  height: 60px;
  gap: 10px;
  border: 1px solid;
  border-color: #1f398786;
  background-color: transparent;
  padding: 10px;
  justify-content: space-between;
  border-radius: 4px;
`;

export const ContactsWrapper = styled.div`
  margin: 100px auto;
  width: fit-content;

`
export const HelperText = styled.h2`
  color: rgba(80, 78, 78, 0.76);
`;
