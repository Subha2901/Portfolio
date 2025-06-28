// import Experience from "../components/ProfessionalSkills";
import LimsDashboard from "../components/LIMSDashboard";

const ExperiencePage = ({ title }) => {
  return (
    <>
      {/* <Experience /> */}
      <LimsDashboard />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default ExperiencePage;
