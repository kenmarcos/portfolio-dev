import { forwardRef, ReactElement, TextareaHTMLAttributes } from "react";

import classNames from "classnames";

import styles from "components/TextArea/textArea.module.scss";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactElement;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ icon, error, ...rest }: TextAreaProps, ref) => {
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
          <textarea {...rest} ref={ref} />
        </div>

        <small className={styles[errorMessageClass]}>{error}</small>
      </>
    );
  }
);

TextArea.displayName = "Input";
