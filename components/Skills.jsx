"use client"; // Ensure it's a client component if using Next.js App Router

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import styles from "../styles/Skills.module.css";

const skills = [
  { name: "HTML", icon: FaIcons.FaHtml5 },
  { name: "CSS", icon: FaIcons.FaCss3Alt },
  { name: "JavaScript", icon: FaIcons.FaJs },
  { name: "React.js", icon: FaIcons.FaReact },
  { name: "Node.js", icon: FaIcons.FaNodeJs },
  { name: "Java", icon: FaIcons.FaJava },
  { name: "Spring Boot", icon: SiIcons.SiSpringboot },
  { name: "MSSQL", icon: SiIcons.SiMicrosoftsqlserver },
  { name: "MySQL", icon: SiIcons.SiMysql },
  { name: "MongoDB", icon: SiIcons.SiMongodb },
  { name: "JSP", icon: SiIcons.SiJsp },
  { name: "AWS", icon: SiIcons.SiAmazonaws },
  { name: "Jira", icon: SiIcons.SiJirasoftware },
  { name: "Confluence", icon: SiIcons.SiConfluence },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.icon}>{skill.icon && <skill.icon />}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
