import { Button } from "@/components";

export default function CreonPass() {
  const creonPacks = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];
  const creomPacksMobile = [
    "Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly.",
    "The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad.",
    "Early access to allocations in inspiring tokenized projects, real businesses based on AI.",
  ];
  return (
    <section className="bg-black pt-[5.94rem] pb-[1.64rem]  desktop:py-[8.5rem]">
      <div className="container flex-col tablet:flex-row flex gap-[5.31rem]">
        <div className="flex flex-col flex-1 gap-[1.25rem] desktop:gap-[3.18rem]">
          <h4 className="text-white  uppercase font-heading text-[1.5rem] tablet:text-[2.75rem]  desktop:text-7xl leading-[3.025rem]  desktop:leading-[4.675rem] font-normal z-10 ">
            creon pass <br className=" hidden laptop:block" /> nft
          </h4>
          <div className="divider" />
          <h4 className="text-gradient hidden desktop:block font-body text-[1.375rem] font-bold  desktop:leading-[1.7875rem] relative overflow-hidden">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </h4>
          <h4 className="text-gradient  desktop:hidden font-body text-lg font-bold  leading-[1.4625rem] relative overflow-hidden">
            Access to confidential AI tools enabling business optimization and
            development. Only NFT holders will have the ability to use a given
            tool.
          </h4>

          <div className=" hidden  laptop:flex flex-col gap-[0.62rem] mt-[0.62rem]">
            {creonPacks.map((pack, index) => (
              <div
                key={index}
                className="flex items-center w-fit rounded-md border border-grey px-[1.13rem] py-4"
              >
                <p className=" text-white font-body font-normal text-lg leading-[1.4625rem]">
                  {pack}
                </p>
              </div>
            ))}
          </div>
          <div className=" flex flex-col tablet:flex-row flex-wrap gap-[0.62rem] laptop:hidden">
            <div className="flex  w-full items-center rounded-md border border-grey  p-4 pt-[0.62rem]">
              <p className=" text-white font-body font-normal text-base leading-[1.3rem]">
                {creomPacksMobile[0]}
              </p>
            </div>

            <div className="flex flex-1 w-full h-fit items-center rounded-md border border-grey p-4 pt-[0.62rem] ">
              <p className=" text-white font-body font-normal text-base leading-[1.3rem]">
                {creomPacksMobile[1]}
              </p>
            </div>
            <div className="flex flex-1  w-full h-fit items-center rounded-md border border-grey px-[1.13rem] p-4 pt-[0.62rem]">
              <p className=" text-white font-body font-normal text-base leading-[1.3rem]">
                {creomPacksMobile[2]}
              </p>
            </div>
          </div>
          <Button className=" mt-[0.6] laptop:mt-[2.62rem] w-full tablet:w-1/2 laptop:w-full">Buy Creon Pass</Button>
        </div>
        <div className="flex-1">
          <video
            className="w-full h-[50.5rem] bg-cover object-cover  "
            autoPlay
            loop
            preload="auto"
            muted
            playsInline
          >
            <source src="/videos/creonPassVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
