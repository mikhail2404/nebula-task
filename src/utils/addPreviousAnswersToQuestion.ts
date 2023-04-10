export const addPreviousAnswersToQuestion = (
  questionText: string,
  userAnswers: UserAnswer[]
) => {
  let transformedQuestionText = questionText;

  //if question text doesn't include previous answers return initial question text
  const includesPreviousAnswers = /\{\d+\}/.test(transformedQuestionText);

  if (!includesPreviousAnswers) {
    return transformedQuestionText;
  }
  userAnswers.forEach((userAnswer) => {
    transformedQuestionText = transformedQuestionText.replace(
      `{${userAnswer.id}}`,
      userAnswer.value.toLowerCase()
    );
  });

  // makes the first letter of the first word capitalized in the case answerId replaced by the user  previous answer value is the first word in question text
  transformedQuestionText =
    transformedQuestionText.charAt(0).toUpperCase() +
    transformedQuestionText.slice(1);

  return transformedQuestionText;
};
