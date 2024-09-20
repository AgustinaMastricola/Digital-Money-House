type ElipseIconProps = {
	className: string;
  width?:string;
  height?:string
};
export default function ElipseIcon({ className, width, height }: ElipseIconProps) {
	return (
    <svg className={className} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16"/>
    </svg>
	);
}
