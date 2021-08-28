import React from "react";

const Header = ({ sidebar, setSidebar }) => {
  // const [sidebar, setSidebar] = useState(false);

  return (
    <main>
      <header className="flex items-center justify-between px-8 py-8 font-mono md:px-12">
        <div className="cursor-pointer">
          <h1 className="py-0.5 px-1.5 text-md font-semibold text-turquoise ring-2 ring-turquoise">
            DB
          </h1>
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
            <span className="cursor-pointer hover:text-turquoise text-slate-lightest">
              About
            </span>
          </h1>

          <h1>
            02.{" "}
            <span className="cursor-pointer hover:text-turquoise text-slate-lightest">
              Projects
            </span>
          </h1>
          <h1>
            03.{" "}
            <span className="cursor-pointer hover:text-turquoise text-slate-lightest">
              Contact
            </span>
          </h1>
          <button className="px-4 py-2.5 rounded-sm cursor-pointer ring-1 ring-turquoise">
            Resume
          </button>
        </div>
      </header>
      {/* Sidebar */}
      <div
        className={
          sidebar
            ? "bg-navy-light shadow-2xl space-y-6 w-[355px] absolute inset-y-0 right-0 transform translate-x-full transition duration-200 ease-in-out"
            : "bg-navy-light z-10 shadow-2xl space-y-6 w-[355px] absolute inset-y-0 right-0 transform transition duration-200 ease-in-out"
        }
      >
        <div className="flex justify-between py-8 mb-36 px-7">
          <div></div>
          <svg
            onClick={() => setSidebar(!sidebar)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 text-turquoise"
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
            <h1 className="text-lg cursor-pointer text-slate-lightest hover:text-turquoise">
              About
            </h1>
          </div>
          <div>
            <h1 className="text-sm text-turquoise">02.</h1>
            <h1 className="text-lg cursor-pointer text-slate-lightest hover:text-turquoise">
              Projects
            </h1>
          </div>
          <div>
            <h1 className="text-sm text-turquoise">03.</h1>
            <h1 className="text-lg cursor-pointer text-slate-lightest hover:text-turquoise">
              Contact
            </h1>
          </div>
          <div className="pt-10">
            <button className="self-center px-12 cursor-pointer py-3.5 font-mono text-sm rounded-sm ring-1 text-turquoise ring-turquoise">
              Resume
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
