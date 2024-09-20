import ActivityContainer from "@/components/home/authenticated/ActivityContainer";
import CardUser from "@/components/home/authenticated/CardUser";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import Button from "@/components/common/buttons/Button";

export default function DashboardPage() {
  return (
    <>
      <div className="flex space-x-2 text-sm w-10/12 items-center md:hidden my-2">
        <ArrowRightIcon className="#000000"/>
        <span className="underline">Inicio</span>
      </div>
      <CardUser/>
      <div className="flex flex-col items-center space-y-4 w-10/12 lg:flex-row lg:items-center lg:space-x-4">
        <Button title={"Ingresar dinero"} asLink={true} href={"/transacciones"} className="bg-total-primary border border-total-primary text-total-black w-full text-center py-4 md:py-5 lg:py-6 font-bold rounded-lg md:h-18 lg:text-xl mt-4"/>
        <Button title={"Pago de servicios"} asLink={true} href={"/servicios"} className="bg-total-primary border border-total-primary text-total-black w-full text-center py-4 md:py-5 lg:py-6 font-bold rounded-lg md:h-18 lg:text-xl"/>
      </div>
      <div className=" w-10/12">
        <div className="w-full flex items-center relative my-4">
          <SearchIcon className="h-min absolute left-2"/>
          <input placeholder="Buscar en tu actividad" className="hide-arrow p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"/>
        </div>
      </div>
      <ActivityContainer/>
    </>
  )
}