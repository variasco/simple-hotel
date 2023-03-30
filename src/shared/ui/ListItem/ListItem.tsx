import cn from "classnames";
import { declensions } from "shared/lib/declensions";
import { prettyMonth } from "shared/lib/prettyMonth";
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

  const dateForFormat = new Date(date);
  const day = dateForFormat.getDate();
  const month = dateForFormat.getMonth();
  const year = dateForFormat.getFullYear();

  return (
    <div className={cn(styles.root, className)} {...restProps}>
      <div className={styles.header}>
        <h3 className={styles.title}>{hotelName}</h3>
        <FavoriteButton isActive={isActive} add={add} remove={remove} />
      </div>
      <div className={styles.dateBlock}>
        <span>{`${day} ${prettyMonth(month)} ${year}`}</span>
        <span className={styles.tire}>—</span>
        <span>{`${days} ${declensions(days, ["день", "дня", "дней"])}`}</span>
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
