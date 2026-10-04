"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";

export const navLinks = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#journey",
    label: "My Journey",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="w-[95%] lg:w-[93%] mx-auto h-16 flex items-center justify-between">
        {/* logo */}
        <Logo />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-full font-medium text-sm text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <LinkButton
            iconPosition="left"
            icon={LuDownload}
            rounded
            text="Download CV"
            href="/documents/Frontend Resume.pdf"
            target="blank"
            rel="noopener noreferrer"
          />
        </div>

        <button onClick={() => setNavOpen(!navOpen)} className="z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition-all duration-300">
        {navOpen ? <LuX size={22}/> : <LuMenu size={22}/>}
        </button>
      </div>
    </nav>

    <MobileNav navOpen = {navOpen}/>
    </>
  );
}

export default Navbar;
