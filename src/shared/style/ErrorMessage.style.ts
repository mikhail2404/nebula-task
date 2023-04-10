import styled from "styled-components";

interface ErrorMessageProps {
  textAlign?: string;
}
export const ErrorMessage = styled.p<ErrorMessageProps>`
  color: #ff0000;
  text-align: ${({ textAlign }) => textAlign || "left"};
`;
