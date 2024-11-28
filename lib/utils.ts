import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // tailwind-merge is a utility function that merges tailwind classes
  // clsx is a utility function that handles conditional classes
  return twMerge(clsx(inputs))
}
