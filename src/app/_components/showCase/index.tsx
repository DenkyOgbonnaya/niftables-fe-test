import NftCard from "../nftCard";

export default function Showcase() {
  return (
    <section className="bg-black py-[9.75rem]">
      <div className="container flex gap-10 justify-stretch ">
        {showcaseData.map((showcase) => (
          <NftCard key={showcase.title} {...showcase} />
        ))}
      </div>
    </section>
  );
}

const showcaseData = [
  {
    title: "Token",
    subTitle: "The Gateway token to the world of AI",
    featureImg: "/images/nft1.png",
    content:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    title: "Revenue",
    subTitle: "Driving income and growth through decentralization",
    featureImg: "/images/nft2.png",
    content:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
  },
  {
    title: "launchpad",
    subTitle: "Driving the future of AI Innovation",
    featureImg: "/images/nft3.png",
    content:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
  },
];
