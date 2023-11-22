import { ChevronDown, Rectangle } from "@/assets";
import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}
export default function Accordion({ children, icon, title }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleState = () => {
    setExpanded((e) => !e);
  };
  const heigh = "500px";
  return (
    <div
      className={` transition-all duration-1000 ease-in-out ${
        expanded ? `${heigh}` : "h-[9rem]"
      } border-b-[2px]  border-grey pb-[1.88rem]`}
    >
      <h2>
        <div
          //   type="button"
          className="flex  cursor-pointer group items-center justify-between w-full p-5 font-medium rtl:text-right  rounded-t-xl  gap-3"
          onClick={toggleState}
        >
          <div className="flex items-start gap-[1.88rem]">
            <span
              className={`transition-colors duration-1000 ease-in-out ${
                expanded ? "text-white" : "text-transparent"
              }`}
            >
              {icon}
            </span>
            <div className="flex flex-col gap-[1.75rem]">
              <div className="flex items-center justify-between">
                <span className=" text-[1.375rem] font-body font-bold leading-[1.7875rem] text-white transition-colors duration-1000 ease-in-out group-hover:text-blue">
                  {title}
                </span>
                <span
                  className={`transition-all duration-[1s] text-white group-hover:text-blue ${
                    expanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown />
                </span>
              </div>
              <div className={``}>
                <div
                  className={` text-white font-body text-[1.125rem] leading-[1.4625rem] font-normal transition-all duration-1000 ease-in-out opacity-0 ${
                    expanded ? "opacity-100" : " opacity-0"
                  } `}
                  aria-expanded={expanded}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
}
