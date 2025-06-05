import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, path }) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={16} width={16} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
