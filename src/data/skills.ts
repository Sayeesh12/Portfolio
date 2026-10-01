export interface SkillCategory {
  id: string
  label: string
  note: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    note: 'What I think in',
    items: ['Java', 'Python', 'C'],
  },
  {
    id: 'backend',
    label: 'Backend',
    note: 'Services & APIs',
    items: ['Spring Boot', 'FastAPI', 'REST APIs', 'JPA / Hibernate', 'Spring Security'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    note: 'Interfaces',
    items: ['React.js', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'ai',
    label: 'AI / Intelligent Systems',
    note: 'Agents & retrieval',
    items: ['LangGraph', 'Retrieval-Augmented Generation (RAG)', 'Model Context Protocol (MCP)', 'AI Agents', 'ChromaDB'],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    note: 'Shipping & infra',
    items: ['Amazon S3', 'Docker', 'Git', 'GitHub', 'Vercel'],
  },
  {
    id: 'databases',
    label: 'Databases',
    note: 'Where state lives',
    items: ['PostgreSQL', 'ChromaDB'],
  },
  {
    id: 'cs',
    label: 'Core Computer Science',
    note: 'The fundamentals',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'],
  },
]
