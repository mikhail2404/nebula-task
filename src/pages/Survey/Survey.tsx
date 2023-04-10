import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ErrorMessage } from "../../shared/style/ErrorMessage.style";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { selectQuestions } from "../../store/survey/selectors";
import { setCurrentQuestion } from "../../store/survey/slice";

import Question from "./components/Question/Question";

const Survey: React.FC = () => {
  const { id } = useParams();
  const questions = useSelector(selectQuestions);
  const dispatch = useAppDispatch();
  const currentQuestion =
    id && questions.find((question) => question.id === +id);

  useEffect(() => {
    if (currentQuestion) {
      dispatch(setCurrentQuestion(currentQuestion));
    }
  }, [id]);

  if (!currentQuestion) {
    return <ErrorMessage textAlign="center">Something went wrong</ErrorMessage>;
  }

  return (
    <>
      <Question currentQuestion={currentQuestion} />
    </>
  );
};

export default Survey;
