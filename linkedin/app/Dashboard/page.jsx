// app/dashboard/page.jsx
"use client";

import React from "react";
import "./profile2.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h3>TechCorp Inc.</h3>
        <p>Sarah Johnson</p>
        <ul>
          <li>📄 Post a Job</li>
          <li>🏢 Company Profile</li>
          <li>💳 Subscription</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h2>Recruiter Dashboard</h2>
          <img
            className="profile-icon"
            src="/user-icon.png"
            alt="User Icon"
          />
        </header>

        <section className="company-overview card">
          <h3>Company Overview</h3>
          <div className="overview-info">
            <p><b>Industry:</b> Technology</p>
            <p><b>Location:</b> San Francisco, CA</p>
            <p><b>Contact:</b> hr@techcorp.com</p>
          </div>
        </section>

        <section className="posted-jobs card wide-card">
          <h3>Posted Jobs</h3>
          <div className="job">
            <div>
              <h4>Senior Frontend Developer</h4>
              <p>Posted 3 days ago • Remote</p>
            </div>
            <div className="job-actions">
              <span className="applications green">24 Applications</span>
              <button>Edit</button>
              <button>⋮</button>
            </div>
          </div>
          <div className="job">
            <div>
              <h4>Product Manager</h4>
              <p>Posted 1 week ago • San Francisco, CA</p>
            </div>
            <div className="job-actions">
              <span className="applications">12 Applications</span>
              <button>Edit</button>
              <button>⋮</button>
            </div>
          </div>
          <button className="post-job-btn">+ Post New Job</button>
        </section>

        <section className="applicants card wide-card">
          <h3>Recent Applicants - Senior Frontend Developer</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Resume Score</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Smith</td>
                <td className="score">92%</td>
                <td><span className="status review">Under Review</span></td>
                <td><a href="#">View Resume</a></td>
              </tr>
              <tr>
                <td>Emily Davis</td>
                <td className="score">88%</td>
                <td><span className="status shortlisted">Shortlisted</span></td>
                <td><a href="#">View Resume</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="bottom-sections">
          <section className="notifications card">
            <h3>Recent Notifications</h3>
            <div className="notification blue">
              📩 New application received
              <p>John Smith applied for Senior Frontend Developer - 2 hours ago</p>
            </div>
            <div className="notification green">
              ✅ Application reviewed
              <p>Emily Davis moved to shortlist - 4 hours ago</p>
            </div>
          </section>

          <section className="analytics card">
            <h3>Job Performance Analytics</h3>
            <p><b>Total Views:</b> 1,247</p>
            <p><b>Applications:</b> 36</p>
            <p><b>Conversion Rate:</b> 2.9%</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
