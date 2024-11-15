import * as React from "react";

type Props = {
  className?: string;
};
const OneSlider = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M1 9.787 9.787 1h12.426L31 9.787V32h1V9.373L22.627 0H9.373L0 9.373V32h1V9.787Z"
    />
    <path
      fill="#fff"
      d="M17.477 25H16.07V9.625l-4.64 1.723v-1.313l5.812-2.156h.235V25Z"
    />
    <script type="text/javascript">{"//"}</script>
  </svg>
);
export default OneSlider;
