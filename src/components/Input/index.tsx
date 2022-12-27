import styles from "components/Input/input.module.scss";
import { forwardRef, InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, error, ...rest }: InputProps, ref) => {
    const containerClass = classNames({
      defaultContainer: !error,
      errorContainer: error,
    });

    const errorMessageClass = classNames({
      noErrorMessage: !error,
      withErrorMessage: error,
    });

    return (
      <>
        <div className={styles[containerClass]}>
          {!!icon && icon}
          <input {...rest} ref={ref} />
        </div>

        <small className={styles[errorMessageClass]}>{error}</small>
      </>
    );
  }
);

Input.displayName = "Input";
