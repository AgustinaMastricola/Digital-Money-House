import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Home from "./page";

const openSans = Open_Sans({subsets: ["latin"], style: ['normal']});

export const metadata: Metadata = {
  title: "Digital Money House",
  description: "Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col `${openSans.className}`">
        <Navbar/>
        <Home/>
        <Footer/>
      </body>
    </html>
  );
}
