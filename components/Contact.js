import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";

const Contact = () => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,5%,0)",
    config: config.molasses
  });
  return (
    <main id="contact">
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <animated.div style={animation}>
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="font-mono font-md text-turquoise">
            {" "}
            <span className="text-sm">03.</span> What's Next?
          </h1>
          <h1 className="font-sans text-4xl font-bold text-slate-lightest">
            Get in Touch
          </h1>
          <h1 className="font-sans text-slate text-md">
            Although I've yet to have any professional experience in the industry,
            I'm an eager learner, always challenging myself to take on bigger
            and better projects.
          </h1>
          <div className="pt-10">
            <a
            href="mailto:darwinbalino@gmail.com"
            className="self-center px-8 py-4 font-mono text-sm rounded-sm hover:bg-navy-lightest ring-1 text-turquoise ring-turquoise">
              Say Hello
            </a>
          </div>
        </div>
      </animated.div>
    </main>
  );
};

export default Contact;
