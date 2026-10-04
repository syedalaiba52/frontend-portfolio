import Logo from "../components/navbar/Logo";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import Link from "next/link";
// import DotGrid from "../components/hero/background";

const socialLinks = [
  {
    icon: LuGithub,
    href: "https://github.com/syedalaiba52",
    label: "GitHub",
  },
  {
    icon: LuLinkedin,
    href: "https://www.linkedin.com/in/syedalaiba52/?isSelfProfile=true",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

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

      <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
        {/* top section */}
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:items-start md:justify-between md:text-left">
          <div className="space-y-3 max-w-xs">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>

            <p className="text-sm text-gray-300">
              Crafting clean web interfaces with modern design and purposeful
              code.
            </p>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(32,178,166,0.2)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* bottom footer */}
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Syeda Laiba Shah. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
