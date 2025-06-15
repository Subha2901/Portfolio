import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <span className={styles.firstTag}><h1>From Lab Bench to Web Bench — </h1></span>
          <span className={styles.secondTag}><h1>I Build It All</h1></span>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Subha Mahajan</h1>
            <h6 className={styles.bio}>
              Full Stack Web Developer | LIMS Expert
            </h6>
            <Link href="/projects">
              {/* <button className={styles.button}>View Work</button> */}
              <button className={styles.button}>
                <div className={styles.buttonOuter}>
                  <div className={styles.buttonInner}>
                    <span>View Work</span>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="/contact">
              {/* <button className={styles.outlined}>Let's Talk</button> */}
              <button className={styles.button}>
                <div className={styles.buttonOuter}>
                  <div className={styles.buttonInner}>
                    <span>Let's Talk</span>
                  </div>
                </div>
              </button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
