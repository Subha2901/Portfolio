import Experience from "../components/ProfessionalSkills";
import CodeSnippet from "../components/Test1";

const ExperiencePage = ({ title }) => {
  return (
    <>
      {/* <Experience /> */}
      <CodeSnippet />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default ExperiencePage;
