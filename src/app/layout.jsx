import {
  Inter,
  Montserrat,
  Josefin_Sans,
  Ubuntu,
  Raleway,
  Corben,
} from "next/font/google";

import "./globals.css";
import "../styles/swiper.css";
import "../styles/drop-in.animation.css";
import "../styles/live-services.css";
import "../styles/calendar.css";

import "animate.css";

import { Footer, Navbar } from "../components";
import { AOSInit } from "../utils";

import { openGraphImage } from "./shared-metadata";

export const metadata = {
  metadataBase: new URL("https://www.glorytabernacleibadan.org"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
    description: "Enter to worship, Depart to serve.",
    url: "https://www.glorytabernacleibadan.org",
    siteName: "Glory Tabernacle Ministry",
    images: [
      {
        url: "https://www.glorytabernacleibadan.org/assets/images/og.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.glorytabernacleibadan.org/assets/images/og.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Glory Tabernacle Ministry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
  description: "Enter to worship, Depart to serve.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const corben = Corben({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],

  variable: "--font-corben",
});

// export const metadata = {
//   ...openGraphImage,
//   title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
//   description: "Enter to worship, Depart to serve.",
//   openGraph: {
//     title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
//     description: "Enter to worship, Depart to serve.",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png>"
        type="image/png"
        sizes="any"
      />
      <AOSInit />
      <body
        className={`${inter.variable} ${montserrat.variable} ${ubuntu.variable} ${josefin_sans.variable} ${raleway.variable} ${corben.variable} w-screen overflow-x-hidden`}>
        <Navbar />
          <div className="pt-[65px] md:pt-[70px]">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
