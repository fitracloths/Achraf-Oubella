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
    // Fix: Changed type from React.ReactNode to React.ReactElement to resolve an error in `components/Services.tsx`.
    // React.cloneElement expects a React.ReactElement, and the broader React.ReactNode type was causing a type mismatch.
    icon: React.ReactElement;
}

export interface Skill {
    name: string;
    level: number; // Percentage for progress bar
}