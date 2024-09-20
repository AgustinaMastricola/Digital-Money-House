"use client";
import { addCardPaySchema } from "@/lib/yup";
import cardsAPI from "@/services/cards/cards.service";
import { NewCardPay } from "@/types/card.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../common/inputs/inputText";
import Button from "../common/buttons/Button";
import Cards from "react-credit-cards-2";
import { useCallback, useEffect, useMemo, useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import clsx from "clsx";
import SuccessMesage from "../signup/SuccessMesage";
import { useUserContext } from "@/context/UserContextProvider";
import { useAccountContext } from "@/context/AccountContextProvider";
import Container from "../common/containers/Container";

const FormAddCard = () => {
	const {token} = useUserContext();
	const {id} = useAccountContext()
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [lengthCardList, setLengthCardList] = useState(0);

	const CardList = useCallback(async () => {
    if(token && id) {
		try {
			const res = await cardsAPI.getCardsByAccountID(token, id);
			setLengthCardList(res.length);
		} catch (error) {
			console.error("Error fetching cards:", error);
		}}
	}, [token, id]);

	useEffect(() => {
		CardList();
	}, [id, CardList])
	

	const methods = useForm<NewCardPay>({
		resolver: yupResolver(addCardPaySchema),
	});
	const {
		handleSubmit,
		reset,
		formState: { errors },
	} = methods;

	const onSubmit = async (data: NewCardPay) => {
		if (token && id) {
			try {
				const res = await cardsAPI.createCard(
					token,
					id,
					data
				);
				reset();
				setShowSuccessMessage(true);
				CardList()
			} catch (error) {
				console.log("no se pudo cargar la tarjeta");
			}
		}
	};

	const [cardData, setCardData] = useState({
		cod: "",
		expiration_date: "MM/AA",
		first_last_name: "NOMBRE DEL TITULAR",
		number_id: "**** **** **** ****",
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

	const memoizedLengthCardList = useMemo(() => lengthCardList, [lengthCardList]);

	return (
		<>
			{showSuccessMessage && (
				<SuccessMesage
					style="visible"
					textH2={"Tarjeta agregada"}
					textP={"Ya puede ver y operar con esta tarjeta"}
					buttonText={"Mis tarjetas"}
					buttonHREF={"/dashboard/tarjetas/"} 
					styleH2={"text-total-black"} 
					styleP={"text-total-black"}				
				/>
			)}				
			<div className={clsx(
				"w-full md:mt-4 mb-4 xl:w-10/12 p-4 md:w-10/12 border border-total-primary border-opacity-15 rounded-lg border-1 bg-total-primary drop-shadow-2xl",
				{
					hidden: memoizedLengthCardList < 10 || memoizedLengthCardList === null || memoizedLengthCardList === undefined,
					block: memoizedLengthCardList >= 10,
				}
				)}>
				<p>El límite máximo de tarjetas asociadas a una cuenta es de 10. <br/> Para poder cargar una tarjeta nueva, deberás eliminar alguna de la lista.</p>
			</div>
			<Container
				className={clsx(
					"md:mt-6 w-11/12 md:w-10/12 border border-total-gray border-opacity-15 border-1 bg-total-white drop-shadow-2xl",
					{
						hidden: showSuccessMessage || memoizedLengthCardList >= 10,
						block: !showSuccessMessage || memoizedLengthCardList < 10,
					}
				)}
			>
				<div className="custom-card-size">
					<Cards
						cvc={cardData.cod}
						expiry={cardData.expiration_date}
						name={cardData.first_last_name}
						number={cardData.number_id} 
						
						/>
				</div>
				<FormProvider {...methods}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-4 items-center justify-center md:p-4 flex flex-col space-y-4 
						lg:flex-row lg:space-y-0 lg:space-x-16 lg:items-start"
					>
						<div className="w-full flex flex-col space-y-4 lg:items-end">
							<InputText
								type="number"
								fieldName={"number_id"}
								placeholder="Número de la tarjeta*"
								className="p-3 w-full lg:w-10/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg hide-arrow"
								onChange={handleInputChange}
								onFocus={handleInputFocus}
							/>
							<InputText
								type="text"
								fieldName={"first_last_name"}
								placeholder="Nombre y apellido*"
								className="p-3 w-full lg:w-10/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg"
								onChange={handleInputChange}
								onFocus={handleInputFocus}
							/>
						</div>
						<div className="w-full flex-col space-y-4 items-start lg:items-start">
							<div className="flex flex-col space-y-4 md:flex-row-reverse md:space-y-0 lg:flex-col-reverse lg:space-y-0">
								<InputText
									type="number"
									fieldName={"cod"}
									placeholder="Código de seguridad*"
									className="p-3 w-full lg:w-10/12 hide-arrow border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
									md:ml-2
									lg:ml-0 lg:mt-4"
									onChange={handleInputChange}
									onFocus={handleInputFocus}
								/>
								<InputText
									type="text"
									fieldName={"expiration_date"}
									placeholder="Fecha de vencimiento*"
									className="p-3 w-full lg:w-10/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
									md:mr-2
									lg:mr-0 lg:mb-2"
									onChange={handleInputChange}
									onFocus={handleInputFocus}
								/>
							</div>
							<div className="w-full lg:w-10/12">
								<Button
									title={"Continuar"}
									className={clsx(
										"p-3 w-full rounded-lg text-xs lg:text-sm",
										{
											"bg-light-gray border-light-gray cursor-not-allowed":
												!cardData.cod ||
												!cardData.expiration_date ||
												!cardData.first_last_name ||
												!cardData.number_id,
											"bg-total-primary border-total-primary":
												cardData.cod &&
												cardData.expiration_date &&
												cardData.first_last_name &&
												cardData.number_id,
										}
									)}
									onClick={() => handleSubmit(onSubmit)}
								/>
							</div>
						</div>						
					</form>
				</FormProvider>
			</Container>
		</>
	);
};

export default FormAddCard;
