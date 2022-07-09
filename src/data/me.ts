// types
import { ICV } from 'src/types/global';
// data
import projects from './projects';

const me: ICV = {
  name: 'Anton Leusenko',
  role: 'Software Engineer',
  country: 'Israel',
  phone: '+972 54 572 2116',
  email: 'a.v.leusenko@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/anton-leusenko/',
  links: [
    { label: 'Wallter', url: 'https://www.wallter.com/' },
    { label: 'Villaway', url: 'https://www.villaway.com/' },
    { label: 'Open LMS', url: 'https://www.openlms.net/' },
    { label: 'LEO learning', url: 'https://leolearning.com/' },
    { label: 'Gomolearning', url: 'https://www.gomolearning.com/' },
    { label: 'Quartznetwork', url: 'https://quartznetwork.com/' },
    { label: 'Frontegg', url: 'https://frontegg.com/' },
    { label: 'smartarea.info', url: 'https://smartarea.info/' },
  ],
  skills: [
    { label: 'HTML & CSS', skill: 5 },
    { label: 'JavaScript', skill: 5 },
    { label: 'React', skill: 5 },
    { label: 'Git', skill: 5 },
    { label: 'Soft skills', skill: 5 },
    { label: 'Docker', skill: 4 },
    { label: 'Node.js', skill: 3 },
    { label: 'SQL', skill: 3 },
    { label: 'MongoDB', skill: 3 },
  ],
  languages: [
    { label: 'English (Fluent)', skill: 4 },
    { label: 'Ukrainian (Native)', skill: 5 },
  ],
  projects,
  education: [
    {
      school: 'National Technical University (Kharkiv Polytechnical Institute)',
      degree: 'Computer engineering',
      country: 'Ukraine',
      startDate: new Date('2014-02-01'),
      endDate: new Date('2019-05-01'),
    },
    {
      school: 'Self Education',
      startDate: new Date('1997-11-12'),
    },
  ],
  stack: [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'ReactJS',
    'Redux', 'Jest', 'REST', 'GraphQL', 'Node.js', 'Docker',
    'MongoDB', 'Mongoose', 'Nest.js', 'MaterialUI', 'Bootstrap',
    'SSR(Gatsby, Next.js)', '*ORM', 'Firebase', 'AWS', 'Google Cloud',
  ],
};

export default me;
