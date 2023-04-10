import styled from "styled-components";

import { device } from "../../shared/style/breakpoints";

interface HeaderWrapperProps {
  mode: Mode;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  padding: 1.1875rem 0;
  color: ${(props) => (props.mode === "light" ? "#333333" : "#FAFAFA")};
  display: flex;
  width: 100%;

  @media ${device.mobileM} {
    padding: 0.875rem 0;
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;
  text-align: center;
  user-select: none;
`;
