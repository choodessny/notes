import styles from "../List/List.module.scss";
import { ListItem } from "../ListItem/ListItem";
import { TilesItem } from "../TilesItem/TilesItem";
import { useNotesIds } from "../../hooks/useNotesIds";
import { TView, useView } from "../../providers/view";

type TListProps = {
  onDoubleClick?: () => void;
};

export const List: React.FC<TListProps> = ({ onDoubleClick }) => {
  const idsList = useNotesIds();
  const { view } = useView();
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
