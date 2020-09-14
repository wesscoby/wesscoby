export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface Social {
  name: string;
  url: string;
  className: string;
}

export interface Work {
  company: string;
  title: string;
  years: string;
  description: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}

export interface Testimonial {
  text: string;
  user: string;
}

export interface Main {
  name: string;
  occupation: string;
  description: string;
  image: string;
  bio: string;
  address: Address
  phone: string;
  email: string;
  resumeDownload: string;
  website: string;
  social: Social[];
}

export interface Resume {
  skillmessage: string;
  education: Education[];
  skills: Skill[];
  work: Work[];
}

export interface Portfolio {
  projects: Project[];
}

export interface ResumeData {
  main: Main;
  resume: Resume;
  portfolio: Portfolio;
  testimonials: Testimonial[];
}