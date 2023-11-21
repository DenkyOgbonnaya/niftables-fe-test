import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
    },

    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
    },

    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "800",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const monumentExtended = localFont({
  src: [
    {
      path: "../../public/fonts/MonumentExtended-Regular.otf",
      weight: "400",
    },

    {
      path: "../../public/fonts/MonumentExtended-Ultrabold.otf",
      weight: "800",
    },
  ],
  display: "swap",
  variable: "--font-monument-extend",
});
