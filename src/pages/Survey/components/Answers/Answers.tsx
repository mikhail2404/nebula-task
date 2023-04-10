import React from "react";

import Answer from "../Answer/Answer";

import { AnswersList } from "./Answers.style";

interface AnswersProps {
  answers: Answer[];
}

const Answers: React.FC<AnswersProps> = ({ answers }) => {
  return (
    <AnswersList>
      {answers.map((answer) => (
        <Answer key={answer.text} answer={answer} />
      ))}
    </AnswersList>
  );
};

export default Answers;
