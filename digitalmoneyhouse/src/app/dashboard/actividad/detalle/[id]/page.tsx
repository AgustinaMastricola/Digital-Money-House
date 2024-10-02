'use client'
import DetailActivity from "@/components/actividad/DetailActivity";
import Button from "@/components/common/buttons/Button";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";

const DetailPage = () => {
  return (
    <>
      <div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2 ">
        <ArrowRightIcon className="#000000" />
        <span className="underline">Tu actividad</span>
      </div>
      <DetailActivity/>
      <div className="flex flex-col w-full items-center md:flex-row-reverse md:w-10/12 lg:items-end">
        <Button title={"Descargar comprobante"} className="border-none bg-total-primary px-2.5 py-3 mb-2 md:mb-0 w-11/12 md:w-max"/>
        <Button title={"Ir al inicio"} asLink href="/dashboard" className="border-none bg-light-gray w-11/12 md:w-52 md:mr-3"/>
      </div>
    </>
  );
};

export default DetailPage;