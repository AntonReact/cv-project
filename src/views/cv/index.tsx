// modules
import { ReactElement, useCallback, useContext } from 'react';
import { Helmet } from 'react-helmet';
// utils
import { IEducation, IProjectLink, ISkill } from 'src/types/global';
import me from 'src/data/me';
import StepContext from 'src/views/context';
import clsx from 'src/utils/clsx';
import { DOWNLOAD_LINK } from 'src/consts/global';
// components
import CVProjects from 'src/components/cv-projects';
import CVSection from 'src/components/cv-section';
import PageButtons from 'src/components/page-buttons';
import Button from 'src/components/button';
import Progress from 'src/components/progress';
// styles
import styles from './cv.module.scss';

interface ICVProps {
  className?: string;
}

function CV(props: ICVProps) {
  const { className } = props;
  const {
    name, role, country, email, linkedIn, phone, links, skills, languages, projects, education, stack,
  } = me;
  const { onPrevStep } = useContext(StepContext);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleDownload = useCallback(() => {
    window.open(DOWNLOAD_LINK);
  }, []);

  const renderLink = ({ label, url }: IProjectLink): ReactElement => (
    <a key={label} href={url}>{label}</a>
  );

  const renderSkill = ({ label, skill }: ISkill): ReactElement => (
    <div className={styles.item} key={label}>
      <div className={styles.skill__label}>{label}</div>
      <Progress max={5} value={skill} />
    </div>
  );

  const renderEducation = ({
    school, degree, startDate, endDate, country: eduCountry,
  }: IEducation) => {
    const eduTitle = [
      degree,
      school,
      eduCountry,
    ].filter(Boolean).join(', ');

    return (
      <CVSection key={eduTitle} title={eduTitle} titleComponent="h3" startDate={startDate} endDate={endDate} />
    );
  };

  return (
    <>
      <Helmet>
        <title>Anton Leusenko - Software Engineer - CV</title>
      </Helmet>
      <div className={clsx(styles.cv, className)}>
        <div className={styles.document}>
          <div className={styles.sidebar}>
            <h1>{name}</h1>
            <hr />
            <h2>{role}</h2>
            <section>
              <h3>Details</h3>
              <div className={styles.details}>
                <div className={styles.country}>{country}</div>
                <a href={`mailto:${email}`} className={styles.email}>{email}</a>
                <a href={linkedIn}>LinkedIn</a>
                {phone && <a href={`tel:${phone}`}>{phone}</a>}
              </div>
            </section>
            <section>
              <h3>Links</h3>
              <div className={styles.links}>
                {links.map(renderLink)}
              </div>
            </section>
            <section>
              <h3>Skills</h3>
              <div className={styles.skills}>
                {skills.map(renderSkill)}
              </div>
            </section>
            <section>
              <h3>Languages</h3>
              <div className={styles.languages}>
                {languages.map(renderSkill)}
              </div>
            </section>
          </div>
          <div className={styles.content}>
            <CVSection title="Profile" stack={stack}>
              <p>
                Experienced with
                <strong> 4 years </strong>
                of Software Engineering in all stages of advanced web development.
              </p>
              <p>
                Have participated in a mentoring program and helped people to become well-skilled developers.
              </p>
              <p>
                Have had a diversity of interesting project with plenty of different technologies that usually required being agile to adjust to completely different environment in short time.
              </p>
              <p>
                Now I am seeking for the best environment to expand and improve my knowledge.
              </p>
            </CVSection>
            <CVSection title="Employment History">
              <CVProjects projects={projects} childrenLimit={3} />
            </CVSection>
            <CVSection title="Education">
              {education.map(renderEducation)}
            </CVSection>
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="light" onClick={handleDownload} className={styles.downloadButton}>⬇️</Button>
            <Button variant="light" onClick={handlePrint} className={styles.printButton}>🖨️</Button>
          </div>
        </div>
        <PageButtons prev={{ onClick: onPrevStep }} />
      </div>
    </>
  );
}

CV.defaultProps = {
  className: '',
};

export default CV;
