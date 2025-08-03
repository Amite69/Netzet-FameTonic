import { ButtonProps } from '../../types';

const Button = ({ text }: ButtonProps) => (
  <button className="bg-[#FC004E] text-white flex justify-center items-center rounded-lg cursor-pointer py-2 w-full text-lg space-x-2 shadow-[0_2px_6px_#00FFFF]">
    <span className="font-bold ">{text}</span>
    <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
    </svg>
  </button>
);

export default Button;

