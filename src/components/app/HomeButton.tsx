import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <button
        type="button"
        className="fixed bottom-2 left-0 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <Link to="/" >Home</Link>
      </button>
    </div>
  );
};

export default HomeButton;
