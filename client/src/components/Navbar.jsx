import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useAuth } from "../store/auth";

export default function Navbar() {
  let { isLogin }= useAuth();
  let {isLoading}= useAuth();
  let {user}= useAuth();



  return (
     <>
     <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-Nav container">
          <Link className="navbar-brand" to="/">
            <h3>Tech.Solution</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {isLoading==false ? (user.isAdmin ? (
                <li className="nav-item">
                <Link className="nav-link" to="/admin ">
                  admin
                </Link>
              </li>):""):""}

              {isLogin ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
