import { ServiceItem, CaseStudy, Article } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-solutions',
    title: 'Autonomous AI Agents & RAG Architecture',
    category: 'ai',
    badge: 'Core Expertise',
    shortDescription: 'Enterprise-grade LLM pipelines, autonomous multi-agent orchestration systems, and deterministic retrieval-augmented generation (RAG).',
    fullDescription: 'We build end-to-end intelligent agent infrastructure engineered for precision, high throughput, and context-aware enterprise operations. From hybrid vector search to multi-modal reasoning models, we turn generative AI into scalable product capability.',
    iconName: 'Cpu',
    deliverables: [
      'Multi-Agent Workflow Orchestrators',
      'Hybrid Semantic & Vector Search (RAG)',
      'Custom LLM Fine-Tuning & Quantization',
      'Enterprise Guardrails & Safety Proxies',
      'Real-Time Streaming AI Microservices'
    ],
    techStack: ['Gemini 2.5/3.0', 'LangChain', 'LlamaIndex', 'Qdrant', 'PyTorch', 'FastAPI', 'Docker'],
    sla: '99.95% Availability Target',
    idealFor: 'SaaS platforms & Enterprise teams automating complex decision workflows.'
  },
  {
    id: 'web-engineering',
    title: 'High-Performance Web & SaaS Systems',
    category: 'web',
    badge: 'Modern Fullstack',
    shortDescription: 'Ultra-fast Next.js and React web applications engineered with luxury design systems, zero layout shift, and serverless execution.',
    fullDescription: 'We engineer digital products with microsecond performance, accessible UX, and modular visual architecture. Crafted with Next.js App Router, React 19, custom design tokens, and fluid Motion micro-interactions.',
    iconName: 'Layout',
    deliverables: [
      'Next.js 15 / React 19 Custom SaaS Applications',
      'Bespoke Luxury Design Systems & Component Libraries',
      'Edge-Rendered Dashboards & Data Visualization',
      'Progressive Web Apps & Sub-100ms LCP Optimization',
      'Full-Stack API Routes & Security Middleware'
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Recharts'],
    sla: '100/100 Lighthouse Performance Goal',
    idealFor: 'Companies seeking high-converting, world-class modern web software.'
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud-Native Architecture & DevOps',
    category: 'cloud',
    badge: 'Infrastructure',
    shortDescription: 'Scalable cloud infrastructure, container orchestration, zero-downtime CI/CD pipelines, and automated IaC deployments.',
    fullDescription: 'We architect resilience. Our cloud team designs Kubernetes clusters, serverless Cloud Run containers, automated Terraform IaC scripts, and distributed caching layers built to handle millions of requests without manual intervention.',
    iconName: 'Cloud',
    deliverables: [
      'Google Cloud / AWS Container Orchestration',
      'Terraform & Pulumi Infrastructure-as-Code',
      'Zero-Downtime CI/CD Pipelines (GitHub Actions)',
      'Automated Distributed Database Replication',
      'Observability & Datadog / OpenTelemetry Tracing'
    ],
    techStack: ['Google Cloud Run', 'AWS ECS/EKS', 'Kubernetes', 'Terraform', 'Docker', 'Redis', 'PostgreSQL'],
    sla: '99.99% Infrastructure Uptime SLA',
    idealFor: 'High-growth startups requiring scale-ready cloud infrastructure.'
  },
  {
    id: 'workflow-automation',
    title: 'Intelligent Enterprise Automation',
    category: 'automation',
    badge: 'System Ops',
    shortDescription: 'Event-driven workflow engines, automated data processing pipelines, and resilient third-party API integration networks.',
    fullDescription: 'Eliminate manual operational bottlenecks with high-reliability event pipelines. We design self-healing background job processors, webhook infrastructure, and AI-powered document extraction pipelines.',
    iconName: 'Zap',
    deliverables: [
      'Event-Driven Microservice Architectures',
      'Automated Document Processing & Data Parsing',
      'Custom Webhook Gateways & Distributed Queues',
      'ERP / CRM & Enterprise System Connectors',
      'Real-Time Audit Logging & Error Recovery'
    ],
    techStack: ['Celery', 'RabbitMQ', 'Kafka', 'Google Pub/Sub', 'Node.js', 'Python', 'PostgreSQL'],
    sla: '< 50ms Processing Overhead',
    idealFor: 'Organizations looking to replace repetitive manual processes with code.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aegis-financial',
    title: 'Aegis Intelligence',
    clientCategory: 'Fintech & Compliance',
    tagline: 'Autonomous Document Audit Engine powered by RAG & Vector Search',
    summary: 'Engineered a high-concurrency document processing pipeline for financial auditing, reducing audit review cycles from 4 hours to 45 seconds.',
    challenge: 'A financial compliance firm was overwhelmed by manual verification of 500+ page regulatory disclosures and unstructured PDF reports.',
    solution: 'Celestial Devs designed a hybrid vector-keyword RAG architecture using Gemini 2.5 Flash, Qdrant vector database, and an edge-rendered Next.js analyst dashboard.',
    results: [
      { label: 'Audit Speedup', value: '320%' },
      { label: 'Accuracy Benchmark', value: '99.4%' },
      { label: 'Monthly Document Volume', value: '1.2M Pages' }
    ],
    techStack: ['Gemini 2.5 Flash', 'FastAPI', 'Qdrant', 'Next.js 15', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    architectureType: 'Autonomous RAG Pipeline'
  },
  {
    id: 'nova-logistics',
    title: 'Nova Global Logistics',
    clientCategory: 'Supply Chain & IoT',
    tagline: 'Predictive Routing Engine & Real-Time Telemetry Dashboard',
    summary: 'Built a cloud-native event-stream platform processing over 50,000 real-time location and weather events per second.',
    challenge: 'Legacy batch logistics updates resulted in delayed route adjustments and high fuel burn across cross-country fleet vehicles.',
    solution: 'Designed a microservice stream architecture on Google Cloud Run and Redis Pub/Sub, coupled with an ultra-responsive WebGL fleet monitoring map.',
    results: [
      { label: 'Event Throughput', value: '50k/sec' },
      { label: 'Route Delay Reduction', value: '42%' },
      { label: 'Serverless Cost Saved', value: '65%' }
    ],
    techStack: ['Google Cloud Run', 'Redis', 'WebSockets', 'React 19', 'Deck.gl'],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    architectureType: 'Event-Driven Microservices'
  },
  {
    id: 'aether-health',
    title: 'Aether Medical Research',
    clientCategory: 'HealthTech & AI',
    tagline: 'Secure Clinical Trial Analytics & Privacy-Preserving AI Gateway',
    summary: 'Architected a HIPAA-compliant multi-agent research platform enabling bio-analysts to query clinical literature securely.',
    challenge: 'Medical research teams required AI analytical tools while maintaining zero data retention and strict patient record privacy controls.',
    solution: 'Crafted a zero-trust LLM proxy framework with client-side field masking, tokenized audit trails, and encrypted vector embeddings.',
    results: [
      { label: 'Compliance Grade', value: 'SOC2 & HIPAA' },
      { label: 'Query Latency', value: '< 240ms' },
      { label: 'Researchers Onboarded', value: '4,500+' }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Google Cloud KMC'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    architectureType: 'Zero-Trust AI Gateway'
  }
];

export const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'deterministic-rag-systems',
    title: 'Architecting Deterministic RAG Pipelines for High-Stakes Enterprise Workloads',
    category: 'AI Architecture',
    readTime: '6 min read',
    date: 'July 2026',
    author: { name: 'Dr. Evelyn Vance', role: 'Principal AI Architect' },
    excerpt: 'Why standard naive RAG fails in production, and how hybrid dense-sparse indexing with reranking creates hallucination-free AI search.',
    content: [
      'Naive Retrieval-Augmented Generation (RAG) often suffers from hallucination and low precision when deployed to complex enterprise datasets containing tables, legal clauses, and dense numerical figures.',
      'To achieve deterministic performance, modern AI architecture requires a multi-stage retrieval stack: hybrid vector + BM25 keyword matching, reciprocal rank fusion (RRF), and fine-tuned cross-encoder reranking before prompt injection.',
      'In this technical overview, we explore how Celestial Devs structures vector chunking strategies, semantic caching with Redis, and automated evaluation metrics (RAGAS) to maintain 99%+ context accuracy.'
    ],
    tags: ['RAG', 'Vector DB', 'Gemini API', 'Enterprise AI']
  },
  {
    id: 'cloud-run-llm-streaming',
    title: 'Optimizing Serverless Containers for Low-Latency LLM Streaming',
    category: 'Cloud Engineering',
    readTime: '8 min read',
    date: 'June 2026',
    author: { name: 'Marcus Thorne', role: 'Lead Infrastructure Engineer' },
    excerpt: 'A deep-dive into configuring Cloud Run concurrency, HTTP/2 Server-Sent Events (SSE), and memory allocation for microsecond initial token response.',
    content: [
      'Streaming token generation provides immediate visual feedback to users, but standard serverless cold starts can add unwanted latency overhead if container instances are misconfigured.',
      'By tuning Google Cloud Run min-instances, leveraging HTTP/2 streaming protocols, and maintaining warm connection pools to Gemini API gateways, latency-to-first-token can be reduced below 80ms globally.',
      'We share our production-tested Terraform templates and Dockerfile multi-stage build patterns optimized for TypeScript and Python container payloads.'
    ],
    tags: ['Cloud Run', 'Serverless', 'DevOps', 'Performance']
  },
  {
    id: 'luxury-design-systems-ai',
    title: 'Designing Digital Products for the AI-Native Era',
    category: 'UI & Design Systems',
    readTime: '5 min read',
    date: 'May 2026',
    author: { name: 'Seraphina Lin', role: 'Design Systems Architect' },
    excerpt: 'How to transition from static forms to fluid, conversational, and generative user interfaces without losing visual discipline.',
    content: [
      'As artificial intelligence embeds itself into everyday software, user interfaces must evolve beyond rigid input forms without descending into noisy, unstyled chat windows.',
      'We discuss our design philosophy at Celestial Devs: combining luxury dark themes, restrained motion graphics, and contextual canvas controls that make complex machine learning models feel intuitive and empowering.',
      'Includes practical Tailwind CSS token patterns and React dynamic layout techniques for responsive generative outputs.'
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
    description: 'Encrypted communication channels, enterprise RBAC, and payload validation.'
  },
  {
    name: 'Intelligence & Agent Engine',
    icon: 'BrainCircuit',
    techs: ['Gemini 2.5 / 3.0', 'LangChain / LlamaIndex', 'Multi-Agent Routers', 'Function Calling', 'Custom Guardrails'],
    description: 'Autonomous reasoning, structured JSON output generation, and semantic task execution.'
  },
  {
    name: 'Vector & Data Storage',
    icon: 'Database',
    techs: ['Qdrant Vector DB', 'PostgreSQL (pgvector)', 'Redis Cache', 'Google Cloud Storage'],
    description: 'Sub-5ms vector index lookups, distributed transactional state, and document stores.'
  },
  {
    name: 'Cloud & Observability',
    icon: 'Server',
    techs: ['Google Cloud Platform', 'Docker Containers', 'Terraform IaC', 'OpenTelemetry', 'GitHub Actions'],
    description: 'Automated CI/CD deployments, auto-scaling compute, and distributed trace telemetry.'
  }
];
