import React from 'react';
import './core.css'; 

const cardsData = [
  {
    text: "Dedicated work powers",
  },
  {
    text: "Constant evolutionary process",
  },
  {
    text: "Honesty and openness",
  },
  {
    text: "High-quality results",
  },
  {
    text: "Collaboration capitalizes",
  },
  {
    text: "Continuous innovation motivates.",
  },
];

const Cards = () => {
  return (
    <div>
      <section className="values-section">
        <h2 >
          CORE <span className="highlight">Values</span>
        </h2>
        <p className="section-subtitle">
          We accomplish success by adhering to unshakeable principles of integrity,
          imaginative thinking, and excellence in every little thing we accomplish.
        </p>
      </section>

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card relative">
            <div className="card-text">{card.text}</div>
            <img src='./images/work.png' className='w-30 h-30 absolute bottom-0 right-0'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
