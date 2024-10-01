import React from 'react';
import './card.css';

interface CardProps {
  title: string;
  description: string;
  
}

const Corecard: React.FC<CardProps> = ({ title, description}) => {
  return (
    <div className="custom-card">
      <div className="icon-container">
        {/*<img src={icon} alt="icon" className="card-icon" />*/}
      </div>
      {/* Fixed title */}
      <h2 className="card-title">Resource Hiring </h2>
      <hr className="card-divider" />
      <p className="card-description">Technology expertise coupled with award-winning UX skills </p>
    </div>
  );
};

export default Corecard;
