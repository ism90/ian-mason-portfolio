import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectState } from "../../projectState";

import styles from "./ProjectDetail.module.scss";

const ProjectDetail = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(ProjectState);

  const [project, setProject] = useState(null);

  console.log(currentURL);

  useEffect(() => {
    const currentProject = projects.find((project) => {
      console.log(project.url);
      return project.url === currentURL;
    });

    setProject(currentProject);
  }, [projects, currentURL]);

  return (
    <>
      {project && (
        <div className={styles.layout}>
          <div className={styles.headline}>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="project" />
          </div>
          <div className={styles.detailsLayout}>
            {project.details.map((detail) => (
              <Detail
                title={detail.title}
                description={detail.description}
                key={detail.title}
              />
            ))}
          </div>
          <div className={styles.secondImg}>
            <img src={project.secondaryImg} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

const Detail = ({ title, description }) => {
  return (
    <div className={styles.detailsStyle}>
      <h3>{title}</h3>
      <div className={styles.line}></div>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default ProjectDetail;
