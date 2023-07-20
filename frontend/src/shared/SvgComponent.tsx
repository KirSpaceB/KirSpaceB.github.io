

interface ISvgComponentProps {
  name: string;
  strokeColor: string;
  fillColor: string;
  strokeWidth: string;
  viewBox: string;
  strokeLinecap: "butt" | "round";
  strokeLinejoin: "round" | "inherit";
  className: string;
  height: string;
  width: string;
  xmlns: string;
  pathTagDirection: string;
  pathTagFill: string;
  pathTagStroke: string;
}

export const SvgComponent = ({
  
  name, 
  strokeColor, 
  fillColor, 
  strokeWidth,
  viewBox,
  strokeLinecap,
  strokeLinejoin, 
  className, 
  height, 
  width,
  xmlns,
  pathTagDirection,
  pathTagFill, 
  pathTagStroke,
}: ISvgComponentProps) => {
  return (
    <svg
    aria-label={name}
    stroke={strokeColor}
    fill={fillColor}
    strokeWidth={strokeWidth}
    viewBox={viewBox}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    className={className}
    height={height}
    width={width}
    xmlns={xmlns}
    >
      <path
        d={pathTagDirection}
        fill={pathTagFill}
        stroke={pathTagStroke}
      >

      </path>
    </svg>
  )
}
