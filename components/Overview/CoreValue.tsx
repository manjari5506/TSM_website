import React from "react";
import { Row, Col } from "antd";
import {
  FaRocket,
  FaHandshake,
  FaBullseye,
  FaTrophy,
  FaSync,
} from "react-icons/fa"; // Import icons
import "./style.scss"; // Add custom styles

const coreValues = [
  {
    title: "Innovation",
    description:
      "Pushing the boundaries of technology to deliver groundbreaking solutions.",
    icon: <FaRocket />,
  },
  {
    title: "Integrity",
    description:
      "Building trust through transparency and ethical practices in every interaction.",
    icon: <FaHandshake />,
  },
  {
    title: "Collaboration",
    description:
      "Harnessing the power of teamwork to solve complex challenges and create impactful results.",
    icon: <FaBullseye />,
  },
  {
    title: "Customer-Centricity",
    description:
      "Putting our clients at the heart of everything we do, ensuring their success drives our success.",
    icon: <FaBullseye />,
  },
  {
    title: "Excellence",
    description:
      "Striving for perfection in every solution, delivering quality that exceeds expectations.",
    icon: <FaTrophy />,
  },
  {
    title: "Adaptability",
    description:
      "Staying agile and embracing change to continuously evolve in a fast-moving digital world.",
    icon: <FaSync />,
  },
];

const CoreValues = () => {
  return (
    <div className="core-values-section">
      <div className="flex flex-col items-center ">
        <h2 className="section-heading font-playfair  font-bold text-navy">
          Our Core Values
        </h2>
        <p className=" w-[50rem] pb-8  text-center  text-gray-600">
          Our core values inspire us to innovate, collaborate, and deliver
          excellence. With integrity at the heart of everything we do, we are
          committed to creating meaningful impact for our clients and
          communities.
        </p>
      </div>
      <Row gutter={[24, 24]} justify="space-around">
        {coreValues.map((value, index) => (
          <Col key={index} xs={24} sm={12} md={8} className="value-col">
            <div className="core-value-item ">
              <div className="value-icon">{value.icon}</div>
              <div className="value-content">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoreValues;
