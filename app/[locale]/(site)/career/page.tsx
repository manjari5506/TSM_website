"use client";
import React, { useState } from "react";
import "./styles.css";
// import App from '@/components/cardnavigate';
import ApplicationForm from "@/components/Apply";

// import Cards from '@/components/Core';
import CoreValues from "@/components/Overview/CoreValue";

const Careerspage = () => {
  // State to manage form visibility
  const [showForm, setShowForm] = useState(false);

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
              Empower Your Future with StackMentalist:
              <br /> Innovation and Growth Awaits
            </h1>
            <p>
              Be part of an open and collaborative environment where freedom and
              opportunity thrive. Together, we're more than colleagues - we're a
              team!
            </p>
            <div className="button-container">
              <a
                className="job-button ease-in-out hover:scale-110 "
                href="#career-opening"
              >
                Job Openings →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="innovation-section bg-white-100  py-20">
        <div className="innovation-container">
          <h2>Our Ventures Work</h2>
          <p>
            StackMentalist is dedicated to delivering platform-independent,
            <br /> customer-centric software solutions.
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
                <h3>Enjoy What You Do</h3>
                <p>
                  We have cultivated a culture where we carry lightness and fun
                  into what we do. We celebrate all important occasions, have
                  offsite trips, and conduct engaging events throughout the
                  year. We find joy in building solutions we're proud of.
                </p>
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
                <h3>Come Up With Ideas</h3>
                <p>
                  We are a place that cherishes ideas. We strive to create an
                  environment where our tribe can have clear opinions and share
                  them without any hesitation, and at the same time be humble &
                  open to new ideas.
                </p>
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
                <h3>A Venture in Unity</h3>
                <p>
                  We believe in creating a community where everyone feels at
                  home, regardless of their background. Our tribe is built on
                  the principles of inclusion, respect, and shared leadership,
                  ensuring that each individual is heard, valued, and uplifted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Current Openings Section */}
      <section className="career-openings" id="career-opening">
        <p>Current Openings</p>
        <div className="job-listings">
          {/* Job Opening Cards */}
          <div className="job-cards-container">
            {/* Job Card 1 */}
            <div className="job-card-container">
              <div className="job-card">
                <div className="job-info">
                  <h3>React Native Developer</h3>
                  <p>Software Development</p>
                  <p>0-6 months</p>
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
                  <h3>React Native Developer</h3>
                  <p>Software Development</p>
                  <p>6-12 months</p>
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
