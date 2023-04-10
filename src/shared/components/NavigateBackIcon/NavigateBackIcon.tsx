import React from "react";

import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrow-left.svg";
import useNavigateBack from "../../../hooks/useNavigateBack";

import { Wrapper } from "./NavigateBackIcon.style";

const NavigateBackIcon: React.FC = () => {
  const navigateBack = useNavigateBack();

  return (
    <Wrapper onClick={navigateBack}>
      <ArrowLeft />
    </Wrapper>
  );
};

export default NavigateBackIcon;
