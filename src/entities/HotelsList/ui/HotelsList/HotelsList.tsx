import cn from "classnames";
import { HotelsRequest } from "features/SearcHotels";
import { Hotel } from "../../model/types/Hotels";
import { HotelItem } from "../HotelItem/HotelItem";
import styles from "./HotelsList.module.scss";

export interface HotelsListProps {
  className?: string;
  list: Hotel[];
  search: HotelsRequest;
}

export const HotelsList = (props: HotelsListProps) => {
  const { className, list, search } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      {list
        ? list.map((item) => (
            <HotelItem key={item.hotelId} className={styles.item} hotel={item} search={search} />
          ))
        : "Отели не найдены"}
    </div>
  );
};
