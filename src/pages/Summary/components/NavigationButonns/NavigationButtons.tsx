import React from "react";

import useNavigateBack from "../../../../hooks/useNavigateBack";
import useNavigateFurther from "../../../../hooks/useNavigateFurther";

import {
  NavigateBackButton,
  NavigateFurtherButton,
  NavigationButtonsWrapper
} from "./NavigationButtonsWrapper.style";

const NavigationButtons: React.FC = () => {
  const navigateBack = useNavigateBack();
  const navigateFurther = useNavigateFurther(`/email`);

  return (
    <NavigationButtonsWrapper>
      <NavigateBackButton onClick={navigateBack}>Back</NavigateBackButton>
      <NavigateFurtherButton onClick={navigateFurther}>
        Next
      </NavigateFurtherButton>
    </NavigationButtonsWrapper>
  );
};

export default NavigationButtons;
