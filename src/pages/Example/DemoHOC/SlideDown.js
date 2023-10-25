import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function SlideDown(Component) {
  const propsUseSpring = useSpring({
    to: {
      marginTop: "0",
    },
    from: {
      marginTop: "-150px",
    },
    config: {
      duration: 2000,
    },
  });
  return (
    <animated.div style={propsUseSpring}>
     <Component/>
    </animated.div>
  );
}
