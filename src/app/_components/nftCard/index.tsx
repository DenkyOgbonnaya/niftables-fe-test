import Image from "next/image";

interface Props {
    title: string;
    content: string;
    featureImg: string;
    subTitle: string
}
export default function NftCard({title, content,featureImg,subTitle}:Props) {
  return (
    <article className="flex  flex-1 self-stretch rounded-md flex-col gap-[1.25rem] desktop:gap-[3.69rem] pt-[1.88rem] pb-[1.5rem] desktop:pb-[3.56rem] bg-[#13171d99] bg-opacity-60 relative">
      <span className=" absolute flex justify-center items-center rounded-[6.25rem] p-[0.25rem]  bg-white -top-[6px]  right-6 z-30 text-black text-[0.75rem] font-body font-bold leading-[0.825rem]">COMING SOON</span>
      <hgroup className="flex flex-col gap-[0.62rem] desktop:gap-[1.75rem] px-[1.25rem] desktop:px-[1.88rem]">
        <h5 className=" text-white font-heading text-[1.5rem] tablet:text-[1.75rem] leading-[2.1rem] desktop:text-[2.375rem] font-normal uppercase">
          {title}
        </h5>
        <span className="text-gradient text-base desktop:text-[1.375rem] font-body font-bold leading-[1.4625rem] desktop:leading-[1.7875rem]">
          {subTitle}
        </span>
      </hgroup>
      <div className="flex flex-col gap-[1.75rem]">
        <div className="relative w-[calc(100%-1.25rem)] desktop:w-[calc(100%-1.88rem)] object-cover h-[14.625rem] pr-1.88rem">
          <Image src={featureImg} alt={title} fill loading="lazy" />
        </div>
        <p className="text-white text-base desktop:text-lg font-body font-normal leading-[1.3rem] desktop:leading-[1.4625rem] px-[1.25rem] desktop:px-[1.88rem]">
         {content}
        </p>
      </div>
    </article>
  );
}
