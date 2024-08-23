import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Image from "next/image"
import iconCopy from '../../../../public/cliboardIcon.png';

type DataRowProps = {
	accountData: string,
  title: string
};

const DataRow = ({ accountData, title }: DataRowProps) => {
  const [dataCopied, setDataCopied] = useState(false);
  const copyToClipboard = () => {
		setDataCopied(true);
		setTimeout(() => {
			setDataCopied(false);
		}, 10000);
	};
	return (
		<div className="flex items-center justify-between">
			<div>
				<p className="text-total-primary font-bold text-lg">{title}</p>
				<p className="text-total-white">{accountData}</p>
			</div>
			<CopyToClipboard text={`${accountData}`}>
				{dataCopied ? (
					<p className="text-total-primary text-xs md:text-base">Copiado</p>
				) : (
					<button onClick={copyToClipboard}>
						<Image
							src={iconCopy}
							alt={"Copiar en el portapapeles"}
							className="w-6 h-6 md:w-auto md:h-auto"
						/>
					</button>
				)}
			</CopyToClipboard>
		</div>
	);
};

export default DataRow;