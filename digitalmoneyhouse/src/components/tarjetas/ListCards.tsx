import ElipseIcon from "@/components/common/icons/ElipseIcon";
import Button from "../common/buttons/Button";
import cardsAPI from "@/services/cards/cards.service";
import { useUserContext } from "@/context/UserContextProvider";
import { useEffect, useState } from "react";
import { CardType } from "@/types/card.types";
import clsx from "clsx";
import { useAccountContext } from "@/context/AccountContextProvider";
import Container from "../common/containers/Container";
import InputRadio from "../common/inputs/InputRadio";

type ListCardsProps = {
	className?: string;
	canDelete?: boolean;
	handleGetCardSelected?: (card_id: number) => void;
};

const ListCards = ({
	className,
	canDelete,
	handleGetCardSelected,
}: ListCardsProps) => {
	const { token, loading } = useUserContext();
	const { id } = useAccountContext();
	const [cardsList, setCardsList] = useState<CardType[]>([]);
	const [selectedCard, setSelectedCard] = useState<string | null>(null);
	const [loadingCardList, setLoadingCardList] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoadingCardList(true);
			const data = await cardsAPI.getCardsByAccountID(token, id);
			setCardsList(data);
			setLoadingCardList(false);
		};
		fetchData();
	}, [token]);

	const deleteCard = async (card_id: number) => {
		const newCardsList = cardsList.filter((card) => card.id !== card_id);
		setCardsList(newCardsList);
		await cardsAPI.deleteCard(token, id, card_id);
	};
	const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const card = event.target.value;
		console.log(card);
		setSelectedCard(card);
	};

	return (
		<Container
			className={clsx(
				"border border-total-gray border-opacity-15 bg-total-white drop-shadow-2xl mb-6",
				className
			)}
		>
			<h1 className="text-base my-2">Tus tarjetas</h1>
			<div className="w-full flex flex-col-reverse items-center">
				{loadingCardList ? (
					<p className="py-6">Cargando...</p>
				) : cardsList && cardsList.length > 0 ? (
					cardsList.map((item, index) => (
						<div key={`card-${item.id}`} className="w-full">
							<hr className="text-medium-gray opacity-30" />
							<div className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
								<ElipseIcon className={"fill-total-primary w-5 h-5"} />
								{loading ? (
									<p>Cargando...</p>
								) : (
									<p className="col-span-6 ml-2">
										Terminada en{" "}
										{item.number_id
											.toLocaleString()
											.replace(/\D/g, "")
											.slice(-4)}
									</p>
								)}
								{canDelete ? (
									<div className="flex flex-col col-span-5 items-start col-start-9 md:col-start-11 lg:col-start-11 xl:col-start-12">
										<Button
											title={"Eliminar"}
											className="border-none"
											onClick={() => deleteCard(item.id)}
										/>
									</div>
								) : (
									<div className="flex flex-col col-span-5 items-start col-start-9 md:col-start-11 lg:col-start-11 xl:col-start-12">
										<InputRadio
											onChange={handleCardChange}
											value={`${item.id}`}
											checked={selectedCard}
											className={"mt-1"}
											onClick={() =>
												handleGetCardSelected && handleGetCardSelected(item.id)
											}
										/>
									</div>
								)}
							</div>
						</div>
					))
				) : (
					<p className="py-6">No hay tarjetas disponibles</p>
				)}
			</div>
		</Container>
	);
};

export default ListCards;