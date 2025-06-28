// import Experience from "../components/ProfessionalSkills";
import LIMSExperienceContent from "../components/Test1"

const ExperiencePage = ({ title }) => {
  return (
    <>
      <LIMSExperienceContent />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default ExperiencePage;
