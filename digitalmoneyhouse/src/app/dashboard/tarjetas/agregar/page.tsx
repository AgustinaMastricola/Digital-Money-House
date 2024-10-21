import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import FormAddCard from "@/components/tarjetas/FormAddCard";

const AddNewCardPage = async () => {
	return (
		<>
			<div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2">
				<ArrowRightIcon className="#000000"/>
				<span className="underline">Tarjetas / Agregar</span>
			</div>
			<FormAddCard />
		</>
	);
};

export default AddNewCardPage;
