import React from "react";
import { useSelector } from "react-redux";

import { relevantSurveyDataComponents } from "../../../../data/relevantSurveyDataComponents";
import { selectUserAnswers } from "../../../../store/survey/selectors";
import { addPreviousAnswersToQuestion } from "../../../../utils/addPreviousAnswersToQuestion";
import Answers from "../Answers/Answers";

import { QuestionText, QuestionWrapper } from "./Question.style";

interface QuestionProps {
  currentQuestion: Question;
}
const Question: React.FC<QuestionProps> = ({ currentQuestion }) => {
  const userAnswers = useSelector(selectUserAnswers);

  // reference to components that don't match general template
  const Component =
    currentQuestion.component &&
    relevantSurveyDataComponents[currentQuestion.component];

  return (
    <>
      {Component ? (
        <Component />
      ) : (
        <QuestionWrapper>
          <QuestionText>
            {addPreviousAnswersToQuestion(currentQuestion.text!, userAnswers)}
          </QuestionText>
          {currentQuestion.answers && (
            <Answers answers={currentQuestion.answers} />
          )}
        </QuestionWrapper>
      )}
    </>
  );
};

export default Question;
