import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Power Plus Technology | Electrical Engineering & Power Solutions",
    template: "%s | Power Plus Technology",
  },
  description:
    "Power Plus Technology is an electrical engineering company delivering reliable power solutions, electrical installations, maintenance, and energy systems for commercial and industrial projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#050505] selection:bg-[#00E5FF]/30`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
