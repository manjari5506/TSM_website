"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./apply.css";

const App: React.FC = ({ open, onCancelApplication }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitApplication = (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
  };

  const handleCancelApplication = (event: React.FormEvent) => {
    event.preventDefault();
    onCancelApplication();
  };

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={handleCancelApplication}
      className="applicationFormModal"
    >
      <div className="container">
        <div className="form-container">
          <h2>Submit Application</h2>
          <div className="job-details">
            <div className="detail">
              <p className="label">ROLE:</p>
              <p className="value">React Native Developer</p>
            </div>
            <div className="detail">
              <p className="label">EXPERIENCE:</p>
              <p className="value">10+ years</p>
            </div>

            <div className="detail">
              <p className="label">KEY SKILLS:</p>
              <p className="value">
                React JS, React Native , Frontend developer
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmitApplication}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience *</label>
              <select
                id="experience"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                required
              >
                <option value="">Select Experience</option>
                {/* Add options for experience levels */}
              </select>
              <div className="upload-group">
                <label className="upload-label">Upload Your Resume *</label>
                <input
                  type="file"
                  id="resume"
                  // onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              SUBMIT APPLICATION
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default App;
