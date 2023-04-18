import { useState, useEffect } from "react";

import Controls from "./components/controls";
import DataView from "./components/data-view";
import DataFilter from "./services/data-filter";

import "./styles.css";
import dataIntact from "./data.json";

export default function () {
  const [data, setData] = useState(dataIntact);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    setData(DataFilter(dataIntact, filter));
  }, [filter]);

  return (
    <main className="container">
      <h1>Hello Data!</h1>
      <Controls filter={filter} setFilter={setFilter} />
      <DataView data={data} />
    </main>
  );
}
