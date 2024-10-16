import React, { useEffect, useState } from "react";
import ListCards from "../tarjetas/ListCards";
import Container from "../common/containers/Container";
import Button from "../common/buttons/Button";
import clsx from "clsx";
import transactionsAPI from "@/services/transactions/transactions.service";
import { useUserContext } from "@/context/UserContextProvider";
import { useAccountContext } from "@/context/AccountContextProvider";
import ConfirmMessage from "../common/messages/ConfirmMessage";
import DetailPayment from "./DetailPayment";
import cardsAPI from "@/services/cards/cards.service";

type PayMethodProps = {
	name: string;
	invoiceValue: string;
};

const PayMethod = ({ name, invoiceValue }: PayMethodProps) => {
	const [cardId, setCardId] = useState<number | null>(null);
	const [amount, setAmount] = useState<number>(0);
	const { token } = useUserContext();
	const { id } = useAccountContext();
	const [succesMessage, setSuccesMessage] = useState<string>("");
	const [payDetail, setPayDetail] = useState<any>();
  const [lastNumbers, setLastNumbers] = useState<string>("");

	const convertToARS = (usd: number) => {
		setAmount(usd * 1350);
	};

	const handleGetCardSelected = async(card_id: number) => {
    const res = await cardsAPI.getCardByCardID(token, id, card_id)
    const card_number = res.number_id.toString();
    const lasFoutNumbers = card_number.slice(-4);
    setLastNumbers(lasFoutNumbers);
		setCardId(card_id);
	};

	const handleSubmitPayment = () => {
		const createPayment = async () => {
			const res = await transactionsAPI
				.createTransaction(token, id, {
					amount: -amount,
					dated: new Date().toISOString(),
					description: `Pago de ${name}`,
				})
				.then((res) => {
					setSuccesMessage("Ya cargamos el dinero en tu cuenta");
					setPayDetail(res);
				})
				.catch((err) => {
					console.log(err);
					setPayDetail(undefined);
				});
			console.log(res);
		};
		if (token) {
			createPayment();
		}
	};

	useEffect(() => {
		convertToARS(parseInt(invoiceValue));
	}, []);

	return (
		<>
			{succesMessage ? (
				<>
					<ConfirmMessage text={"Ya realizamos tu pago"} />
					<DetailPayment detail={payDetail} lastCardNumbers={lastNumbers}/>
				</>
			) : (
				<>
					<Container
						className={
							"bg-total-black w-11/12 md:w-10/12 mt-4 md:mt-6 flex flex-col py-4 px-5 mb-4"
						}
					>
						<div className="flex flex-col items-end">
							<p className="text-total-white text-sm underline">
								Ver detalles del pago
							</p>
						</div>
						<div>
							<h2 className="text-total-primary font-bold text-xl my-3">
								{name}
							</h2>
							<hr className="text-medium-gray" />
							<div className="text-total-white font-bold w-10/12 flex items-center justify-between my-3">
								<span>Total a pagar:</span>
								<span>$ {amount}</span>
							</div>
						</div>
					</Container>
					<ListCards
						className="w-11/12 md:w-10/12 px-4 py-2"
						canDelete={false}
						handleGetCardSelected={handleGetCardSelected}
					/>
					<div className="flex flex-col items-end w-11/12 md:w-10/12 mt-3">
						<Button
							title={"Pagar"}
							className={clsx("px-10 py-2 border-none", {
								"bg-total-primary border-total-primary ": cardId,
								"bg-light-gray border-ligth-gray cursor-not-allowed": !cardId,
							})}
							disabled={!cardId}
							onClick={handleSubmitPayment}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default PayMethod;
