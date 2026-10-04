import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/LearningJourney";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import HighlightsSection from "./sections/HighlightsSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
      <ExperienceSection/>
      <HighlightsSection/>
    </>
  );
};

export default page;
