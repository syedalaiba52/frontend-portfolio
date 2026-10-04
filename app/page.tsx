import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
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
