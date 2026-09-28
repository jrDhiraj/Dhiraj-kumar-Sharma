export interface Skill {
  name: string;
  category: 'production' | 'analysis' | 'bi' | 'stats' | 'tools';
  level: 'Production-Grade' | 'Advanced' | 'Proficient';
  highlight: string;
  yearsOrContext: string;
  keyTools?: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Training' | 'Education';
  summary: string;
  highlights: string[];
  toolsUsed: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
  author: string;
  coverImage?: string;
  images?: string[]; // Multiple photos uploaded by author
  isCustom?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'production' | 'bi' | 'datascience' | 'ai';
  summary: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  description: string[];
  challenge: string;
  solution: string;
  impact: string;
  workflowSteps: string[];
  githubUrl?: string;
  demoUrl?: string;
  repoName?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
}

