import cn from "classnames";
import { Favorite, FavoritesList } from "entities/FavoritesList";
import { FavoriteSchema } from "features/FavoritesHotels";
import { getFavorites } from "features/FavoritesHotels/model/selectors/getFavorites";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, SortButton } from "shared/ui";
import styles from "./Favorites.module.scss";

export interface FavoritesProps {
  className?: string;
}

type SortBy = "ratingDesc" | "ratingAsc" | "priceDesc" | "priceAsc";

export const Favorites = (props: FavoritesProps) => {
  const { className } = props;
  const mods = {};
  const favoriteHotels = useSelector(getFavorites);
  const [favorites, setFavorites] = useState<FavoriteSchema[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortBy>("ratingDesc");

  const onRatingDesc = useCallback(() => {
    setFavorites((prev) => [...prev].sort((a, b) => b.stars - a.stars));
    setSelectedSort("ratingDesc");
  }, []);

  const onRatingAsc = useCallback(() => {
    setFavorites((prev) => [...prev].sort((a, b) => a.stars - b.stars));
    setSelectedSort("ratingAsc");
  }, []);

  const onPriceDesc = useCallback(() => {
    setFavorites((prev) => [...prev].sort((a, b) => b.priceAvg - a.priceAvg));
    setSelectedSort("priceDesc");
  }, []);

  const onPriceAsc = useCallback(() => {
    setFavorites((prev) => [...prev].sort((a, b) => a.priceAvg - b.priceAvg));
    setSelectedSort("priceAsc");
  }, []);

  useEffect(() => {
    onRatingDesc();
  }, []);

  useEffect(() => {
    setFavorites(favoriteHotels);
  }, [favoriteHotels]);

  return (
    <Card className={cn(styles.root, className, mods)} gap={32}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.sortButtons}>
        <SortButton
          className={styles.byRating}
          onClickUp={onRatingDesc}
          onClickDown={onRatingAsc}
          activeUp={selectedSort === "ratingDesc"}
          activeDown={selectedSort === "ratingAsc"}
        >
          Рейтинг
        </SortButton>
        <SortButton
          className={styles.byPrice}
          onClickUp={onPriceDesc}
          onClickDown={onPriceAsc}
          activeUp={selectedSort === "priceDesc"}
          activeDown={selectedSort === "priceAsc"}
        >
          Цена
        </SortButton>
      </div>
      <FavoritesList list={favorites} />
    </Card>
  );
};
