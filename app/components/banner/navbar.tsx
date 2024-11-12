import React from "react";
import KandaLogo from "./components/kandaIdeaLogo";
import Image from "next/image";
import Mnu from "../../../public/svg/menu_button.svg";
function Navbar() {
  return (
    <div className="flex w-full px-10 justify-between">
      <div className="w-fit h-fit b">
        <KandaLogo prop={{ width: "300px", height: "50px" }} />
      </div>
      <div className="flex w-full items-center gap-x-4 justify-end ">
        <div className="text-white">Choose Language : En / Fa</div>

        <Image src={Mnu} alt="" width={20} height={20} />
      </div>
    </div>
  );
}

export default Navbar;
