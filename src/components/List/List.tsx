import { useAppSelector } from "../../store/store";
import styles from "../List/List.module.scss";
import { ListItem } from "../ListItem/ListItem";

export const List = () => {
  const idsList = useAppSelector((state) => state.notes.idsList);
  return (
    <>
      <div className={styles.list}>
        {idsList.map((id) => (
          <ListItem key={id} id={id} />
        ))}
      </div>
    </>
  );
};
