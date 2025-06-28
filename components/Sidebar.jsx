import Link from "next/link";
import { useRouter } from "next/router";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import CodeIcon from "./icons/CodeIcon";
import PencilIcon from "./icons/PencilIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "../styles/Sidebar.module.css";
import { useEffect } from "react";
import AnimatedToggle from "./AnimatedToggle";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar = ({ visible, setVisible }) => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <div className={styles.toggleIcon}>
          <div className={styles.iconContainer}>
          <AnimatedToggle onToggle={setVisible} isOpen={visible}/>
        </div>
        </div>
        

        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link href={path} key={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
