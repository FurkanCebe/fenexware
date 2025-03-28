import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const faqData = [
  {
    key: "1",
    question: "How does PalgoAI work?",
    answer:
      "We offer a 30-day money back guarantee, so you can try PalgoAI with zero risk!",
  },
  {
    key: "2",
    question: "Can I try PalgoAI for free?",
    answer:
      "We offer a 30-day money back guarantee, so you can try PalgoAI with zero risk!",
  },
  {
    key: "3",
    question: "Can I use PalgoAI indicators on any trading platform?",
    answer: "No, you can only use PalgoAI's indicators on TradingView.",
  },
  {
    key: "4",
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time.",
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
