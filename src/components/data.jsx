import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGithubSquare,
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

export const links = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#projects', text: 'projects' },
  { id: 4, href: '#contact', text: 'contact' },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 2,
    title: 'CSS',
    icon: <FaCss3Alt className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 3,
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 4,
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 5,
    title: 'Node.js',
    icon: <FaNode className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 6,
    title: 'Express',
    icon: <SiExpress className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 7,
    title: 'MongoDB',
    icon: <SiMongodb className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 8,
    title: 'SQL',
    icon: <TbSql className="h-16 w-16 text-cyan-500" />,
  },
  {
    id: 9,
    title: 'Github',
    icon: <FaGithubSquare className="h-16 w-16 text-cyan-500" />,
  },
];

export const projects = [
  {
    id: 1,
    image: 'images/projectjobify.png',
    url: 'https://projectjobify.onrender.com/',
    github: 'https://github.com/suguna-s/projectjobify',
    title: 'Coffee Hub',
    techstack: [
      {
        id: 1,
        title: 'React',
        icon: <FaReact className="h-8 w-8 text-cyan-500" />,
      },
      {
        id: 2,
        title: 'Node.js',
        icon: <FaNode className="h-16 w-16 text-cyan-500" />,
      },
      {
        id: 3,
        title: 'Express',
        icon: <SiExpress className="h-16 w-16 text-cyan-500" />,
      },
      {
        id: 4,
        title: 'MongoDB',
        icon: <SiMongodb className="h-16 w-16 text-cyan-500" />,
      },
    ],
    text: 'A full-stack job tracking app built with the MERN stack. Jobify lets users add, edit and monitor job applications through a secure dashboard with analytics and charts to visualize progress.',
  },
  {
    id: 2,
    image: 'images/grocery-list.png',
    url: 'https://grocery-listreact.netlify.app/',
    github: 'https://github.com/suguna-s/grocery-list',
    title: 'Grocery List',
    techstack: [
      {
        id: 1,
        title: 'HTML',
        icon: <FaHtml5 className="h-8 w-8 text-cyan-500" />,
      },
      {
        id: 2,
        title: 'CSS',
        icon: <FaCss3Alt className="h-8 w-8 text-cyan-500" />,
      },
      {
        id: 3,
        title: 'React',
        icon: <FaReact className="h-8 w-8 text-cyan-500" />,
      },
    ],
    text: 'Grocery List application allows you to easily manage your grocery shopping with a user-friendly interface. You can add, edit, and delete items on your list, ensuring that you never miss an essential item while shopping.',
  },
];
