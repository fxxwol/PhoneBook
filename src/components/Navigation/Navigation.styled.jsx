import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  color: #ffffff;
  font-size: 18px;
  display: inline-block;
  transition: all 250ms ease-in-out 0ms;

  &:hover
  {
    transform: scale(1.1);
  }
`;