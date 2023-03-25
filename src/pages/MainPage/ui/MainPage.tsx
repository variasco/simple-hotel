import cn from "classnames";
import styles from "./MainPage.module.scss";

export interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      MainPage
    </div>
  );
};

export default MainPage;
