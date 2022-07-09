// modules
import React, { ReactElement } from 'react';
// types
import { IProject } from 'src/types/global';
// utils
import CVProject from './cv-project';

interface ICVProjectProps {
  projects: Record<string, IProject>;
  childrenLimit: number;
}

interface IProjectWithChildren extends IProject {
  children?: Array<IProjectWithChildren>;
}

const parseProjects = (projects: Record<string, IProject>): Array<IProjectWithChildren> => {
  const keys = Object.values(projects);
  return keys.reduce((acc: Array<IProjectWithChildren>, item: IProject) => {
    if (item.parentKey) return acc;
    return [
      ...acc,
      {
        ...item,
        children: keys.filter(({ parentKey }) => parentKey === item.key),
      },
    ];
  }, []);
};

const reduceDateIntoNumber = (projects: Array<IProject>, dateKey: 'startDate' | 'endDate'): Array<number> => {
  const dates = projects.reduce((acc: Array<number>, item) => {
    const date = item[dateKey];
    if (!date) return acc;
    const parsedDate = typeof date === 'number' ? date : date.getTime();
    return [...acc, parsedDate];
  }, []);
  return dates;
};

function CVProjects(props: ICVProjectProps) {
  const { projects, childrenLimit } = props;
  const nestedProjects = parseProjects(projects);

  const renderProject = (project: IProjectWithChildren): ReactElement => {
    const { children = [], ...rest } = project;
    const singleProject = rest as IProject;
    const isOverLimit = children && (children.length > childrenLimit);
    const notRenderedChildren = isOverLimit ? children.slice(childrenLimit) : [];
    const renderedChildren = isOverLimit ? children.slice(0, childrenLimit) : children;
    const overLimitCount = notRenderedChildren.length;
    const startDates: Array<number> = reduceDateIntoNumber(notRenderedChildren, 'startDate');
    const endDates: Array<number> = reduceDateIntoNumber(notRenderedChildren, 'endDate');

    const otherProjects = {
      key: `${singleProject.key} - rest`,
      label: `+ ${overLimitCount} in the Links Section`,
      startDate: Math.min(...startDates),
      endDate: Math.max(...endDates),
    };

    return (
      <React.Fragment key={singleProject.key}>
        <CVProject project={singleProject} isParent={!singleProject.parentKey} />
        {renderedChildren?.map((item) => renderProject(item))}
        {isOverLimit && overLimitCount && <CVProject project={otherProjects} />}
      </React.Fragment>
    );
  };

  return (
    <div>
      {nestedProjects.map(renderProject)}
    </div>
  );
}

export default CVProjects;
