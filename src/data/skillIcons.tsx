import type { ComponentType } from 'react'
import {
  Coffee,
  Webhook,
  ShieldCheck,
  Search,
  Bot,
  Database,
  Cloud,
  Binary,
  Boxes,
  Cpu,
  Code2,
  Server,
  LayoutGrid,
  BrainCircuit,
} from 'lucide-react'
import {
  SiPython,
  SiC,
  SiSpringboot,
  SiFastapi,
  SiHibernate,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiLanggraph,
  SiModelcontextprotocol,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostgresql,
} from 'react-icons/si'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconType = ComponentType<any>

// Per-skill icon: real brand marks where one exists offline, a close
// conceptual icon where a technology has no brand mark (e.g. REST APIs, DSA).
export const skillIcons: Record<string, IconType> = {
  // Languages
  Java: Coffee,
  Python: SiPython,
  C: SiC,

  // Backend
  'Spring Boot': SiSpringboot,
  FastAPI: SiFastapi,
  'REST APIs': Webhook,
  'JPA / Hibernate': SiHibernate,
  'Spring Security': ShieldCheck,

  // Frontend
  'React.js': SiReact,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,

  // AI / Intelligent Systems
  LangGraph: SiLanggraph,
  'Retrieval-Augmented Generation (RAG)': Search,
  'Model Context Protocol (MCP)': SiModelcontextprotocol,
  'AI Agents': Bot,
  ChromaDB: Database,

  // Cloud & DevOps
  'Amazon S3': Cloud,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,

  // Databases
  PostgreSQL: SiPostgresql,

  // Core Computer Science
  'Data Structures & Algorithms': Binary,
  'Object-Oriented Programming': Boxes,
  DBMS: Database,
  'Operating Systems': Cpu,
}

// One representative icon per category, shown next to the category label.
export const categoryIcons: Record<string, IconType> = {
  languages: Code2,
  backend: Server,
  frontend: LayoutGrid,
  ai: BrainCircuit,
  cloud: Cloud,
  databases: Database,
  cs: Cpu,
}
