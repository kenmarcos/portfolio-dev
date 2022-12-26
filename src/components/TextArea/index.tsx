import styles from "components/TextArea/textArea.module.scss";
import { ReactElement, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactElement;
  error?: string;
}

export const TextArea = ({ icon, error, ...rest }: TextAreaProps) => {
  return (
    <div className={styles.container}>
      {!!icon && icon}
      <textarea {...rest} />
    </div>
  );
};
