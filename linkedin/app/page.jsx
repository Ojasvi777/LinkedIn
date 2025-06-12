import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './lp.css';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lp-main">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Smart Careers <br /><span>Begin Here</span></h1>
            <p>An AI-powered job matching tool...</p>
            <div className="hero-buttons">
             <Link href="/Profile"> <button className="btn primary">Join as a Job Seeker</button></Link>
              <Link href="/Dashboard"><button className="btn secondary">Join as a Recruiter</button></Link>
            </div>
          </div>
          <div className="hero-img">
            <img src="/dashboard.png" alt="Dashboard Graphic" />
          </div>
        </section>

        <section className="features-section">
          <h2>Powered by Intelligence</h2>
          <div className="features">
            <div className="feature">All Resume Matching</div>
            <div className="feature">Real-Time Notifications</div>
            <div className="feature">Secure Profile Management</div>
            <div className="feature">Recruiter Dashboards</div>
          </div>
        </section>

        <section className="architecture">
          <h2>Enterprise-Grade Architecture</h2>
          <p>Powered by cutting-edge technologies...</p>
          <div className="tech-stack">Microservices | OpenTelemetry | Docker | Supabase | etc.</div>
        </section>

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-cards">
            <div className="card">Sarah Clark: “Helped me...”</div>
            <div className="card">Mike Rodriguez: “Can’t believe...”</div>
            <div className="card">Emily Watson: “The best...”</div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Be the First to Experience It</h2>
          <p>Join our exclusive waitlist...</p>
          <div className="cta-form">
            <input type="email" placeholder="Enter your email" />
            <button>Notify Me</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
