"use client";

import { useState } from "react";

export default function HabitForm({ habit }) {
  const isCreateForm = !habit;

  const [title, setTitle] = useState(habit?.title ?? "");
  const [color, setColor] = useState(habit?.color ? `#${habit.color}` : "#000000");
  const [type, setType] = useState(habit?.type ?? "");

  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Please, check the mandatory input fields and corresponding types.");

  const upsertHabit = ({
    title, color, type
  }) => {
    setDisplayError(false);
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      title,
      color: color.slice(1),
      type,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
      redirect: 'follow',
    };

    const path = isCreateForm ? "/api/habits" : "/api/habits/:id"

    fetch(path, requestOptions)
      .then((response) => {
        if (response.redirected) {          
          const redirectUrl = response.url;

          window.location.href = redirectUrl;
        }

        if (response.status >= 200 && response.status < 300) {
          window.location.href = '/';
        }

        return response.json()
      })
      .then((result) => {
        setDisplayError(true);
        setErrorMessage(result.message.join('; '));
      })
      .catch((_err) => {
        setDisplayError(true);
        setDisplayError("We're having problems communicating with our backend services. Please, try again later");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!title || !type || !color) {
      setDisplayError(true);
      return;
    }

    upsertHabit({
      title, color, type
    });
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
          <label htmlFor="titleInput" className="form-label">
            Title:
            <input
              type="text"
              className="form-control"
              id="titleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="typeSelect" className="form-label">
            Type:
            <select
              id="typeSelect"
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select a type</option>
              <option value="Timer">Timer</option>
              <option value="Binary">Binary</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="colorPicker" className="form-label">
            Color:
            <input
              type="color"
              id="colorPicker"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
