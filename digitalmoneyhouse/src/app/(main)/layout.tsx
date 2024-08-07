import Footer from "@/components/footer/Footer";
import NavbarMain from "@/components/navbar/NavbarMain";
import { FC, PropsWithChildren} from "react";

const LayoutLogin: FC<PropsWithChildren> = ({children}) => {
  return (
    <main className="bg-light-black">
      <NavbarMain/>
      <div className="h-full">{children}</div>
      <Footer styleContainer="bg-total-primary" styleParagraph="text-total-black"/>
    </main>
  )
}
export default LayoutLogin;