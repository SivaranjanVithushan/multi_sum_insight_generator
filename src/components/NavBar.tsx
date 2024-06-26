import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { NavLink } from "../types/navlink.types";

interface NavBarProps {
  navLinks: NavLink[];
  handleLogout: () => void;  
}

const NavBar: React.FC<NavBarProps> = ({ navLinks, handleLogout }) => {
  return (
    <nav className="bg-blue-1000 text-gray-400 flex tems-center justify-between sticky top-0 z-10  m-auto  px-20 py-2 h-[90px] bg-[#20224b]">
      
      <Link to="/" className="p-0 hover:bg-gray-700">
        <img
         style={{ width: "140px" }}
          className=" object-cover"
          src={Logo}
          alt="tailwind-logo"
        />
      </Link>
      <div className="flex gap-4 p-0">
        {navLinks.map((link: NavLink) => (
          <Link
            className="text-base font-medium hover:text-white transition-colors"
            key={link.id}
            to={`/${link.href}`}
          >
            {link.title}
          </Link>

        ))}
        <button
          onClick={handleLogout}
          className="text-base font-medium hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
