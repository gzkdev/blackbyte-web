import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Menu } from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Godswill Ezihe",
  description: "Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Menu /> */}
      </body>
    </html>
  );
}
