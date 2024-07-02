import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimateOnView } from "../../hook/viewPort";

export const Holas = () => {
  const { ref, inView } = useAnimateOnView();

  return (
    <div
      ref={ref}
      className={`section 
      ${inView ? "animate" : ""} 
      section1`}
    >
      <div>hola</div>
    </div>
  );
};
