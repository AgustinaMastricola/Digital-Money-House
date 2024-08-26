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
					`${session.user.token}`
				);
				const res = await cardsAPI.createCard(
					session.user.token,
					getAccount.id,
					data
				);
			} catch (error) {
				console.log("no se pudo cargar la tarjeta");
			}
		}
	};

	return (
		<div className="w-11/12 border border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl">
			<FormProvider {...methods}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center"
				>
					<div className="flex flex-col items-center w-full">
						<InputText
							type="number"
							fieldName={"number_id"}
							placeholder="Número de la tarjeta*"
							className="p-3 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg hide-arrow"
						/>
						<InputText
							type="text"
							fieldName={"first_last_name"}
							placeholder="Nombre y apellido*"
							className="p-3  border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg"
						/>
					</div>
					<div className="flex flex-col items-center w-full">
						<InputText
							type="number"
							fieldName={"cod"}
							placeholder="Código de seguridad*"
							className="p-3 md:w-6/12 lg:w-11/12 hide-arrow border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg"
						/>
						<InputText
							type="text"
							fieldName={"expiration_date"}
							placeholder="Fecha de vencimiento*"
							className="p-3 md:w-6/12 lg:w-11/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg"
						/>
					</div>
					<Button
						children={"Continuar"}
						className="p-2 text-xs lg:text-sm bg-total-primary border-total-primary w-full"
						onClick={() => handleSubmit(onSubmit)}
					/>
				</form>
			</FormProvider>
		</div>
	);
};

export default FormAddCard;
