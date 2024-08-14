'use client'
import Footer from "@/components/common/footer/Footer";
import NavbarBase from "@/components/common/navbar/NavbarBase";
import { FC, PropsWithChildren} from "react";

const LayoutLogin: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <NavbarBase bgContainer={"bg-total-primary"} logo={"LogoNegro.png"} sessionStatus="anauthenticated" />
      {children}
      <Footer styleContainer="bg-total-primary" styleParagraph="text-total-black"/>
    </>
  )
}
export default LayoutLogin;