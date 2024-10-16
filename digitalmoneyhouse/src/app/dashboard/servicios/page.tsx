"use client";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ListServices from "@/components/services/ListServices";
import { useState } from "react";

const ServicesPage = () => {
	const [valueInput, setValueInput] = useState<string | null>(null);

	const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		console.log(value);
		if (value === "") {
			setValueInput(null);
			return;
		}
		setValueInput(value);
		console.log(value);
	};
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2 ">
				<ArrowRightIcon className="#000000" />
				<span className="underline">Pagar servicios</span>
			</div>

			<div className="w-11/12 md:w-10/12 md:mt-6">
				<div className=" flex items-center relative">
					<SearchIcon className="h-min absolute left-2 " />
					<input
						onChange={handleInputSearchChange}
						placeholder="Buscá entre más de 5.000 empresas"
						className="p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1 text-sm md:text-base bg-total-white shadow-lg focus:outline-none"
					/>
				</div>

				<ListServices valueInputSearch={valueInput} />
			</div>
		</>
	);
};

export default ServicesPage;
