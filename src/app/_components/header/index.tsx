import { Logo, MenuCancel, MenuIcon } from "@/assets";
import { Button } from "@/components";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const links = [
    {
      title: "Token",
      route: "/#",
    },
    {
      title: "AI Revenue",
      route: "/#",
    },
    {
      title: "AI Lauched",
      route: "/#",
    },
  ];

  const toggleMenu = () => {
    setMenuExpanded((menu) => !menu);
  };
  return (
    <>
      <header className="relative px-[0.88rem] tablet:px-[3.12rem]  flex flex-row items-center justify-between flex-shrink-0 shadow-sm h-[ 2.75rem] ">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center   justify-end gap-[0.94rem] desktop:gap-[5.12rem] ">
          <Link
            href="/"
            className="mobile:hidden desktop:flex  font-body font-bold text-lg leading-[1.2375rem] z-10 text-white transition-all duration-1000 hover:text-blue  cursor-pointer"
          >
            Creon Pass
          </Link>
          {links.map((link) => (
            <Link
              key={link.title}
              className="mobile:hidden desktop:flex  relative z-10  font-body font-bold text-lg leading-[1.2375rem] text-white transition-colors duration-1000 hover:text-blue cursor-pointer after:content-['SOON'] after:flex after:justify-center after:items-center after:rounded-[6.25rem] after:absolute after:p-[0.25rem]  after:bg-black after:-top-[4px] after:-right-[2.8rem] after:text-purple after:text-[0.625rem] after:font-body after:font-bold after:leading-[0.6875rem]"
              href={link.route}
            >
              {link.title}
            </Link>
          ))}

          <Button className=" z-30" intent="outline" size="sm">
            Contact Us
          </Button>
          <button
            className="relative z-30 placeholder:mobile:flex desktop:hidden border-none outline-none "
            onClick={toggleMenu}
          >
            <span
              className={`transition-all duration-1000 ease-in-out ${
                menuExpanded ? "opacity-0" : "opacity-100"
              }`}
            >
              <MenuIcon />
            </span>
            <span
              className={`transition-all duration-1000 ease-in-out absolute -left-0 -top-0 ${
                menuExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <MenuCancel />
            </span>
          </button>
        </nav>
        <aside
          className={`transition-all duration-1000 ease-in-out pl-[1.88rem] ${
            menuExpanded ? "right-0" : " -right-1/2 overflow-y-hidden"
          } flex z-20 flex-col gap-[1.88rem] fixed w-1/2 top-0 bottom-0  bg-black`}
        >
          <nav className="mt-[8rem] flex flex-col ">
             <Link href="/">
                <div className="  py-[0.94rem]  border-y border-grey flex   items-center">
                  <span className="  relative z-10  font-body font-bold text-lg leading-[1.2375rem] text-white transition-colors duration-1000 hover:text-blue cursor-pointer ">
                  Creon Pass
                  </span>
                </div>
             
              </Link>
            {links.map((link) => (
              <Link key={link.title} href={link.route}>
                <div className="  py-[0.94rem]  border-b border-grey flex   items-center">
                  <span className="  relative z-10  font-body font-bold text-lg leading-[1.2375rem] text-white transition-colors duration-1000 hover:text-blue cursor-pointer after:content-['SOON'] after:flex after:justify-center after:items-center after:rounded-[6.25rem] after:absolute after:p-[0.25rem]  after:bg-black after:-top-[4px] after:-right-[2.8rem] after:text-purple after:text-[0.625rem] after:font-body after:font-bold after:leading-[0.6875rem]">
                    {link.title}
                  </span>
                </div>
              
              </Link>
            ))}
          </nav>
        </aside>
      </header>
    </>
  );
}
