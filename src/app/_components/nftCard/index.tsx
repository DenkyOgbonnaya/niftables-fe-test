import Image from "next/image";

interface Props {
    title: string;
    content: string;
    featureImg: string;
    subTitle: string
}
export default function NftCard({title, content,featureImg,subTitle}:Props) {
  return (
    <article className="flex flex-1 self-stretch rounded-md flex-col gap-[3.69rem] pt-[1.88rem] pb-[3.56rem] bg-[#13171d99] bg-opacity-60 relative after:content-['COMING SOON'] after:w-[100px] after:h-fit after:flex after:justify-center after:items-center after:rounded-[6.25rem] after:absolute after:p-[0.25rem]  after:bg-white after:top-[4px]  after:z-30 after:text-black after:text-[0.75rem] after:font-body after:font-bold after:leading-[0.825rem]">
      <hgroup className="flex flex-col gap-[1.75rem] px-[1.88rem]">
        <h5 className=" text-white font-heading text-[2.375rem] font-normal uppercase">
          {title}
        </h5>
        <span className="text-gradient text-[1.375rem] font-body font-bold leading-[ 1.7875rem]">
          {subTitle}
        </span>
      </hgroup>
      <div className="flex flex-col gap-[1.75rem]">
        <div className="relative w-[calc(100%-1.88rem)] object-cover h-[14.625rem] pr-1.88rem">
          <Image src={featureImg} alt={title} fill loading="lazy" />
        </div>
        <p className="text-white text-lg font-body font-normal leading-[1.4625rem] px-[1.88rem]">
         {content}
        </p>
      </div>
    </article>
  );
}
