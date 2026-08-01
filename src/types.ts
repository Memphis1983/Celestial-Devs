export interface ServiceItem {
  id: string;
  title: string;
  category: 'ai' | 'cloud' | 'web' | 'automation';
  badge: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  sla: string;
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  techStack: string[];
  imageUrl: string;
  architectureType: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: { name: string; role: string };
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface ArchitectureBlueprint {
  projectTitle: string;
  summary: string;
  architectureType: string;
  recommendedStack: {
    frontend: string[];
    backend: string[];
    aiAndMl: string[];
    databaseAndVector: string[];
    cloudAndDevOps: string[];
  };
  keyComponents: { name: string; description: string }[];
  estimatedTimelineWeeks: number;
  securityAndCompliance: string[];
  estimatedComplexity: 'Standard' | 'Advanced' | 'Enterprise';
  keyRisksAndMitigations: { risk: string; mitigation: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
}
