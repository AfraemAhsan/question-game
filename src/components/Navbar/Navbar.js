import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" mb-2 flex flex-row justify-between p-[30px] bg-blue-600  ">
      <div>
        <h3 className="text-3xl font-bold text-slate-200">Question-Game</h3>
      </div>

      <div className="space-x-[20px] text-slate-200">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
