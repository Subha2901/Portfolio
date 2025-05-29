import React, { useState } from 'react';

// Data for all skills
const skills = [
    {
        title: 'HTML',
        details: [
            '  // Core HTML & Accessibility',
            '  - Semantic markup, ARIA roles.',
            '  - Responsive layouts (Flexbox, Grid).',
            '  - SEO optimization, performance.',
        ],
        projects: ['Weather App UI', 'News Website Frontend'],
        image: 'html.png' // Placeholder for image name
    },
    {
        title: 'CSS',
        details: [
            '  // Styling & Responsiveness',
            '  - CSS3: Flexbox, Grid, animations.',
            '  - Cross-browser compatibility.',
            '  - Theming: CSS Modules, TailwindCSS.',
        ],
        projects: ['Interactive Chat UI', 'Attendance System Dashboard'],
        image: 'css.png'
    },
    {
        title: 'Java',
        details: [
            '  // Backend & Enterprise Java',
            '  - Core Java, OOP, Collections API.',
            '  - REST APIs with Spring Boot.',
            '  - Database integration, LIMS optimization.',
        ],
        projects: ['LIMS Implementation (SGS, Lonza)', 'Backend API Development'],
        image: 'java.png'
    },
    {
        title: 'JavaScript',
        details: [
            '  // Frontend Logic & Interactivity',
            '  - ES6+, async/await, closures.',
            '  - Advanced DOM manipulation.',
            '  - Implementing complex business logic for user interfaces.',
        ],
        projects: ['Attendance System Features', 'News Search and Filter'],
        image: 'js.png'
    },
    {
        title: 'MySQL',
        details: [
            '  // Database Design & Querying',
            '  - Relational DB design, query optimization.',
            '  - Stored procedures, triggers, and indexing.',
            '  - Data integrity, efficient retrieval.',
        ],
        projects: ['Attendance System Database', 'LIMS Data Storage'],
        image: 'mysql.png'
    },
    {
        title: 'Node.js',
        details: [
            '  // Server-Side JavaScript',
            '  - Scalable REST APIs (Express.js).',
            '  - Asynchronous workflows, middleware.',
            '  - Integrating with MySQL and external APIs seamlessly.',
        ],
        projects: ['News Backend API', 'Attendance System API'],
        image: 'node.png'
    },
    {
        title: 'React',
        details: [
            '  // Modern Frontend Development',
            '  - Component-based architecture, Hooks.',
            '  - Implementing real-time updates and responsive UIs.',
            '  - Building advanced features like infinite scroll and filters.',
        ],
        projects: ['News Website', 'Interactive Chat Application'],
        image: 'react.png'
    },
    {
        title: 'JasperSoft Studio',
        details: [
            '  // Reporting & Business Intelligence',
            '  - Report design, data visualization.',
            '  - Custom SQL queries for reports.',
            '  - LIMS reporting optimization.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
        image: 'jaspersoft.png'
    },
    {
        title: 'GitHub',
        details: [
            '  // Version Control & Collaboration',
            '  - Git workflows: branching, merging.',
            '  - Repository management, pull requests.',
            '  - Collaborative development practices.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'], // Placeholder projects
        image: 'github.png'
    },
    {
        title: 'SSMS',
        details: [
            '  // SQL Server Management',
            '  - Database administration, T-SQL scripting.',
            '  - Performance monitoring, query analysis.',
            '  - Data manipulation and security.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'], // Placeholder projects
        image: 'SSMS.png'
    },
];

// SkillCard Component: Displays a single neomorphic card styled like a VS Code editor
const SkillCard = ({ skill, isActive, isLeftPartial, isRightPartial }) => {
  // State for LLM generated content and loading status
  const [llmGeneratedContent, setLlmGeneratedContent] = useState('');
  const [isLoadingLlmContent, setIsLoadingLlmContent] = useState(false);
  const [llmError, setLlmError] = useState(null);

  // Generate a placeholder image URL based on the skill title
  const imageUrl = `https://placehold.co/32x32/333/e0e0e0?text=${skill.title.substring(0, 2)}`;

  let cardClasses = 'neomorphic-card';
  if (isActive) {
    cardClasses += ' active-card';
  } else if (isLeftPartial) {
    cardClasses += ' left-partial-card';
  } else if (isRightPartial) {
    cardClasses += ' right-partial-card';
  } else {
    cardClasses += ' hidden-card';
  }

  // Function to call Gemini API for content elaboration
  const elaborateSkillDetails = async () => {
    setIsLoadingLlmContent(true);
    setLlmError(null);
    setLlmGeneratedContent(''); // Clear previous content

    const prompt = `Elaborate on the following skill and its details, providing a concise, insightful explanation in a code-editor-like text format (e.g., using comments, bullet points, or short descriptive lines). Focus on key concepts or practical applications.
    Skill: ${skill.title}
    Details: ${skill.details.join('\n')}`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = { contents: chatHistory };
    const apiKey = ""; // Canvas will automatically provide this in runtime
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API error: ${response.status} - ${errorData.error.message || 'Unknown error'}`);
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            // Split text by lines to apply line numbers and formatting
            setLlmGeneratedContent(text.split('\n'));
        } else {
            setLlmError('No content generated. Please try again.');
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        setLlmError(`Failed to generate content: ${error.message}`);
    } finally {
        setIsLoadingLlmContent(false);
    }
  };


  return (
    <div className={cardClasses}>
      {/* Editor Top Bar */}
      <div className="editor-top-bar">
        <div className="traffic-light red"></div>
        <div className="traffic-light yellow"></div>
        <div className="traffic-light green"></div>
        <img src={imageUrl} alt={`${skill.title} icon`} className="skill-icon" />
        <div className="editor-filename">{skill.title.toLowerCase()}.md</div>
      </div>

      <div className="card-content-area">
        <h2 className="card-title">{skill.title}</h2>
        <ul className="card-list">
          {/* Reset counter for line numbers */}
          <li style={{ counterReset: 'line-number' }}></li>
          {skill.details.map((item, index) => (
            <li key={index}>
              {/* Apply simple styling based on content for readability */}
              {item.trim().startsWith('//') && <span className="comment-text">{item}</span>}
              {item.trim().startsWith('-') && (
                <>
                  <span className="list-marker">-</span><span className="list-text">{item.substring(1)}</span>
                </>
              )}
              {item.trim() === '' && <span className="empty-line">&nbsp;</span>}
              {!item.trim().startsWith('//') && !item.trim().startsWith('-') && item.trim() !== '' && item}
            </li>
          ))}
          {/* Projects Section */}
          {skill.projects && skill.projects.length > 0 && (
            <>
              <li className="empty-line">&nbsp;</li>
              <li><span className="comment-text">  // Associated Projects</span></li>
              {skill.projects.map((project, index) => (
                <li key={`project-${index}`}>
                  <span className="list-marker">-</span><span className="list-text">{project}</span>
                </li>
              ))}
            </>
          )}

          {/* LLM Generated Content Section */}
          {llmGeneratedContent.length > 0 && (
            <>
              <li className="empty-line">&nbsp;</li>
              <li><span className="comment-text">  // ✨ Generated Insights from Gemini</span></li>
              {llmGeneratedContent.map((line, index) => (
                <li key={`llm-line-${index}`}>
                  <span className="llm-text">{line}</span>
                </li>
              ))}
            </>
          )}

          {isLoadingLlmContent && (
            <>
              <li className="empty-line">&nbsp;</li>
              <li><span className="comment-text">  // Loading insights...</span></li>
            </>
          )}

          {llmError && (
            <>
              <li className="empty-line">&nbsp;</li>
              <li><span className="comment-text" style={{ color: 'red' }}>  // Error: {llmError}</span></li>
            </>
          )}
        </ul>
      </div>
      <button
        className="view-details-button"
        onClick={elaborateSkillDetails}
        disabled={isLoadingLlmContent}
      >
        {isLoadingLlmContent ? 'Loading...' : '✨ Elaborate Details'}
      </button>
    </div>
  );
};

// Main App component: Renders a carousel of SkillCards
const Caorusel = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Start with the first card

  const goToPrevious = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToCard = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <div className="app-container">
      {/* Custom CSS for neomorphic shadows and VS Code editor styling */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        :root {
            --bg-color: #2a2c30;
            --editor-bg-color: #1e1e1e;
            --card-color: #2a2c30;
            --text-color: #e0e0e0;
            --header-color: #569cd6;
            --list-item-color: #ce9178;
            --comment-color: #6a9955;
            --subtle-text-color: #a0a0a0;
            --llm-text-color: #c586c0; /* A distinct color for LLM generated text */

            --shadow-light: rgba(255, 255, 255, 0.05);
            --shadow-dark: rgba(0, 0, 0, 0.4);
            --shadow-dark-inner: rgba(0, 0, 0, 0.6);
            --shadow-light-inner: rgba(255, 255, 255, 0.08);

            --border-radius: 12px;
        }

        body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .app-container {
            min-height: 100vh;
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Space Mono', monospace;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px;
            overflow: hidden; /* Hide overflowing cards */
        }

        /* Carousel Container */
        .carousel-container {
            position: relative;
            width: 100%;
            max-width: 900px; /* Adjusted max-width for carousel */
            height: 450px; /* Fixed height for carousel */
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 24px;
            margin-bottom: 24px;
        }

        @media (min-width: 768px) {
            .carousel-container {
                height: 500px;
            }
        }

        @media (min-width: 1024px) {
            .carousel-container {
                height: 550px;
            }
        }

        /* Card Base Styles */
        .neomorphic-card {
            position: absolute;
            background-color: var(--editor-bg-color);
            border-radius: var(--border-radius);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            min-height: 380px;
            width: 95%; /* Responsive width for single card */
            max-width: 600px; /* Max width for desktop */
            transition: all 0.5s ease-in-out; /* Smooth transitions */
            transform-origin: center;
            padding-bottom: 20px; /* Add padding for button */
        }

        /* Active Card Styles */
        .active-card {
            z-index: 20;
            opacity: 1;
            transform: translateX(-50%) scale(1);
            left: 50%;
            box-shadow: 12px 12px 25px var(--shadow-dark), -12px -12px 25px var(--shadow-light);
            filter: blur(0px); /* No blur on active card */
        }

        /* Partial Left Card Styles */
        .left-partial-card {
            z-index: 10;
            opacity: 0.6;
            transform: translateX(-100%) scale(0.85); /* Move further left and scale down */
            left: 0%; /* Start from the left edge */
            box-shadow: inset 7px 7px 15px var(--shadow-dark-inner), inset -7px -7px 15px var(--shadow-light-inner);
            filter: blur(1px); /* Subtle blur */
        }

        /* Partial Right Card Styles */
        .right-partial-card {
            z-index: 10;
            opacity: 0.6;
            transform: translateX(0%) scale(0.85); /* Move further right and scale down */
            left: 100%; /* Start from the right edge */
            box-shadow: 7px 7px 15px var(--shadow-dark), -7px -7px 15px var(--shadow-light);
            filter: blur(1px); /* Subtle blur */
        }

        /* Hidden Cards */
        .hidden-card {
            z-index: 0;
            opacity: 0;
            transform: translateX(-50%) scale(0.7); /* Scale down even more */
            pointer-events: none;
            /* No display: none; to allow smooth transitions */
            filter: blur(2px); /* More blur for hidden cards */
        }

        @media (min-width: 768px) {
            .neomorphic-card {
                width: 80%;
            }
            .active-card {
                width: 60%;
            }
        }

        @media (min-width: 1024px) {
            .neomorphic-card {
                width: 60%;
            }
            .active-card {
                width: 40%;
            }
        }

        /* Editor Top Bar (Traffic Lights) */
        .editor-top-bar {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            background-color: #333;
            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
            border-bottom: 1px solid rgba(0,0,0,0.2);
        }

        .traffic-light {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 8px;
        }

        .traffic-light.red { background-color: #ff605c; }
        .traffic-light.yellow { background-color: #ffbd44; }
        .traffic-light.green { background-color: #00ca4e; }

        .skill-icon {
            width: 24px;
            height: 24px;
            margin-right: 8px;
            border-radius: 4px;
            object-fit: cover;
        }

        .editor-filename {
            flex-grow: 1;
            text-align: center;
            color: var(--subtle-text-color);
            font-size: 0.9em;
        }

        /* Card Content Area */
        .card-content-area {
            padding: 20px 0;
            background-color: var(--editor-bg-color);
            overflow-x: auto;
            counter-reset: line-number;
            flex-grow: 1;
        }

        /* Card Title - Styled as a main heading within the editor */
        .card-title {
            font-size: 1.2em;
            font-weight: 700;
            margin-bottom: 16px;
            text-align: left;
            padding-left: 60px;
            color: var(--text-color);
        }

        /* Card List Content - Styled as readable lines with line numbers */
        .card-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            font-size: 0.95em;
        }

        .card-list li {
            position: relative;
            padding: 2px 0 2px 60px;
            line-height: 1.5;
            white-space: pre;
            color: var(--text-color);
        }

        .card-list li::before {
            content: counter(line-number);
            counter-increment: line-number;
            position: absolute;
            left: 15px;
            top: 2px;
            color: var(--subtle-text-color);
            font-size: 0.85em;
            text-align: right;
            width: 30px;
        }

        /* Basic "Syntax" Highlighting for readability */
        .card-list li .comment-text { color: var(--comment-color); }
        .card-list li .list-marker { color: var(--list-item-color); margin-right: 5px;}
        .card-list li .list-text { display: inline-block; }
        .card-list li .empty-line { height: 1.5em; }
        .card-list li .llm-text { color: var(--llm-text-color); } /* Style for LLM generated text */


        /* View Details Button - Styled to fit editor theme */
        .view-details-button {
            margin: 20px auto;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 1em;
            font-weight: 600;
            background-color: #3c3c3c;
            color: var(--text-color);
            border: none;
            cursor: pointer;
            outline: none;
            transition: all 0.2s ease;

            /* Neomorphic button state - slightly inset */
            box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.08);
        }

        .view-details-button:hover {
            box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.6), inset -2px -2px 4px rgba(255, 255, 255, 0.08);
            transform: translateY(0.5px);
        }

        .view-details-button:active {
            box-shadow: 2px 2px 4px var(--shadow-dark), -2px -2px 4px var(--shadow-light);
            transform: translateY(1px);
            color: var(--subtle-text-color);
        }

        .view-details-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.6), inset -2px -2px 4px rgba(255, 255, 255, 0.08);
        }

        /* Carousel Navigation */
        .carousel-navigation {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-top: 32px;
        }

        .nav-button {
            background-color: var(--card-color);
            border: none;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            color: var(--text-color);
            cursor: pointer;
            outline: none;
            user-select: none;
            transition: all 0.2s ease;

            /* Concave effect for arrows */
            box-shadow: inset 6px 6px 12px var(--shadow-dark-inner), inset -6px -6px 12px var(--shadow-light-inner);
        }

        .nav-button:hover {
            box-shadow: inset 3px 3px 6px var(--shadow-dark-inner), inset -3px -3px 6px var(--shadow-light-inner);
            color: var(--subtle-text-color);
        }

        .nav-button:active {
            box-shadow: 3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light);
            transform: translateY(1px);
        }

        .nav-dots {
            display: flex;
            gap: 16px;
        }

        .dot-base {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: var(--card-color);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .dot-inactive {
            box-shadow: 2px 2px 4px var(--shadow-dark), -2px -2px 4px var(--shadow-light);
        }

        .dot-inactive:hover {
            box-shadow: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light);
        }

        .dot-active {
            box-shadow: inset 3px 3px 6px var(--shadow-dark-inner), inset -3px -3px 6px var(--shadow-light-inner);
        }
        `}
      </style>

      <div className="carousel-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            isActive={index === currentCardIndex}
            isLeftPartial={index === (currentCardIndex - 1 + skills.length) % skills.length}
            isRightPartial={index === (currentCardIndex + 1) % skills.length}
          />
        ))}
      </div>

      <div className="carousel-navigation">
        <button
          onClick={goToPrevious}
          className="nav-button"
          aria-label="Previous skill"
        >
          &lt;
        </button>

        <div className="nav-dots">
          {skills.map((_, index) => (
            <div
              key={index}
              onClick={() => goToCard(index)}
              className={`dot-base ${
                index === currentCardIndex ? 'dot-active' : 'dot-inactive'
              }`}
              aria-label={`Go to skill ${index + 1}`}
            ></div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="nav-button"
          aria-label="Next skill"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Caorusel;
