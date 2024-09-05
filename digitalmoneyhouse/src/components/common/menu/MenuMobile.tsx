import Menu from "./Menu"

type MenuMobileProps= {
  firstname:string,
  lastname: string,
	onClickLink?: () => void 
}

const MenuMobile = ({ firstname, lastname, onClickLink }: MenuMobileProps) => {
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