import cn from "classnames";
import { getFavorites } from "features/FavoritesHotels";
import { HotelsRequest } from "features/SearcHotels";
import { useSelector } from "react-redux";
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
  const favorites = useSelector(getFavorites);

  return (
    <div className={cn(styles.root, className)}>
      {list
        ? list.map((item) => (
            <HotelItem key={item.hotelId} favorites={favorites} className={styles.item} hotel={item} search={search} />
          ))
        : "Отели не найдены"}
    </div>
  );
};
