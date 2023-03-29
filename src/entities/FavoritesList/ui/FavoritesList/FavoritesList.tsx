import { FavoriteSchema } from "features/FavoritesHotels";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";
import styles from "./FavoritesList.module.scss";

export interface FavoritesListProps {
  list: FavoriteSchema[];
}

export const FavoritesList = (props: FavoritesListProps) => {
  const { list } = props;

  return (
    <div className={styles.root}>
      {list.map((item: FavoriteSchema) => (
        <FavoriteItem className={styles.item} key={item.hotelId} data={item} />
      ))}
    </div>
  );
};
