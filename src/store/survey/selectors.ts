import { RootState } from "../store";

//selects current question
export const selectCurrentQuestion = (state: RootState) =>
  state.survey.currentQuestion;

//selects user answers
export const selectUserAnswers = (state: RootState) => state.survey.userAnswers;

//selects userAstrologicalSign
export const selectUserAstrologicalSign = (state: RootState) =>
  state.survey.userAstrologicalSign;

//selects all questions
export const selectQuestions = (state: RootState) => state.survey.questions;
