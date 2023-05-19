import { SVGProps } from 'react';

const ReactLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="16"
    height="16"
    viewBox="-10.5 -9.45 21 18.9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="#149ECA" stroke-width="1" fill="none">
      <ellipse rx="10" ry="4.5" stroke="currentColor" fill="none"></ellipse>
      <ellipse
        rx="10"
        ry="4.5"
        transform="rotate(60)"
        stroke="currentColor"
        fill="none"
      ></ellipse>
      <ellipse
        rx="10"
        ry="4.5"
        transform="rotate(120)"
        stroke="currentColor"
        fill="none"
      ></ellipse>
    </g>
  </svg>
);

export default ReactLogo;
