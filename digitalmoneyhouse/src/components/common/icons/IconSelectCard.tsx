type FilterIconProps = {
	className?: string;
	fill?: string;
	width?: string;
	height?: string;
};
export default function FilterIcon({
	className,
	width,
	height,
	fill,
}: FilterIconProps) {
	return (
		<svg
			width={width || "39"}
			height={height || "39"}
			viewBox="0 0 39 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<path
				d="M30.9897 7.00775V13.8327L31.7515 13.071H8.73613C7.93252 13.071 7.15938 13.4519 6.76328 14.1717C6.49668 14.6516 6.48525 15.1505 6.48525 15.6723V25.9288L7.24697 25.1671H3.81924C3.80781 25.1671 3.65928 25.1671 3.65928 25.1595L3.76211 25.1709C3.72783 25.1633 3.69736 25.1557 3.66309 25.1481C3.63262 25.1405 3.59834 25.129 3.56787 25.1176C3.4917 25.0871 3.50693 25.0948 3.60977 25.1405C3.60977 25.1443 3.48789 25.0757 3.48027 25.0719C3.32412 24.9805 3.48027 25.0757 3.47266 25.0795C3.46504 25.0871 3.25938 24.8815 3.26699 24.8739C3.28604 24.8548 3.3584 25.0148 3.30127 24.9081C3.27842 24.8662 3.25176 24.8205 3.22891 24.7786C3.14512 24.6339 3.2708 24.9386 3.22891 24.7786C3.2251 24.7634 3.17178 24.5844 3.17939 24.5844L3.19082 24.6872C3.18701 24.653 3.1832 24.6187 3.1832 24.5844C3.17939 24.5197 3.1832 24.5501 3.1832 24.5311V24.4854C3.17559 23.1676 3.1832 21.846 3.1832 20.5283V6.95824C3.1832 6.93919 3.18701 6.92396 3.18701 6.90492C3.19463 6.82113 3.19463 6.83636 3.17939 6.95443C3.17559 6.95443 3.2251 6.77542 3.22891 6.76019C3.2708 6.59642 3.14512 6.90111 3.22891 6.76019C3.25557 6.71829 3.27842 6.6764 3.30127 6.6307C3.38125 6.48597 3.1832 6.74876 3.30127 6.62689C3.33555 6.59261 3.36602 6.55452 3.4041 6.52025C3.53359 6.39837 3.4041 6.52025 3.40029 6.51644C3.39648 6.51263 3.51455 6.44408 3.52598 6.43646C3.68594 6.34886 3.52217 6.43265 3.52217 6.42884C3.52217 6.42122 3.64404 6.38695 3.66689 6.38314C3.68213 6.37933 3.70117 6.37552 3.71641 6.37171C3.8002 6.35648 3.78115 6.35648 3.66309 6.37552C3.66309 6.3679 3.80781 6.3679 3.81924 6.3679H27.7524C28.6208 6.3679 29.4892 6.35648 30.3575 6.3679C30.3766 6.3679 30.5175 6.36409 30.5175 6.37552C30.5213 6.39456 30.3347 6.32601 30.4908 6.37933C30.5289 6.39076 30.5708 6.40218 30.6127 6.41361C30.7765 6.4555 30.4718 6.32982 30.6127 6.41361C30.6546 6.44027 30.6965 6.46312 30.7422 6.48597C30.8869 6.56595 30.6241 6.3679 30.746 6.48597C30.7803 6.52025 30.8184 6.55072 30.8526 6.5888C30.9745 6.71829 30.8526 6.5888 30.8564 6.58499C30.8603 6.58118 30.9288 6.69925 30.9364 6.71068C31.024 6.87064 30.9402 6.70687 30.944 6.70687C30.9517 6.70687 30.9859 6.84017 30.9897 6.85159C30.9936 6.86683 30.9974 6.88587 31.0012 6.90111C31.0164 6.9849 31.0164 6.96585 30.9974 6.84779C30.9897 6.8516 30.9897 6.99632 30.9897 7.00775C30.9974 7.40765 31.3363 7.78851 31.7515 7.76947C32.159 7.75042 32.5208 7.43431 32.5132 7.00775C32.4903 5.81947 31.542 4.86351 30.3499 4.84447H4.59619C4.3334 4.84447 4.07441 4.84066 3.81162 4.84447C2.86328 4.8597 2.05205 5.45765 1.74736 6.35267C1.65596 6.61546 1.64453 6.89349 1.64453 7.16771V24.5159C1.65596 25.449 2.23105 26.2488 3.10322 26.5687C3.54121 26.7286 4.03252 26.6868 4.48955 26.6868H7.23936C7.65068 26.6868 8.00107 26.3364 8.00107 25.925V18.464C8.00107 17.409 7.99727 16.3578 8.00107 15.3029V15.2038C8.00107 15.1696 8.00488 15.1353 8.00869 15.101C8.0125 14.9982 7.9668 15.2457 8.00488 15.1505C8.02773 15.0934 8.04678 15.0172 8.0582 14.9563C8.07725 14.8611 7.98584 15.082 8.03916 15.002C8.06201 14.9677 8.07725 14.9296 8.09629 14.8953C8.09248 14.903 8.14961 14.8116 8.14961 14.8116C8.16484 14.8192 8.03916 14.9334 8.11914 14.8496L8.25625 14.7125C8.35908 14.6135 8.22197 14.7468 8.21816 14.743C8.21816 14.743 8.29053 14.6973 8.30195 14.6897C8.32861 14.6744 8.35908 14.6592 8.38955 14.6402C8.52666 14.5602 8.23721 14.6821 8.38955 14.6402C8.40098 14.6364 8.58379 14.583 8.58379 14.5907C8.58379 14.6021 8.38193 14.6021 8.53428 14.5983C8.56856 14.5983 8.60283 14.5945 8.63711 14.5945H8.64473C8.79326 14.5907 8.9418 14.5945 9.09033 14.5945H31.7477C32.159 14.5945 32.5094 14.2441 32.5094 13.8327V7.00775C32.5094 6.60785 32.159 6.22699 31.7477 6.24603C31.3401 6.26507 30.9897 6.58119 30.9897 7.00775V7.00775Z"
				fill={fill || "#0AEB8C"}
			/>
			<path
				d="M2.41084 11.0678H30.5602C30.941 11.0678 31.3257 11.0755 31.7065 11.0678H31.7561C32.156 11.0678 32.5368 10.7174 32.5178 10.3061C32.4987 9.89479 32.1826 9.5444 31.7561 9.5444H3.60674C3.22588 9.5444 2.84121 9.53678 2.46035 9.5444H2.41084C2.01094 9.5444 1.63008 9.89479 1.64912 10.3061C1.66817 10.7213 1.98428 11.0678 2.41084 11.0678ZM35.8274 15.2344V31.9884C35.8274 32.0075 35.8274 32.1484 35.8198 32.1522C35.8046 32.156 35.8655 31.9542 35.8236 32.0989C35.8084 32.1446 35.797 32.1941 35.7817 32.2436C35.7398 32.396 35.8503 32.1484 35.7932 32.2208C35.7627 32.2627 35.7322 32.3236 35.7094 32.3693C35.6332 32.5064 35.8008 32.2893 35.7246 32.3541C35.6941 32.3807 35.6713 32.415 35.6408 32.4455C35.6332 32.4531 35.538 32.5483 35.5304 32.5445C35.5113 32.5255 35.6713 32.4531 35.5647 32.5102C35.5228 32.5331 35.4771 32.5597 35.4352 32.5826C35.2942 32.6664 35.5951 32.5407 35.4352 32.5826C35.4047 32.5902 35.3704 32.6016 35.3399 32.6131C35.3057 32.6207 35.2752 32.6283 35.2409 32.6359C35.359 32.6207 35.3742 32.6207 35.2904 32.6283C34.6163 32.6359 33.9422 32.6321 33.2681 32.6321H10.6869C10.0052 32.6321 9.32344 32.6435 8.64551 32.6321H8.59219C8.57315 32.6321 8.55791 32.6283 8.53887 32.6283C8.45508 32.6207 8.47031 32.6207 8.58838 32.6359C8.58838 32.6397 8.45127 32.6016 8.43985 32.6016C8.42842 32.5978 8.34463 32.5712 8.34463 32.5712C8.34463 32.5674 8.50459 32.6511 8.34844 32.5635C8.32178 32.5483 8.29131 32.5293 8.26465 32.514C8.1961 32.4683 8.21133 32.4798 8.29893 32.5483C8.27227 32.5293 8.24942 32.5064 8.22656 32.4836C8.1961 32.4569 8.16944 32.4264 8.14278 32.396C8.03233 32.2855 8.16944 32.4074 8.1542 32.415C8.14658 32.4188 8.02852 32.2055 8.03233 32.2017C8.03994 32.1979 8.08946 32.3731 8.03994 32.1979C8.03614 32.1865 8.00186 32.0494 8.00567 32.0494C8.01709 32.0494 8.01709 32.2512 8.01328 32.0989C8.01328 32.057 8.00947 32.038 8.00947 31.9923V18.3156C8.00947 17.2911 7.99424 16.2628 8.00947 15.2382V15.2344C8.00947 15.2154 8.00567 15.2649 8.00947 15.1811C8.00947 15.1621 8.01328 15.1468 8.01328 15.1278C8.0209 15.044 8.0209 15.0592 8.00567 15.1773C8.00947 15.1773 8.05518 14.9336 8.07422 14.9374C8.07803 14.9374 7.99424 15.0973 8.08184 14.9412C8.08565 14.9374 8.1542 14.8155 8.16182 14.8155C8.16563 14.8193 8.04375 14.9488 8.16563 14.8193C8.19229 14.7888 8.22276 14.7622 8.25322 14.7355C8.36367 14.6251 8.2418 14.7622 8.23418 14.7469C8.23037 14.7431 8.34844 14.6746 8.35987 14.667C8.37129 14.6593 8.44746 14.6213 8.44746 14.6213C8.45127 14.6289 8.27608 14.6784 8.45127 14.6289C8.48936 14.6174 8.53887 14.6136 8.57315 14.5984C8.63028 14.587 8.60742 14.5908 8.49697 14.606C8.53125 14.6022 8.56553 14.5984 8.59981 14.5984C8.66074 14.5946 8.72168 14.5984 8.77881 14.5984H35.2447C35.2638 14.5984 35.279 14.6022 35.298 14.6022C35.3666 14.6098 35.3666 14.6098 35.298 14.6022C35.2828 14.5984 35.2638 14.5984 35.2485 14.5946C35.2828 14.6022 35.3133 14.6098 35.3476 14.6174C35.359 14.6213 35.4923 14.6555 35.4923 14.6632C35.4885 14.686 35.3438 14.587 35.4466 14.6479C35.4885 14.6746 35.5304 14.6974 35.5761 14.7203C35.7208 14.8003 35.4618 14.6022 35.5799 14.7203C35.5989 14.7393 35.7589 14.884 35.7513 14.8955C35.736 14.9107 35.6599 14.7393 35.7322 14.8802C35.7513 14.9145 35.7741 14.9526 35.7932 14.9869C35.877 15.1278 35.7513 14.8269 35.7932 14.9869C35.8008 15.0173 35.8122 15.0516 35.8236 15.0821C35.8274 15.0973 35.8313 15.1164 35.8351 15.1316C35.8503 15.2154 35.8503 15.1964 35.8313 15.0783C35.8274 15.0783 35.8274 15.223 35.8274 15.2344C35.8351 15.6343 36.174 16.0152 36.5892 15.9962C36.9967 15.9771 37.3585 15.661 37.3509 15.2344C37.3318 14.2404 36.6311 13.2997 35.6218 13.1207C35.439 13.0864 35.2638 13.075 35.081 13.075H8.74453C8.53887 13.075 8.33701 13.0902 8.13897 13.1359C7.17158 13.353 6.50127 14.2632 6.48604 15.2382C6.48223 15.5163 6.48604 15.7905 6.48604 16.0685V31.8018C6.48604 31.9008 6.48223 31.9999 6.48985 32.0989C6.56983 33.1767 7.36582 34.0146 8.43985 34.1403C8.66836 34.167 8.90449 34.1555 9.13301 34.1555H34.7458C35.081 34.1555 35.4161 34.1708 35.7475 34.0832C36.692 33.8356 37.3356 32.9558 37.3509 31.9923V15.2344C37.3509 14.8345 37.0005 14.4537 36.5892 14.4727C36.1778 14.4918 35.8274 14.8079 35.8274 15.2344V15.2344Z"
				fill={fill || "#0AEB8C"}
			/>
			<path
				d="M11.4382 28.8995H14.0775C14.4774 28.8995 14.8583 28.5492 14.8393 28.1378C14.8202 27.7265 14.5041 27.3761 14.0775 27.3761H11.4382C11.0383 27.3761 10.6574 27.7265 10.6765 28.1378C10.6955 28.5492 11.0116 28.8995 11.4382 28.8995ZM15.8676 22.5659H12.318C12.2342 22.5697 12.2685 22.5925 12.3104 22.5735C12.3561 22.5506 12.3751 22.5887 12.3104 22.5697C12.318 22.5697 12.2151 22.5468 12.2113 22.5392C12.2113 22.5087 12.3599 22.623 12.257 22.5506C12.139 22.4668 12.2875 22.5849 12.2913 22.5849C12.2875 22.5887 12.2151 22.5125 12.2189 22.5163C12.1275 22.4364 12.2761 22.543 12.2456 22.5544C12.2418 22.5544 12.2075 22.4935 12.2075 22.4897C12.1694 22.4059 12.2494 22.6458 12.2151 22.5087C12.2151 22.5163 12.1885 22.4097 12.1923 22.4097C12.2151 22.3983 12.1999 22.5811 12.2037 22.4554V19.0658C12.2037 19.0124 12.2075 18.9553 12.2037 18.902C12.2037 18.8906 12.2113 18.8525 12.2037 18.8449C12.238 18.8868 12.1694 18.9972 12.1999 18.8944C12.1961 18.902 12.2228 18.7953 12.2304 18.7953C12.2266 18.7953 12.158 18.9743 12.2189 18.841C12.2723 18.7306 12.2037 18.902 12.1847 18.8753C12.1809 18.8715 12.257 18.7992 12.2532 18.803C12.337 18.7116 12.2189 18.8372 12.2151 18.8296C12.2189 18.8334 12.2989 18.7725 12.3027 18.7801C12.3218 18.8106 12.139 18.8258 12.2608 18.7992C12.2799 18.7953 12.3522 18.7839 12.3599 18.7763C12.3408 18.7915 12.1771 18.7839 12.3142 18.7877H15.6276C15.7 18.7877 15.7762 18.7915 15.8485 18.7877C15.8676 18.7877 15.9133 18.7953 15.9247 18.7877C15.8714 18.8296 15.7762 18.7496 15.8752 18.7839C15.8942 18.7915 15.959 18.8144 15.9742 18.8144C15.9514 18.8182 15.8181 18.7344 15.9285 18.803C16.0314 18.8677 15.898 18.7687 15.8942 18.7687C15.898 18.7649 15.9552 18.8296 15.9666 18.8372C16.0771 18.9363 15.9285 18.8068 15.9399 18.7992C15.9361 18.7992 15.9971 18.8829 15.9895 18.8868C15.978 18.8944 15.9361 18.6963 15.9704 18.8449C15.9742 18.8639 15.9856 18.9325 15.9933 18.9439C15.9856 18.9325 15.9895 18.7915 15.978 18.8715V18.9058C15.9742 18.9667 15.978 19.0315 15.978 19.0924V22.4554C15.978 22.4744 15.9704 22.5049 15.978 22.5125C15.9628 22.4973 16.0275 22.3297 15.9818 22.463C15.978 22.4783 15.9742 22.4973 15.9666 22.5125C15.9438 22.5773 15.9438 22.5773 15.9666 22.5163C15.9933 22.5049 16.0009 22.4516 15.959 22.5163C15.8828 22.642 15.9895 22.4821 15.9933 22.4821C15.9971 22.4859 15.9323 22.543 15.9247 22.5544C15.8447 22.6458 15.9514 22.4973 15.9628 22.5278C15.9666 22.5354 15.8714 22.5735 15.8752 22.5773C15.8676 22.5659 16.0618 22.524 15.9171 22.5582C15.8942 22.5659 15.8676 22.5697 15.8409 22.5773C15.7419 22.6039 16.0428 22.5582 15.8676 22.5659C15.4715 22.5773 15.0868 22.9086 15.1059 23.3276C15.1249 23.7313 15.441 24.1007 15.8676 24.0893C16.774 24.0626 17.4786 23.3618 17.5015 22.4554C17.5053 22.2726 17.5015 22.0898 17.5015 21.907V19.5342C17.5015 19.3247 17.5053 19.1153 17.5015 18.9058C17.4862 18.1479 16.953 17.4166 16.1761 17.2948C15.9247 17.2567 15.681 17.2605 15.4296 17.2605H14.2984C13.6472 17.2605 12.9959 17.2567 12.3446 17.2605C11.6324 17.2681 11.0116 17.6909 10.7679 18.365C10.6689 18.643 10.6765 18.9325 10.6765 19.2257V22.3754C10.6765 22.9734 10.9431 23.5332 11.4648 23.8532C11.8038 24.0588 12.1732 24.0893 12.5541 24.0893H15.8676C16.2675 24.0893 16.6483 23.7389 16.6293 23.3276C16.6103 22.9124 16.2941 22.5659 15.8676 22.5659V22.5659ZM16.9721 28.8995H19.6114C20.0113 28.8995 20.3922 28.5492 20.3731 28.1378C20.3541 27.7265 20.038 27.3761 19.6114 27.3761H16.9721C16.5722 27.3761 16.1913 27.7265 16.2104 28.1378C16.2294 28.5492 16.5455 28.8995 16.9721 28.8995V28.8995ZM22.506 28.9376H25.1453C25.5452 28.9376 25.9261 28.5872 25.907 28.1759C25.888 27.7646 25.5719 27.4142 25.1453 27.4142H22.506C22.1061 27.4142 21.7252 27.7646 21.7442 28.1759C21.7633 28.5872 22.0794 28.9376 22.506 28.9376ZM28.0398 28.9376H30.6792C31.0791 28.9376 31.46 28.5872 31.4409 28.1759C31.4219 27.7646 31.1058 27.4142 30.6792 27.4142H28.0398C27.6399 27.4142 27.2591 27.7646 27.2781 28.1759C27.2972 28.5872 27.6133 28.9376 28.0398 28.9376Z"
				fill={fill || "#0AEB8C"}
			/>
		</svg>
	);
}
