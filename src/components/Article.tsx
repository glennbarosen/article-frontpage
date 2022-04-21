import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IArticle } from "../types";

export const Article = (props: IArticle) => {
  const { title, width, url, imageUrl } = props;

  const [editMode, setEditMode] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [text, setText] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const params = new URLSearchParams(imageUrl);
  const altHeight = params.get("height");
  const altWidth = params.get("width");

  const hasText = text.length;

  const handleEditClick = () => setEditMode(true);
  const handleStartHover = () => setIsHover(true);
  const handleStopHover = () => setIsHover(false);

  const handleSaveChange = () => {
    setNewTitle(text);
    setText("");
    setEditMode(false);
  };
  return (
    <Grid
      key={url}
      item
      xs={12}
      sm={width}
      sx={{
        position: "relative",
        border: "1px solid gray",
        "& img": {
          width: altWidth ? `${altWidth}px` : undefined,
          height: altHeight ? `${altHeight}px` : undefined,
        },
      }}
      onMouseEnter={handleStartHover}
      onMouseLeave={handleStopHover}
    >
      <Stack>
        <Box>
          <img alt="article-image" src={imageUrl} />
        </Box>
        {editMode ? (
          <TextField
            placeholder="Enter a better title to get more clicks..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <Typography
            variant="h4"
            component={Link}
            underline="hover"
            color="text.primary"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {newTitle || title}
          </Typography>
        )}
      </Stack>

      {isHover || editMode ? (
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ position: "absolute", top: 5, right: 5 }}
          onClick={!hasText ? handleEditClick : handleSaveChange}
          disabled={editMode && !hasText}
        >
          {!editMode ? "Edit" : "Save"}
        </Button>
      ) : undefined}
    </Grid>
  );
};
