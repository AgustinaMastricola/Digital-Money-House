import "./InputRadio.css";

type InputProps = {
	label?: string;
	checked: string | null;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	className?: string;
	onClick?: () => void;
};

const InputRadio = ({
	label,
	checked,
	onChange,
	value,
	className,
	onClick,
}: InputProps) => {
	const isChecked = checked;

	return (
		<div className={`w-full px-4 ${className}`}>
			<label className="flex items-center py-2 cursor-pointer justify-between">
				<span className="ml-2 text-medium-gray">{label}</span>
				<div className="custom-radio">
					<input
						type="radio"
						name="filter"
						checked={isChecked === value ? true : false}
						onChange={onChange}
						value={value}
						onClick={onClick}
					/>
					<span className="radio-label"></span>
				</div>
			</label>
		</div>
	);
};

export default InputRadio;
