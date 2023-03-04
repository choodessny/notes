import { Header } from "../Header/Header";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { IconButton } from "@mui/material";
import { Spacer } from "../Spacer/Spacer";

export const List = () => {
  return (
    <div>
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
    </div>
  );
};
