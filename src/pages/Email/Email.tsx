import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { emailSchema } from "../../schemas/emailSchema";
import { ErrorMessage } from "../../shared/style/ErrorMessage.style";
import { GradientButton } from "../../shared/style/GradientButton";

import {
  EmailForm,
  EmailHeading,
  EmailInput,
  EmailInputWrapper,
  PrivaceTermsAgreementText
} from "./Email.style";

const Email: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailSchema
      .validate(
        { email },
        {
          abortEarly: false
        }
      )
      .then(() => {
        alert("Form submitted!");
        setEmail("");
      })
      .catch((error) => {
        if (error instanceof Yup.ValidationError) {
          setEmailError(error.message);
        }
      });
  };

  return (
    <EmailForm onSubmit={handleSubmit}>
      <EmailHeading>
        Enter your email to see how you can grow with Nebula
      </EmailHeading>
      <EmailInputWrapper>
        <EmailInput
          type="text"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </EmailInputWrapper>
      <p>
        *Nebula does not share any personal information.
        <br /> We'll email you a copy of your program for <br /> convenient
        access.
      </p>
      <PrivaceTermsAgreementText>
        By continuing I agree with{" "}
        <Link to="#">
          Privacy
          <br /> policy
        </Link>{" "}
        and <Link to="#">Terms of use</Link>.
      </PrivaceTermsAgreementText>
      <GradientButton marginBottom="3.1875rem">Continue</GradientButton>
    </EmailForm>
  );
};

export default Email;
