import { SVGProps } from 'react';

const EthereumLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    {...props}
  >
    <path
      d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
      fill="#currentColor"
    ></path>
  </svg>
);

export default EthereumLogo;
