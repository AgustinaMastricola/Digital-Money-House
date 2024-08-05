'use client'
import CardInfoHome from "@/components/cards/CardInfoHome";
import Footer from "@/components/footer/Footer";
import HomeAnauthenticated from "@/components/home/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/HomeAuthenticated";
import Navbar from "@/components/navbar/Navbar";
import NavbarDashboard from "@/components/navbar/NavbarDashboard";
import { useSession } from "next-auth/react";

export default function Home() {  
  const { data: session, status } = useSession()
  return (
    <>
    {status === 'authenticated'?
      <>
        <NavbarDashboard firstname={"Agustina"} lastname={"Mastricola"}/>
          <HomeAuthenticated/>
        <Footer/>
      </>
    :
      <>
        <Navbar/>
          <HomeAnauthenticated/>
        <Footer/>
      </>
    }
    </>
  );
}

