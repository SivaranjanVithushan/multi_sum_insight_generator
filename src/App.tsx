import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
