"use client";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import scrollToSection from "./ScrollToSection";

const StarCount = 5;

function StarComponent() {
  return (
    <div className="flex justify-end items-center px-3 rounded-xl">
      {
        // Stars with the count of 5
        Array.from({ length: StarCount }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
        ))
      }
      <p className="ml-2 text-xs text-primaryBlack dark:text-lightBg4">
        Trusted by over 2,000 users
      </p>
    </div>
  );
}

//

export default function HeroSection() {
  return (
    <div className="max-w-4xl flex flex-col items-center justify-start gap-4">
      <StarComponent />
      <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-primaryBlack to-primary dark:from-primary dark:to-[#0ad2ff] text-transparent bg-clip-text">
        Palgo AI:
         <br /> 
         AI Interior Design
      </h1>

      <p className="mt-4 text-sm text-center text-primaryGrey dark:text-lightBg">
      Transform empty or furnished spaces into stunning interiors with Palgo AI.<br />  Upload a picture of your room, choose a design style, and reimagine your interior space with AI.
      </p>
      <PrimaryButton
        onClick={() => {
          scrollToSection("pricing");
        }}
      >
        Get 7 Days Risk Free
      </PrimaryButton>
      <Image
        src="/ai-interior-design_hero2x.webp"
        alt="Hero Image"
        width={600}
        height={400}
        layout="responsive"
        className="border-2 border-gray-500 rounded-xl"
      />
    </div>
  );
}
