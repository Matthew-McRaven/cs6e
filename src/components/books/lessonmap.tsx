'use client';

import React, { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Position,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { lessons, edges as lessonEdges, LessonType } from '../../services/interactive_book/lesson';

// basic colors by lesson type
const typeColors: Record<LessonType, string> = {
  core: '#3b82f6',
  branch: '#a855f7',
  project: '#f97316',
};

type LessonNodeData = {
  label: string;
  type: LessonType;
  completed?: boolean;
};

// ---- simple vertical DAG layout (top → bottom) ----

// assign each node to an integer "level" based on edges
function computeLevels(): Map<string, number> {
  const inDegree = new Map<string, number>();
  const children = new Map<string, string[]>();

  // init
  for (const lesson of lessons) {
    inDegree.set(lesson.id, 0);
    children.set(lesson.id, []);
  }

  // build in-degree and adjacency
  for (const e of lessonEdges) {
    inDegree.set(e.target, (inDegree.get(e.target) ?? 0) + 1);
    children.get(e.source)!.push(e.target);
  }

  const level = new Map<string, number>();
  const queue: string[] = [];

  // start with roots (no incoming edges)
  for (const [id, deg] of inDegree.entries()) {
    if (deg === 0) {
      level.set(id, 0);
      queue.push(id);
    }
  }

  // Kahn-style traversal to assign levels
  while (queue.length > 0) {
    const id = queue.shift()!;
    const currLevel = level.get(id)!;

    for (const childId of children.get(id) ?? []) {
      const newDeg = (inDegree.get(childId) ?? 0) - 1;
      inDegree.set(childId, newDeg);

      const prevLevel = level.get(childId) ?? 0;
      const candidate = currLevel + 1;
      if (candidate > prevLevel) {
        level.set(childId, candidate);
      }

      if (newDeg === 0) {
        queue.push(childId);
      }
    }
  }

  // any disconnected / cyclic leftovers: default to 0
  for (const lesson of lessons) {
    if (!level.has(lesson.id)) {
      level.set(lesson.id, 0);
    }
  }

  return level;
}

function buildInitialGraph(): { nodes: Node<LessonNodeData>[]; edges: Edge[] } {
  const level = computeLevels();

  // group by level
  const byLevel = new Map<number, string[]>();
  for (const lesson of lessons) {
    const l = level.get(lesson.id) ?? 0;
    if (!byLevel.has(l)) byLevel.set(l, []);
    byLevel.get(l)!.push(lesson.id);
  }

  const verticalSpacing = 140;   // distance between rows
  const horizontalSpacing = 260; // distance between nodes in same row

  const nodes: Node<LessonNodeData>[] = [];
  for (const lesson of lessons) {
    const l = level.get(lesson.id) ?? 0;
    const idsAtLevel = byLevel.get(l)!;
    const idxInLevel = idsAtLevel.indexOf(lesson.id);

    const count = idsAtLevel.length;
    // center nodes around x = 0
    const x =
      (idxInLevel - (count - 1) / 2) * horizontalSpacing;
    const y = l * verticalSpacing;

    nodes.push({
      id: lesson.id,
      position: { x, y },
      data: {
        label: lesson.label,
        type: lesson.type,
        completed: false,
      },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: {
        borderRadius: 12,
        padding: 10,
        border: '1px solid #111827',
        fontSize: 12,
        color: '#ffffff',
        background: typeColors[lesson.type],
        minWidth: 200,
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        cursor: 'pointer',
      },
    });
  }

  const edges: Edge[] = lessonEdges.map((e) => ({
    id: `${e.source}->${e.target}`,
    source: e.source,
    target: e.target,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
    },
    style: {
      stroke: '#9ca3af',
      strokeWidth: 2,
    },
  }));

  return { nodes, edges };
}

// ---- React component ----

export const LessonMap: React.FC = () => {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => buildInitialGraph(),
    []
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const bookmarkLessonId = 'loops'; // example; plug your own state here

  const paintedNodes = useMemo(
    () =>
      nodes.map((n) => {
        const isBookmark = n.id === bookmarkLessonId;
        return {
          ...n,
          style: {
            ...n.style,
            boxShadow: isBookmark
              ? '0 0 0 3px #22d3ee, 0 8px 18px rgba(0,0,0,0.3)'
              : n.style?.boxShadow,
          },
        };
      }),
    [nodes, bookmarkLessonId]
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={paintedNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.25}
        maxZoom={2}
      >
        <Background gap={16} size={1} />
        <Controls />
        <MiniMap
          pannable
          zoomable
          nodeColor={(node) =>
            typeColors[(node.data as LessonNodeData).type] || '#6b7280'
          }
        />
      </ReactFlow>
    </div>
  );
};

export default LessonMap;