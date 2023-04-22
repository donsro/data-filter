import { useState, useEffect } from "react";

import Controls from "./controls";
import DataFilter from "../../services/data-filter";
import DataView from "./data-view";

import dataIntact from "../../data.json";

export default function () {
  const [data, setData] = useState(dataIntact);
  const [filter, setFilter] = useState(new Map());

  useEffect(() => setData(DataFilter(dataIntact, filter)), [filter]);

  //() => setFilter((prev) => new Map(prev.clear()))

  return (
    <>
      <div className="clearAll">
        <button onClick={() => setFilter((prev) => new Map(prev.clear()))}>
          Clear all filters
        </button>
      </div>
      <table className="data-table">
        <Controls filter={filter} setFilter={setFilter} />
        <DataView data={data} />
      </table>
    </>
  );
}
