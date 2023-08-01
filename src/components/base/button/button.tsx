import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = (
  props?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={`relative overflow-hidden px-5 py-3 w-fit border-solid border-2 border-secondary dark:border-primary transition-all duration-300 ease-in-out font-medium text-secondary dark:text-primary focus:text-white hover:text-white dark:focus:text-white dark:hover:text-white
      before:absolute before:-z-10 before:top-0  before:left-0 before:w-full before:h-full before:transition-all before:duration-300 before:ease-in-out before:bg-secondary dark:before:bg-primary before:-translate-x-full focus:before:-translate-x-0 hover:before:translate-x-0
       ${props?.className ? props.className : ''}`}
    />
  );
};
export default Button;
