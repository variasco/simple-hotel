import cn from "classnames";
import { getHotelsData, getSearchData, HotelsList } from "entities/HotelsList";
import { getFavorites } from "features/FavoritesHotels";
import { useSelector } from "react-redux";
import ArrowIcon from "shared/assets/icons/right-arrow.svg";
import pic1 from "shared/assets/img/pic1.jpg";
import pic2 from "shared/assets/img/pic2.jpg";
import pic3 from "shared/assets/img/pic3.jpg";
import { declensions } from "shared/lib/declensions";
import { prettyMonth } from "shared/lib/prettyMonth";
import { Card } from "shared/ui";
import styles from "./Hotels.module.scss";

export interface HotelsProps {
  className?: string;
}

export const Hotels = (props: HotelsProps) => {
  const { className } = props;
  const mods = {};
  const search = useSelector(getSearchData);
  const hotels = useSelector(getHotelsData) || [];
  const favorites = useSelector(getFavorites);

  const { location, date, days } = search;
  const dateForFormat = new Date(date);
  const day = dateForFormat.getDate();
  const month = dateForFormat.getMonth();
  const year = dateForFormat.getFullYear();

  return (
    <Card className={cn(styles.root, className, mods)} gap={28}>
      <div className={styles.header}>
        <div className={styles.city}>
          Отели
          <ArrowIcon className={styles.arrow} />
          <span>{location}</span>
        </div>
        <div className={styles.date}>{`${day} ${prettyMonth(month)} ${year}`}</div>
      </div>
      <div className={styles.pictures}>
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic1} alt="pic4" />
        <img src={pic2} alt="pic5" />
      </div>
      <div className={styles.hotelsList}>
        <div className={styles.title}>
          Добавлено в избранное:<span className={styles.favoritesAmount}>{favorites.length}</span>
          {declensions(favorites.length, ["отель", "отеля", "отелей"])}
        </div>
        <HotelsList list={hotels} search={search} />
      </div>
    </Card>
  );
};
