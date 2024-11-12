import React from "react";
import Description from "./description";
import Performance from "./performance";
import ArrowDown from "./iconcmp/downArrow";

function Overview() {
  return (
    <>
      <div className="w-full  my-8">
        <Description />
      </div>
      <Performance />
    </>
  );
}

export default Overview;
