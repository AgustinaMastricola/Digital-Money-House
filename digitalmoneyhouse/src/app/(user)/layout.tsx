'use client'
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/navbar/Header";
import NavbarBase from "@/components/common/navbar/NavbarBase";
import { FC, PropsWithChildren} from "react";


const LayoutLogin: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
      <Footer styleContainer="bg-total-primary" styleParagraph="text-total-black"/>
    </>
  )
}
export default LayoutLogin;