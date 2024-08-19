'use client'
import Footer from "@/components/common/footer/Footer";
import HomeAnauthenticated from "@/components/home/anauthenticated/HomeAnauthenticated";
import HomeAuthenticated from "@/components/home/authenticated/HomeAuthenticated";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
        {!session && 
          <HomeAnauthenticated/>
        }
        {status === 'authenticated' ?
          <HomeAuthenticated/>
          :
          status === 'loading' &&
          <></>
        }
      <Footer styleContainer="bg-total-black" styleParagraph="text-total-primary"/>
    </>
  );
}

