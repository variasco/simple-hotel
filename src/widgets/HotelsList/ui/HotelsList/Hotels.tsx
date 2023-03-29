import cn from "classnames";
import { getHotelsData, getSearchData, HotelsList } from "entities/HotelsList";
import { useSelector } from "react-redux";
import ArrowIcon from "shared/assets/icons/right-arrow.svg";
import pic1 from "shared/assets/img/pic1.jpg";
import pic2 from "shared/assets/img/pic2.jpg";
import pic3 from "shared/assets/img/pic3.jpg";
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

  const { location, date, days } = search;
  const dateForFormat = new Date(date);
  const day = dateForFormat.getDate();
  const month = dateForFormat.toLocaleDateString("ru", { month: "long" });
  const year = dateForFormat.getFullYear();

  return (
    <Card className={cn(styles.root, className, mods)} gap={28}>
      <div className={styles.header}>
        <div className={styles.city}>
          Отели
          <ArrowIcon className={styles.arrow} />
          <span>{location}</span>
        </div>
        <div className={styles.date}>{`${day} ${month} ${year}`}</div>
      </div>
      <div className={styles.pictures}>
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic1} alt="pic4" />
        <img src={pic2} alt="pic5" />
      </div>
      <div className={styles.hotelsList}>
        <div>
          Добавлено в избранное:<span className={styles.favoritesAmount}>{3}</span>отеля
        </div>
        <HotelsList list={hotels} search={search} />
      </div>
    </Card>
  );
};
