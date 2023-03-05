import { CreateButton } from "../CreateButton/CreateButton";

import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./NoteHeaderElements.module.scss";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/reducers/searching";
import { useAppSelector } from "../../store/store";
import { SelectEditOptions } from "../SelectEditOptions/SelectEditOptions";

export const NoteHeaderElements = () => {
  const inputText = useAppSelector((state) => state.search.text);
  const dispatch = useDispatch();
  return (
    <>
      <CreateButton />
      <SelectEditOptions />
      <div className={styles.searchInputTextContainer}>
        <TextField
          title="Поиск"
          placeholder="Поиск"
          value={inputText}
          onChange={(e) => dispatch(setSearch(e.target.value.trim()))}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>
    </>
  );
};
