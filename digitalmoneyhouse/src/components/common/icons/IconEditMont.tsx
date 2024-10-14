type FilterIconProps = {
	className?: string;
	fill?: string;
	width?: string;
	height?: string;
};
export default function IconEditMont({
	className,
	width,
	height,
	fill,
}: FilterIconProps) {
	return (
		<svg
			width={width || "30"}
			height={height || "30"}
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<g clipPath="url(#clip0_4858_2271)">
				<path
					d="M23.332 25H4.9987V6.66667H16.0154L17.682 5H4.9987C4.55667 5 4.13275 5.17559 3.82019 5.48816C3.50763 5.80072 3.33203 6.22464 3.33203 6.66667V25C3.33203 25.442 3.50763 25.866 3.82019 26.1785C4.13275 26.4911 4.55667 26.6667 4.9987 26.6667H23.332C23.7741 26.6667 24.198 26.4911 24.5105 26.1785C24.8231 25.866 24.9987 25.442 24.9987 25V12.5L23.332 14.1667V25Z"
					fill={fill || "#0AEB8C"}
				/>
				<path
					d="M27.9406 4.86666L25.1322 2.05833C25.0076 1.93335 24.8595 1.8342 24.6965 1.76654C24.5335 1.69889 24.3587 1.66406 24.1822 1.66406C24.0057 1.66406 23.831 1.69889 23.668 1.76654C23.5049 1.8342 23.3569 1.93335 23.2322 2.05833L11.8072 13.55L10.8822 17.5583C10.8428 17.7526 10.847 17.9532 10.8944 18.1458C10.9418 18.3383 11.0312 18.5179 11.1563 18.6717C11.2815 18.8255 11.4391 18.9496 11.6179 19.0352C11.7967 19.1208 11.9923 19.1657 12.1906 19.1667C12.293 19.1779 12.3964 19.1779 12.4989 19.1667L16.5406 18.275L27.9406 6.76666C28.0655 6.64203 28.1647 6.49396 28.2324 6.33094C28.3 6.16793 28.3348 5.99316 28.3348 5.81666C28.3348 5.64016 28.3 5.4654 28.2324 5.30238C28.1647 5.13936 28.0655 4.99129 27.9406 4.86666V4.86666ZM15.6739 16.7333L12.6239 17.4083L13.3322 14.3833L21.9322 5.72499L24.2822 8.075L15.6739 16.7333ZM25.2239 7.13333L22.8739 4.78333L24.1656 3.46666L26.5322 5.83333L25.2239 7.13333Z"
					fill={fill || "#0AEB8C"}
				/>
			</g>
			<defs>
				<clipPath id="clip0_4858_2271">
					<rect width="30" height="30" fill={fill || "white" }/>
				</clipPath>
			</defs>
		</svg>
	);
}
