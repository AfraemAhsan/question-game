import React from "react";
import { Link } from "react-router-dom";

const Another = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      please go to the home page and click the bellow button
      <Link className="text-blue-700" to="/">
        Home
      </Link>
    </div>
  );
};

export default Another;
