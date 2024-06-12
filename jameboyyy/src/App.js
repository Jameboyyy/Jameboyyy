import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticleBackground from './background/particlebackground';
import './index.css';
import Homepage from './pages/homepage';
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <div>
        <ParticleBackground />
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
