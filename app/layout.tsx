import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import "./globals.css";

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
					<nav className={"h-20"}></nav>
					{children}
				</Providers>
			</body>
		</html>
	);
}
