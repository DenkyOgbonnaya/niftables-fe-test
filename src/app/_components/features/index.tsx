import FeatureCard from "../featureCard";
import Footer from "../footer";
import NftCard from "../nftCard";

export default function Features() {
  return (
    <section className="flex flex-col gap-20 h-fit relative after:content-[''] after:absolute after:top-0 after:right-0  after:bottom-0 after:left-0 after:bg-[rgba(0,0,0,0.8)]">
      <video
        className="w-full h-full bg-cover object-cover absolute left-0 right-0 top-0 bottom-0 -z-[1] "
        autoPlay
        loop
        preload="auto"
        muted
        playsInline
      >
        <source src="/videos/featuresVideo.mp4" type="video/mp4" />
      </video>
      <div className="container z-10 flex flex-col gap-[1.25rem] justify-stretch ">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}

       
      </div>
      <Footer />
    </section>
  );
}

const features = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    subTitle: "The Gateway token to the world of AI",
    featureImg: "/images/feature.png",
    content:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    title: "AI Tools and Market",
    subTitle: "Driving income and growth through decentralization",
    featureImg: "/images/feature4.png",
    content:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    title: "AI, Crypto, and NFT Market",
    subTitle: "Driving the future of AI Innovation",
    featureImg: "/images/feature5.png",
    content:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];
