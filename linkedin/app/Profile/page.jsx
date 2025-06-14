"use client";
import React from 'react';
import './profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-img" src="/user-avatar.png" alt="User" />
        <div>
          <h2>Sarah Johnson</h2>
          <p className="open-to-work">Open to Work</p>
          <p>Senior Software Engineer</p>
        </div>
        <div className="visibility-status">
          <button>Edit Profile</button>
        </div>
      </div>

      <div className="progress-bar">
        <p>Profile Completion</p>
        <div className="bar">
          <div className="fill" style={{ width: '85%' }}></div>
        </div>
        <div className="tags">
          <span className="complete">✓ Profile Photo</span>
          <span className="complete">✓ Resume Uploaded</span>
          <span className="complete">✓ Skills Added</span>
          <span className="incomplete">✗ Portfolio Links</span>
        </div>
      </div>

      <div className="main-content">
        <div className="left">
          <div className="section">
            <h3>Personal Information</h3>
            <p><strong>Email:</strong> sarah.johnson@email.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
            <p><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/sarahjohnson</a></p>
          </div>

          <div className="section">
            <h3>Skills & Experience</h3>
            <div className="skills">
              {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'].map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div className="experience">
              <h4>Senior Software Engineer</h4>
              <p><strong>TechCorp Inc.</strong> (2021 - Present)</p>
              <p>Led development of microservices architecture, improving system performance by 40%.</p>
              <h4>Software Engineer</h4>
              <p><strong>StartupXYZ</strong> (2019 - 2021)</p>
              <p>Built full-stack web applications using React and Node.js.</p>
            </div>
          </div>

          <div className="section">
            <h3>Education</h3>
            <p><strong>Bachelor of Science in Computer Science</strong></p>
            <p>Stanford University (2015 - 2019) · GPA: 3.8/4.0</p>
          </div>
        </div>

        <div className="right">
          <div className="card">
            <h4>Resume</h4>
            <button className="upload-btn">Browse Files</button>
            <p className="resume-info">Sarah_Johnson_Resume.pdf · Uploaded 2 days ago</p>
            <p className="score">AI Resume Score: <strong>85/100</strong></p>
            <button className="score-breakdown">View detailed breakdown</button>
          </div>

          <div className="card">
            <h4>Job Preferences</h4>
            <p><strong>Desired Roles:</strong> Software Engineer, Full Stack Developer</p>
            <p><strong>Salary Range:</strong> $120K - $160K</p>
            <p><strong>Work Type:</strong> Remote / Hybrid</p>
            <p><strong>Availability:</strong> 2 weeks notice</p>
          </div>

          <div className="card">
            <h4>Recent Applications</h4>
            <p><strong>Senior Engineer</strong> - Google <span className="status interview">Interview</span></p>
            <p><strong>Full Stack Dev</strong> - Meta <span className="status submitted">Submitted</span></p>
            <p><strong>Lead Developer</strong> - Netflix <span className="status hired">Hired</span></p>
          </div>
        </div>
      </div>

      <div className="footer-banner">
        <p>🎉 Good news! 3 new job matches found based on your updated resume.</p>
        <button>View Jobs</button>
      </div>
    </div>
  );
}
