import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>Question-Game</h3>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
