import { Note } from "../Note/Note";
import styles from "./Container.module.scss";
import { ListView } from "../ListView/ListView";
import { TView } from "../../store/reducers/view";
import { useAppSelector } from "../../store/store";
import { TilesView } from "../TilesView/TilesView";
import { Header } from "../Header/Header";
import { NoteHeaderElement } from "../NoteHeaderElement/NoteHeaderElement";

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
            <Header>
              <NoteHeaderElement />
            </Header>
            <Note />
          </div>
        </div>
      )}
      {view === TView.tiles && (
        <div className={styles.container}>
          <div className={styles.right}>
            <TilesView />
          </div>
        </div>
      )}
    </>
  );
};
