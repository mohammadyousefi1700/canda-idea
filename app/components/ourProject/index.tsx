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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollY);
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

      <div className="w-full flex relative">
        <ArrowDown className="w-9 h-44" />

        <CardIntroductProduct projects={data} />

        <div
          className={`absolute top-1/2 lg:left-[110%] xl:left-[100%] transform -translate-x-1/2 -translate-y-1/2 transition-transform -lin duration-500`}
          style={{
            transform: `translate(-50%, -50%) translateX(${
              scrollPosition > 0 ? -scrollPosition * 0.5 : scrollPosition * 0.5
            }px)`,
          }}
        >
          <p
            className="text-[200px] pl-9"
            style={{
              WebkitTextStroke: "1px gray",
              color: "transparent",
            }}
          >
            We
          </p>
          <p
            className="text-[200px] mb-72 -mt-40 "
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
