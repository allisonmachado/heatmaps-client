"use client";

import { useState } from "react";
import BaseForm from "../form";
import { useAuthForm } from "@/hooks/use-auth-form";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { submitForm, ...visualProps } = useAuthForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      requestPath: `/api/login`,
      requestMethod: "POST",
      requestBody: {
        email,
        password,
      },
      successPath: `/`,
    });
  };

  return (
    <BaseForm {...visualProps}>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </BaseForm>
  );
}
