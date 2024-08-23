type ElipseIconProps = {
	className: string;
};
export default function ElipseIcon({ className }: ElipseIconProps) {
	return (
    <svg className={className} width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16"/>
    </svg>
	);
}
