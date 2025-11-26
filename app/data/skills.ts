// TYPES (optional but recommended)
export interface SkillItem {
  name: string;
  color: string;
}

export interface SkillCategoryType {
  title: string;
  skills: SkillItem[];
}

/* -------------------------------------------------
   1️⃣ WEB DEVELOPMENT DATA
--------------------------------------------------*/
export const skillsDataWeb: SkillCategoryType[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Vue", color: "#42B883" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#2965F1" },
      { name: "TailwindCSS", color: "#38BDF8" },
      { name: "Next.js", color: "#FF6C37" },
      { name: "motion one", color: "#F7DF1E"},
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "PHP", color: "#8993be" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Node.js", color: "#83CD29" },
      { name: "Express.js", color: "#000000" },
      //{ name: "Python", color: "#3776AB" },
      //{ name: "Django", color: "#0C4B33" },
      { name: "FastAPI", color: "#009688" },
      //{ name: "Java", color: "#EA2D2E" },
    ],
  },

  {
    title: "API / Database",
    skills: [
      { name: "REST API", color: "#f97316" },
      //{ name: "GraphQL", color: "#E535AB" },
      //{ name: "tRPC", color: "#3178C6" },
      //{ name: "gRPC", color: "#00A6F0" },
      //{ name: "WebSockets", color: "#6FC3DF" },

      { name: "MySQL", color: "#4479A1" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      //{ name: "SQLite", color: "#003B57" },
      //{ name: "Redis", color: "#D82C20" },
    ],
  },

  {
    title: "UI/UX Tools",
    skills: [
      { name: "Figma", color: "#F24E1E" },
      { name: "Canva", color: "#00C4CC" },
      //{ name: "Framer", color: "#0055FF" },
      //{ name: "Photoshop", color: "#31A8FF" },
      //{ name: "Illustrator", color: "#FDB300" },
    ],
  },
];

/* -------------------------------------------------
   2️⃣ GAME DEVELOPMENT DATA
--------------------------------------------------*/
export const skillsDataGame: SkillCategoryType[] = [
  {
    title: "Game Development",
    skills: [
      { name: "Unreal Engine", color: "#0E1128" },
      //{ name: "Unity", color: "#222C37" },
      { name: "C++", color: "#00599C" },
      //{ name: "Three.js", color: "#000000" },
      { name: "Blender", color: "#F5792A" },
      { name: "Godot", color: "#478CBF" },
      //{ name: "Shader Programming", color: "#8A2BE2" },
      //{ name: "WebGL", color: "#9955FF" },
      { name: "Game Loop Basics", color: "#E63946" },
      //{ name: "Physics Engines", color: "#457B9D" },
    ],
  },
];

/* -------------------------------------------------
   3️⃣ NETWORKING DATA (EMPTY FOR NOW)
--------------------------------------------------*/
export const skillsDataNetwork: SkillCategoryType[] = [
  {
    title: "Networking",
    skills: [
      { name: "DNS", color: "#ffcc00" },
      { name: "TCP/IP", color: "#0077b6" },
      { name: "Subnetting", color: "#4caf50" },
      { name: "Routing", color: "#6a4c93" },
      { name: "DHCP", color: "#ff6f61" },
      { name: "Switching", color: "#00b4d8" },
      { name: "NAT", color: "#ff884b" },
      { name: "VLAN", color: "#9d4edd" },
      { name: "Firewall Basics", color: "#f72585" },
      { name: "Load Balancing", color: "#4361ee" },
      { name: "IPv4 / IPv6", color: "#2a9d8f" },
      { name: "OSI Model", color: "#e76f51" },
    ],
  },
];

