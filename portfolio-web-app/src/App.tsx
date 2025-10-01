import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cv from './components/Cv';
import Tech from './components/Tech';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/cv">CV</Link> |{' '}
        <Link to="/tech">Tech</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </div>
  );
};

export default App;
