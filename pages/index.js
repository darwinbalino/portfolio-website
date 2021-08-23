import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className=" bg-navy">
      <Head>
        <title>Darwin Balino</title>
      </Head>
      <Header />
      <div className="p-14 space-y-72 md:p-24">
        <Hero />
        <About />
      </div>
    </div>
  );
}
