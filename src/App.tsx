// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import "./Styles/App.css";
// import Contact from "./components/Contact";
// import GetStarted from "./components/GetStarted";
// import NavBar from "./components/NavBar";
// import About from "./components/about/About";
// import { navLinks } from "./constants/navlinks";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Landing from "./components/LandingPage/Landing";
// import Home from "./components/home/home";
// import Example from "./sample/sample";

// function App() {
//   const isLogged = true;
//   return (
//     <>
//       {isLogged ? (
//         <div className="App">
//           <NavBar navLinks={navLinks} />
//           <div className="body-contain">
//             <Routes>
//               <Route path="home" element={<Home/>} />
//               <Route path="about" element={<About />} />
//               <Route path="contact" element={<Contact />} />
//               <Route path='logout' element={<Login/>} />
//               {/* <Route path='register' element={<Register/>} /> */}
//             </Routes>
//           </div>
//         </div>
//       ) : (
//         <Routes>
//             <Route path="/" element={<GetStarted />} />
//             <Route path="about" element={<About />} />
//             <Route path="login" element={<Login/>} />
//             <Route path="register" element={<Register/>} />
//             <Route path="landing" element={<Landing />} />
//             {/* <Route path='register' element={<Register/>} /> */}
//           </Routes>
//       )}
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import NavBar from "./components/NavBar";
import About from "./components/about/About";
import { navLinks } from "./constants/navlinks";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/LandingPage/Landing";
import Home from "./components/home/home";
import Example from "./sample/sample";

function App() {
  // Use state to manage login status
  const [isLogged, setIsLogged] = useState(false);

  // Function to handle logout
  // const handleLogout = () => {
  //   // Perform logout logic (e.g., clear session, local storage)
  //   setIsLogged(false);
  // };
  const handleLogout = () => {
    // Perform any logout logic, such as clearing tokens or session data
    // ...

    // Update the state to indicate that the user is logged out
    setIsLogged(false);

    // Navigate to the login page
    return <Navigate to="login" />;
  };

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic
    setIsLogged(true);
  };

  return (
    <>
      {isLogged ? (
        <div className="App">
          <NavBar navLinks={navLinks} />
          <div className="body-contain">
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="landing" element={<Landing />} />
              <Route
                path="/"
                element={<Login onLogin={() => setIsLogged(false)} />}
              />
              {/* <Route path='register' element={<Register/>} /> */}
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="register"
            element={<Register onRegister={handleLogin} />}
          />

          {/* <Route path='register' element={<Register/>} /> */}
        </Routes>
      )}
    </>
  );
}

export default App;
