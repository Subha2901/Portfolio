import React, { useState } from 'react';

const LIMSExperienceContent = () => {
  // State to manage which project card is being hovered over to show its description
  const [hoveredProject, setHoveredProject] = useState(null);

  // Define common colors as constants (copied from the original LIMSExperiencePage)
  const mainTextColor = '#E06C75';
  const mutedTextColor = '#679453';
  const accentBlue = '#61AFEF';
  const accentPurple = '#C678DD';
  const accentGreen = '#98C379';
  const accentRed = '#D4D4D4';
  const commentColor = '#679453';
  const darkBg = '#1E1E1E';
  const darkerBg = '#282C34';
  const tabBarBg = '#f9826c'; // This was the header color, now used for section titles
  const buttonBg = '#3E4451';
  const buttonHoverBg = '#4B5263';
  const borderColor = '#333';
  const lightBorderColor = '#3E4451';
  // Renamed for clarity in direct usage
  const skillTagDefaultBg = '#5C6370';
  const skillTagHoverBg = '#7D8597';

  const styles = {
    section: {
      padding: '25px',
      marginBottom: '25px',
      color: mainTextColor, // Ensure default text color for the section
      // fontFamily: '"JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: tabBarBg, // Using the orange color for section titles
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: `2px solid ${lightBorderColor}`,
      textAlign: 'center',
    },
    // LIMS Client Portfolio Grid
    limsClientGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '15px',
      justifyItems: 'center',
      marginTop: '20px',
    },
    clientCard: {
      backgroundColor: buttonBg,
      borderRadius: '8px',
      padding: '10px 15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      maxWidth: '120px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '90px',
      cursor: 'pointer',
    },
    clientCardHover: {
      transform: 'translateY(-3px)',
      backgroundColor: buttonHoverBg,
      minHeight: '150px',
    },
    clientIcon: {
      fontSize: '2.5rem',
      color: accentGreen,
      filter: 'drop-shadow(0 0 5px rgba(152, 195, 121, 0.5))',
      zIndex: 2,
    },
    clientName: {
      color: mainTextColor,
      fontWeight: 'bold',
      fontSize: '0.9rem',
      whiteSpace: 'normal',
      lineHeight: '1.2',
      zIndex: 2,
    },
    clientDescriptionOverlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      backgroundColor: 'rgba(30, 30, 30, 0.95)',
      color: '#E6E6E6',
      padding: '10px',
      fontSize: '0.8rem',
      lineHeight: '1.4',
      textAlign: 'center',
      transform: 'translateY(100%)',
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      opacity: 0,
      borderRadius: '0 0 8px 8px',
      zIndex: 3,
    },
    clientDescriptionOverlayVisible: {
      transform: 'translateY(0)',
      opacity: 1,
    },
    // Skills Section
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '20px',
    },
    skillTag: {
      backgroundColor: skillTagDefaultBg, // Use the constant directly here
      color: '#E6E6E6',
      padding: '8px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
    },
    skillTagHover: {
      backgroundColor: skillTagHoverBg, // Use the constant directly here
    },
    // Code Snippet Specific Styles for Work Experience
    codeSnippetContainer: {
        backgroundColor: darkBg,
        borderRadius: '5px',
        padding: '15px 0',
        overflowX: 'auto',
        boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)',
        marginBottom: '20px',
    },
    codeLine: {
        display: 'flex',
        alignItems: 'baseline',
        marginBottom: '2px',
        paddingLeft: '15px',
        paddingRight: '15px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
    },
    lineNumber: {
        color: '#636D81',
        marginRight: '15px',
        fontSize: '0.9em',
        userSelect: 'none',
        minWidth: '25px',
        textAlign: 'right',
        flexShrink: 0,
    },
    codeContent: {
        fontSize: '0.9em',
        flexGrow: 1,
        color: mutedTextColor,
    },
    codeKeyword: {
        color: accentPurple,
    },
    codeFunctionName: {
        color: accentBlue,
    },
    codeString: {
        color: accentGreen,
    },
    codeVariable: {
        color: accentRed,
    },
    codeComment: {
        color: commentColor,
    },
    codePunctuation: {
        color: mainTextColor,
    },
    // Responsive adjustments
    '@media (max-width: 768px)': {
      section: {
        padding: '15px',
        marginBottom: '15px',
        boxShadow: 'none',
        border: 'none',
      },
      sectionTitle: {
        fontSize: '1.5rem',
        marginBottom: '15px',
      },
      clientIcon: {
        fontSize: '2rem',
      },
      clientCard: {
        maxWidth: '100px',
        padding: '8px 10px',
        minHeight: '80px',
      },
      clientCardHover: {
        minHeight: '130px',
      },
      clientName: {
        fontSize: '0.8rem',
      },
      clientDescriptionOverlay: {
        fontSize: '0.7rem',
        padding: '8px',
      },
      skillsContainer: {
        justifyContent: 'flex-start',
      },
      skillTag: {
        padding: '6px 12px',
        fontSize: '0.8rem',
      },
    },
  };

  // Mock data for the content sections
  const limsProjects = [
    { name: 'SGS', icon: '🧪', description: 'LIMS implementation & validation.' },
    { name: 'Lonza', icon: '🧬', description: 'Custom workflow development & integration.' },
    { name: 'Roche', icon: '🔬', description: 'Data migration & system upgrade support.' },
    { name: 'Wellgem', icon: '📊', description: 'Reporting and analytics solutions for LIMS.' },
    { name: 'Mabion', icon: '🦠', description: 'LIMS module configuration & training.' },
    { name: 'Zambon', icon: '💊', description: 'Instrument integration with LIMS.' },
    { name: 'Merck', icon: '🌡️', description: 'LIMS administration & troubleshooting.' },
    { name: 'AGC Pharma', icon: '🏭', description: 'Regulatory compliance for LIMS data.' },
  ];

  const skills = [
    'JavaScript (ES6+)', 'LIMS Module', 'JasperReport', 'Customization', 'SQL',
    'Groovy', 'JSP', 'HTML', 'CSS', 'Bootstrap', 'MSSQL Database', 'LabVantage LIMS', 'VS Code'
  ];

  const workExperience = [
    {
      title: 'Solution Engineer',
      company: 'LabVantage Solutions Pvt. Ltd.',
      dates: 'Aug 2023 - Present',
      description: [
        'Configured and customized LabVantage LIMS for clients including SGS, Lonza, Wellgem, Almac, and Roche, optimizing workflows for Manufacturing, Quality, and R&D.',
        'Developed robust custom solutions leveraging Java, SQL, JavaScript, Groovy, and JSP, leading to a 20% improvement in system efficiency and data processing.',
        'Spearheaded LIMS upgrades and migrations, meticulously ensuring data integrity, system compatibility, and peak performance optimization.',
        'Provided in-depth LIMS administration, troubleshooting, and seamless integration services to enhance overall system reliability and user experience.'
      ]
    },
    {
      title: 'Associate Solution Engineer Trainee',
      company: 'LabVantage Solutions',
      dates: 'Jan 2023 - Aug 2023',
      description: [
        'Completed intensive training in LabVantage LIMS, mastering advanced configuration, complex workflow design, and efficient scripting techniques.',
        'Successfully conducted and passed multiple demo interviews, demonstrating strong product knowledge and problem-solving skills, and excelled in Stack 1 training curriculum.',
        'Gained hands-on expertise in LIMS troubleshooting, system integration methodologies, and large-scale data migration strategies, ensuring smooth transitions and minimal downtime.'
      ]
    }
  ];

  // Helper function to render work experience as a code snippet in the new design
  const renderCodeExperience = (exp, lineStart) => {
    let currentLine = lineStart;
    const lines = [];

    // Main Title: Job Title
    lines.push(
      <div key={`${exp.title}-line-${currentLine}`} style={styles.codeLine}>
        <span style={styles.lineNumber}>{currentLine++}</span>
        <span style={{ ...styles.codeContent, color: styles.sectionTitle.color, fontWeight: 'bold', fontSize: '1rem' }}>
          {exp.title}
        </span>
      </div>
    );
    lines.push(
      <div key={`blank-line-${currentLine}`} style={styles.codeLine}>
        <span style={styles.lineNumber}>{currentLine++}</span>
        <span style={styles.codeContent}>&nbsp;</span>
      </div>
    );

    // Comment for Company and Dates
    lines.push(
      <div key={`${exp.title}-company-line-${currentLine}`} style={styles.codeLine}>
        <span style={styles.lineNumber}>{currentLine++}</span>
        <span style={styles.codeContent}>
          <span style={{ ...styles.codeComment, fontWeight: '900'}}>// Company: {exp.company}</span>
        </span>
      </div>
    );
    lines.push(
      <div key={`${exp.title}-dates-line-${currentLine}`} style={styles.codeLine}>
        <span style={styles.lineNumber}>{currentLine++}</span>
        <span style={styles.codeContent}>
          <span style={styles.codeComment}>// Dates: {exp.dates}</span>
        </span>
      </div>
    );
    lines.push(
      <div key={`blank-line-after-dates-${currentLine}`} style={styles.codeLine}>
        <span style={styles.lineNumber}>{currentLine++}</span>
        <span style={styles.codeContent}>&nbsp;</span>
      </div>
    );

    // Bullet points for descriptions
    exp.description.forEach((point, index) => {
      lines.push(
        <div key={`${exp.title}-desc-${index}-line-${currentLine}`} style={styles.codeLine}>
          <span style={styles.lineNumber}>{currentLine++}</span>
          <span style={styles.codeContent}>
            <span style={styles.codePunctuation}>- </span>
            <span style={styles.codeVariable}>{point}</span>
          </span>
        </div>
      );
    });

    lines.push(
      <div key={`end-blank-line-${currentLine}`} style={styles.codeLine}>
        <span style={styles.lineNumber}>{currentLine++}</span>
        <span style={styles.codeContent}>&nbsp;</span>
      </div>
    ); // Blank line for separation after each experience entry

    return { lines: lines, nextLine: currentLine };
  };

  let currentLineNumber = 1; // Start line number for the first snippet

  return (
    <div style={styles.section}>
      {/* Work Experience Section - Now as Code Snippet */}
      <h2 style={styles.sectionTitle}>Work Experience (LabVantage)</h2>
      <div style={styles.codeSnippetContainer}>
        {workExperience.map((exp, index) => {
          const { lines, nextLine } = renderCodeExperience(exp, currentLineNumber);
          currentLineNumber = nextLine;
          return <React.Fragment key={index}>{lines}</React.Fragment>;
        })}
      </div>

      {/* LIMS Client Portfolio Section */}
      <h2 style={{ ...styles.sectionTitle, marginTop: '40px' }}>LIMS Client Portfolio</h2>
      <p style={{ color: mutedTextColor, textAlign: 'center', marginBottom: '20px', lineHeight: '1.5' }}>
        Showcasing diverse client engagements in LIMS implementation, customization, and support.
        Hover over a client logo to see their project focus.
      </p>
      <div style={styles.limsClientGrid}>
        {limsProjects.map((project, index) => (
          <div
            key={index}
            style={hoveredProject === index ? { ...styles.clientCard, ...styles.clientCardHover } : styles.clientCard}
            onMouseOver={() => setHoveredProject(index)}
            onMouseOut={() => setHoveredProject(null)}
          >
            <span style={styles.clientIcon}>{project.icon}</span>
            <span style={styles.clientName}>{project.name}</span>
            <div
              style={hoveredProject === index ? { ...styles.clientDescriptionOverlay, ...styles.clientDescriptionOverlayVisible } : styles.clientDescriptionOverlay}
            >
              {project.description}
            </div>
          </div>
        ))}
      </div>

      {/* What I Learn Here (Skills) Section */}
      <h2 style={{ ...styles.sectionTitle, marginTop: '40px' }}>Key Skills & Technologies</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={styles.skillTag}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.skillTagHover)}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = skillTagDefaultBg; }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LIMSExperienceContent;
