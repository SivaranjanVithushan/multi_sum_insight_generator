import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const navLinks = [
  { id: 1, href: "/", title: "Home" },
  { id: 3, href: "about", title: "About" },
  { id: 2, href: "contact", title: "Contact" },
];

const NavBar = () => {
  return (
    <nav className=" bg-blue-1000 text-gray-400 flex justify-between items-center sticky top-0 z-10">
      <Link to="/" className="">
        <img className="Logo-image" src={Logo} alt="tailwind-logo" />
      </Link>
      <div className="flex gap-4">
        {navLinks.map((link) => (
          <Link
            className="text-base font-medium hover:text-white transition-colors"
            key={link.id}
            to={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
