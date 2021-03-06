import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import HomeLanding from "../components/HomeLanding";
import Services from "../components/Services";
import Solution from "../components/Solution";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeLanding />
      <Services />
      <Solution />
      <Contact />
      <Footer />
    </div>
  );
}
