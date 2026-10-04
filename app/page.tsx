import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/LearningJourney";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
      <ExperienceSection/>
    </>
  );
};

export default page;
