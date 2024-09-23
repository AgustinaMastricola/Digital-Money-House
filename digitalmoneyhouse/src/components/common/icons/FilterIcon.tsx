type FilterIconProps = {
	className?: string;
	width?: string;
	height?: string;
};
export default function FilterIcon({
	className,
	width,
	height,
}: FilterIconProps) {
	return (
		<svg
			width="17"
			height="14"
			viewBox="0 0 17 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line y1="9.69922" x2="17" y2="9.69922" stroke="#201F22" />
			<line
				x1="17"
				y1="2.76562"
				x2="-4.37114e-08"
				y2="2.76562"
				stroke="#201F22"
			/>
			<circle
				cx="5.09896"
				cy="9.63216"
				r="2.33333"
				fill="white"
				stroke="#201F22"
			/>
			<circle
				cx="11.901"
				cy="2.83268"
				r="2.33333"
				transform="rotate(-180 11.901 2.83268)"
				fill="white"
				stroke="#201F22"
			/>
		</svg>
	);
}
