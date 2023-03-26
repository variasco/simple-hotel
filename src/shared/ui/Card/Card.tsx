import cn from "classnames";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.scss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  gap?: string | number;
  padding?: string | number;
}

export const Card = (props: CardProps) => {
  const { className, children, gap, padding, ...otherProps } = props;
  const mods = {};
  const style = { gap, padding };

  return (
    <div className={cn(styles.root, className, mods)} style={style} {...otherProps}>
      {children}
    </div>
  );
};
