export interface EducationEntry {
  school: string
  location: string
  program: string
  period: string
  score: string
}

export const education: EducationEntry[] = [
  {
    school: 'Vidyavardhaka College of Engineering',
    location: 'Mysuru',
    program: 'B.E. Information Science Engineering',
    period: '2023 – 2027',
    score: 'CGPA: 9.03',
  },
  {
    school: 'Gokhale Centenary PU College',
    location: 'Uttara Kannada',
    program: '12th',
    period: '',
    score: '95.60%',
  },
  {
    school: 'Mount Litera Zee School',
    location: 'Odisha',
    program: '10th',
    period: '',
    score: '92.16%',
  },
]
