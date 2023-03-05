import { Note } from "../Note/Note";
import styles from "./Container.module.scss";
import { List } from "../List/List";
import { Header } from "../Header/Header";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { Spacer } from "../Spacer/Spacer";
import { changeView, TView } from "../../store/reducers/view";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";

export const Container = () => {
  const view = useAppSelector((state) => state.view.view);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      {view === TView.list && (
        <div className={styles.left}>
          <Header>
            <IconButton
              onClick={() => {
                dispatch(changeView(TView.list));
              }}
            >
              <FormatListBulletedTwoToneIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(changeView(TView.tiles));
              }}
            >
              <GridViewTwoToneIcon />
            </IconButton>
            <Spacer />
            <IconButton>
              <DeleteOutlineTwoToneIcon />
            </IconButton>
          </Header>
          <List />
        </div>
      )}
      <div className={styles.divider} />
      <div className={styles.right}>
        <Note />
      </div>
    </div>
  );
};
