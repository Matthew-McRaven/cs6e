// lessons.ts
export type LessonType = 'core' | 'branch' | 'project';

export interface Lesson {
  id: string;
  label: string;
  type: LessonType;
}

export const lessons: Lesson[] = [
  // Chapter 04 -- Computer Architecture
  // Pep/10 Hardware
  { id: '04.1.1',   label: 'The Central Processing Unit',  type: 'core', },
  { id: '04.1.2',   label: 'Main Memory',                  type: 'core',},
  { id: '04.1.3',   label: 'Input/Output Devices',         type: 'core' },
  { id: '04.1.4',   label: 'Data and Control',             type: 'core' },
  { id: '04.1.5',   label: 'Instruction Format',           type: 'core' },
  // Direct Addressing
  { id: '04.2',     label: 'Direct Addressing',                    type: 'core',},
  { id: '04.2.1',   label: 'The Load Word Insruction',             type: 'core', },
  { id: '04.2.2',   label: 'The Store Word Instruction',           type: 'core',},
  { id: '04.2.3',   label: 'The Load Byte Instruction',            type: 'core' },
  { id: '04.2.4',   label: 'The Store Byte Instruction',           type: 'core' },
  { id: '04.2.5',   label: 'The Arithmetic Instructions',          type: 'core' },
  { id: '04.2.6',   label: 'The Logic Instructions',               type: 'core' },
  { id: '04.2.7',   label: 'Accessing the Memory-Mapped Ports',    type: 'core' },
  { id: '04.2.8',   label: 'A Character Output Program',           type: 'branch' },
  { id: '04.3',     label: 'von Neumann Machines',                 type: 'core',},  
];

export interface LessonEdge {
  source: string;
  target: string;
}

export const edges: LessonEdge[] = [
  // Chapter 04 -- Computer Architecture
  // Pep/10 Hardware
  { source: '04.1.1',  target: '04.1.2' },
  { source: '04.1.2',  target: '04.1.3' },
  { source: '04.1.1',  target: '04.1.4' },
  { source: '04.1.4',  target: '04.1.5' },
  { source: '04.1.3',  target: '04.2' },
  { source: '04.1.5',  target: '04.2' },
  // Direct Addressing

  { source: '04.2',    target: '04.2.1' },
  { source: '04.2',    target: '04.2.2' },
  { source: '04.2.1',  target: '04.2.3' },
  { source: '04.2.3',  target: '04.2.5' },
  { source: '04.2.2',  target: '04.2.4' },
  { source: '04.2.4',  target: '04.2.5' },
  { source: '04.2.5',  target: '04.2.6' },
  { source: '04.2.5',  target: '04.2.7' },
  { source: '04.2.7',  target: '04.2.8' },
  { source: '04.2.7',  target: '04.3' },
  // von Neumann Machines
];
