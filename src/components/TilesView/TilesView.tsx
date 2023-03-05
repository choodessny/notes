import { Header } from "../Header/Header";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { Spacer } from "../Spacer/Spacer";
import { changeView, TView } from "../../store/reducers/view";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { List } from "../List/List";

export const TilesView = () => {
  const view = useAppSelector((state) => state.view.view);
  const dispatch = useDispatch();
  return (
    <>
      <Header>
        <IconButton
          title="Отобразить в форме списка"
          onClick={() => {
            dispatch(changeView(TView.list));
          }}
        >
          <FormatListBulletedTwoToneIcon />
        </IconButton>
        <IconButton
          title="Отобразить в форме плиток"
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
    </>
  );
};
