import Image from "next/image";

export default function ProfitingThrough() {
  return (
    <section className="bg-black pt-[4.5rem] desktop:pt-[7.5rem] pb-[4.44rem] desktop:pb-[8.81rem]">
      <div className="container flex flex-col gap-[2.5rem] desktop:gap-[5.19rem]">
        <div className="flex flex-col gap-[0.62rem] desktop:gap-5">
          <h4 className="text-white  uppercase font-heading text-[1.5rem] tablet:text-[2.75rem] leading-[2.3rem] desktop:text-7xl tablet:leading-[3.025rem]  desktop:leading-[4.675rem] font-normal z-10 ">
            Profiting Through
          </h4>
          <h3 className="text-gradient self-end font-heading uppercase text-lg tablet:text-[1.75rem] desktop:text-[2.375rem] font-normal left-[2.1rem] desktop:leading-[2.85rem]">
            AI Innovation & Decentralization
          </h3>
        </div>

        <div className="flex flex-col laptop:flex-row gap-[1.25rem]   laptop:gap-[4.44rem]">
          <div className="relative object-cover w-full laptop:w-[39.75rem] desktop:w-[59.1875rem] h-[30.8125rem] desktop:h-[30.3125rem]">
            <Image
              src="/images/profiling.png"
              alt=""
              loading="lazy"
              fill
              className="hidden laptop:block"
            />
            <Image
              src="/images/profilingMobile.png"
              alt=""
              loading="lazy"
              fill
              className=" laptop:hidden"
            />
          </div>

          <hgroup className="flex-1 flex flex-col justify-center gap-[1.88rem] laptop:gap-[1.75rem] border-y laptop:border-x border-grey py-6 laptop:px-6 desktop:px-[1.88rem]">
            <h4 className="hidden desktop:block text-white font-body font-bold text-[1.375rem] leading-[1.7875rem]">
              The dynamic community driven business model of the future.
            </h4>
            <h4 className=" desktop:hidden text-white font-body font-bold text-lg leading-[1.4625rem]">
              A Dynamic Business Model for Sustainable Growth and Community
              Engagement
            </h4>
            <p className=" hidden desktop:block text-white font-body font-normal text-lg leading-[1.4625rem]">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
            <p className=" desktop:hidden text-white font-body font-normal text-base leading-[1.3rem]">
              At Creon, we merge AI tools with the crypto and NFT markets,
              leveraging a dynamic business model to generate profits. Our
              commitment to innovation and decentralization allows us to
              strengthen our market position and foster a sustainable ecosystem.
              We empower our community, ensuring transparency and actively
              involving NFT holders in our success.
            </p>
          </hgroup>
        </div>
      </div>
    </section>
  );
}
