"use client";

import { useState } from "react";

export default function HabitLogForm({ habitId, habitType, date }) {
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Please, check the mandatory input fields and corresponding types."
  );

  const logHabit = (args) => {
    console.log({ args });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (false) {
      setDisplayError(true);
      return;
    }

    logHabit();
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
