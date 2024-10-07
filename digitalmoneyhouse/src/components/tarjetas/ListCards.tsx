import ElipseIcon from "@/components/common/icons/ElipseIcon";
import Button from "../common/buttons/Button";
import cardsAPI from "@/services/cards/cards.service";
import { useUserContext } from "@/context/UserContextProvider";
import { memo, useEffect, useState } from "react";
import { CardType } from "@/types/card.types";
import clsx from "clsx";
import { useAccountContext } from "@/context/AccountContextProvider";
import Container from "../common/containers/Container";
type ListCardsProps = {
	className?: string;
	canDelete?: boolean;
};
const ListCards = ({ className, canDelete }: ListCardsProps) => {
	const { token } = useUserContext();
	const { id } = useAccountContext();
	const [cardsList, setCardsList] = useState<CardType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await cardsAPI.getCardsByAccountID(token, id);
			setCardsList(data);
		};
		fetchData();
	}, [token, id]);

	const deleteCard = async (card_id: number) => {
		const newCardsList = cardsList.filter((card) => card.id !== card_id);
		setCardsList(newCardsList);
		await cardsAPI.deleteCard(token, id, card_id);
	};

	return (
		<Container
			className={clsx(
				"border border-total-gray border-opacity-15 bg-total-white drop-shadow-2xl",
				className
			)}
		>
			<h1 className="text-base my-2">Tus tarjetas</h1>
			<div className="w-full flex flex-col-reverse items-center">
				{cardsList.length > 0 ? (
					cardsList.map((item, index) => (
						<div key={`card-${index}`} className="w-full">
							<hr className="text-medium-gray opacity-30" />
							<div className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
								<ElipseIcon className={"fill-total-primary w-5 h-5"} />
								<p className="col-span-6 ml-2">
									Terminada en{" "}
									{item.number_id.toLocaleString().replace(/\D/g, "").slice(-4)}
								</p>
								{canDelete && (
									<div className="flex flex-col col-span-5 items-start col-start-9 md:col-start-11 lg:col-start-11 xl:col-start-12">
										<Button
											title={"Eliminar"}
											className="border-none"
											onClick={() => deleteCard(item.id)}
										/>
									</div>
								)}
							</div>
						</div>
					))
				) : (
					<p
						className={clsx("py-6", {
							hidden: cardsList === undefined || cardsList === null,
						})}
					>
						No tienes tarjetas agregadas en tu cuenta
					</p>
				)}
			</div>
		</Container>
	);
};

export default memo(ListCards);
