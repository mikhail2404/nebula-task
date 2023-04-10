import React from "react";
import { useSelector } from "react-redux";

import { Img } from "../../../../shared/style/UI/Img.style";
import { selectUserAstrologicalSign } from "../../../../store/survey/selectors";
import { replaceWordWithElement } from "../../../../utils/replaceWordWithElement";

import {
  SummaryDescription,
  SummaryDetailsWrapper,
  UserAstrologicalSign
} from "./SummaryDetails.style";

interface SummaryDetailsProps {
  currentSummary: SummaryData;
}
const SummaryDetails: React.FC<SummaryDetailsProps> = ({ currentSummary }) => {
  const userAstrologicalSign = useSelector(selectUserAstrologicalSign)!;

  const transformedDescription = replaceWordWithElement(
    currentSummary.description,
    "{Zodiac}",
    userAstrologicalSign,
    UserAstrologicalSign
  );

  return (
    <SummaryDetailsWrapper>
      {currentSummary && (
        <>
          <Img
            src={currentSummary.img}
            alt={"summary"}
            width="15.625rem"
            height="15.625rem"
          />
          <SummaryDescription>{transformedDescription}</SummaryDescription>
        </>
      )}
    </SummaryDetailsWrapper>
  );
};

export default SummaryDetails;
