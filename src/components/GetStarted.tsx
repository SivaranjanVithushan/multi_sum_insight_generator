import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { navLinksWithOutLogin } from "../constants/navlinks";
import NavBar from "./NavBar";
const GetStarted = () => {
  return (
    <div>
      <NavBar navLinks={navLinksWithOutLogin} />
      <section className="max-w-6xl m-auto">
        <h1 className="text-center text-2xl text-white font-medium p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          cumque.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 p-4 items-start">
          <div className="bg-black flex items-center justify-center">
            <img src={Logo} alt="" className="object-contain aspect-[4/2]" />
          </div>
          <div>
            <p className="font-[400] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              recusandae inventore aperiam expedita. Odio ratione beatae
              deleniti harum commodi esse voluptates natussimus facere? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              recusandae inventore aperiam expedita. Odio ratione beatae
              deleniti harum commodi esse voluptates natus. Natus ratione omnis
              porro. Magnam dolores, debitis excepturi illum rerum vero. Nostrum
              quidem, cupiditate sit eveniet reiciendis, excepturi, magnam
              suscipit placeat tempora impedit eum sint vel possimus facere?
            </p>
            <Link
              to="login"
              className="w-fit bg-[#FFC900] text-white px-[8px] py-[4px] mt-4 text-[16px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
