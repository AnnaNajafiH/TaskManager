import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-white text-decoration-none"
        >
          <TiTickOutline
            size={35}
            className="text-warning me-2 completed-icon"
          />
          <span className="fs-4 fw-bold completed-task-text">Task Manager</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white fw-semibold px-3 rounded-pill mx-1 hover-bg-light"
              >
                📋 All Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/create"
                className="nav-link text-white fw-semibold px-3 rounded-pill mx-1 hover-bg-light"
              >
                ➕ New Task
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-semibold px-3 rounded-pill mx-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                👤 Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                <li>
                  <Link to="/signin" className="dropdown-item py-2">
                    🔐 Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="dropdown-item py-2">
                    📝 Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/profile" className="dropdown-item py-2">
                    👨‍💼 Profile
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control border-0 rounded-start-pill"
                type="search"
                placeholder="Search tasks..."
                aria-label="Search"
                style={{ minWidth: "200px" }}
              />
              <button
                className="btn btn-warning rounded-end-pill px-3"
                type="submit"
              >
                🔍
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
