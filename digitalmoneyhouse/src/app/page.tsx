'use client'
import Footer from "@/components/footer/Footer";
import HomeAnauthenticated from "@/components/home/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/HomeAuthenticated";
import MenuMobile from "@/components/menu/MenuMobile";
import Navbar from "@/components/navbar/Navbar";
import NavbarDashboard from "@/components/navbar/NavbarDashboard";
import { useSession } from "next-auth/react";

export default function Home() {  
  const { data: session, status } = useSession()
  return (<>
  
  <div className="h-full md-w-full">
  {status === 'authenticated'?
    <>
      <NavbarDashboard firstname={"Agustina"} lastname={"Mastricola"}/>
        <HomeAuthenticated/>
      
    </>
  :
    <>
      <Navbar/>
        <HomeAnauthenticated/>
      
    </>
  }
  </div>
  <Footer styleContainer="bg-total-black" styleParagraph="text-total-primary"/>
  </>
  );
}

