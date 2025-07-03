import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/core/Navbar";
import "./globals.css";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exovia Exports",
  description:
    "Exovia Exports is a retail company that provides fresh frozen foods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
