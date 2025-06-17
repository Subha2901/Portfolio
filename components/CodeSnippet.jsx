import React from 'react';

const CodeSnippet = () => {
  const styles = {
    // Styles for the main container of this component, acting as the scrollable fixed-size div
    container: {
      width: 'auto', // Fixed width (adjust as needed)
      height: '60vh', // Fixed height (adjust as needed)
      overflowY: 'auto', // Enable vertical scrolling
      backgroundColor: 'rgb(40, 44, 52, 0)', // Darker background for code editor
      color: '#D4D4D4',
      fontFamily: '"JetBrains Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      border: '1px solid #333',
      borderRadius: '8px',
      boxShadow: '0 5px 25px rgba(0,0,0,0.7)',
      scrollbarWidth: 'thin',
      scrollBehavior: 'smooth',
      scrollbarColor: 'rgb(50, 54, 62) transparent',
      padding: '20px', // Apply padding directly to the container
      textAlign: 'start',
    },
    codeLine: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '2px', // Space between lines
      whiteSpace: 'pre-wrap', // Preserve whitespace and wrap text
      wordBreak: 'break-word', // Break long words
    },
    lineNumber: {
      color: '#636D81', // Muted color for line numbers
      marginRight: '15px',
      fontSize: '0.9em',
      userSelect: 'none',
      width: '30px', // Fixed width for alignment
      textAlign: 'right',
      flexShrink: 0, // Prevent shrinking
    },
    codeContent: {
      color: '#ABB2BF', // Default code text color
      fontSize: '0.9em',
      flexGrow: 1,
    },
    comment: {
      color: '#5C6370', // Comment color
    },
    keyword: {
      color: '#C678DD', // Purple keyword
    },
    string: {
      color: '#98C379', // Green string
    },
    variable: {
      color: '#E06C75', // Red variable/value
    },
    functionName: {
      color: '#61AFEF', // Blue function name
    },
    punctuation: {
      color: '#ABB2BF', // Punctuation color
    },
    // No specific media queries needed here as the component has fixed dimensions.
    // Responsiveness inside will be handled by clamp() if elements resize relative to inner container.
  };

  // Mock code for the left pane - Each inner array is a line of code composed of segments
  const codeLines = [
    [{ type: 'comment', text: '// Define main application component' }],
    [{ type: 'keyword', text: 'import ' }, { type: 'functionName', text: 'React' }, { type: 'punctuation', text: ' from ' }, { type: 'string', text: "'react'" }, { type: 'punctuation', text: ';' }],
    [{ type: 'blank', text: '' }], // Represents a blank line
    [{ type: 'keyword', text: 'const ' }, { type: 'functionName', text: 'Portfolio' }, { type: 'punctuation', text: ' = ' }, { type: 'punctuation', text: '() ' }, { type: 'keyword', text: '=> ' }, { type: 'punctuation', text: '{' }],
    [{ type: 'blank', text: '' }],
    [{ type: 'punctuation', text: '  ' }, { type: 'comment', text: '// Data for portfolio content' }],
    [{ type: 'punctuation', text: '  ' }, { type: 'keyword', text: 'const ' }, { type: 'variable', text: 'personalInfo ' }, { type: 'punctuation', text: '= ' }, { type: 'punctuation', text: '{' }],
    [{ type: 'punctuation', text: '    ' }, { type: 'variable', text: 'name' }, { type: 'punctuation', text: ': ' }, { type: 'string', text: "'Subha Mahajan'" }, { type: 'punctuation', text: ',' }],
    [{ type: 'punctuation', text: '    ' }, { type: 'variable', text: 'role' }, { type: 'punctuation', text: ': ' }, { type: 'string', text: "'Full Stack Web Developer'" }, { type: 'punctuation', text: ',' }],
    [{ type: 'punctuation', text: '    ' }, { type: 'variable', text: 'specialty' }, { type: 'punctuation', text: ': ' }, { type: 'string', text: "'LIMS Expert'" }, { type: 'punctuation', text: ',' }],
    [{ type: 'punctuation', text: '  ' }, { type: 'punctuation', text: '};' }],
    [{ type: 'blank', text: '' }],
    [{ type: 'punctuation', text: '  ' }, { type: 'comment', text: '// Render the portfolio layout' }],
    [{ type: 'punctuation', text: '  ' }, { type: 'keyword', text: 'return ' }, { type: 'punctuation', text: '(' }],
    [{ type: 'punctuation', text: '    ' }, { type: 'punctuation', text: '<div' }, { type: 'keyword', text: ' className' }, { type: 'punctuation', text: '=' }, { type: 'string', text: "'main-portfolio'" }, { type: 'punctuation', text: '>' }],
    [{ type: 'punctuation', text: '      ' }, { type: 'comment', text: '// This is the right-side component' }],
    [{ type: 'punctuation', text: '      ' }, { type: 'punctuation', text: '<header' }, { type: 'keyword', text: ' className' }, { type: 'punctuation', text: '=' }, { type: 'string', text: "'editor-header'" }, { type: 'punctuation', text: '>' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'punctuation', text: '<div' }, { type: 'keyword', text: ' className' }, { type: 'punctuation', text: '=' }, { type: 'string', text: "'tab-bar'" }, { type: 'punctuation', text: '>' }],
    [{ type: 'punctuation', text: '          ' }, { type: 'punctuation', text: '<span' }, { type: 'keyword', text: ' className' }, { type: 'punctuation', text: '=' }, { type: 'string', text: "'active-tab'" }, { type: 'keyword', text: '>' }, { type: 'string', text: "portfolio.jsx" }, { type: 'punctuation', text: '</span>' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'punctuation', text: '</div>' }],
    [{ type: 'punctuation', text: '      ' }, { type: 'punctuation', text: '</header>' }],
    [{ type: 'blank', text: '' }],
    [{ type: 'punctuation', text: '      ' }, { type: 'punctuation', text: '<main' }, { type: 'keyword', text: ' className' }, { type: 'punctuation', text: '=' }, { type: 'string', text: "'content-area'" }, { type: 'punctuation', text: '>' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'punctuation', text: '<h1' }, { type: 'keyword', text: '>' }, { type: 'variable', text: 'personalInfo.name' }, { type: 'punctuation', text: '</h1>' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'punctuation', text: '<p' }, { type: 'keyword', text: '>' }, { type: 'variable', text: 'personalInfo.role' }, { type: 'punctuation', text: ' | ' }, { type: 'variable', text: 'personalInfo.specialty' }, { type: 'punctuation', text: '</p>' }],
    [{ type: 'blank', text: '' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'comment', text: '// Interactive buttons' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'punctuation', text: '<button' }, { type: 'keyword', text: '>' }, { type: 'string', text: "View Work" }, { type: 'punctuation', text: '</button>' }],
    [{ type: 'punctuation', text: '        ' }, { type: 'punctuation', text: '<button' }, { type: 'keyword', text: '>' }, { type: 'string', text: "Let's Talk" }, { type: 'punctuation', text: '</button>' }],
    [{ type: 'punctuation', text: '      ' }, { type: 'punctuation', text: '</main>' }],
    [{ type: 'punctuation', text: '    ' }, { type: 'punctuation', text: '</div>' }],
    [{ type: 'punctuation', text: '  ' }, { type: 'punctuation', text: ');' }],
    [{ type: 'punctuation', text: '}' }],
    [{ type: 'blank', text: '' }],
    [{ type: 'keyword', text: 'export ' }, { type: 'keyword', text: 'default ' }, { type: 'functionName', text: 'Portfolio' }, { type: 'punctuation', text: ';' }],
  ];

  // Helper function to render a single line of code with syntax highlighting
  const renderCodeLine = (lineSegments, index) => (
    <div key={index} style={styles.codeLine}>
      <span style={styles.lineNumber}>{index + 1}</span>
      <span style={styles.codeContent}>
        {lineSegments.map((segment, segIndex) => {
          // Handle blank lines specifically with a non-breaking space
          if (segment.type === 'blank') {
            return <span key={segIndex}>&nbsp;</span>;
          }
          const segmentStyle = styles[segment.type] || {};
          return (
            <span key={segIndex} style={segmentStyle}>
              {segment.text}
            </span>
          );
        })}
      </span>
    </div>
  );

  return (
    <div style={styles.container}>
      {codeLines.map((lineSegments, index) => renderCodeLine(lineSegments, index))}
    </div>
  );
};

export default CodeSnippet;
