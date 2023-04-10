import styled from "styled-components";

import { Button } from "../../../../shared/style/UI/Button.style";

export const AnswerButton = styled(Button)`
  background: #eaeef7;
  padding: 1.375rem;
  border: 1px solid #e0e0e0;
  box-shadow: 2px 2px 6px rgba(84, 60, 151, 0.25);
  font-size: var(--font-size-14px);
  line-height: 1.25rem;
  color: #000000;

  &:active {
    background: var(--gradient-purple);
    color: #fafafa;
  }
`;
