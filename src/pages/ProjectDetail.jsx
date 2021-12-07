import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectState } from "../projectState";

const ProjectDetail = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  const [projects, setProjects] = useState(ProjectState);

  const [project, setProject] = useState({});

  console.log(currentURL);

  useEffect(() => {
    const currentProject = projects.find((project) => {
      console.log(project.url);
      return project.url === currentURL;
    });

    setProject(currentProject);
  }, [projects, currentURL]);

  return (
    <div>
      <h1>ProjectDetail</h1>
    </div>
  );
};

export default ProjectDetail;
