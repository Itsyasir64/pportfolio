export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'AI & LLM' | 'Cloud & APIs' | 'DevOps & Systems';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  metrics: { label: string; value: string }[];
  architecture: string[];
  keyHighlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0-100
    experience: string;
    icon?: string;
    popular?: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Internship';
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  verified?: boolean;
}

export interface SpokenLanguage {
  name: string;
  proficiency: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
  topics: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  relationship: string;
}

