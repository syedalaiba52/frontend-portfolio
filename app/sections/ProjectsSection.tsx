import SectionHeader from "../components/ui/SectionHeader";

const projects = [
  {
    title: "Nexora Modern Web Interface",
    description:
      "A modern and responsive website built to practice frontend development, with a clean layout, user-friendly interface, and responsive design across different screen sizes.",
    image: "/public/images/nexora.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveURL: "https://nexora-nextjs.vercel.app/",
    githubURL: "https://github.com/syedalaiba52/nexora",
  },
  {
    title: "RedHanded Responsive Website",
    description:
      "A responsive website built with Bootstrap, focusing on a clean layout, structured sections, and a user-friendly design.",
    image: "/public/images/redhanded.png",
    tags: ["HTML", "Bootstrap"],
    liveURL: "https://redhanded-bootstrap-website.vercel.app/",
    githubURL: "https://github.com/syedalaiba52/redhanded",
  },
  {
    title: "Personal Web Page",
    description:
      "Built with HTML and CSS as a practice project, exploring page structure, styling, layouts, and basic web design.",
    image: "/public/images/my-website.png",
    tags: ["HTML", "CSS"],
    liveURL: "https://complete-html-css-responsive-projec.vercel.app/",
    githubURL: "https://github.com/syedalaiba52/practice-website",
  },
  {
    title: "Amazon E-commerce Page",
    description:
      "Recreated an Amazon-style shopping page using HTML and CSS, focusing on layout, navigation, product sections, and visual styling.",
    image: "/public/images/amazon.png",
    tags: ["HTML", "CSS"],
    liveURL: "https://amazon-page-eight.vercel.app/",
    githubURL: "https://github.com/syedalaiba52/amazon-page",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Developed with HTML, CSS, and JavaScript to showcase skills, projects, and basic interactive features through a clean personal website.",
    image: "/public/images/portfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveURL: "https://personal-portfolio-three-silk-21.vercel.app/",
    githubURL: "https://github.com/syedalaiba52/personal-portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      <SectionHeader title="Some of my Recent" highlight="Work" badge="Projects" description="A selection of projects showcasing my frontend skills, creativity, and growing experience in web development."/>

      <div className="grid grid-cols-1 md:grid-cols-2 ga-8 lg:gap-10">
        {
            projects.map((project, index) => {
                return (
                        // <p>{project.title}</p>
                        <ProjectCard/>
                )
            })
        }
      </div>


    </section>
  );
};

export default ProjectsSection;
