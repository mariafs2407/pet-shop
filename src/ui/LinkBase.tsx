import React, { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomCSSProperties extends CSSProperties {
  "--hover-bg"?: string;
  "--hover-text"?: string;
}

type LinkProps = {
  background?: string;
  textColor?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
  to: string; // Propiedad 'to' es obligatoria
  onClick?: () => void;
  children: ReactNode;
};

export const LinkBase = (props: LinkProps) => {
  const {
    background = "bg-primary",
    textColor = "text-white",
    hoverBackground = "#ffffff",
    hoverTextColor = "text-[#000000]",
    to,
    onClick,
    children,
  } = props;

  const customStyle: CustomCSSProperties = {
    "--hover-bg": hoverBackground,
    "--hover-text": hoverTextColor,
  };

  return (
    <Link
      to={to} // obligatorio
      onClick={onClick} //solo si esta definida
      className={`${background} py-2 px-5 ${textColor} rounded-md hvr-bounce-to-right overflow-hidden`}
      style={customStyle}
    >
      <span>{children}</span>
    </Link>
  );
};
