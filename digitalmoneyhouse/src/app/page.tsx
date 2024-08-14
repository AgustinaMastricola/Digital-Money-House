'use client'
import Footer from "@/components/common/footer/Footer";
import HomeAnauthenticated from "@/components/home/anauthenticated/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/authenticated/HomeAuthenticated";
import NavbarBase from "@/components/common/navbar/NavbarBase";
import { useSession } from "next-auth/react";

export default function Home() {  
  const { data: session, status } = useSession()

  return (
    <>
      <main className="h-full">
      <NavbarBase bgContainer="bg-total-black" logo="LogoVerde.png" sessionStatus={status}/>
        {status === 'authenticated'?
          <HomeAuthenticated/>
        :
        status === 'loading'?
          <></>
        :  
          <HomeAnauthenticated/>
        }
      </main>
      <Footer styleContainer="bg-total-black" styleParagraph="text-total-primary"/>
    </>
  );
}

