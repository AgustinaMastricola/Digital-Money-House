import React from "react";

const ErrorIcon = () => {
	return (
		<svg
			width="65"
			height="65"
			viewBox="0 0 65 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23 23L42 42"
				stroke="#E91010"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M23 42L42 23"
				stroke="#E91010"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="32.5" cy="32.5" r="30.5" stroke="#E91010" strokeWidth="4" />
		</svg>
	);
};

export default ErrorIcon;
