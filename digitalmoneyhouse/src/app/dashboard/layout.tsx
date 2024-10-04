"use client";
import Footer from "@/components/common/footer/Footer";
import Menu from "@/components/common/menu/Menu";
import HeaderDashboard from "@/components/common/navbar/HeaderDashboard";
import AccountProvider from "@/context/AccountContextProvider";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import UserProvider from "@/context/UserContextProvider";
import { FC, PropsWithChildren } from "react";

const LayoutDashboard: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<SessionAuthProvider>
				<AccountProvider>
					<UserProvider>
						<HeaderDashboard />
						<main>
							<div className="md:w-full md:flex md:justify-between h-full">
								<div className="hidden md:block w-4/12 lg:w-3/12 xl:w-2/12">
									<Menu />
								</div>
								<div className="h-full w-full flex flex-col items-center">
									{children}
								</div>
							</div>
						</main>
						<Footer
							styleContainer="bg-total-black"
							styleParagraph="text-total-primary"
						/>
					</UserProvider>
				</AccountProvider>
			</SessionAuthProvider>
		</>
	);
};
export default LayoutDashboard;
