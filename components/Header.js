import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-8 py-8 font-mono md:px-12">
        <div className="cursor-pointer">
          <h1 className="py-0.5 px-1.5 text-md font-semibold text-turquoise ring-2 ring-turquoise">
            DB
          </h1>
        </div>
        <div className="cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 text-turquoise"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        <div className="items-center hidden font-medium md:flex space-x-7 text-tiny text-turquoise">
          <h1>
            01.{" "}
            <span className="cursor-pointer text-slate-lightest">About</span>
          </h1>

          <h1>
            02.{" "}
            <span className="cursor-pointer text-slate-lightest">Projects</span>
          </h1>
          <h1>
            03.{" "}
            <span className="cursor-pointer text-slate-lightest">Contact</span>
          </h1>
          <button className="px-4 py-2.5 rounded-sm cursor-pointer ring-1 ring-turquoise">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
