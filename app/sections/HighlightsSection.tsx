import { LuQuote } from "react-icons/lu";
import SectionHeader from "../components/ui/SectionHeader";
import Image from "next/image";

const highlights = [
  {
    name: "Frontend Development",
    role: "Primary Focus",
    image: "/images/frontend-dev.png",
    feedback:
      "Turning ideas into clean and practical web interfaces, with attention to layout, spacing, and visual details.",
  },
  {
    name: "Personal Projects",
    role: "Learning Through Practice",
    image: "/images/personal-projects.jpg",
    feedback:
      "Building small projects helps put new concepts into practice and gain hands-on experience with different frontend technologies.",
  },
  {
    name: "Responsive Design",
    role: "Mobile & Desktop",
    image: "/images/responsive-design.jpg",
    feedback:
      "Layouts are designed with different screen sizes in mind, keeping interfaces clear and usable across devices.",
  },
  {
    name: "Clean Code",
    role: "Organized & Reusable",
    image: "/images/clean-code.png",
    feedback:
      "Structured code and reusable components help keep projects organized as different parts of an interface come together.",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-24 bg-background">
      <div className="w-[90%] max-w-6xl mx-auto space-y-16">
        <SectionHeader
          title="What I Bring to"
          highlight="My Projects"
          badge="Highlights"
          description="A quick look at the areas I focus on while building and improving my frontend projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            return (
              <div
                className="group relative p-6 rounded-2xl bg-surface border border-border transition-all duration-300 hover:translate-y-1 hover:border-primary/40 hover:shadow-lg"
                key={index}
              >
                <LuQuote className="absolute top-5 right-5 text-primary/10 w-10 h-10 " />

                <p className="text-gray-300 leading-relaxed mb-6 pr-12">
                  &quot;{item.feedback}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    width={50}
                    height={50}
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />

                  <div className="">
                    <h4 className="text-text font-semibold group-hover:text-primary transition">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
