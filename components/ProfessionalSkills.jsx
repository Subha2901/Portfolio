import React from 'react';

// Main App component
const ProfessionalSkills = () => {
    // Data for LIMS Projects
    const limsProjects = [
        { name: 'SGS', imgText: 'SGS', bgColor: 'FFD700' },
        { name: 'Lonza', imgText: 'Lonza', bgColor: 'ADD8E6' },
        { name: 'Roche', imgText: 'Roche', bgColor: '90EE90' },
        { name: 'Wellgem', imgText: 'Wellgem', bgColor: 'FFB6C1' },
        { name: 'Mabion', imgText: 'Mabion', bgColor: 'DDA0DD' },
        { name: 'Zambon', imgText: 'Zambon', bgColor: '87CEEB' },
        { name: 'Merck', imgText: 'Merck', bgColor: 'F08080' },
        { name: 'AGC Pharma', imgText: 'AGC', bgColor: 'B0E0E6' },
    ];

    // Data for Skills
    const skills = [
        'JavaScript (JS)', 'LIMS Module', 'Java', 'JasperReport', 'Customization',
        'SQL', 'Groovy', 'JSP', 'HTML', 'CSS', 'Bootstrap', 'MSSQL Database'
    ];

    // Data for Work Experience
    const workExperience = [
        {
            title: 'Associate Solution Engineer',
            orgDate: 'LabVantage Solutions — Aug 2023 - Present',
            description: [
                'Configured and customized LabVantage LIMS for SGS, Lonza, Wellgem, Almac, and Roche, optimizing workflows for Manufacturing, Quality, and R&D.',
                'Developed custom solutions using Java, SQL, JavaScript, Groovy, and JSP, improving system efficiency by 20%.',
                'Led LIMS upgrades and migrations, ensuring data integrity, compatibility, and performance optimization.',
                'Provided LIMS administration, troubleshooting, and integration to enhance system reliability.',
            ],
        },
        {
            title: 'Associate Solution Engineer Trainee',
            orgDate: 'LabVantage Solutions — Jan 2023 - Aug 2023',
            description: [
                'Trained in LabVantage LIMS, mastering configuration, workflows, and scripting.',
                'Passed multiple demo interviews and excelled in Stack 1 training.',
                'Gained expertise in LIMS troubleshooting, integration, and data migration.',
            ],
        },
    ];

    // Data for Internship
    const internship = {
        title: 'Intern Engineer',
        orgDate: 'at Bokaro Steel Plant, SAIL Jul 2022 - Aug 2022',
        description: [
            'Designed and implemented a Management Information System with a user-friendly GUI (HTML, CSS, JavaScript, Bootstrap) and secure MSSQL database, reducing data entry time by almost 70%.',
        ],
    };

    // Component for a single Project Card
    const ProjectCard = ({ name, imgText, bgColor, index }) => {
        // Apply random rotation classes based on index for "not fully organized" look
        const rotationClass = `project-card-${(index % 3) + 1}`;
        return (
            <div className={`project-card ${rotationClass}`}>
                <img src={`https://placehold.co/70x70/${bgColor}/000000?text=${imgText}`} alt={`${name} Icon`} />
                <span className="project-card-text">{name}</span>
            </div>
        );
    };

    // Component for a generic Content Card (used for skills, experience, internship)
    const ContentCard = ({ children, index }) => {
        // Apply random rotation classes based on index for "not fully organized" look
        const rotationClass = index % 2 === 0 ? 'content-card-even' : 'content-card-odd';
        return (
            <div className={`content-card ${rotationClass}`}>
                {children}
            </div>
        );
    };

    // Component for Experience/Internship details
    const ExperienceDetails = ({ title, orgDate, description }) => (
        <>
            <h3 className="experience-title">{title}</h3>
            <p className="experience-org-date">{orgDate}</p>
            <ul className="experience-description">
                {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </>
    );

    return (
        <>
            {/* Tailwind CSS and custom styles */}
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #1a1a2e; /* Deep dark blue/purple */
                    background-image: radial-gradient(circle at top left, #3e2f5b 0%, transparent 50%),
                                      radial-gradient(circle at bottom right, #2a2a4a 0%, transparent 50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    overflow-x: hidden; /* Prevent horizontal scroll from rotated elements */
                    color: #e0e0e0; /* Light gray text for contrast */
                }

                .portfolio-wrapper {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 2rem 0;
                }

                .main-title {
                    font-size: clamp(3.5rem, 12vw, 8rem); /* Larger, more impactful font size */
                    font-weight: 800; /* Extra bold */
                    margin-bottom: 2.5rem;
                    color: #8d8dff; /* Softer blue/purple for title */
                    text-shadow: 0 0 15px rgba(141, 141, 255, 0.8), 0 0 30px rgba(141, 141, 255, 0.5); /* Glowing effect */
                    z-index: 101;
                    text-align: center;
                    width: 100%;
                    letter-spacing: 0.1em; /* Add some letter spacing */
                }

                .section-container {
                    // display: flex;
                    flex-wrap: wrap; /* Allow sections to wrap on smaller screens */
                    justify-content: center;
                    gap: 2.5rem; /* Increased gap between major sections */
                    width: 100%;
                    padding: 0 1.5rem; /* Padding for inner content */
                }

                .portfolio-section {
                    height: fit-content;
                    // background-color: #28284a; /* Darker blue for sections */
                    border-radius: 15px;
                    padding: 2rem;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
                    margin-bottom: 2rem;
                    flex: 1 1 45%; /* Allow sections to take up about half width */
                    min-width: 320px; /* Minimum width for sections */
                    position: relative;
                    // border: 1px solid rgba(141, 141, 255, 0.2); /* Subtle border matching title */
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .portfolio-section:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.8);
                }

                .section-heading {
                    font-size: clamp(1.5rem, 3.5vw, 2rem);
                    font-weight: 700;
                    color: #a0c4ff; /* A vibrant light blue for headings */
                    margin-bottom: 1.8rem;
                    text-align: center;
                    border-bottom: 3px solid rgba(160, 196, 255, 0.4); /* Thicker, more prominent border */
                    padding-bottom: 0.8rem;
                    letter-spacing: 0.05em;
                }

                .content-card {
                    // background-color: #3a3a60; /* Slightly lighter blue for individual cards */
                    border-radius: 10px;
                    padding: 1.2rem;
                    margin-bottom: 1.2rem;
                    // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    position: relative;
                    // border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .content-card:hover {
                    transform: translateY(-7px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
                }

                .project-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr)); /* Slightly larger min-width for projects */
                    gap: 1.2rem; /* Increased gap */
                    padding-top: 1.2rem;
                }

                .project-card {
                    // background: linear-gradient(135deg, #4a4a7a, #5a5a90); /* Gradient background for project cards */
                    border-radius: 10px;
                    padding: 1.2rem;
                    text-align: center;
                    // box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    // height: 140px; /* Increased height for project cards */
                    // border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .project-card:hover {
                    transform: scale(1.08) rotate(3deg); /* More pronounced rotation on hover */
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.6);
                    z-index: 5;
                }

                .project-card img {
                    width: 3rem; /* Larger icon size */
                    height: 3rem;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 0.75rem;
                    border: 2px solid rgba(255, 255, 255, 0.3); /* Icon border */
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                }

                .project-card-text {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #f0f0f0;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                }

                .skill-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    gap: 0.8rem; /* Increased gap */
                    justify-content: center;
                }

                .skill-item {
                    background-color: #6a6a9a; /* Distinct color for skill tags */
                    color: #fff;
                    padding: 0.6rem 1.2rem; /* Increased padding */
                    border-radius: 25px; /* More rounded */
                    font-size: 1rem; /* Slightly larger font */
                    font-weight: 600;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                    transition: background-color 0.2s ease;
                }

                .skill-item:hover {
                    background-color: #7b7bb0; /* Darker on hover */
                }

                .experience-title {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 0.4rem;
                }

                .experience-org-date {
                    font-size: 1rem;
                    color: #c0c0c0;
                    margin-bottom: 0.7rem;
                }

                .experience-description{
                    list-style: disc;
                    padding-left: 1.8rem; /* Increased padding */
                    color: #d0d0d0;
                }

                .experience-description li {
                    margin-bottom: 0.6rem; /* Increased margin */
                    font-size: 0.95rem;
                    line-height: 1.5; /* Better readability */
                }

                /* Applying subtle random rotations and translations to cards for "not fully organized" feel */
                .content-card-odd {
                    transform: rotate(-0.7deg) translateX(-5px);
                }
                .content-card-even {
                    transform: rotate(0.7deg) translateX(5px);
                }

                .project-card-1 {
                    transform: rotate(-3deg);
                }
                .project-card-2 {
                    transform: rotate(2deg);
                }
                .project-card-3 {
                    transform: rotate(-1.5deg);
                }

                /* Specific adjustments for responsiveness */
                @media (max-width: 768px) {
                    .portfolio-wrapper {
                        width: 100vw;
                        padding: 1rem 0;
                        border-radius: 0; /* Remove border-radius on small screens */
                        box-shadow: none;
                    }

                    .main-title {
                        font-size: clamp(2.8rem, 15vw, 6rem);
                        margin-bottom: 1.8rem;
                    }

                    .section-container {
                        flex-direction: column; /* Stack sections vertically */
                        gap: 1.8rem;
                        padding: 0 1rem;
                    }

                    .portfolio-section {
                        flex: 1 1 100%; /* Full width on small screens */
                        margin: 0 0rem 1.5rem 0rem; /* Adjust margin */
                        padding: 1.2rem;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                    }

                    .section-heading {
                        font-size: clamp(1.8rem, 6vw, 2.5rem);
                        margin-bottom: 1.2rem;
                        border-bottom: 2px solid rgba(160, 196, 255, 0.3);
                    }

                    .project-grid {
                        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
                        gap: 1rem;
                    }

                    .project-card {
                        height: 120px;
                        padding: 1rem;
                    }

                    .project-card img {
                        width: 60px;
                        height: 60px;
                    }

                    .project-card-text {
                        font-size: 1rem;
                    }

                    .skill-item {
                        padding: 0.5rem 1rem;
                        font-size: 0.9rem;
                        border-radius: 20px;
                    }

                    .experience-title {
                        font-size: 1.2rem;
                    }

                    .experience-org-date {
                        font-size: 0.9rem;
                    }

                    .experience-description li {
                        font-size: 0.85rem;
                        margin-bottom: 0.5rem;
                    }
                }
                `}
            </style>

            <div className="portfolio-wrapper">
                {/* <h1 className="main-title">LIMS</h1> */}

                <div className="section-container">
                    {/* LIMS Projects Section */}
                    <div className="portfolio-section">
                        <h2 className="section-heading">LIMS Projects</h2>
                        <div className="project-grid">
                            {limsProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    name={project.name}
                                    imgText={project.imgText}
                                    bgColor={project.bgColor}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* What I Learn Here Section */}
                    <div className="portfolio-section">
                        <h2 className="section-heading">What I Learn Here</h2>
                        <ContentCard index={0}>
                            <ul className="skill-list">
                                {skills.map((skill, index) => (
                                    <li key={index} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </ContentCard>
                    </div>

                    {/* Work Experience Section */}
                    <div className="portfolio-section">
                        <h2 className="section-heading">Work Experience</h2>
                        {workExperience.map((exp, index) => (
                            <ContentCard key={index} index={index + 1}> {/* +1 to vary rotation from skills */}
                                <ExperienceDetails
                                    title={exp.title}
                                    orgDate={exp.orgDate}
                                    description={exp.description}
                                />
                            </ContentCard>
                        ))}
                    </div>

                    {/* Internship Section */}
                    <div className="portfolio-section">
                        <h2 className="section-heading">Internship</h2>
                        <ContentCard index={workExperience.length + 1}> {/* Continue index for rotation */}
                            <ExperienceDetails
                                title={internship.title}
                                orgDate={internship.orgDate}
                                description={internship.description}
                            />
                        </ContentCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfessionalSkills;
