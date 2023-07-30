"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const router = useRouter();

  const login = ({ email, password }) => {
    setDisplayError(false);
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch("/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result.accessToken) {
          setDisplayError(true);
          return;
        }
        window.location = "/";
      })
      .catch((_err) => setDisplayError(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      email: username,
      password,
    });
  };

  return (
    <>
      {displayError && (
        <div className="alert alert-warning" role="alert">
          Invalid username or password
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput" className="form-label">
            Username:
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
    </>
  );
}
