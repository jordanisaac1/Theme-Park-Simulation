import React from 'react';
import './App.css';
import Grid from './components/Grid'; // Import Grid from the components directory
import Agent from './components/Agent'; // Import Agent from the components directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Agent Motion Simulation</h1>
      </header>
      <main>
        {/* Render the Grid and Agent components */}
        <Grid />
        <Agent />
      </main>
    </div>
  );
}

export default App;
