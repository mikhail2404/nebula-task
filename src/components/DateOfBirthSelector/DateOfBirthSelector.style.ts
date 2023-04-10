import styled from "styled-components";

import arrowDown from "../../assets/icons/arrow-down.svg";
import { device } from "../../shared/style/breakpoints";

export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
`;

export const Selector = styled.select`
  width: 100%;
  border: 1px solid #c6c6c6;
  border-radius: 20px;
  padding: 0.5625rem 1.125rem;
  font-size: var(--font-size-14px);
  line-height: 1.25rem;

  outline: none;
  appearance: none;
  background: url(${arrowDown}) right 0.75rem center no-repeat transparent;
`;

export const QuestionText = styled.h1`
  margin-top: 1.875rem;
  margin-bottom: 2rem;

  @media ${device.mobileM} {
    margin-top: 1.25rem;
    margin-bottom: 3rem;
  }
`;
