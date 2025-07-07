import { IconProps } from '@/types';

const CheckedIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_215_3265)">
      <rect opacity="0.1" width="20" height="20" rx="10" fill="#6C9D30" />
      <path
        d="M14.4167 7.125L8.68754 12.8542L6.08337 10.25"
        stroke="#2C742F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_215_3265">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CheckedIcon;
