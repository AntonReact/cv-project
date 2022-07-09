// images
import LtgGroup from 'src/assets/ltg_group.svg';
import Frontegg from 'src/assets/frontegg.svg';
import Wallter from 'src/assets/wallter.svg';
import SmartArea from 'src/assets/smartarea.svg';
// types
import { IProject } from 'src/types/global';

const projects: Record<string, IProject> = {
  wallter: {
    key: 'wallter',
    label: 'Wallter',
    country: 'Israel',
    img: Wallter,
    url: 'https://www.wallter.com/',
    role: 'Front-End Developer',
    description: 'An Israeli fintech company. Provides global payments solutions.',
    startDate: new Date('2022-06-01'),
    stack: ['React', 'Material UI', 'Prop-types', 'Python', 'MongoDB'],
  },
  procoders: {
    key: 'procoders',
    label: 'ProCoders',
    role: 'Full-Stack Developer',
    country: 'Ukraine',
    description: '',
    totalYears: 4,
  },
  villaway: {
    key: 'villaway',
    parentKey: 'procoders',
    label: 'Villaway',
    img: 'https://cdn.villaway.com/202303/logo-dark.png',
    url: 'https://www.villaway.com/',
    country: 'United States',
    description: 'A booking service for luxury villas.',
    startDate: new Date('2022-02-01'),
    endDate: new Date('2022-05-01'),
    stack: ['Next.JS', 'SCSS', 'Figma', 'Bootstrap', 'Formik', 'Redux'],
  },
  pay_it: {
    key: 'pay_it',
    parentKey: 'procoders',
    label: 'PayIT',
    country: 'Sweden',
    description: 'A service to place orders and pay bills in restaurants using your mobile phone.',
    startDate: new Date('2021-12-01'),
    endDate: new Date('2022-02-01'),
    stack: ['Node.JS', 'Nest.JS', 'AWS', 'Docker', 'PostgreSQL', 'React', 'Material UI', 'MikroOrm'],
  },
  ltg_group: {
    key: 'ltg_group',
    parentKey: 'procoders',
    label: 'LTG Group',
    img: LtgGroup,
    url: 'https://www.ltgplc.com/',
    country: 'United Kingdom',
    description: 'Provides solutions for organizations to meet education and workplace learning needs. Projects - OpenLMS, LEO learning, Gomolearning.',
    startDate: new Date('2021-09-01'),
    endDate: new Date('2021-12-01'),
    stack: ['React', 'Gatsby', 'SCSS', 'Sanity.io', 'Figma'],
  },
  quartznetwork: {
    key: 'quartznetwork',
    parentKey: 'procoders',
    label: 'Quartznetwork',
    img: 'https://quartznetwork.com/wp-content/themes/wonderpress-theme/images/signin-qn-logo.svg',
    url: 'https://quartznetwork.com/',
    country: 'United States',
    imgProps: { width: 500, height: 100 },
    description: 'Helps companies in the framework of the matching platform and the provision of services for conducting educational online events on its own eLearning platform.',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-09-01'),
    stack: ['React', 'SCSS', 'Material UI', 'Node.js', 'MySQL', 'LoopBack.io', 'Docker', 'Figma', 'Jest'],
  },
  frontegg: {
    key: 'frontegg',
    parentKey: 'procoders',
    label: 'Frontegg',
    img: Frontegg,
    url: 'https://frontegg.com/',
    country: 'Israel',
    description: 'Frontegg is a user management platform. Provides integration of a powerful user infrastructure, designed to handle modern application use-cases.',
    startDate: new Date('2019-01-01'),
    endDate: new Date('2020-12-01'),
    stack: ['React', 'TypeScript', 'jest', 'SCSS', 'Storybook', 'formik', 'Node.js', 'Nest.js', 'MongoDB', 'Mongoose'],
  },
  smartarea: {
    key: 'smartarea',
    parentKey: 'procoders',
    label: 'smartarea',
    img: SmartArea,
    url: 'https://smartarea.info/',
    country: 'Ukraine',
    description: 'A voluntary project for Ukrainian government - An interactive map of bus/trolleybus tracking, transport schedule etc.',
    startDate: new Date('2018-04-01'),
    endDate: new Date('2019-01-01'),
    stack: ['React', 'TypeScript', 'Styled-components', 'Node.js', 'Express.js'],
  },
};

export default projects;
