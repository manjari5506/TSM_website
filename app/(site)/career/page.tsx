"use client";
import React, { useState } from 'react';
import './styles.css'; 
// import App from '@/components/cardnavigate';
import ApplicationForm from '@/components/Apply';

import Cards from '@/components/Core';


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
   
    <video autoPlay muted loop className='absolute bg-cover w-full z-0'>
      {/* <source src="/videos/6916531_Motion Graphics_Motion Graphic_1920x1080 (1).mp4" /> */}
      Your browser does not support the video tag.
    </video>
  
  <div className="hero-content relative z-1">
    <div className="hero-text">
      <h1>"Empower Your Future with StackMentalist:<br/> Innovation and Growth Awaits"</h1>
      <p>
        "Be part of an open and collaborative environment where freedom and opportunity thrive. Together, we’re more than colleagues - we’re a team!"
      </p>
      <div className="button-container">
        <button className="job-button">Job Openings →</button>
      </div>
    </div>
  </div>
</section>


      {/* Innovation Section */}
      <section className="innovation-section">
        <div className="innovation-container">
          <div className="left-side">
            <h2>
              Our <span className="ventures">Ventures</span> Work
            </h2>
          </div>

          <div className="right-side">
            <p>
              StackMentalist is dedicated to delivering platform-independent, customer-centric software solutions. With extensive experience across diverse industries and business domains, our proven delivery model guarantees high-quality, cost-effective application development tailored to specific business requirements.
            </p>
            
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-40 bg-white-100">
        <div className="  mx-auto px-[5rem] grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/work/group-1.png" alt="Enjoy What You Do" className="w-full  object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>Enjoy What You Do</h3>
              <p className="text-gray-700 font-'Kodchasan' text-base">
                We have cultivated a culture where we carry lightness and fun into what we do. We celebrate all important occasions, have offsite trips, and conduct engaging events throughout the year. We find joy in building solutions we’re proud of.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/work/group-2.png" alt="Come Up With Ideas" className="w-full  object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display'}}>Come Up With Ideas</h3>
              <p className="text-gray-700 font-'Kodchasan' text-base">
                We are a place that cherishes ideas. We strive to create an environment where our tribe can have clear opinions and share them without any hesitation, and at the same time be humble & open to new ideas.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/work/group-3.png" alt="A Venture in Unity" className="w-full  object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>A Venture in Unity</h3>
              <p className="text-gray-700 font-'Kodchasan' text-base">
                We believe in creating a community where everyone feels at home, regardless of their background. Our tribe is built on the principles of inclusion, respect, and shared leadership, ensuring that each individual is heard, valued, and uplifted.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        
        <Cards/>
      </section>

      
      
      {/* Current Openings Section */}
      <section className="career-openings">
        <div className='text'>
          
          <p className='current'>Current <span className="highlight">Openings</span></p>
        </div>
        
        <div className="job-listings">
          {/* Job Opening Cards */}
          <div className="job-cards-container">
            {/* Job Card 1 */}
            <div className="job-card-container">
              <div className="job-card">
                {/* <img src="react-native-developer.jpg" alt="React Native Developer" className="job-image" /> */}
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
        {showForm && <ApplicationForm />}
      </section>
    </>
  );
};

export default Careerspage;
