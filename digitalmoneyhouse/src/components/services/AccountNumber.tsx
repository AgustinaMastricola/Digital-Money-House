import React, { useState } from "react";
import clsx from "clsx";
import Container from "../common/containers/Container";
import Button from "../common/buttons/Button";

type AccountNumberServiceProps = {
    handleClickStep: (n: number) => void;
};

const AccountNumberService = ({ handleClickStep }: AccountNumberServiceProps) => {
    const [numberAccount, setNumberAccount] = useState<string>("");

    const handleGetNumberAccount = (number: string) => {
        const onlyNumbers = number.replace(/\D/g, ""); // Eliminar caracteres no numéricos
        if (onlyNumbers.length <= 11) {
            setNumberAccount(onlyNumbers);
        }
    };

    return (
        <>
            <Container
                className={
                    "bg-total-black w-11/12 mt-4 md:w-10/12 md:mt-6 flex flex-col py-4 px-5"
                }
            >
                <h2 className="text-total-primary font-bold md:w-full">
                    Número de cuenta sin el primer 2
                </h2>
                <div className="flex flex-col items-start justify-between">
                    <input
                        type="text"
                        value={numberAccount}
                        onChange={(e) => handleGetNumberAccount(e.target.value)}
                        placeholder="0"
                        className="mt-3 py-3 px-2 mb-4 w-full lg:w-4/12 border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-lg hide-arrow"
                    />
										<p className="text-total-white text-xs">Son 11 números sin espacios, sin el “2” inicial. Agregá ceros adelante si tenés menos. </p>
                </div>
                <div className="flex w-full justify-end">
                    <Button
                        title={"Continuar"}
                        disabled={!numberAccount}
                        className={clsx(
                            "px-9 py-3 md:block md:w-full lg:w-auto mt-5 hidden",
                            {
                                "bg-total-primary border-total-primary ": numberAccount,
                                "bg-light-gray border-ligth-gray cursor-not-allowed": !numberAccount,
                            }
                        )}
                        onClick={() => handleClickStep(2)}
                    />
                </div>
            </Container>
            <div className="w-11/12 md:w-10/12 flex justify-end mt-4">
                <Button
                    title={"Continuar"}
                    disabled={!numberAccount}
                    className={clsx(
                        "px-9 py-3 md:hidden shadow-md shadow-light-gray border-none",
                        {
                            "bg-total-primary border-total-primary ": numberAccount,
                            "bg-light-gray border-ligth-gray cursor-not-allowed": !numberAccount,
                        }
                    )}
                    onClick={() => handleClickStep(2)}
                />
            </div>
        </>
    );
};

export default AccountNumberService;
