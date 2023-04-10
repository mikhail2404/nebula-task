import styled from "styled-components";

import { device } from "../../style/breakpoints";

export const Wrapper = styled.div`
  position: absolute;
  top: 1.1875rem;
  left: 10.3125rem;
  cursor: pointer;

  @media ${device.mobileM} {
    left: 0.9375rem;
    top: 0.875rem;
  }
`;
