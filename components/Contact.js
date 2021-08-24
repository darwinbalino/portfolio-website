import React from "react";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="font-mono font-md text-turquoise">
          {" "}
          <span className="text-sm">03.</span> What's Next?
        </h1>
        <h1 className="font-sans text-4xl font-bold text-slate-lightest">
          Get in Touch
        </h1>
        <h1 className="font-sans text-slate text-md">
          Although I've yet to have any real world experience in the industry,
          I'm an eager learner, always challenging myself to take on bigger and
          better projects.
        </h1>
        <button className="py-4 font-mono text-sm text-center rounded-sm ring-1 text-turquoise ring-turquoise">
          Say Hello
        </button>
      </div>
    </main>
  );
};

export default Contact;
