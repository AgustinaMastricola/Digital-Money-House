import ElipseIcon from "@/components/common/icons/ElipseIcon";
import Button from "../common/buttons/Button";
import cardsAPI from "@/services/cards/cards.service";
import { useUserContext } from "@/context/UserContextProvider";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { CardType } from "@/types/card.types";
import clsx from "clsx";

const ListCards = () => {
	const { token, account_id } = useUserContext();
	const [cardsList, setCardsList] = useState<CardType[]>([]);

	useEffect(() => {
		CardList();
	}, [account_id]);

	const CardList = useCallback(async () => {
    if(token && account_id) {
		try {
			const res = await cardsAPI.getCardsByAccountID(token, account_id);
			setCardsList(res);
		} catch (error) {
			console.error("Error fetching cards:", error);
		}}
	}, [account_id]);

	const deleteCard = useCallback(
		(card_id: number) => {
			cardsAPI
				.deleteCard(token, account_id, card_id)
				.then((result) => {
					CardList();
				})
				.catch((error) => {
					console.error("Error eliminando tarjeta:", error);
				});
		},
		[account_id]
	);

	const memoizedCardsList = useMemo(() => cardsList, [cardsList]);

	return (
		<div className="mb-4 w-11/12 pl-2 pt-3 md:pl-10 lg:pl-4 flex flex-col items-start border border-total-gray border-opacity-15 rounded-lg border-1  bg-total-white drop-shadow-2xl ">
			<h1 className="text-base my-2">Tus tarjetas</h1>
			<div className="w-11/12 flex flex-col-reverse items-center">
				{memoizedCardsList.length > 0 ? (
					memoizedCardsList.map((item, index) => (
						<div key={`card-${index}`} className="w-full">
							<hr className="text-medium-gray opacity-30" />
							<div className="grid gap-x-2 grid-cols-12 items-center my-3 w-full text-sm md:text-base">
								<ElipseIcon className={"fill-total-primary w-5 h-5"} />
								<p className="col-span-6 ml-2">
									Terminada en{" "}
									{item.number_id.toLocaleString().replace(/\D/g, "").slice(-4)}
								</p>
								<div className="flex flex-col col-span-5 items-start col-start-9 md:col-start-11 lg:col-start-11 xl:col-start-12">
									<Button
										children={"Eliminar"}
										className="border-none"
										onClick={() => deleteCard(item.id)}
									/>
								</div>
							</div>
						</div>
					))
				) : (
					<p
						className={clsx("py-6", {
							'hidden':	memoizedCardsList === undefined || memoizedCardsList === null,
						})}
					>
						No tienes tarjetas agregadas en tu cuenta
					</p>
				)}
			</div>
		</div>
	);
};

export default memo(ListCards);
