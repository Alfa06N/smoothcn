// lib/smoothcn/transitions.ts
export const sTransitions = {
  spring: {
    gentle: { type: "spring", stiffness: 100, damping: 20 },
    snappy: { type: "spring", stiffness: 300, damping: 30, mass: 1 },
    bouncy: { type: "spring", stiffness: 400, damping: 10 },
  },
  ease: {
    standard: [0.4, 0, 0.2, 1],
    inOut: "easeInOut",
  },
} as const;
