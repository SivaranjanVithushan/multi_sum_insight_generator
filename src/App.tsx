import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='about' element={<h1>about</h1>}/>
        <Route path='contact' element={<h1>contact</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
