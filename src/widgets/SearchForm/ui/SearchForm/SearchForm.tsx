import cn from "classnames";
import { getSearchData, hotelsActions } from "entities/HotelsList";
import { fetchHotelsData } from "entities/HotelsList/model/services/fetchHotelsData";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { transformDate } from "shared/lib/transformDate";
import { Button, Card, Input } from "shared/ui";
import styles from "./SearchForm.module.scss";

export interface SearchFormProps {
  className?: string;
}

export const SearchForm = (props: SearchFormProps) => {
  const { className } = props;
  const mods = {};

  const dispatch = useAppDispatch();
  const search = useSelector(getSearchData);

  const [location, setLocation] = useState(search.location);
  const [days, setDays] = useState(search.days);
  const [date, setDate] = useState(search.date);

  const onChangeLocation = useCallback((value: string) => {
    setLocation(value);
  }, []);

  const onChangeDate = useCallback((value: string) => {
    setDate(value);
  }, []);

  const onChangeDays = useCallback((value: string) => {
    setDays(value);
  }, []);

  const onSearchButtonClicked = useCallback(() => {
    dispatch(hotelsActions.setSearch({ location, date, days }));
    dispatch(fetchHotelsData({ location, dateIn: date, dateOut: transformDate(date, days) }));
  }, [location, date, days]);

  useEffect(() => {
    onSearchButtonClicked();
  }, []);

  return (
    <Card gap={32} className={cn(styles.root, className, mods)}>
      <div className={styles.from}>
        <Input label="Локация" value={location} onChange={onChangeLocation} />
        <Input label="Дата заселения" value={date} type="date" onChange={onChangeDate} />
        <Input label="Количество дней" value={days} onChange={onChangeDays} />
      </div>
      <Button onClick={onSearchButtonClicked}>Найти</Button>
    </Card>
  );
};
