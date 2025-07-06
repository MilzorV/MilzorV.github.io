import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Miłosz Słowiński</h1>
      </header>

      <main className="main-content">
        <section id="about" className="section">
          <p>
            Hi—I'm <strong>Miłosz Słowiński</strong>, a passionate developer and creative problem solver. 
            I love building elegant solutions and exploring new technologies.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          
          <div className="projects-content">
            {/* Empty projects section - ready for your content */}
            <ProjectCard
              name="Your First Project"
              date="Coming Soon"
              skills="React, JavaScript, CSS"
              description="This is where you can add your first project. Click the edit button to customize this card."
            />
            
            <ProjectCard
              name="Another Project"
              date="Coming Soon"
              skills="Node.js, Express, MongoDB"
              description="Add more projects here to showcase your skills and experience."
            />
            
            <ProjectCard
              name="Mobile App"
              date="Coming Soon"
              skills="React Native, TypeScript"
              description="Describe your mobile development projects here."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 