import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import {
  Boxes,
  ChartColumn,
  CodeXml,
  Database,
  Layers,
  MonitorSmartphone,
  PanelsTopLeft,
  Rocket,
  Server,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

// Brand icons used by `socials` in src/data/portfolio.js
export const brandIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
}

// Icons used by skill groups and service cards
export const featureIcons = {
  frontend: PanelsTopLeft,
  backend: Server,
  database: Database,
  languages: CodeXml,
  concepts: Boxes,
  tools: Wrench,
  fullstack: Layers,
  api: ShieldCheck,
  analytics: ChartColumn,
  responsive: MonitorSmartphone,
  deploy: Rocket,
}
