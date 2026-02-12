export interface Project {
  id: number;
  slug: string;
  name: string;
  customer: string;
  about: string;
  description: string;
  image: string;
  gallery: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "silverback-mall",
    name: "SilverBack Mall",
    customer: "SilverBack Mall",
    about:
      "Complete electrical infrastructure and power distribution system for one of Kigali's premier commercial complexes.",
    description:
      "Power Plus Technology was entrusted with the full-scale electrical engineering and installation for SilverBack Mall, a flagship commercial development in Kigali. The project encompassed the design and deployment of a robust medium-voltage power distribution network, backup generator integration, and an intelligent load management system capable of supporting over 50 retail units, food courts, and anchor tenants. Our team engineered a reliable power backbone that ensures uninterrupted operations during peak hours, while integrating energy-efficient LED lighting across all common areas, parking structures, and exterior facades. The project was delivered on schedule and has set a new benchmark for commercial electrical installations in the region.",
    image: "/projects/silverback.jpg",
    gallery: ["/projects/silverback.jpg"],
    tags: ["2022-Present", "Commercial"],
  },
  {
    id: 2,
    slug: "lemigo-hotel",
    name: "Lemigo Hotel",
    customer: "Lemigo Hotel",
    about:
      "End-to-end power systems upgrade and smart energy management for a leading hospitality establishment.",
    description:
      "In a landmark engagement with Lemigo Hotel, one of Kigali's most prestigious hospitality venues, Power Plus Technology undertook a comprehensive electrical systems overhaul. The scope included upgrading the main switchgear, installing a state-of-the-art automatic transfer switch (ATS) system for seamless generator-to-mains transitions, and rewiring critical infrastructure across all guest floors, conference halls, and kitchen facilities. We also deployed a smart energy monitoring platform that provides real-time consumption analytics, enabling the hotel management to reduce energy costs by an estimated 25%. The project demanded meticulous coordination to minimize disruption to ongoing hotel operations, and was completed with zero downtime to guest services.",
    image: "/projects/lemigo-2.jpeg",
    gallery: [
      "/projects/lemigo-1.jpeg",
      "/projects/lemigo-2.jpeg",
      "/projects/lemigo-3.jpeg",
      "/projects/lemigo-4.jpeg",
      "/projects/lemigo-5.jpeg",
      "/projects/lemigo-6.jpeg",
    ],
    tags: ["2021-Present", "Hospitality"],
  },
  {
    id: 3,
    slug: "madras-apartments",
    name: "Madras Apartments",
    customer: "Madras Apartments",
    about:
      "Residential electrical design and installation serving a modern multi-story apartment complex.",
    description:
      "Power Plus Technology delivered the complete electrical design and installation for Madras Apartments, a contemporary multi-story residential development. The project involved designing individual metering systems for each unit, installing a centralized power distribution board, and wiring all apartments to modern safety standards including RCCB protection and surge suppression on every floor. Common area lighting was designed with motion-sensor automation for energy efficiency, and the parking basement was outfitted with emergency lighting and ventilation control systems. Our team also pre-wired units for future solar panel integration, future-proofing the building's energy infrastructure. The result is a safe, efficient, and resident-friendly electrical system built to last.",
    image: "/projects/madras.jpg",
    gallery: ["/projects/madras.jpg"],
    tags: ["2023-Present", "Residential"],
  },
  {
    id: 4,
    slug: "impinga-village",
    name: "Impinga Village",
    customer: "Impinga Village",
    about:
      "Full electrical infrastructure for a mixed-use residential and commercial village development.",
    description:
      "Power Plus Technology was contracted to deliver the entire electrical infrastructure for Impinga Village, a growing mixed-use development on the outskirts of Kigali. The project included designing and installing a medium-voltage ring main unit to serve the village's residential blocks, retail spaces, and community facilities. Our engineers implemented underground cabling throughout the estate, ensuring both aesthetic appeal and protection against weather-related outages. Each residential cluster was fitted with smart metering and dedicated distribution boards, while commercial units received three-phase power supplies to accommodate high-demand equipment. Street lighting, perimeter security lighting, and a centralized backup generator system were also part of the scope. The project stands as a model for efficient power delivery in emerging residential communities.",
    image: "/projects/impinga-village.webp",
    gallery: ["/projects/impinga-village.webp"],
    tags: ["2024-Present", "Mixed-Use"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
