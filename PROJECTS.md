# Projects

A catalog of every project on the portfolio, with what was built, the tech used, and links.

> **Source of truth:** the live site is generated from [`src/data/projects.js`](src/data/projects.js).
> This file is a human-readable mirror — to add or change a project **on the site**, edit
> `src/data/projects.js` (then update this file to match). Each project there has:
> `title`, `description`, `tags`, `category`, `featured`, `year`, `github`, `demo`, `demoLabel`, `image`.

**Total:** 15 projects · Categories: Web Development, AI/ML Research, Research

---

## AI / ML Research

### Social Media Impact on Teen Mental Health — 2025 ⭐ Featured
End-to-end data science project on 1,200+ records and 13 features — full pipeline from EDA and hypothesis testing to ML (Logistic Regression, Random Forest, XGBoost, SVM) and model explainability (SHAP / variable importance). Explores how screen time, sleep, stress, anxiety, and platform use relate to depression risk, with takeaways for teens, parents, and schools. Built in R (R Markdown) and Python (Jupyter).
- **Tech:** R, Python, Jupyter, R Markdown, XGBoost, Random Forest, SVM, SHAP, EDA, Healthcare Analytics
- **GitHub:** https://github.com/ashwinderbhupal/Social-Media-Impact-on-Teen-Mental-Health

### Face Recognition Tool — 2025 ⭐ Featured
Modern face recognition pipeline built on InsightFace — RetinaFace for detection and ArcFace (512-d embeddings) on ONNX Runtime, matched via cosine similarity. Supports photo/webcam enrollment, live and single-image recognition, and a DB manager. Auto-detects the best ONNX provider (CUDA → DirectML → CPU), hitting ~70 FPS on an RTX 4060.
- **Tech:** Python, InsightFace, ArcFace, ONNX Runtime, OpenCV, Computer Vision
- **GitHub:** https://github.com/ashwinderbhupal/face_recoginization

### Handwritten Digit Recognition from Scratch — 2025 ⭐ Featured
Softmax regression implemented entirely in NumPy — numerically stable softmax, fully vectorized analytic backprop verified by a finite-difference gradient check (rel. error < 1e-6), L2 regularization, and momentum SGD. PyTorch softmax and a small CNN serve as benchmarks (92.3% NumPy vs 99.3% CNN on MNIST), plus two OpenCV demos for air-drawing and live webcam digit classification.
- **Tech:** Python, NumPy, PyTorch, OpenCV, MNIST, Deep Learning, pytest
- **GitHub:** https://github.com/ashwinderbhupal/digit_reco

### LSTM Animal Behavior Classification — 2025 ⭐ Featured
ML pipeline classifying complex animal behaviors from video using DeepLabCut pose keypoints fed into a bidirectional LSTM. Analyzed a 1,000-clip dataset across 40 behavioral categories — achieved ~0.55 validation F1. Published on ResearchGate.
- **Tech:** Python, LSTM, DeepLabCut, Computer Vision, Deep Learning
- **Publication:** https://www.researchgate.net/publication/405077392_LSTM-Based_Animal_Behavior_Classification_Using_Pose_Keypoints

### Predicting Data Science Salaries — 2025 ⭐ Featured
CS439 capstone analyzing compensation in the data science job market — identifies key salary drivers (experience, location, remote work, company size) and builds predictive models to help job seekers and employers make data-informed decisions. Includes EDA, feature importance analysis, and model evaluation in Jupyter.
- **Tech:** Python, Jupyter, Pandas, Scikit-learn, EDA, Machine Learning
- **GitHub:** https://github.com/ashwinderbhupal/CS439-Project
- **Video:** https://www.youtube.com/watch?v=INttq71g3sY

---

## Web Development

### AI-Powered Code Reviewer — 2025 ⭐ Featured
Production-grade GitHub PR reviewer that automatically analyzes every pull request the moment it's opened — detects bugs, security vulnerabilities, and bad patterns, then scores the PR across 4 dimensions and posts a detailed comment directly on GitHub. Built an HMAC-SHA256 webhook pipeline, structured LLM prompts via Groq (Llama 3.3 70B), and a React + TypeScript dashboard with real-time history.
- **Tech:** Python, FastAPI, React, TypeScript, PostgreSQL, Groq API, GitHub Webhooks, OAuth 2.0, JWT
- **GitHub:** https://github.com/ashwinderbhupal/ai-code-reviewer

### FindJob4Me — 2025 ⭐ Featured
Full-stack job board platform built at Rutgers with real-time search, user authentication, and employer/applicant dashboards.
- **Tech:** React, Node.js, PostgreSQL, Express
- **Demo:** https://findjob4me.vercel.app/

### Library Management System — 2025 ⭐ Featured
Full-featured library system with book inventory, member management, borrowing records, and automated overdue notifications.
- **Tech:** Java, MySQL, JDBC, Swing
- **GitHub:** https://github.com/ashwinderbhupal/OIBSIP_JavaDevelopment_5
- **Video:** https://youtu.be/K4wSn0WNYqk

### Railway Booking System — 2024 ⭐ Featured
Database-driven rail ticket booking platform with seat reservations, route management, and payment simulation. Built for Rutgers CS336.
- **Tech:** SQL, PHP, HTML/CSS, MySQL
- **GitHub:** https://github.com/ashwinderbhupal/Railway-booking-System
- **Video:** https://youtu.be/Ff84xtFbzAQ?si=uXTPAaT-4vOtwZVk

### Crime Activity Report System — 2024 ⭐ Featured
Real-time crime mapping and reporting web app built at Hack TCNJ hackathon. Aggregates public data and visualizes hotspots on an interactive map.
- **Tech:** React, Maps API, Node.js, MongoDB
- **GitHub:** https://github.com/ashwinderbhupal/FinalHACKTCNJ

### Gulzar Construction Website — 2025
Marketing website for an Australian construction company, built with vanilla HTML, CSS, and JavaScript — no frameworks or build step. Features a filterable 12-project portfolio, scroll-reveal animations via IntersectionObserver, animated stat counters, a Formspree-powered contact form with client-side validation, and full SEO/Open Graph tags. Fully responsive and mobile-first.
- **Tech:** HTML, CSS, JavaScript, Responsive Design, SEO
- **GitHub:** https://github.com/ashwinderbhupal/Gulzar

### ATM Interface System — 2025
Full-stack ATM system in Core Java with secure PIN-based authentication, balance inquiry, withdrawal logic, and complete transaction history — built as part of the Oasis Infobyte internship.
- **Tech:** Java, OOP, JDBC, Core Java
- **GitHub:** https://github.com/ashwinderbhupal/OIBSIP_JavaDevelopment_3
- **Video:** https://youtu.be/g9_R8GXpiLs

### Port Parking System — 2024
Smart parking management solution built at NJIT Hackathon with real-time slot tracking, automated billing, and QR-based entry.
- **Tech:** React, Firebase, QR Code, JavaScript
- **GitHub:** https://github.com/ashwinderbhupal/team6_NJITHackathon

### OnlyJobs Portfolio — 2025
This portfolio website — built with React 19 and Vite, deployed via GitHub Actions to a custom domain with a sophisticated dark design.
- **Tech:** React, Vite, CSS, GitHub Actions
- **GitHub:** https://github.com/ashwinderbhupal/portfolio
- **Live:** https://ashwinderbhupal.com

---

## Research

### EKG Vestibular System Analysis — 2024
Faculty-supervised research at Princeton's Transfer Scholars Initiative analyzing multidimensional EKG sensor data to identify physiological patterns in vestibular system stimulation using Python statistical methods and visualization.
- **Tech:** Python, EKG Sensors, NumPy, Statistical Analysis, Data Viz
- **View Project:** https://www.linkedin.com/in/ashwinderbhupal/

---

## How to add a new project

1. Open [`src/data/projects.js`](src/data/projects.js) and add an object to the `projects` array:
   ```js
   {
     id: 16,                       // next unused number
     title: "Project Name",
     description: "What you built and the impact.",
     tags: ["Tech", "Stack"],
     category: "Web Development",  // or "AI/ML Research" / "Research"
     featured: true,               // shows on the home page when true
     year: "2026",
     github: `${GITHUB}/repo-name`, // or null
     demo: "https://...",           // or null
     demoLabel: "Video",            // optional label for the demo link
     image: "https://images.unsplash.com/..." // cover image URL
   }
   ```
2. Add a matching entry to this file so the catalog stays in sync.
