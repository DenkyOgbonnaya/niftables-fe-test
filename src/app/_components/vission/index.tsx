import { Rectangle } from "@/assets";
import { Accordion } from "@/components";
import Image from "next/image";

export default function Vission() {
  return (
    <section className="bg-black pt-[7.5rem] pb-[8.81rem]">
      <div className="container flex-col laptop:flex-row flex  ">
        <div className="flex flex-1 flex-col  desktop:gap-[1.88rem]">
          <h4 className=" hidden laptop:block text-white  uppercase font-heading text-[2.375rem]  leading-[2.85rem] font-normal">
            Our vision is to <br className="hidden laptop:block" /> support the
            innovation <br className="hidden laptop:block" /> of AI blockchain{" "}
            <br className="hidden laptop:block" /> projects{" "}
            <strong className="text-gradient text-white  uppercase font-heading text-[2.375rem]  leading-[2.85rem] font-normal">
              while <br className="hidden laptop:block" /> prioritizing
              communities <br className="hidden laptop:block" /> and
              democratizing <br className="hidden laptop:block" />
              profits
            </strong>
          </h4>

          <h4 className=" text-[1.5rem]  leading-[2.3rem]  laptop:hidden text-white tablet:text-[1.75rem] tablet:leading-[2.1rem]  uppercase font-heading  font-normal">
            our mission is to <br className="hidden laptop:block" /> provide
            unique, <br className="hidden laptop:block" /> confidential AI-based
            tools, to <br className="hidden laptop:block" />
            which you will <br className="hidden laptop:block" /> gain{" "}
            <strong className="text-gradient text-white  uppercase font-heading text-[1.5rem] leading-[2.3rem] tablet:text-[1.75rem]  tablet:leading-[2.1rem] font-normal">
              lifetime <br className="hidden laptop:block" />
              access through <br className="hidden laptop:block" /> NFT tokens
              and <br className="hidden laptop:block" /> our CREON{" "}
              <br className="hidden laptop:block" />
              token.
            </strong>
          </h4>
          <div className="relative hidden laptop:block object-cover w-full h-[23.5625rem] desktop:h-[31.375rem]">
            <Image src="/images/creaon.png" alt="" loading="lazy" fill />
          </div>
        </div>

        <div className="flex flex-1 ">
          <div className="flex w-full  laptop:w-full flex-1 flex-col  gap-[1.88remrem]">
            <div className="flex-1 flex flex-col gap-[1.88rem]">
              <Accordion title="Profitability and Growth" icon={<Rectangle />}>
                <p className=" text-base desktop:text-lg font-body font-normal leading-[1.3rem] desktop:leading-[1.4625rem] text-white">
                  At Creon, we handpick cutting-edge AI projects and offer our
                  community and token holders early access and investment
                  opportunities. Our community actively contributes to the
                  growth and profitability of these projects, creating a dynamic
                  ecosystem of innovation and shared success.
                </p>
              </Accordion>
              <Accordion
                title="Transparent & Fair Decentralized Earnings"
                icon={<Rectangle />}
              >
                <p className=" text-base desktop:text-lg font-body font-normal leading-[1.3rem] desktop:leading-[1.4625rem] text-white">
                  At Creon, we handpick cutting-edge AI projects and offer our
                  community and token holders early access and investment
                  opportunities. Our community actively contributes to the
                  growth and profitability of these projects, creating a dynamic
                  ecosystem of innovation and shared success.
                </p>
              </Accordion>
              <Accordion
                title="Launching the
              future"
                icon={<Rectangle />}
              >
                <p className=" text-base desktop:text-lg font-body font-normal leading-[1.3rem] desktop:leading-[1.4625rem] text-white">
                  At Creon, we handpick cutting-edge AI projects and offer our
                  community and token holders early access and investment
                  opportunities. Our community actively contributes to the
                  growth and profitability of these projects, creating a dynamic
                  ecosystem of innovation and shared success.
                </p>
              </Accordion>
              <Accordion
                title="Limitless Possibilities of AI
              & Crypto"
                icon={<Rectangle />}
              >
                <p className=" text-base desktop:text-lg font-body font-normal leading-[1.3rem] desktop:leading-[1.4625rem] text-white">
                  At Creon, we handpick cutting-edge AI projects and offer our
                  community and token holders early access and investment
                  opportunities. Our community actively contributes to the
                  growth and profitability of these projects, creating a dynamic
                  ecosystem of innovation and shared success.
                </p>
              </Accordion>
            </div>
          </div>

          <div className="relative self-end hidden  laptop:hidden object-contain w-[40%] h-[23.5625rem] desktop:h-[31.375rem]">
            <Image src="/images/creaon.png" alt="" loading="lazy" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
