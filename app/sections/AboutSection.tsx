import Image from "next/image";
import { LuBookOpen, LuCode, LuLayoutTemplate } from "react-icons/lu";
// import DotGrid from "../components/hero/background";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 overflow-hidden relative">
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
          className="py-1"
        />
      </div> */}

      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left side */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />

            <div className="w-[85%] h-[85%] relative">
              <Image
                fill
                src="/images/about.png"
                alt="about me"
                className="z-10 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* right side */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-border">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-text/90">
            I build responsive and user-focused web interfaces.
          </h2>

          <p className="text-gray-400 max-w-xl">
            I&apos;m a frontend developer focused on building modern,
            responsive, and user-friendly web interfaces. I enjoy creating clean
            designs and turning ideas into simple, practical projects.
          </p>
          <p className="text-gray-400 max-w-xl">
            Currently, I&apos;m currently growing my skills through learning and
            personal projects. I enjoy exploring new technologies, improving my
            code, and finding better ways to build smooth web experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 pt-4">
            <div className="p-4 rounded-xl bg-surface border border-border text-center hover:border-primary/50 transition duration-500 ">
              <LuCode className="mx-auto mb-2 text-primary w-6 h-6" />
              <p className="text-text text-sm">Clean & Simple Code</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border text-center hover:border-primary/50 transition duration-500">
              <LuLayoutTemplate className="mx-auto mb-2 text-primary w-6 h-6" />
              <p className="text-text text-sm">Responsive Web Design</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border text-center hover:border-primary/50 transition duration-500">
              <LuBookOpen className="mx-auto mb-2 text-primary w-6 h-6" />
              <p className="text-text text-sm">Continuous Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
