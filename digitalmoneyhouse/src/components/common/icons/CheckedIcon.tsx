type CheckedIconProps = {
	className?: string;
};
export default function CheckedIcon({ className }: CheckedIconProps) {
	return (
		<svg
			width="60px"
			height="60px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="10" stroke="#0AEB8C" stroke-width="1.5" />
			<path
				d="M8.5 12.5L10.5 14.5L15.5 9.5"
				stroke="#0AEB8C"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
