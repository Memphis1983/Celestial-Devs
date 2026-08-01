import { ServiceItem, CaseStudy, Article } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-solutions',
    title: 'Knowledge Retrieval & Data Processing Systems',
    category: 'ai',
    badge: 'Knowledge Systems',
    shortDescription: 'Custom information retrieval, unstructured document indexing, and automated content classification built for precision and security.',
    fullDescription: 'Problem: Organizations waste substantial time attempting to locate critical facts buried across unstructured documents, legacy systems, and disparate databases.\nSolution: We engineer deterministic knowledge retrieval architectures that index multi-format records, synthesize accurate answers with inline citations, and protect data privacy.\nTechnology: Built with semantic vector indexing, hybrid search algorithms, document parsing pipelines, and custom security guardrails.',
    iconName: 'Cpu',
    deliverables: [
      'Information Retrieval Architectures',
      'Document Ingestion & Chunking Pipelines',
      'Citation & Accuracy Guardrails',
      'Hybrid Semantic & Keyword Search',
      'Enterprise Data Privacy Isolation'
    ],
    techStack: ['Gemini API', 'LangChain', 'LlamaIndex', 'Qdrant', 'PyTorch', 'FastAPI', 'Docker'],
    sla: 'High Precision & Verifiable Data Retrieval',
    idealFor: 'Teams looking to unlock unstructured document repositories and automate manual search.'
  },
  {
    id: 'web-engineering',
    title: 'High-Performance Modern Web Applications',
    category: 'web',
    badge: 'Fullstack Engineering',
    shortDescription: 'Fast, accessible Next.js and React web applications built for reliability, scale, and seamless user experiences.',
    fullDescription: 'Problem: Slow, fragile web applications create user friction, increase bounce rates, and complicate feature delivery.\nSolution: We build resilient full-stack applications with modular component architecture, low bundle overhead, and sub-second page interaction times.\nTechnology: Built using Next.js App Router, React, TypeScript, Tailwind CSS, and edge deployment pipelines.',
    iconName: 'Layout',
    deliverables: [
      'Next.js & React Full-Stack SaaS Platforms',
      'Design Systems & Accessible Component Libraries',
      'Real-Time Operational Dashboards',
      'Edge-Rendered & Server-Side APIs',
      'Performance & Core Web Vitals Optimization'
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Recharts'],
    sla: 'Sub-Second Page Loads & Clean Architecture',
    idealFor: 'Businesses needing reliable, high-converting modern digital products.'
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Infrastructure & Reliability Engineering',
    category: 'cloud',
    badge: 'Infrastructure',
    shortDescription: 'Scalable cloud platforms, automated deployment workflows, and resilient system architecture.',
    fullDescription: 'Problem: Brittle server setups and manual deployment steps lead to unexpected downtime, security vulnerabilities, and deployment risks.\nSolution: We design automated infrastructure as code and containerized deployment pipelines that scale predictably under peak loads.\nTechnology: Configured with Google Cloud Platform, Kubernetes, Docker, Terraform, and OpenTelemetry observability.',
    iconName: 'Cloud',
    deliverables: [
      'Cloud Container Orchestration',
      'Infrastructure-as-Code (Terraform)',
      'Automated CI/CD Deployment Pipelines',
      'Distributed Caching & Database Replication',
      'System Observability & Tracing Setup'
    ],
    techStack: ['Google Cloud Run', 'AWS ECS/EKS', 'Kubernetes', 'Terraform', 'Docker', 'Redis', 'PostgreSQL'],
    sla: 'High-Availability Infrastructure Targets',
    idealFor: 'Growth teams upgrading legacy systems for stability and scale.'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation & System Integration',
    category: 'automation',
    badge: 'System Integration',
    shortDescription: 'Event-driven integration pipelines, background job processing, and secure enterprise API gateways.',
    fullDescription: 'Problem: Disconnected business tools and manual data entry create operational bottlenecks and data sync errors.\nSolution: We construct self-healing background job processors, message queues, and API integrations that link your operational tools together.\nTechnology: Built using event streaming, message queues, background worker tasks, and fault-tolerant API middleware.',
    iconName: 'Zap',
    deliverables: [
      'Event-Driven Microservices',
      'Automated Data Transformation Pipelines',
      'Third-Party API & ERP Connectors',
      'Background Job Queues & Webhooks',
      'Audit Logging & Fault-Tolerant Recovery'
    ],
    techStack: ['Celery', 'RabbitMQ', 'Kafka', 'Google Pub/Sub', 'Node.js', 'Python', 'PostgreSQL'],
    sla: 'Reliable Async Message Delivery',
    idealFor: 'Organizations seeking to replace repetitive manual processes with robust software.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'enterprise-doc-intelligence',
    title: 'Enterprise Document Intelligence',
    clientCategory: 'Reference Architecture',
    tagline: 'Automated Document Ingestion & Compliance Verification System',
    summary: 'A reference architecture for enterprise compliance teams requiring rapid verification across unstructured disclosures and complex contracts.',
    challenge: 'Manual review of multi-hundred page regulatory disclosures creates severe operational bottlenecks and human error risks.',
    solution: 'A hybrid keyword and semantic retrieval pipeline paired with structured data extraction and an interactive verification dashboard.',
    results: [
      { label: 'Primary Focus', value: 'Accuracy & Citation' },
      { label: 'Key Capability', value: 'Multi-Format Ingestion' },
      { label: 'Deployment Pattern', value: 'Private Cloud VPC' }
    ],
    techStack: ['Gemini API', 'FastAPI', 'Qdrant', 'Next.js 15', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    architectureType: 'Example Architecture'
  },
  {
    id: 'supply-chain-analytics',
    title: 'Supply Chain Telemetry Platform',
    clientCategory: 'Reference Architecture',
    tagline: 'Event-Driven Data Ingestion & Fleet Telemetry Dashboard',
    summary: 'A reference blueprint for streaming vehicle telemetry and sensor data into real-time operational views.',
    challenge: 'Batch updates in legacy tracking platforms cause delayed route adjustments and inefficient resource allocation.',
    solution: 'An event-stream pipeline on containerized microservices coupled with lightweight WebGL telemetry mapping.',
    results: [
      { label: 'Primary Focus', value: 'Low Latency Streaming' },
      { label: 'Key Capability', value: 'Real-Time Telemetry' },
      { label: 'Deployment Pattern', value: 'Serverless Auto-Scaling' }
    ],
    techStack: ['Google Cloud Run', 'Redis', 'WebSockets', 'React 19', 'Deck.gl'],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    architectureType: 'Example Architecture'
  },
  {
    id: 'healthcare-knowledge-assistant',
    title: 'Healthcare Knowledge Assistant',
    clientCategory: 'Reference Architecture',
    tagline: 'Secure Medical Literature Search & Privacy Guardrails',
    summary: 'A reference blueprint for research organizations searching medical literature while maintaining strict data governance.',
    challenge: 'Research teams require efficient search across technical papers without exposing sensitive records to third-party endpoints.',
    solution: 'A zero-trust data pipeline utilizing field masking, encrypted vector indexes, and isolated model execution.',
    results: [
      { label: 'Primary Focus', value: 'Data Isolation & Safety' },
      { label: 'Key Capability', value: 'Encrypted Vector Indexing' },
      { label: 'Deployment Pattern', value: 'Zero-Storage Proxy Layer' }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Google Cloud KMC'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    architectureType: 'Example Architecture'
  }
];

export const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'deterministic-rag-systems',
    title: 'Architecting Deterministic Knowledge Retrieval Pipelines',
    category: 'System Architecture',
    readTime: '6 min read',
    date: 'July 2026',
    author: { name: 'Celestial Engineering Team', role: 'Engineering Studio' },
    excerpt: 'Why standard naive semantic search falls short in enterprise workloads, and how hybrid dense-sparse indexing creates reliable retrieval.',
    content: [
      'Standard retrieval-augmented pipelines often suffer from hallucination and low precision when deployed to complex enterprise datasets containing tables, legal clauses, and dense numerical figures.',
      'To achieve deterministic performance, modern retrieval architecture requires a multi-stage process: hybrid vector + keyword matching, reciprocal rank fusion, and fine-tuned cross-encoder reranking before context assembly.',
      'In this technical overview, we explore how vector chunking strategies, semantic caching, and automated evaluation metrics maintain accuracy and data integrity.'
    ],
    tags: ['Retrieval', 'Vector DB', 'Search', 'System Design']
  },
  {
    id: 'cloud-run-llm-streaming',
    title: 'Optimizing Serverless Containers for Low-Latency Event Streaming',
    category: 'Cloud Engineering',
    readTime: '8 min read',
    date: 'June 2026',
    author: { name: 'Celestial Engineering Team', role: 'Engineering Studio' },
    excerpt: 'Configuring Cloud Run concurrency, HTTP/2 Server-Sent Events (SSE), and container memory allocation for low initial response latency.',
    content: [
      'Streaming token generation provides immediate visual feedback to users, but unoptimized serverless cold starts can add unwanted latency overhead if container instances are misconfigured.',
      'By tuning Google Cloud Run min-instances, leveraging HTTP/2 streaming protocols, and maintaining warm connection pools to API gateways, latency can be minimized globally.',
      'We share production-tested Terraform templates and Dockerfile multi-stage build patterns optimized for TypeScript and Python container payloads.'
    ],
    tags: ['Cloud Run', 'Serverless', 'DevOps', 'Performance']
  },
  {
    id: 'luxury-design-systems-ai',
    title: 'Designing Digital Products for the AI-Native Era',
    category: 'UI & Design Systems',
    readTime: '5 min read',
    date: 'May 2026',
    author: { name: 'Celestial Engineering Team', role: 'Engineering Studio' },
    excerpt: 'Transitioning from static forms to fluid, conversational, and generative user interfaces without sacrificing visual discipline.',
    content: [
      'As intelligent features embed themselves into everyday software, user interfaces must evolve beyond rigid input forms without descending into unstyled chat windows.',
      'We discuss our design philosophy at Celestial Devs: combining structured themes, restrained motion graphics, and contextual canvas controls that make complex capabilities intuitive and empowering.',
      'Includes practical Tailwind CSS token patterns and React dynamic layout techniques for responsive interface outputs.'
    ],
    tags: ['Design Systems', 'UX Design', 'Tailwind CSS', 'React 19']
  }
];

export const TECH_STACK_LAYERS = [
  {
    name: 'Client Experience Layer',
    icon: 'Layout',
    techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    description: 'Sub-second page loading, accessible design systems, and responsive micro-interactions.'
  },
  {
    name: 'API Gateway & Security',
    icon: 'ShieldCheck',
    techs: ['Express / FastAPI', 'Zero-Trust Proxies', 'JWT / OAuth', 'Cloud Run Ingress', 'Rate Limiting'],
    description: 'Encrypted communication channels, enterprise role-based access control, and payload validation.'
  },
  {
    name: 'Logic & Processing Engine',
    icon: 'BrainCircuit',
    techs: ['Gemini API', 'LangChain / LlamaIndex', 'Task Routers', 'Function Calling', 'Custom Guardrails'],
    description: 'Structured reasoning, schema-constrained output generation, and task execution pipelines.'
  },
  {
    name: 'Vector & Data Storage',
    icon: 'Database',
    techs: ['Qdrant Vector DB', 'PostgreSQL (pgvector)', 'Redis Cache', 'Google Cloud Storage'],
    description: 'Vector index lookups, transactional state management, and structured document stores.'
  },
  {
    name: 'Cloud & Observability',
    icon: 'Server',
    techs: ['Google Cloud Platform', 'Docker Containers', 'Terraform IaC', 'OpenTelemetry', 'GitHub Actions'],
    description: 'Automated CI/CD deployments, auto-scaling compute, and distributed system telemetry.'
  }
];
