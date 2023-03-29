import cn from "classnames";
import { FavoriteButton, Rating } from "shared/ui";
import styles from "./ListItem.module.scss";

export interface ListItemProps {
  className?: string;
  data: any;
  isActive?: boolean;
  remove?: () => void;
  add?: () => void;
}

export const ListItem = (props: ListItemProps) => {
  const { className, data, remove, add, isActive, ...restProps } = props;
  const { hotelName, date, days, stars, priceAvg } = data;

  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)} {...restProps}>
      <div className={styles.header}>
        <h3 className={styles.title}>{hotelName}</h3>
        <FavoriteButton isActive={isActive} add={add} remove={remove} />
      </div>
      <div className={styles.dateBlock}>
        <span>{date}</span>
        <span className={styles.tire}>—</span>
        <span>{days} день</span>
      </div>
      <div className={styles.bottom}>
        <Rating rating={stars} />
        <div className={styles.price}>
          Price:<span className={styles.priceNumber}>{priceAvg} ₽</span>
        </div>
      </div>
    </div>
  );
};
