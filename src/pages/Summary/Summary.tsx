import React from "react";
import { useParams } from "react-router-dom";

import { summaryData } from "../../data/summaryData";
import { ErrorMessage } from "../../shared/style/ErrorMessage.style";

import NavigationButtons from "./components/NavigationButonns/NavigationButtons";
import SummaryDetails from "./components/SummaryDetails/SummaryDetails";

const Summary: React.FC = () => {
  const { id } = useParams()!;

  const currentSummary =
    id && summaryData.find((summary) => summary.id === +id);

  if (!currentSummary) {
    return <ErrorMessage textAlign="center">Something went wrong</ErrorMessage>;
  }

  return (
    <>
      <SummaryDetails currentSummary={currentSummary} />
      <NavigationButtons />
    </>
  );
};

export default Summary;
