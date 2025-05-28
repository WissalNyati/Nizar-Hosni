export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EcoTracker Tunisia",
    description: "A web application for tracking and visualizing environmental data in Tunisia, helping researchers and activists monitor climate change impacts.",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Chart.js", "Node.js", "Environmental Data"],
    liveUrl: "https://eco-tracker-tunisia.netlify.app",
    codeUrl: "https://github.com/nizarhosni/eco-tracker"
  },
  {
    id: 2,
    title: "TunisianLingo",
    description: "An interactive platform for learning Tunisian Arabic dialect, featuring lessons, quizzes, and cultural context for language learners.",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Java", "Spring Boot", "MySQL", "Language Learning"],
    liveUrl: "https://tunisian-lingo.herokuapp.com",
    codeUrl: "https://github.com/nizarhosni/tunisian-lingo"
  },
  {
    id: 3,
    title: "Tunisia's Hidden Gems",
    description: "A documentary series showcasing lesser-known cultural and historical sites across Tunisia, edited with DaVinci Resolve.",
    image: "https://images.pexels.com/photos/12715975/pexels-photo-12715975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["DaVinci Resolve", "Documentary", "Cultural Heritage"],
    liveUrl: "https://vimeo.com/nizarhosni/hidden-gems"
  },
  {
    id: 4,
    title: "Community Aid Connect",
    description: "A platform connecting volunteers with local community initiatives, featuring real-time updates and project tracking.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["C", "SQLite", "Community Support"],
    liveUrl: "https://community-aid-connect.netlify.app",
    codeUrl: "https://github.com/nizarhosni/community-aid"
  }
];