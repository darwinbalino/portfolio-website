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
            <h1 className="text-xl font-bold text-white">NFT Marketplace dApp</h1>
            <h1 className="font-sans mt-7 text-slate-light">
            Buy and Sell NFT art! Fully responsive design.
            Interacts with Solidity smart contract.
            </h1>
            <h1 className="mt-6 font-mono text-sm tracking-tighter text-slate-light">
              Next.js Tailwind Hardhat Ethers.js{" "}
            </h1>
            <div className="flex mt-3 -ml-2">
              <div className="p-2 cursor-pointer group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 text-slate-lightest group-hover:text-turquoise"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="p-2 cursor-pointer group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 text-slate-lightest group-hover:text-turquoise"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </section>

          <section className="p-6 mt-10">
            <h1 className="font-mono text-sm text-turquoise">
              Featured Project
            </h1>
            <h1 className="text-xl font-bold text-white">Social Media App</h1>
            <h1 className="font-sans mt-7 text-slate-light">
              Interact with fellow vegans. Implements CRUD operations for posts.
               Fully responsive design
            </h1>
            <h1 className="mt-6 font-mono text-tiny text-slate-light">
              React Redux Node.js Express Tailwind{" "}
            </h1>
          </section>

          <section className="p-6 mt-10">
            <h1 className="font-mono text-sm text-turquoise">
              Featured Project
            </h1>
            <h1 className="text-xl font-bold text-white">E-Commerce App</h1>
            <h1 className="font-sans mt-7 text-slate-light">
            Product data rendered server side from FakeStoreAPI. Implements
             CRUD for basket items. Login functionality using NextAuth.
            </h1>
            <h1 className="mt-6 font-mono text-tiny text-slate-light">
              Next.js Redux Firebase Stripe API{" "}
            </h1>
          </section>
        </main>
      </animated.div>
    </div>
  );
};

export default Projects;
