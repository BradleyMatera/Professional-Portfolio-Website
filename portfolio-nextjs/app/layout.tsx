import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bradley Matera | Web Developer Portfolio",
  description: "Professional portfolio of Bradley Matera - Army veteran and web developer passionate about creating responsive, accessible web applications.",
  keywords: ["Bradley Matera", "Web Developer", "Full Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Bradley Matera" }],
  creator: "Bradley Matera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bradleymatera.github.io/Professional-Portfolio-Website/",
    title: "Bradley Matera | Web Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and skills",
    siteName: "Bradley Matera Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
