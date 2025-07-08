import { IconProps } from '@/types';

export const XIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2.5L6.00003 6.5M6.00003 6.5L10 2.5M6.00003 6.5L2 10.5M6.00003 6.5L10 10.5"
      stroke="#9A9CAA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default XIcon;
