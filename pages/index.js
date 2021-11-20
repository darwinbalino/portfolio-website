import Head from "next/head";
import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy">
      <Head>
        <title>Darwin Balino</title>
      </Head>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className="space-y-56 px-7 sm:p-14 md:p-24 ">
        <Hero sidebar={sidebar} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
