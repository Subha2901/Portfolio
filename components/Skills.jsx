'use client';

import styles from '../styles/Skills.module.css';

const skills = [
    {
        title: 'HTML',
        details: [
            '⭐ Expertise in semantic HTML and accessibility.',
            '⭐ Building responsive layouts using modern techniques.',
            '⭐ Optimized and SEO-friendly markup for better search visibility.',
        ],
        projects: ['Weather App UI', 'News Website Frontend']
    },
    {
        title: 'CSS',
        details: [
            '⭐ Proficient in CSS3: Flexbox, Grid, and advanced animations.',
            '⭐ Implementing responsive design and cross-browser compatibility.',
            '⭐ Theming and styling with CSS modules and TailwindCSS.',
        ],
        projects: ['Interactive Chat UI', 'Attendance System Dashboard']
    },
    {
        title: 'IntelliJ',
        details: [
            '⭐ Experienced with IntelliJ IDEA for Java development.',
            '⭐ Efficient debugging and code optimization.',
            '⭐ Leveraging IntelliJ for Spring Boot and REST API projects.',
        ],
        projects: ['LIMS Backend System', 'Java REST API Services']
    },
    {
        title: 'Java',
        details: [
            '⭐ Strong knowledge of core Java, OOP principles, and collections.',
            '⭐ Building REST APIs with Spring Boot and integrating databases.',
            '⭐ Optimized LIMS system, improving performance by 20%.',
        ],
        projects: ['LIMS Implementation for SGS and Lonza', 'Backend API Development']
    },
    {
        title: 'JavaScript',
        details: [
            '⭐ Deep understanding of ES6+, async/await, and closures.',
            '⭐ Advanced DOM manipulation and event handling.',
            '⭐ Implementing complex business logic for user interfaces.',
        ],
        projects: ['Attendance System Features', 'News Search and Filter']
    },
    {
        title: 'MySQL',
        details: [
            '⭐ Designing relational databases and optimizing queries.',
            '⭐ Expertise in stored procedures, triggers, and indexing.',
            '⭐ Ensuring data integrity and efficient data retrieval.',
        ],
        projects: ['Attendance System Database', 'LIMS Data Storage']
    },
    {
        title: 'Node.js',
        details: [
            '⭐ Building scalable REST APIs using Express.',
            '⭐ Handling asynchronous workflows and middleware.',
            '⭐ Integrating with MySQL and external APIs seamlessly.',
        ],
        projects: ['News Backend API', 'Attendance System API']
    },
    {
        title: 'React',
        details: [
            '⭐ Component-based architecture and hooks.',
            '⭐ Implementing real-time updates and responsive UIs.',
            '⭐ Building advanced features like infinite scroll and filters.',
        ],
        projects: ['News Website', 'Interactive Chat Application']
    },
    {
        title: 'SSMS',
        details: [
            '⭐ Advanced SQL scripting and performance tuning.',
            '⭐ Managing large-scale databases and ensuring data security.',
            '⭐ Supporting LIMS with optimized database queries.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting']
    },
];

export default function ImageGrid() {
    return (
        <div className={styles.gridContainer}>
            {skills.map((skill, index) => (
                <div key={index} className={styles.gridItem}>
                    <h3>{skill.title}</h3>
                    <div className={styles.tooltip}>
                        <ul>
                            {skill.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                        <strong>Projects:</strong>
                        <ul>
                            {skill.projects.map((project, i) => (
                                <li key={i}>{project}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
