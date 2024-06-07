// App.js
import React from 'react';
import ParticleBackground from './background/particlebackground'
import './index.css';
import Homepage from './pages/homepage';

function App() {
  return (
    <div>
      <ParticleBackground />
      <div className="content">
        <Homepage/>
      </div>
    </div>
  );
}

export default App;
