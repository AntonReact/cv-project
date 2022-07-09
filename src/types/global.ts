export interface IProjectLink {
  label: string;
  url: string;
}

export interface ISkill {
  label: string;
  skill: number;
}

export interface IProject {
  key: string;
  label: string;
  description?: string;
  url?: string;
  img?: string;
  imgProps?: Record<string, any>;
  startDate?: Date | number;
  endDate?: Date | number;
  role?: string;
  country?: string;
  stack?: Array<string>;
  parentKey?: string;
  totalYears?: number;
}

export interface IEducation {
  school: string;
  degree?: string;
  country?: string;
  startDate: Date;
  endDate?: Date;
}

export interface ICV {
  name: string;
  role: string;
  email: string;
  linkedIn: string;
  phone?: string;
  country?: string;
  links: Array<IProjectLink>;
  skills: Array<ISkill>;
  languages: Array<ISkill>;
  projects: Record<string, IProject>;
  education: Array<IEducation>;
  stack: Array<string>;
}
