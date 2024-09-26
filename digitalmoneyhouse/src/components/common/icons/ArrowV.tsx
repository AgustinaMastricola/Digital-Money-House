type ArrowVProps = {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  className?: string;
}
const ArrowV = ({width, height, fill, stroke, className}: ArrowVProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 11 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<path
				d="M1 1L5.5 5L10 1"
				stroke={stroke}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default ArrowV;
