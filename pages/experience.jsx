import Experience from "../components/ProfessionalSkills";

const ExperiencePage = ({ title }) => {
  return (
    <>
      <Experience />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default ExperiencePage;
