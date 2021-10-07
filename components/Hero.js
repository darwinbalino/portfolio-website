import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";

const Hero = ({ sidebar }) => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
    config: config.slow,
  });
  const animation2 = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,50%,0)",
    config: config.slow,
  });
  const animation3 = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,100%,0)",
    config: config.molasses,
  });

  return (
    <div className={sidebar ? " filter blur-none" : "filter blur-md"}>
      <Waypoint
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <main className="pt-16 md:pt-4 text-slate xl:ml-28">
        <animated.h1
          style={animation}
          className="mb-6 font-mono text-md text-turquoise"
        >
          Hi, my name is
        </animated.h1>
        <div className="flex flex-col flex-grow">
          <animated.h1
            style={animation2}
            className="text-4xl font-bold md:text-5xl lg:text-7xl text-slate-lightest"
          >
            Darwin Balino.
          </animated.h1>
          <animated.h1
            style={animation}
            className="text-4xl font-bold leading-10 md:leading-none lg:text-7xl XXlg:-mt-4 md:text-5xl"
          >
            I build things for the web.
          </animated.h1>
        </div>
        <div className="max-w-lg">
          <animated.h1 style={animation} className="mt-6 font-sans text-md mb-14">
            I'm an aspiring software eningeer. I've been learning to program in
            Javascript for the past 12 months. Currently, I'm focused on
            building projects with React using{" "}
            <span className="text-turquoise">Next.js & Node.js</span> with
            Express.
            As well as dApp development with Solidity using{" "}
            <span className="text-turquoise">Hardhat & Ethers.js.</span>

          </animated.h1>
        </div>
        <animated.a
          href="mailto:darwinbalino@gmail.com"
          style={animation3}
          className="px-8 py-4 ml-1 font-mono text-sm rounded-sm lg:ml-0 hover:bg-navy-lightest ring-1 text-turquoise ring-turquoise"
        >
          Get in Touch
        </animated.a>
      </main>
    </div>
  );
};

export default Hero;
