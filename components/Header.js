import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";

const Header = ({ sidebar, setSidebar }) => {
  const router = useRouter();
  return (
    <main>
      <header className="flex items-center justify-between px-8 py-8 font-mono bg-opacity-90 bg-navy md:px-12">
        <div
          onClick={() => router.reload(window.location)}
          className="relative ml-1 cursor-pointer group"
        >
          <h1 className="absolute px-1 py-0.5 text-md z-10 text-turquoise">
            DB
          </h1>
          <div className="relative rotate-45 bg-transparent w-7 h-7 group-hover:bg-navy-lightest ring-2 ring-turquoise"></div>
        </div>
        <div
          onClick={() => setSidebar(!sidebar)}
          className="cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 text-turquoise"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <div className="items-center hidden font-medium md:flex space-x-7 text-tiny text-turquoise">
          <h1>
            01.{" "}
            <Link
              to="about"
              className="cursor-pointer hover:text-turquoise text-slate-lightest"
            >
              About
            </Link>
          </h1>

          <h1>
            02.{" "}
            <Link
              to="projects"
              className="cursor-pointer hover:text-turquoise text-slate-lightest"
            >
              Projects
            </Link>
          </h1>
          <h1>
            03.{" "}
            <Link
              to="contact"
              className="cursor-pointer hover:text-turquoise text-slate-lightest"
            >
              Contact
            </Link>
          </h1>
          <a
          href="resume.pdf"
          className="px-4 py-2.5 hover:bg-navy-lightest rounded-sm cursor-pointer ring-1 ring-turquoise">
            Resume
          </a>
        </div>
      </header>
      {/* Sidebar */}
      <div
        className={
          sidebar
            ? "bg-navy-light shadow-2xl space-y-6 w-[355px] absolute inset-y-0 right-0 transform translate-x-full transition duration-200 ease-in-out"
            : "bg-navy-light shadow-2xl z-10 space-y-6 w-[355px] absolute inset-y-0 right-0 transform transition duration-200 ease-in-out"
        }
      >
        <div className="flex justify-between px-7 py-7 mb-36">
          <div></div>
          <svg
            onClick={() => setSidebar(!sidebar)}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-11 text-turquoise"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col space-y-10 font-mono text-center">
          <div>
            <h1 className="text-sm text-turquoise">01.</h1>
            <Link
              to="about"
              onClick={() => setSidebar(!sidebar)}
              className="text-lg cursor-pointer text-slate-lightest hover:text-turquoise"
            >
              About
            </Link>
          </div>
          <div>
            <h1 className="text-sm text-turquoise">02.</h1>
            <Link
              to="projects"
              onClick={() => setSidebar(!sidebar)}
              className="text-lg cursor-pointer text-slate-lightest hover:text-turquoise"
            >
              Projects
            </Link>
          </div>
          <div>
            <h1 className="text-sm text-turquoise">03.</h1>
            <Link
              to="contact"
              onClick={() => setSidebar(!sidebar)}
              className="text-lg cursor-pointer text-slate-lightest hover:text-turquoise"
            >
              Contact
            </Link>
          </div>
          <div className="pt-10">
            <a
            href="resume.pdf"
            className="self-center hover:bg-navy-lightest px-12 cursor-pointer py-3.5 font-mono text-sm rounded-sm ring-1 text-turquoise ring-turquoise">
              Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
