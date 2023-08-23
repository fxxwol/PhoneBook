import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AuthWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const AuthLink = styled(NavLink)`
    color: #ffffff;
    font-size: 16px;
`

export const AuthBtn = styled(Button)`
  border: 1px solid;
  border-color: #ffffff;
  text-transform: none;
  &:hover,
  :active,
  :focus {
    border-color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff;
  }
`;