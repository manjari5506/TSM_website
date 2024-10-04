"use client";
import React from "react";
import "./style.scss";
import CardComponent from "../Card/Card";
import { Col, Row, Space, Typography, Carousel, Card } from "antd";
import { BulbOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
const { Title, Paragraph } = Typography;
const Philosophy = () => {
  const t = useTranslations("leaderpage.philosophy");
  return (
    <div className="leadership-philosophy-grid   ">
      <div className="flex flex-col items-center justify-center text-center">
        <Title className="section-title">{t("heading")}</Title>
        <Paragraph className="section-description  w-[60rem] py-2 font-medium text-gray-600">
          {t("subheading")}
        </Paragraph>
      </div>

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
                {t("cards.0.heading")}
              </Title>
              <Paragraph className="card-text">
                {t("cards.0.subheading")}
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
                {t("cards.1.heading")}
              </Title>
              <Paragraph className="card-text ">
                {t("cards.1.subheading")}
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
                {t("cards.2.heading")}
              </Title>
              <Paragraph className="card-text">
                {t("cards.2.subheading")}
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Philosophy;
