import styles from "components/Input/input.module.scss";
import { InputHTMLAttributes, ReactElement } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
  error?: string;
}

export const Input = ({ icon, error, ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      {!!icon && icon}
      <input {...rest} />
    </div>
  );
};
