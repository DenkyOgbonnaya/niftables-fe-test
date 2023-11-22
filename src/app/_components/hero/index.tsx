import Header from "../header";

export default function Hero() {
  return (

    <section className="h-[60.625rem] pt-[1.88rem] pb-[7.12rem] after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:hero-gradient after:h-[60.625rem] after:mix-blend-soft-light ">
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
      <div className="container mt-[34.69rem]  z-10 flex flex-col gap-10 w-fit">
        <h1 className="text-white  uppercase font-heading text-7xl  leading-[4.675rem] font-normal z-10 ">
          The world&apos;s first <br /> platform for Tokenizing <br /> AI
          blockchain projects
        </h1>
        <h3 className="text-gradient font-body text-[1.375rem] font-bold leading-[1.7875rem] relative overflow-hidden before:absolute before:content-[''] before:w-full before:h-[1px] before:bg-red-500  after:absolute after:left-0 after:content-[''] after:w-full after:-bottom-2 after:h-[1px] after:bg-red-500">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </h3>
      </div>
    </section>

  );
}
