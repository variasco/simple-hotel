import cn from "classnames";
import styles from "./FavoriteButton.module.scss";
import HeartIcon from "shared/assets/icons/heart.svg";
import { memo } from "react";

export interface FavoriteButtonProps {
  className?: string;
}

export const FavoriteButton = memo((props: FavoriteButtonProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      <HeartIcon className={styles.icon} />
    </div>
  );
});
