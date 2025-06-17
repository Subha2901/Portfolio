import { useState } from 'react';
import styles from '../styles/AnimatedToggle.module.css';
import Image from 'next/image';

const AnimatedToggle = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  return (
    <button className={styles.toggleButton} onClick={handleClick}>
      <div className={`${styles.iconWrapper} ${isOpen ? styles.open : styles.closed}`}>
        <Image
          src={isOpen ? '/cross_icon.png' : '/menu_icon.png'}
          alt="Toggle Icon"
          width={24}
          height={24}
          className={styles.icon}
        />
      </div>
    </button>
  );
};

export default AnimatedToggle;
