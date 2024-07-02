import { useInView } from "react-intersection-observer";

export const useAnimateOnView = (threshold: number = 0.1) => {
    const { ref, inView } = useInView({
      //triggerOnce: true, //La animación o acción se activa solo la primera vez que el elemento entra en el viewport.
      threshold, //cuando al menos el 10% del elemento sea visible.
    });
  
    return { ref, inView };
  };