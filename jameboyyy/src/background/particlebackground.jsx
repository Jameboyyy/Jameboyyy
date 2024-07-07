import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import '../index.css';
import './particlebackground.css'; // Import the new CSS file

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Function to get CSS variable value
  const getCssVariableValue = (variableName) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  };

  const options = useMemo(() => {
    // Get particle count from CSS variable
    const particleCount = getCssVariableValue('--particle-count') || 80;

    // Log the particle count to verify if it changes according to screen size
    console.log('Particle count:', particleCount);

    return {
      background: {
        color: {
          value: '#42579d',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disable push mode on click
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          value: parseInt(particleCount, 10),
          limit: parseInt(particleCount, 10),
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (init) {
    return (
      <div className="particles-wrapper">
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return <></>;
};

export default ParticleBackground;
