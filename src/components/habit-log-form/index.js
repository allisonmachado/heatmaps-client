"use client";

import { useState } from "react";

export default function HabitLogForm({ habitId, habitType, date }) {
  const [timerValue, setTimerValue] = useState(null);

  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Please, check the mandatory input fields and corresponding types."
  );

  const logHabit = ({ habitId, habitType, timerValue, date }) => {
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

    fetch(path, requestOptions)
      .then((response) => {
        if (response.redirected) {
          const redirectUrl = response.url;

          window.location.href = redirectUrl;
        }

        if (response.status >= 200 && response.status < 300) {
          return (window.location.href = `/habits/${habitId}/`);
        }

        return response.json();
      })
      .then((result) => {
        if (result?.message) {
          setDisplayError(true);
          setErrorMessage(result.message.join("; "));
        }
      })
      .catch((_err) => {
        setDisplayError(true);
        setDisplayError(
          "We're having problems communicating with our backend services. Please, try again later"
        );
      });
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
    </>
  );
}
