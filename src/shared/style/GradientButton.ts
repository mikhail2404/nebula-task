import styled from "styled-components";

import { Button } from "./UI/Button.style";

interface GradientButtonProps {
  marginBottom?: string;
}

export const GradientButton = styled(Button)<GradientButtonProps>`
  background: var(--gradient-purple);
  color: #ffffff;
  font-size: var(--font-size-18px);
  line-height: 1.3125rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.875rem;

  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};
`;
