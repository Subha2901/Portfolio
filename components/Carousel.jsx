import React, { useState, useEffect, useRef } from 'react';

// Data for all skills
const skills = [
    {
        title: 'HTML',
        details: [
            ' // Core HTML & Accessibility',
            ' Semantic markup, ARIA roles.',
            ' Responsive layouts (Flexbox, Grid).',
            ' SEO optimization, performance.',
        ],
        projects: ['Weather App UI', 'News Website Frontend'],
        image: 'html.png' // Placeholder for image name
    },
    {
        title: 'CSS',
        details: [
            ' // Styling & Responsiveness',
            ' CSS3: Flexbox, Grid, animations.',
            ' Cross-browser compatibility.',
            ' Theming: CSS Modules, TailwindCSS.',
        ],
        projects: ['Interactive Chat UI', 'Attendance System Dashboard'],
        image: 'css.png'
    },
    {
        title: 'Java',
        details: [
            ' // Backend & Enterprise Java',
            ' Core Java, OOP, Collections API.',
            ' REST APIs with Spring Boot.',
            ' Database integration, LIMS optimization.',
        ],
        projects: ['LIMS Implementation (SGS, Lonza)', 'Backend API Development'],
        image: 'java.png'
    },
    {
        title: 'JavaScript',
        details: [
            ' // Frontend Logic & Interactivity',
            ' ES6+, async/await, closures.',
            ' Advanced DOM manipulation.',
            ' Implementing complex business logic for user interfaces.',
        ],
        projects: ['Attendance System Features', 'News Search and Filter'],
        image: 'js.png'
    },
    {
        title: 'MySQL',
        details: [
            ' // Database Design & Querying',
            ' Relational DB design, query optimization.',
            ' Stored procedures, triggers, and indexing.',
            ' Data integrity, efficient retrieval.',
        ],
        projects: ['Attendance System Database', 'LIMS Data Storage'],
        image: 'mysql.png'
    },
    {
        title: 'Node',
        details: [
            ' // Server-Side JavaScript',
            ' Scalable REST APIs (Express.js).',
            ' Asynchronous workflows, middleware.',
            ' Integrating with MySQL and external APIs seamlessly.',
        ],
        projects: ['News Backend API', 'Attendance System API'],
        image: 'node.png'
    },
    {
        title: 'React',
        details: [
            ' // Modern Frontend Development',
            ' Component-based architecture, Hooks.',
            ' Implementing real-time updates and responsive UIs.',
            ' Building advanced features like infinite scroll and filters.',
        ],
        projects: ['News Website', 'Interactive Chat Application'],
        image: 'react.png'
    },
    {
        title: 'JasperSoft Studio',
        details: [
            ' // Reporting & Business Intelligence',
            ' Report design, data visualization.',
            ' Custom SQL queries for reports.',
            ' LIMS reporting optimization.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
        image: 'jaspersoft.png'
    },
    {
        title: 'GitHub',
        details: [
            ' // Version Control & Collaboration',
            ' Git workflows: branching, merging.',
            ' Repository management, pull requests.',
            ' Collaborative development practices.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'], // Placeholder projects
        image: 'github.png'
    },
    {
        title: 'SSMS',
        details: [
            ' // SQL Server Management',
            ' Database administration, T-SQL scripting.',
            ' Performance monitoring, query analysis.',
            ' Data manipulation and security.',
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
        {/* <img src={imageUrl} alt={`${skill.title} icon`} className="skill-icon" /> */}
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
              {!item.trim().startsWith('//') && (
                <>
                  <span className="list-marker">-</span><span className="list-text">{item.substring(1)}</span>
                </>
              )}
              {/* Empty lines are important for code-like formatting, so render them */}
              {item.trim() === '' && <span className="empty-line">&nbsp;</span>}
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
      {/* <button
        className="view-details-button"
        onClick={elaborateSkillDetails}
        disabled={isLoadingLlmContent}
      >
        {isLoadingLlmContent ? 'Loading...' : '✨ Elaborate Details'}
      </button> */}
    </div>
  );
};

// Main App component: Renders a carousel of SkillCards
const App = ({carouselIndex}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Start with the first card
  const intervalRef = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    setCurrentCardIndex(carouselIndex);
  },[carouselIndex])

  // Auto-slide duration in milliseconds
  const autoSlideInterval = 10000;

  // Function to start the auto-slide
  const startAutoSlide = () => {
    // Clear any existing interval to prevent multiple intervals running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);
  };

  // Function to pause the auto-slide
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Effect to manage auto-slide on component mount and unmount
  useEffect(() => {
    startAutoSlide(); // Start auto-slide when component mounts

    // Cleanup function to clear interval when component unmounts
    return () => pauseAutoSlide();
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  const goToPrevious = () => {
    pauseAutoSlide(); // Pause on manual interaction
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
    startAutoSlide(); // Resume after a brief delay, or immediately
  };

  const goToNext = () => {
    pauseAutoSlide(); // Pause on manual interaction
    setCurrentCardIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide(); // Resume after a brief delay, or immediately
  };

  const goToCard = (index) => {
    pauseAutoSlide(); // Pause on manual interaction
    setCurrentCardIndex(index);
    startAutoSlide(); // Resume after a brief delay, or immediately
  };

  return (
    <div className="app-container" onMouseEnter={pauseAutoSlide} onMouseLeave={startAutoSlide}>
      {/* Custom CSS for neomorphic shadows and VS Code editor styling */}

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

export default App;
