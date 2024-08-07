import FooterLogin from "@/components/footer/FooterLogin";
import NavbarMain from "@/components/navbar/NavbarMain";
import { FC, PropsWithChildren} from "react";

const LayoutLogin: FC<PropsWithChildren> = ({children}) => {
  return (
    <main className="bg-light-black">
      <NavbarMain/>
      <div className="h-full">{children}</div>
      <FooterLogin/>
    </main>
  )
}
export default LayoutLogin;