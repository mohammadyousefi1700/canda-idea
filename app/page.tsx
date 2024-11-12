import Image from "next/image";
import SvgKanda from "../public/svg/kandaidea-svg.svg";
import KandaLogo from "./components/banner/components/kandaIdeaLogo";
import Banner from "./components/banner";
import Overview from "./components/overview";
import OurProject from "./components/ourProject";
import ApplyResume from "./components/apply";
import Footer from "./components/footer/inde";

// components/MyLogo.js

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      {/* OVERVIEW */}
      <Overview />
      {/* { OurProject  } */}
      <OurProject />
      <ApplyResume />
      <Footer />
    </div>
  );
}
