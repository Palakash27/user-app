import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <h1>USER APP</h1>
        <Link to="/" style={{ color: "inherit" }}>
          Home
        </Link>
      </header>
    </div>
  );
}
