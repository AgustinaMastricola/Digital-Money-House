'use client'
import Footer from "@/components/common/footer/Footer";
import HomeAnauthenticated from "@/components/home/anauthenticated/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/authenticated/HomeAuthenticated";
import NavbarBase from "@/components/common/navbar/NavbarBase";
import { useSession } from "next-auth/react";
import Header from "@/components/common/navbar/Header";
const links = [
  {href:"/login", name:"Ingresar", outline: true},
  {href:"/signup", name: "Crear cuenta"},
] 
export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
      <Header logoSrc={"LogoVerde.png"} logoClassName={"p-2"} headerClassName="bg-total-black" links={links}/>
      <main className="h-full">
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

