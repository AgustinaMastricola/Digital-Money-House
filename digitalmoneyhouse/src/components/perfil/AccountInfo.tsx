import { AccountData } from "@/types/account.types"
import Image from "next/image"
import iconCopy from '../../../public/cliboardIcon.png';
import iconEditAlias from '../../../public/IconoeditarV.png';
import iconClose from '../../../public/close.png';
import iconCheck from '../../../public/Check.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";

type DataProps = {
  accountData: AccountData
}

const AccountInfo = ({ accountData }: DataProps) => {
	const [cvuCopied, setCvuCopied] = useState(false);
	const [aliasCopied, setAliasCopied] = useState(false);
	const [openInputEdit, setOpenInputEdit] = useState(false)

	const copyCvu = () => {
		setCvuCopied(true);
		setTimeout(() => {
			setCvuCopied(false);
		}, 10000);
	};
	const copyAlias = () => {
		setAliasCopied(true);
		setTimeout(() => {
			setAliasCopied(false);
		}, 10000);
	};
	const openInput = () => {
		setOpenInputEdit(true)
	}
	const updateAlias = () => {
		 
	}
	return (
		<div className="bg-total-black w-11/12 h-2/4 rounded-lg p-2 space-y-8 py-5 md:py-10 px-5">
			<p className="text-total-white text-sm md:text-base md:font-semibold">
				Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
			</p>
			<div className="flex items-center justify-between">
				<div>
					<p className="text-total-primary font-bold text-lg">CVU</p>
					<p className="text-total-white">{accountData.cvu}</p>
				</div>
				<CopyToClipboard text={`${accountData.cvu}`}>
					{cvuCopied ? (
						<p className="text-total-primary text-xs md:text-base">Copiado</p>
					) : (
						<button onClick={copyCvu}>
							<Image
								src={iconCopy}
								alt={"Copiar en el portapapeles"}
								className="w-6 h-6 md:w-auto md:h-auto"
							/>
						</button>
					)}
				</CopyToClipboard>
			</div>
			<div className="flex items-center justify-between">
				<div>
					<p className="text-total-primary font-bold text-lg">Alias</p>
					<div className="flex items-center">
						<p className={`text-total-white mr-3 ${openInputEdit ? 'hidden' : 'block' }`}>{accountData.alias}</p>
						<input type="text" placeholder={`${accountData.alias}`} className={`rounded p-2 bg-total-gray placeholder:text-total-black ${openInputEdit? 'block' : 'hidden'}`} />
						<button onClick={openInput} className={`ml-3 ${openInputEdit?'hidden':'block'}`}>
							<Image src={iconEditAlias} alt={"Editar alias"} className="w-6 h-6"/>
						</button>
						<button onClick={updateAlias} className={`ml-3 ${openInputEdit?'block':'hidden'}`}>
							<Image src={iconCheck} alt={"Editar alias"} className="w-6 h-6"/>
						</button>
						<button onClick={()=> setOpenInputEdit(false)} className={`ml-3 ${openInputEdit?'block':'hidden'}`}>
							<Image src={iconClose} alt={"Cancelar edición"} className="w-4 h-4"/>
						</button>
					</div>
				</div>
				<CopyToClipboard text={`${accountData.alias}`}>
					{aliasCopied ? (
						<p className="text-total-primary text-xs md:text-base">Copiado</p>
					) : (
						<button onClick={copyAlias}>
							<Image
								src={iconCopy}
								alt={"Copiar en el portapapeles"}
								className="w-6 h-6 md:w-auto md:h-auto"
							/>
						</button>
					)}
				</CopyToClipboard>
			</div>
		</div>
	);
};

export default AccountInfo