import Header from "../header";

export default function Hero() {
  return (

    <section className="h-fit tablet:h-[60.625rem] pt-[1.88rem] pb-[5rem] desktop:pb-[7.12rem] after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:hero-gradient after:h-[60.625rem] after:mix-blend-soft-light ">
      <Header />
      <video
        className="w-full h-[60.625rem] bg-cover object-cover absolute left-0 right-0 top-0 bottom-0 -z-[1] "
        autoPlay
        loop
        preload="auto"
        muted
        playsInline
      >
        <source src="/videos/heroVideo.mov" type="video/mp4" />
      </video>
      <hgroup className="container mt-[5rem] tablet:mt-[30.94rem] items-center  laptop:mt-[34.69rem]  z-10 flex flex-col gap-10 w-fit">
        <h1 className="text-white hidden laptop:block  uppercase font-heading  text-[2.75rem]  leading-[3.025rem] font-normal z-10 ">
          The world&apos;s first <br /> platform for Tokenizing <br /> AI
          blockchain projects
        </h1>
        <h1 className="text-white text-center tablet:text-left laptop:hidden  uppercase font-heading text-[1.5rem] tablet:text-[2.75rem] leading-[2.3rem]  tablet:leading-[3.025rem] font-normal z-10 ">
        Empowering AI-Crypto <br /> Innovations and Integrating <br /> AI Tools into crypto.
        </h1>
        <div className="border-y border-purple flex items-center  w-fit">
        <h3 className="text-gradient font-body text-[1.375rem] font-bold leading-[1.7875rem]">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </h3>
        </div>
       
      </hgroup>
    </section>

  );
}
