import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
var portrait = require("/public/portrait.jpg");

const About = () => {
  return (
    <main className="font-sans text-slate">
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
          Hello! My name is Darwin and I enjoy creating things that live on the
          internet. My interest in web development started back in 2013 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </h1>
        <h1>
          Since then, I've had the privilage of studying General Science at The
          University of British Columbia as a recipient of a{" "}
          <span className="cursor-pointer text-turquoise hover:underline">
            Veazey Scholarship
          </span>{" "}
          in 2014. Fast-forward to today, and I've rekindled my interest in web
          development &{" "}
          <span className="text-turquoise">passion for technology </span>
          while learning to program in JavaScript.
        </h1>
        <h1>Here are a few technologies I've been working with recently:</h1>
      </section>

      <div className="max-w-sm">
        <div className="grid grid-cols-2 mt-5 space-y-2 font-mono text-tiny ">
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
            <h1>Firebase</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-14">
        <Image
          className="rounded-3xl tint ring-8 ring-turquoise"
          src={portrait}
          width={245}
          height={250}
          objectFit="contain"
        />
      </div>
    </main>
  );
};

export default About;
