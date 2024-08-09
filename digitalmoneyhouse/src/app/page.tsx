'use client'
import Footer from "@/components/footer/Footer";
import HomeAnauthenticated from "@/components/home/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/HomeAuthenticated";
import NavbarBase from "@/components/navbar/NavbarBase";
import { useSession } from "next-auth/react";

export default function Home() {  
  const { data: session, status } = useSession()

  return (
    <main>
    <NavbarBase bgContainer="bg-total-black" logo="LogoVerde.png" sessionStatus={status}/>
      {status === 'authenticated'?
        <HomeAuthenticated/>
      :
      status === 'loading'?
        <></>
      :  
        <HomeAnauthenticated/>
      }
    <Footer styleContainer="bg-total-black" styleParagraph="text-total-primary"/>
    </main>
  );
}

