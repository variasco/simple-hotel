import cn from "classnames";
import styles from "./Avatar.module.scss";
import HouseIcon from "shared/assets/icons/house.svg";
import { memo } from "react";

export interface AvatarProps {
  className?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      <HouseIcon className={styles.icon} />
    </div>
  );
});
