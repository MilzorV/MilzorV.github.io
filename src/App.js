import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState('auto');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'auto';
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <ThemeSwitcher currentTheme={theme} onThemeChange={handleThemeChange} />
      <header className="header">
        <h1>Miłosz Słowiński</h1>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <p>
            Hi—I'm <strong>Miłosz Słowiński</strong>, a computer science student and software developer passionate about 
            creating innovative solutions through programming, AI, and interdisciplinary collaboration.
          </p>
        </section>

        <section id="key-projects" className="section">
          <h2>Key Projects</h2>
          
          <div className="projects-content">
            <ProjectCard
              name="OSATeam CanSat"
              date="Sep 2020 – Nov 2021"
              skills="C++, Arduino, Python, Matplotlib, PuTTY, NumPy, Pandas"
              description="In a team of four, we developed an air-collecting CanSat probe that transmitted live telemetry data during descent, including system status, pressure-derived altitude, temperature, and humidity. The system was built using safe programming practices to ensure reliable operation in flight. Our project was awarded 'Best CanSat Project' in the 2021 European CanSat Competition."
            />
            
            <ProjectCard
              name="TUE Serpentine AIMI – Artificial Intelligence Motor Imagery"
              date="November 2023 – June 2024"
              skills="NumPy, Pandas, PyTorch, scikit-learn, Keras, Weights & Biases, Seaborn, Django, Pygame, Three.js, React"
              description="Collaborated on a team project using EEG headset data to perform real-time classification of user motor imagery via CNNs and Transformers. Later transitioned to frontend tasks—developing interactive web games for headset testing and building a React-based 3D brain visualization using z-score mapping of EEG activity."
            />
            
            <ProjectCard
              name="Crossbred Algorithm"
              date="September 2024 – June 2025"
              skills="Python, SageMath, C, M4RI"
              description="Implemented a solver for multivariate quadratic (MQ) systems based on the Crossbred algorithm, used in algebraic cryptanalysis. Developed both a Python prototype in SageMath and a low-level C implementation leveraging the M4RI library for efficient binary matrix operations. Focused on subsystem extraction and validation logic."
            />
          </div>
        </section>

        <section id="hackathons" className="section">
          <h2>Hackathons</h2>
          
          <div className="projects-content">
            <ProjectCard
              name="bunq 6.0 Hackathon – AI Event Planner"
              date="May 2025"
              skills="FastAPI, Python, Uvicorn, bunq.sdk, LangChain, Next.js, React, Firebase, TypeScript, Tailwind CSS"
              description="Built a web app that combines AI-powered event planning with banking integration. LangGraph agents generate personalized event suggestions based on user activity and bunq payment history. The frontend features an interactive, timeline-based UI inspired by Infinite Craft, allowing users to manage and combine events while receiving intelligent suggestions from autonomous agents."
            />
            
            <ProjectCard
              name="Geehack x Navara Hackathon – BoswachterApp"
              date="November 2024"
              skills="FastAPI, SQLAlchemy, Pydantic, React, Swiper"
              description="BoswachterApp is a wildlife tracking tool for rangers, built with a FastAPI backend and React frontend. It supports offline usage, map-based observations, and syncs data between local storage and a central database. Designed with a modern, responsive UI and full audit logging."
            />
          </div>
        </section>

        <section id="academic-projects" className="section">
          <h2>Academic Projects</h2>
          
          <div className="projects-content">
            <ProjectCard
              name="PARA: JetBrains Plugin"
              date="Quarter 3 Year 3"
              skills="Kotlin, IntelliJ Plugin SDK, Maven, Gradle, GitHub Actions, SonarQube, Ktor, MongoDB, KMongo, Docker, DeepSeek, Libraries.io"
              description="PARA is an IntelliJ IDEA plugin that automatically resolves and installs missing imports and dependencies when code is pasted into scratch files or projects. I implemented the dependency identification system using PSI analysis and contributed to the Gradle/Maven resolution flow. The plugin uses an indexed JAR dataset and AI (DeepSeek) to infer appropriate libraries, supports both Gradle and Maven build systems, and integrates a KMongo–MongoDB backend for index storage. The system is containerized via Docker and exposes backend endpoints using Ktor."
            />
            
            <ProjectCard
              name="IoT Smart Battery Locker"
              date="Quarter 2 Year 2"
              skills="Arduino, IoT Connections, Realtime Database, Firebase Deployment, React, Google Maps API, Authentication"
              description="In a multidisciplinary team, I led software development for a smart locker that charges batteries and reports their status. Built a web UI with real-time charge monitoring, user authentication, and location features."
            />
            
            <ProjectCard
              name="Heuristic Programming"
              date="Quarter 4 Year 3"
              skills="Java, Z3, Gurobi"
              description="Developed heuristic and metaheuristic algorithms to solve real-world optimization problems. Applied Ant Colony Optimization for network partitioning, Particle Swarm for minimizing wireless interference, and Local Search for solving TSP instances. Used Z3 for constraint-based tasks like N-Queens and geometric image coloring, and Gurobi for assignment and resource allocation problems in logistics and telecommunications."
            />
          </div>
        </section>

        <section id="coursework" className="section">
          <h2>Other Coursework</h2>
          
          <div className="coursework-content">
            <div className="coursework-grid">
              <div className="coursework-item">Machine learning in science Q4Y2</div>
              <div className="coursework-item">Process Mining Q3Y2</div>
              <div className="coursework-item">Algorithmic Aspects of Data Analysis Q4Y2</div>
              <div className="coursework-item">Lab on Offensive Computer Security Q4Y3</div>
              <div className="coursework-item">Functional Programming Q1Y3</div>
              <div className="coursework-item">Embedded Systems Q4Y1</div>
              <div className="coursework-item">Programming Methods Q2Y2</div>
              <div className="coursework-item">Applied Logic Q2Y1</div>
              <div className="coursework-item">Programming Q2Y1</div>
              <div className="coursework-item">Computer Graphics Q1Y3</div>
              <div className="coursework-item">Engineering design Q1Y2</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 