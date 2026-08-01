export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  metrics: string;
  summary: string;
}

export interface SystemArchitecture {
  tier: string;
  vectorDb: string;
  agentFramework: string;
  hosting: string;
  estimatedCost: number;
}
