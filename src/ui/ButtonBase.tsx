import React, { CSSProperties, ReactNode } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--hover-bg"?: string;
  "--hover-text"?: string;
}

type ButtonBaseProps = {
  type?: "button" | "submit";
  background?: string;
  textColor?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
  children: ReactNode;
};

export const ButtonBase = (props: ButtonBaseProps) => {
  const {
    type = "button",
    background = "bg-primary",
    textColor = "text-white",
    hoverBackground = "#ffffff",
    hoverTextColor = "text-[#000000]",
    children,
  } = props;

  const customStyle: CustomCSSProperties = {
    "--hover-bg": hoverBackground,
    "--hover-text": hoverTextColor,
  };
  return (
    <button
      className={`${background} py-2 px-5 ${textColor} rounded-md hvr-bounce-to-right overflow-hidden`}
      style={customStyle}
    >
      <span>{children}</span>
    </button>
  );
};
