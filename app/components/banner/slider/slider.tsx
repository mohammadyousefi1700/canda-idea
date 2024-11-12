"use client";

import React, { useState, useEffect, ReactNode } from "react";

const texts: {icons:ReactNode, title: string; description: string }[] = [
  {icons: title: "متن اول", description: "Loremdsfsdfsdfsdfsdfs" },
  { title: "متن دوم", description: "Loremsdklfjsdfjlksdfj" },
  { title: "متن سوم", description: "Loremsdklfjsdfjlksdfj" },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-64 text-white bg-inherit">
      {/* <div
        className={`text-2xl font-bold text-white duration-1000 ease-in-out transition-all ${
          currentIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
        key={currentIndex}
      >
        {texts[currentIndex]}
      </div> */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptates
      sed dolor porro tempora dolorem eum blanditiis quibusdam doloribus? Ipsa
      nisi repellendus, voluptates nemo natus rem accusamus voluptas quidem
      doloribus.
    </div>
  );
};

export default Slider;
