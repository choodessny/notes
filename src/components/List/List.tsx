import { Header } from "../Header/Header";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { Spacer } from "../Spacer/Spacer";
import { useAppSelector } from "../../store/store";
import styles from "../List/List.module.scss";
import { ListItem } from "../ListItem/ListItem";

export const List = () => {
  const idsList = useAppSelector((state) => state.notes.idsList);
  return (
    <>
      <Header>
        <IconButton>
          <FormatListBulletedTwoToneIcon />
        </IconButton>
        <IconButton>
          <GridViewTwoToneIcon />
        </IconButton>
        <Spacer />
        <IconButton>
          <DeleteOutlineTwoToneIcon />
        </IconButton>
      </Header>
      <div className={styles.list}>
        {idsList.map((id) => (
          <ListItem key={id} id={id} />
        ))}
      </div>
    </>
  );
};
