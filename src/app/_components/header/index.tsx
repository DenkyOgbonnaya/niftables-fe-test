import { Logo } from "@/assets";
import { Button } from "@/components";
// import MobileHeader from "@/components/mobileHeader";
import Link from "next/link";

export default function Header() {
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
  return (
    <header className="relative px-[3.12rem] hidden lg:flex flex-row items-center justify-between flex-shrink-0 shadow-sm h-[ 2.75rem] ">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex items-center   justify-end gap-[5.12rem] ">
        <Link  href="/" className=" font-body font-bold text-lg leading-[1.2375rem] z-10 text-white transition-all duration-1000 hover:text-blue  cursor-pointer">
          Creon Pass
        </Link>
        {links.map((link) => (
          <Link
            key={link.title}
            className="relative z-10  font-body font-bold text-lg leading-[1.2375rem] text-white transition-colors duration-1000 hover:text-blue cursor-pointer after:content-['SOON'] after:flex after:justify-center after:items-center after:rounded-[6.25rem] after:absolute after:p-[0.25rem]  after:bg-black after:-top-[4px] after:-right-[2.8rem] after:text-purple after:text-[0.625rem] after:font-body after:font-bold after:leading-[0.6875rem]"
            href={link.route}
          >
            {link.title}
          </Link>
        ))}
    
        <Button intent="outline" size="sm">
          Contact Us
        </Button>
      </nav>
    </header>
  );
}
