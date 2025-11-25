import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { SectionHero } from "./pages/section-hero";
import { PageWorks } from "./pages/page-work";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { EndPage } from "./pages/end-page";


const mbGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/MBGrotesk-Normal.ttf",  // ✅ Caminho completo
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MBGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MBGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MBGrotesk-NormalItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-mbgrotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mbGrotesk.variable}  bg-background`}
      >
       <SectionHero/>
       <PageWorks/>
       <AboutPage/>
       <ContactPage/>
       <EndPage/>
      </body>
    </html>
  );
}


