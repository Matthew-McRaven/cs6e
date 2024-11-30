"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, Variants } from "framer-motion";

const nodes = [
  { id: 1, x: 112.5, y: 50, connections: [2] },
  { id: 2, x: 112.5, y: 100, connections: [3] },
  { id: 3, x: 112.5, y: 150, connections: [4] },
  { id: 4, x: 112.5, y: 200, connections: [5] },
  { id: 5, x: 112.5, y: 250, connections: [6, 7, 8, 12] },
  { id: 6, x: 37.5, y: 325, connections: [] },
  { id: 7, x: 112.5, y: 325, connections: [] },
  { id: 8, x: 187.5, y: 325, connections: [9] },
  { id: 9, x: 187.5, y: 375, connections: [] },
  { id: 10, x: 262.5, y: 200, connections: [11] },
  { id: 11, x: 262.5, y: 250, connections: [12] },
  { id: 12, x: 262.5, y: 325, connections: [] },
];

const graphVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const nodeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

export default function ChapterDependencyGraph() {
  const controls = useAnimation();
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = graphRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (graph) {
      observer.observe(graph);
    }

    return () => {
      if (graph) {
        observer.unobserve(graph);
      }
    };
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        ref={graphRef}
        className="relative bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900 dark:to-violet-800 rounded-xl shadow-xl p-4 overflow-hidden flex items-center justify-center"
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 300 425"
          preserveAspectRatio="xMidYMid meet"
          aria-labelledby="graph-title graph-desc"
          variants={graphVariants}
          initial="hidden"
          animate={controls}
        >
          <title id="graph-title">Chapter Dependency Graph</title>
          <desc id="graph-desc">
            A vertical graph showing the dependencies between chapters, numbered from 1 to 12.
          </desc>

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect x="0" y="0" width="300" height="425" fill="url(#gradient)" rx="8" ry="8" />

          {/* Connections */}
          <motion.g variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.6 } } }}>
            {nodes.map((node) =>
              node.connections.map((targetId) => {
                const target = nodes.find((n) => n.id === targetId);
                return (
                  target && (
                    <motion.line
                      key={`${node.id}-${targetId}`}
                      x1={node.x}
                      y1={node.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-violet-400 dark:text-violet-300"
                      variants={lineVariants}
                    />
                  )
                );
              })
            )}
          </motion.g>

          {/* Nodes */}
          <motion.g variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            {nodes.map((node) => (
              <motion.g key={node.id} variants={nodeVariants}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="20"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={cn("transition-colorstext-violet-400 dark:text-violet-300  text-violet-500")}
                />
                <motion.text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dy=".3em"
                  className="text-sm font-medium pointer-events-none fill-violet-800 dark:fill-violet-200"
                >
                  {node.id}
                </motion.text>
              </motion.g>
            ))}
          </motion.g>
        </motion.svg>
      </div>
    </div>
  );
}
