import { Note } from "../Note/Note";
import styles from "./Container.module.scss";
import { ListView } from "../ListView/ListView";
import { TilesView } from "../TilesView/TilesView";
import { Header } from "../Header/Header";
import { NoteHeaderElements } from "../NoteHeaderElements/NoteHeaderElements";
import { TView, useView } from "../../providers/view";

export const Container = () => {
  const { view } = useView();
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
              <NoteHeaderElements />
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
