import clsx from "clsx";

type ArrowRightIconProps = {
	className?: string;
};
export default function ArrowRightIcon({ className }: ArrowRightIconProps) {
	return (
		<svg
			width="22px"
			height="22px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<path
				d="M6 12H18M18 12L13 7M18 12L13 17"
				stroke={clsx({
					'#000000' : !className,
					'#0AEB8C': className
				})}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
