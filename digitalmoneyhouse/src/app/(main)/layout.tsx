'use client'
import Footer from "@/components/footer/Footer";
import NavbarBase from "@/components/navbar/NavbarBase";
import { FC, PropsWithChildren} from "react";

const LayoutLogin: FC<PropsWithChildren> = ({children}) => {
  return (
    <main className="bg-light-black">
      <NavbarBase bgContainer={"bg-total-primary"} logo={"LogoNegro.png"} sessionStatus="anauthenticated" />
      <div className="h-full">{children}</div>
      <Footer styleContainer="bg-total-primary" styleParagraph="text-total-black"/>
    </main>
  )
}
export default LayoutLogin;