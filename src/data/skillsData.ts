export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export const skillsData: SkillCategory[] = [
  {
    name: "Software Development",
    skills: [
      { name: "C", level: 85 },
      { name: "Java", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 75 }
    ]
  },
  {
    name: "Video Production",
    skills: [
      { name: "DaVinci Resolve", level: 85 },
      { name: "Camera Work", level: 75 },
      { name: "Color Grading", level: 80 },
      { name: "Storytelling", level: 80 }
    ]
  },
  {
    name: "Languages",
    skills: [
      { name: "Arabic", level: 100 },
      { name: "English", level: 95 },
      { name: "French", level: 90 },
      { name: "Polish", level: 40 },
      { name: "German", level: 35 },
      { name: "Russian", level: 30 }
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Teamwork", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Patience", level: 95 }
    ]
  }
];