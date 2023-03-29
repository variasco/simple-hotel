import cn from "classnames";
import styles from "./Avatar.module.scss";
import HouseIcon from "shared/assets/icons/house.svg";

export interface AvatarProps {
  className?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      <HouseIcon className={styles.icon} />
    </div>
  );
};
