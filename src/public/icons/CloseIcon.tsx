export const CloseIcon = ({
  width = "40",
  height = "40",
  color = "#000",
  onClick = () => {},
  className = "",
  style = {},
}: {
  width?: string;
  height?: string;
  color?: string;
  borderColor?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
      onClick={onClick}
      className={className}
      style={style}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};
