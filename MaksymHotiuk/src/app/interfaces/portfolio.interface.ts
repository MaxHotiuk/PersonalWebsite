export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
