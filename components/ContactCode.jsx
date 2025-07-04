import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    icon: "fa-solid fa-envelope",
    social: "email",
    link: "subhamahajan29@gmail.com",
    href: "mailto:subhamahajan29@gmail.com?subject=Feedback of PortFolio Website",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    social: "linkedin",
    link: "subhamahajan",
    href: "https://www.linkedin.com/in/subhamahajan",
  },
  {
    icon: "fa-brands fa-github",
    social: "github",
    link: "Subha2901",
    href: "https://github.com/Subha2901",
  },
  {
    icon: "fa-brands fa-x-twitter",
    social: "X",
    link: "SUbha________",
    href: "https://x.com/SUbha________",
  },
  {
    icon: "fa-brands fa-facebook-f",
    social: "facebook",
    link: "subhamahajan.me",
    href: "https://www.facebook.com/mahajansubha",
  },
  {
    icon: "fa-brands fa-whatsapp",
    social: "Whatsapp",
    link: "ChatWithMe",
    href: "https://wa.me/919903806308",
  },
  {
    icon: "fa-brands fa-telegram",
    social: "telegram",
    link: "SubhaMahajan",
    href: "https://t.me/SubhaMahajan",
  },
];

const ContactCode = () => {
  return (
    // <div className={styles.code}>
    //   <p className={styles.line}>
    //     <span className={styles.className}>.socials</span> &#123;
    //   </p>
    //   {contactItems.slice(0, 8).map((item, index) => (
    //     <p className={styles.line} key={index}>
    //       &nbsp;&nbsp;&nbsp;{item.social}:{' '}
    //       <a href={item.href} target="_blank" rel="noopener">
    //         {item.link}
    //       </a>
    //       ;
    //     </p>
    //   ))}
    //   {contactItems.slice(8, contactItems.length).map((item, index) => (
    //     <p className={styles.line} key={index}>
    //       &nbsp;&nbsp;{item.social}:{' '}
    //       <a href={item.href} target="_blank" rel="noopener">
    //         {item.link}
    //       </a>
    //       ;
    //     </p>
    //   ))}
    //   <p className={styles.line}>&#125;</p>
    // </div>

    <div className={styles.socialsDiv}>
      <ul>
        {contactItems.map((item, index) => {
          // Check if the link is an email link
          const isEmail = item.social === "email";

          return (
            <li className={styles.socialList} key={index}>
              <a
                href={item.href}
                // Only add target="_blank" if it's not an email link
                target={isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.socialIcon}>
                  <i className={item.icon}></i>
                </div>
              </a>

              <div className={styles.code}>
                <p className={styles.line}>
                  <span>{item.social}</span>
                  <br />
                  <a
                    href={item.href}
                    // Apply the same conditional logic here
                    target={isEmail ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </a>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactCode;
