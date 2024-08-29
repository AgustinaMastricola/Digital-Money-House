type MenuIconProps = {
	className?: string;
};
export default function MenuIcon({ className }: MenuIconProps) {
	return (
		<svg
			width="44px"
			height="44px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 6H20M4 12H20M4 18H20"
				stroke="#0AEB8C"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
