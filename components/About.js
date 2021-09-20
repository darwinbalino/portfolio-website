import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";
var portrait = require("/public/portrait.jpg");

const About = () => {
  const [on, toggle] = useState(false);
  const animation = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,5%,0)",
    config: config.molasses,
  });
  return (
    <main className="font-sans text-slate" id="about">
      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <animated.div style={animation}>
        <header>
          <h1 className="font-mono text-turquoise">
            01.{"  "}
            <span className="font-sans text-1.5xl font-bold text-slate-lightest">
              About Me
            </span>
          </h1>
        </header>

        <section className="space-y-5 font-sans text-md mt-9">
          <h1>
            Hello! My name is Darwin and I enjoy creating things that live on
            the internet. My interest in web development started back in 2013
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </h1>
          <h1>
            Since then, I've had the privilage of studying General Science at
            The University of British Columbia as a recipient of a{" "}
            <a
              href="https://veazeyscholars.com/"
              className="cursor-pointer text-turquoise hover:underline"
            >
              Veazey Scholarship
            </a>{" "}
            in 2014. Fast-forward to today, and I've rekindled my interest in
            web development &{" "}
            <span className="text-turquoise">passion for technology </span>
            while learning to program in JavaScript and Solidity.
          </h1>
          <h1>Here are a few technologies I've been working with recently:</h1>
        </section>

        <div className="max-w-sm">
          <div className="grid grid-cols-2 mt-5 space-y-2 font-mono text-tiny">
            <div className="flex items-center space-x-3">
              <ChevronDoubleRightIcon className="h-2.5 text-turquoise" />
              <h1>JavaScript (ES6+)</h1>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronDoubleRightIcon className="h-2.5 text-turquoise" />
              <h1>Tailwind CSS</h1>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronDoubleRightIcon className="h-2.5 text-turquoise" />
              <h1>React</h1>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronDoubleRightIcon className="h-2.5 text-turquoise" />
              <h1>Next.js</h1>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronDoubleRightIcon className="h-2.5 text-turquoise" />
              <h1>Node.js</h1>
            </div>
            <div className="flex items-center space-x-3">
              <ChevronDoubleRightIcon className="h-2.5 text-turquoise" />
              <h1>Solidity</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-14">
          <div className="relative group">
            <div className="absolute w-full h-full rounded group-hover:-right-3 group-hover:top-2 ring-2 ring-turquoise -right-4 top-3"></div>

            <Image
              className="relative rounded grayscale-60 hover:grayscale-10 filter"
              src={portrait}
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>
      </animated.div>
    </main>
  );
};

export default About;
