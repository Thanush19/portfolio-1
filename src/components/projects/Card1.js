import React from 'react';
import img from '../../assets/fuel-bg.png'
import './project.css'

const Card1 = () => {
    const handleButtonClick = () => {
        window.open('https://carbon-emission-calculator-thansuh-01.vercel.app/', '_blank');
      };
  return (
    <div className="card">
      <img className="card-image" src={img} alt="Image" />
      <div className="card-content">
        <h5 className="card-title">CO2 Emission Calculator</h5>
        <p className="card-text">Used React js and Gsap to fetch the data from database and  Calculate CO2 emission in many scenerios</p>
      </div>
      <button className="card-button" onClick={handleButtonClick}>Live Preview</button>
    </div>
  );
};

export default Card1;
