import cn from "classnames";
import styles from "./SearcHotels.module.scss";

export interface SearcHotelsProps {
  className?: string;
}

export const SearcHotels = (props: SearcHotelsProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      
    </div>
  );
};
