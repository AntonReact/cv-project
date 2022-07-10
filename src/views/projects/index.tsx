// modules
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
// types
import { IProject } from 'src/types/global';
// components
import PageButtons from 'src/components/page-buttons';
import Loader from 'src/components/loader';
import ProjectPopup from 'src/components/project-popup';
// utils
import clsx from 'src/utils/clsx';
import projects from 'src/data/projects';
import StepContext from 'src/views/context';
// types
import { IStepProps } from 'src/views/types';
// assets
import { ReactComponent as WorldMap } from 'src/assets/world.svg';
// styles
import styles from './projects.module.scss';

const LOADING_TIMEOUT = 5000;

function Projects(props: IStepProps) {
  const { className } = props;
  const { onPrevStep, onNextStep } = useContext(StepContext);
  const [showProject, setProject] = useState<IProject | null>(null);

  const handleProjectClick = useCallback((ev: Event) => {
    const target = ev.target as HTMLElement;
    if (!target) return;

    const [, projectName] = Array.from(target.classList);
    const projectToShow = projects[projectName];

    setProject(projectToShow || null);
  }, []);

  const handlePopupClose = useCallback(() => {
    setProject(null);
  }, []);

  useEffect(() => {
    const projectPoints = Array.from(document.getElementsByClassName('project-point'));

    projectPoints.forEach((target) => {
      target.addEventListener('click', handleProjectClick);
    });

    return () => {
      projectPoints.forEach((target) => {
        target.removeEventListener('click', handleProjectClick);
      });
    };
  }, [handleProjectClick]);

  const renderProject = (project: IProject) => {
    const isOpen = showProject?.key === project.key;

    return (
      <ProjectPopup
        key={project.key}
        project={project}
        open={isOpen}
        onClose={handlePopupClose}
      />
    );
  };

  return (
    <>
      <Loader timeout={LOADING_TIMEOUT} />
      <div className={clsx(styles.projects, className)} id="projects">
        <h2>
          Projects
        </h2>
        <WorldMap className={styles.map} />
        {Object.values(projects).map(renderProject)}
        <PageButtons prev={{ onClick: onPrevStep }} next={{ onClick: onNextStep, label: 'CV' }} />
      </div>
    </>
  );
}

export default Projects;
