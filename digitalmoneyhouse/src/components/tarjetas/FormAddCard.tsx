"use client";
import { addCardPaySchema } from "@/lib/yup";
import accountAPI from "@/services/account/account.service";
import cardsAPI from "@/services/cards/cards.service";
import { NewCardPay } from "@/types/card.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../common/inputs/inputText";
import Button from "../common/buttons/Button";
import Cards from "react-credit-cards-2";
import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import clsx from "clsx";

const FormAddCard = () => {
	const { data: session, status } = useSession();

	const methods = useForm<NewCardPay>({
		resolver: yupResolver(addCardPaySchema),
	});
	const {
		handleSubmit,
		reset,
		formState: { errors },
	} = methods;

	const onSubmit = async (data: NewCardPay) => {
		if (session?.user?.token) {
			try {
				const getAccount = await accountAPI.getMyAccount(
					`${session?.user?.token}`
				);
				const res = await cardsAPI.createCard(
					session?.user?.token,
					getAccount.id,
					data
				);
			} catch (error) {
				console.log("no se pudo cargar la tarjeta");
			}
		}
	};

	const [cardData, setCardData] = useState({
		cod: "",
		expiration_date: "",
		first_last_name: "NOMBRE APELLIDO",
		number_id: "",
		focus: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardData({
			...cardData,
			[e.target.name]: e.target.value,
		});
	};
	const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setCardData({
			...cardData,
			focus: e.target.name,
		});
	};

	return (
		<div className="w-11/12 md:mt-4 mb-4 h-full xl:w-10/12 pt-8 md:w-10/12 border border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl">
			<Cards
				cvc={cardData.cod}
				expiry={cardData.expiration_date}
				name={cardData.first_last_name}
				number={cardData.number_id}
			/>
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="
						grid grid-cols-1 grid-rows-5 items-center justify-center gap-y-4 p-4
						md:grid-cols-2 md:grid-rows-4 md:gap-4 
						xl:grid-cols-4"
				>
					<InputText
						type="number"
						fieldName={"number_id"}
						placeholder="Número de la tarjeta*"
						className="p-3 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg hide-arrow
						md:col-span-2
						lg:col-span-1
						xl:col-start-2"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
					<InputText
						type="text"
						fieldName={"first_last_name"}
						placeholder="Nombre y apellido*"
						className="p-3 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
						md:col-span-2
						lg:col-span-1
						xl:col-start-3"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
					<InputText
						type="number"
						fieldName={"cod"}
						placeholder="Código de seguridad*"
						className="p-3 hide-arrow border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
						xl:col-start-2"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
					<InputText
						type="text"
						fieldName={"expiration_date"}
						placeholder="Fecha de vencimiento*"
						className="p-3 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
						"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
					<Button
						children={"Continuar"}
						className={clsx("p-3 text-xs lg:text-sm md:col-span-2 lg:col-span-1 lg:col-start-2 xl:col-start-3", {
							"bg-light-gray border-light-gray ":
								!cardData.cod ||
								!cardData.expiration_date ||
								!cardData.first_last_name ||
								!cardData.number_id,
							"bg-total-primary border-total-primary":
								cardData.cod &&
								cardData.expiration_date &&
								cardData.first_last_name &&
								cardData.number_id,
						})}
						onClick={() => handleSubmit(onSubmit)}
					/>
				</form>
			</FormProvider>
		</div>
	);
};

export default FormAddCard;
