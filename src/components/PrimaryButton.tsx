import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className="bg-[#02b0b0] text-[#effbfb] text-sm font-bold rounded-lg py-2 px-4 transition  
  hover:bg-[#029090] active:bg-[#026b6b] dark:bg-[#3366ff] dark:hover:bg-[#025b5b] dark:active:bg-[#014040]"
      {...props}
    >
      {children}
    </button>
  );
}
