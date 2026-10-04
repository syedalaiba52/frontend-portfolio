import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/LearningJourney";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import HighlightsSection from "./sections/HighlightsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import { Toaster } from "react-hot-toast";
import AnimationLayout from "./components/layouts/AnimationLayout";

const page = () => {
  return (
    <>
      <AnimationLayout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <HighlightsSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </AnimationLayout>
    </>
  );
};

export default page;
