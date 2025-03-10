import AboutMe from "../components/AboutMe";
import LineEditor from "../components/LineEditor";

const AboutPage = () => {
  return (
    <>
    <AboutMe />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
