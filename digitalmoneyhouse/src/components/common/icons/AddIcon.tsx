type AddIconProps = {
	className?: string;
};
export default function AddIcon({ className }: AddIconProps) {
	return (
		<svg
			width="34"
			height="34"
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="17" cy="17" r="16.35" stroke="#0AEB8C" stroke-width="1.3" />
			<path
				d="M16.75 10V24.5"
				stroke="#0AEB8C"
				stroke-width="1.3"
				stroke-linejoin="round"
			/>
			<path
				d="M24 17L9.5 17"
				stroke="#0AEB8C"
				stroke-width="1.3"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
