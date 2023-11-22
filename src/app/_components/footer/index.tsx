import { Discord, Telegram, Twitter } from "@/assets";

export default function Footer() {
  return (
   
      <footer className="flex container  h-[5.25rem] justify-between   items-center ">
        <div className="flex gap-[5.62rem] items-center">
          <span className=" font-body z-10 font-normal text-base leading-[1.3rem] text-white">
            © Creon 2023. All rights reserved.
          </span>
          <ul className="flex gap-[0.62rem] items-center z-10">
            <li>
              <Telegram />
            </li>

            <li>
              <Discord />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
        <span className=" font-body z-10 font-normal text-base leading-[1.3rem] text-white">
          Powered by {" "}
          <strong>NIFTABLES</strong>
        </span>
      </footer>
   
  );
}
