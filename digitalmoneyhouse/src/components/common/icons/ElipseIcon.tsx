type ElipseIconProps = {
  className: string;
  width?: string;
  height?: string;
};
export default function ElipseIcon({
  className,
  width = "24px", // Valor por defecto
  height = "24px", // Valor por defecto
}: ElipseIconProps) {
  return (
      <svg
          width={width}
          height={height}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
      >
          <circle cx="16" cy="16" r="16" fill="#0AEB8C" />
      </svg>
  );
}
