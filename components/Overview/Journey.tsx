import React from "react";
import "./style.scss";

const Journey = () => {
  const journeySteps = [
    {
      id: 1,
      title: "Founded",
      description: "Our journey began in 2010.",
    },
    {
      id: 2,
      title: "First Product Launch",
      description: "Launched our first product in 2012.",
    },
    {
      id: 3,
      title: "1000 Customers",
      description: "Reached 1000 customers in 2015.",
    },
    {
      id: 4,
      title: "Global Expansion",
      description: "Expanded globally in 2018.",
    },
    {
      id: 5,
      title: "IPO",
      description: "Went public in 2021.",
    },
  ];

  return (
    <div className="company-journey-container">
      {journeySteps.map((step, index) => (
        <div key={step.id} className="journey-step-container">
          <div className="journey-step">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          {index < journeySteps.length - 1 && (
            <div className={`diagonal-connector connector-${index}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Journey;
