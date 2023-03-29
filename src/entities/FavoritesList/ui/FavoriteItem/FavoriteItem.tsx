import cn from "classnames";
import { favoritesActions, FavoriteSchema } from "features/FavoritesHotels";
import { useCallback } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { ListItem } from "shared/ui";

export interface FavoriteItemProps {
  className?: string;
  data: FavoriteSchema;
}

export const FavoriteItem = (props: FavoriteItemProps) => {
  const { className, data } = props;
  const { hotelName, date, days, stars, priceAvg, hotelId } = data;
  const dispatch = useAppDispatch();

  const removeFromFavorites = useCallback(() => {
    if (hotelId) {
      dispatch(favoritesActions.removeFromFavorites(hotelId));
    }
  }, [dispatch, hotelId]);

  return <ListItem isActive remove={removeFromFavorites} className={cn(className)} data={{ hotelName, date, days, stars, priceAvg }} />;
};
