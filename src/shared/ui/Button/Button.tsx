import cn from "classnames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const { children, className, disabled, ...restProps } = props;
  const mods = { [styles.disabled]: disabled };

  return (
    <button className={cn(styles.root, className, mods)} {...restProps}>
      {children}
    </button>
  );
});
