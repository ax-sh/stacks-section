import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Providers } from "./providers";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stacks Section",
  description: "Group the stacks you have used",
};

// app/layout.tsx

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
