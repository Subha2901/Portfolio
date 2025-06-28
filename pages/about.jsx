import AboutMe from "../components/AboutMe";

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
