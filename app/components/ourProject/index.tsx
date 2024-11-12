"use client";

import React, { useState, useEffect } from "react";
import CardIntroductProduct, { ProjectType } from "./CardIntroductProduct";
import ArrowDown from "../overview/iconcmp/downArrow";

const data: ProjectType[] = [
  { imageURL: "/image/ItemsSoftWare.jpg", projectName: "Items SoftWare" },
  {
    imageURL: "/image/PseezFLarePositioning.jpg",
    projectName: "Pseez FLare Positioning",
  },
  { imageURL: "/image/ItemsSoftWare.jpg", projectName: "Items SoftWare" },
  {
    imageURL: "/image/PseezFLarePositioning.jpg",
    projectName: "Pseez Lare Positioning",
  },
  { imageURL: "/image/ItemsSoftWare.jpg", projectName: "Items SoftWare" },
  {
    imageURL: "/image/PseezFLarePositioning.jpg",
    projectName: "Pseez are Positioning",
  },
];

function OurProject() {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showTextDiv = document.getElementById("showText");
      if (showTextDiv) {
        const rect = showTextDiv.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2;
        setIsCentered(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="showText" className="ml-10">
        <h1 className="font-bold text-3xl">OUR PROJECT</h1>
        <p className="text-gray-700 text-lg my-5">
          Discover the next inspiring talk in industry
        </p>
      </div>

      <div className="w-full flex">
        <ArrowDown className="w-9 h-44" />

        <CardIntroductProduct projects={data} />

        <div
          className={`absolute w-full items-end h-fit -mt-16 -space-y-40 transition-all duration-500 ${
            isCentered
              ? "delay-500 duration-300 transform   translate-x-[900px]"
              : ""
          }`}
        >
          <p
            className="text-[200px] pl-9 ml-56"
            style={{
              WebkitTextStroke: "1px gray",
              color: "transparent",
            }}
          >
            We
          </p>
          <p
            className="text-[200px]"
            style={{
              WebkitTextStroke: "1px gray",
              color: "transparent",
            }}
          >
            create
          </p>
        </div>
      </div>
    </>
  );
}

export default OurProject;
