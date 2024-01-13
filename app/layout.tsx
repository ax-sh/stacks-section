import Nav from "@/components/nav";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import { Providers } from "./providers";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stacks Section",
  description: "Group the stacks you have used",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
