import Image from "next/image";
import ArrowDown from "../overview/iconcmp/downArrow";
import FooterIcon from "./footerIcon";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApparatIcon from "./AparatIcon";

function Footer() {
  const h3ClassName = "text-[#333333] text-[2rem]";
  return (
    <div className="w-full  justify-center flex gap-x-52 mt-48 pl-8 ">
      <div className="w-fit h-fit ">
        <div className="relative ">
          <Image
            className="xl:10 md:h-14 lg:8 mt-3 object-contain absolute w-9 "
            src={"/image/arrows_up.png"}
            alt="s"
            width={10}
            height={10}
          />
          <div className="w-fit ml-8 flex flex-col h-fit">
            <h3 className={h3ClassName}> INDUSTRIES</h3>
            <div className="flex flex-col w-fit text-lg text-[#333333] h-fit mt-2">
              <Link href={"#"}>Maritime</Link>
              <Link href={"#"}>Oil & Gas</Link>
              <Link href={"#"}>Telecommunication</Link>
              <Link href={"#"}>Agriculture</Link>
              <Link href={"#"}>Roads & Cities</Link>
              <Link href={"#"}>IT Infrastructure </Link>
              <div className="flex mt-4 gap-x-3">
                <FontAwesomeIcon
                  className="w-5 h-5 "
                  icon={["fab", "linkedin"]}
                  size="2x"
                />
                <FontAwesomeIcon
                  className="w-5 h-5 "
                  icon={["fab", "instagram"]}
                  size="2x"
                />
                <ApparatIcon className={"w-5 h-5 "} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className={h3ClassName}>SERVICES</h3>
        <div className="flex flex-col w-fit text-lg text-[#333333] h-fit mt-2">
          <Link href={"#"}>Data Providing </Link>
          <Link href={"#"}>Data Engineering </Link>
          <Link href={"#"}>Engineering Design </Link>
          <Link href={"#"}>GIS & Geomatic </Link>
        </div>
      </div>
      <div>
        <div className="flex gap-x-24">
          <h3 className={h3ClassName}>COOPERATION</h3> <FooterIcon />
        </div>
        <div className="flex flex-col w-fit text-lg text-[#333333] h-fit mt-2">
          <Link href={"#"}>Contact Us </Link>
          <Link href={"#"}>Get Job</Link>
          <Link href={"#"}>About Kanda Idea</Link>
          <Link className="mt-5" href={"#"}>
            Change Language :
            <br />
            Fa / En{" "}
          </Link>

          <Link className="mt-5" href={"#"}>
            ©Copyright 2020. All Rights Reserved.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

//
