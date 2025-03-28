import { Divider } from "antd";
import Image from "next/image";
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
    title: "Price Action Toolkit",
    description:
      "Analyze trends with a variety of pre-defined tools tailored for any style of trading.",
    imgSrc: "/sfx-algo-dark.webp",
    features: [
      {
        title: "Customizable Alerts",
        description: "Get notified when your criteria are met.",
      },
      {
        title: "Advanced Charting",
        description: "Analyze trends with a variety of pre-defined tools.",
      },
      {
        title: "Real-time Data",
        description: "Get the latest data to make informed decisions.",
      },
    ],
  },
  {
    title: "Risk Management",
    description:
      "Manage your risk with our advanced risk management tools and calculators.",
    imgSrc: "/sfx-algo-dark.webp",
    isPictureOnLeft: true,
    features: [
      {
        title: "Position Sizing",
        description: "Calculate the optimal position size for your trades.",
      },
      {
        title: "Risk/Reward Ratio",
        description: "Calculate the risk/reward ratio for your trades.",
      },
      {
        title: "Stop Loss Calculator",
        description: "Calculate the stop loss for your trades.",
      },
    ],
  },
  {
    title: "Strategy Builder",
    description:
      "Create and backtest your trading strategies with our powerful strategy builder.",
    imgSrc: "/sfx-algo-dark.webp",
    features: [
      {
        title: "Custom Indicators",
        description: "Create custom indicators for your strategies.",
      },
      {
        title: "Backtesting",
        description: "Backtest your strategies with historical data.",
      },
      {
        title: "Optimization",
        description: "Optimize your strategies for better performance.",
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
              {card.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-2 items-start my-3"
                >
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

          <Image
            src={card.imgSrc}
            alt={card.title}
            width={544}
            height={536}
            className="rounded-lg border-none object-contain max-h-max w-[calc(50%-1rem)]"
          />
        </div>
      ))}
    </div>
  );
}
