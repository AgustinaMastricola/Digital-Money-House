'use client'
import NavbarBase from "@/components/common/navbar/NavbarBase";
import AccountInfo from "@/components/perfil/AccountInfo";
import PaymentGestion from "@/components/perfil/PaymentGestion";
import UserInfo from "@/components/perfil/UserInfo";
import { useSession } from "next-auth/react";

const page = () => {
  const {data: session, status, update} = useSession();
  return (
    <>
      <NavbarBase bgContainer="bg-total-black" logo="LogoVerde.png" sessionStatus={status}/>
      <div>
        <UserInfo/>
        <PaymentGestion/>
        <AccountInfo/>
      </div>

    </>
  )
}

export default page