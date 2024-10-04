import clsx from "clsx";

type ArrowRightIconProps = {
	className?: string;
	fill?: string;
	width?: string;
	height?: string;
};
export default function ArrowRightIcon({
	className,
	width,
	height,
	fill,
}: ArrowRightIconProps) {
	return (
		<svg
			width={width || "22px"}
			height={height || "22px"}
			viewBox="0 0 24 24"
			fill={fill || "none"}
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M6 12H18M18 12L13 7M18 12L13 17"
				stroke={className}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
