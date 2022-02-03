import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 48px;
  background: ${({ primary }) => (primary ? "#8991ff" : "#5E4CD6")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#8991ff")};
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
    color: ${({ dark }) => (dark ? "#ffffff" : "#ffffff")};
    background: ${({ primary }) => (primary ? "#4d3ac5" : "#8991ff")};
  }
`;

export const ClearButton = styled.button`
  border-radius: 48px;
  background: ${({ primary }) => (primary ? "#8991ff" : "#5E4CD6")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#ffffff" : "#8991ff")};
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
    color: ${({ dark }) => (dark ? "#ffffff" : "#ffffff")};
    background: ${({ primary }) => (primary ? "#4d3ac5" : "#8991ff")};
  }
`;
