'use client'
import Footer from "@/components/common/footer/Footer";
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