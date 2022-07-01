import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  return (
    <div className="shadow-lg shadow-[#040c16] bg-gradient-to-r via-blue-50 to-gray-100 from-white fixed w-full h-[80px] flex justify-between items-center px-4 md:px-12 text-gray-900">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "130px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <LinkRoute to="/" >
            Home
          </LinkRoute>
        </li>
        {!token && (
          <li>
            <Link to="contact" smooth={true} duration={500}>
              SingUp
            </Link>
          </li>
        )}
        {token && (
          <li
            className="flex items-center"
            onClick={() => {
              localStorage.setItem("token", "");
              navigate("/");
            }}
          >
            <FiLogOut />
            <span className="px-2">Logout</span>
          </li>
        )}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-200 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
