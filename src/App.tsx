import { useCallback, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Row } from "./components/Row";
import { IRow } from "./types";

const App = () => {
  const [data, setData] = useState<IRow[]>([]);

  const getData = useCallback(async () => {
    const res = await fetch(
      "https://storage.googleapis.com/aller-structure-task/test_data.json"
    );
    const jsonRes = await res.json();
    setData(jsonRes);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Container>
      {data.map((block, i) => {
        const rows: IRow[] = Object.values(block);

        return (
          <div key={i}>
            {rows.map((row, i) => (
              <Row {...row} key={i} />
            ))}
          </div>
        );
      })}
    </Container>
  );
};

export default App;
