import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { selectCurrentQuestion } from "../../store/survey/selectors";

import { LayoutWrapper, MainWrapper } from "./Layout.style";

interface LayoutProps {
  mode: Mode;
}

const Layout: React.FC<LayoutProps> = ({ mode }) => {
  const currentQuestion = useSelector(selectCurrentQuestion);

  const isLandingPage = currentQuestion?.id === 1;

  return (
    <LayoutWrapper mode={mode}>
      <Header isLandingPage={isLandingPage} mode={mode} />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer isLandingPage={isLandingPage} />
    </LayoutWrapper>
  );
};

export default Layout;
