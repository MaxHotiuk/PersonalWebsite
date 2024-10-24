export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
