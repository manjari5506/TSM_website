"use client";
import React from "react";
import "./style.scss";
import CardComponent from "../Card/Card";
import { Col, Row, Space, Typography, Carousel, Card } from "antd";
import { BulbOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const Philosophy = () => {
  return (
    <div className="leadership-philosophy-grid   ">
      <Title className="section-title">
        Leadership that Inspires Transformation
      </Title>
      <Paragraph className="section-description py-2">
        At Stackmentalis, our leadership is driven by innovation, collaboration,
        and excellence. We don't just lead—we inspire growth, empower our teams,
        and pursue impactful solutions with relentless passion. Discover the
        core principles that define our journey.
      </Paragraph>

      <Row gutter={[32, 32]} className="py-8">
        {/* Card 1: Innovation */}
        <Col xs={24} md={8}>
          <Card
            className="interactive-card expanded-card"
            hoverable
            cover={
              <img
                src="/images/innvoa.jpg"
                alt="Innovation"
                className="card-image"
              />
            }
          >
            <div className="card-content">
              <Title level={4} className="card-title">
                Innovation at Core
              </Title>
              <Paragraph className="card-text">
                At Stackmentalis, we believe in fostering a culture of
                innovation that allows us to stay at the cutting edge of
                technology. Our leadership encourages creative problem-solving,
                out-of-the-box thinking, and a continuous push for breakthroughs
                that can transform the industry and create value for our
                clients.
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Card 2: Empowering Teams */}
        <Col xs={24} md={8}>
          <Card
            className="interactive-card expanded-card"
            hoverable
            cover={
              <img
                src="/images/teamss.jpg"
                alt="Empowering Teams"
                className="card-image"
              />
            }
          >
            <div className="card-content">
              <Title level={4} className="card-title  ">
                Empowering Teams
              </Title>
              <Paragraph className="card-text ">
                Our leadership philosophy is built on the belief that empowered
                teams are the foundation of success. We cultivate environments
                where collaboration thrives, and individual voices are heard.
                Through trust, support, and opportunity, we aim to nurture each
                team member's potential to grow both personally and
                professionally.
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Card 3: Excellence in Execution */}
        <Col xs={24} md={8}>
          <Card
            className="interactive-card expanded-card"
            hoverable
            cover={
              <img
                src="/images/exectuion.jpg"
                alt="Excellence in Execution"
                className="card-image"
              />
            }
          >
            <div className="card-content">
              <Title level={4} className="card-title pt-4">
                Excellence in Execution
              </Title>
              <Paragraph className="card-text">
                Our commitment to excellence drives every aspect of our work,
                from strategy to execution. We set high standards for ourselves
                and strive for perfection in delivering solutions that meet and
                exceed expectations. Continuous learning and refinement are part
                of our DNA, ensuring that we remain focused on delivering
                impactful results.
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Philosophy;
