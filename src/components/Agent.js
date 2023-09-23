import React, { useState, useEffect } from 'react';
import './Agent.css';

function Agent() {
  const [x, setX] = useState(2); // Initial X position
  const [y, setY] = useState(2); // Initial Y position

  useEffect(() => {
    const interval = setInterval(() => {
      // Move the agent right
      setX((prevX) => prevX + 1);
    }, 100); // Adjust the interval for the agent's speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="agent" style={{ gridArea: `${y} / ${x} / span 1 / span 1` }}></div>
  );
}

export default Agent;
