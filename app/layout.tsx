import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/registry";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloombyte Hub",
  description: "Bloombyte Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
