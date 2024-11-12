import * as React from "react";

type Props = {
  prop?: any;
  className?: any;
};

const ArrowLogo = (props: Props) => {
  const { className, prop } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={266.666}
      height={266.666}
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 2777.77 2777.77"
      {...prop}
      className={className}
    >
      <path
        d="M2229.62 2456.68 1160.33 1387.39 2228.39 319.33V160.77L2116.27 48.64H1636.1l-3.7 3.7h-.02l-112.12 112.13v.01l-647.6 647.61v158.56l81.51 81.52-61.37 61.38-76.17-76.17H658.06L545.93 1149.5V1636l112.13 112.13h158.57l81.52-81.53 55.66 55.66-83.1 83.1v158.57l112.12 112.13h.1l212.55 212.55v3.25l112.13 112.12h3.24l327.93 327.93h476.94l112.13-112.13v-2.76l1.77-1.77z"
        style={{
          fill: "none",
          fillRule: "nonzero",
          stroke: "#fff",
          strokeWidth: 13.89,
          strokeMiterlimit: 10,
        }}
      />
    </svg>
  );
};
export default ArrowLogo;
