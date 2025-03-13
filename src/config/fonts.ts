import localFont from "next/font/local";

export const pingAR = localFont({
  src: [
    {
      path: "../../public/fonts/ping-ar-lt/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ping-ar-lt/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ping-ar-lt/bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pingar",
});
