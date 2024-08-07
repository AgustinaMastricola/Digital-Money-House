'use client'
import Footer from "@/components/footer/Footer";
import HomeAnauthenticated from "@/components/home/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/HomeAuthenticated";
import NavbarBase from "@/components/navbar/NavbarBase";
import { useSession } from "next-auth/react";

export default function Home() {  
  const { data: session, status } = useSession()

  return (
    <>
    <NavbarBase bgContainer="bg-total-black" logo="LogoVerde.png" sessionStatus={status}/>
    <div className="h-full md-w-full">
      {status === 'authenticated' || status === 'loading' ?
        <HomeAuthenticated/>
      :
        <HomeAnauthenticated/>
      }
    </div>
    <Footer styleContainer="bg-total-black" styleParagraph="text-total-primary"/>
    </>
  );
}

