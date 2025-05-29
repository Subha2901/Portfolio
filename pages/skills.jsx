import Skills from "../components/Skills1";
import Skills1 from "../components/Skills";
import EmblaCarousel from "../components/EmblaCarousel";
import Carousel from '../components/Carousel'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
// Data for all skills, provided by the user (only HTML skill is used for this card)
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
        image: './skills_icons/html.png' // Placeholder for image name
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
        image: './skills_icons/css.png'
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
        image: './skills_icons/java.png'
    },
    {
        title: 'JavaScript',
        details: [
            '  // Frontend Logic & Interactivity',
            '  - ES6+, async/await, closures.',
            '  - Advanced DOM manipulation.',
            '  - Complex UI business logic.',
        ],
        projects: ['Attendance System Features', 'News Search and Filter'],
        image: './skills_icons/js.png'
    },
    {
        title: 'MySQL',
        details: [
            '  // Database Design & Querying',
            '  - Relational DB design, query optimization.',
            '  - Stored procedures, triggers, indexing.',
            '  - Data integrity, efficient retrieval.',
        ],
        projects: ['Attendance System Database', 'LIMS Data Storage'],
        image: './skills_icons/mysql.png'
    },
    {
        title: 'Node.js',
        details: [
            '  // Server-Side JavaScript',
            '  - Scalable REST APIs (Express.js).',
            '  - Asynchronous workflows, middleware.',
            '  - MySQL & external API integration.',
        ],
        projects: ['News Backend API', 'Attendance System API'],
        image: './skills_icons/node.png'
    },
    {
        title: 'React',
        details: [
            '  // Modern Frontend Development',
            '  - Component-based architecture, Hooks.',
            '  - Real-time updates, responsive UIs.',
            '  - Advanced features: infinite scroll, filters.',
        ],
        projects: ['News Website', 'Interactive Chat Application'],
        image: './skills_icons/react.png'
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
        image: './skills_icons/jaspersoft.png'
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
        image: './skills_icons/github.png'
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
        image: './skills_icons/SSMS.png'
    },
];

// const skills = [
//     {
//         title: 'HTML',
//         details: [
//             'Expertise in semantic HTML and accessibility.',
//             'Building responsive layouts using modern techniques.',
//             'Optimized and SEO-friendly markup for better search visibility.',
//         ],
//         projects: ['Weather App UI', 'News Website Frontend'],
//         image: './skills_icons/./skills_icons/html.png'
//     },
//     {
//         title: 'CSS',
//         details: [
//             'Proficient in CSS3: Flexbox, Grid, and advanced animations.',
//             'Implementing responsive design and cross-browser compatibility.',
//             'Theming and styling with CSS modules and TailwindCSS.',
//         ],
//         projects: ['Interactive Chat UI', 'Attendance System Dashboard'],
//         image: './skills_icons/./skills_icons/css.png'
//     },
//     {
//         title: 'Java',
//         details: [
//             'Strong knowledge of core Java, OOP principles, and collections.',
//             'Building REST APIs with Spring Boot and integrating databases.',
//             'Optimized LIMS system, improving performance by 20%.',
//         ],
//         projects: ['LIMS Implementation for SGS and Lonza', 'Backend API Development'],
//         image: './skills_icons/./skills_icons/java.png'
//     },
//     {
//         title: 'JavaScript',
//         details: [
//             'Deep understanding of ES6+, async/await, and closures.',
//             'Advanced DOM manipulation and event handling.',
//             'Implementing complex business logic for user interfaces.',
//         ],
//         projects: ['Attendance System Features', 'News Search and Filter'],
//         image: './skills_icons/./skills_icons/js.png'
//     },
//     {
//         title: 'MySQL',
//         details: [
//             'Designing relational databases and optimizing queries.',
//             'Expertise in stored procedures, triggers, and indexing.',
//             'Ensuring data integrity and efficient data retrieval.',
//         ],
//         projects: ['Attendance System Database', 'LIMS Data Storage'],
//         image: './skills_icons/./skills_icons/mysql.png'
//     },
//     {
//         title: 'Node.js',
//         details: [
//             'Building scalable REST APIs using Express.',
//             'Handling asynchronous workflows and middleware.',
//             'Integrating with MySQL and external APIs seamlessly.',
//         ],
//         projects: ['News Backend API', 'Attendance System API'],
//         image: './skills_icons/./skills_icons/node.png'
//     },
//     {
//         title: 'React',
//         details: [
//             'Component-based architecture and hooks.',
//             'Implementing real-time updates and responsive UIs.',
//             'Building advanced features like infinite scroll and filters.',
//         ],
//         projects: ['News Website', 'Interactive Chat Application'],
//         image: './skills_icons/./skills_icons/react.png'
//     },
//     {
//         title: 'JasperSoft Studio',
//         details: [
//             'Advanced SQL scripting and performance tuning.',
//             'Managing large-scale databases and ensuring data security.',
//             'Supporting LIMS with optimized database queries.',
//         ],
//         projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
//         image: './skills_icons/./skills_icons/jaspersoft.png'
//     },
//     {
//         title: 'GitHub',
//         details: [
//             'Advanced SQL scripting and performance tuning.',
//             'Managing large-scale databases and ensuring data security.',
//             'Supporting LIMS with optimized database queries.',
//         ],
//         projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
//         image: './skills_icons/./skills_icons/github.png'
//     },
//     {
//         title: 'SSMS',
//         details: [
//             'Advanced SQL scripting and performance tuning.',
//             'Managing large-scale databases and ensuring data security.',
//             'Supporting LIMS with optimized database queries.',
//         ],
//         projects: ['LIMS Database Optimization', 'Custom SQL Reporting'],
//         image: './skills_icons/./skills_icons/SSMS.png'
//     },
// ];


const SkillsPage = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <Skills />
      <Carousel />
      {/* <EmblaCarousel slides={skills} options={OPTIONS} /> */}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default SkillsPage;
