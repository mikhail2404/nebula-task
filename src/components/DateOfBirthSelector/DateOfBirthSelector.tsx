import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

import useNavigateFurther from "../../hooks/useNavigateFurther";
import { dayOfBirthSchema } from "../../schemas/dayOfBirthSchema";
import { ErrorMessage } from "../../shared/style/ErrorMessage.style";
import { GradientButton } from "../../shared/style/GradientButton";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { selectCurrentQuestion } from "../../store/survey/selectors";
import {
  saveUserAnswer,
  setUserAstrologicalSign
} from "../../store/survey/slice";
import { calculateAge } from "../../utils/calculateAge";

import {
  QuestionText,
  Selector,
  SelectorWrapper
} from "./DateOfBirthSelector.style";

interface Date {
  day: string;
  month: string;
  year: string;
}

const dateFields = [
  { label: "Day", name: "day", length: 31 },
  { label: "Month", name: "month", length: 12 },
  { label: "Year", name: "year", length: 120 }
];

const DateOfBirthSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion)!;
  const navigateFurther = useNavigateFurther(
    `/survey/${currentQuestion?.id + 1}`
  );

  const [date, setDate] = useState<Date>({
    day: "",
    month: "",
    year: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    day: "",
    month: "",
    year: ""
  });

  const handleDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setDate({ ...date, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const selectDateOfBirth = () => {
    dayOfBirthSchema
      .validate(date, { abortEarly: false })
      .then(() => {
        dispatch(
          saveUserAnswer({
            id: currentQuestion?.id,
            value: calculateAge(+date.day, +date.month, +date.year).toString()
          })
        );
        dispatch(
          setUserAstrologicalSign({ day: +date.day, month: +date.month })
        );
        navigateFurther();
      })
      .catch((error) => {
        if (error instanceof Yup.ValidationError) {
          const newErrors: { [key: string]: string } = {};

          error.inner.forEach((e) => {
            newErrors[e.path as keyof Date] = e.message;
          });
          setErrors(newErrors);
        }
      });
  };

  return (
    <>
      <QuestionText>What’s your date of birth?</QuestionText>
      <SelectorWrapper>
        {dateFields.map((field) => (
          <div key={field.name}>
            <Selector
              name={field.name}
              value={date[field.name as keyof Date]}
              onChange={handleDateChange}>
              <option value="">{field.label}</option>
              {Array.from({ length: field.length }, (_, i) =>
                field.name === "year" ? new Date().getFullYear() - i : i + 1
              ).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Selector>
            {errors[field.name] && (
              <ErrorMessage>{errors[field.name]}</ErrorMessage>
            )}
          </div>
        ))}
      </SelectorWrapper>
      <GradientButton onClick={selectDateOfBirth}>Next</GradientButton>
    </>
  );
};

export default DateOfBirthSelector;
