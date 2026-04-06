"use client"

import React from "react";
import { TypeAnimation as ReactTypeAnimation } from "react-type-animation"

type TypeAnimationProps = React.ComponentProps<typeof ReactTypeAnimation>

function TypeAnimation({ ...props }: TypeAnimationProps) {
  return (
    <ReactTypeAnimation {...props} />
  )
}

export { TypeAnimation };
