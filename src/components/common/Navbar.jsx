import React from "react";
import "./navbar.css";

function Navbar({ username, handleLogout }) {
  // This component represents the navigation bar at the top of the page.

  return (
    <header className="header">
      <nav className="navbar">
        {/* Display the username in the navigation bar */}
        <span className="username">{username}</span>

        {/* Add a logout button with a logout icon */}
        <button className={"logout-icon"} onClick={handleLogout}>
          <svg viewBox="0 0 24 24">
            <path
              fill="#4e4444"
              d="M10.21,6.21l.79-.8V10a1,1,0,0,0,2,0V5.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42ZM18,7.56A1,1,0,1,0,16.56,9,6.45,6.45,0,1,1,7.44,9,1,1,0,1,0,6,7.56a8.46,8.46,0,1,0,12,0Z"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
