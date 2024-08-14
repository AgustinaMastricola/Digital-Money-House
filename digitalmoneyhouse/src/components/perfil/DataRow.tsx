import Image from "next/image"
import iconEdit from '../../../public/IconoEditar.png'
type dataProp = {
  data: string | number | undefined;
  title: string
}

const DataRow = ({data, title}:dataProp) => {
	return (
			<li className="w-full grid grid-cols-3">
				<div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 col-span-2">
					<span>{title}</span>
					<p className="text-total-gray">{data}</p>
				</div>
			</li>
	);
};

export default DataRow