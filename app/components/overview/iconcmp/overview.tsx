import * as React from "react";

type Props = {
  className?: string;
  prop?: React.SVGProps<SVGSVGElement>;
};

const OverviewIcon = (props: Props) => {
  const { className, prop } = props;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 110 50" // اضافه کردن viewBox برای مقیاس پذیری
      width="100%" // تنظیم عرض به صورت درصدی برای انعطاف‌پذیری
      height="100%" // تنظیم ارتفاع به صورت درصدی
      {...prop}
    >
      <g fill="#00F" clipPath="url(#clip0)">
        <path d="m88 .172 21.414 21.414-2.828 2.828L88 5.828l-11 11-8-8-23 23L22.586 8.414l2.828-2.828L46 26.172l23-23 8 8 11-11Z" />
        <path
          fillRule="evenodd"
          d="M9.373 18 0 27.372v15.36l12.413-4.874L7.155 50h15.473L32 40.627V27.372L22.628 18H9.373ZM4 29.03 11.03 22h9.94L28 29.03v9.94L20.97 46h-7.723l1.299-3h5.182L25 37.728v-7.456L19.728 25h-7.456L7 30.272v5.415l-3 1.178v-7.836Zm7 5.086 2.752-1.081 3.585 3.518L16.277 39h1.794L21 36.071v-4.142L18.071 29h-4.142L11 31.929v2.187Z"
          clipRule="evenodd"
        />
        <path d="M39 50V30.485l4 4V50h-4ZM53 50V30.485l4-4V50h-4ZM69 14.485l2 2V50h-4V16.485l2-2ZM81 50V18.485l4-4V50h-4ZM95 50V18.485l4 4V50h-4Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h110v50H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OverviewIcon;
