import FooterLogin from "@/components/footer/FooterLogin";
import NavbarMain from "@/components/navbar/NavbarMain";
import { FC, PropsWithChildren} from "react";

const LayoutLogin: FC<PropsWithChildren> = ({children}) => {
  return <>
    <NavbarMain/>
    <div>{children}</div>
    <FooterLogin/>
  </>
}
export default LayoutLogin;