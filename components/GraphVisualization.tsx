'use client';

import { motion } from 'framer-motion';

interface Node {
  id: number; cx: number; cy: number; r: number;
  fill: string; stroke?: string; label: string;
  float?: boolean; floatDuration?: number;
}

interface Edge { from: number; to: number; violet?: boolean; }

const NODES: Node[] = [
  { id: 0,  cx: 450, cy: 100, r: 14, fill: '#5b21b6', label: 'R-2 Zone',        float: true,  floatDuration: 3.2 },
  { id: 1,  cx: 230, cy:  75, r: 10, fill: '#7c3aed', label: 'Parcel 4721',      float: true,  floatDuration: 3.8 },
  { id: 2,  cx: 670, cy:  75, r:  8, fill: '#ede9fe', stroke: '#c4b5fd', label: 'FAR 2.4'  },
  { id: 3,  cx: 110, cy: 165, r: 12, fill: '#5b21b6', label: 'Commercial'   },
  { id: 4,  cx: 345, cy: 210, r:  8, fill: '#7c3aed', label: 'ADU Eligible',     float: true,  floatDuration: 4.1 },
  { id: 5,  cx: 565, cy: 195, r: 10, fill: '#ede9fe', stroke: '#c4b5fd', label: 'Overlay'   },
  { id: 6,  cx: 790, cy: 130, r:  8, fill: '#5b21b6', label: 'Historic'     },
  { id: 7,  cx: 170, cy: 270, r:  8, fill: '#ede9fe', stroke: '#c4b5fd', label: 'Upzone'    },
  { id: 8,  cx: 400, cy: 285, r: 10, fill: '#5b21b6', label: 'Variance'     },
  { id: 9,  cx: 625, cy: 275, r: 12, fill: '#7c3aed', label: 'Mixed Use',        float: true,  floatDuration: 3.5 },
  { id: 10, cx: 755, cy: 245, r:  8, fill: '#ede9fe', stroke: '#c4b5fd', label: 'Transit'   },
  { id: 11, cx:  75, cy:  75, r: 10, fill: '#7c3aed', label: 'Residential'  },
  { id: 12, cx: 870, cy: 195, r:  8, fill: '#5b21b6', label: 'Pending'      },
  { id: 13, cx: 500, cy:  25, r:  8, fill: '#ede9fe', stroke: '#c4b5fd', label: 'Industrial' },
];

const EDGES: Edge[] = [
  { from: 0, to: 1, violet: true  },
  { from: 0, to: 2, violet: true  },
  { from: 0, to: 4, violet: true  },
  { from: 0, to: 5  },
  { from: 1, to: 3, violet: true  },
  { from: 1, to: 11 },
  { from: 1, to: 4  },
  { from: 2, to: 6  },
  { from: 2, to: 13 },
  { from: 3, to: 7  },
  { from: 4, to: 8, violet: true  },
  { from: 5, to: 9  },
  { from: 6, to: 10 },
  { from: 6, to: 12 },
  { from: 7, to: 8  },
  { from: 8, to: 9, violet: true  },
  { from: 9, to: 10 },
  { from: 10, to: 12 },
  { from: 2, to: 5  },
  { from: 11, to: 3 },
];

export default function GraphVisualization() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 overflow-hidden">
      <svg
        viewBox="0 0 950 320"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        style={{ maxHeight: 320 }}
        aria-label="ZoningGraph knowledge graph visualization"
      >
        {/* Edges */}
        {EDGES.map((e, i) => {
          const a = NODES[e.from];
          const b = NODES[e.to];
          return (
            <motion.path
              key={i}
              d={`M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`}
              stroke={e.violet ? 'rgba(91,33,182,0.3)' : 'rgba(228,228,231,1)'}
              strokeWidth={e.violet ? 1.5 : 1}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.04, ease: 'easeInOut' }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.06, ease: "easeOut" }}
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          >
            {/* Node circle */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.fill}
              stroke={node.stroke ?? 'none'}
              strokeWidth={node.stroke ? 1 : 0}
              animate={node.float ? { y: [0, -(node.floatDuration! * 2.5), 0] } : {}}
              transition={
                node.float
                  ? { duration: node.floatDuration, repeat: Infinity, ease: 'easeInOut' }
                  : {}
              }
            />

            {/* Label */}
            <motion.text
              x={node.cx}
              y={node.cy + node.r + 14}
              textAnchor="middle"
              fontSize="9"
              fontFamily="Urbanist, sans-serif"
              fontWeight="600"
              fill="#a1a1aa"
              animate={node.float ? { y: [0, -(node.floatDuration! * 2.5), 0] } : {}}
              transition={
                node.float
                  ? { duration: node.floatDuration, repeat: Infinity, ease: 'easeInOut' }
                  : {}
              }
            >
              {node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
