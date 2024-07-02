import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimateOnView } from "../../hook/viewPort";

export const Mundo = () => {
  const { ref, inView } = useAnimateOnView();

  return (
    <div
      ref={ref}
      className={`section ${
        inView ? "animate" : ""
      } section3 mx-auto flex max-w-screen-big items-center`}
    >
      <div>
        <h1 className="text-3xl font-bold underline">mundo</h1>
      </div>
    </div>
  );
};
