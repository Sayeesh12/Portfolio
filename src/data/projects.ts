export interface Project {
  id: string
  index: string
  title: string
  description: string
  stack: string[]
  highlights: { title: string; body: string; items?: string[] }[]
  github: string
  diagram: 'clinical' | 'tracker'
}

export const projects: Project[] = [
  {
    id: 'clinical-agent',
    index: '01',
    title: 'Clinical Workflow Automation Agent',
    description:
      'Architected a high-reliability AI agent backend using FastAPI, LangGraph, and Docker to streamline administrative workflows while maintaining strict operational boundaries.',
    stack: ['FastAPI', 'LangGraph', 'Amazon S3', 'PostgreSQL', 'RAG', 'MCP', 'Docker'],
    highlights: [
      {
        title: 'Protocol layering',
        body: 'Used Model Context Protocol (MCP) to decouple the agent into dedicated, independently addressable components.',
        items: ['Patient services', 'Knowledge-base search', 'External communication'],
      },
      {
        title: 'Offline RAG pipeline',
        body: 'Built an automated document ingestion workflow to parse and vector-index SOP documents for semantic retrieval.',
        items: ['Amazon S3', 'ChromaDB', 'pypdf'],
      },
      {
        title: 'Risk mitigation',
        body: 'Integrated Human-in-the-Loop (HITL) approval interrupts in LangGraph state machines to require explicit confirmation before sensitive actions.',
        items: ['Email dispatch', 'Appointment scheduling'],
      },
      {
        title: 'Data integrity & testing',
        body: 'Used a typed, migration-driven persistence layer with automated test coverage.',
        items: ['PostgreSQL', 'SQLAlchemy 2.0', 'Alembic', 'pytest'],
      },
    ],
    github: 'https://github.com/Sayeesh12/Clinical-Workflow-agent',
    diagram: 'clinical',
  },
  {
    id: 'issue-tracker',
    index: '02',
    title: 'Issue Tracking System',
    description:
      'Engineered a full-stack, production-minded issue management platform inspired by modern project-management tools such as Linear and Jira.',
    stack: ['Spring Boot', 'React.js', 'PostgreSQL', 'REST APIs', 'Spring Security', 'JPA/Hibernate'],
    highlights: [
      {
        title: 'Layered architecture',
        body: 'Implemented strict separation of concerns using DTO contracts and JPA entities.',
        items: ['Controller', 'Service', 'Repository'],
      },
      {
        title: 'Access control & security',
        body: 'Implemented granular Role-Based Access Control (RBAC) — project owners manage administrative permissions while assignees manage issue status transitions.',
      },
      {
        title: 'Authentication & safety',
        body: 'Stateless, secure authentication with defensive defaults across the API surface.',
        items: ['JWT stateless authentication', 'BCrypt password hashing', 'CORS configuration', 'Global exception handling'],
      },
      {
        title: 'State lifecycle & auditing',
        body: 'Designed structured audit logging to track issue status transitions, comments, user activity, and project history.',
      },
    ],
    github: 'https://github.com/Sayeesh12/Issue-tracker',
    diagram: 'tracker',
  },
]
