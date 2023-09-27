import { SVGProps } from "react";
export function TickMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="none"
        stroke="#1a35c9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4"></path>
        <circle cx="7" cy="7" r="6.5"></circle>
      </g>
    </svg>
  );
}
