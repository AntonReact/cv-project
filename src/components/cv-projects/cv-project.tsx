// types
import { IProject } from '../../types/global';
// components
import CVSection from '../cv-section';

interface ICVProjectProps {
  project: IProject;
  isParent?: boolean;
}

function CVProject(props: ICVProjectProps) {
  const { project, isParent } = props;
  const {
    label, description, startDate, endDate, stack, country, role, totalYears,
  } = project;

  const title = [
    role && `${role} at `,
    label,
    country && ', ',
    country,
  ];

  return (
    <CVSection
      title={title.join('')}
      titleComponent={isParent ? 'h2' : 'h3'}
      startDate={startDate}
      endDate={endDate}
      totalYears={totalYears}
      stack={stack}
    >
      {description}
    </CVSection>
  );
}

CVProject.defaultProps = {
  isParent: false,
};

export default CVProject;
