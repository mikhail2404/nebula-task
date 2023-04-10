import React from "react";

import DateOfBirthSelector from "../components/DateOfBirthSelector/DateOfBirthSelector";

interface RelevantSurveyDataComponents {
  [key: string]: React.FC;
}

//object with components from surveyData and corresponding relevant link to them
export const relevantSurveyDataComponents: RelevantSurveyDataComponents = {
  DateOfBirthSelector: DateOfBirthSelector
};
