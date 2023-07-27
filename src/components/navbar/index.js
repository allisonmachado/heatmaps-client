import "./main.css";

export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">{title}</span>
        <span className="nav-item">Hello Allison</span>
        <span className="nav-item">Sign Out</span>
      </div>
    </nav>
  );
}
