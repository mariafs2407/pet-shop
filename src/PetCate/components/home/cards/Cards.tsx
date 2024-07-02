import React, { ReactNode } from "react";
import { ButtonBase } from "../../../../ui/ButtonBase";

type bannerData = {
  textTit: string;
  textSecund: string;
  textThrid: string;
  backgroundImg: string;
};

type CardsProps = {
  data: bannerData[];
  w?: string;
  h?: string;
  textColor?: string;
  children: ReactNode;
  align?: "left" | "right";
};

export const Cards = (props: CardsProps) => {
  const {
    data,
    w = "md:w-[370px] w-[90%]",
    h = "md:h-[250px]",
    textColor = "text-white",
    children,
    align = "left",
  } = props;
  return (
    <div className="w-full bg-white py-20">
      <div className="flex mx-auto flex-col  md:flex-row justify-between max-w-screen-big items-center gap-4 p-2">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`${w} ${h} rounded-lg overflow-hidden ${item.backgroundImg} bg-cover bg-center shadow-lg  ${textColor} p-6`}
          >
            <div
              className={`flex flex-col justify-end ${
                align === "left" ? "items-start" : "items-end"
              }`}
            >
              <h1>{item.textTit}</h1>
              <span className="font-semibold">{item.textSecund}</span>
              <p>{item.textThrid}</p>
              <div
                className={`${
                  align === "left" ? "self-start" : "self-end"
                } t-4`}
              >
                {children}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
