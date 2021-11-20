import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";
var nft = require("/public/nft.png");
var ecommerce = require("/public/ecommerce.png");
var social = require("/public/social.png");

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
      <div className="flex justify-center">
        <div className="max-w-screen-md">
          <animated.header style={animation}>
            <h1 className="font-mono text-turquoise">
              02.{"  "}
              <span className="font-sans text-1.5xl font-bold text-slate-lightest">
                Some things I've Built
              </span>
            </h1>
          </animated.header>
          <main className="space-y-20">
            <animated.section
              style={animation}
              className="max-w-screen-md p-6 mt-10 rounded-lg bg-navy-light md:flex"
            >
              <div className="md:w-1/2">
                <a
                  href="https://known-origin.vercel.app/"
                  className="cursor-pointer group"
                >
                  <h1 className="font-mono text-sm text-turquoise">
                    Featured Project
                  </h1>
                  <h1 className="text-xl font-bold text-white group-hover:text-turquoise">
                    NFT Marketplace dApp
                  </h1>
                </a>
                <h1 className="font-sans mt-7 text-slate-light">
                  Buy and Sell NFT art! Fully responsive design. Interacts with
                  Solidity smart contract.
                </h1>
                <h1 className="mt-6 font-mono text-sm tracking-tighter text-slate-light">
                  Next.js Tailwind Hardhat Ethers.js{" "}
                </h1>
                <div className="flex mt-3 -ml-2">
                  <a
                    className="p-2 cursor-pointer group"
                    href="https://github.com/darwinbalino/nft-marketplace"
                  >
                    <CodeIcon className="h-5 text-slate-lightest group-hover:text-turquoise" />
                  </a>
                  <a
                    className="p-2 cursor-pointer group"
                    href="https://known-origin.vercel.app/"
                  >
                    <ExternalLinkIcon className="h-5 text-slate-lightest group-hover:text-turquoise" />
                  </a>
                </div>
              </div>
              <div className="hidden cursor-pointer md:inline-block md:w-1/2">
                <a href="https://known-origin.vercel.app/">
                  <Image
                    className="relative rounded grayscale-100 hover:brightness-105 hover:grayscale-0 filter"
                    src={nft}
                    width={380}
                    height={300}
                    objectFit="cover"
                  />
                </a>
              </div>
            </animated.section>

            <animated.section
              style={animation}
              className="max-w-screen-md p-6 mt-10 rounded-lg md:text-right md:space-x-2 bg-navy-light md:flex"
            >
              <div className="hidden cursor-pointer md:inline-block md:w-1/2">
                <a href="https://veganzone.netlify.app/">
                  <Image
                    className="relative rounded grayscale-100 hover:grayscale-50 filter"
                    src={social}
                    width={380}
                    height={320}
                    objectFit="cover"
                  />
                </a>
              </div>
              <div className="md:w-1/2">
                <a
                  href="https://veganzone.netlify.app/"
                  className="cursor-pointer group"
                >
                  <h1 className="font-mono text-sm text-turquoise">
                    Featured Project
                  </h1>
                  <h1 className="text-xl font-bold text-white group-hover:text-turquoise">
                    Social Media App
                  </h1>
                </a>
                <h1 className="font-sans mt-7 text-slate-light">
                  Interact with fellow vegans. Implements CRUD operations for
                  posts. Fully responsive design.
                </h1>
                <h1 className="mt-6 font-mono text-sm tracking-tighter text-slate-light">
                  React Redux Node.js Express Tailwind{" "}
                </h1>
                <div className="flex mt-3 -ml-2 md:justify-end">
                  <a
                    className="p-2 cursor-pointer group"
                    href="https://github.com/darwinbalino/social-media-website"
                  >
                    <CodeIcon className="h-5 text-slate-lightest group-hover:text-turquoise" />
                  </a>
                  <a
                    href="https://veganzone.netlify.app/"
                    className="p-2 cursor-pointer group"
                  >
                    <ExternalLinkIcon className="h-5 text-slate-lightest group-hover:text-turquoise" />
                  </a>
                </div>
              </div>
            </animated.section>

            <animated.section
              style={animation}
              className="max-w-screen-md p-6 mt-10 rounded-lg bg-navy-light md:flex"
            >
              <div className="md:w-1/2">
                <a
                  href="https://amazon-e-commerce.vercel.app/"
                  className="cursor-pointer group"
                >
                  <h1 className="font-mono text-sm text-turquoise">
                    Featured Project
                  </h1>
                  <h1 className="text-xl font-bold text-white group-hover:text-turquoise">
                    E-Commerce App
                  </h1>
                </a>
                <h1 className="font-sans mt-7 text-slate-light">
                  Buy your every day essentials. Product data rendered server
                  side from FakeStoreAPI. Implements CRUD for basket items.
                  Login functionality using NextAuth.
                </h1>
                <h1 className="mt-6 font-mono text-sm tracking-tighter text-slate-light">
                  Next.js Redux Firebase Stripe API{" "}
                </h1>
                <div className="flex mt-3 -ml-2">
                  <a
                    className="p-2 cursor-pointer group"
                    href="https://github.com/darwinbalino/amazon-clone"
                  >
                    <CodeIcon className="h-5 text-slate-lightest group-hover:text-turquoise" />
                  </a>
                  <a
                    href="https://amazon-e-commerce.vercel.app/"
                    className="p-2 cursor-pointer group"
                  >
                    <ExternalLinkIcon className="h-5 text-slate-lightest group-hover:text-turquoise" />
                  </a>
                </div>
              </div>
              <div className="hidden cursor-pointer md:inline-block md:w-1/2">
                <a href="https://amazon-e-commerce.vercel.app/">
                  <Image
                    className="relative rounded grayscale-100 hover:grayscale-60 filter"
                    src={ecommerce}
                    width={380}
                    height={320}
                    objectFit="cover"
                  />
                </a>
              </div>
            </animated.section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;
