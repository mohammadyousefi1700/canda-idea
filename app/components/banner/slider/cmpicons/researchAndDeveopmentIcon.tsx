import * as React from "react";

type Props = {
  className: string;
  prop?: any;
};

const ReSearchAndDevelopmentIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M34 25.048 29.048 30H23.39l5-5H14v-4h14.295l-5-5h5.657l5 5H34v4.048Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m14 38-6 6H4V13.302L9.302 8h29.397L44 13.302v19.397L38.699 38H14Zm-1.657-4L8 38.343V14.958L10.958 12h26.084L40 14.958v16.084L37.042 34H12.343Z"
      clipRule="evenodd"
    />
    <script type="text/javascript">{"//"}</script>
  </svg>
);

export default ReSearchAndDevelopmentIcon;
