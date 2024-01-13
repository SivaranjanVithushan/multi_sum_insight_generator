import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import NavBar from "./components/NavBar";
import About from "./components/about/About";
import { navLinks } from "./constants/navlinks";

function App() {
  const isLogged = false;
  return (
    <>
      {isLogged ? (
        <div className="App">
          <NavBar navLinks={navLinks} />
          <div className="body-contain">
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<h1>login</h1>} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
