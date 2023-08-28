"use client";

import {
  COMMUNICATION_ERROR_MESSAGE,
  DEFAULT_FORM_ERROR_MESSAGE,
} from "@/utils/constants";
import { useState, useEffect } from "react";

export default function HabitForm({ habit }) {
  const isCreateForm = !habit;

  const [title, setTitle] = useState(habit?.title ?? "");
  const [color, setColor] = useState(
    habit?.color ? `#${habit.color}` : "#000000"
  );
  const [type, setType] = useState(habit?.type ?? "");

  const [loading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(DEFAULT_FORM_ERROR_MESSAGE);

  useEffect(() => {
    if (loading) {
      setDisplayError(false);
    }
  }, [loading]);

  const upsertHabit = async ({ title, color, type }) => {
    setLoading(true);
    setDisplayError(false);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      ...(isCreateForm ? {} : { id: habit.id }),
      title,
      color: color.slice(1),
      ...(isCreateForm ? { type } : {}),
    });

    const commonRequestOptions = {
      headers: myHeaders,
      body,
      redirect: "follow",
    };

    const requestOptions = isCreateForm
      ? { ...commonRequestOptions, method: "POST" }
      : { ...commonRequestOptions, method: "PUT" };

    const path = isCreateForm ? "/api/habits" : `/api/habits/${habit.id}`;

    try {
      const response = await fetch(path, requestOptions);

      if (response.redirected) {
        const redirectUrl = response.url;
        return (window.location.href = redirectUrl);
      }

      if (response.status >= 200 && response.status < 300) {
        return (window.location.href = "/");
      }

      const result = await response.json();

      setDisplayError(true);
      setErrorMessage(
        result?.message?.join("; ") || DEFAULT_FORM_ERROR_MESSAGE
      );
      setLoading(false);
    } catch (error) {
      setDisplayError(true);
      setErrorMessage(COMMUNICATION_ERROR_MESSAGE);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !type || !color) {
      setDisplayError(true);
      return;
    }

    upsertHabit({
      title,
      color,
      type,
    });
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
          {isCreateForm && (
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
          )}
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
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Submit
          </button>
        </form>
      )}
    </>
  );
}
