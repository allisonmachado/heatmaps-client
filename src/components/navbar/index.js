import Link from "next/link";
import "./main.css";
import { cookies } from "next/headers";
import { decode } from "jsonwebtoken";

export default async function Navbar({ title }) {
  const authToken = cookies().get("auth-token")?.value;

  const userInfo = authToken ? decode(authToken) : {};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/">
          <span className="navbar-brand">{title}</span>
        </Link>

        {authToken && (
          <>
            <span className="nav-item">Hi, {userInfo.username}</span>
            <a href="/api/logout">
              <span className="navbar-brand">Sign Out</span>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
