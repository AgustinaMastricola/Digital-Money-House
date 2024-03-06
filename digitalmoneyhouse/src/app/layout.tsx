import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const roboto = Roboto({subsets: ["latin"], style: ['normal'], weight: ["100"]});

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
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
