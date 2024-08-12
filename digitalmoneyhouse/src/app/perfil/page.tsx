'use client'
import Footer from "@/components/common/footer/Footer";
import Menu from "@/components/common/menu/Menu";
import NavbarBase from "@/components/common/navbar/NavbarBase";
import AccountInfo from "@/components/perfil/AccountInfo";
import PaymentGestion from "@/components/perfil/PaymentGestion";
import UserInfo from "@/components/perfil/UserInfo";
import accountAPI from "@/services/account/account.service";
import userApi from "@/services/users/user.service";
import { UserType } from "@/types/users.types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
  const {data: session, status, update} = useSession();
  const [userData, setUserData] = useState<UserType>({
    "dni": 0,
    "email": '',
    "firstname": '',
    "lastname": '',
    "password": '',
    "phone": '' 
  })
  const getDataUser = async () => {
    if (session?.user?.token) {
      const getAccount = await accountAPI.getMyAccount(`${session.user.token}`)
      const res = await userApi.getUserData(`${session.user.token}`, getAccount.user_id);
      console.log(res)
      setUserData(res)
    }
  }
  useEffect(() => {
    getDataUser();
  }, [session]);

  return (
    <>
    <main>
      <NavbarBase bgContainer="bg-total-black" logo="LogoVerde.png" sessionStatus={status}/>
      <div className="md:w-full md:flex md:justify-between">
        <div className="hidden md:block w-4/12 lg:w-3/12 xl:w-2/12">
          <Menu/>
        </div>
        <div className="flex flex-col space-y-4 items-center py-5 md:w-8/12 lg:w-9/12 xl:w-10/12">
          <UserInfo user={userData}/>
          <PaymentGestion/>
          <AccountInfo/>
        </div>
      </div>
    </main>
    <Footer styleContainer="bg-total-black" styleParagraph="text-total-primary"/>
    </>
  )
}

export default page