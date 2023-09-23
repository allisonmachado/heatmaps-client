"use client";

import { useState } from "react";
import BaseForm from "../form";
import { useAuthForm } from "@/hooks/use-auth-form";

import ReCAPTCHA from "react-google-recaptcha";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const { submitForm, ...visualProps } = useAuthForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      requestPath: `/api/login`,
      requestMethod: "POST",
      requestBody: {
        email,
        password,
        recaptchaToken,
      },
      successPath: `/`,
      successMessage: false,
    });
  };

  return (
    <BaseForm {...visualProps}>
      <form>
        <div>
          <label htmlFor="emailInput" className="form-label">
            Email:
            <input
              type="text"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="passwordInput" className="form-label">
            Password:
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <ReCAPTCHA
          sitekey="6LfF5gAoAAAAAHPxOYtRBJ-TBw-FGjxK3lAy6Bvd"
          onChange={(token) => setRecaptchaToken(token)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </BaseForm>
  );
}
