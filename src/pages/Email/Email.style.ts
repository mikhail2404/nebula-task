import styled from "styled-components";

import { device } from "../../shared/style/breakpoints";

export const EmailForm = styled.form`
  text-align: center;
  margin-top: 1.25rem;

  @media ${device.mobileM} {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const EmailHeading = styled.h1`
  font-size: var(--font-size-18px);
  margin-bottom: 1.875rem;
`;

export const EmailInputWrapper = styled.div`
  margin-bottom: 1.875rem;
`;
export const EmailInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #c6c6c6;
  border-radius: 20px;
  padding: 0.5625rem 2.25rem 0.5625rem 1rem;
  font-size: var(--font-size-14px);
  line-height: 1.25rem;
  background: transparent;
`;

export const PrivaceTermsAgreementText = styled.p`
  font-size: var(--font-size-12px);
  line-height: 1.0625rem;
  margin-top: 1.25rem;
  margin-bottom: 3.125rem;

  a {
    color: #8e8cf0;
  }
`;
