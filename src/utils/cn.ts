import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMergeConfig = {
  extend: {
    classGroups: {
      // Create separate group for custom font sizes to avoid conflicts with text color
      fontSize: [],
      // Create separate group for text colors to avoid conflicts with font size
      color: [],
    },
  },
} as Parameters<typeof extendTailwindMerge>[0];

const customTwMerge = extendTailwindMerge(twMergeConfig);

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
