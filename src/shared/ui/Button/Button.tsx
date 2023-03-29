import cn from "classnames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  Default = "default",
  Clear = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  theme?: ButtonTheme;
}

export const Button = memo((props: ButtonProps) => {
  const { children, className, disabled, theme = ButtonTheme.Default, ...restProps } = props;
  const mods = { [styles.disabled]: disabled };

  return (
    <button className={cn(styles[theme], className, mods)} {...restProps}>
      {children}
    </button>
  );
});
