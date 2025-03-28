import { Divider } from "antd";
import React from "react";

interface FeatureCard {
  title: string;
  description: string;
  imgSrc: string;
  isPictureOnLeft?: boolean;
  features: { title: string; description: string }[];
}

const featureCards: FeatureCard[] = [
  {
    title: "Transform interiors, instantly",
    description: "",
    imgSrc: "/001.gif",
    features: [
      {
        title: "Virtual staging",
        description:
          "Reveal the hidden beauty in your empty rooms. Instantly transform bare spaces into warm and inviting interiors with the power of virtual furnishing.",
      },
      {
        title: "Redesign",
        description:
          "Breathe new life into your space with interior decorating inspiration and design ideas for any room. With AI room design capabilities, you can easily build interiors that reflect your vision.",
      },
    ],
  },
  {
    title: "Limitless design possibilities",
    description: "",
    imgSrc: "/ai-interior-design_promo-showcase_032x.webp",
    isPictureOnLeft: true,
    features: [
      {
        title: "Over 30 AI room styles",
        description:
          "Explore 30+ styles, ranging from Scandinavian to Zen, Art Deco, and Coastal. Adjust multiple photos to showcase different aesthetics and visualize your ideal look with ease.",
      },
      {
        title: "Fast-track your design",
        description:
          "Generate stunning interiors with AI, so you can free up your time and focus on bringing your vision to life. With the AI home design generator, crafting your dream space takes just minutes.",
      },
      {
        title: "Use anywhere, anytime",
        description:
          "Use your AI-generated interior design for any purpose or project. Enhance property appeal for potential buyers or tenants, or confidently plan interior layouts before renovating or purchasing.",
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex flex-col gap-20 max-w-4xl">
      {featureCards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-row gap-2 ${
            card.isPictureOnLeft ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex flex-col justify-start w-[calc(50%-1rem)]">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primaryBlack to-primary dark:from-primary dark:to-[#0ad2ff] text-transparent bg-clip-text">
              {card.title}
            </h3>
            <p>{card.description}</p>
            <Divider className="my-1 bg-[#c7c7c7] dark:bg-[#303030]" />
            <h4 className="text-lg font-bold">Features</h4>
            <Divider className="my-1 bg-[#c7c7c7] dark:bg-[#303030]" />
            <ul>
              {card.features.map((feature, idx) => (
                <li key={idx} className="flex flex-row gap-2 items-start my-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg" />
                  <div className="max-w-[80%]">
                    <h4 className="font-bold">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Divider
            type="vertical"
            className="mx-2 !h-full bg-[#c7c7c7] dark:bg-[#303030]"
          />

          <img
            src={card.imgSrc}
            alt={card.title}
            className="rounded-lg border-none object-contain max-h-max w-[calc(50%-1rem)]"
          />
        </div>
      ))}
    </div>
  );
}