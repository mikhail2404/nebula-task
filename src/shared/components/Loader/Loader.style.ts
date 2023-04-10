import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #767676;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.8s linear infinite;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
