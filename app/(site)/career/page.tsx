import React from 'react';

import './styles.css'; 

const Careerspage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>"Empower Your Future with StackMentalist: Innovation and Growth Awaits"</h1>
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
            <h2>Our Ventures Work</h2>
          </div>
          <div className="right-side">
            <p>
              StackMentalist is dedicated to delivering platform-independent, customer-centric software solutions. With extensive experience across diverse industries and business domains, our proven delivery model guarantees high-quality, cost-effective application development tailored to specific business requirements.
            </p>
            <p>
              Our global clientele stands as a testament to our commitment to excellence. Our experienced professionals, well-versed in the latest development tools, have successfully built robust systems using cutting-edge frontend and backend technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Enjoy What You Do" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Enjoy What You Do</h3>
              <p className="text-gray-700 font-'Kodchasan' text-base">
                We have cultivated a culture where we carry lightness and fun into what we do. We celebrate all important occasions, have offsite trips, and conduct engaging events throughout the year. We find joy in building solutions we’re proud of.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Come Up With Ideas" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Come Up With Ideas</h3>
              <p className="text-gray-700 font-'Kodchasan' text-base">
                We are a place that cherishes ideas. We strive to create an environment where our tribe can have clear opinions and share them without any hesitation, and at the same time be humble & open to new ideas.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="A Venture in Unity" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>A Venture in Unity</h3>
              <p className="text-gray-700 font-'Kodchasan' text-base">
                We believe in creating a community where everyone feels at home, regardless of their background. Our tribe is built on the principles of inclusion, respect, and shared leadership, ensuring that each individual is heard, valued, and uplifted.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Expertise Section */}
    <section className="expertise-section" >
  
  <div className="expertise-card flex gap-8 p-8" >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://via.placeholder.com/400" alt="Come Up With Ideas" className="w-[100rem] h-48 object-cover" />
      
    </div>
    <div>
    <h1 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>CORE VALUES</h1>
          <p>
            StackMentalist is dedicated to delivering platform-independent, customer-centric software solutions. 
            With extensive experience across diverse industries and business domains, our proven delivery model 
            guarantees high-quality, cost-effective application development tailored to specific business requirements.
          </p>
          <p>
            Our global clientele stands as a testament to our commitment to excellence. Our experienced professionals, 
            well-versed in the latest development tools, have successfully built robust systems using cutting-edge 
            frontend and backend technologies.
          </p>
    </div>
  </div>

        
        <div className="expertise-container flex" style={{  paddingLeft: '20px' }}>
         
        </div>
      </section>
      

      
    </>
  );
};

export default Careerspage;
