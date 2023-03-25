import cn from "classnames";
import { InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  error?: string;
  type?: string;
  label?: string;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    error,
    label,
    type = "text",
    autofocus = false,
    ...restProps
  } = props;

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  return (
    <div className={styles.root}>
      {label && (
        <label className={cn(styles.label, { [styles.errorColor]: error })}>{`${label}`}</label>
      )}
      <input
        className={cn(styles.input, className, { [styles.errorColor]: error })}
        value={value}
        onChange={onChangeHandler}
        type={type}
        autoFocus={autofocus}
        {...restProps}
      />
      {error && <p className={cn(styles.error, styles.errorColor)}>{error}</p>}
    </div>
  );
});
