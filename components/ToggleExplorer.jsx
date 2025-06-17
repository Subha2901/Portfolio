import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from './icons/ChevronRight';
import styles from '../styles/ToggleExplorer.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: 'html_icon.svg',
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: 'css_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: 'js_icon.svg',
  },
  {
    name: 'skills.jsx',
    path: '/skills',
    icon: 'skills_icon.png',
  },
  {
    name: 'experience.lims',
    path: '/experience',
    icon: 'lims_icon.png',
  },
];

const ToggleExplorer = () => {
  
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const router = useRouter();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={`${styles.file} ${router.pathname === item.path && styles.active}`}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={16}
                  width={16}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleExplorer;
