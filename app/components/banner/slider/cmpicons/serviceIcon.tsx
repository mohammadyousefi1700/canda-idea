import * as React from "react";

type Props = {
  className?: string;
};

const ServiceIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.686 16 16 20.686v6.628L20.686 32h6.628L32 27.314v-6.628L27.314 16h-6.628ZM20 25.657v-3.314L22.343 20h3.314L28 22.343v3.314L25.657 28h-3.314L20 25.657Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m12.598 7.118-5.48 5.48 2.712 4.98-.39.943L4 20.125v7.75l5.44 1.604.39.943-2.712 4.98 5.48 5.48 4.98-2.712.943.39L20.125 44h7.75l1.604-5.44.943-.39 4.98 2.712 5.48-5.48-2.712-4.98.39-.943L44 27.875v-7.75l-5.44-1.604-.39-.943 2.712-4.98-5.48-5.48-4.98 2.712-.943-.39L27.875 4h-7.75L18.52 9.44l-.943.39-4.98-2.712Zm1.66 10.225-1.854 4.475L8 23.116v1.768l4.404 1.298 1.853 4.475-2.196 4.031 1.25 1.251 4.032-2.196 4.475 1.853L23.116 40h1.768l1.298-4.404 4.475-1.853 4.031 2.196 1.251-1.25-2.196-4.032 1.853-4.475L40 24.884v-1.768l-4.404-1.298-1.853-4.475 2.196-4.031-1.25-1.251-4.032 2.196-4.475-1.853L24.884 8h-1.768l-1.298 4.404-4.475 1.853-4.031-2.196-1.251 1.25 2.196 4.032Z"
      clipRule="evenodd"
    />
    <script type="text/javascript">{"//"}</script>
  </svg>
);
export default ServiceIcon;
