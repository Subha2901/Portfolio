import Skills from "../components/Skills1";

const SkillsPage = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <Skills />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default SkillsPage;
