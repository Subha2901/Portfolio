import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";
import Color from "color-thief-react";
import Loading from "./Loading";

const ProjectCard = ({ key, project }) => {
  function HexToRgb(hex) {
    if (hex.charAt(0) === "#") hex = hex.substr(1);

    // Parse the hex code into RGB values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return r + g + b;
  }

  return (
    <>
      <Color src={project.image} crossOrigin="anonymous" format="hex">
        {({ data, textColor, loading, error }) => {
          if (loading) return <Loading />;
          if (error) {
            data = "black";
          }
          if (data) {
            textColor = HexToRgb(data, key) > 350 ? "black" : "white";
          }
          return (
            <div
              className={styles.card}
            >
              <div className = {styles.cardImage} style={{
                    '--bg-image': `url(${project.image})`,
                    '--data': `${data}`,
                    color: `${textColor}`,
                    height: '50%',
                    width: '100%',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}>
                {/* <Image
                src={project.image}
                height={300}
                width={600}
                alt={project.name}
              /> */}
              </div>
              
              <div
                className={styles.content}
                style={{ backgroundColor: `${data}`, color: `${ textColor }`, }}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.skill_tags.map((tag) => (
                    <span key={tag} className={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.tags}>
                  {project.feature_tags.map((tag) => (
                    <span key={tag} className="featureTags">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.cta}>
                  {project.source_code && (
                    <a
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      // className={styles.underline}
                    >
                      <button className={styles.button}>
                        <div className={styles.buttonOuter}>
                          <div className={styles.buttonInner}>
                            <span>Source Code</span>
                          </div>
                        </div>
                      </button>
                    </a>
                  )}
                  {/* <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <button className={styles.button}>
                <div className={styles.buttonOuter}>
                  <div className={styles.buttonInner}>
                    <span>Live Demo</span>
                  </div>
                </div>
              </button>
            
          </a> */}
                </div>
              </div>
            </div>
          );
        }}
      </Color>
    </>
  );
};

export default ProjectCard;

// export default function NewsCard(props) {
//   let sourceName = props.source;
//   if (props.source.indexOf(".") > -1) {
//     sourceName = props.source.substr(0, props.source.indexOf("."));
//   }
//   if (props.source.indexOf("/") > -1) {
//     sourceName = props.source.substr(0, props.source.indexOf("/"));
//   }
//   if (props.source.indexOf("(") > -1) {
//     sourceName = props.source.substr(0, props.source.indexOf("("));
//   }

//   let imageURL = props.imgUrl;
//   if (props.source.search("Verge") > -1) {
//     imageURL =
//       "https://www.typeroom.eu/assets/original/2022/09/14/the%20verge%20redesign%202022%203.png";
//   }

//   function handleRemoveOver(event) {
//     let value = event.currentTarget.getAttribute("name");
//     document.getElementById(value + "-img").classList.remove("card-img-hover");
//     document
//       .getElementById(value + "-text")
//       .classList.remove("card-text-visible");
//   }

//   function handleHover(event) {
//     let value = event.currentTarget.getAttribute("name");
//     document.getElementById(value + "-img").classList.add("card-img-hover");
//     document.getElementById(value + "-text").classList.add("card-text-visible");
//   }

//   function HexToRgb(hex) {
//     if (hex.charAt(0) === "#") hex = hex.substr(1);

//     // Parse the hex code into RGB values
//     const bigint = parseInt(hex, 16);
//     const r = (bigint >> 16) & 255;
//     const g = (bigint >> 8) & 255;
//     const b = bigint & 255;

//     return r + g + b;
//   }

//   let publishedTime = props.publishedAt;
//   if (
//     sourceName.length > 26 ||
//     (props.screenSize.width > 767 && props.screenSize.width < 1200)
//   )
//     publishedTime = props.publishedAt.substr(0, props.publishedAt.search(","));

//   return (
//     <>
//       <Color src={imageURL} crossOrigin="anonymous" format="hex">
//         {({ data, textColor, loading, error }) => {
//           if (loading) return <Loading />;
//           if (error) {
//             data = "black";
//           }
//           if (data) {
//             textColor = HexToRgb(data, props.index) > 220 ? "black" : "white";
//           }

//           // console.log(data);
//           return (
//             <div className="col " style={{ padding: "0.5% 1%" }}>
//               <div
//                 name={props.index}
//                 className="card shadow-sm border border-secondary"
//                 data-bs-theme="dark"
//                 onMouseOver={handleHover}
//                 onMouseOut={handleRemoveOver}
//                 style={{ height: "300px" }}
//               >
//                 <div
//                   style={{
//                     backgroundImage: `url(${imageURL})`,
//                     boxShadow: `${data} 0px -50px 60px 15px inset`,
//                     color: `${textColor}`,
//                   }}
//                   className="card-img-top"
//                   id={props.index + "-img"}
//                 >
//                   <Link
//                     to={props.url}
//                     target="_blank"
//                     className="sourceCSS disable"
//                     style={{ color: `${textColor}` }}
//                   >
//                     <span className="sourceImage">
//                       {sourceName.substr(0, 1)}
//                     </span>
//                     {sourceName}
//                     <span
//                       style={{
//                         padding: "0px 2px",
//                         fontWeight: "800",
//                         fontSize: "10px",
//                         whiteSpace: "nowrap",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                       }}
//                     >
//                       .
//                     </span>{" "}
//                     <span
//                       style={{ fontSize: "xx-small", fontFamily: "monospace" }}
//                     >
//                       {publishedTime}
//                     </span>
//                   </Link>
//                 </div>
//                 {/* <img src={props.imgUrl} className="card-img-top img-shadow" alt="Thumbnail" /> */}
//                 <div
//                   className="card-body"
//                   style={{
//                     backgroundColor: `${data}`,
//                     paddingBottom: "0px",
//                     color: `${textColor}`,
//                   }}
//                   id={props.index + "-body"}
//                 >
//                   <h5
//                     className="card-title"
//                     id={props.index + "-title"}
//                     style={{ color: `${textColor}` }}
//                   >
//                     {props.title.substr(0, 100) +
//                       (props.title.length > 150 ? "..." : "")}
//                   </h5>
//                   <p
//                     className="card-text"
//                     id={props.index + "-text"}
//                     style={{ color: `${textColor}` }}
//                   >
//                     {props.desc + " ..."}{" "}
//                     <span>
//                       <Link href={props.url} style={{ textDecoration: "none" }}>
//                         more
//                       </Link>
//                     </span>
//                   </p>
//                 </div>
//                 <div
//                   className="d-flex"
//                   style={{
//                     backgroundColor: `${data}`,
//                     flexDirection: "row-reverse",
//                   }}
//                 >
//                   <div className="btn-group" style={{ padding: "10px 15px" }}>
//                     <Link
//                       to={props.url}
//                       className={`btn btn-sm btn-outline-${
//                         textColor === "black" ? "dark" : "info"
//                       }`}
//                       target="_blank"
//                       style={{
//                         fontSize: ".65rem",
//                         paddingLeft: "4px",
//                         paddingRight: "4px",
//                       }}
//                     >
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         }}
//       </Color>
//     </>
//   );
// }
