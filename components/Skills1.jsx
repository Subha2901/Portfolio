'use client';

import Image from 'next/image';
import styles from '../styles/Skills1.module.css';

const images = [
    './skills_icons/html.png',
    './skills_icons/css.png',
    './skills_icons/intellij.png',
    './skills_icons/java.png',
    './skills_icons/js.png',
    './skills_icons/mysql.png',
    './skills_icons/node.png',
    './skills_icons/react.png',
    './skills_icons/SSMS.png',
];

const skills = [
    {
        title: 'HTML',
        details: [
            'Expertise in semantic HTML and accessibility.',
            'Building responsive layouts using modern techniques.',
            'Optimized and SEO-friendly markup for better search visibility.',
        ],
        projects: ['Weather App UI', 'News Website Frontend'],
        image: './skills_icons/html.png'
    },
    {
        title: 'CSS',
        details: [
            'Proficient in CSS3: Flexbox, Grid, and advanced animations.',
            'Implementing responsive design and cross-browser compatibility.',
            'Theming and styling with CSS modules and TailwindCSS.',
        ],
        projects: ['Interactive Chat UI', 'Attendance System Dashboard'],
        image: './skills_icons/css.png'
    },
    {
        title: 'Java',
        details: [
            'Strong knowledge of core Java, OOP principles, and collections.',
            'Building REST APIs with Spring Boot and integrating databases.',
            'Optimized LIMS system, improving performance by 20%.',
        ],
        projects: ['LIMS Implementation for SGS and Lonza', 'Backend API Development'],
        image: './skills_icons/java.png'
    },
    {
        title: 'JavaScript',
        details: [
            'Deep understanding of ES6+, async/await, and closures.',
            'Advanced DOM manipulation and event handling.',
            'Implementing complex business logic for user interfaces.',
        ],
        projects: ['Attendance System Features', 'News Search and Filter'],
        image: './skills_icons/js.png'
    },
    {
        title: 'MySQL',
        details: [
            'Designing relational databases and optimizing queries.',
            'Expertise in stored procedures, triggers, and indexing.',
            'Ensuring data integrity and efficient data retrieval.',
        ],
        projects: ['Attendance System Database', 'LIMS Data Storage'],
        image: './skills_icons/mysql.png'
    },
    {
        title: 'Node.js',
        details: [
            'Building scalable REST APIs using Express.',
            'Handling asynchronous workflows and middleware.',
            'Integrating with MySQL and external APIs seamlessly.',
        ],
        projects: ['News Backend API', 'Attendance System API'],
        image: './skills_icons/node.png'
    },
    {
        title: 'React',
        details: [
            'Component-based architecture and hooks.',
            'Implementing real-time updates and responsive UIs.',
            'Building advanced features like infinite scroll and filters.',
        ],
        projects: ['News Website', 'Interactive Chat Application'],
        image: './skills_icons/react.png'
    },
    {
        title: 'JasperSoft Studio',
        details: [
            'Advanced SQL scripting and performance tuning.',
            'Managing large-scale databases and ensuring data security.',
            'Supporting LIMS with optimized database queries.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
        image: './skills_icons/jaspersoft.png'
    },
    {
        title: 'GitHub',
        details: [
            'Advanced SQL scripting and performance tuning.',
            'Managing large-scale databases and ensuring data security.',
            'Supporting LIMS with optimized database queries.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
        image: './skills_icons/github.png'
    },
    {
        title: 'SSMS',
        details: [
            'Advanced SQL scripting and performance tuning.',
            'Managing large-scale databases and ensuring data security.',
            'Supporting LIMS with optimized database queries.',
        ],
        projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
        image: './skills_icons/SSMS.png'
    },
];

export default function ImageGrid({setCarouselIndex}) {
    return (
        <div className={styles.gridContainer}>
            {skills.map((skill, index) => (
                <div key={index} className={styles.gridItem} onClick={() => setCarouselIndex(index)}>
                    <img src={skill.image} alt={skill.title} />
                    <div className={styles.skills_title_div} style={{textAlign: 'center', margin: 'auto'}}><span className={styles.skills_title}>{skill.title}</span></div>
                </div>
            ))}
        </div>
    );
}
