"use client";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import React from "react";

/** Testimonials Section */
// const TestimonialsSection = () => (
//   <section className="bg-gray-50 dark:bg-gray-900 py-16">
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//       <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//         In the User Arena:
//       </h2>
//       <p className="text-lg text-gray-500 dark:text-gray-300">
//         Real Stories, Real Satisfaction
//       </p>
//       <div className="mt-10 flex justify-center">
//         <blockquote className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md">
//           <p className="text-gray-800 dark:text-gray-200">
//             Flux Charts has all the right tools for the job. All indicators
//             being beginner-friendly really helped me.
//           </p>
//           <footer className="mt-4 text-gray-500 dark:text-gray-400">
//             - Omar, Dec 27, 2022
//           </footer>
//         </blockquote>
//       </div>
//     </div>
//   </section>
// );

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen w-full flex justify-center bg-lightBg dark:bg-darkBg transition-colors duration-500 py-10 pt-10"
        // style={{
        //   backgroundImage: "url('/dark-background.svg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPositionX: "50%",
        //   backgroundPositionY: "5%",
        // }}
      >
        <HeroSection />
      </section>
      <section
        id="features"
        className="min-h-screen w-full flex justify-center bg-lightBg dark:bg-darkBg transition-colors duration-500 py-10 pt-32"
      >
        <FeaturesSection />
      </section>

      <section
        id="pricing"
        className="min-h-screen w-full flex justify-center bg-darkBg dark:bg-lightBg4 transition-colors duration-500 py-10 pt-32"
      >
        <PricingSection />
      </section>
      <section
        id="faq"
        className="min-h-screen w-full flex justify-center bg-lightBg dark:bg-darkBg transition-colors duration-500 py-10 pt-32"
      >
        <FAQSection />
      </section>
    </>
  );
}
