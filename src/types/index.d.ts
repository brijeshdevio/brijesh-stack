export type TNavItem = {
  label: string;
  href: string;
};

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  image: string;
}
