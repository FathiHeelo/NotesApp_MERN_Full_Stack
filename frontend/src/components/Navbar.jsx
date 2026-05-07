import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Notes App</Link>
      </div>
      <Link className="btn btn-primary" to="/create">
        Create Note
      </Link>
    </nav>
  );
}
