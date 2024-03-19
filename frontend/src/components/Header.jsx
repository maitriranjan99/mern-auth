import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-500 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <h1 className="font-bold">AUTH APP</h1>
        <ul className="flex gap-10">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
