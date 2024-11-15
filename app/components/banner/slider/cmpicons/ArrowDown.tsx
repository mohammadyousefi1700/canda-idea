type Props = {
  prop?: any;
  className?: string;
};

const ArrowDown = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#00F"
      fillRule="evenodd"
      d="M22.627 0 32 9.373v13.254L22.627 32H9.373L0 22.627V9.373L9.373 0h13.254Z"
      clipRule="evenodd"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m24 13-8 8-8-8"
    />
    <script type="text/javascript">{"//"}</script>
  </svg>
);
export default ArrowDown;
