import React from "react";

import logoBlack from "../../assets/icons/logo-black.svg";
import logoWhite from "../../assets/icons/logo-white.svg";
import NavigateBackIcon from "../../shared/components/NavigateBackIcon/NavigateBackIcon";
import { Img } from "../../shared/style/UI/Img.style";

import { HeaderWrapper, LogoWrapper } from "./Header.style";

interface HeaderProps {
  mode: Mode;
  isLandingPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ mode, isLandingPage }) => {
  return (
    <HeaderWrapper mode={mode}>
      {!isLandingPage && <NavigateBackIcon />}
      {mode === "light" ? (
        <LogoWrapper>
          <Img src={logoBlack} alt="Logo" width="0.9375rem" height="1rem" />
        </LogoWrapper>
      ) : (
        <LogoWrapper>
          <Img src={logoWhite} alt="Logo" width="0.9375rem" height="1rem" />
        </LogoWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
