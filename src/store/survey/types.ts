import Question from "../../pages/Survey/components/Question/Question";

export interface SurveySliceState {
  questions: Question[];
  userAnswers: UserAnswer[];
  currentQuestion: Question | null;
  userAstrologicalSign: string | null;
}
