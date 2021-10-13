import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light Navhead">
        <Link class="navbar-brand" to="/" style={{fontWeight:'600'}}>
          React Walls
        </Link>
       
        <h4
          class="nav-toogle-btn"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="pc"><i class="fas fa-bars pc"></i></span>
        </h4>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/" style={{fontWeight:'600'}}>
                Home 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#" style={{fontWeight:'600'}}>
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#" style={{fontWeight:'600'}}>
                Login
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
}
