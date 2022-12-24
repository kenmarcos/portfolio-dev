import { ButtonHTMLAttributes } from "react";

import styles from "components/Button/button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  const className =
    rest.className === "outline" ? styles.outline : styles.primary;

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
