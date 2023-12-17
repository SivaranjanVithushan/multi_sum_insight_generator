import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Signin from './components/Signin';
import Index from './components/Index';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;