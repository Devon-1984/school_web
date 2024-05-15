import Image from "next/image";
import Navbar from "../components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Cta from "@/components/cta";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Cta />
    </>
  );
}
