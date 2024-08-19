"use client";
import Menu from "@/components/common/menu/Menu";
import HeaderDashboard from "@/components/common/navbar/HeaderDashboard";
import { AccountData } from "@/types/account.types";
import { useSession } from "next-auth/react";
import { useState } from "react";

const DashboardPage = () => {
	const { data: session, status } = useSession();
	const [userAccount, setUserAccount] = useState<AccountData>();

	const getAccount = async () => {
		const res = await fetch(
			`https://digitalmoney.digitalhouse.com/api/account`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${session?.user?.token}`,
				},
			}
		);
		const data = await res.json();
		setUserAccount(data);
		console.log(data);
	};

	return (
		<>
			<HeaderDashboard/>
			<main>
				<div className="md:w-full md:flex md:justify-between">
					<div className="hidden md:block w-4/12 lg:w-3/12 xl:w-2/12">
						<Menu />
					</div>
					<div className="flex flex-col space-y-4 items-center py-5 md:w-8/12 lg:w-9/12 xl:w-10/12">
						DASHBOARD
						<pre>
							<code>{JSON.stringify(session, null, 3)}</code>
							<code>{JSON.stringify(userAccount, null, 3)}</code>
						</pre>
						<p>{userAccount?.id}</p>
						<button onClick={getAccount}>ver cuenta</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default DashboardPage;
