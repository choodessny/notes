import { IconButton, Menu, MenuItem } from "@mui/material";
import FormatColorTextTwoToneIcon from "@mui/icons-material/FormatColorTextTwoTone";
import { useState } from "react";
import { useAppSelector } from "../../store/store";
import { useCurrentId } from "../../hooks/useCurrentId";
import { useDispatch } from "react-redux";
import { editNote } from "../../store/reducers/notes";

const SIZES = [1, 2, 3, 4, 5];

export const SelectEditOptions = () => {
  const textPosition = useAppSelector((state) => state.textPosition.line);
  console.log("textPosition", textPosition);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentNoteId = useCurrentId();
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
        <FormatColorTextTwoToneIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {SIZES.map((size) => (
          <MenuItem
            key={size}
            onClick={() => {
              const currentNote = currentNoteId ? notes[currentNoteId] : null;
              if (currentNote) {
                const lines = currentNote.text.split("\n");
                const lineText = lines[textPosition];
                const lineTextWithoutHeader = lineText.replace(/^#+\s/, "");
                const newLineText = `${"#".repeat(
                  size
                )} ${lineTextWithoutHeader}`;
                lines[textPosition] = newLineText;
                dispatch(editNote({ ...currentNote, text: lines.join("\n") }));
              }
              setAnchorEl(null);
            }}
          >
            Header {size}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
