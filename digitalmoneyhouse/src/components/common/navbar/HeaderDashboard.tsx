import { useState } from "react";
import MenuMobile from "../menu/MenuMobile";
import LogoBrand from "../icons/LogoBrand";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import UserName from "./UserName";

const HeaderDashboard = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};
	const handleCloseMenu = () => {
		setShowMenu(false);
};

	return (
		<>
			<header className="flex items-center justify-between bg-total-black md:hidden">
				<LogoBrand href={"/dashboard"} className="fill-total-primary"/>
				<div className="flex space-x-4 items-center pr-3">
					<UserName/>
					<button className="block md:hidden" onClick={handleClickMenu}>
						<MenuIcon/>
					</button>
				</div>
			</header>
      {showMenu && (
				<div className="md:hidden">
					<button
						className="absolute right-5 top-6 z-30"
						onClick={handleClickMenu}
					>
						<CloseIcon className={"fill-total-primary"}/>
					</button>
					<MenuMobile onClickLink={handleCloseMenu}/>
				</div>
			)}

			<header className="md:flex items-center justify-between bg-total-black hidden">
				<LogoBrand href={"/dashboard"} className="fill-total-primary"/>
				<UserName/>
			</header>
		</>
	);
};

export default HeaderDashboard;
