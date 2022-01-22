import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 48px;
  background: ${({ primary }) => (primary ? "#ff437b" : "#f6efde")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#f6efde" : "#ff437b")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ? "#ff437b" : "#f6efde")};
    background: ${({ primary }) => (primary ? "#f6efde" : "#ff437b")};
  }
`;
