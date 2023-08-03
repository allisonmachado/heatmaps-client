"use client";

import { useState } from "react";

export default function HabitForm({ habit }) {
  const isCreate = !!habit;
  const isEdit = !isCreate;

  const [title, setTitle] = useState(habit?.title ?? "");
  const [color, setColor] = useState(habit?.color ?? "777000");
  const [type, setType] = useState(habit?.type ?? "");
  const [displayError, setDisplayError] = useState(false);

  const upsertHabit = (habit) => {
    console.log('upsertHabit', habit);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if the mandatory fields are filled
    if (!title || !type) {
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
          Please, check the mandatory input fields and corresponding types.
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
