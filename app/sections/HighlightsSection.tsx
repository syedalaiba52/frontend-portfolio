import { LuQuote } from "react-icons/lu";
import SectionHeader from "../components/ui/SectionHeader";
import Image from "next/image";
// import DotGrid from "../components/hero/background";

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
    image: "/images/personal-projects.png",
    feedback:
      "Building small projects helps put new concepts into practice and gain hands-on experience with different frontend technologies.",
  },
  {
    name: "Responsive Design",
    role: "Mobile & Desktop",
    image: "/images/responsive-design.png",
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
    <section
      id="highlights"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

       {/* background */}
      {/* <div className="inset-0 absolute">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#2F293A"
          activeColor="#20B2A6"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div> */}

      <div className="w-[90%] max-w-6xl mx-auto space-y-16">
        <SectionHeader
          title="What I Bring to"
          highlight="My Projects"
          badge="Highlights"
          description="A quick look at the areas I focus on while building and improving my frontend projects."
        />

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
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
