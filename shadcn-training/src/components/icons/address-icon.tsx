import { IconProps } from '@/types';

const AddressIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6562 46.7188H40.3438"
      stroke="#6C9D30"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 27.5938C27.6908 27.5938 29.3123 26.9221 30.5078 25.7266C31.7033 24.531 32.375 22.9095 32.375 21.2188C32.375 19.528 31.7033 17.9065 30.5078 16.7109C29.3123 15.5154 27.6908 14.8438 26 14.8438C24.3092 14.8438 22.6877 15.5154 21.4922 16.7109C20.2966 17.9065 19.625 19.528 19.625 21.2188C19.625 22.9095 20.2966 24.531 21.4922 25.7266C22.6877 26.9221 24.3092 27.5938 26 27.5938V27.5938Z"
      stroke="#6C9D30"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.9375 21.2188C41.9375 35.5625 26 46.7188 26 46.7188C26 46.7188 10.0625 35.5625 10.0625 21.2188C10.0625 16.9919 11.7416 12.9381 14.7305 9.94924C17.7193 6.96037 21.7731 5.28125 26 5.28125C30.2269 5.28125 34.2807 6.96037 37.2695 9.94924C40.2584 12.9381 41.9375 16.9919 41.9375 21.2188V21.2188Z"
      stroke="#6C9D30"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddressIcon;
