import { Note } from "../Note/Note";
import styles from "./Container.module.scss";
import { Header } from "../Header/Header";
import { TView } from "../../store/reducers/view";
import { useAppSelector } from "../../store/store";
import { ListView } from "../ListView/ListView";
import { TilesView } from "../TilesView/TilesView";
import { CreateButton } from "../CreateButton/CreateButton";

export const Container = () => {
  const view = useAppSelector((state) => state.view.view);
  return (
    <>
      {view === TView.list && (
        <div className={styles.container}>
          <div className={styles.left}>
            <ListView />
          </div>
          <div className={styles.divider} />
          <div className={styles.right}>
            <Note />
          </div>
        </div>
      )}
      {view === TView.tiles && (
        <div className={styles.container}>
          <div className={styles.left}>
            <TilesView />
          </div>
          <div className={styles.right}>
            <Header>
              <CreateButton />
            </Header>
          </div>
        </div>
      )}
    </>
  );
};
