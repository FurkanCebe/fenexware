import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const faqData = [
  {
    key: "1",
    question: "What is the best AI interior design app?",
    answer:
      "The best interior design AI tools let you visualize your space with ease. With the Palgo AI app, you can transform empty and furnished rooms through virtual staging and redesign. The app offers over 30 design styles, ensuring a highly personalized experience. It provides quick interior decorating inspiration and innovative ideas for any space, catering to interior designers, homeowners, architects, and real estate professionals.",
  },
  {
    key: "2",
    question: "How to use AI to design a room?",
    answer:
      "Palgo AI uses generative AI technology to visualize diverse styles, furniture arrangements, and color palettes. Upload pictures of your room, and select your preferred mode and style. AI will generate customized design ideas based on your input. You can edit the generated designs before using the final product for personal or professional projects.",
  },
];

const items: CollapseProps["items"] = faqData.map((item) => ({
  key: item.key,
  label: <p className="text-white">{item.question}</p>,
  children: <p className="text-white">{item.answer}</p>,
  className: "bg-fasho3 rounded-xl border-none mt-2",
  headerClass: "text-white",
}));

export default function FAQSection() {
  return (
    <Collapse
      bordered={false}
      accordion
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="w-full max-w-4xl bg-lightBg dark:bg-darkBg transition-colors duration-500 "
      items={items}
    />
  );
}
