// components/AboutMe.js
import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <section className={styles.aboutMe} id="aboutMe">
        <div className={styles.container}>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeTitle}>
              About <br /> Smit Prajapati
            </div>

            <div className={styles.aboutMeFlexContainer}>
              
              <div className={styles.aboutMeContent}>

                <div className={styles.text}>
                  An ambitious Front-end Developer and designer who takes great
                  pride in the presentation and quality of work.
                  <br />
                  <br />
                  Smit is someone who can design and create simple, beautiful
                  and easy to understand things. He is an expert at taking
                  designs into original, exciting and new directions.
                </div>

                {/* <div className={styles.logo}>
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg"
                    alt="smit"
                  />
                </div> */}
              </div>

              <div className={styles.aboutMeImage}>
                {" "}
                <div className={styles.backDiv}></div>
                <div className={styles.blackImage}>
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg"
                    alt="black"
                  />
                </div>
                <div className={styles.mainImage}>
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/smit.jpg"
                    alt="smit"
                  />
                </div>
              </div>
            </div>

            <div className={styles.mailButton}>
              <a href="mailto:prajapatismit2906@gmail.com">
                <img
                  src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
                  alt="mail"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
