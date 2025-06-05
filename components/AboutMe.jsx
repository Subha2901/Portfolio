// components/AboutMe.js
import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <section className={styles.aboutMe} id="aboutMe">
        <div className={styles.container}>
          <div className={styles.aboutMeContainer}>
            

            <div className={styles.aboutMeFlexContainer}>
              <div className={styles.aboutMeContent}>
                <div className={styles.aboutMeTitle}>
              About <br /> Subha Mahajan
            </div>
                <div className={styles.text}>
                  <p className={styles.aboutText}>
                    Hi, I'm{" "}
                    <span className={styles.aboutHighlight}>Subha Mahajan</span>
                    , a passionate Software Developer with expertise in&nbsp;
                    <span className={styles.aboutHighlight}>
                      React.js, Node.js, Java, and SQL
                    </span>
                    . With{" "}
                    <span className={styles.aboutHighlight}>2 years</span> of
                    experience in software development and{" "}
                    <span className={styles.aboutHighlight}>
                      LIMS system customization
                    </span>
                    , I specialize in building scalable applications, optimizing
                    workflows, and delivering strategic solutions for complex
                    problems.
                  </p>

                  <p className={styles.aboutText}>
                    Currently, I work as an{" "}
                    <span className={styles.aboutHighlight}>
                      Associate Solution Engineer at LabVantage
                    </span>
                    , where I configure and customize LIMS solutions for global
                    clients in the pharmaceutical domain. My work involves{" "}
                    <span className={styles.aboutHighlight}>
                      system configuration, scripting, performance optimization,
                    </span>{" "}
                    and seamless integrations using{" "}
                    <span className={styles.aboutHighlight}>
                      Java, SQL, Groovy, and JavaScript
                    </span>
                    .
                  </p>

                  <p className={styles.aboutText}>
                    Beyond my professional experience, I have built web
                    applications like an&nbsp;
                    <span className={styles.aboutHighlight}>
                      Attendance Management System, a Web-Based Chat
                      Application, and a News Aggregator
                    </span>
                    , showcasing my skills in{" "}
                    <span className={styles.aboutHighlight}>
                      full-stack development, API integration, and UI/UX design
                    </span>
                    .
                  </p>

                  <p className={styles.aboutText}>
                    I’m always eager to learn new technologies, with{" "}
                    <span className={styles.aboutHighlight}>AWS</span> being my
                    current area of focus. My goal is to contribute to
                    innovative projects that make a difference while continually
                    honing my skills.
                  </p>
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

            <div className={styles.mailDiv}>
              <p className="about-text emoji">
                🚀 Let’s build something amazing together!
              </p>
              <a className={styles.mailButton} href="mailto:subhamahajan29@gmail.com">
                <img
                  src="./gmail.png"
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
