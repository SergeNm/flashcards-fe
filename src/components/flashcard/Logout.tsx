import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer">
      <div
        className="flex items-center"
        onClick={() => {
          localStorage.setItem("token", "");
          navigate("/");
        }}
      >
        <FiLogOut />
        <span className="px-2">Logout</span>
      </div>
    </div>
  );
};

export default Logout;
