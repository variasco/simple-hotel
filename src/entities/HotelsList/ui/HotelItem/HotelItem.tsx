import cn from "classnames";
import { Favorite, favoritesActions, FavoriteSchema } from "features/FavoritesHotels";
import { HotelsRequest } from "features/SearcHotels";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Avatar, ListItem } from "shared/ui";
import { Hotel } from "../../model/types/Hotels";
import styles from "./HotelItem.module.scss";

export interface HotelItemProps {
  className?: string;
  hotel: Hotel;
  search: HotelsRequest;
  favorites: FavoriteSchema[];
}

export const HotelItem = (props: HotelItemProps) => {
  const { className, hotel, search, favorites } = props;
  const { hotelId, hotelName, priceAvg, stars } = hotel;
  const { date, days } = search;

  const dispatch = useAppDispatch();
  const [favorite, setFavorite] = useState(false);

  const addToFavorites = useCallback(() => {
    if (hotelId && hotelName && priceAvg && stars) {
      dispatch(
        favoritesActions.addToFavorites({
          date,
          days,
          hotelId,
          hotelName,
          priceAvg,
          stars,
        })
      );
    }
  }, [dispatch, hotel, search]);

  const removeFromFavorites = useCallback(() => {
    if (hotelId) {
      dispatch(favoritesActions.removeFromFavorites(hotelId));
    }
  }, [dispatch, hotel]);

  useEffect(() => {
    setFavorite(false);
    console.log("useEffect");
    favorites.forEach((item) => {
      if (item.hotelId === hotelId) {
        console.log("useEffect in if");
        setFavorite(true);
      }
    });
  }, [favorites, hotelId]);

  return (
    <div className={cn(styles.root, className)}>
      <Avatar />
      <ListItem
        remove={removeFromFavorites}
        add={addToFavorites}
        isActive={favorite}
        data={{ ...hotel, ...search }}
      />
    </div>
  );
};
