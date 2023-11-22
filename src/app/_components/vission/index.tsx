import { Rectangle } from "@/assets";
import { Accordion } from "@/components";
import Image from "next/image";

export default function Vission() {
  return (
    <section className="bg-black pt-[7.5rem] pb-[8.81rem]">
      <div className="container flex  ">
        <div className="flex flex-1 flex-col  gap-[1.88rem]">
          <h4 className=" text-white  uppercase font-heading text-[2.375rem]  leading-[2.85rem] font-normal">
            Our vision is to <br /> support the innovation <br /> of AI
            blockchain <br /> projects{" "}
            <strong className="text-gradient text-white  uppercase font-heading text-[2.375rem]  leading-[2.85rem] font-normal">
              while <br /> prioritizing communities <br /> and democratizing <br />
              profits
            </strong>
          </h4>
          <div className="relative object-cover w-full h-[31.375rem]">
            <Image src="/images/creaon.png" alt="" loading="lazy" fill />
          </div>
        </div>

        <div className="flex flex-1 flex-col  gap-[1.88remrem]">
          <div className="flex-1 flex flex-col gap-[1.88rem]">
            <Accordion title="Profitability and Growth" icon={<Rectangle />}>
              <p>
                At Creon, we handpick cutting-edge AI projects and offer our
                community and token holders early access and investment
                opportunities. Our community actively contributes to the growth
                and profitability of these projects, creating a dynamic
                ecosystem of innovation and shared success.
              </p>
            </Accordion>
            <Accordion
              title="Transparent & Fair Decentralized Earnings"
              icon={<Rectangle />}
            >
              <p>
                At Creon, we handpick cutting-edge AI projects and offer our
                community and token holders early access and investment
                opportunities. Our community actively contributes to the growth
                and profitability of these projects, creating a dynamic
                ecosystem of innovation and shared success.
              </p>
            </Accordion>
            <Accordion
              title="Launching the
              future"
              icon={<Rectangle />}
            >
              <p>
                At Creon, we handpick cutting-edge AI projects and offer our
                community and token holders early access and investment
                opportunities. Our community actively contributes to the growth
                and profitability of these projects, creating a dynamic
                ecosystem of innovation and shared success.
              </p>
            </Accordion>
            <Accordion
              title="Limitless Possibilities of AI
              & Crypto"
              icon={<Rectangle />}
            >
              <p>
                At Creon, we handpick cutting-edge AI projects and offer our
                community and token holders early access and investment
                opportunities. Our community actively contributes to the growth
                and profitability of these projects, creating a dynamic
                ecosystem of innovation and shared success.
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
