// src/App.js
import React from 'react';
import carData from './CarData'; // Importing the car data
import CarCards from './CarCards'; // Import the CarCards component
import './App.css'; // Importing App styling if needed

function App() {
  return (
    <div className="App">
      <h1>Car Gallery</h1> {/* App title */}
      <CarCards cars={carData} /> {/* Rendering CarCards component with car data */}
    </div>
  );
}

export default App;
