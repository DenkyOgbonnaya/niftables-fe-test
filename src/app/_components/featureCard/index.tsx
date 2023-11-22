import Image from "next/image";

interface Props {
  title: string;
  content: string;
  featureImg: string;
  subTitle: string;
}
export default function FeatureCard({
  title,
  content,
  featureImg,
  subTitle,
}: Props) {
  return (
    <article className="flex flex-col tablet:flex-row overflow-hidden  z-10 self-stretch rounded-md gap-[1.88rem] desktop:gap-10 h-fit desktop:h-[18.875rem] bg-[#13171d99] bg-opacity-60 relative ">
      <div className="flex flex-1 flex-col gap-[0.62rem] desktop:gap-[0.94rem] p-6 desktop:p-10">
        <h5 className=" text-white font-heading text-[1.5rem] tablet:text-[1.75rem] desktop:text-[2.375rem] leading-[2.1rem] desktop:leading-[2.85rem] font-normal uppercase">
          {title}
        </h5>
        <span className=" text-white text-base desktop:text-lg font-body font-normal leading-[1.3rem] desktop:leading-[1.4625rem]">
          {content}
        </span>
      </div>
      <div className="relative  object-cover h-[16.25rem] w-full tablet:w-[28%] desktop:h-[18.875rem] bg-none bg-transparent bg-opacity-0  bg-gradient   ">
        <Image src={featureImg} alt={title} fill loading="lazy" className=" bg-none bg-transparent bg-opacity-0   mix-blend-multiple  " />
      </div>
    </article>
  );
}
