import React from "react";

const Hero = ({ sidebar }) => {
  return (
    <div className={sidebar ? " filter blur-none" : "filter blur-md"}>
      <main className="pt-16 md:pt-4 text-slate">
        <h1 className="mb-6 font-mono text-md text-turquoise">
          Hi, my name is
        </h1>
        <div className="flex flex-col flex-grow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl text-slate-lightest">
            Darwin Balino.
          </h1>
          <h1 className="text-4xl font-bold leading-10 md:leading-none lg:text-7xl XXlg:-mt-4 md:text-5xl">
            I build things for the web.
          </h1>
        </div>
        <div className="max-w-lg">
          <h1 className="mt-6 font-sans text-md ">
            I'm an aspiring software developer. I've been learning to program in
            Javascript for the past 12 months. Currently, I'm focused on
            building projects with React using{" "}
            <span className="text-turquoise">Next.js & Node.js</span> with
            Express.
          </h1>
        </div>
        <button className="px-8 py-4 font-mono text-sm rounded-sm hover:bg-navy-lightest mt-14 ring-1 text-turquoise ring-turquoise">
          Get in Touch
        </button>
      </main>
    </div>
  );
};

export default Hero;
