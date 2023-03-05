import { CreateButton } from "../CreateButton/CreateButton";

import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./NoteHeaderElements.module.scss";
import { SelectEditOptions } from "../SelectEditOptions/SelectEditOptions";
import { useSearch } from "../../providers/search";

export const NoteHeaderElements = () => {
  const { text, setText } = useSearch();
  return (
    <>
      <CreateButton />
      <SelectEditOptions />
      <div className={styles.searchInputTextContainer}>
        <TextField
          title="Поиск"
          placeholder="Поиск"
          value={text}
          onChange={(e) => setText(e.target.value.trim())}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>
    </>
  );
};
