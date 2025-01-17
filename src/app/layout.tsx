import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tree Solutions Property Management",
  description: "Manage your properties with our easy-to-use platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Providers>
          <div className="grid grid-cols-[30%_70%]">
            <Sidebar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
