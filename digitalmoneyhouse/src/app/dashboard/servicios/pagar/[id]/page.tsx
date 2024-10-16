"use client";
import DetailDeposit from "@/components/ingresar-dinero/DetailDeposit";
import AccountNumberService from "@/components/services/AccountNumber";
import DetailPayment from "@/components/services/DetailPayment";
import PayMethod from "@/components/services/PayMethod";
import servicesAPI from "@/services/service/service.service";
import { ServiceInvoiceType } from "@/types/service.types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PagePayService = () => {
	const router = useParams();
	const [service, setService] = useState<ServiceInvoiceType>();
	const [stepPay, setStepPay] = useState<number>(1);

	const handleClickStep = (step: number) => {
		setStepPay(step);
	};

	useEffect(() => {
		const fetchService = async () => {
			const data = await servicesAPI.getServiceByID(
				Array.isArray(router.id) ? router.id[0] : router.id
			);
			setService(data);
		};
		fetchService();
		console.log(service);
	}, [router.id]);

	return (
		<>
			{stepPay === 1 && (
				<AccountNumberService handleClickStep={handleClickStep} />
			)}
			{stepPay === 2 && (
				<PayMethod
					name={service?.name || ""}
					invoiceValue={service?.invoice_value || "0"}
				/>
			)}
		</>
	);
};

export default PagePayService;
