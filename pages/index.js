import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import data from "../data/data.json";
import HomeLanding from "../components/HomeLanding";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeLanding />
    </div>
  );
}
