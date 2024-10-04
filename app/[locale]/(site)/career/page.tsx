"use client";
import React, { useState } from "react";
import "./styles.css";
// import App from '@/components/cardnavigate';
import ApplicationForm from "@/components/Apply";

// import Cards from '@/components/Core';
import CoreValues from "@/components/Overview/CoreValue";
import { useTranslations } from "next-intl";

const Careerspage = () => {
  // State to manage form visibility
  const [showForm, setShowForm] = useState(false);
  const t = useTranslations("careerpage");

  // Function to handle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="hero-content relative z-1">
          <div className="hero-text">
            <h1>
              {t("hero.heading.h1")}
              <br /> {t("heading.h2")}
            </h1>
            <p>{t("hero.subheading")}</p>
            <div className="button-container">
              <a
                className="job-button ease-in-out hover:scale-110 "
                href="#career-opening"
              >
                {t("hero.btn")}→
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="innovation-section bg-white-100  py-20">
        <div className="innovation-container">
          <h2>{t("section2.heading")}</h2>
          <p>
            {t("section2.subheading.h1")}
            <br /> {t("section2.subheading,h2")}
          </p>
          {/* Cards Section */}
          <div className="card-section">
            {/* Card 1 */}
            <div className="card">
              <div className="w-full">
                <img
                  src="/images/work/group-1.png"
                  alt="Enjoy What You Do"
                  className="w-full"
                />
              </div>
              <div className="content py-2">
                <h3>{t("section2.cards.c1.heading")}</h3>
                <p>{t("section2.cards.c1.subheading")}</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card ">
              <div className="w-full">
                <img
                  src="/images/work/group-2.png"
                  alt="Come Up With Ideas"
                  className="h-[18.8rem] w-full"
                />
              </div>
              <div className="content">
                <h3>{t("section2.cards.c2.heading")}</h3>
                <p>{t("section2.cards.c2.subheading")}</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card">
              <div className="w-full ">
                <img
                  src="/images/work/group-3.png"
                  alt="A Venture in Unity"
                  className="w-full"
                />
              </div>
              <div className="content">
                <h3>{t("section2.cards.c3.heading")}</h3>
                <p>{t("section2.cards.c3.subheading")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Current Openings Section */}
      <section className="career-openings" id="career-opening">
        <p>{t("jobopening.heading")}</p>
        <div className="job-listings">
          {/* Job Opening Cards */}
          <div className="job-cards-container">
            {/* Job Card 1 */}
            <div className="job-card-container">
              <div className="job-card">
                <div className="job-info">
                  <h3>{t("jobopening.cards.c1.heading")}</h3>
                  <p>{t("jobopening.cards.c1.subheading")}</p>
                  <p>{t("jobopening.cards.c1.description")}</p>
                  <div className="job-action" onClick={toggleForm}>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-up-right"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="job-card-container">
              <div className="job-card">
                {/* <img src="full-stack-developer.jpg" alt="Full Stack Developer" className="job-image" /> */}
                <div className="job-info">
                  <h3>{t("jobopening.cards.c2.heading")}</h3>
                  <p>{t("jobopening.cards.c2.subheading")}</p>
                  <p>{t("jobopening.cards.c2.description")}</p>
                  <div className="job-action" onClick={toggleForm}>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-up-right"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<ApplicationForm open={showForm} onCancelApplication={toggleForm} />}
      </section>
    </>
  );
};

export default Careerspage;
