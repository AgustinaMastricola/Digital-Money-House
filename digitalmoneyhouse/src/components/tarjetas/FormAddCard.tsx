"use client";
import { addCardPaySchema } from "@/lib/yup";
import cardsAPI from "@/services/cards/cards.service";
import { NewCardPay } from "@/types/card.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "../common/inputs/inputText";
import Button from "../common/buttons/Button";
import Cards, { Focused } from "react-credit-cards-2";
import { useCallback, useEffect, useMemo, useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import clsx from "clsx";
import SuccessMesage from "../signup/SuccessMesage";
import { useUserContext } from "@/context/UserContextProvider";
import { useAccountContext } from "@/context/AccountContextProvider";
import Container from "../common/containers/Container";

const FormAddCard = () => {
  const { token } = useUserContext();
  const { id } = useAccountContext();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [lengthCardList, setLengthCardList] = useState(0);

  const CardList = useCallback(async () => {
    if (token && id) {
      try {
        const res = await cardsAPI.getCardsByAccountID(token, id);
        setLengthCardList(res.length);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    }
  }, [token, id]);

  useEffect(() => {
    CardList();
  }, [id, CardList]);

  const methods = useForm<NewCardPay>({
    resolver: yupResolver(addCardPaySchema),
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (cardData: any) => {
    // Convert string values to numbers
    const formattedData = {
			cod: cardData.cvc,
			expiration_date: cardData.expiry,
			first_last_name: cardData.name,
			number_id: cardData.number,
    };
		
    if (token && id) {
			console.log("formattedData: ", formattedData);
      try {
        const res = await cardsAPI.createCard(token, id, formattedData);
        reset();
        setShowSuccessMessage(true);
        CardList();
      } catch (error) {
        console.log("no se pudo cargar la tarjeta");
      }
    }
  };

  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: undefined as Focused | undefined
  });

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		let formattedValue = value;
	
		if (name === "number") {
			formattedValue = value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
			if (formattedValue.length > 16) {
				formattedValue = formattedValue.slice(0, 16); // Limitar a 16 dígitos
			}
		} else if (name === "cvc") {
			formattedValue = value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
			if (formattedValue.length > 4) {
				formattedValue = formattedValue.slice(0, 4); // Limitar a 4 dígitos
			}
		} else if (name === "name") {
			formattedValue = value.replace(/\d/g, ""); // Eliminar caracteres numéricos
		} else if (name === "expiry") {
			formattedValue = value.replace(/[^0-9/]/g, ""); // Permitir solo números y '/'
			if(formattedValue.length > 7) {
				formattedValue = formattedValue.slice(0, 7); // Limitar a 7 caracteres
			}
		}
	
		setCardData((prevCardData) => ({
			...prevCardData,
			[name]: formattedValue,
		}));
	
		console.log({
			...cardData,
			[name]: formattedValue,
		});
	};

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: e.target.name as Focused,
    });
  };

  const memoizedLengthCardList = useMemo(
    () => lengthCardList,
    [lengthCardList]
  );

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
      <div
        className={clsx(
          "w-full md:mt-4 mb-4 xl:w-10/12 p-4 md:w-10/12 border border-total-primary border-opacity-15 rounded-lg border-1 bg-total-primary drop-shadow-2xl",
          {
            hidden:
              memoizedLengthCardList < 10 ||
              memoizedLengthCardList === null ||
              memoizedLengthCardList === undefined,
            block: memoizedLengthCardList >= 10,
          }
        )}
      >
        <p>
          El límite máximo de tarjetas asociadas a una cuenta es de 10. <br />{" "}
          Para poder cargar una tarjeta nueva, deberás eliminar alguna de la
          lista.
        </p>
      </div>
      <Container
        className={clsx(
          "md:my-6 mb-6 py-6 w-11/12 md:w-10/12 border border-total-gray border-opacity-15 border-1 bg-total-white drop-shadow-2xl",
          {
            hidden: showSuccessMessage || memoizedLengthCardList >= 10,
            block: !showSuccessMessage || memoizedLengthCardList < 10,
          }
        )}
      >
        <div className="custom-card-size">
          <Cards
            cvc={cardData.cvc || "***"}
            expiry={cardData.expiry || "MM/AA"}
            name={cardData.name || "NOMBRE APELLIDO"}
            number={cardData.number || "**** **** **** ****"}
            focused={cardData.focus}
          />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-4 items-center justify-center p-3 md:p-4 flex flex-col space-y-4 
            lg:flex-row lg:space-y-0 lg:space-x-16 lg:items-start"
          >
            <div className="w-full flex flex-col space-y-4 lg:items-end">
              <InputText
                type="text"
                fieldName={"number"}
                placeholder="Número de la tarjeta*"
                className="p-3 w-full lg:w-10/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg hide-arrow"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardData.number}
              />
              <InputText
                type="text"
                fieldName={"name"}
                placeholder="Nombre y apellido*"
                className="p-3 w-full lg:w-10/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={cardData.name}
              />
            </div>
            <div className="w-full flex-col space-y-4 items-start lg:items-start">
              <div className="flex flex-col space-y-4 md:flex-row-reverse md:space-y-0 lg:flex-col-reverse lg:space-y-0">
                <InputText
                  type="text"
                  fieldName={"cvc"}
                  placeholder="Código de seguridad*"
                  className="p-3 w-full lg:w-10/12 hide-arrow border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
                  md:ml-2
                  lg:ml-0 lg:mt-4"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={cardData.cvc}
                />
                <InputText
                  type="text"
                  fieldName={"expiry"}
                  placeholder="Fecha de vencimiento*"
                  className="p-3 w-full lg:w-10/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg
                  md:mr-2
                  lg:mr-0 lg:mb-2"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
									value={cardData.expiry}
                />
              </div>
              {errors.number?.message && (
                <p className="text-error-text">
                  Ingrese los 16 dígitos de su tarjeta.
                </p>
              )}
              {errors.cvc?.message && (
                <p className="text-error-text">
                  Ingrese el código que aparece al dorso de su tarjeta.
                </p>
              )}
              {errors.name?.message && (
                <p className="text-error-text">
                  Ingrese el nombre y apellido tal cual figura en su tarjeta.
                </p>
              )}
              {errors.expiry?.type && (
                <p className="text-error-text">
                  La fecha de vencimiento debe ser posterior, y en formato
                  mm/aaaa.
                </p>
              )}
              <div className="w-full lg:w-10/12">
                <Button
                  title={"Continuar"}
                  className={clsx("p-3 w-full rounded-lg text-xs lg:text-sm", {
                    "bg-light-gray border-light-gray cursor-not-allowed":
                      !cardData.cvc ||
                      !cardData.expiry ||
                      !cardData.name ||
                      !cardData.number,
                    "bg-total-primary border-total-primary":
                      cardData.cvc &&
                      cardData.expiry &&
                      cardData.name &&
                      cardData.number,
                  })}
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
