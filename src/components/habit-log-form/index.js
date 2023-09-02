"use client";

import { useAuthForm } from "@/hooks/use-auth-form";
import { useState } from "react";
import BaseForm from "../form";

export default function HabitLogForm({ habitId, habitType, date }) {
  const [timerValue, setTimerValue] = useState("");

  const { submitForm, ...visualProps } = useAuthForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      requestPath: `/api/habits/${habitId}/logs`,
      requestMethod: "POST",
      requestBody: {
        type: habitType,
        day: date,
        ...(habitType === "Timer" ? { timerValue: parseInt(timerValue) } : {}),
      },
      successPath: `/habits/${habitId}`,
    });
  };

  return (
    <BaseForm {...visualProps}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">
            Confirm tracking date &quot;{date}&quot;?
          </label>
        </div>
        {habitType === "Timer" && (
          <div>
            <label htmlFor="timerInput" className="form-label">
              *Enter timer value:
              <input
                id="timerInput"
                type="number"
                value={timerValue}
                onChange={(e) => setTimerValue(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Yes
        </button>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => history.back()}
        >
          Cancel
        </button>
      </form>
    </BaseForm>
  );
}
