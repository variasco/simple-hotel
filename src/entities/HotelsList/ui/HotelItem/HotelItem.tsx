import cn from "classnames";
import { favoritesActions } from "features/FavoritesHotels";
import { HotelsRequest } from "features/SearcHotels";
import { useCallback } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Avatar, ListItem } from "shared/ui";
import { Hotel } from "../../model/types/Hotels";
import styles from "./HotelItem.module.scss";

export interface HotelItemProps {
  className?: string;
  hotel: Hotel;
  search: HotelsRequest;
}

export const HotelItem = (props: HotelItemProps) => {
  const { className, hotel, search } = props;
  const mods = {};
  const dispatch = useAppDispatch();

  const addToFavorites = useCallback(() => {
    const { hotelId, hotelName, priceAvg, stars } = hotel;
    if (hotelId && hotelName && priceAvg && stars) {
      dispatch(
        favoritesActions.addToFavorites({
          date: search.date,
          days: search.days,
          hotelId,
          hotelName,
          priceAvg,
          stars,
        })
      );
    }
  }, [dispatch, hotel, search]);

  const removeFromFavorites = useCallback(() => {
    const { hotelId } = hotel;
    if (hotelId) {
      dispatch(favoritesActions.removeFromFavorites(hotelId));
    }
  }, [dispatch, hotel]);

  return (
    <div className={cn(styles.root, className, mods)}>
      <Avatar />
      <ListItem remove={removeFromFavorites} add={addToFavorites} data={{ ...hotel, ...search }} />
    </div>
  );
};
