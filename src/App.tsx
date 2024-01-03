import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/about/About';
import Contact from './components/Contact';
import './Styles/App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
    <div className='body-contain'>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
