
import React from 'react';
import { Project, Client, Service, Skill } from './types';
import { FilmIcon, CameraIcon, SparklesIcon, ChartBarIcon, StarIcon, PaintBrushIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MHL Market - Product Showcase",
    category: "Commercials",
    tags: ["E-commerce", "Social Media", "Motion Graphics"],
    year: 2024,
    thumbnailUrl: "https://picsum.photos/seed/project1/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Developed and launched a series of high-impact video ads for MHL Market's new product line, leading to a 40% increase in engagement. Managed the entire creative pipeline from concept to campaign launch.",
    client: "MHL Market",
    role: "Creative Lead & Ads Manager",
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Luxury Villa Tour",
    category: "Real Estate",
    tags: ["Drone", "Cinematic", "Color Grading"],
    year: 2023,
    thumbnailUrl: "https://picsum.photos/seed/project2/800/450",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    description: "A cinematic walkthrough of a luxury property, utilizing smooth camera movements, drone footage, and expert color grading to highlight the architectural beauty and create an aspirational mood.",
    client: "HighEnd Properties",
    role: "Video Editor & Colorist",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro"],
    isFeatured: true,
  },
  {
    id: 3,
    title: "Done - Social Reels Series",
    category: "Reels",
    tags: ["Fast-paced", "Trendy", "Social Media"],
    year: 2024,
    thumbnailUrl: "https://picsum.photos/seed/project3/800/450",
    videoUrl: "https://www.youtube.com/embed/2-crBg6wpp0",
    description: "Produced a series of over 20 engaging, fast-paced reels for 'Done', focusing on trending audio and viral formats to boost brand visibility and audience interaction on Instagram and TikTok.",
    client: "Done",
    role: "Video Editor",
    tools: ["Adobe Premiere Pro"],
    isFeatured: true,
  },
  {
    id: 4,
    title: "AGN PRO - Podcast Highlights",
    category: "Vlogs",
    tags: ["Interview", "Multi-cam", "Social Media"],
    year: 2023,
    thumbnailUrl: "https://picsum.photos/seed/project4/800/450",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    description: "Edited multi-camera interview footage for AGN PRO's podcast series, creating compelling short-form clips for social media promotion and full-length episodes for YouTube.",
    client: "AGN PRO",
    role: "Multimedia Producer",
    tools: ["Adobe Premiere Pro"],
  },
  {
    id: 5,
    title: "AfriShop - E-commerce Ads",
    category: "Ads",
    tags: ["Product", "Conversion-focused", "E-commerce"],
    year: 2024,
    thumbnailUrl: "https://picsum.photos/seed/project5/800/450",
    videoUrl: "https://www.youtube.com/embed/J---aiyznGQ",
    description: "Created a suite of persuasive product commercials for AfriShop, an online store. The ads were optimized for various social platforms to drive conversions and sales.",
    client: "AfriShop",
    role: "Video Ads Creator",
    tools: ["Adobe After Effects", "Adobe Premiere Pro"],
  },
  {
    id: 6,
    title: "Desert Echoes - Short Film",
    category: "Cinematic",
    tags: ["Narrative", "Storytelling", "Color Grading"],
    year: 2023,
    thumbnailUrl: "https://picsum.photos/seed/project6/800/450",
    videoUrl: "https://www.youtube.com/embed/s3mw4_g565E",
    description: "A short cinematic piece telling a wordless story through powerful visuals and sound design. This project showcases narrative editing skills and advanced cinematic color grading techniques in DaVinci Resolve.",
    client: "Personal Project",
    role: "Director & Editor",
    tools: ["DaVinci Resolve", "Adobe After Effects"],
    isFeatured: true,
  }
];

export const CATEGORIES: string[] = ["All", "Reels", "Commercials", "Real Estate", "Vlogs", "Cinematic", "Ads"];

export const SERVICES: Service[] = [
    { title: "Video Editing", icon: <FilmIcon /> },
    { title: "Motion Graphics", icon: <SparklesIcon /> },
    { title: "Ads Creation & Launch", icon: <ChartBarIcon /> },
    { title: "Photography", icon: <CameraIcon /> },
    { title: "Color Grading", icon: <PaintBrushIcon /> },
    { title: "Storytelling", icon: <StarIcon /> },
];

export const CLIENTS: Client[] = [
    { name: "Done", logoUrl: "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg", caption: "Edited reels for Done" },
    { name: "MHL Market", logoUrl: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg", caption: "Creative lead + ads for MHL Market" },
    { name: "AfriShop", logoUrl: "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg", caption: "Video ads for AfriShop" },
    { name: "SNRT", logoUrl: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg", caption: "Internship at Al Aoula" },
];


export const SKILLS: Skill[] = [
    { name: "Adobe Premiere Pro", level: 95 },
    { name: "Adobe After Effects", level: 90 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Adobe Photoshop", level: 90 },
];
