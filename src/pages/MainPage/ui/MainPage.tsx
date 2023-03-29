import cn from "classnames";
import { Favorites } from "widgets/Favorites";
import { Header } from "widgets/Header";
import { Hotels } from "widgets/HotelsList";
import { SearchForm } from "widgets/SearchForm";
import styles from "./MainPage.module.scss";

export interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <Header className={styles.header} />
      <SearchForm className={styles.searchForm} />
      <Favorites className={styles.favorites} />
      <Hotels className={styles.hotelsList} />
    </div>
  );
};

export default MainPage;
