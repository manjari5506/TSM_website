import React from "react";
import "./style.scss";
import { Col, Row } from "antd";
import LeaderCard from "../CardBoox/CardBox";
const leaders = [
  {
    id: 1,
    name: "RABINA SHARMA",
    position: "CMO",
    img: "images/leaders/RABINASHARMA.jpg",
  },
  {
    id: 2,
    name: "VISHAL SHARMA",
    position: "CEO",
    img: "images/leaders/vishal.jpeg",
  },
  {
    id: 3,
    name: "KAUSTUBH SINGH",
    position: "COO",
    img: "images/leaders/Kaustubh.png",
  },
  {
    id: 4,
    name: "VIKRANT GIRI",
    position: "CTO",
    img: "images/leaders/Vikrant.jpg",
  },
  {
    id: 5,
    name: "SANKET JAIN",
    position: "CIO",
    img: "images/leaders/sanket.png",
  },
  {
    id: 6,
    name: "SHASHANK GUPTA",
    position: "Engineering Director Development",
    img: "images/leaders/shashank.png",
  },
  {
    id: 7,
    name: "URKARSH GEDA",
    position: "Engineering Director Data Science",
    img: "images/leaders/Utkarsh.png",
  },
  {
    id: 8,
    name: "HIMANSHU TRIPATHI",
    position: "Engineering Director Cloud & DevOps",
    img: "images/leaders/HT.png",
  },
  {
    id: 9,
    name: "NISHANT SHARMA",
    position: "leagal Advisor",
    img: "images/leaders/NS.png",
  },
  {
    id: 10,
    name: "AMIT GUPTA",
    position: "DevOps Lead",
    img: "images/leaders/AG.png",
  },
  {
    id: 11,
    name: "VISHAL TIWARI",
    position: "Accounts Head",
    img: "images/leaders/VT2.png",
  },
  {
    id: 12,
    name: "NISHTHA LIMBU",
    position: "HR Head",
    img: "images/leaders/NL.png",
  },
];

const Teams = () => {
  return (
    <section className=" team__section relative  ">
      <div className="flex gap-[5rem]   ">
        <div className="col-md-12 col-lg-4">
          <div id="wrapper" className="sticker relative z-1">
            <div id="sticky">
              <h2 className="mb-4 font-playfair text-6xl font-extrabold tracking-wide text-[#003049] ">
                Meet the Team
              </h2>
              <p className="text-md py-2 font-kodchasan  text-gray-900 ">
                Introducing the visionary leaders behind Stackmentalis. Our
                leadership team embodies a harmonious blend of skill,
                creativity, and unwavering commitment to technological
                excellence. Together, we navigate challenges and seize
                opportunities, driving our mission forward. Discover the minds
                shaping our future.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-1">
          <Row gutter={[14, 20]}>
            {leaders.map((leader) => (
              <Col lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }}>
                <LeaderCard key={leader.id} leader={leader} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Teams;
