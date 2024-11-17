"use client";
import { useState, useEffect, ReactNode } from "react";
import OneSlider from "./cmpicons/1recslider";
import ArrowDown from "./cmpicons/ArrowDown";
import LastNumberIcon from "./cmpicons/LastNumberIcon";
import ServiceIcon from "./cmpicons/serviceIcon";
import ReSearchAndDevelopmentIcon from "./cmpicons/researchAndDeveopmentIcon";
import IndustriesIcon from "./cmpicons/IndustriesIcon";
import ServiceStokeIcon from "./icon2cmp/ServiceStokeIcon";
import ReSearchAndDevelopmentStrokeIcon from "./icon2cmp/ReSearchAndDevelopmentStrokeIcon";
import IndustriesStrokeIcon from "./icon2cmp/IndustriesStrokeIcon";
import NumberSecondeSlider from "./cmpicons/NumberSecondeSlider";
import TreeNumberSlider from "./cmpicons/treeNumberSlider";

const texts: { icons: ReactNode; title: string; description: string }[] = [
  {
    icons: <ReSearchAndDevelopmentStrokeIcon className="w-fit h-fit" />,
    title: "RESEARCH & DEVELOPMENT",
    description:
      "In this contemporary age, science and technology are changing magnificently second by second and being associated with it, is one of the most necessary characteristics that all companies should follow. Kanda Idea put adequate time and effort into researching cutting-edge science and developing the latest technology by several laboratories.",
  },
  {
    icons: <ServiceStokeIcon className="w-fit h-fit" />,
    title: "Services & Solutions",
    description:
      "Over 15 years of experience in engineering services consultancy and with the taking advantage of expert human resources, Kanda Idea provides a wide range of services and solutions and become one of the leading consultants in the region.",
  },
  {
    icons: <IndustriesStrokeIcon className="w-fit h-fit" />,
    title: "Industries",
    description:
      "Kanda Idea has considerable expertise in many industries and also has developed its sector of abilities field by field and it has been experienced in a wide range of territory. Kanda Idea has started its journey from Oil and Gas and Petrochemical industry and continued in GIS (Geospatial Information System) and Geomatics and now it is cruising in the Maritime and Ship-Tracking area.",
  },
];

const slider2: { icons: ReactNode }[] = [
  {
    icons: <ReSearchAndDevelopmentIcon className="w-fit h-fit" />,
  },
  {
    icons: <ServiceIcon className="w-fit h-fit" />,
  },
  {
    icons: <IndustriesIcon className="w-fit h-fit" />,
  },
];
const NumberSlider: { icons: ReactNode }[] = [
  {
    icons: <OneSlider className="w-8 h-8 self-end mr-36" />,
  },
  {
    icons: <NumberSecondeSlider className="w-8 h-8 self-end mr-36" />,
  },
  {
    icons: <TreeNumberSlider className="w-8 h-8 self-end mr-36" />,
  },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Function to show the next slide
  const nextSlide = (): void => {
    setIsAnimating(true); // Start the animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsAnimating(false); // End the animation after transition
    }, 600); // Match the animation duration
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative w-full h-fit mt-40">
        <div
          className={`absolute  transition-all  -top-24 pl-10 duration-500 ease-in-out transform ${
            isAnimating
              ? "translate-y-[20px]  opacity-0"
              : "-translate-y-[30x] "
          }`}
        >
          <div className="flex items-center gap-x-4">
            {" "}
            <div>{texts[(currentIndex + 1) % texts.length].icons}</div>
            <h3
              className="text-[50px]"
              style={{
                WebkitTextStroke: "1px gray",
                color: "transparent",
              }}
            >
              {texts[(currentIndex + 1) % texts.length].title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col">
          {NumberSlider[currentIndex].icons}
          <hr />
          <LastNumberIcon className="w-8 mt-2 h-8 self-end mr-36" />
          <ArrowDown
            onClick={nextSlide}
            className="w-8 h-8 self-end mt-2 mr-36 hover:cursor-pointer"
          />
        </div>

        <div className="relative mt-8">
          <div
            className={`absolute  transition-all  -top-24 pl-10  ease-linear transform ${
              isAnimating
                ? "translate-x-[20px]  opacity-0"
                : "-translate-x-[30x] "
            }`}
          >
            <div className="flex  gap-x-5">
              <div className="mt-3">{slider2[currentIndex].icons}</div>

              <div>
                <h3 className="block"> {texts[currentIndex].title} </h3>
                <p className="text-[20px] !w-[600px]">
                  {texts[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
