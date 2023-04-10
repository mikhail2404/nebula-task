import styled from "styled-components";

import { Button } from "../../../../shared/style/UI/Button.style";

export const NavigationButtonsWrapper = styled.div`
  display: flex;
  margin-top: 3.125rem;
  gap: 0.625rem;

  button {
    padding: 0.875rem 0;
    font-size: var(--font-size-18px);
    line-height: 1.3125rem;
  }
`;

export const NavigateBackButton = styled(Button)`
  background: transparent;
  color: #fbfbff;
  border: 1px solid #fbfbff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const NavigateFurtherButton = styled(Button)`
  background: #fbfbff;
  color: #6a3aa2;
`;
