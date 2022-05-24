import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectState } from "../../projectState";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

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
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className={styles.layout}
        >
          <div className={styles.headline}>
            <h2>{project.title}</h2>
          </div>
          <div className={styles.image}>
            <img src={project.mainImg} alt="project" />
          </div>
          <div className={styles.detailsLayout}>
            {project.details.map((detail) => (
              <Detail
                title={detail.title}
                description1={detail.description1}
                description2={detail.description2}
                code={detail.code}
                live={detail.live}
                key={detail.title}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

const Detail = ({ title, description1, description2, code, live }) => {
  console.log(live);
  return (
    <div className={styles.detailsStyle}>
      <div className={styles.detailsHeading}>
        <h3>{title}</h3>
        <div className={styles.buttonsWrapper}>
          <a href={code}>
            <button>Code</button>
          </a>

          <a href={live}>
            <button>Live</button>
          </a>
        </div>
      </div>
      <div className={styles.line}></div>
      <p className={styles.text}>{description1}</p>
      <p className={styles.text}>{description2}</p>
    </div>
  );
};

export default ProjectDetail;
