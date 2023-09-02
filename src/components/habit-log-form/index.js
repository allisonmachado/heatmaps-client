"use client";

import { useAuthForm } from "@/hooks/use-auth-form";
import { useState } from "react";
import BaseForm from "../form";
import { convertHoursToMinutes, convertMinutesToHours } from "@/utils/time";

export default function HabitLogForm({ habitId, habitType, date }) {
  const [minuteTimerValue, setMinuteTimerValue] = useState("");
  const [hourTimerValue, setHourTimerValue] = useState("");

  const { submitForm, ...visualProps } = useAuthForm();

  const setTimerValue = (input, unit) => {
    if (input === "") {
      setMinuteTimerValue("");
      setHourTimerValue("");
      return;
    }

    const value = parseFloat(input);

    if (isNaN(value)) {
      return;
    }

    if (unit === "minute") {
      setMinuteTimerValue(value.toString());
      setHourTimerValue(convertMinutesToHours(value).toString());
      return;
    }

    if (unit === "hour") {
      setHourTimerValue(value.toString());
      setMinuteTimerValue(convertHoursToMinutes(value).toString());
      return;
    }

    throw new Error(`Invalid unit ${unit}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      requestPath: `/api/habits/${habitId}/logs`,
      requestMethod: "POST",
      requestBody: {
        type: habitType,
        day: date,
        ...(habitType === "Timer"
          ? { timerValue: parseInt(minuteTimerValue) }
          : {}),
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
          <>
            <div>
              <label htmlFor="minuteTimerInput" className="form-label">
                *Timer in minutes:
                <input
                  id="minuteTimerInput"
                  type="number"
                  value={minuteTimerValue}
                  onChange={(e) => setTimerValue(e.target.value, "minute")}
                  className="form-control"
                />
              </label>
            </div>
            <div>
              <label htmlFor="hourTimerInput" className="form-label">
                *Timer in hours:
                <input
                  id="hourTimerInput"
                  type="number"
                  value={hourTimerValue}
                  onChange={(e) => setTimerValue(e.target.value, "hour")}
                  className="form-control"
                />
              </label>
            </div>
          </>
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
