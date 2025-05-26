import Skills from "../components/Skills1";
import Skills1 from "../components/Skills";
import EmblaCarousel from "../components/EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SkillsPage = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <Skills />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default SkillsPage;
