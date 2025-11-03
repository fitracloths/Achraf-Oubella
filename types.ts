export type ProjectCategory = "All" | "Reels" | "Commercials" | "Real Estate" | "Vlogs" | "Cinematic" | "Ads";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  thumbnailUrl: string;
  videoUrl: string; // YouTube embed URL
  description: string;
  client: string;
  role: string;
  tools: string[];
  isFeatured?: boolean;
}

export interface Client {
  name: string;
  logoUrl: string;
  caption: string;
}

export interface Service {
    title: string;
    // Fix: The type for the icon property was too generic. I've made it more specific to allow `className` to be passed via `React.cloneElement` in `Services.tsx`, which resolves the TypeScript error.
    icon: React.ReactElement<{ className?: string }>;
}

export interface Skill {
    name: string;
    level: number; // Percentage for progress bar
}