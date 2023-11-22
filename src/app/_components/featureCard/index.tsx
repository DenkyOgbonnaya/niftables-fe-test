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
    <article className="flex flex-1 z-10 self-stretch rounded-md gap-10 h-[18.875rem] bg-[#13171d99] bg-opacity-60 relative ">
      <div className="flex w-[70%] flex-col gap-[0.94rem] p-10">
        <h5 className=" text-white font-heading text-[2.375rem] leading-[2.85rem] font-normal uppercase">
          {title}
        </h5>
        <span className=" text-white text-lg font-body font-normal leading-[1.4625rem]">
          {content}
        </span>
      </div>
      <div className="relative flex-1 object-cover h-[18.875rem] bg-none bg-transparent bg-opacity-0  bg-gradient   ">
        <Image src={featureImg} alt={title} fill loading="lazy" className=" bg-none bg-transparent bg-opacity-0   mix-blend-multiple  " />
      </div>
    </article>
  );
}
