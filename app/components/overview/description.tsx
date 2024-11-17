import ArrowDown from "./iconcmp/downArrow";
import OverviewIcon from "./iconcmp/overview";

function Description() {
  return (
    <div className="flex w-full px-4">
      <div className="w-full flex">
        <ArrowDown className="w-9 h-44" />
        <div className="ml-1">
          <h1 className="font-bold md:text-[1.882rem] lg:text-[1rem] xl:text-[1.882rem] text-[#333333]">
            OVERVIEW
          </h1>
          <h2 className="font-bold md:text-[1.882rem] lg:text-[1rem] xl:text-[1.882rem] text-[#0000ff]">
            THE CONFLUENCE OF
          </h2>
          <h2 className="font-bold md:text-[1.882rem] lg:text-[1rem] xl:text-[1.882rem] text-[#0000ff]">
            ENGINEERING & CREATIVITY
          </h2>
          <p className="max-w-[756] h-24 text-[#333333] text-[1.05rem]">
            Kanda Idea is a leading Iranian company with a long-term successful
            experience in providing technology-based engineering, monitoring
            (supervising), and management services in mega-projects,
            enterprises, and the public sector.
          </p>
        </div>
      </div>

      <OverviewIcon className="w-[720px]  mr-36  h-[310px]" />
    </div>
  );
}

export default Description;
