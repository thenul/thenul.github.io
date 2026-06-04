export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type Skill = {
  name: string;
  level: SkillLevel;
  percent: number;
};

export const skills: Skill[] = [
  { name: "C Programming",     level: "Advanced",     percent: 82 },
  { name: "Circuit Analysis",  level: "Advanced",     percent: 78 },
  { name: "Microcontrollers",  level: "Intermediate", percent: 65 },
  { name: "Linux",             level: "Intermediate", percent: 60 },
  { name: "Embedded Systems",  level: "Advanced",     percent: 75 },
  { name: "Signal Processing", level: "Intermediate", percent: 55 },
  { name: "PCB Design",        level: "Intermediate", percent: 58 },
  { name: "MATLAB",            level: "Intermediate", percent: 62 },
  { name: "Python",            level: "Advanced",     percent: 70 },
  { name: "RTOS",              level: "Beginner",     percent: 38 },
];
