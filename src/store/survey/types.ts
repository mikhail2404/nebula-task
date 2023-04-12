export interface SurveySliceState {
  questions: Question[];
  userAnswers: UserAnswer[];
  currentQuestion: Question | null;
  userAstrologicalSign: string | null;
}
