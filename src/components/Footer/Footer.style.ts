import styled from "styled-components";

import { device } from "../../shared/style/breakpoints";

export const FooterWrapper = styled.footer`
  flex-grow: 2;

  p {
    line-height: 1.0625rem;
  }

  @media ${device.mobileM} {
    flex-grow: inherit;
  }
`;

export const PrivaceTermsAgreementText = styled.p`
  margin-bottom: 0.875rem;

  @media ${device.mobileM} {
    margin-bottom: 0.375rem;
  }
`;
export const Address = styled.p`
  text-align: center;
`;
