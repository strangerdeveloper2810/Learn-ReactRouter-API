import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient">
      <NavLink className="navbar-brand" to="/">
        Stranger
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="activeNavItem"
              to="/home"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              activeClassName="activeNavItem"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
              activeClassName="activeNavItem"
            >
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/login"
              activeClassName="activeNavItem"
            >
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/detail"
              activeClassName="activeNavItem"
            >
              Detail
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/profile"
              activeClassName="activeNavItem"
            >
              Profile
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Bài Tập
            </span>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <NavLink
                  className="nav-link dropdown-item text-info"
                  to="/todolistrcc"
                  activeClassName="activeNavItem"
                >
                  Todolist Class Component
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link dropdown-item text-info"
                  to="/todolistrfc"
                  activeClassName="activeNavItem"
                >
                  Todolist Functional Component
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
