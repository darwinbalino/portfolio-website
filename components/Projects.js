import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";

const Projects = () => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,5%,0)",
    config: config.molasses,
  });
  return (
    <div id="projects">
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <animated.div style={animation}>
        <header>
          <h1 className="font-mono text-turquoise">
            02.{"  "}
            <span className="font-sans text-1.5xl font-bold text-slate-lightest">
              Some things I've Built
            </span>
          </h1>
        </header>
        <main className="space-y-14">
          <section className="p-6 mt-10">
            <h1 className="font-mono text-sm text-turquoise">
              Featured Project
            </h1>
            <h1 className="text-xl font-bold text-white">Amazon Clone</h1>
            <h1 className="font-sans mt-7 text-slate-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lorem eros, porta ac malesuada vel, efficitur quis ante. Maecenas
              fringilla elit vitae lectus ultricies pulvinar.
            </h1>
            <h1 className="mt-6 font-mono text-tiny text-slate-light">
              Next.js Redux Firebase Stripe API{" "}
            </h1>
          </section>

          <section className="p-6 mt-10">
            <h1 className="font-mono text-sm text-turquoise">
              Featured Project
            </h1>
            <h1 className="text-xl font-bold text-white">AirBnb Clone</h1>
            <h1 className="font-sans mt-7 text-slate-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lorem eros, porta ac malesuada vel, efficitur quis ante. Maecenas
              fringilla elit vitae lectus ultricies pulvinar.
            </h1>
            <h1 className="mt-6 font-mono text-tiny text-slate-light">
              Next.js Redux Firebase Mapbox API{" "}
            </h1>
          </section>

          <section className="p-6 mt-10">
            <h1 className="font-mono text-sm text-turquoise">
              Featured Project
            </h1>
            <h1 className="text-xl font-bold text-white">Facebook Clone</h1>
            <h1 className="font-sans mt-7 text-slate-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lorem eros, porta ac malesuada vel, efficitur quis ante. Maecenas
              fringilla elit vitae lectus ultricies pulvinar.
            </h1>
            <h1 className="mt-6 font-mono text-tiny text-slate-light">
              React Redux Node.js Express{" "}
            </h1>
          </section>
        </main>
      </animated.div>
    </div>
  );
};

export default Projects;
