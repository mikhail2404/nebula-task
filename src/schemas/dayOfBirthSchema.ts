import * as Yup from "yup";

export const dayOfBirthSchema = Yup.object().shape({
  day: Yup.string().required("Please select a day"),
  month: Yup.string().required("Please select a month"),
  year: Yup.string().required("Please select a year")
});
