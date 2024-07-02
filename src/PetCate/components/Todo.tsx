import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimateOnView } from "../../hook/viewPort";

export const Todo = () => {
  const { ref, inView } = useAnimateOnView();
  return (
    <div ref={ref} className={`section ${inView ? "animate" : ""} section2`}>
      <div>todos</div>
    </div>
  );
};
