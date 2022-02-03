import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 1100px;
  background: ${({ lightBg }) => (lightBg ? "#2a2a2a" : "#1a1a1a")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 900px;
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  padding: 25px;
  color: #f7efdf;
  background-color: #5e4cd6;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #5e4cd6;
  gap: 20px;

  @media (max-width: 600px) {
    width: 300px;
    height: 600px;
  }
`;
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #f7efdf;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
