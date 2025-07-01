import { IconProps } from '@/types';

export const StarIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3316 7.12771L10.167 0L8.00235 7.12771H0.666992L6.60178 11.742L4.39913 19L10.167 14.5146L15.9348 19L13.7322 11.742L19.667 7.12771H12.3316Z"
      fill="#FCA120"
    />
  </svg>
);

export default StarIcon;
