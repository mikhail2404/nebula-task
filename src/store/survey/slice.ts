import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { surveyData } from "../../data/surveyData";
import Question from "../../pages/Survey/components/Question/Question";
import { getAstrologicalSign } from "../../utils/getAstrologicalSign";

import { SurveySliceState } from "./types";

const initialState: SurveySliceState = {
  questions: surveyData,
  userAnswers: [],
  currentQuestion: null,
  userAstrologicalSign: null
};

const SurveySlice = createSlice({
  name: "Survey",
  initialState,
  reducers: {
    setCurrentQuestion(state, action: PayloadAction<Question>) {
      state.currentQuestion = action.payload;
    },
    saveUserAnswer(state, action: PayloadAction<UserAnswer>) {
      const { id, value } = action.payload;
      // Check if an userAnswer object with the same id already exists
      const previousAnswer = state.userAnswers.find(
        (userAnswer) => userAnswer.id === id
      );

      if (previousAnswer) {
        // Update the value field of the existing userAnswer object
        state.userAnswers = state.userAnswers.map((userAnswer) => {
          if (userAnswer.id === id) {
            return { ...userAnswer, value };
          }

          return userAnswer;
        });
      } else {
        // Add the new userAnswer object to the userAnswers array
        state.userAnswers.push({ id, value });
      }
    },
    setUserAstrologicalSign(
      state,
      action: PayloadAction<{ day: number; month: number }>
    ) {
      const { day, month } = action.payload;

      state.userAstrologicalSign = getAstrologicalSign(day, month);
    }
  }
});

export const { setCurrentQuestion, saveUserAnswer, setUserAstrologicalSign } =
  SurveySlice.actions;

export default SurveySlice.reducer;
