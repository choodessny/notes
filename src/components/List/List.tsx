import { useAppSelector } from "../../store/store";
import styles from "../List/List.module.scss";
import { ListItem } from "../ListItem/ListItem";
import { TView } from "../../store/reducers/view";
import { TilesItem } from "../TilesItem/TilesItem";

type TListProps = {
  onDoubleClick?: () => void;
};

export const List: React.FC<TListProps> = ({ onDoubleClick }) => {
  const idsList = useAppSelector((state) => state.notes.idsList);
  const view = useAppSelector((state) => state.view.view);
  return (
    <>
      {view === TView.list && (
        <div className={styles.list}>
          {idsList.map((id) => (
            <ListItem key={id} id={id} />
          ))}
        </div>
      )}
      {view === TView.tiles && (
        <div className={styles.tiles}>
          {idsList.map((id) => (
            <TilesItem onDoubleClick={onDoubleClick} key={id} id={id} />
          ))}
        </div>
      )}
    </>
  );
};
