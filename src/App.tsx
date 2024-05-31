
import React, { useState ,useEffect} from "react";
import { Navigate, Route, Routes,useNavigate } from "react-router-dom";
import "./Styles/App.css";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import NavBar from "./components/NavBar";
import { navLinks } from "./constants/navlinks";
import Landing from "./components/LandingPage/Landing";
import { ChatContextProvider } from "./context/chatContext";
import ChatView from "./components/home/ChatView";
import About from "./components/about/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { auth } from "./firebase-config"; 



function App() {
  // Use state to manage login status
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLogged(false);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleLogin = () => {
    setIsLogged(true);
  };
  return (
    <>
      {isLogged ? (
        <div className="App">
          <NavBar navLinks={navLinks} handleLogout={handleLogout} />
          <div className="body-contain">
            <Routes>
              <Route path="/home" element={
                // <Home/>
                <ChatContextProvider>
                <ChatView />
              </ChatContextProvider>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleLogin} />}/>
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="prompt" element={<Home />} /> */}
        </Routes>
      )}
    </>
  );
}

export default App;
