import cn from "classnames";
import styles from "./MainPage.module.scss";

export interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className)}>
      Main Page
    </div>
  );
};

export default MainPage;
