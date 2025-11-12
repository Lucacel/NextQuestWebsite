export const colors = {
  // Your custom colors
  magnolia: "#e9e7f1",
  platinum: "#e6e6e6",
  raisinBlack: "#282938",
  raisinBlack2: "#1a1b25",

  // Base colors for consistency
  background: "#1a1b25",
  foreground: "#e9e7f1",
} as const;

// Type for better TypeScript support
export type ColorKeys = keyof typeof colors;
