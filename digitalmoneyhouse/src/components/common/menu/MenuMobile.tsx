import Menu from "./Menu"

type MenuMobileProps= {
  firstname:string,
  lastname: string,
}

const MenuMobile = ({ firstname, lastname }: MenuMobileProps) => {


	return (
		<div className="bg-total-primary z-10 h-screen absolute right-0 top-0 w-2/3 md:w-5/12">
			<div className="bg-footer-gray py-14">
				<p className="text-total-primary font-bold text-2xl pl-10">
					Hola, <br /> {firstname} {lastname}
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default MenuMobile