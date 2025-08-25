// src/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  // Works locally and on GitHub Pages (/portfolio/)
  const base = import.meta.env.BASE_URL; // ends with '/'
  const resumeUrl = `${base}Resume/Ashwinder_Bhupal.pdf`;

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ashwinder_Bhupal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page about-page">
      <style>{`
        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        /* 🔵 LinkedIn-style circular avatar (tight chest-up crop) */
        .avatar {
          --size: 320px;              /* change this to 300/340 etc. */
          width: var(--size);
          aspect-ratio: 1 / 1;        /* perfect square */
          border-radius: 50%;         /* perfect circle */
          overflow: hidden;           /* crop inside circle */
          border: 4px solid #fff;     /* white ring */
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          display: inline-block;      /* avoid flex stretch */
        }

        .avatar img {
          /* Zoom the photo so only head + chest show */
          width: 125%;
          height: 125%;
          object-fit: cover;
          object-position: 50% 12%;   /* focus higher: 8–20% is typical */
          display: block;             /* remove inline gaps */
          /* Nudge the zoomed image so the face is centered nicely */
          transform: translate(-%, -14%);
        }

        .avatar:hover img {
          transform: translate(-%, -14%) scale(1.02);
          transition: transform 0.25s ease;
        }

        @media (max-width: 768px) {
          .avatar { --size: 240px; }
          .avatar img { object-position: 50% 15%; transform: translate(-12%, -16%); }
        }
      `}</style>

      <div className="container">
        <div className="about-hero" data-animate id="about-hero">
          <div className="about-content">
            <h1 className="page-title">About Me</h1>
            <p className="about-lead">
              I'm a passionate Computer Science student who thrives on challenging the status quo
              and pushing the boundaries of technology. With a strong foundation in programming
              and research, I'm dedicated to creating innovative solutions that make a difference.
            </p>

            {/* Resume Section */}
            <div className="resume-section">
              <button
                onClick={handleResumeDownload}
                className="btn btn-primary resume-btn pulse"
                aria-label="Download Resume"
              >
                <span className="btn-icon">📄</span>
                Download Resume
              </button>
              <p className="resume-note">
                Get a detailed overview of my experience, skills, and achievements
              </p>
            </div>
          </div>

          <div className="about-image">
            {/* Profile image stored at public/Static/1.jpg */}
            <div className="avatar">
              <img src={`${base}Static/1.jpg`} alt="Ashwinder Singh" />
            </div>
          </div>
        </div>

        {/* ======= keep your other sections below (timeline, achievements, personal, etc.) ======= */}
      </div>
    </div>
  );
};

export default AboutPage;
