import { IconButton, Menu, MenuItem } from "@mui/material";
import FormatColorTextTwoToneIcon from "@mui/icons-material/FormatColorTextTwoTone";
import { useState } from "react";
import { useCurrentId } from "../../hooks/useCurrentId";
import { useTextPosition } from "../../providers/textPosition";
import { useNotes } from "../../providers/notes";

const SIZES = [1, 2, 3, 4, 5];

export const SelectEditOptions = () => {
  const { line } = useTextPosition();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentNoteId = useCurrentId();
  const { notes, editNote } = useNotes();
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          event.stopPropagation();
        }}
      >
        <FormatColorTextTwoToneIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {SIZES.map((size) => (
          <MenuItem
            key={size}
            onClick={(event) => {
              event.stopPropagation();
              const currentNote = currentNoteId ? notes[currentNoteId] : null;
              if (currentNote) {
                const lines = currentNote.text.split("\n");
                const lineText = lines[line];
                const lineTextWithoutHeader = lineText.replace(/^#+\s/, "");
                const newLineText = `${"#".repeat(
                  size
                )} ${lineTextWithoutHeader}`;
                lines[line] = newLineText;
                editNote({ ...currentNote, text: lines.join("\n") });
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
