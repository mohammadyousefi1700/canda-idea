"use client";

import Image from "next/image";
import React from "react";
import ArrowDown from "../overview/iconcmp/downArrow";

export type ProjectType = {
  imageURL: string;
  projectName: string;
};

type Props = {
  projects: ProjectType[];
};

function CardIntroductProduct({ projects }: Props) {
  console.log("projects[0]", projects[0]);

  return (
    <div className="flex flex-col gap-y-10 w-full gap-x-8">
      <div className="flex w-full gap-x-9 h-fit">
        <div key={projects[0].imageURL} className="relative flex">
          <span className="absolute text-lg font-bold">
            {projects[0].projectName}
          </span>
          <Image
            width={330}
            height={300}
            src={projects[0].imageURL}
            alt={projects[0].projectName}
          />
        </div>
        <div key={projects[1].projectName} className="relative flex">
          <span className="absolute text-lg font-bold">
            {projects[1].projectName}
          </span>
          <Image
            className="z-50"
            width={330}
            height={300}
            src={projects[1].imageURL}
            alt={projects[1].projectName}
          />
        </div>
        <div key={projects[2].projectName} className="relative flex">
          <span className="absolute text-lg font-bold">
            {projects[2].projectName}
          </span>
          <Image
            className="z-50"
            width={330}
            height={300}
            src={projects[2].imageURL}
            alt={projects[2].projectName}
          />
        </div>
      </div>
      <div className="w-full flex gap-x-8">
        <div key={projects[3].projectName} className="relative flex">
          <span className="absolute text-lg font-bold">
            {projects[3].projectName}
          </span>
          <Image
            className="z-50"
            width={430}
            height={300}
            src={projects[3].imageURL}
            alt={projects[3].projectName}
          />
        </div>
        <div key={projects[4].projectName} className="relative flex">
          <span className="absolute text-lg font-bold">
            {projects[4].projectName}
          </span>
          <Image
            width={430}
            height={300}
            src={projects[4].imageURL}
            alt={projects[4].projectName}
          />
        </div>
      </div>
      <div className="w-full gap-y-9 pr-20 flex gap-x-9 flex-wrap">
        {projects.length > 5 &&
          projects.map((item) => (
            <div key={item.projectName} className="relative  flex">
              <span className="absolute text-lg font-bold">
                {item.projectName}
              </span>
              <Image
                width={430}
                height={300}
                src={item.imageURL}
                alt={item.projectName}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardIntroductProduct;
