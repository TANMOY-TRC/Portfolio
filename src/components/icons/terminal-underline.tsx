import React from "react";

const TerminalUnderline = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ stroke = "currentColor", strokeWidth = 1.5, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-terminal-icon lucide-terminal"
      {...props}
    >
      <path d="M4 21h8" />
    </svg>
  )
);

TerminalUnderline.displayName = "TerminalUnderline";

export { TerminalUnderline };
