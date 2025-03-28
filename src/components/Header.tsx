"use client";
import { useEffect } from "react";
import scrollToSection from "./ScrollToSection";
import Image from "next/image";
import { LuMoon } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";

function Toggle() {
  return (
    <button
      onClick={() => document.documentElement.classList.toggle("dark")}
      className="flex justify-end px-4 max-h-min self-center relative text-sm overflow-hidden w-16 border border-solid border-primaryBlack rounded-full dark:border-white"
    >
      <div className="flex items-center">
        <LuMoon className="size-6 text-white transition-all duration-300 dark:translate-x-[4px] translate-x-[30px] dark:opacity-100 opacity-0" />
        <IoSunnyOutline className="size-6 text-black transition-all duration-300 dark:translate-x-[4px] translate-x-[13px] dark:opacity-0 opacity-100" />
      </div>
    </button>
  );
}

export default function Header() {
  useEffect(() => {
    const links = document.querySelectorAll("a.scroll-link");
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        if (targetId && ["home", "pricing", "faq"].includes(targetId)) {
          scrollToSection(targetId as "home" | "pricing" | "faq");
        }
      })
    );

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <header className="sticky top-0 bg-lightBg4 dark:bg-fasho3 transition-colors duration-500 shadow z-10 h-16">
      <nav className="max-w-7xl mx-auto p-2 flex justify-between">
        <div className="font-bold text-lg">
          <a href="#home" className="scroll-link">
            <Image
              src={"/favicon.ico"}
              alt="logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </a>
        </div>
        <ul className="flex gap-8">
          <li className="text-center flex items-center">
            <a href="#home" className="scroll-link">
              Home
            </a>
          </li>
          <li className="text-center flex items-center">
            <a href="#pricing" className="scroll-link">
              Pricing
            </a>
          </li>
          <li className="text-center flex items-center">
            <a href="#faq" className="scroll-link">
              FAQ
            </a>
          </li>
          <li className="text-center flex items-center">
            <a
              href="https://discord.gg/hJbFGKsNGw"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1"
            >
              Discord <FaDiscord />{" "}
            </a>
          </li>
        </ul>
        <Toggle />
      </nav>
    </header>
  );
}
