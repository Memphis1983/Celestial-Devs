import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// API Health Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    studio: 'Celestial Devs AI Studio',
    timestamp: new Date().toISOString(),
    geminiConfigured: !!process.env.GEMINI_API_KEY
  });
});

// AI Architecture Blueprint Generator Endpoint
app.post('/api/generate-architecture', async (req, res) => {
  try {
    const { projectTitle, projectDescription, targetScale, keyRequirements } = req.body;

    if (!projectDescription) {
      return res.status(400).json({ error: 'Project description is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `You are a Senior Staff Software Engineer and Principal Cloud Architect at Celestial Devs, a world-class AI engineering studio.
Analyze the following client project request and generate a detailed engineering architecture blueprint in strict JSON format.

Project Title: ${projectTitle || 'Untitled Enterprise Initiative'}
Description: ${projectDescription}
Target Scale: ${targetScale || 'Medium Enterprise'}
Key Requirements: ${keyRequirements || 'High availability, AI integration, responsive UI'}

Respond ONLY with valid JSON matching this schema:
{
  "projectTitle": string,
  "summary": string,
  "architectureType": string,
  "recommendedStack": {
    "frontend": string[],
    "backend": string[],
    "aiAndMl": string[],
    "databaseAndVector": string[],
    "cloudAndDevOps": string[]
  },
  "keyComponents": [
    { "name": string, "description": string }
  ],
  "estimatedTimelineWeeks": number,
  "securityAndCompliance": string[],
  "estimatedComplexity": "Standard" | "Advanced" | "Enterprise",
  "keyRisksAndMitigations": [
    { "risk": string, "mitigation": string }
  ]
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          const parsedBlueprint = JSON.parse(response.text);
          return res.json({ success: true, blueprint: parsedBlueprint });
        }
      } catch (geminiError) {
        console.warn('Gemini API call warning, falling back to rule-based architect:', geminiError);
      }
    }

    // High quality fallback architect if API key not available or errored
    const fallbackBlueprint = {
      projectTitle: projectTitle || 'AI-Powered Digital System',
      summary: `Custom high-performance architecture tailored for "${projectDescription.substring(0, 90)}...". Features zero-trust gateway routing, vector indexing, and automated edge caching.`,
      architectureType: 'Cloud-Native Multi-Agent System',
      recommendedStack: {
        frontend: ['Next.js 15 (App Router)', 'React 19', 'Tailwind CSS', 'Framer Motion'],
        backend: ['Node.js Express / Python FastAPI', 'TypeScript', 'GraphQL / REST'],
        aiAndMl: ['Gemini 2.5 Flash', 'Qdrant Vector Engine', 'LangChain Agents'],
        databaseAndVector: ['PostgreSQL with pgvector', 'Redis Session Store', 'Google Cloud Storage'],
        cloudAndDevOps: ['Google Cloud Run', 'Docker Multi-stage', 'Terraform IaC', 'GitHub Actions']
      },
      keyComponents: [
        { name: 'Edge Client Shell', description: 'Next.js 15 micro-frontend with real-time UI state hydration.' },
        { name: 'Secure API Gateway', description: 'Zero-trust auth proxy with JWT validation and rate limiting.' },
        { name: 'Autonomous Agent Router', description: 'Orchestrates intent classification and RAG vector lookups.' },
        { name: 'Vector Context Store', description: 'High-density Qdrant embeddings index for sub-10ms similarity match.' }
      ],
      estimatedTimelineWeeks: targetScale === 'Enterprise' ? 10 : 6,
      securityAndCompliance: ['SOC2 Type II Ready', 'AES-256 Data Encryption at Rest', 'OWASP Top 10 Guardrails'],
      estimatedComplexity: targetScale === 'Enterprise' ? 'Enterprise' : 'Advanced',
      keyRisksAndMitigations: [
        { risk: 'LLM Response Latency Variance', mitigation: 'Implement semantic Redis caching and SSE streaming response.' },
        { risk: 'Unstructured Data Parsing', mitigation: 'Employ hybrid OCR & multi-modal Gemini layout parsing.' }
      ]
    };

    return res.json({ success: true, blueprint: fallbackBlueprint, isFallback: true });

  } catch (error) {
    console.error('Error generating architecture:', error);
    res.status(500).json({ error: 'Failed to generate architecture blueprint.' });
  }
});

// Contact & Discovery Intake Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, projectType, budget, timeline, details } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  // Record submission safely
  console.log(`[Celestial Devs Consultation Request] From: ${name} (${email}) | Company: ${company || 'N/A'} | Type: ${projectType}`);

  return res.json({
    success: true,
    message: 'Your project inquiry has been logged with Celestial Devs Engineering Leadership. We will review your technical requirements and contact you within 24 hours.',
    receiptId: `CD-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

// Vite Development & Production Integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Celestial Devs Server running on port ${PORT}`);
  });
}

startServer();
