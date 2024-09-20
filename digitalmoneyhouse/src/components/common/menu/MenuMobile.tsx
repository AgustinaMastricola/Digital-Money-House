import Menu from "./Menu"
import { useUserContext } from "@/context/UserContextProvider";

type MenuMobileProps= {
	onClickLink?: () => void 
}

const MenuMobile = ({ onClickLink }: MenuMobileProps) => {
	const {firstname,lastname} = useUserContext()

	return (
		<div className="bg-total-primary z-10 h-screen absolute right-0 top-0 w-3/5 md:hidden">
			<div className="bg-footer-gray py-14">
				<p className="text-total-primary font-bold text-2xl pl-10">
					Hola, <br /> {firstname} {lastname}
				</p>
			</div>
			<Menu onClickLink={onClickLink}/>
		</div>
	);
};

export default MenuMobile