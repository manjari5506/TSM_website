import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const CardSet = () => {
  const cardsData: CardProps[] = [
    { title: 'Customer Experience Focus', description: '...' },
    { title: 'Aspiration To Be a Leading Tech Consultancy', description: '...' },
    { title: 'Respect And Results Oriented', description: '...' },
    { title: 'Execution With Excellence', description: '...' },
  ];

  return (
    <div className="card-set">
      {cardsData.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </div>
  );
};

export default CardSet;