import Link from "next/link";
import "./main.css";

export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/"><span className="navbar-brand">{title}</span></Link>
        <span className="nav-item">Hello Allison</span>
        <span className="nav-item">Sign Out</span>
      </div>
    </nav>
  );
}
