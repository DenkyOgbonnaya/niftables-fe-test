import { Button } from "@/components";

export default function CreonPass() {
  const creonPacks = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];
  return (
    <section className="bg-black py-[8.5rem]">
      <div className="container flex gap-[5.31rem]">
        <div className="flex flex-col flex-1 gap-[3.18rem]">
          <h4 className="text-white  uppercase font-heading text-7xl  leading-[4.675rem] font-normal z-10 ">
            creon pass <br /> nft
          </h4>
          <div className="divider" />
          <h4 className="text-gradient font-body text-[1.375rem] font-bold leading-[1.7875rem] relative overflow-hidden">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </h4>

          <div className="flex flex-col gap-[0.62rem] mt-[0.62rem]">
            {creonPacks.map((pack, index) => (
              <div
                key={index}
                className="flex items-center rounded-md border border-grey px-[1.13rem] py-4"
              >
                <p className=" text-white font-body font-normal text-lg leading-[1.4625rem]">
                  {pack}
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-[2.62rem]">Buy Creon Pass</Button>
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
