import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>6+ Finished Projects</label>
        </div>
        <div className="project-box">
          <i className="uil uil-users-alt"></i>
          <h3>Clients</h3>
          <label>Happy Clients</label>
        </div>
        <div className="project-box">
          <i className="uil uil-award"></i>
          <h3>Experience</h3>
          <label>2+ Years in While studying.</label>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
