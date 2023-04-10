import React from "react";
import { useSelector } from "react-redux";

import useNavigateFurther from "../../../../hooks/useNavigateFurther";
import { useAppDispatch } from "../../../../store/hooks/useAppDispatch";
import { selectCurrentQuestion } from "../../../../store/survey/selectors";
import { saveUserAnswer } from "../../../../store/survey/slice";

import { AnswerButton } from "./Answer.style";

interface AnswerProps {
  answer: Answer;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  //when the user selects an answer, he is redirected to the next question according to the answer or summary
  const nextPage = answer.summary
    ? `/summary/${answer.summary}`
    : `/survey/${answer.next!.toString()}`;
  const navigateFurther = useNavigateFurther(nextPage);
  const dispatch = useAppDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion)!;

  const selectAnswer = () => {
    dispatch(saveUserAnswer({ id: currentQuestion.id, value: answer.value }));
    navigateFurther();
  };

  return (
    <li>
      <AnswerButton onClick={selectAnswer}>{answer.text}</AnswerButton>
    </li>
  );
};

export default Answer;
