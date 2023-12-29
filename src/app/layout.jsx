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

// export const metadata = {
//   metadataBase: new URL("https://gt-website-nextjs.vercel.app"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//     },
//   },
//   openGraph: {
//     title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
//     description: "Enter to worship, Depart to serve.",
//     url: "https://gt-website-nextjs.vercel.app/",
//     siteName: "Glory Tabernacle Ministry",
//     images: [
//       {
//         url: "https://gt-website-nextjs.vercel.app/next.svg", // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://gt-website-nextjs.vercel.app/next.svg", // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   title: "Glory Tabernacle Ministry - Ojurin, Ibadan",
//   description: "Enter to worship, Depart to serve.",
// };

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
      <title>Glory Tabernacle Ministry - Ojurin, Ibadan</title>
      <meta name="description" content="Enter to worship, Depart to serve." />
      <link rel="canonical" href="https://gt-website-nextjs.vercel.app/" />
      <link
        rel="alternate"
        hrefLang="en-US"
        href="https://gt-website-nextjs.vercel.app/en-US"
      />
      <meta
        property="og:title"
        content="Glory Tabernacle Ministry - Ojurin, Ibadan"
      />
      <meta
        property="og:description"
        content="Enter to worship, Depart to serve."
      />
      <meta property="og:url" content="https://gt-website-nextjs.vercel.app/" />
      <meta property="og:site_name" content="Glory Tabernacle Ministry" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="https://gt-website-nextjs.vercel.app/next.svg"
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta
        property="og:image"
        content="https://gt-website-nextjs.vercel.app/next.svg"
      />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="1600" />
      <meta property="og:image:alt" content="My custom alt" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Glory Tabernacle Ministry - Ojurin, Ibadan"
      />
      <meta
        name="twitter:description"
        content="Enter to worship, Depart to serve."
      />
      <meta
        name="twitter:image"
        content="https://gt-website-nextjs.vercel.app/next.svg"
      />
      <meta name="twitter:image:width" content="800" />
      <meta name="twitter:image:height" content="600" />
      <meta
        name="twitter:image"
        content="https://gt-website-nextjs.vercel.app/next.svg"
      />
      <meta name="twitter:image:width" content="1800" />
      <meta name="twitter:image:height" content="1600" />
      <meta name="twitter:image:alt" content="My custom alt" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
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
