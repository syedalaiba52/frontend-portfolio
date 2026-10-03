import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left side */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />

            <div className="w-[85%] h-[85%] relative">
              <Image
                fill
                src="/images/profile.png"
                alt="about me"
                className="z-10 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutSection;
