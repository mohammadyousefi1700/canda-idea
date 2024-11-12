import ArrowLogo from "./components/ArrowLogo";
import Navbar from "./navbar";
import Slider from "./slider/slider";

function Banner() {
  return (
    <div className="bg-[url('../public/space1.jpg')] pt-10 max-w-full box-border h-[800px]">
      <Navbar />
      <div className="text-white w-full text-[3rem] mt-10 ">
        <ArrowLogo
          className={"absolute mr-48 "}
          prop={{ width: "200px", height: "200px" }}
        />
        <div className="w-fit h-fit  -space-y-6 ml-14 pt-3">
          <p className="">CREATIVE</p> <p>ENGINEERING</p> <p>EXPERIENCE</p>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Banner;
