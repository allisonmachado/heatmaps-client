"use client";

import {
  COMMUNICATION_ERROR_MESSAGE,
  DEFAULT_FORM_ERROR_MESSAGE,
} from "@/utils/constants";
import { useEffect, useState } from "react";

export default function HabitLogForm({ habitId, habitType, date }) {
  const [timerValue, setTimerValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_FORM_ERROR_MESSAGE);

  useEffect(() => {
    if (loading) {
      setDisplayError(false);
    }
  }, [loading]);

  const logHabit = async ({ habitId, habitType, timerValue, date }) => {
    setLoading(true);
    setDisplayError(false);

    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      type: habitType,
      day: date,
      ...(habitType === "Timer" ? { timerValue: parseInt(timerValue) } : {}),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
      redirect: "follow",
    };

    const path = `/api/habits/${habitId}/logs`;

    try {
      const response = await fetch(path, requestOptions);

      if (response.redirected) {
        const redirectUrl = response.url;
        return (window.location.href = redirectUrl);
      }

      if (response.status >= 200 && response.status < 300) {
        return (window.location.href = `/habits/${habitId}/`);
      }

      const result = await response.json();

      setDisplayError(true);
      setErrorMessage(
        result?.message?.join("; ") || DEFAULT_FORM_ERROR_MESSAGE
      );
      setLoading(false);
    } catch (error) {
      setDisplayError(true);
      setDisplayError(COMMUNICATION_ERROR_MESSAGE);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (habitType === "Timer" && !timerValue) {
      setDisplayError(true);
      return;
    }

    logHabit({ habitId, habitType, timerValue, date });
  };

  return (
    <>
      {displayError && (
        <div className="alert alert-warning" role="alert">
          {errorMessage}
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </>
  );
}
