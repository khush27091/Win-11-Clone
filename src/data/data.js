import {
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  PostmanPlain,
  CPlain,
  MysqlOriginalWordmark,
  PostgresqlOriginal,
  PhotoshopOriginal,
  FigmaOriginal,
  BlenderOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/khush27091";

// Profile Description
export const profileDescription = [
  "Hello, I'm Khush Patel, an innovator, turning creative ideas into reality with the help of design and code solutions.Software development professionalwith experience in developing and designing web applications using HTML, CSS, JavaScript, Node.js, and React. Adept atdeveloping and deploying complex backend systems, web services and databases!",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "Techelecon ", // Add company name here
    description: [
      "", // Add description points here
    ],
    duration: "1.2 years (Since 07/2023", // Add duration here
    designation: "Senior Engineer", // Add designation here
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "Portfolio",
    techUsed: ["Next.js", "TailwindCSS"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/Portfolio`,
    liveURL: "https://portfolio-vert-one-79.vercel.app/",
  },
  {
    name: "TicTacToe",
    techUsed: ["React", "TailwindCSS"],
    description:
      "TicTacToe adds a fun twist to the classic game, responsive design, and captivating animations.",
    githubLink: `${githubLink}/Emoji-TicTacToe`,
    liveURL: "https://tic-tac-toe-khushpatel.netlify.app/",
  } 
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Madhuben and Bhanubhai Patel Institute of Technology",
    graduation: "Aug2019 -Apr2023",
    degree: "Bachelors of Engineering in Computer Science",
    type: "education",
  }
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 9,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "C",
    type: "language",
    icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  },
  {
    key: 13,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 15,
    name: "MySQL",
    type: "database",
    icon: MysqlOriginalWordmark ? (
      <MysqlOriginalWordmark className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 16,
    name: "PostgreSQL",
    type: "database",
    icon: PostgresqlOriginal ? (
      <PostgresqlOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 17,
    name: "Blender",
    type: "tool",
    icon: BlenderOriginal ? (
      <BlenderOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 18,
    name: "Photoshop",
    type: "tool",
    icon: PhotoshopOriginal ? (
      <PhotoshopOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 19,
    name: "Figma",
    type: "tool",
    icon: FigmaOriginal ? (
      <FigmaOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "/images/apps/chrome.png",
    action: "browser",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-18 h-18",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
      // {
      //   id: 7,
      //   name: "Emoji TicTacToe",
      //   icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
      //   action: "app",
      //   subAction: "emoji",
      //   size: "w-10 h-10",
      // },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/khush-patel-a04a861a7/",
  github: githubLink,
};
