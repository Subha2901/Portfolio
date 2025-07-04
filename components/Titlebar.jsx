import Image from "next/image";
import styles from "../styles/Titlebar.module.css";

const Titlebar = ({ visible, setVisible }) => {
  return (
    <section className={styles.titlebar}>
        <Image
          src="/vscode_icon.svg"
          alt="VSCode Icon"
          height={17}
          width={17}
          className={styles.icon}
        />

      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Subha Mahajan - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
