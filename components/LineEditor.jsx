import React from "react";
import styles from "../styles/LineEditor.module.css";

const LineEditor = () => {
  const aboutMe = {
    name: "Subha Mahajan",
    role: "Software Engineer",
    expertise: ["Web Development", "Backend Engineering", "LIMS Solutions"],
    introduction: `Hello! I’m Subha Mahajan, a passionate and dedicated software engineer
    with a strong background in creating innovative, efficient, and scalable solutions. 
    My journey began in Electrical and Electronics Engineering, but my curiosity for 
    technology led me to dive deep into programming and web development.`,
    currentPosition: {
      title: "Associate Solution Engineer",
      company: "LabVantage",
      responsibilities: [
        "LIMS Configuration and Customization",
        "Backend Scripting and Performance Optimization",
        "Cross-Functional Collaboration",
        "Providing Technical Support",
      ],
    },
    certifications: ["HackerRank Advanced SQL", "Java", "JavaScript"],
    technologies: [
      "Java",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "Spring Boot",
      "AWS (learning)",
    ],
    notableProjects: [
      {
        name: "Attendance Management System",
        stack: ["React", "Node.js", "MySQL"],
        features: [
          "Login/Sign-in",
          "Calendar-based Attendance Marking",
          "Admin Approval/Rejection",
          "Advanced Filtering",
        ],
      },
      {
        name: "News Website",
        stack: ["React", "Node.js"],
        features: [
          "Infinite Scrolling",
          "Search and Source Filtering",
          "Responsive Design",
        ],
      },
      {
        name: "Chat Application",
        stack: ["GetStream API", "React"],
        features: ["Dark Theme", "Offline Notifications"],
      },
      {
        name: "Hotel Template Website",
        stack: ["HTML", "CSS", "JavaScript"],
        description: "Responsive web design showcasing creative UI/UX.",
      },
    ],
    strengths: [
      "Problem-Solving",
      "Quick Learning",
      "Team Collaboration",
      "Detail-Oriented Approach",
    ],
    vision: {
      shortTerm:
        "To contribute to impactful software projects in a dynamic and innovative environment.",
      longTerm:
        "To lead teams and drive strategic initiatives that push technological boundaries.",
    },
    hobbies: ["Drawing", "Watching Movies and Web Series", "Sports"],
  };

  const formatJSON = (data, indent = 2) => {
    const json = JSON.stringify(data, null, indent);

    // Remove only the outer braces without affecting indentation
    const trimmedJson = json.substring(1, json.length - 1);

    const regex = /"([\w.]+)"(?=:)|"([^"]+)"|(\d+|true|false|null)|([{}[\],])/g;

    const lines = trimmedJson.split("\n").map((line, index) => {
      // Replace \n with actual line breaks for readability
      const formattedLine = line
        .replace(/\\n/g, "<br>") // Replace \n with <br> for HTML
        .replace(regex, (match, key, string, value, symbol) => {
          if (key) return `<span class="${styles.key}">${key}</span>`; // Keys (no quotes)
          if (string) return `<span class="${styles.string}">${string}</span>`; // Strings (no quotes)
          if (value) return `<span class="${styles.value}">${match}</span>`; // Numbers, Booleans, Null
          if (symbol) return `<span class="${styles.symbol}">${match}</span>`; // Symbols
          return match;
        });
      return { line: index + 1, content: formattedLine };
    });

    return lines;
  };

  const formattedJSON = formatJSON(aboutMe);

  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <div className={styles.lineNumbers}>
          {formattedJSON.map((line) => (
            <p key={line.line}>{line.line}</p>
          ))}
        </div>
        <div className={styles.content}>
          <span className={styles.string}>
            .aboutMe <span className={styles.symbol}>&#123;</span>
          </span>

          {formattedJSON.map((line) => (
            <pre
              key={line.line}
              dangerouslySetInnerHTML={{ __html: line.content }}
            ></pre>
          ))}

          <span className={styles.symbol}>&#125;</span>
        </div>
      </div>
    </div>
  );
};

export default LineEditor;
