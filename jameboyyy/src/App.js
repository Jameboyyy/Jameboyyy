// App.js
import React from 'react';
import Landscape from './pages/landscape'; // Adjust the path as necessary
import ParticleBackground from './background/particlebackground'
import './index.css';

function App() {
  return (
    <div>
      <ParticleBackground />
      <div className="content">
        <Landscape />
      </div>
    </div>
  );
}

export default App;
