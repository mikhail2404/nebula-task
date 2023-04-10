import React from "react";
import { Link } from "react-router-dom";

import {
  Address,
  FooterWrapper,
  PrivaceTermsAgreementText
} from "./Footer.style";

interface FooterProps {
  isLandingPage: boolean;
}
const Footer: React.FC<FooterProps> = ({ isLandingPage }) => {
  return (
    <FooterWrapper>
      {isLandingPage && (
        <PrivaceTermsAgreementText>
          By continuing I agree with <Link to="#">Privacy policy</Link> and{" "}
          <Link to="#">Terms of use</Link>.
        </PrivaceTermsAgreementText>
      )}
      <Address>
        {isLandingPage && (
          <span>
            Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012,
            <br />
          </span>
        )}{" "}
        Nicosia, Cyprus
      </Address>
    </FooterWrapper>
  );
};

export default Footer;
