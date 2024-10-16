import React from "react";
import Container from "../common/containers/Container";
import { TransferenceType } from "@/types/transference.types";
import Link from "next/link";
import Button from "../common/buttons/Button";
import transformMonth from "@/utils/functions/transformMonth";
import cardsAPI from "@/services/cards/cards.service";
import { formatAmount } from "@/utils/functions/formatAmount";

type DetailPaymentProps = {
	detail: TransferenceType;
	lastCardNumbers: string | null;
};

const DetailPayment = ({ detail, lastCardNumbers }: DetailPaymentProps) => {
	const year = new Date(detail?.dated ?? "").getFullYear();
	const month = transformMonth(new Date(detail?.dated ?? "").getMonth() + 1);
	const day = new Date(detail?.dated ?? "").getDate();
	const hours = new Date(detail?.dated ?? "").getHours();
	const minutes = new Date(detail?.dated ?? "").getMinutes();
	const amountFormated = formatAmount(`${detail.amount}`).replace(/-/g, "");
	return (
		<>
			<Container
				className={
					"bg-total-black w-11/12 mt-4 md:w-10/12 md:mt-6 md:pl-12 md:pt-6 flex flex-col py-4 px-5"
				}
			>
				<div>
					<div className="flex items-center">
						<span className="text-total-white font-light text-xs">
							{day} de {month} {year} a las {hours}:{minutes} hs.
						</span>
					</div>
					<span className="text-total-primary font-bold mr-2 text-xl">
						{amountFormated}
					</span>
				</div>
				<div className="mt-4">
					<div className="flex items-center">
						<span className="text-total-white font-light mr-2 text-xs">
							Para
						</span>
					</div>
					<span className="text-total-primary font-bold mr-2 text-xl">
						{detail.description}
					</span>
				</div>
				<div className="mt-4 flex flex-col items-start">
					<span className="text-total-white text-xs my-2">Tarjeta</span>
					<span className="text-total-white text-xs">{`VISA ************${lastCardNumbers}`}</span>
				</div>
			</Container>
			<div className="w-11/12 md:w-10/12 lg:flex lg:justify-end">
				<div className="w-full flex flex-col md:flex-row-reverse">
					<Button
						title={"Descargar comprobante"}
						className={
							"bg-total-primary border-total-primary px-9 py-3 mt-5"
						}
					/>
					<Link
						className={
							"text-center font-bold border rounded-lg md:mr-3 bg-light-gray border-light-gray px-9 py-3  mt-5  "
						}
						href={"/dashboard"}
					>
						Ir al inicio
					</Link>
				</div>
			</div>
		</>
	);
};

export default DetailPayment;
