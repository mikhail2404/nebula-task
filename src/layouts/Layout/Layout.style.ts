import styled from "styled-components";

import { device } from "../../shared/style/breakpoints";

interface LayoutWrapperProps {
  mode: Mode;
}
export const LayoutWrapper = styled.div<LayoutWrapperProps>`
  background: ${(props) =>
    props.mode === "light"
      ? "#FFF0F0"
      : "linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)"};
  color: ${(props) => (props.mode === "light" ? "#4F4F4F" : "#FBFBFF")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileM} {
    padding: 0 0.9375rem 0.8125rem 0.9375rem;
  }
`;

export const MainWrapper = styled.main`
  position: relative;
  flex-grow: 2;
  width: 20.625rem;
`;
