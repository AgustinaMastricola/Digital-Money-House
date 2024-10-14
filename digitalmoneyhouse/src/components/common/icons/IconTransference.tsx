type FilterIconProps = {
	className?: string;
	fill?: string;
	width?: string;
	height?: string;
};
export default function IconTransference({
	className,
	width,
	height,
	fill,
}: FilterIconProps) {
	return (
		<svg
			width={width || "35"}
			height={height || "35"}
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M16.9075 0C12.4248 0.00463263 8.12698 1.78744 4.95721 4.95721C1.78744 8.12698 0.00463263 12.4248 0 16.9075C0 21.425 1.7575 25.67 4.95 28.8625C6.5165 30.4378 8.37999 31.6867 10.4325 32.5368C12.4851 33.387 14.6859 33.8214 16.9075 33.815C21.3902 33.8104 25.688 32.0276 28.8578 28.8578C32.0276 25.688 33.8104 21.3902 33.815 16.9075C33.8104 12.4248 32.0276 8.12698 28.8578 4.95721C25.688 1.78744 21.3902 0.00463263 16.9075 0V0ZM6.6875 28.7525C7.85607 27.2322 9.35286 25.9954 11.0662 25.1344C12.7796 24.2734 14.6652 23.8104 16.5825 23.78C16.6425 23.7825 16.7 23.7975 16.76 23.7975H16.8175C16.8725 23.7975 16.9225 23.7825 16.9775 23.78C18.9213 23.8131 20.8317 24.2913 22.5617 25.1781C24.2918 26.0648 25.7956 27.3363 26.9575 28.895C24.1464 31.2674 20.5859 32.5676 16.9075 32.565C13.1519 32.5717 9.52112 31.2173 6.6875 28.7525V28.7525ZM16.7675 22.5175C16.705 22.5175 16.645 22.5275 16.5825 22.53C15.1233 22.4806 13.7409 21.8639 12.7292 20.8111C11.7175 19.7584 11.1564 18.3525 11.165 16.8925C11.1676 16.1534 11.3161 15.4222 11.602 14.7406C11.8878 14.0591 12.3054 13.4406 12.8308 12.9208C13.3562 12.401 13.979 11.9901 14.6636 11.7115C15.3481 11.4329 16.0809 11.2922 16.82 11.2975C17.5591 11.3001 18.2903 11.4486 18.9719 11.7345C19.6534 12.0203 20.2719 12.4379 20.7917 12.9633C21.3115 13.4887 21.7224 14.1115 22.001 14.7961C22.2796 15.4806 22.4203 16.2135 22.415 16.9525C22.415 19.9825 19.99 22.445 16.98 22.5325C16.91 22.53 16.84 22.5175 16.7675 22.5175V22.5175ZM27.885 28.055C25.9519 25.5039 23.2022 23.6932 20.095 22.925C21.1762 22.3325 22.0782 21.4601 22.7063 20.3992C23.3344 19.3383 23.6655 18.1279 23.665 16.895C23.6621 15.9919 23.481 15.0982 23.1322 14.2652C22.7834 13.4321 22.2737 12.676 21.6324 12.0402C20.991 11.4044 20.2305 10.9013 19.3944 10.5598C18.5583 10.2183 17.6631 10.0451 16.76 10.05C15.8569 10.0529 14.9632 10.234 14.1301 10.5828C13.2971 10.9316 12.541 11.4413 11.9052 12.0826C11.2694 12.724 10.7663 13.4845 10.4248 14.3206C10.0833 15.1567 9.91006 16.0519 9.915 16.955C9.91959 18.1764 10.2519 19.3742 10.8772 20.4234C11.5025 21.4726 12.3979 22.3348 13.47 22.92C10.4153 23.6703 7.70204 25.4272 5.7675 27.9075C2.86591 24.985 1.24215 21.0308 1.2525 16.9125C1.25713 12.7613 2.90824 8.78144 5.84359 5.84609C8.77894 2.91074 12.7588 1.25963 16.91 1.255C21.0612 1.25963 25.0411 2.91074 27.9764 5.84609C30.9118 8.78144 32.5629 12.7613 32.5675 16.9125C32.5664 18.9877 32.1518 21.0419 31.3478 22.9551C30.5439 24.8682 29.3666 26.602 27.885 28.055V28.055Z"
				fill={fill || "#0AEB8C"}
			/>
		</svg>
	);
}
