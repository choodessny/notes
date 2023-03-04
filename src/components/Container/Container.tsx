import { Note } from "../Note/Note";
import styles from "./Container.module.scss";
import { List } from "../List/List";

export const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <List />
      </div>
      <div className={styles.divider} />
      <div className={styles.right}>
        <Note />
      </div>
    </div>
  );
};
