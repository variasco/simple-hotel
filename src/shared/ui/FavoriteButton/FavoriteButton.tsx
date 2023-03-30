import { memo, useEffect, useState } from "react";
import cn from "classnames";
import HeartIcon from "shared/assets/icons/heart.svg";
import styles from "./FavoriteButton.module.scss";

export interface FavoriteButtonProps {
  isActive?: boolean;
  remove?: () => void;
  add?: () => void;
}

export const FavoriteButton = memo((props: FavoriteButtonProps) => {
  const { isActive = false, remove, add } = props;
  const [active, setActive] = useState<boolean>(isActive);

  const toggleActive = () => {
    if (active) {
      remove?.();
    } else {
      add?.();
    }
    setActive((prev) => !prev);
  };

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  return (
    <HeartIcon onClick={toggleActive} className={cn(styles.icon, { [styles.active]: active })} />
  );
});
