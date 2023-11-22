import Image from "next/image";

export default function ProfitingThrough() {
  return (
    <section className="bg-black pt-[7.5rem] pb-[8.81rem]">
      <div className="container flex flex-col gap-[5.19rem]">
        <div className="flex flex-col gap-5">
          <h4 className="text-white  uppercase font-heading text-7xl  leading-[4.675rem] font-normal z-10 ">
            Profiting Through
          </h4>
          <h3 className="text-gradient self-end font-heading uppercase text-[2.375rem] font-normal leading-[2.85rem]">
            AI Innovation & Decentralization
          </h3>
        </div>

        <div className="flex   gap-[4.44rem]">
          <div className="relative object-cover w-[59.1875rem] h-[30.3125rem]">
            <Image src="/images/profiling.png" alt="" loading="lazy" fill />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-[1.75rem] border-x border-grey px-[1.88rem]">
            <h4 className=" text-white font-body font-bold text-[1.375rem] leading-[1.7875rem]">
              The dynamic community driven business model of the future.
            </h4>
            <h4 className=" text-white font-body font-normal text-lg leading-[1.4625rem]">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
