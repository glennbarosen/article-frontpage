import { Grid } from "@mui/material";
import { IRow } from "../types";
import { Article } from "./Article";

export const Row = (props: IRow) => {
  const { columns } = props;
  return (
    <Grid container>
      {columns.map((article) => (
        <Article {...article} key={article.url} />
      ))}
    </Grid>
  );
};
