import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-navy">
      <Head>
        <title>Darwin Balino</title>
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
