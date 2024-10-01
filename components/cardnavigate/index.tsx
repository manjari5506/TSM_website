import React, { useState, useEffect } from 'react';

import Corecard from '../Cards';

const App: React.FC = () => {
  const cardData = [
    {
      title: "Resource Hiring & Outsourcing",
      description: "Use first principle thinking and remain unaffected by those who have tried before you.",
    },
    {
      title: "Cloud & DevOps",
      description: "Leverage the cloud with continuous integration and delivery.",
    },
    {
      title: "Application Development",
      description: "Develop scalable and robust applications.",
    }
  ];

  const [currentCard, setCurrentCard] = useState(0);

    const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextCard, 3000); 

    
    return () => clearInterval(intervalId);
  }, []); // 

  return (
    <div className="app-container">
      <Corecard
        title={cardData[currentCard].title}
        description={cardData[currentCard].description}
      />
    </div>
  );
};

export default App;
