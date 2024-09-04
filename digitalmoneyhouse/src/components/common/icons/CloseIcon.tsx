type CloseIconProps = {
	className: string;
};
export default function CloseIcon({ className }: CloseIconProps) {
	return (
		<svg
			width="32px"
			height="32px"
			viewBox="0 0 24 24"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				id="Page-1"
				stroke="none"
				strokeWidth="1"
				fill="none"
				className={className}
			>
				<g id="Close">
					<line
						x1="16.9999"
						y1="7"
						x2="7.00001"
						y2="16.9999"
						id="Path"
						stroke="#0AEB8C"
						strokeWidth="2"
						strokeLinecap="round"
            className={className}
					></line>
					<line
						x1="7.00006"
						y1="7"
						x2="17"
						y2="16.9999"
						id="Path"
						stroke="#0AEB8C"
						strokeWidth="2"
						strokeLinecap="round"
					></line>
				</g>
			</g>
		</svg>
	);
}
