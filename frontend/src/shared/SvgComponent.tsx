import React, { ComponentType } from "react"

interface ISvgComponentProps {
  icon: ComponentType;
}

export const SvgComponent: React.FC<ISvgComponentProps> = ({icon: Icon}) => {
  return (
    <div>
      <Icon />
    </div>
  )
}