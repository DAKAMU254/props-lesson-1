// src/CarCards.js
import React from 'react';
import './CarCards.css'; // Importing CSS for styling

const CarCards = ({ cars }) => {
  return (
    <div className="card-container"> {/* Using grid layout */}
      {cars.map(car => (
        <div className="card" key={car.id}>
          <img src={car.image} alt={`${car.make} ${car.name}`} className="car-image" />
          <h2>{car.name}</h2>
          <p>Make: {car.make}</p>
          <p>Year: {car.year}</p> 
        </div>
      ))}
    </div>
  );
};

export default CarCards;
