// "use client";

// import React, { useState, useEffect, ReactNode } from "react";

// const texts: { icons: ReactNode; title: string; description: string }[] = [
//   {
//     icons: <div></div>,
//     title: "متن اول",
//     description: "Loremdsfsdfsdfsdfsdfs",
//   },
//   {
//     icons: <div></div>,
//     title: "متن دوم",
//     description: "Loremsdklfjsdfjlksdfj",
//   },
//   {
//     icons: <div></div>,
//     title: "متن سوم",
//     description: "Loremsdklfjsdfjlksdfj",
//   },
// ];

// const Slider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-64 text-white bg-inherit">
//       <div
//         className={`text-2xl font-bold text-white duration-1000 ease-in-out transition-all ${
//           currentIndex === 0 ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {texts.map((item) => {
//           return (
//             <div className="">
//               <div>icon title</div>
//               <div>line and number</div>
//               <div>content show slider</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Slider;
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import OneSlider from "./cmpicons/1recslider";
// import ArrowDown from "./cmpicons/ArrowDown";
// import LastNumberIcon from "./cmpicons/LastNumberIcon";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // Interface for image data
// interface ImageData {
//   // src: StaticImageData;
//   title: string;
// }

// // Image data array
// const images: ImageData[] = [
//   {
//     title: "dsfsdfdsf",
//   },
//   {
//     title: "seasdfd",
//   },
//   {
//     title: "bgffgb",
//   },
// ];

// export default function ImageSlider(): JSX.Element {
//   // State to keep track of the current image index
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   // Function to show the previous slide
//   const prevSlide = (): void => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   // Function to show the next slide
//   const nextSlide = (): void => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 10000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="relative w-full hover:not mx-auto mt-4">
//       <div className="relative h-[460px] group ">
//        <div className="transition-all duration-300 ease-in-out  ">
//         {images[currentIndex].title}
//         </div><div className=" flex flex-col">
//           <OneSlider className="w-8 h-8  self-end mr-36" />
//           <hr />
//           <LastNumberIcon className="w-8 mt-2 h-8 self-end mr-36 " />
//           <ArrowDown className="w-8 h-8 self-end mt-2 mr-36 " />
//         </div>
//         {/* <Image
//           src={images[currentIndex].src}
//           alt={`Slider Image ${currentIndex + 1}`}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
//         /> */}
//       </div>

//       <div className="flex justify-center mt-4">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`h-1 w-10 mx-1 ${
//               index === currentIndex
//                 ? "bg-[#beff46] rounded-xl"
//                 : "bg-gray-300 rounded-xl"
//             } transition-all duration-500 ease-in-out`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////
"use client";
import { useState, useEffect } from "react";
import OneSlider from "./cmpicons/1recslider";
import ArrowDown from "./cmpicons/ArrowDown";
import LastNumberIcon from "./cmpicons/LastNumberIcon";

// Interface for image data
interface ImageData {
  title: string;
}

// Image data array
const images: ImageData[] = [
  { title: "عنوان اول" },
  { title: "عنوان دوم" },
  { title: "عنوان سوم" },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Function to show the next slide
  const nextSlide = (): void => {
    setIsAnimating(true); // Start the animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false); // End the animation after transition
    }, 600); // Match the animation duration
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="relative  group pt-20 overflow-hidden">
        {/* Current slide */}
        <div
          className={`absolute inset-0 transition-all  pl-10 duration-500 ease-in-out transform ${
            isAnimating
              ? "translate-y-[60px] opacity-0" // Exit: Move 100px down and fade out
              : "translate-y-0 opacity-100" // Static position
          }`}
          key={`slide-${currentIndex}`}
        >
          {images[currentIndex].title}
        </div>

        {/* Next slide */}
        <div
          className={`absolute inset-0 transition-all pl-10 duration-500 ease-in-out transform ${
            isAnimating
              ? "translate-y-0 opacity-100" // Enter: Move to original position and fade in
              : "-translate-y-[10px] opacity-0" // Prepare to enter from 100px above
          }`}
          key={`next-slide-${(currentIndex + 1) % images.length}`}
        >
          {images[(currentIndex + 1) % images.length].title}
        </div>

        {/* Additional icons */}
        <div className="flex flex-col">
          <OneSlider className="w-8 h-8 self-end mr-36" />
          <hr />
          <LastNumberIcon className="w-8 mt-2 h-8 self-end mr-36" />
          <ArrowDown className="w-8 h-8 self-end mt-2 mr-36" />
        </div>
      </div>
      {/* Dots indicator */}
      {/* <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div> */}
      <div className="w-full h-fit mt">
        <div
          className={`absolute inset-0 transition-all  pl-10 duration-500 ease-in-out transform ${
            isAnimating
              ? "translate-y-[60px] opacity-0" // Exit: Move 100px down and fade out
              : "translate-y-0 opacity-100" // Static position
          }`}
          key={`slide-${currentIndex}`}
        >
          {images[currentIndex].title}
        </div>

        {/* Next slide */}
        <div
          className={`absolute inset-0 transition-all pl-10 duration-500 ease-in-out transform ${
            isAnimating
              ? "translate-y-0 opacity-100" // Enter: Move to original position and fade in
              : "-translate-y-[10px] opacity-0" // Prepare to enter from 100px above
          }`}
          key={`next-slide-${(currentIndex + 1) % images.length}`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error omnis
          alias, ut itaque in vel nobis aliquam minima velit enim sunt modi ea
          fuga voluptatum facilis distinctio cumque consectetur iusto!
          {images[(currentIndex + 1) % images.length].title}
        </div>
      </div>{" "}
    </div>
  );
}
