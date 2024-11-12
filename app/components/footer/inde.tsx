import Image from "next/image";
import ArrowDown from "../overview/iconcmp/downArrow";
import FooterIcon from "./footerIcon";
import Link from "next/link";

function Footer() {
  const h3ClassName = "text-[#333333] text-[2rem]";
  return (
    <div className="w-full justify-center  flex gap-x-52 mt-48 ">
      <div className="w-fit flex flex-col">
        <h3 className={`${h3ClassName} flex`}>
          {" "}
          <span> INDUSTRIES</span>{" "}
          <Image
            className="h-20 absolute"
            src={"/image/arrows_up.png"}
            alt="s"
            width={10}
            height={10}
          />
        </h3>
        <Link href={"#"}>Maritime</Link>
        <Link href={"#"}>Oil & Gas</Link>
        <Link href={"#"}>Telecommunication</Link>
        <Link href={"#"}>Agriculture</Link>
        <Link href={"#"}>Roads & Cities</Link>
        <Link href={"#"}>IT Infrastructure </Link>
      </div>
      <div className="w-fit flex flex-col">
        <h3 className={h3ClassName}>SERVICES</h3>
        <Link href={"#"}>Data Providing </Link>
        <Link href={"#"}>Data Engineering </Link>
        <Link href={"#"}>Engineering Design </Link>
        <Link href={"#"}>GIS & Geomatic </Link>
      </div>
      <div className="w-fit flex flex-col">
        <div className="w-fit flex flex-col">
          <h3 className={h3ClassName}>COOPERATION</h3> <FooterIcon />{" "}
        </div>
        <Link href={"#"}>Contact Us</Link>
        <Link href={"#"}>Get Job</Link>
        <Link href={"#"}>About Kanda Idea</Link>
        <Link href={"#"}>
          Change Language :
          <br />
          Fa / En{" "}
        </Link>
        <Link href={"#"}>©Copyright 2020. All Rights Reserved.</Link>
      </div>
    </div>
  );
}

export default Footer;
