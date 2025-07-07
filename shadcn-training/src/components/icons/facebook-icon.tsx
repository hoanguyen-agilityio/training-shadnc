import { IconProps } from '@/types';

const FacebookIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7478 2.98875H14.391V0.12675C14.1075 0.08775 13.1325 0 11.997 0C9.62776 0 8.00476 1.49025 8.00476 4.22925V6.75H5.39026V9.9495H8.00476V18H11.2103V9.95025H13.719L14.1173 6.75075H11.2095V4.5465C11.2103 3.62175 11.4593 2.98875 12.7478 2.98875Z"
      fill="white"
    />
  </svg>
);

export default FacebookIcon;
