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
  metadataBase: new URL("https://gt-website-nextjs.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
    description: "Enter to worship, Depart to serve.",
    url: "https://gt-website-nextjs.vercel.app/",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
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
      <meta
        property="og:image"
        content="https://gt-website-nextjs.vercel.app/assets/images/welcome.png"
      />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />

      <meta name="twitter:image" content="<generated>" />
      <meta name="twitter:image:type" content="<generated>" />
      <meta name="twitter:image:width" content="<generated>" />
      <meta name="twitter:image:height" content="<generated>" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png>"
        type="image/png"
        sizes="<generated>"
      />
      <AOSInit />
      <body
        className={`${inter.variable} ${montserrat.variable} ${ubuntu.variable} ${josefin_sans.variable} ${raleway.variable} ${corben.variable} w-screen overflow-x-hidden`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
