import SectionHeader from "../components/ui/SectionHeader";

const learning = [
  {
    role: "Frontend Development",
    company: "Personal Projects",
    period: "2026 - Present",
    description:
      "Continuing to build frontend projects while improving my skills in UI development, responsive layouts, and modern frontend tools.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "GitHub"],
  },
  {
    role: "Next.js & TypeScript",
    company: "Project-Based Learning",
    period: "2026",
    description:
      "Explored Next.js and TypeScript by building projects and practicing component-based development.",
    technologies: ["Next.js", "TypeScript", "React.js"],
  },
  {
    role: "JavaScript & React",
    company: "Learning & Projects",
    period: "2025 - 2026",
    description:
      "Built a stronger foundation in JavaScript and began creating interactive interfaces with React.",
    technologies: ["JavaScript", "React.js", "Git"],
  },
  {
    role: "Web Development Foundations",
    company: "Personal Practice",
    period: "2025",
    description:
      "Started with HTML and CSS, learning how to structure pages, style interfaces, and create different layouts.",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

const LearningJourney = () => {
  return (
    <section id="journey" className="py-32 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      <div className="container mx-auto px-6 relative z-10 py-2">
        <SectionHeader
          title="Growing Through"
          highlight="Learning & Practice"
          badge="My Journey"
          description="A journey of learning, practicing, and building projects while growing my skills in frontend development."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,1.8)] " />
          <div className="space-y-12">
            {learning.map((jor, index) => {
              return (
                <div
                  data-aos="flip-right"
                  data-aos-anchor-placement="top-center"
                  className="relative grid md:grid-cols-2 gap-8"
                  key={index}
                >
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>

                  {/* content */}
                  <div
                    className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <span className="text-primary text-sm font-medium">
                        {jor.period}
                      </span>

                      <h3 className="text-xl font-semibold mt-2">{jor.role}</h3>

                      <p className="text-gray-300">{jor.company}</p>
                      <p className="text-sm text-gray-400 mt-4">
                        {jor.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        {jor.technologies.map((tech, techIndex) => {
                          return (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-surface rounded-full text-xs text-gray-300 border border-border hover:border-primary transition duration-300"
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
