import React from 'react';
import img from '../../assets/THANUSHART.png'
import './project.css'

const Card2 = () => {
    const handleButtonClick = () => {
        window.open('https://thanush19.github.io/grocery-shop/', '_blank');
      };
  return (
    <div className="card">
      <img className="card-image" src={img} alt="Image" />
      <div className="card-content">
        <h5 className="card-title">THANUSHART</h5>
        <p className="card-text">Used HTML,CSS,JAVASCRIPT to devolop this site. Displays the UI of the grocery website</p>
      </div>
      <button className="card-button" onClick={handleButtonClick}>Live Preview</button>
    </div>
  );
};

export default Card2;
